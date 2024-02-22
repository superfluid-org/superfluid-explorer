import { SubgraphEndpointBuilder } from '@superfluid-finance/sdk-redux'

import { createEntityEndpoints } from './entityEndpoints'
import { createEventQueryEndpoints } from './eventEndpoints'

export const allSubgraphEndpoints = {
  endpoints: (builder: SubgraphEndpointBuilder) =>
    Object.assign(
      createEntityEndpoints(builder),
      createEventQueryEndpoints(builder)
    )
}
