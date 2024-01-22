import { BigNumber, BigNumberish } from 'ethers'
import { FC, PropsWithChildren, useMemo } from 'react'

type PoolMemberInput = {
  units: BigNumberish
  poolTotalAmountDistributedUntilUpdatedAt: BigNumberish
}

type PoolInput = {
  flowRate: BigNumberish
  totalAmountDistributedUntilUpdatedAt: BigNumberish
  totalUnits: BigNumberish
  updatedAtTimestamp: number
}

export const PoolMemberTotalAmountReceived: FC<{
  member: PoolMemberInput
  pool: PoolInput
  children: (
    output: ReturnType<typeof getTotalAmountReceivedFromPoolMember>
  ) => PropsWithChildren['children']
}> = ({ member, pool, children }) => {
  const output = useTotalAmountRecivedFromPoolMember(member, pool)
  if (!output) {
    return null
  }
  return <>{children(output)}</>
}

export const useTotalAmountRecivedFromPoolMember = (
  member: PoolMemberInput | null | undefined,
  pool: PoolInput | null | undefined
) => {
  return useMemo(() => {
    if (!member || !pool) {
      return undefined
    }
    return getTotalAmountReceivedFromPoolMember(member, pool)
  }, [member, pool])
}

export const getTotalAmountReceivedFromPoolMember = (
  member: PoolMemberInput,
  pool: PoolInput
): {
  memberCurrentTotalAmountReceived: BigNumber
  memberFlowRate: BigNumber
  timestamp: number
} => {
  const currentTimestamp = Math.round(Date.now() / 1000)
  const memberUnits = BigNumber.from(member.units)
  const poolUnits = BigNumber.from(pool.totalUnits)

  if (poolUnits.isZero()) {
    return {
      memberCurrentTotalAmountReceived: BigNumber.from(0),
      memberFlowRate: BigNumber.from(0),
      timestamp: currentTimestamp
    }
  }

  const poolCurrentTotalAmountDistributedDelta = BigNumber.from(
    pool.flowRate
  ).mul(currentTimestamp - pool.updatedAtTimestamp)

  const poolCurrentTotalAmountDistributed = BigNumber.from(
    pool.totalAmountDistributedUntilUpdatedAt
  ).add(poolCurrentTotalAmountDistributedDelta)

  const memberCurrentTotalAmountReceivedDelta =
    poolCurrentTotalAmountDistributed
      .sub(member.poolTotalAmountDistributedUntilUpdatedAt)
      .mul(memberUnits)
      .div(poolUnits)

  const memberCurrentTotalAmountReceived = BigNumber.from(
    member.poolTotalAmountDistributedUntilUpdatedAt
  ).add(memberCurrentTotalAmountReceivedDelta)

  const memberFlowRate = BigNumber.from(pool.flowRate)
    .mul(memberUnits)
    .div(poolUnits)

  return {
    memberCurrentTotalAmountReceived,
    memberFlowRate: memberFlowRate,
    timestamp: currentTimestamp
  }
}
