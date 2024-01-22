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
  provideSpecificCacheTagsFromRelevantAddresses
} from '@superfluid-finance/sdk-redux'

import { CacheTime } from '../cacheTime'
import { Pool, PoolQueryHandler } from '../entities/pool/pool'
import {
  PoolMember,
  PoolMemberQueryHandler
} from '../entities/poolMember/poolMember'
import { GdaSubgraphEndpointBuilder } from '../gdaSubgraphEndpointBuilder'
import {
  PoolMemberQuery,
  PoolMembersQuery,
  PoolQuery,
  PoolsQuery
} from './entityArgs'

export const createEntityEndpoints = (builder: GdaSubgraphEndpointBuilder) => {
  // NOTE: Ignoring prettier because longer lines are more readable here.
  // prettier-ignore
  return {
        pool: get<Pool, PoolQuery>(builder, new PoolQueryHandler()),
        pools: list<Pool, PoolsQuery>(builder, new PoolQueryHandler()),
        poolMember: get<PoolMember, PoolMemberQuery>(builder, new PoolMemberQueryHandler()),
        poolMembers: list<PoolMember, PoolMembersQuery>(builder, new PoolMemberQueryHandler()),
    };
}

/**
 * Creates "get" endpoint.
 */
function get<
  TReturn extends ILightEntity,
  TQuery extends { chainId: number } & SubgraphGetQuery
>(
  builder: GdaSubgraphEndpointBuilder,
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
  builder: GdaSubgraphEndpointBuilder,
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
