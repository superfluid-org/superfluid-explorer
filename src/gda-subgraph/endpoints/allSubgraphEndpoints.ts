import { createEntityEndpoints } from "./entityEndpoints";
import { createEventQueryEndpoints } from "./eventEndpoints";
import { GdaSubgraphEndpointBuilder } from "../gdaSubgraphEndpointBuilder";

export const allSubgraphEndpoints = {
    endpoints: (builder: GdaSubgraphEndpointBuilder) =>
        Object.assign(createEntityEndpoints(builder), createEventQueryEndpoints(builder)),
};
