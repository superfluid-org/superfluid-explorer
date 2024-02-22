import {
  ILightEntity,
  PagedResult,
  RelevantAddressProviderFromFilter,
  RelevantAddressProviderFromResult,
  SubgraphGetQuery,
  SubgraphGetQueryHandler,
  SubgraphListQuery,
  SubgraphListQueryHandler
} from '@superfluid-finance/sdk-core'
import {
  createGeneralTags,
  getSubgraphClient,
  provideSpecificCacheTagsFromRelevantAddresses,
  SubgraphEndpointBuilder} from '@superfluid-finance/sdk-redux'

import { CacheTime } from '../cacheTime'
import {
  FlowDistributionUpdatedEvent,
  InstantDistributionUpdatedEvent,
  PoolMemberUnitsUpdatedEvent
} from '../events'
import { FlowDistributionUpdatedEventQueryHandler } from '../events/flowDistributionUpdatedEvents'
import { InstantDistributionUpdatedEventQueryHandler } from '../events/instantDistributionUpdatedEvents'
import { PoolMemberUnitsUpdatedEventQueryHandler } from '../events/poolMemberUnitsUpdatedEvents'
import {
  FlowDistributionUpdatedEventQuery,
  FlowDistributionUpdatedEventsQuery,
  InstantDistributionUpdatedEventQuery,
  InstantDistributionUpdatedEventsQuery,
  PoolMemberUnitsUpdatedEventQuery,
  PoolMemberUnitsUpdatedEventsQuery
} from './entityArgs'

export const createEventQueryEndpoints = (builder: SubgraphEndpointBuilder) => {
  // NOTE: Ignoring prettier because longer lines are more readable here.
  // prettier-ignore
  return {
      instantDistributionUpdatedEvent: get<InstantDistributionUpdatedEvent, InstantDistributionUpdatedEventQuery>(builder, new InstantDistributionUpdatedEventQueryHandler()),
      instantDistributionUpdatedEvents: list<InstantDistributionUpdatedEvent, InstantDistributionUpdatedEventsQuery>(builder, new InstantDistributionUpdatedEventQueryHandler()),
      flowDistributionUpdatedEvent: get<FlowDistributionUpdatedEvent, FlowDistributionUpdatedEventQuery>(builder, new FlowDistributionUpdatedEventQueryHandler()),
      flowDistributionUpdatedEvents: list<FlowDistributionUpdatedEvent, FlowDistributionUpdatedEventsQuery>(builder, new FlowDistributionUpdatedEventQueryHandler()),
      poolMemberUnitsUpdatedEvent: get<PoolMemberUnitsUpdatedEvent, PoolMemberUnitsUpdatedEventQuery>(builder, new PoolMemberUnitsUpdatedEventQueryHandler()),
      poolMemberUnitsUpdatedEvents: list<PoolMemberUnitsUpdatedEvent, PoolMemberUnitsUpdatedEventsQuery>(builder, new PoolMemberUnitsUpdatedEventQueryHandler()),
    };
}

/**
 * Creates "get" endpoint.
 */
function get<
  TReturn extends ILightEntity,
  TQuery extends { chainId: number } & SubgraphGetQuery
>(
  builder: SubgraphEndpointBuilder,
  queryHandler: SubgraphGetQueryHandler<TReturn> &
    RelevantAddressProviderFromResult<TReturn>
) {
  return builder.query<TReturn | null, TQuery>({
    queryFn: async (arg) => {
      const subgraphClient = await getSubgraphClient(arg.chainId)
      return {
        data: await queryHandler.get(subgraphClient, arg)
      }
    },
    keepUnusedDataFor: CacheTime.Forever // Events don't change (unless re-org but that's handled by invalidating whole cache anyway).
  })
}

/**
 * Creates "list" endpoint.
 */
function list<
  TReturn extends ILightEntity,
  TQuery extends { chainId: number } & SubgraphListQuery<TFilter, TOrderBy>,
  TFilter extends { [key: string]: unknown } = NonNullable<TQuery['filter']>,
  TOrderBy extends string = NonNullable<TQuery['order']>['orderBy']
>(
  builder: SubgraphEndpointBuilder,
  queryHandler: SubgraphListQueryHandler<TReturn, TQuery, TFilter> &
    RelevantAddressProviderFromFilter<TFilter>
) {
  return builder.query<PagedResult<TReturn>, TQuery>({
    queryFn: async (arg) => {
      const subgraphClient = await getSubgraphClient(arg.chainId)
      return {
        data: await queryHandler.list(subgraphClient, arg)
      }
    },
    providesTags: (_result, _error, arg) => [
      ...createGeneralTags({ chainId: arg.chainId }),
      ...provideSpecificCacheTagsFromRelevantAddresses(
        arg.chainId,
        queryHandler.getRelevantAddressesFromFilter(arg.filter)
      )
    ]
  })
}
