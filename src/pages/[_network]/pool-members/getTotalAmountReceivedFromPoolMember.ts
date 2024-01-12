import { BigNumber } from 'ethers'
import { Pool } from '../../../subgraphs/gda/entities/pool/pool'
import { PoolMember } from '../../../subgraphs/gda/entities/poolMember/poolMember'
import { useMemo } from 'react'

export const useTotalAmountRecivedFromPoolMember = (
  member: PoolMember | null | undefined,
  pool: Pool | null | undefined
) => {
  return useMemo(() => {
    if (!member || !pool) {
      return undefined
    }
    return getTotalAmountReceivedFromPoolMember(member, pool)
  }, [member, pool])
}

export const getTotalAmountReceivedFromPoolMember = (
  member: PoolMember,
  pool: Pool
): {
  memberCurrentTotalAmountReceived: BigNumber
  memberFlowRate: BigNumber
  timestamp: number
} => {
  // todo: optimize

  const currentTimestamp = Math.round(Date.now() / 1000)

  const poolCurrentTotalAmountDistributedDelta = BigNumber.from(
    pool.flowRate
  ).mul(currentTimestamp - pool.updatedAtTimestamp)

  const poolCurrentTotalAmountDistributed = BigNumber.from(
    pool.totalAmountDistributedUntilUpdatedAt
  ).add(poolCurrentTotalAmountDistributedDelta)

  const memberCurrentTotalAmountReceivedDelta =
    poolCurrentTotalAmountDistributed
      .sub(member.poolTotalAmountDistributedUntilUpdatedAt)
      .mul(pool.totalUnits)
      .div(member.units)

  const memberCurrentTotalAmountReceived = BigNumber.from(
    member.poolTotalAmountDistributedUntilUpdatedAt
  ).add(memberCurrentTotalAmountReceivedDelta)

  const memberFlowRate = BigNumber.from(pool.flowRate)
    .mul(pool.totalUnits)
    .div(member.units)

  return {
    memberCurrentTotalAmountReceived,
    memberFlowRate: memberFlowRate,
    timestamp: currentTimestamp,
  }
}
