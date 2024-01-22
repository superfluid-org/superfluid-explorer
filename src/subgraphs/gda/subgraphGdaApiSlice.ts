import { CreateApi } from '@reduxjs/toolkit/dist/query'
import { ModuleName } from '@reduxjs/toolkit/dist/query/apiTypes'
import { typeGuard } from '@superfluid-finance/sdk-core'
import {
  cacheTagTypes,
  getSerializeQueryArgs,
  subgraphBaseQuery
} from '@superfluid-finance/sdk-redux'

import { CacheTime } from './cacheTime'
import { GdaSubgraphEndpointBuilder } from './gdaSubgraphEndpointBuilder'
import { GdaSubgraphReducerPath } from './subgraphReducerPath'

export const createSubgraphGdaApiSlice = <T extends ModuleName>(
  createRtkQueryApi: CreateApi<T>
) =>
  createRtkQueryApi({
    keepUnusedDataFor: CacheTime.OneMinute,
    reducerPath: typeGuard<GdaSubgraphReducerPath>('superfluid_gda_subgraph'),
    baseQuery: subgraphBaseQuery(),
    tagTypes: cacheTagTypes,
    endpoints: (_builder: GdaSubgraphEndpointBuilder) => ({}),
    serializeQueryArgs: getSerializeQueryArgs()
  })

export type SubgraphGdaApiSliceEmpty = ReturnType<
  typeof createSubgraphGdaApiSlice
>
