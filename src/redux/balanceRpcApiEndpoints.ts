import { SuperToken__factory } from '@superfluid-finance/sdk-core'
import { getFramework, RpcEndpointBuilder } from '@superfluid-finance/sdk-redux'
import { BigNumber } from 'ethers'

import { findNetworkOrThrow } from '../utils/findNetwork'
import { networks } from './networks'

export type BalanceQueryParams = {
  chainId: number
  tokenAddress: string
  accountAddress: string
}

export type RealtimeBalance = {
  balance: string
  balanceTimestamp: number
  flowRate: string
}

export const balanceRpcApiEndpoints = {
  endpoints: (builder: RpcEndpointBuilder) => ({
    realtimeBalance: builder.query<RealtimeBalance, BalanceQueryParams>({
      queryFn: async ({ accountAddress, tokenAddress, chainId }) => {
        const framework = await getFramework(chainId)
        const network = findNetworkOrThrow(networks, chainId)

        const [
          realtimeBalanceOfNowResult,
          getCfaNetFlowResult,
          getGdaNetFlowResult
        ] = await Promise.all([
          SuperToken__factory.connect(
            tokenAddress,
            framework.settings.provider
          ).realtimeBalanceOfNow(accountAddress),
          framework.cfaV1.getNetFlow({
            superToken: tokenAddress,
            account: accountAddress,
            providerOrSigner: framework.settings.provider
          }),
          network.supportsGDA
            ? framework.gdaV1.getNetFlow({
                token: tokenAddress,
                account: accountAddress,
                providerOrSigner: framework.settings.provider
              })
            : BigNumber.from(0)
        ])

        const mappedResult: RealtimeBalance = {
          balance: realtimeBalanceOfNowResult[0].toString(),
          balanceTimestamp: realtimeBalanceOfNowResult[3].toNumber(),
          flowRate: BigNumber.from(getCfaNetFlowResult)
            .add(BigNumber.from(getGdaNetFlowResult))
            .toString()
        }

        return {
          data: mappedResult
        }
      },
      providesTags: (_result, _error, arg) => [
        {
          type: 'GENERAL',
          id: arg.chainId // TODO(KK): Could be made more specific.
        }
      ]
    })
  })
}
