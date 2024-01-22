import {
  Address,
  BigNumber,
  BlockNumber,
  SubgraphId,
  Timestamp
} from '@superfluid-finance/sdk-core'

export type EventBase = {
  id: SubgraphId
  blockNumber: BlockNumber
  transactionHash: string
  gasPrice: BigNumber
  order: number
  timestamp: Timestamp
  logIndex: number
}

export interface PoolMemberUnitsUpdatedEvent extends EventBase {
  name: 'MemberUnitsUpdated'
  token: Address
  poolMember: Address
  pool: Address
  id: SubgraphId
  units: string
  totalUnits: string
}

export interface InstantDistributionUpdatedEvent extends EventBase {
  name: 'InstantDistributionUpdated'
  id: SubgraphId
  actualAmount: string
  requestedAmount: string
  operator: Address
  pool: Address
  poolDistributor: Address
  token: Address
  // totalConnectedUnits: string
  // totalDisconnectedUnits: string
}

export interface FlowDistributionUpdatedEvent extends EventBase {
  name: 'FlowDistributionUpdated'
  id: SubgraphId
  adjustmentFlowRate: string
  adjustmentFlowRecipient: Address
  newDistributorToPoolFlowRate: string
  oldFlowRate: string
  newTotalDistributionFlowRate: string
  operator: Address
  pool: Address
  token: Address
  poolDistributor: Address
}

export type AccountEvents = PoolMemberUnitsUpdatedEvent | UnknownEvent

export type AllEvents = AccountEvents

export interface UnknownEvent extends EventBase {
  name: '_Unknown'
}
