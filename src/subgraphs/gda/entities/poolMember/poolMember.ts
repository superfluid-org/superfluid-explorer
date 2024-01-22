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
  admin: Address
  isConnected: Boolean
  totalAmountClaimed: BigNumber
  token: Address
  tokenSymbol: string
  poolTotalUnits: BigNumber
  poolFlowRateCurrent: BigNumber
  pool: SubgraphId
  totalAmountReceivedUntilUpdatedAt: BigNumber
  poolTotalAmountDistributedUntilUpdatedAt: BigNumber
  poolUpdatedAtTimestamp: Timestamp
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
    accountKeys: ['account'],
    tokenKeys: []
  })

  async get(
    subgraphClient: SubgraphClient,
    query: SubgraphGetQuery
  ): Promise<PoolMember | null> {
    if (!query.id) {
      return null
    }

    const response = await this.querySubgraph(subgraphClient, {
      where: {
        id: query.id
      },
      skip: 0,
      take: 1,
      block: query.block
    } as unknown as PoolMembersQueryVariables)

    return this.mapFromSubgraphResponse(response)[0] ?? null
  }

  getRelevantAddressesFromResultCore = (
    result: PoolMember
  ): RelevantAddressesIntermediate => ({
    tokens: [result.token],
    accounts: [result.admin, result.account]
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
      poolFlowRateCurrent: x.pool.flowRate,
      poolTotalUnits: x.pool.totalUnits,
      poolUpdatedAtTimestamp: Number(x.pool.updatedAtTimestamp),
      token: x.pool.token.id,
      tokenSymbol: x.pool.token.symbol,
      admin: x.pool.admin.id
    }))

  requestDocument = PoolMembersDocument
}
