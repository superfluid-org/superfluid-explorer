import { Address, SuperToken__factory } from '@superfluid-finance/sdk-core'
import { getFramework, RpcEndpointBuilder } from '@superfluid-finance/sdk-redux'

export interface EnabledForwarder {
  address: string
  name: string
  description: string
}

export const adhocRpcEndpoints = {
  endpoints: (builder: RpcEndpointBuilder) => ({
    enabledForwarders: builder.query<
      EnabledForwarder[],
      { chainId: number; forwarders: Array<{ address: string; name: string; description: string }> }
    >({
      queryFn: async ({ chainId, forwarders }) => {
        const framework = await getFramework(chainId)
        
        const enabledForwarders: EnabledForwarder[] = []

        // Check each forwarder against the governance contract
        for (const forwarder of forwarders) {
          try {
            // Query governance contract's isTrustedForwarder method
            // isTrustedForwarder(host, superToken, forwarder)
            // For protocol-wide forwarders, superToken = 0x0
            const isEnabled = await framework.contracts.governance.isTrustedForwarder(
              framework.contracts.host.address,
              '0x0000000000000000000000000000000000000000',
              forwarder.address
            )
            
            if (isEnabled) {
              enabledForwarders.push(forwarder)
            }
          } catch (e) {
            // Forwarder check failed, skip it
            console.warn(`Failed to check forwarder ${forwarder.name}:`, e)
          }
        }

        return {
          data: enabledForwarders
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
