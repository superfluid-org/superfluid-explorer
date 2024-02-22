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
import { Pool, PoolQueryHandler } from '../entities/pool/pool'
import {
  PoolDistributor,
  PoolDistributorQueryHandler
} from '../entities/poolDistributor/poolDistributor'
import {
  PoolMember,
  PoolMemberQueryHandler
} from '../entities/poolMember/poolMember'
import {
  PoolDistributorQuery,
  PoolDistributorsQuery,
  PoolMemberQuery,
  PoolMembersQuery,
  PoolQuery,
  PoolsQuery
} from './entityArgs'

export const createEntityEndpoints = (builder: SubgraphEndpointBuilder) => {
  // NOTE: Ignoring prettier because longer lines are more readable here.
  // prettier-ignore
  return {
        pool: get<Pool, PoolQuery>(builder, new PoolQueryHandler()),
        pools: list<Pool, PoolsQuery>(builder, new PoolQueryHandler()),
        poolMember: get<PoolMember, PoolMemberQuery>(builder, new PoolMemberQueryHandler()),
        poolMembers: list<PoolMember, PoolMembersQuery>(builder, new PoolMemberQueryHandler()),
        poolDistributor: get<PoolDistributor, PoolDistributorQuery>(builder, new PoolDistributorQueryHandler()),
        poolDistributors: list<PoolDistributor, PoolDistributorsQuery>(builder, new PoolDistributorQueryHandler()),
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
    RelevantAddressProviderFromResult<TReturn>,
  cacheTime?: CacheTime
) {
  return builder.query<TReturn | null, TQuery>({
    queryFn: async (arg) => {
      const subgraphClient = await getSubgraphClient(arg.chainId)
      return {
        data: await queryHandler.get(subgraphClient, arg)
      }
    },
    providesTags: (result, _error, arg) => [
      ...createGeneralTags({ chainId: arg.chainId }),
      ...provideSpecificCacheTagsFromRelevantAddresses(
        arg.chainId,
        queryHandler.getRelevantAddressesFromResult(result)
      )
    ],
    keepUnusedDataFor: cacheTime ?? CacheTime.OneMinute
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
    RelevantAddressProviderFromFilter<TFilter>,
  cacheTime?: CacheTime
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
    ],
    keepUnusedDataFor: cacheTime ?? CacheTime.OneMinute
  })
}
