import { GdaSubgraphEndpointBuilder } from '../gdaSubgraphEndpointBuilder'
import { createEntityEndpoints } from './entityEndpoints'
import { createEventQueryEndpoints } from './eventEndpoints'

export const allSubgraphEndpoints = {
  endpoints: (builder: GdaSubgraphEndpointBuilder) =>
    Object.assign(
      createEntityEndpoints(builder),
      createEventQueryEndpoints(builder)
    )
}
