import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { CacheTagType, SubgraphBaseQuery } from '@superfluid-finance/sdk-redux'

import { GdaSubgraphReducerPath } from './subgraphReducerPath'

export type GdaSubgraphEndpointBuilder = EndpointBuilder<
  SubgraphBaseQuery,
  CacheTagType,
  GdaSubgraphReducerPath
>
