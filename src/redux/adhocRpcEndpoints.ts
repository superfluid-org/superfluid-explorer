import { Address, SuperToken__factory } from '@superfluid-finance/sdk-core'
import { getFramework, getSubgraphClient, RpcEndpointBuilder } from '@superfluid-finance/sdk-redux'
import { BigNumber, Contract } from 'ethers'

export interface EnabledForwarder {
  address: string
  name: string
  description: string
}

// Known forwarder metadata for display names and descriptions
const KNOWN_FORWARDERS: Record<string, { name: string; description: string }> = {
  // CFAv1Forwarder is deployed at different addresses per network
  // GDAv1Forwarder is deployed at different addresses per network
  // We'll match by checking metadata when available
}

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

function isZeroAddress(addr: string): boolean {
  return !addr || addr === ZERO_ADDRESS
}

const ERC20_ABI = [
  'function balanceOf(address) view returns (uint256)',
  'function decimals() view returns (uint8)',
  'function symbol() view returns (string)'
]

const YIELD_BACKEND_ABI = [
  'function ASSET_TOKEN() view returns (address)',
  'function A_TOKEN() view returns (address)',
  'function VAULT() view returns (address)'
]

function parseUnderlyingDecimals(d: unknown): number {
  return d != null ? Number(d) : 18
}

// --- Last yield withdrawal: omitted. To restore, use official Aave V3 subgraph (query
// RedeemUnderlying by user=superToken, to=surplusReceiver) for Aave/AaveETH only; Spark and
// generic ERC4626 have no suitable official subgraph. See docs/last-withdrawal-subgraph-research.md
// const WITHDRAW_SURPLUS_SELECTOR = ethers.utils
//   .hexDataSlice(ethers.utils.id('withdrawSurplusFromYieldBackend()'), 0, 4)
//   .toLowerCase()
// const EXPLORER_API_BASE: Record<number, string> = { ... }
// async function getLastWithdrawalTimestamp(chainId, tokenAddress): Promise<string | null> { ... }

async function getYieldBacking(
  yieldBackendAddress: string,
  tokenAddress: string,
  provider: { call: (tx: { to: string; data: string }) => Promise<string> }
): Promise<{
  yieldBackendType: 'Aave' | 'ERC4626'
  totalBacking: BigNumber
  underlyingDecimals: number
  underlyingSymbol: string | null
} | null> {
  const backend = new Contract(
    yieldBackendAddress,
    YIELD_BACKEND_ABI,
    provider
  )

  try {
    const aTokenAddress = await backend.A_TOKEN()
    if (aTokenAddress && !isZeroAddress(aTokenAddress)) {
      const assetAddress = await backend.ASSET_TOKEN()
      const underlying = new Contract(assetAddress, ERC20_ABI, provider)
      const aToken = new Contract(aTokenAddress, ERC20_ABI, provider)
      const [underlyingDecimals, underlyingSymbol, underlyingBal, aTokenBal] =
        await Promise.all([
          underlying.decimals().then(parseUnderlyingDecimals),
          underlying.symbol().catch(() => null),
          underlying.balanceOf(tokenAddress),
          aToken.balanceOf(tokenAddress)
        ])
      const totalBacking = BigNumber.from(underlyingBal).add(
        BigNumber.from(aTokenBal)
      )
      return {
        yieldBackendType: 'Aave',
        totalBacking,
        underlyingDecimals: Number(underlyingDecimals),
        underlyingSymbol: underlyingSymbol ?? null
      }
    }
  } catch {
    // not Aave
  }

  try {
    const vaultAddress = await backend.VAULT()
    if (vaultAddress && !isZeroAddress(vaultAddress)) {
      const assetAddress = await backend.ASSET_TOKEN()
      const underlying = new Contract(assetAddress, ERC20_ABI, provider)
      const vaultAbi = [
        'function balanceOf(address) view returns (uint256)',
        'function convertToAssets(uint256) view returns (uint256)'
      ]
      const vault = new Contract(vaultAddress, vaultAbi, provider)
      const [underlyingDecimals, underlyingSymbol, vaultShares, underlyingBal] =
        await Promise.all([
          underlying.decimals().then(parseUnderlyingDecimals),
          underlying.symbol().catch(() => null),
          vault.balanceOf(tokenAddress),
          underlying.balanceOf(tokenAddress)
        ])
      const vaultAssets = await vault.convertToAssets(vaultShares)
      const totalBacking = BigNumber.from(underlyingBal).add(
        BigNumber.from(vaultAssets)
      )
      return {
        yieldBackendType: 'ERC4626',
        totalBacking,
        underlyingDecimals: Number(underlyingDecimals),
        underlyingSymbol: underlyingSymbol ?? null
      }
    }
  } catch {
    // not ERC4626
  }

  return null
}

