import { Address, SuperToken__factory } from '@superfluid-finance/sdk-core'
import { getFramework, getSubgraphClient, RpcEndpointBuilder } from '@superfluid-finance/sdk-redux'

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
    })
  })
}
