import { SubgraphEndpointBuilder } from '@superfluid-finance/sdk-redux'

import { createEventQueryEndpoints } from './eventEndpoints'

export const allGdaSubgraphEndpoints = {
  endpoints: (builder: SubgraphEndpointBuilder) =>
    createEventQueryEndpoints(builder)
}
