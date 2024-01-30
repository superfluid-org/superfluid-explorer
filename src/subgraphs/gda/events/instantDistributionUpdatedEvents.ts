import {
  RelevantAddressesIntermediate,
  SubgraphListQuery,
  SubgraphQueryHandler
} from '@superfluid-finance/sdk-core'

import {
  InstantDistributionUpdatedEvent,
  InstantDistributionUpdatedEvent_Filter,
  InstantDistributionUpdatedEvent_OrderBy,
  InstantDistributionUpdatedEventsDocument,
  InstantDistributionUpdatedEventsQuery,
  InstantDistributionUpdatedEventsQueryVariables,
  Pool
} from '../.graphclient'
import { InstantDistributionUpdatedEvent as PoolInstantDistributionUpdatedEvent } from '../events'

export type InstantDistributionUpdatedEventListQuery = SubgraphListQuery<
  InstantDistributionUpdatedEvent_Filter,
  InstantDistributionUpdatedEvent_OrderBy
>

export class InstantDistributionUpdatedEventQueryHandler extends SubgraphQueryHandler<
  PoolInstantDistributionUpdatedEvent,
  InstantDistributionUpdatedEventListQuery,
  InstantDistributionUpdatedEventsQuery,
  InstantDistributionUpdatedEventsQueryVariables
> {
  getAddressFieldKeysFromFilter = (): {
    accountKeys: (keyof InstantDistributionUpdatedEvent_Filter)[]
    tokenKeys: (keyof InstantDistributionUpdatedEvent_Filter)[]
  } => ({
    accountKeys: ['operator', 'pool'],
    tokenKeys: ['token']
  })

  getRelevantAddressesFromResultCore(
    result: PoolInstantDistributionUpdatedEvent
  ): RelevantAddressesIntermediate {
    return {
      accounts: [result.operator, result.pool],
      tokens: [result.token]
    }
  }

  mapFromSubgraphResponse(
    response: InstantDistributionUpdatedEventsQuery
  ): PoolInstantDistributionUpdatedEvent[] {
    return mapGetAllEventsQueryEvent(
      response.instantDistributionUpdatedEvents
    ) as PoolInstantDistributionUpdatedEvent[]
  }
  requestDocument = InstantDistributionUpdatedEventsDocument
}
function mapGetAllEventsQueryEvent(
  flowDistributionUpdatedEvents: Array<
    { __typename: 'InstantDistributionUpdatedEvent' } & Pick<
      InstantDistributionUpdatedEvent,
      | 'id'
      | 'actualAmount'
      | 'operator'
      | 'requestedAmount'
      | 'token'
      | 'blockNumber'
      | 'transactionHash'
      | 'gasPrice'
      | 'order'
      | 'timestamp'
      | 'logIndex'
    > & {
        pool: Pick<
          Pool,
          'id' | 'totalConnectedUnits' | 'totalDisconnectedUnits'
        >
        poolDistributor: {
          account: {
            id: string
          }
        }
      }
  >
): PoolInstantDistributionUpdatedEvent[] {
  return flowDistributionUpdatedEvents.map((e) => {
    return {
      ...e,
      name: 'InstantDistributionUpdated',
      id: e.id,
      blockNumber: Number(e.blockNumber),
      transactionHash: e.transactionHash,
      gasPrice: e.gasPrice,
      order: Number(e.order),
      timestamp: Number(e.timestamp),
      logIndex: Number(e.logIndex),
      pool: e.pool.id,
      poolDistributor: e.poolDistributor.account.id,
      token: e.token,
      operator: e.operator,
      actualAmount: e.actualAmount,
      requestedAmount: e.requestedAmount
    } as PoolInstantDistributionUpdatedEvent
  })
}
