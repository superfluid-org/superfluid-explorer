import { BigNumber, BigNumberish } from 'ethers'
import { FC, PropsWithChildren, useMemo } from 'react'
import { Address } from 'viem'
import { useReadContracts } from 'wagmi'

import { superfluidPoolABI } from './superfluidPoolABI'

export type PoolMemberInput = {
  units: BigNumberish
  poolTotalAmountDistributedUntilUpdatedAt: BigNumberish
  totalAmountReceivedUntilUpdatedAt: BigNumberish
}

export type PoolInput = {
  flowRate: BigNumberish
  totalAmountDistributedUntilUpdatedAt: BigNumberish
  totalUnits: BigNumberish
  updatedAtTimestamp: number
}

type Output = {
  memberCurrentTotalAmountReceived: BigNumber
  memberFlowRate: BigNumber
  timestamp: number
}

export const PoolMemberTotalAmountReceived: FC<{
  chainId: number
  memberAddress: string | Address | undefined
  poolAddress: string | Address | undefined
  children: (output: Output) => PropsWithChildren['children']
}> = ({ chainId, memberAddress, poolAddress, children }) => {
  const output = useTotalAmountReceivedFromPoolMember(
    chainId,
    memberAddress,
    poolAddress
  )
  if (output) {
    return <>{children(output)}</>
  } else {
    return null
  }
}

export const useTotalAmountReceivedFromPoolMember = (
  chainId: number,
  memberAddress?: string | Address,
  poolAddress?: string | Address
) => {
  const { data, dataUpdatedAt } = useReadContracts({
    contracts: [
      {
        chainId: chainId,
        address: poolAddress as Address,
        abi: superfluidPoolABI,
        functionName: 'getTotalAmountReceivedByMember',
        args: [memberAddress as Address]
      },
      {
        chainId: chainId,
        address: poolAddress as Address,
        abi: superfluidPoolABI,
        functionName: 'getMemberFlowRate',
        args: [memberAddress as Address]
      }
    ],
    query: {
      enabled: Boolean(memberAddress && poolAddress)
    }
  })

  const [getTotalAmountReceivedByMember, getMemberFlowRate] = data ?? []

  return useMemo(() => {
    if (
      getTotalAmountReceivedByMember?.status === 'success' &&
      getMemberFlowRate?.status === 'success'
    ) {
      return {
        timestamp: Math.round(dataUpdatedAt / 1000),
        memberCurrentTotalAmountReceived: BigNumber.from(
          getTotalAmountReceivedByMember.result.toString()
        ),
        memberFlowRate: BigNumber.from(getMemberFlowRate.result.toString())
      }
    } else {
      return null
    }
  }, [getTotalAmountReceivedByMember, getMemberFlowRate])
}
