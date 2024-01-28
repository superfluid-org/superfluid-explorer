import { Address } from '@superfluid-finance/sdk-core'
import { getFramework, RpcEndpointBuilder } from '@superfluid-finance/sdk-redux'
import { SuperToken__factory } from '@superfluid-finance/sdk-core'

export const adhocRpcEndpoints = {
  endpoints: (builder: RpcEndpointBuilder) => ({
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