export const adhocRpcEndpoints = {
  endpoints: (builder: RpcEndpointBuilder) => ({
    enabledForwarders: builder.query<
      EnabledForwarder[],
      {
        chainId: number
        knownForwarders?: Array<{ address: string; name: string; description: string }>
      }
    >({
      queryFn: async ({ chainId, knownForwarders = [] }) => {
        try {
          const client = await getSubgraphClient(chainId)

          // Query TrustedForwarderChangedEvents sorted by timestamp
          const result = await client.request<{
            trustedForwarderChangedEvents: Array<{
              forwarder: string
              enabled: boolean
              timestamp: string
            }>
          }>(`
            query {
              trustedForwarderChangedEvents(
                orderBy: timestamp
                orderDirection: asc
              ) {
                forwarder
                enabled
                timestamp
              }
            }
          `)

          // Build a map of forwarder address -> latest enabled state
          // Events are sorted by timestamp ASC, so later events overwrite earlier ones
          // This correctly handles: enabled -> disabled -> enabled scenarios
          const forwarderStates = new Map<string, boolean>()
          for (const event of result.trustedForwarderChangedEvents) {
            const normalizedAddress = event.forwarder.toLowerCase()
            forwarderStates.set(normalizedAddress, event.enabled)
          }

          // Create lookup map for known forwarders (case-insensitive)
          const knownForwarderMap = new Map(
            knownForwarders.map((f) => [f.address.toLowerCase(), f])
          )

          // Return ALL enabled forwarders (filtered to enabled=true only)
          // Map ensures deduplication (unique addresses only)
          const enabledForwarders: EnabledForwarder[] = []
          const seenAddresses = new Set<string>() // Extra safety for deduplication
          
          for (const [address, enabled] of forwarderStates.entries()) {
            // Only include if final state is enabled=true
            if (enabled && !seenAddresses.has(address)) {
              seenAddresses.add(address)
              const known = knownForwarderMap.get(address)
              enabledForwarders.push({
                address,
                name: known?.name || 'Unknown Forwarder',
                description:
                  known?.description || 'Trusted forwarder for gas-less transactions'
              })
            }
          }

          return {
            data: enabledForwarders
          }
        } catch (e) {
          console.error('Failed to query enabled forwarders:', e)
          return {
            data: []
          }
        }
      },
      providesTags: (_result, _error, arg) => [
        {
          type: 'GENERAL',
          id: `forwarders-${arg.chainId}`
        }
      ]
    }),
    minimumDeposit: builder.query<
      string,
      { tokenAddress: Address; chainId: number }
    >({
      queryFn: async ({ tokenAddress, chainId }) => {
        const framework = await getFramework(chainId)

        const minimumDeposit = await framework.governance.getMinimumDeposit({
          token: tokenAddress,
          providerOrSigner: framework.settings.provider
        })

        return {
          data: minimumDeposit
        }
      },
      providesTags: (_result, _error, arg) => [
        {
          type: 'GENERAL',
          id: arg.chainId // TODO(KK): Could be made more specific.
        }
      ]
    }),
    protocolVersion: builder.query<string, { chainId: number }>({
      queryFn: async ({ chainId }) => {
        const framework = await getFramework(chainId)

        const protocolVersion = await framework.contracts.resolver
          .connect(framework.settings.provider)
          .get('versionString.v1')

        return {
          data: protocolVersion
        }
      },
      providesTags: (_result, _error, arg) => [
        {
          type: 'GENERAL',
          id: arg.chainId // TODO(KK): Could be made more specific.
        }
      ]
    }),
    totalSupply: builder.query<
      string,
      { chainId: number; tokenAddress: string }
    >({
      queryFn: async ({ chainId, tokenAddress }) => {
        const framework = await getFramework(chainId)

        const totalSupply = await SuperToken__factory.connect(
          tokenAddress,
          framework.settings.provider
        ).totalSupply()

        return {
          data: totalSupply.toString()
        }
      },
      providesTags: (_result, _error, arg) => [
        {
          type: 'GENERAL',
          id: arg.chainId
        }
      ]
    }),

    yieldBackendInfo: builder.query<
      {
        yieldBackendAddress: string | null
        yieldBackendType: 'Aave' | 'ERC4626' | null
        accruedYieldWei: string | null
        underlyingDecimals: number | null
        underlyingSymbol: string | null
        /** Omitted for now; restore via Aave V3 subgraph for Aave/AaveETH. See docs/last-withdrawal-subgraph-research.md */
        lastWithdrawal: string | null
      },
      { chainId: number; tokenAddress: string }
    >({
      queryFn: async ({ chainId, tokenAddress }) => {
        const empty = {
          yieldBackendAddress: null,
          yieldBackendType: null,
          accruedYieldWei: null,
          underlyingDecimals: null,
          underlyingSymbol: null,
          lastWithdrawal: null
        }
        try {
          const framework = await getFramework(chainId)
          const provider = framework.settings.provider

          const superTokenAbi = [
            'function getYieldBackend() view returns (address)',
            'function toUnderlyingAmount(uint256) view returns (uint256, uint256)',
            'function totalSupply() view returns (uint256)'
          ]
          const superToken = new Contract(tokenAddress, superTokenAbi, provider)

          let yieldBackendAddress: string
          try {
            yieldBackendAddress = await superToken.getYieldBackend()
          } catch {
            return { data: empty }
          }
          if (isZeroAddress(yieldBackendAddress)) {
            return { data: empty }
          }

          const totalSupply = await superToken.totalSupply()
          const [normalizedSupply] = await superToken.toUnderlyingAmount(
            totalSupply
          )

          const backing = await getYieldBacking(
            yieldBackendAddress,
            tokenAddress,
            provider
          )
          // lastWithdrawal omitted; would require Aave V3 subgraph for Aave/AaveETH (see docs)

          if (!backing) {
            return {
              data: {
                yieldBackendAddress,
                yieldBackendType: null,
                accruedYieldWei: null,
                underlyingDecimals: null,
                underlyingSymbol: null,
                lastWithdrawal: null
              }
            }
          }

          const { yieldBackendType, totalBacking, underlyingDecimals, underlyingSymbol } = backing
          const accrued = totalBacking.sub(BigNumber.from(normalizedSupply))
          const accruedYieldWei =
            accrued.isNegative() || accrued.isZero()
              ? '0'
              : accrued.toString()

          return {
            data: {
              yieldBackendAddress,
              yieldBackendType,
              accruedYieldWei,
              underlyingDecimals,
              underlyingSymbol,
              lastWithdrawal: null
            }
          }
        } catch (e) {
          console.error('yieldBackendInfo query failed:', e)
          return {
            data: {
              yieldBackendAddress: null,
              yieldBackendType: null,
              accruedYieldWei: null,
              underlyingDecimals: null,
              underlyingSymbol: null,
              lastWithdrawal: null
            }
          }
        }
      },
      providesTags: (_result, _error, arg) => [
        {
          type: 'GENERAL',
          id: `yieldBackend-${arg.chainId}-${arg.tokenAddress}`
        }
      ]
    })
  })
}
