import { SubgraphGetQuery } from '@superfluid-finance/sdk-core'

import { FlowDistributionUpdatedEventListQuery } from '../events/flowDistributionUpdatedEvents'
import { InstantDistributionUpdatedEventListQuery } from '../events/instantDistributionUpdatedEvents'
import { PoolMemberUnitsUpdatedEventListQuery } from '../events/poolMemberUnitsUpdatedEvents'

export interface PoolMemberUnitsUpdatedEventQuery extends SubgraphGetQuery {
  chainId: number
}

export interface PoolMemberUnitsUpdatedEventsQuery
  extends PoolMemberUnitsUpdatedEventListQuery {
  chainId: number
}

export interface FlowDistributionUpdatedEventQuery extends SubgraphGetQuery {
  chainId: number
}

export interface FlowDistributionUpdatedEventsQuery
  extends FlowDistributionUpdatedEventListQuery {
  chainId: number
}

export interface InstantDistributionUpdatedEventQuery extends SubgraphGetQuery {
  chainId: number
}

export interface InstantDistributionUpdatedEventsQuery
  extends InstantDistributionUpdatedEventListQuery {
  chainId: number
}
