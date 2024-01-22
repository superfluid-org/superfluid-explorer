import {
  Account,
  RelevantAddressesIntermediate,
  SubgraphListQuery,
  SubgraphQueryHandler
} from '@superfluid-finance/sdk-core'

import {
  FlowDistributionUpdatedEvent,
  FlowDistributionUpdatedEvent_Filter,
  FlowDistributionUpdatedEvent_OrderBy,
  FlowDistributionUpdatedEventsDocument,
  FlowDistributionUpdatedEventsQuery,
  FlowDistributionUpdatedEventsQueryVariables,
  Pool
} from '../.graphclient'
import { FlowDistributionUpdatedEvent as PoolFlowDistributionUpdatedEvent } from '../events'

export type FlowDistributionUpdatedEventListQuery = SubgraphListQuery<
  FlowDistributionUpdatedEvent_Filter,
  FlowDistributionUpdatedEvent_OrderBy
>

export class FlowDistributionUpdatedEventQueryHandler extends SubgraphQueryHandler<
  PoolFlowDistributionUpdatedEvent,
  FlowDistributionUpdatedEventListQuery,
  FlowDistributionUpdatedEventsQuery,
  FlowDistributionUpdatedEventsQueryVariables
> {
  getAddressFieldKeysFromFilter = (): {
    accountKeys: (keyof FlowDistributionUpdatedEvent_Filter)[]
    tokenKeys: (keyof FlowDistributionUpdatedEvent_Filter)[]
  } => ({
    accountKeys: ['operator', 'pool'],
    tokenKeys: ['token']
  })

  getRelevantAddressesFromResultCore(
    result: PoolFlowDistributionUpdatedEvent
  ): RelevantAddressesIntermediate {
    return {
      accounts: [result.operator, result.pool, result.poolDistributor],
      tokens: [result.token]
    }
  }

  mapFromSubgraphResponse(
    response: FlowDistributionUpdatedEventsQuery
  ): PoolFlowDistributionUpdatedEvent[] {
    return mapGetAllEventsQueryEvent(
      response.flowDistributionUpdatedEvents
    ) as PoolFlowDistributionUpdatedEvent[]
  }
  requestDocument = FlowDistributionUpdatedEventsDocument
}
function mapGetAllEventsQueryEvent(
  flowDistributionUpdatedEvents: Array<
    { __typename: 'FlowDistributionUpdatedEvent' } & Pick<
      FlowDistributionUpdatedEvent,
      | 'id'
      | 'adjustmentFlowRate'
      | 'adjustmentFlowRecipient'
      | 'newDistributorToPoolFlowRate'
      | 'oldFlowRate'
      | 'newTotalDistributionFlowRate'
      | 'operator'
      | 'token'
      | 'blockNumber'
      | 'transactionHash'
      | 'gasPrice'
      | 'order'
      | 'timestamp'
      | 'logIndex'
    > & {
        pool: Pick<Pool, 'id'>
        poolDistributor: {
          account: Pick<Account, 'id'>
        }
      }
  >
): PoolFlowDistributionUpdatedEvent[] {
  return flowDistributionUpdatedEvents.map((e) => {
    return {
      ...e,
      name: 'FlowDistributionUpdated',
      id: e.id,
      blockNumber: Number(e.blockNumber),
      transactionHash: e.transactionHash,
      gasPrice: e.gasPrice,
      order: Number(e.order),
      timestamp: Number(e.timestamp),
      logIndex: Number(e.logIndex),
      adjustmentFlowRate: e.adjustmentFlowRate,
      newDistributorToPoolFlowRate: e.newDistributorToPoolFlowRate,
      oldFlowRate: e.oldFlowRate,
      operator: e.operator,
      pool: e.pool.id,
      adjustmentFlowRecipient: e.adjustmentFlowRecipient,
      poolDistributor: e.poolDistributor.account.id,
      token: e.token,
      newTotalDistributionFlowRate: e.newTotalDistributionFlowRate
    } as PoolFlowDistributionUpdatedEvent
  })
}
