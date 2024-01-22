import {
  Address,
  BigNumber,
  BlockNumber,
  RelevantAddressesIntermediate,
  SubgraphId,
  SubgraphListQuery,
  SubgraphQueryHandler,
  Timestamp
} from '@superfluid-finance/sdk-core'

import {
  GetPoolQuery,
  Pool_Filter,
  Pool_OrderBy,
  PoolsDocument,
  PoolsQuery,
  PoolsQueryVariables
} from '../../.graphclient'

export type PoolListQuery = SubgraphListQuery<Pool_Filter, Pool_OrderBy>

export interface Pool {
  id: SubgraphId
  createdAtTimestamp: Timestamp
  createdAtBlockNumber: BlockNumber
  updatedAtTimestamp: Timestamp
  updatedAtBlockNumber: BlockNumber
  totalAmountInstantlyDistributedUntilUpdatedAt: BigNumber
  totalAmountFlowedDistributedUntilUpdatedAt: BigNumber
  totalAmountDistributedUntilUpdatedAt: BigNumber
  totalUnits: BigNumber
  totalConnectedUnits: BigNumber
  totalDisconnectedUnits: BigNumber
  /**
   * A member is any account which has more than 0 units in the pool.
   *
   */
  totalMembers: Number
  /**
   * A connected member is any account which has more than 0 units in the pool and is connected.
   *
   */
  totalConnectedMembers: Number
  /**
   * A disconnected member is any account which has more than 0 units in the pool and is not connected.
   *
   */
  totalDisconnectedMembers: Number
  adjustmentFlowRate: BigNumber
  flowRate: BigNumber
  totalBuffer: BigNumber
  token: Address
  tokenSymbol: string
  admin: Address
  poolCreatedEvent: SubgraphId
}

export type SubgraphPool = NonNullable<Required<GetPoolQuery>['pool']>

export const mapSubgraphGDAPool = (x: SubgraphPool): Pool => {
  const mappedPool = {
    ...x,
    createdAtTimestamp: Number(x.createdAtTimestamp),
    createdAtBlockNumber: Number(x.createdAtBlockNumber),
    updatedAtTimestamp: Number(x.updatedAtTimestamp),
    updatedAtBlockNumber: Number(x.updatedAtBlockNumber),
    totalAmountInstantlyDistributedUntilUpdatedAt:
      x.totalAmountInstantlyDistributedUntilUpdatedAt,
    totalAmountFlowedDistributedUntilUpdatedAt:
      x.totalAmountFlowedDistributedUntilUpdatedAt,
    totalAmountDistributedUntilUpdatedAt:
      x.totalAmountDistributedUntilUpdatedAt,
    poolCreatedEvent: x.poolCreatedEvent.id,
    admin: x.admin.id,
    token: x.token.id,
    tokenSymbol: x.token.symbol
  }

  return mappedPool
}

export class PoolQueryHandler extends SubgraphQueryHandler<
  Pool,
  PoolListQuery,
  PoolsQuery,
  PoolsQueryVariables
> {
  getAddressFieldKeysFromFilter = (): {
    accountKeys: (keyof Pool_Filter)[]
    tokenKeys: (keyof Pool_Filter)[]
  } => ({
    accountKeys: ['admin'],
    tokenKeys: ['token']
  })

  getRelevantAddressesFromResultCore = (
    result: Pool
  ): RelevantAddressesIntermediate => ({
    tokens: [result.token],
    accounts: [result.admin]
  })

  mapFromSubgraphResponse = (response: PoolsQuery): Pool[] =>
    response.pools.map((pool_) => ({
      ...pool_,
      createdAtTimestamp: Number(pool_.createdAtTimestamp),
      createdAtBlockNumber: Number(pool_.createdAtBlockNumber),
      updatedAtTimestamp: Number(pool_.updatedAtTimestamp),
      updatedAtBlockNumber: Number(pool_.updatedAtBlockNumber),
      totalAmountInstantlyDistributedUntilUpdatedAt:
        pool_.totalAmountInstantlyDistributedUntilUpdatedAt,
      totalAmountFlowedDistributedUntilUpdatedAt:
        pool_.totalAmountFlowedDistributedUntilUpdatedAt,
      totalAmountDistributedUntilUpdatedAt:
        pool_.totalAmountDistributedUntilUpdatedAt,
      poolCreatedEvent: pool_.poolCreatedEvent.id,
      admin: pool_.admin.id,
      token: pool_.token.id,
      tokenSymbol: pool_.token.symbol
    }))

  requestDocument = PoolsDocument
}
