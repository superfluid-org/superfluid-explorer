import { BigNumber, BigNumberish } from 'ethers'
import { FC, PropsWithChildren, useMemo } from 'react'
import { useReadContract, useReadContracts } from 'wagmi'
import { superfluidPoolABI } from './superfluidPoolABI'
import { Address } from 'viem'

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

// export const PoolMemberTotalAmountReceived: FC<{
//   member: PoolMemberInput
//   pool: PoolInput
//   children: (
//     output: ReturnType<typeof getTotalAmountReceivedForPoolMember>
//   ) => PropsWithChildren['children']
// }> = ({ member, pool, children }) => {
//   const output = useTotalAmountRecivedFromPoolMember(member, pool)
//   if (!output) {
//     return null
//   }
//   return <>{children(output)}</>
// }

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
    // const output = useTotalAmountRecivedFromPoolMember(member, pool)
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

// export const getTotalAmountReceivedForPoolMember = (
//   member: PoolMemberInput,
//   pool: PoolInput
// ): {
//   memberCurrentTotalAmountReceived: BigNumber
//   memberFlowRate: BigNumber
//   timestamp: number
// } => {
//   const currentTimestamp = Math.round(Date.now() / 1000)
//   const memberUnits = BigNumber.from(member.units)
//   const poolUnits = BigNumber.from(pool.totalUnits)

//   if (memberUnits.isZero()) {
//     return {
//       memberCurrentTotalAmountReceived: BigNumber.from(
//         member.totalAmountReceivedUntilUpdatedAt
//       ),
//       memberFlowRate: BigNumber.from(0),
//       timestamp: currentTimestamp
//     }
//   }

//   const poolCurrentTotalAmountDistributedDelta = BigNumber.from(
//     pool.flowRate
//   ).mul(currentTimestamp - pool.updatedAtTimestamp)

//   const poolCurrentTotalAmountDistributed = BigNumber.from(
//     pool.totalAmountDistributedUntilUpdatedAt
//   ).add(poolCurrentTotalAmountDistributedDelta)

//   const memberCurrentTotalAmountReceivedDelta =
//     poolCurrentTotalAmountDistributed
//       .sub(member.poolTotalAmountDistributedUntilUpdatedAt)
//       .mul(memberUnits)
//       .div(poolUnits)

//   const memberCurrentTotalAmountReceived = BigNumber.from(
//     member.totalAmountReceivedUntilUpdatedAt
//   ).add(memberCurrentTotalAmountReceivedDelta)

//   const memberFlowRate = BigNumber.from(pool.flowRate)
//     .mul(memberUnits)
//     .div(poolUnits)

//   return {
//     memberCurrentTotalAmountReceived,
//     memberFlowRate: memberFlowRate,
//     timestamp: currentTimestamp
//   }
// }
