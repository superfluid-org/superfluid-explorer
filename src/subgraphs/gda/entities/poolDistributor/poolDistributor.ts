import {
  Address,
  BigNumber,
  RelevantAddressesIntermediate,
  SubgraphId,
  SubgraphListQuery,
  SubgraphQueryHandler,
  Timestamp
} from '@superfluid-finance/sdk-core'

import {
  PoolDistributor_Filter,
  PoolDistributor_OrderBy,
  PoolDistributorsDocument,
  PoolDistributorsQuery,
  PoolDistributorsQueryVariables
} from '../../.graphclient'

export interface PoolDistributor {
  id: SubgraphId
  createdAtTimestamp: Timestamp
  createdAtBlockNumber: Timestamp
  updatedAtTimestamp: Timestamp
  updatedAtBlockNumber: Timestamp
  totalBuffer: BigNumber
  totalAmountInstantlyDistributedUntilUpdatedAt: BigNumber
  totalAmountFlowedDistributedUntilUpdatedAt: BigNumber
  totalAmountDistributedUntilUpdatedAt: BigNumber
  flowRate: BigNumber
  account: Address
  pool: Address
  token: Address
}

export type PoolDistributorsListQuery = SubgraphListQuery<
  PoolDistributor_Filter,
  PoolDistributor_OrderBy
>

export class PoolDistributorQueryHandler extends SubgraphQueryHandler<
  PoolDistributor,
  PoolDistributorsListQuery,
  PoolDistributorsQuery,
  PoolDistributorsQueryVariables
> {
  getAddressFieldKeysFromFilter = (): {
    accountKeys: (keyof PoolDistributor_Filter)[]
    tokenKeys: (keyof PoolDistributor_Filter)[]
  } => ({
    accountKeys: ['account', 'pool'],
    tokenKeys: []
  })

  getRelevantAddressesFromResultCore = (
    result: PoolDistributor
  ): RelevantAddressesIntermediate => ({
    tokens: [result.token],
    accounts: [result.account]
  })

  mapFromSubgraphResponse = (
    response: PoolDistributorsQuery
  ): PoolDistributor[] =>
    response.poolDistributors.map((x) => ({
      ...x,
      createdAtTimestamp: Number(x.createdAtTimestamp),
      createdAtBlockNumber: Number(x.createdAtBlockNumber),
      updatedAtTimestamp: Number(x.updatedAtTimestamp),
      updatedAtBlockNumber: Number(x.updatedAtBlockNumber),
      pool: x.pool.id,
      token: x.pool.token.id,
      account: x.account.id
    }))

  requestDocument = PoolDistributorsDocument
}
