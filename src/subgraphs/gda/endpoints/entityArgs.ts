import { SubgraphGetQuery } from '@superfluid-finance/sdk-core'

import { PoolListQuery } from '../entities/pool/pool'
import { PoolDistributorsListQuery } from '../entities/poolDistributor/poolDistributor'
import { PoolMembersListQuery } from '../entities/poolMember/poolMember'
import { FlowDistributionUpdatedEventListQuery } from '../events/flowDistributionUpdatedEvents'
import { InstantDistributionUpdatedEventListQuery } from '../events/instantDistributionUpdatedEvents'
import { PoolMemberUnitsUpdatedEventListQuery } from '../events/poolMemberUnitsUpdatedEvents'

export interface PoolQuery extends SubgraphGetQuery {
  chainId: number
}

export interface PoolsQuery extends PoolListQuery {
  chainId: number
}

export interface PoolMemberQuery extends SubgraphGetQuery {
  chainId: number
}

export interface PoolMembersQuery extends PoolMembersListQuery {
  chainId: number
}

export interface PoolDistributorQuery extends SubgraphGetQuery {
  chainId: number
}

export interface PoolDistributorsQuery extends PoolDistributorsListQuery {
  chainId: number
}

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
