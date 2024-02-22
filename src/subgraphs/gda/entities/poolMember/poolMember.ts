import {
  Address,
  BigNumber,
  BlockNumber,
  RelevantAddressesIntermediate,
  SubgraphGetQuery,
  SubgraphId,
  SubgraphListQuery,
  SubgraphQueryHandler,
  Timestamp
} from '@superfluid-finance/sdk-core'
import { SubgraphClient } from '@superfluid-finance/sdk-core/dist/module/subgraph/SubgraphClient'

import {
  PoolMember_Filter,
  PoolMember_OrderBy,
  PoolMembersDocument,
  PoolMembersQuery,
  PoolMembersQueryVariables
} from '../../.graphclient'

export interface PoolMember {
  id: SubgraphId
  createdAtBlockNumber: BlockNumber
  createdAtTimestamp: Timestamp
  updatedAtTimestamp: Timestamp
  updatedAtBlockNumber: BlockNumber
  units: BigNumber
  account: Address
  isConnected: Boolean
  totalAmountClaimed: BigNumber
  token: Address
  totalAmountReceivedUntilUpdatedAt: BigNumber
  poolTotalAmountDistributedUntilUpdatedAt: BigNumber
  pool: Address
}

export type PoolMembersListQuery = SubgraphListQuery<
  PoolMember_Filter,
  PoolMember_OrderBy
>

export class PoolMemberQueryHandler extends SubgraphQueryHandler<
  PoolMember,
  PoolMembersListQuery,
  PoolMembersQuery,
  PoolMembersQueryVariables
> {
  getAddressFieldKeysFromFilter = (): {
    accountKeys: (keyof PoolMember_Filter)[]
    tokenKeys: (keyof PoolMember_Filter)[]
  } => ({
    accountKeys: ['account', 'pool'],
    tokenKeys: []
  })

  getRelevantAddressesFromResultCore = (
    result: PoolMember
  ): RelevantAddressesIntermediate => ({
    tokens: [result.token],
    accounts: [result.account]
  })

  mapFromSubgraphResponse = (response: PoolMembersQuery): PoolMember[] =>
    response.poolMembers.map((x) => ({
      ...x,
      account: x.account.id,
      createdAtTimestamp: Number(x.createdAtTimestamp),
      createdAtBlockNumber: Number(x.createdAtBlockNumber),
      updatedAtTimestamp: Number(x.updatedAtTimestamp),
      updatedAtBlockNumber: Number(x.updatedAtBlockNumber),
      pool: x.pool.id,
      token: x.pool.token.id
    }))

  requestDocument = PoolMembersDocument
}
