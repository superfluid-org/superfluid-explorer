import { BigNumberish } from 'ethers'
import { FC, PropsWithChildren } from 'react'

import { FlowingBalanceProps } from '../../../components/Amount/FlowingBalance'
import { Network } from '../../../redux/networks'
import { rpcApi } from '../../../redux/store'

export const AccountTokenBalance: FC<{
  network: Network
  tokenAddress: string
  accountAddress: string
  /**
   * The temporary balance used (e.g. from Subgraph) before doing the RPC call for the most accurate balance.
   */
  placeholder: FlowingBalanceProps
  children: (context: {
    balance: BigNumberish
    balanceTimestamp: number
    flowRate: BigNumberish
  }) => PropsWithChildren['children']
}> = ({ children, network, tokenAddress, accountAddress, placeholder }) => {
  const realtimeBalanceQuery = rpcApi.useRealtimeBalanceQuery({
    chainId: network.chainId,
    tokenAddress: tokenAddress,
    accountAddress: accountAddress
  })

  const balance = realtimeBalanceQuery?.data?.balance || placeholder?.balance
  const balanceTimestamp =
    realtimeBalanceQuery?.data?.balanceTimestamp ||
    placeholder?.balanceTimestamp
  const flowRate = realtimeBalanceQuery?.data?.flowRate || placeholder?.flowRate

  if (balance && balanceTimestamp && flowRate) {
    return (
      <>
        {children({
          balance,
          balanceTimestamp,
          flowRate
        })}
      </>
    )
  } else {
    return null
  }
}

export default AccountTokenBalance
