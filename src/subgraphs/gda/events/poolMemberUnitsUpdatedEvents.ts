import {
  RelevantAddressesIntermediate,
  SubgraphListQuery,
  SubgraphQueryHandler
} from '@superfluid-finance/sdk-core'

import {
  MemberUnitsUpdatedEvent,
  MemberUnitsUpdatedEvent_Filter,
  MemberUnitsUpdatedEvent_OrderBy,
  Pool,
  PoolMember,
  PoolMemberUnitsUpdatedEventsDocument,
  PoolMemberUnitsUpdatedEventsQuery,
  PoolMemberUnitsUpdatedEventsQueryVariables
} from '../.graphclient'
import { PoolMemberUnitsUpdatedEvent } from '../events'

export type PoolMemberUnitsUpdatedEventListQuery = SubgraphListQuery<
  MemberUnitsUpdatedEvent_Filter,
  MemberUnitsUpdatedEvent_OrderBy
>

export class PoolMemberUnitsUpdatedEventQueryHandler extends SubgraphQueryHandler<
  PoolMemberUnitsUpdatedEvent,
  PoolMemberUnitsUpdatedEventListQuery,
  PoolMemberUnitsUpdatedEventsQuery,
  PoolMemberUnitsUpdatedEventsQueryVariables
> {
  getAddressFieldKeysFromFilter = (): {
    accountKeys: (keyof MemberUnitsUpdatedEvent_Filter)[]
    tokenKeys: (keyof MemberUnitsUpdatedEvent_Filter)[]
  } => ({
    accountKeys: ['poolMember', 'pool'],
    tokenKeys: ['token']
  })

  getRelevantAddressesFromResultCore(
    result: PoolMemberUnitsUpdatedEvent
  ): RelevantAddressesIntermediate {
    return {
      accounts: [result.poolMember, result.pool],
      tokens: [result.token]
    }
  }

  mapFromSubgraphResponse(
    response: PoolMemberUnitsUpdatedEventsQuery
  ): PoolMemberUnitsUpdatedEvent[] {
    return mapGetAllEventsQueryEvent(
      response.memberUnitsUpdatedEvents
    ) as PoolMemberUnitsUpdatedEvent[]
  }
  requestDocument = PoolMemberUnitsUpdatedEventsDocument
}
function mapGetAllEventsQueryEvent(
  memberUnitsUpdatedEvents: Array<
    { __typename: 'MemberUnitsUpdatedEvent' } & Pick<
      MemberUnitsUpdatedEvent,
      | 'id'
      | 'units'
      | 'token'
      | 'timestamp'
      | 'blockNumber'
      | 'transactionHash'
      | 'gasPrice'
      | 'order'
      | 'logIndex'
      | 'totalUnits'
    > & { poolMember: Pick<PoolMember, 'id'>; pool: Pick<Pool, 'id'> }
  >
): PoolMemberUnitsUpdatedEvent[] {
  return memberUnitsUpdatedEvents.map((e) => {
    return {
      ...e,
      name: 'MemberUnitsUpdated',
      id: e.id,
      blockNumber: Number(e.blockNumber),
      order: Number(e.order),
      timestamp: Number(e.timestamp),
      logIndex: Number(e.logIndex),
      transactionHash: e.transactionHash,
      gasPrice: e.gasPrice,
      token: e.token,
      pool: e.pool.id,
      poolMember: e.poolMember.id,
      units: e.units
    } as PoolMemberUnitsUpdatedEvent
  })
}
