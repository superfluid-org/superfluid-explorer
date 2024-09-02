// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace GdaTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
  Int8: any;
  Timestamp: any;
};

/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type Account = {
  id: Scalars['ID'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  updatedAtTimestamp: Scalars['BigInt'];
  updatedAtBlockNumber: Scalars['BigInt'];
  /**
   * Indicates whether the address/account is a super app.
   *
   */
  isSuperApp: Scalars['Boolean'];
  inflows: Array<Stream>;
  outflows: Array<Stream>;
  subscriptions: Array<IndexSubscription>;
  publishedIndexes: Array<Index>;
  pools: Array<Pool>;
  poolMemberships: Array<PoolMember>;
  sentTransferEvents: Array<TransferEvent>;
  receivedTransferEvents: Array<TransferEvent>;
  tokenUpgradedEvents: Array<TokenUpgradedEvent>;
  tokenDowngradedEvents: Array<TokenDowngradedEvent>;
  accountTokenSnapshots: Array<AccountTokenSnapshot>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountinflowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Stream_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Stream_filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountoutflowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Stream_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Stream_filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountsubscriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexSubscription_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexSubscription_filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountpublishedIndexesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Index_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Index_filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountpoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountpoolMembershipsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolMember_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolMember_filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountsentTransferEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferEvent_filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountreceivedTransferEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferEvent_filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccounttokenUpgradedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenUpgradedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenUpgradedEvent_filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccounttokenDowngradedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDowngradedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenDowngradedEvent_filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountaccountTokenSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountTokenSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountTokenSnapshot_filter>;
};

/**
 * AccountTokenSnapshot: An aggregate entity which aggregates data between an `account`'s interaction with `token`.
 *
 */
export type AccountTokenSnapshot = {
  /**
   * ID composed of: accountID-tokenID
   *
   */
  id: Scalars['ID'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  updatedAtTimestamp: Scalars['BigInt'];
  updatedAtBlockNumber: Scalars['BigInt'];
  /**
   * isLiquidationEstimateOptimistic, If `totalSubscriptionsWithUnits > 0`, it is true.
   * "Optimistic" can be thought of as conservative as it refers to the earliest time the user may be liquidated as they may receive ongoing distributions which aren't tracked by the subgraph.
   *
   */
  isLiquidationEstimateOptimistic: Scalars['Boolean'];
  /**
   * Optimistic liquidation estimation property.
   *
   */
  maybeCriticalAtTimestamp?: Maybe<Scalars['BigInt']>;
  /**
   * The count of currently open streams for an account, both incoming and outgoing for all agreements.
   *
   */
  totalNumberOfActiveStreams: Scalars['Int'];
  /**
   * The count of currently open streams for an account, both incoming and outgoing for the CFA.
   *
   */
  totalCFANumberOfActiveStreams: Scalars['Int'];
  /**
   * The count of currently open streams for an account, both incoming and outgoing for the GDA.
   *
   */
  totalGDANumberOfActiveStreams: Scalars['Int'];
  /**
   * The count of active outgoing streams from this account for all agreements.
   *
   */
  activeOutgoingStreamCount: Scalars['Int'];
  /**
   * The count of active outgoing streams from this account for the CFA.
   *
   */
  activeCFAOutgoingStreamCount: Scalars['Int'];
  /**
   * The count of active outgoing streams from this account for the GDA.
   *
   */
  activeGDAOutgoingStreamCount: Scalars['Int'];
  /**
   * The count of active incoming streams to this account for the CFA.
   * GDA incoming streams are *NOT* counted here.
   *
   */
  activeIncomingStreamCount: Scalars['Int'];
  /**
   * The count of closed streams by `account`, both incoming and outgoing for all agreements.
   *
   */
  totalNumberOfClosedStreams: Scalars['Int'];
  /**
   * The count of closed streams by `account`, both incoming and outgoing for the CFA.
   *
   */
  totalCFANumberOfClosedStreams: Scalars['Int'];
  /**
   * The count of closed streams by `account`, both incoming and outgoing for the GDA.
   *
   */
  totalGDANumberOfClosedStreams: Scalars['Int'];
  /**
   * The count of closed outgoing streams by `account` for all agreements.
   *
   */
  inactiveOutgoingStreamCount: Scalars['Int'];
  /**
   * The count of closed outgoing streams by `account` for the CFA.
   *
   */
  inactiveCFAOutgoingStreamCount: Scalars['Int'];
  /**
   * The count of closed outgoing streams by `account` for the GDA.
   *
   */
  inactiveGDAOutgoingStreamCount: Scalars['Int'];
  /**
   * The count of closed incoming streams by `account` for the CFA.
   * Close incoming GDA streams are *NOT* counted here.
   *
   */
  inactiveIncomingStreamCount: Scalars['Int'];
  /**
   * The current (as of updatedAt) number of subscriptions with units allocated to them tied to this `account`.
   *
   */
  totalSubscriptionsWithUnits: Scalars['Int'];
  /**
   * Counts all currently (as of updatedAt) approved subscriptions whether or not they have units.
   *
   */
  totalApprovedSubscriptions: Scalars['Int'];
  /**
   * The current (as of updatedAt) number of membership with units allocated to them tied to this `account`.
   *
   */
  totalMembershipsWithUnits: Scalars['Int'];
  /**
   * Counts all currently (as of updatedAt) approved membership whether or not they have units.
   *
   */
  totalConnectedMemberships: Scalars['Int'];
  /**
   * Balance of `account` as of `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  balanceUntilUpdatedAt: Scalars['BigInt'];
  /**
   * The total deposit this account has held by all flow agreements for `account` active streams.
   *
   */
  totalDeposit: Scalars['BigInt'];
  /**
   * The total deposit this account has held by the CFA agreement for `account` active streams.
   *
   */
  totalCFADeposit: Scalars['BigInt'];
  /**
   * The total deposit this account has held by the GDA agreement for `account` active streams.
   *
   */
  totalGDADeposit: Scalars['BigInt'];
  /**
   * The total net flow rate of the `account` as of `updatedAtTimestamp`/`updatedAtBlock` for all flow agreements.
   * This can be obtained by: `totalInflowRate - totalOutflowRate`.
   * NOTE: this property will NOT be 100% accurate all the time for receivers of GDA flows.
   *
   */
  totalNetFlowRate: Scalars['BigInt'];
  /**
   * The total net flow rate of the `account` as of `updatedAtTimestamp`/`updatedAtBlock` for the CFA.
   *
   */
  totalCFANetFlowRate: Scalars['BigInt'];
  /**
   * The total inflow rate (receive flowRate per second) of the `account` for the CFA.
   * GDA inflow rate is *NOT* included here.
   *
   */
  totalInflowRate: Scalars['BigInt'];
  /**
   * The total outflow rate (send flowrate per second) of the `account` for all flow agreements.
   *
   */
  totalOutflowRate: Scalars['BigInt'];
  /**
   * The total outflow rate (send flowrate per second) of the `account` for the CFA.
   *
   */
  totalCFAOutflowRate: Scalars['BigInt'];
  /**
   * The total outflow rate (send flowrate per second) of the `account` for the GDA.
   *
   */
  totalGDAOutflowRate: Scalars['BigInt'];
  /**
   * The total amount of `token` streamed into this `account` until the `updatedAtTimestamp`/`updatedAtBlock` for the CFA.
   *
   */
  totalAmountStreamedInUntilUpdatedAt: Scalars['BigInt'];
  /**
   * The total amount of `token` streamed from this `account` until the `updatedAtTimestamp`/`updatedAtBlock` for all flow agreements.
   *
   */
  totalAmountStreamedOutUntilUpdatedAt: Scalars['BigInt'];
  /**
   * The total amount of `token` streamed from this `account` until the `updatedAtTimestamp`/`updatedAtBlock` for the CFA.
   *
   */
  totalCFAAmountStreamedOutUntilUpdatedAt: Scalars['BigInt'];
  /**
   * The total amount of `token` streamed through this `account` until the `updatedAtTimestamp`/`updatedAtBlock` for all flow agreements.
   *
   */
  totalAmountStreamedUntilUpdatedAt: Scalars['BigInt'];
  /**
   * The total amount of `token` streamed through this `account` until the `updatedAtTimestamp`/`updatedAtBlock` for the CFA.
   *
   */
  totalCFAAmountStreamedUntilUpdatedAt: Scalars['BigInt'];
  /**
   * The total amount of `token` this `account` has transferred.
   *
   */
  totalAmountTransferredUntilUpdatedAt: Scalars['BigInt'];
  account: Account;
  token: Token;
  flowOperators: Array<FlowOperator>;
  accountTokenSnapshotLogs: Array<AccountTokenSnapshotLog>;
};


/**
 * AccountTokenSnapshot: An aggregate entity which aggregates data between an `account`'s interaction with `token`.
 *
 */
export type AccountTokenSnapshotflowOperatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowOperator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowOperator_filter>;
};


/**
 * AccountTokenSnapshot: An aggregate entity which aggregates data between an `account`'s interaction with `token`.
 *
 */
export type AccountTokenSnapshotaccountTokenSnapshotLogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountTokenSnapshotLog_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountTokenSnapshotLog_filter>;
};

/**
 * AccountTokenSnapshotLog: Historical entries of `AccountTokenSnapshot` updates.
 *
 */
export type AccountTokenSnapshotLog = {
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  triggeredByEventName: Scalars['String'];
  /**
   * Optimistic liquidation estimation property.
   *
   */
  maybeCriticalAtTimestamp?: Maybe<Scalars['BigInt']>;
  /**
   * The current (as of timestamp) number of open streams for all agreements.
   *
   */
  totalNumberOfActiveStreams: Scalars['Int'];
  /**
   * The current (as of timestamp) number of open streams.
   *
   */
  totalCFANumberOfActiveStreams: Scalars['Int'];
  /**
   * The current (as of timestamp) number of open streams.
   *
   */
  totalGDANumberOfActiveStreams: Scalars['Int'];
  /**
   * The count of active outgoing streams from this account for all agreements.
   *
   */
  activeOutgoingStreamCount: Scalars['Int'];
  /**
   * The count of active outgoing streams from this account.
   *
   */
  activeCFAOutgoingStreamCount: Scalars['Int'];
  /**
   * The count of active outgoing streams from this account.
   *
   */
  activeGDAOutgoingStreamCount: Scalars['Int'];
  /**
   * The count of active incoming streams to this account for all agreements.
   *
   */
  activeIncomingStreamCount: Scalars['Int'];
  /**
   * The current (as of timestamp) count of closed streams for all agreements.
   *
   */
  totalNumberOfClosedStreams: Scalars['Int'];
  /**
   * The current (as of timestamp) count of closed streams for the CFA.
   *
   */
  totalCFANumberOfClosedStreams: Scalars['Int'];
  /**
   * The current (as of timestamp) count of closed streams for the GDA.
   *
   */
  totalGDANumberOfClosedStreams: Scalars['Int'];
  /**
   * The count of closed outgoing streams by `account` for all agreements.
   *
   */
  inactiveOutgoingStreamCount: Scalars['Int'];
  /**
   * The count of closed outgoing streams by `account` for the CFA.
   *
   */
  inactiveCFAOutgoingStreamCount: Scalars['Int'];
  /**
   * The count of closed outgoing streams by `account` for the GDA.
   *
   */
  inactiveGDAOutgoingStreamCount: Scalars['Int'];
  /**
   * The count of closed incoming streams by `account` for the CFA.
   * Close incoming GDA streams are *NOT* counted here.
   *
   */
  inactiveIncomingStreamCount: Scalars['Int'];
  /**
   * The current (as of timestamp) number of subscriptions with units allocated to them tied to this `account`.
   *
   */
  totalSubscriptionsWithUnits: Scalars['Int'];
  /**
   * Counts all currently (as of timestamp) approved subscriptions whether or not they have units.
   *
   */
  totalApprovedSubscriptions: Scalars['Int'];
  /**
   * The current (as of timestamp) number of membership with units allocated to them tied to this `account`.
   *
   */
  totalMembershipsWithUnits: Scalars['Int'];
  /**
   * Counts all currently (as of timestamp) connected membership whether or not they have units.
   *
   */
  totalConnectedMemberships: Scalars['Int'];
  /**
   * Balance of `account` as of `timestamp`/`block`.
   *
   */
  balance: Scalars['BigInt'];
  /**
   * The total (as of timestamp) deposit this account has held by all flow agreements for `account` active streams.
   *
   */
  totalDeposit: Scalars['BigInt'];
  /**
   * The total (as of timestamp) deposit this account has held by the CFA agreement for `account` active streams.
   *
   */
  totalCFADeposit: Scalars['BigInt'];
  /**
   * The total (as of timestamp) deposit this account has held by the GDA agreement for `account` active streams.
   *
   */
  totalGDADeposit: Scalars['BigInt'];
  /**
   * The total (as of timestamp) net flow rate of the `account` as of `timestamp`/`block`.
   * This can be obtained by: `totalInflowRate - totalOutflowRate`
   *
   */
  totalNetFlowRate: Scalars['BigInt'];
  /**
   * The total (as of timestamp) net flow rate of the `account` as of `timestamp`/`block` for the CFA.
   *
   */
  totalCFANetFlowRate: Scalars['BigInt'];
  /**
   * The total (as of timestamp) inflow rate (receive flowRate per second) of the `account`.
   *
   */
  totalInflowRate: Scalars['BigInt'];
  /**
   * The total (as of timestamp) outflow rate (send flowrate per second) of the `account`.
   *
   */
  totalOutflowRate: Scalars['BigInt'];
  /**
   * The total (as of timestamp) outflow rate (send flowrate per second) of the `account` for the CFA.
   *
   */
  totalCFAOutflowRate: Scalars['BigInt'];
  /**
   * The total (as of timestamp) outflow rate (send flowrate per second) of the `account` for the GDA.
   *
   */
  totalGDAOutflowRate: Scalars['BigInt'];
  /**
   * The total (as of timestamp) amount of `token` streamed into this `account` until the `timestamp`/`block`.
   *
   */
  totalAmountStreamedIn: Scalars['BigInt'];
  /**
   * The total (as of timestamp) amount of `token` streamed from this `account` until the `timestamp`/`block`.
   *
   */
  totalAmountStreamedOut: Scalars['BigInt'];
  /**
   * The total (as of timestamp) amount of `token` streamed from this `account` until the `timestamp`/`block` for the CFA.
   *
   */
  totalCFAAmountStreamedOut: Scalars['BigInt'];
  /**
   * The total (as of timestamp) net amount of `token` streamed through this `account` until the `timestamp`/`block`.
   *
   */
  totalAmountStreamed: Scalars['BigInt'];
  /**
   * The total (as of timestamp) net amount of `token` streamed through this `account` until the `timestamp`/`block` for the CFA.
   *
   */
  totalCFAAmountStreamed: Scalars['BigInt'];
  /**
   * The total (as of timestamp) amount of `token` this `account` has transferred out until the `timestamp`/`block`.
   *
   */
  totalAmountTransferred: Scalars['BigInt'];
  account: Account;
  token: Token;
  accountTokenSnapshot: AccountTokenSnapshot;
};

export type AccountTokenSnapshotLog_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  triggeredByEventName?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not?: InputMaybe<Scalars['String']>;
  triggeredByEventName_gt?: InputMaybe<Scalars['String']>;
  triggeredByEventName_lt?: InputMaybe<Scalars['String']>;
  triggeredByEventName_gte?: InputMaybe<Scalars['String']>;
  triggeredByEventName_lte?: InputMaybe<Scalars['String']>;
  triggeredByEventName_in?: InputMaybe<Array<Scalars['String']>>;
  triggeredByEventName_not_in?: InputMaybe<Array<Scalars['String']>>;
  triggeredByEventName_contains?: InputMaybe<Scalars['String']>;
  triggeredByEventName_contains_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_contains?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_starts_with?: InputMaybe<Scalars['String']>;
  triggeredByEventName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_starts_with?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_ends_with?: InputMaybe<Scalars['String']>;
  triggeredByEventName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_ends_with?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  maybeCriticalAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maybeCriticalAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNumberOfActiveStreams?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCFANumberOfActiveStreams?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfActiveStreams_not?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCFANumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalGDANumberOfActiveStreams?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfActiveStreams_not?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalGDANumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeOutgoingStreamCount?: InputMaybe<Scalars['Int']>;
  activeOutgoingStreamCount_not?: InputMaybe<Scalars['Int']>;
  activeOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']>;
  activeOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']>;
  activeOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']>;
  activeOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']>;
  activeOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeCFAOutgoingStreamCount?: InputMaybe<Scalars['Int']>;
  activeCFAOutgoingStreamCount_not?: InputMaybe<Scalars['Int']>;
  activeCFAOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']>;
  activeCFAOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']>;
  activeCFAOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']>;
  activeCFAOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']>;
  activeCFAOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeCFAOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeGDAOutgoingStreamCount?: InputMaybe<Scalars['Int']>;
  activeGDAOutgoingStreamCount_not?: InputMaybe<Scalars['Int']>;
  activeGDAOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']>;
  activeGDAOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']>;
  activeGDAOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']>;
  activeGDAOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']>;
  activeGDAOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeGDAOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeIncomingStreamCount?: InputMaybe<Scalars['Int']>;
  activeIncomingStreamCount_not?: InputMaybe<Scalars['Int']>;
  activeIncomingStreamCount_gt?: InputMaybe<Scalars['Int']>;
  activeIncomingStreamCount_lt?: InputMaybe<Scalars['Int']>;
  activeIncomingStreamCount_gte?: InputMaybe<Scalars['Int']>;
  activeIncomingStreamCount_lte?: InputMaybe<Scalars['Int']>;
  activeIncomingStreamCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeIncomingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfClosedStreams?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCFANumberOfClosedStreams?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfClosedStreams_not?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCFANumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalGDANumberOfClosedStreams?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfClosedStreams_not?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalGDANumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  inactiveOutgoingStreamCount?: InputMaybe<Scalars['Int']>;
  inactiveOutgoingStreamCount_not?: InputMaybe<Scalars['Int']>;
  inactiveOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']>;
  inactiveOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']>;
  inactiveOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']>;
  inactiveOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']>;
  inactiveOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']>>;
  inactiveOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  inactiveCFAOutgoingStreamCount?: InputMaybe<Scalars['Int']>;
  inactiveCFAOutgoingStreamCount_not?: InputMaybe<Scalars['Int']>;
  inactiveCFAOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']>;
  inactiveCFAOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']>;
  inactiveCFAOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']>;
  inactiveCFAOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']>;
  inactiveCFAOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']>>;
  inactiveCFAOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  inactiveGDAOutgoingStreamCount?: InputMaybe<Scalars['Int']>;
  inactiveGDAOutgoingStreamCount_not?: InputMaybe<Scalars['Int']>;
  inactiveGDAOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']>;
  inactiveGDAOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']>;
  inactiveGDAOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']>;
  inactiveGDAOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']>;
  inactiveGDAOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']>>;
  inactiveGDAOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  inactiveIncomingStreamCount?: InputMaybe<Scalars['Int']>;
  inactiveIncomingStreamCount_not?: InputMaybe<Scalars['Int']>;
  inactiveIncomingStreamCount_gt?: InputMaybe<Scalars['Int']>;
  inactiveIncomingStreamCount_lt?: InputMaybe<Scalars['Int']>;
  inactiveIncomingStreamCount_gte?: InputMaybe<Scalars['Int']>;
  inactiveIncomingStreamCount_lte?: InputMaybe<Scalars['Int']>;
  inactiveIncomingStreamCount_in?: InputMaybe<Array<Scalars['Int']>>;
  inactiveIncomingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSubscriptionsWithUnits?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_not?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_lt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_lte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSubscriptionsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalApprovedSubscriptions?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_not?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_gt?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_lt?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_gte?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_lte?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_in?: InputMaybe<Array<Scalars['Int']>>;
  totalApprovedSubscriptions_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalMembershipsWithUnits?: InputMaybe<Scalars['Int']>;
  totalMembershipsWithUnits_not?: InputMaybe<Scalars['Int']>;
  totalMembershipsWithUnits_gt?: InputMaybe<Scalars['Int']>;
  totalMembershipsWithUnits_lt?: InputMaybe<Scalars['Int']>;
  totalMembershipsWithUnits_gte?: InputMaybe<Scalars['Int']>;
  totalMembershipsWithUnits_lte?: InputMaybe<Scalars['Int']>;
  totalMembershipsWithUnits_in?: InputMaybe<Array<Scalars['Int']>>;
  totalMembershipsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalConnectedMemberships?: InputMaybe<Scalars['Int']>;
  totalConnectedMemberships_not?: InputMaybe<Scalars['Int']>;
  totalConnectedMemberships_gt?: InputMaybe<Scalars['Int']>;
  totalConnectedMemberships_lt?: InputMaybe<Scalars['Int']>;
  totalConnectedMemberships_gte?: InputMaybe<Scalars['Int']>;
  totalConnectedMemberships_lte?: InputMaybe<Scalars['Int']>;
  totalConnectedMemberships_in?: InputMaybe<Array<Scalars['Int']>>;
  totalConnectedMemberships_not_in?: InputMaybe<Array<Scalars['Int']>>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDeposit?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_not?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFADeposit?: InputMaybe<Scalars['BigInt']>;
  totalCFADeposit_not?: InputMaybe<Scalars['BigInt']>;
  totalCFADeposit_gt?: InputMaybe<Scalars['BigInt']>;
  totalCFADeposit_lt?: InputMaybe<Scalars['BigInt']>;
  totalCFADeposit_gte?: InputMaybe<Scalars['BigInt']>;
  totalCFADeposit_lte?: InputMaybe<Scalars['BigInt']>;
  totalCFADeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFADeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGDADeposit?: InputMaybe<Scalars['BigInt']>;
  totalGDADeposit_not?: InputMaybe<Scalars['BigInt']>;
  totalGDADeposit_gt?: InputMaybe<Scalars['BigInt']>;
  totalGDADeposit_lt?: InputMaybe<Scalars['BigInt']>;
  totalGDADeposit_gte?: InputMaybe<Scalars['BigInt']>;
  totalGDADeposit_lte?: InputMaybe<Scalars['BigInt']>;
  totalGDADeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGDADeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNetFlowRate?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNetFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFANetFlowRate?: InputMaybe<Scalars['BigInt']>;
  totalCFANetFlowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalCFANetFlowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalCFANetFlowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalCFANetFlowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalCFANetFlowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalCFANetFlowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFANetFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalInflowRate?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalInflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalOutflowRate?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFAOutflowRate?: InputMaybe<Scalars['BigInt']>;
  totalCFAOutflowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalCFAOutflowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalCFAOutflowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalCFAOutflowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalCFAOutflowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalCFAOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFAOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGDAOutflowRate?: InputMaybe<Scalars['BigInt']>;
  totalGDAOutflowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalGDAOutflowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalGDAOutflowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalGDAOutflowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalGDAOutflowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalGDAOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGDAOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedIn?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedIn_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedIn_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedIn_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedIn_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedIn_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedIn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedIn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedOut?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOut_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOut_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOut_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOut_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOut_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOut_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedOut_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFAAmountStreamedOut?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamedOut_not?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamedOut_gt?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamedOut_lt?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamedOut_gte?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamedOut_lte?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamedOut_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFAAmountStreamedOut_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamed?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFAAmountStreamed?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamed_not?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamed_gt?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamed_lt?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamed_gte?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamed_lte?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFAAmountStreamed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountTransferred?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountTransferred_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<Account_filter>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  accountTokenSnapshot?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_gt?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_lt?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_gte?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_lte?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_in?: InputMaybe<Array<Scalars['String']>>;
  accountTokenSnapshot_not_in?: InputMaybe<Array<Scalars['String']>>;
  accountTokenSnapshot_contains?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_contains_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_contains?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_contains_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_starts_with?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_starts_with_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_starts_with?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_ends_with?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_ends_with_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_ends_with?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_?: InputMaybe<AccountTokenSnapshot_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AccountTokenSnapshotLog_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AccountTokenSnapshotLog_filter>>>;
};

export type AccountTokenSnapshotLog_orderBy =
  | 'id'
  | 'timestamp'
  | 'blockNumber'
  | 'transactionHash'
  | 'logIndex'
  | 'order'
  | 'triggeredByEventName'
  | 'maybeCriticalAtTimestamp'
  | 'totalNumberOfActiveStreams'
  | 'totalCFANumberOfActiveStreams'
  | 'totalGDANumberOfActiveStreams'
  | 'activeOutgoingStreamCount'
  | 'activeCFAOutgoingStreamCount'
  | 'activeGDAOutgoingStreamCount'
  | 'activeIncomingStreamCount'
  | 'totalNumberOfClosedStreams'
  | 'totalCFANumberOfClosedStreams'
  | 'totalGDANumberOfClosedStreams'
  | 'inactiveOutgoingStreamCount'
  | 'inactiveCFAOutgoingStreamCount'
  | 'inactiveGDAOutgoingStreamCount'
  | 'inactiveIncomingStreamCount'
  | 'totalSubscriptionsWithUnits'
  | 'totalApprovedSubscriptions'
  | 'totalMembershipsWithUnits'
  | 'totalConnectedMemberships'
  | 'balance'
  | 'totalDeposit'
  | 'totalCFADeposit'
  | 'totalGDADeposit'
  | 'totalNetFlowRate'
  | 'totalCFANetFlowRate'
  | 'totalInflowRate'
  | 'totalOutflowRate'
  | 'totalCFAOutflowRate'
  | 'totalGDAOutflowRate'
  | 'totalAmountStreamedIn'
  | 'totalAmountStreamedOut'
  | 'totalCFAAmountStreamedOut'
  | 'totalAmountStreamed'
  | 'totalCFAAmountStreamed'
  | 'totalAmountTransferred'
  | 'account'
  | 'account__id'
  | 'account__createdAtTimestamp'
  | 'account__createdAtBlockNumber'
  | 'account__updatedAtTimestamp'
  | 'account__updatedAtBlockNumber'
  | 'account__isSuperApp'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress'
  | 'accountTokenSnapshot'
  | 'accountTokenSnapshot__id'
  | 'accountTokenSnapshot__createdAtTimestamp'
  | 'accountTokenSnapshot__createdAtBlockNumber'
  | 'accountTokenSnapshot__updatedAtTimestamp'
  | 'accountTokenSnapshot__updatedAtBlockNumber'
  | 'accountTokenSnapshot__isLiquidationEstimateOptimistic'
  | 'accountTokenSnapshot__maybeCriticalAtTimestamp'
  | 'accountTokenSnapshot__totalNumberOfActiveStreams'
  | 'accountTokenSnapshot__totalCFANumberOfActiveStreams'
  | 'accountTokenSnapshot__totalGDANumberOfActiveStreams'
  | 'accountTokenSnapshot__activeOutgoingStreamCount'
  | 'accountTokenSnapshot__activeCFAOutgoingStreamCount'
  | 'accountTokenSnapshot__activeGDAOutgoingStreamCount'
  | 'accountTokenSnapshot__activeIncomingStreamCount'
  | 'accountTokenSnapshot__totalNumberOfClosedStreams'
  | 'accountTokenSnapshot__totalCFANumberOfClosedStreams'
  | 'accountTokenSnapshot__totalGDANumberOfClosedStreams'
  | 'accountTokenSnapshot__inactiveOutgoingStreamCount'
  | 'accountTokenSnapshot__inactiveCFAOutgoingStreamCount'
  | 'accountTokenSnapshot__inactiveGDAOutgoingStreamCount'
  | 'accountTokenSnapshot__inactiveIncomingStreamCount'
  | 'accountTokenSnapshot__totalSubscriptionsWithUnits'
  | 'accountTokenSnapshot__totalApprovedSubscriptions'
  | 'accountTokenSnapshot__totalMembershipsWithUnits'
  | 'accountTokenSnapshot__totalConnectedMemberships'
  | 'accountTokenSnapshot__balanceUntilUpdatedAt'
  | 'accountTokenSnapshot__totalDeposit'
  | 'accountTokenSnapshot__totalCFADeposit'
  | 'accountTokenSnapshot__totalGDADeposit'
  | 'accountTokenSnapshot__totalNetFlowRate'
  | 'accountTokenSnapshot__totalCFANetFlowRate'
  | 'accountTokenSnapshot__totalInflowRate'
  | 'accountTokenSnapshot__totalOutflowRate'
  | 'accountTokenSnapshot__totalCFAOutflowRate'
  | 'accountTokenSnapshot__totalGDAOutflowRate'
  | 'accountTokenSnapshot__totalAmountStreamedInUntilUpdatedAt'
  | 'accountTokenSnapshot__totalAmountStreamedOutUntilUpdatedAt'
  | 'accountTokenSnapshot__totalCFAAmountStreamedOutUntilUpdatedAt'
  | 'accountTokenSnapshot__totalAmountStreamedUntilUpdatedAt'
  | 'accountTokenSnapshot__totalCFAAmountStreamedUntilUpdatedAt'
  | 'accountTokenSnapshot__totalAmountTransferredUntilUpdatedAt';

export type AccountTokenSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  isLiquidationEstimateOptimistic?: InputMaybe<Scalars['Boolean']>;
  isLiquidationEstimateOptimistic_not?: InputMaybe<Scalars['Boolean']>;
  isLiquidationEstimateOptimistic_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isLiquidationEstimateOptimistic_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  maybeCriticalAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maybeCriticalAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNumberOfActiveStreams?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCFANumberOfActiveStreams?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfActiveStreams_not?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCFANumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalGDANumberOfActiveStreams?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfActiveStreams_not?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalGDANumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeOutgoingStreamCount?: InputMaybe<Scalars['Int']>;
  activeOutgoingStreamCount_not?: InputMaybe<Scalars['Int']>;
  activeOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']>;
  activeOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']>;
  activeOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']>;
  activeOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']>;
  activeOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeCFAOutgoingStreamCount?: InputMaybe<Scalars['Int']>;
  activeCFAOutgoingStreamCount_not?: InputMaybe<Scalars['Int']>;
  activeCFAOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']>;
  activeCFAOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']>;
  activeCFAOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']>;
  activeCFAOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']>;
  activeCFAOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeCFAOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeGDAOutgoingStreamCount?: InputMaybe<Scalars['Int']>;
  activeGDAOutgoingStreamCount_not?: InputMaybe<Scalars['Int']>;
  activeGDAOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']>;
  activeGDAOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']>;
  activeGDAOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']>;
  activeGDAOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']>;
  activeGDAOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeGDAOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeIncomingStreamCount?: InputMaybe<Scalars['Int']>;
  activeIncomingStreamCount_not?: InputMaybe<Scalars['Int']>;
  activeIncomingStreamCount_gt?: InputMaybe<Scalars['Int']>;
  activeIncomingStreamCount_lt?: InputMaybe<Scalars['Int']>;
  activeIncomingStreamCount_gte?: InputMaybe<Scalars['Int']>;
  activeIncomingStreamCount_lte?: InputMaybe<Scalars['Int']>;
  activeIncomingStreamCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeIncomingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfClosedStreams?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCFANumberOfClosedStreams?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfClosedStreams_not?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCFANumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalGDANumberOfClosedStreams?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfClosedStreams_not?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalGDANumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  inactiveOutgoingStreamCount?: InputMaybe<Scalars['Int']>;
  inactiveOutgoingStreamCount_not?: InputMaybe<Scalars['Int']>;
  inactiveOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']>;
  inactiveOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']>;
  inactiveOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']>;
  inactiveOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']>;
  inactiveOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']>>;
  inactiveOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  inactiveCFAOutgoingStreamCount?: InputMaybe<Scalars['Int']>;
  inactiveCFAOutgoingStreamCount_not?: InputMaybe<Scalars['Int']>;
  inactiveCFAOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']>;
  inactiveCFAOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']>;
  inactiveCFAOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']>;
  inactiveCFAOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']>;
  inactiveCFAOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']>>;
  inactiveCFAOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  inactiveGDAOutgoingStreamCount?: InputMaybe<Scalars['Int']>;
  inactiveGDAOutgoingStreamCount_not?: InputMaybe<Scalars['Int']>;
  inactiveGDAOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']>;
  inactiveGDAOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']>;
  inactiveGDAOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']>;
  inactiveGDAOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']>;
  inactiveGDAOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']>>;
  inactiveGDAOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  inactiveIncomingStreamCount?: InputMaybe<Scalars['Int']>;
  inactiveIncomingStreamCount_not?: InputMaybe<Scalars['Int']>;
  inactiveIncomingStreamCount_gt?: InputMaybe<Scalars['Int']>;
  inactiveIncomingStreamCount_lt?: InputMaybe<Scalars['Int']>;
  inactiveIncomingStreamCount_gte?: InputMaybe<Scalars['Int']>;
  inactiveIncomingStreamCount_lte?: InputMaybe<Scalars['Int']>;
  inactiveIncomingStreamCount_in?: InputMaybe<Array<Scalars['Int']>>;
  inactiveIncomingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSubscriptionsWithUnits?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_not?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_lt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_lte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSubscriptionsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalApprovedSubscriptions?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_not?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_gt?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_lt?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_gte?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_lte?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_in?: InputMaybe<Array<Scalars['Int']>>;
  totalApprovedSubscriptions_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalMembershipsWithUnits?: InputMaybe<Scalars['Int']>;
  totalMembershipsWithUnits_not?: InputMaybe<Scalars['Int']>;
  totalMembershipsWithUnits_gt?: InputMaybe<Scalars['Int']>;
  totalMembershipsWithUnits_lt?: InputMaybe<Scalars['Int']>;
  totalMembershipsWithUnits_gte?: InputMaybe<Scalars['Int']>;
  totalMembershipsWithUnits_lte?: InputMaybe<Scalars['Int']>;
  totalMembershipsWithUnits_in?: InputMaybe<Array<Scalars['Int']>>;
  totalMembershipsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalConnectedMemberships?: InputMaybe<Scalars['Int']>;
  totalConnectedMemberships_not?: InputMaybe<Scalars['Int']>;
  totalConnectedMemberships_gt?: InputMaybe<Scalars['Int']>;
  totalConnectedMemberships_lt?: InputMaybe<Scalars['Int']>;
  totalConnectedMemberships_gte?: InputMaybe<Scalars['Int']>;
  totalConnectedMemberships_lte?: InputMaybe<Scalars['Int']>;
  totalConnectedMemberships_in?: InputMaybe<Array<Scalars['Int']>>;
  totalConnectedMemberships_not_in?: InputMaybe<Array<Scalars['Int']>>;
  balanceUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  balanceUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  balanceUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  balanceUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  balanceUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  balanceUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  balanceUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balanceUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDeposit?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_not?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFADeposit?: InputMaybe<Scalars['BigInt']>;
  totalCFADeposit_not?: InputMaybe<Scalars['BigInt']>;
  totalCFADeposit_gt?: InputMaybe<Scalars['BigInt']>;
  totalCFADeposit_lt?: InputMaybe<Scalars['BigInt']>;
  totalCFADeposit_gte?: InputMaybe<Scalars['BigInt']>;
  totalCFADeposit_lte?: InputMaybe<Scalars['BigInt']>;
  totalCFADeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFADeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGDADeposit?: InputMaybe<Scalars['BigInt']>;
  totalGDADeposit_not?: InputMaybe<Scalars['BigInt']>;
  totalGDADeposit_gt?: InputMaybe<Scalars['BigInt']>;
  totalGDADeposit_lt?: InputMaybe<Scalars['BigInt']>;
  totalGDADeposit_gte?: InputMaybe<Scalars['BigInt']>;
  totalGDADeposit_lte?: InputMaybe<Scalars['BigInt']>;
  totalGDADeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGDADeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNetFlowRate?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNetFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFANetFlowRate?: InputMaybe<Scalars['BigInt']>;
  totalCFANetFlowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalCFANetFlowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalCFANetFlowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalCFANetFlowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalCFANetFlowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalCFANetFlowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFANetFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalInflowRate?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalInflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalOutflowRate?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFAOutflowRate?: InputMaybe<Scalars['BigInt']>;
  totalCFAOutflowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalCFAOutflowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalCFAOutflowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalCFAOutflowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalCFAOutflowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalCFAOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFAOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGDAOutflowRate?: InputMaybe<Scalars['BigInt']>;
  totalGDAOutflowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalGDAOutflowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalGDAOutflowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalGDAOutflowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalGDAOutflowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalGDAOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGDAOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedInUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedInUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedInUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedInUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedInUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedInUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedInUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedInUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedOutUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOutUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOutUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOutUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOutUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOutUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOutUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedOutUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFAAmountStreamedOutUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamedOutUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamedOutUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamedOutUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamedOutUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamedOutUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamedOutUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFAAmountStreamedOutUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFAAmountStreamedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFAAmountStreamedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountTransferredUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountTransferredUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<Account_filter>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  flowOperators_?: InputMaybe<FlowOperator_filter>;
  accountTokenSnapshotLogs_?: InputMaybe<AccountTokenSnapshotLog_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AccountTokenSnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AccountTokenSnapshot_filter>>>;
};

export type AccountTokenSnapshot_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'isLiquidationEstimateOptimistic'
  | 'maybeCriticalAtTimestamp'
  | 'totalNumberOfActiveStreams'
  | 'totalCFANumberOfActiveStreams'
  | 'totalGDANumberOfActiveStreams'
  | 'activeOutgoingStreamCount'
  | 'activeCFAOutgoingStreamCount'
  | 'activeGDAOutgoingStreamCount'
  | 'activeIncomingStreamCount'
  | 'totalNumberOfClosedStreams'
  | 'totalCFANumberOfClosedStreams'
  | 'totalGDANumberOfClosedStreams'
  | 'inactiveOutgoingStreamCount'
  | 'inactiveCFAOutgoingStreamCount'
  | 'inactiveGDAOutgoingStreamCount'
  | 'inactiveIncomingStreamCount'
  | 'totalSubscriptionsWithUnits'
  | 'totalApprovedSubscriptions'
  | 'totalMembershipsWithUnits'
  | 'totalConnectedMemberships'
  | 'balanceUntilUpdatedAt'
  | 'totalDeposit'
  | 'totalCFADeposit'
  | 'totalGDADeposit'
  | 'totalNetFlowRate'
  | 'totalCFANetFlowRate'
  | 'totalInflowRate'
  | 'totalOutflowRate'
  | 'totalCFAOutflowRate'
  | 'totalGDAOutflowRate'
  | 'totalAmountStreamedInUntilUpdatedAt'
  | 'totalAmountStreamedOutUntilUpdatedAt'
  | 'totalCFAAmountStreamedOutUntilUpdatedAt'
  | 'totalAmountStreamedUntilUpdatedAt'
  | 'totalCFAAmountStreamedUntilUpdatedAt'
  | 'totalAmountTransferredUntilUpdatedAt'
  | 'account'
  | 'account__id'
  | 'account__createdAtTimestamp'
  | 'account__createdAtBlockNumber'
  | 'account__updatedAtTimestamp'
  | 'account__updatedAtBlockNumber'
  | 'account__isSuperApp'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress'
  | 'flowOperators'
  | 'accountTokenSnapshotLogs';

export type Account_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  isSuperApp?: InputMaybe<Scalars['Boolean']>;
  isSuperApp_not?: InputMaybe<Scalars['Boolean']>;
  isSuperApp_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isSuperApp_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  inflows_?: InputMaybe<Stream_filter>;
  outflows_?: InputMaybe<Stream_filter>;
  subscriptions_?: InputMaybe<IndexSubscription_filter>;
  publishedIndexes_?: InputMaybe<Index_filter>;
  pools_?: InputMaybe<Pool_filter>;
  poolMemberships_?: InputMaybe<PoolMember_filter>;
  sentTransferEvents_?: InputMaybe<TransferEvent_filter>;
  receivedTransferEvents_?: InputMaybe<TransferEvent_filter>;
  tokenUpgradedEvents_?: InputMaybe<TokenUpgradedEvent_filter>;
  tokenDowngradedEvents_?: InputMaybe<TokenDowngradedEvent_filter>;
  accountTokenSnapshots_?: InputMaybe<AccountTokenSnapshot_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Account_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Account_filter>>>;
};

export type Account_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'isSuperApp'
  | 'inflows'
  | 'outflows'
  | 'subscriptions'
  | 'publishedIndexes'
  | 'pools'
  | 'poolMemberships'
  | 'sentTransferEvents'
  | 'receivedTransferEvents'
  | 'tokenUpgradedEvents'
  | 'tokenDowngradedEvents'
  | 'accountTokenSnapshots';

export type Aggregation_interval =
  | 'hour'
  | 'day';

export type AgreementClassRegisteredEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `code`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  agreementType: Scalars['Bytes'];
  code: Scalars['Bytes'];
};

export type AgreementClassRegisteredEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  agreementType?: InputMaybe<Scalars['Bytes']>;
  agreementType_not?: InputMaybe<Scalars['Bytes']>;
  agreementType_gt?: InputMaybe<Scalars['Bytes']>;
  agreementType_lt?: InputMaybe<Scalars['Bytes']>;
  agreementType_gte?: InputMaybe<Scalars['Bytes']>;
  agreementType_lte?: InputMaybe<Scalars['Bytes']>;
  agreementType_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementType_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementType_contains?: InputMaybe<Scalars['Bytes']>;
  agreementType_not_contains?: InputMaybe<Scalars['Bytes']>;
  code?: InputMaybe<Scalars['Bytes']>;
  code_not?: InputMaybe<Scalars['Bytes']>;
  code_gt?: InputMaybe<Scalars['Bytes']>;
  code_lt?: InputMaybe<Scalars['Bytes']>;
  code_gte?: InputMaybe<Scalars['Bytes']>;
  code_lte?: InputMaybe<Scalars['Bytes']>;
  code_in?: InputMaybe<Array<Scalars['Bytes']>>;
  code_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  code_contains?: InputMaybe<Scalars['Bytes']>;
  code_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AgreementClassRegisteredEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AgreementClassRegisteredEvent_filter>>>;
};

export type AgreementClassRegisteredEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'agreementType'
  | 'code';

export type AgreementClassUpdatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `code`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  agreementType: Scalars['Bytes'];
  code: Scalars['Bytes'];
};

export type AgreementClassUpdatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  agreementType?: InputMaybe<Scalars['Bytes']>;
  agreementType_not?: InputMaybe<Scalars['Bytes']>;
  agreementType_gt?: InputMaybe<Scalars['Bytes']>;
  agreementType_lt?: InputMaybe<Scalars['Bytes']>;
  agreementType_gte?: InputMaybe<Scalars['Bytes']>;
  agreementType_lte?: InputMaybe<Scalars['Bytes']>;
  agreementType_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementType_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementType_contains?: InputMaybe<Scalars['Bytes']>;
  agreementType_not_contains?: InputMaybe<Scalars['Bytes']>;
  code?: InputMaybe<Scalars['Bytes']>;
  code_not?: InputMaybe<Scalars['Bytes']>;
  code_gt?: InputMaybe<Scalars['Bytes']>;
  code_lt?: InputMaybe<Scalars['Bytes']>;
  code_gte?: InputMaybe<Scalars['Bytes']>;
  code_lte?: InputMaybe<Scalars['Bytes']>;
  code_in?: InputMaybe<Array<Scalars['Bytes']>>;
  code_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  code_contains?: InputMaybe<Scalars['Bytes']>;
  code_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AgreementClassUpdatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AgreementClassUpdatedEvent_filter>>>;
};

export type AgreementClassUpdatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'agreementType'
  | 'code';

/**
 * NOTE: This event was deprecated since the introduction of the 3Ps system.
 * Replaced by: `AgreementLiquidatedV2Event`
 * See: https://docs.superfluid.finance/superfluid/sentinels/liquidations-and-toga#patricians-plebs-and-pirates-3ps for more details on the 3Ps system.
 * See: https://github.com/superfluid-finance/protocol-monorepo/blob/dev/packages/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluidToken.sol#L425 for more details on the events.
 *
 */
export type AgreementLiquidatedByEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = liquidatorAccount (executor of liquidation)
   * addresses[2] = penaltyAccount (the sender of the flow/stream)
   * addresses[3] = bondAccount (the address receiving the reward - the reward account for the token, pre 3Ps)
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  liquidatorAccount: Scalars['Bytes'];
  agreementClass: Scalars['Bytes'];
  agreementId: Scalars['Bytes'];
  penaltyAccount: Scalars['Bytes'];
  bondAccount: Scalars['Bytes'];
  rewardAmount: Scalars['BigInt'];
  bailoutAmount: Scalars['BigInt'];
  /**
   * The full deposit amount of the stream that was liquidated.
   *
   */
  deposit: Scalars['BigInt'];
  /**
   * The flow rate of the stream at the time of liquidation.
   *
   */
  flowRateAtLiquidation: Scalars['BigInt'];
};

export type AgreementLiquidatedByEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_not?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_gt?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_lt?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_gte?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_lte?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_in?: InputMaybe<Array<Scalars['Bytes']>>;
  liquidatorAccount_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  liquidatorAccount_contains?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_not_contains?: InputMaybe<Scalars['Bytes']>;
  agreementClass?: InputMaybe<Scalars['Bytes']>;
  agreementClass_not?: InputMaybe<Scalars['Bytes']>;
  agreementClass_gt?: InputMaybe<Scalars['Bytes']>;
  agreementClass_lt?: InputMaybe<Scalars['Bytes']>;
  agreementClass_gte?: InputMaybe<Scalars['Bytes']>;
  agreementClass_lte?: InputMaybe<Scalars['Bytes']>;
  agreementClass_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementClass_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementClass_contains?: InputMaybe<Scalars['Bytes']>;
  agreementClass_not_contains?: InputMaybe<Scalars['Bytes']>;
  agreementId?: InputMaybe<Scalars['Bytes']>;
  agreementId_not?: InputMaybe<Scalars['Bytes']>;
  agreementId_gt?: InputMaybe<Scalars['Bytes']>;
  agreementId_lt?: InputMaybe<Scalars['Bytes']>;
  agreementId_gte?: InputMaybe<Scalars['Bytes']>;
  agreementId_lte?: InputMaybe<Scalars['Bytes']>;
  agreementId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementId_contains?: InputMaybe<Scalars['Bytes']>;
  agreementId_not_contains?: InputMaybe<Scalars['Bytes']>;
  penaltyAccount?: InputMaybe<Scalars['Bytes']>;
  penaltyAccount_not?: InputMaybe<Scalars['Bytes']>;
  penaltyAccount_gt?: InputMaybe<Scalars['Bytes']>;
  penaltyAccount_lt?: InputMaybe<Scalars['Bytes']>;
  penaltyAccount_gte?: InputMaybe<Scalars['Bytes']>;
  penaltyAccount_lte?: InputMaybe<Scalars['Bytes']>;
  penaltyAccount_in?: InputMaybe<Array<Scalars['Bytes']>>;
  penaltyAccount_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  penaltyAccount_contains?: InputMaybe<Scalars['Bytes']>;
  penaltyAccount_not_contains?: InputMaybe<Scalars['Bytes']>;
  bondAccount?: InputMaybe<Scalars['Bytes']>;
  bondAccount_not?: InputMaybe<Scalars['Bytes']>;
  bondAccount_gt?: InputMaybe<Scalars['Bytes']>;
  bondAccount_lt?: InputMaybe<Scalars['Bytes']>;
  bondAccount_gte?: InputMaybe<Scalars['Bytes']>;
  bondAccount_lte?: InputMaybe<Scalars['Bytes']>;
  bondAccount_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bondAccount_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bondAccount_contains?: InputMaybe<Scalars['Bytes']>;
  bondAccount_not_contains?: InputMaybe<Scalars['Bytes']>;
  rewardAmount?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bailoutAmount?: InputMaybe<Scalars['BigInt']>;
  bailoutAmount_not?: InputMaybe<Scalars['BigInt']>;
  bailoutAmount_gt?: InputMaybe<Scalars['BigInt']>;
  bailoutAmount_lt?: InputMaybe<Scalars['BigInt']>;
  bailoutAmount_gte?: InputMaybe<Scalars['BigInt']>;
  bailoutAmount_lte?: InputMaybe<Scalars['BigInt']>;
  bailoutAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bailoutAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit?: InputMaybe<Scalars['BigInt']>;
  deposit_not?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRateAtLiquidation?: InputMaybe<Scalars['BigInt']>;
  flowRateAtLiquidation_not?: InputMaybe<Scalars['BigInt']>;
  flowRateAtLiquidation_gt?: InputMaybe<Scalars['BigInt']>;
  flowRateAtLiquidation_lt?: InputMaybe<Scalars['BigInt']>;
  flowRateAtLiquidation_gte?: InputMaybe<Scalars['BigInt']>;
  flowRateAtLiquidation_lte?: InputMaybe<Scalars['BigInt']>;
  flowRateAtLiquidation_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRateAtLiquidation_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AgreementLiquidatedByEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AgreementLiquidatedByEvent_filter>>>;
};

export type AgreementLiquidatedByEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'liquidatorAccount'
  | 'agreementClass'
  | 'agreementId'
  | 'penaltyAccount'
  | 'bondAccount'
  | 'rewardAmount'
  | 'bailoutAmount'
  | 'deposit'
  | 'flowRateAtLiquidation';

export type AgreementLiquidatedV2Event = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `liquidatorAccount` (executor of liquidation)
   * addresses[2] = `targetAccount` (the sender of the flow/stream)
   * addresses[3] = `rewardAmountReceiver` (the address receiving the reward) addresses
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  agreementClass: Scalars['Bytes'];
  agreementId: Scalars['Bytes'];
  liquidatorAccount: Scalars['Bytes'];
  targetAccount: Scalars['Bytes'];
  rewardAmountReceiver: Scalars['Bytes'];
  rewardAmount: Scalars['BigInt'];
  targetAccountBalanceDelta: Scalars['BigInt'];
  version: Scalars['BigInt'];
  liquidationType: Scalars['Int'];
  /**
   * The full deposit amount of the stream that was liquidated.
   *
   */
  deposit: Scalars['BigInt'];
  /**
   * The flow rate of the stream at the time of liquidation.
   *
   */
  flowRateAtLiquidation: Scalars['BigInt'];
  /**
   * TO BE DEPRECATED in v2 endpoint - use rewardAmountReceiver instead
   *
   */
  rewardAccount: Scalars['Bytes'];
};

export type AgreementLiquidatedV2Event_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  agreementClass?: InputMaybe<Scalars['Bytes']>;
  agreementClass_not?: InputMaybe<Scalars['Bytes']>;
  agreementClass_gt?: InputMaybe<Scalars['Bytes']>;
  agreementClass_lt?: InputMaybe<Scalars['Bytes']>;
  agreementClass_gte?: InputMaybe<Scalars['Bytes']>;
  agreementClass_lte?: InputMaybe<Scalars['Bytes']>;
  agreementClass_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementClass_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementClass_contains?: InputMaybe<Scalars['Bytes']>;
  agreementClass_not_contains?: InputMaybe<Scalars['Bytes']>;
  agreementId?: InputMaybe<Scalars['Bytes']>;
  agreementId_not?: InputMaybe<Scalars['Bytes']>;
  agreementId_gt?: InputMaybe<Scalars['Bytes']>;
  agreementId_lt?: InputMaybe<Scalars['Bytes']>;
  agreementId_gte?: InputMaybe<Scalars['Bytes']>;
  agreementId_lte?: InputMaybe<Scalars['Bytes']>;
  agreementId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementId_contains?: InputMaybe<Scalars['Bytes']>;
  agreementId_not_contains?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_not?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_gt?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_lt?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_gte?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_lte?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_in?: InputMaybe<Array<Scalars['Bytes']>>;
  liquidatorAccount_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  liquidatorAccount_contains?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_not_contains?: InputMaybe<Scalars['Bytes']>;
  targetAccount?: InputMaybe<Scalars['Bytes']>;
  targetAccount_not?: InputMaybe<Scalars['Bytes']>;
  targetAccount_gt?: InputMaybe<Scalars['Bytes']>;
  targetAccount_lt?: InputMaybe<Scalars['Bytes']>;
  targetAccount_gte?: InputMaybe<Scalars['Bytes']>;
  targetAccount_lte?: InputMaybe<Scalars['Bytes']>;
  targetAccount_in?: InputMaybe<Array<Scalars['Bytes']>>;
  targetAccount_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  targetAccount_contains?: InputMaybe<Scalars['Bytes']>;
  targetAccount_not_contains?: InputMaybe<Scalars['Bytes']>;
  rewardAmountReceiver?: InputMaybe<Scalars['Bytes']>;
  rewardAmountReceiver_not?: InputMaybe<Scalars['Bytes']>;
  rewardAmountReceiver_gt?: InputMaybe<Scalars['Bytes']>;
  rewardAmountReceiver_lt?: InputMaybe<Scalars['Bytes']>;
  rewardAmountReceiver_gte?: InputMaybe<Scalars['Bytes']>;
  rewardAmountReceiver_lte?: InputMaybe<Scalars['Bytes']>;
  rewardAmountReceiver_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardAmountReceiver_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardAmountReceiver_contains?: InputMaybe<Scalars['Bytes']>;
  rewardAmountReceiver_not_contains?: InputMaybe<Scalars['Bytes']>;
  rewardAmount?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  targetAccountBalanceDelta?: InputMaybe<Scalars['BigInt']>;
  targetAccountBalanceDelta_not?: InputMaybe<Scalars['BigInt']>;
  targetAccountBalanceDelta_gt?: InputMaybe<Scalars['BigInt']>;
  targetAccountBalanceDelta_lt?: InputMaybe<Scalars['BigInt']>;
  targetAccountBalanceDelta_gte?: InputMaybe<Scalars['BigInt']>;
  targetAccountBalanceDelta_lte?: InputMaybe<Scalars['BigInt']>;
  targetAccountBalanceDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
  targetAccountBalanceDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  version?: InputMaybe<Scalars['BigInt']>;
  version_not?: InputMaybe<Scalars['BigInt']>;
  version_gt?: InputMaybe<Scalars['BigInt']>;
  version_lt?: InputMaybe<Scalars['BigInt']>;
  version_gte?: InputMaybe<Scalars['BigInt']>;
  version_lte?: InputMaybe<Scalars['BigInt']>;
  version_in?: InputMaybe<Array<Scalars['BigInt']>>;
  version_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidationType?: InputMaybe<Scalars['Int']>;
  liquidationType_not?: InputMaybe<Scalars['Int']>;
  liquidationType_gt?: InputMaybe<Scalars['Int']>;
  liquidationType_lt?: InputMaybe<Scalars['Int']>;
  liquidationType_gte?: InputMaybe<Scalars['Int']>;
  liquidationType_lte?: InputMaybe<Scalars['Int']>;
  liquidationType_in?: InputMaybe<Array<Scalars['Int']>>;
  liquidationType_not_in?: InputMaybe<Array<Scalars['Int']>>;
  deposit?: InputMaybe<Scalars['BigInt']>;
  deposit_not?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRateAtLiquidation?: InputMaybe<Scalars['BigInt']>;
  flowRateAtLiquidation_not?: InputMaybe<Scalars['BigInt']>;
  flowRateAtLiquidation_gt?: InputMaybe<Scalars['BigInt']>;
  flowRateAtLiquidation_lt?: InputMaybe<Scalars['BigInt']>;
  flowRateAtLiquidation_gte?: InputMaybe<Scalars['BigInt']>;
  flowRateAtLiquidation_lte?: InputMaybe<Scalars['BigInt']>;
  flowRateAtLiquidation_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRateAtLiquidation_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardAccount?: InputMaybe<Scalars['Bytes']>;
  rewardAccount_not?: InputMaybe<Scalars['Bytes']>;
  rewardAccount_gt?: InputMaybe<Scalars['Bytes']>;
  rewardAccount_lt?: InputMaybe<Scalars['Bytes']>;
  rewardAccount_gte?: InputMaybe<Scalars['Bytes']>;
  rewardAccount_lte?: InputMaybe<Scalars['Bytes']>;
  rewardAccount_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardAccount_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardAccount_contains?: InputMaybe<Scalars['Bytes']>;
  rewardAccount_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AgreementLiquidatedV2Event_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AgreementLiquidatedV2Event_filter>>>;
};

export type AgreementLiquidatedV2Event_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'agreementClass'
  | 'agreementId'
  | 'liquidatorAccount'
  | 'targetAccount'
  | 'rewardAmountReceiver'
  | 'rewardAmount'
  | 'targetAccountBalanceDelta'
  | 'version'
  | 'liquidationType'
  | 'deposit'
  | 'flowRateAtLiquidation'
  | 'rewardAccount';

export type AppRegisteredEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `app`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  app: Scalars['Bytes'];
};

export type AppRegisteredEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  app?: InputMaybe<Scalars['Bytes']>;
  app_not?: InputMaybe<Scalars['Bytes']>;
  app_gt?: InputMaybe<Scalars['Bytes']>;
  app_lt?: InputMaybe<Scalars['Bytes']>;
  app_gte?: InputMaybe<Scalars['Bytes']>;
  app_lte?: InputMaybe<Scalars['Bytes']>;
  app_in?: InputMaybe<Array<Scalars['Bytes']>>;
  app_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  app_contains?: InputMaybe<Scalars['Bytes']>;
  app_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AppRegisteredEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AppRegisteredEvent_filter>>>;
};

export type AppRegisteredEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'app';

export type ApprovalEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `owner`
   * addresses[2] = `to`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  /**
   * The address that will be granting allowance to transfer ERC20.
   *
   */
  owner: Account;
  /**
   * The address that will be granted allowance to transfer ERC20.
   *
   */
  to: Account;
  /**
   * If `amount` is non-zero, this event was emitted for the approval of an ERC20.
   * Tne amount of ERC20 tokens that will be granted allowance to transfer.
   *
   */
  amount: Scalars['BigInt'];
};

export type ApprovalEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_filter>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_?: InputMaybe<Account_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ApprovalEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ApprovalEvent_filter>>>;
};

export type ApprovalEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'owner'
  | 'owner__id'
  | 'owner__createdAtTimestamp'
  | 'owner__createdAtBlockNumber'
  | 'owner__updatedAtTimestamp'
  | 'owner__updatedAtBlockNumber'
  | 'owner__isSuperApp'
  | 'to'
  | 'to__id'
  | 'to__createdAtTimestamp'
  | 'to__createdAtBlockNumber'
  | 'to__updatedAtTimestamp'
  | 'to__updatedAtBlockNumber'
  | 'to__isSuperApp'
  | 'amount';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type BondIncreasedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  /**
   * The address of the `token` (supertoken).
   *
   */
  token: Scalars['Bytes'];
  /**
   * The additional amount added to the bond by the current Patrician In Charge (PIC).
   *
   */
  additionalBond: Scalars['BigInt'];
};

export type BondIncreasedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  additionalBond?: InputMaybe<Scalars['BigInt']>;
  additionalBond_not?: InputMaybe<Scalars['BigInt']>;
  additionalBond_gt?: InputMaybe<Scalars['BigInt']>;
  additionalBond_lt?: InputMaybe<Scalars['BigInt']>;
  additionalBond_gte?: InputMaybe<Scalars['BigInt']>;
  additionalBond_lte?: InputMaybe<Scalars['BigInt']>;
  additionalBond_in?: InputMaybe<Array<Scalars['BigInt']>>;
  additionalBond_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BondIncreasedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BondIncreasedEvent_filter>>>;
};

export type BondIncreasedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'additionalBond';

export type BufferAdjustedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `pool`
   * addresses[2] = `distributor`
   * addresses[3] = `operator`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  bufferDelta: Scalars['BigInt'];
  newBufferAmount: Scalars['BigInt'];
  totalBufferAmount: Scalars['BigInt'];
  pool: Pool;
  poolDistributor: PoolDistributor;
};

export type BufferAdjustedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  bufferDelta?: InputMaybe<Scalars['BigInt']>;
  bufferDelta_not?: InputMaybe<Scalars['BigInt']>;
  bufferDelta_gt?: InputMaybe<Scalars['BigInt']>;
  bufferDelta_lt?: InputMaybe<Scalars['BigInt']>;
  bufferDelta_gte?: InputMaybe<Scalars['BigInt']>;
  bufferDelta_lte?: InputMaybe<Scalars['BigInt']>;
  bufferDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bufferDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newBufferAmount?: InputMaybe<Scalars['BigInt']>;
  newBufferAmount_not?: InputMaybe<Scalars['BigInt']>;
  newBufferAmount_gt?: InputMaybe<Scalars['BigInt']>;
  newBufferAmount_lt?: InputMaybe<Scalars['BigInt']>;
  newBufferAmount_gte?: InputMaybe<Scalars['BigInt']>;
  newBufferAmount_lte?: InputMaybe<Scalars['BigInt']>;
  newBufferAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newBufferAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalBufferAmount?: InputMaybe<Scalars['BigInt']>;
  totalBufferAmount_not?: InputMaybe<Scalars['BigInt']>;
  totalBufferAmount_gt?: InputMaybe<Scalars['BigInt']>;
  totalBufferAmount_lt?: InputMaybe<Scalars['BigInt']>;
  totalBufferAmount_gte?: InputMaybe<Scalars['BigInt']>;
  totalBufferAmount_lte?: InputMaybe<Scalars['BigInt']>;
  totalBufferAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalBufferAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  poolDistributor?: InputMaybe<Scalars['String']>;
  poolDistributor_not?: InputMaybe<Scalars['String']>;
  poolDistributor_gt?: InputMaybe<Scalars['String']>;
  poolDistributor_lt?: InputMaybe<Scalars['String']>;
  poolDistributor_gte?: InputMaybe<Scalars['String']>;
  poolDistributor_lte?: InputMaybe<Scalars['String']>;
  poolDistributor_in?: InputMaybe<Array<Scalars['String']>>;
  poolDistributor_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolDistributor_contains?: InputMaybe<Scalars['String']>;
  poolDistributor_contains_nocase?: InputMaybe<Scalars['String']>;
  poolDistributor_not_contains?: InputMaybe<Scalars['String']>;
  poolDistributor_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolDistributor_starts_with?: InputMaybe<Scalars['String']>;
  poolDistributor_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolDistributor_not_starts_with?: InputMaybe<Scalars['String']>;
  poolDistributor_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolDistributor_ends_with?: InputMaybe<Scalars['String']>;
  poolDistributor_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolDistributor_not_ends_with?: InputMaybe<Scalars['String']>;
  poolDistributor_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolDistributor_?: InputMaybe<PoolDistributor_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BufferAdjustedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BufferAdjustedEvent_filter>>>;
};

export type BufferAdjustedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'bufferDelta'
  | 'newBufferAmount'
  | 'totalBufferAmount'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__updatedAtTimestamp'
  | 'pool__updatedAtBlockNumber'
  | 'pool__totalUnits'
  | 'pool__totalConnectedUnits'
  | 'pool__totalDisconnectedUnits'
  | 'pool__totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'pool__totalAmountFlowedDistributedUntilUpdatedAt'
  | 'pool__totalAmountDistributedUntilUpdatedAt'
  | 'pool__totalFlowAdjustmentAmountDistributedUntilUpdatedAt'
  | 'pool__perUnitSettledValue'
  | 'pool__perUnitFlowRate'
  | 'pool__totalMembers'
  | 'pool__totalConnectedMembers'
  | 'pool__totalDisconnectedMembers'
  | 'pool__adjustmentFlowRate'
  | 'pool__flowRate'
  | 'pool__totalBuffer'
  | 'poolDistributor'
  | 'poolDistributor__id'
  | 'poolDistributor__createdAtTimestamp'
  | 'poolDistributor__createdAtBlockNumber'
  | 'poolDistributor__updatedAtTimestamp'
  | 'poolDistributor__updatedAtBlockNumber'
  | 'poolDistributor__totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'poolDistributor__totalAmountFlowedDistributedUntilUpdatedAt'
  | 'poolDistributor__totalAmountDistributedUntilUpdatedAt'
  | 'poolDistributor__totalBuffer'
  | 'poolDistributor__flowRate';

export type BurnedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `from`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  operator: Scalars['Bytes'];
  from: Scalars['Bytes'];
  token: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  data: Scalars['Bytes'];
  operatorData: Scalars['Bytes'];
};

export type BurnedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_gt?: InputMaybe<Scalars['Bytes']>;
  operator_lt?: InputMaybe<Scalars['Bytes']>;
  operator_gte?: InputMaybe<Scalars['Bytes']>;
  operator_lte?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_gt?: InputMaybe<Scalars['Bytes']>;
  from_lt?: InputMaybe<Scalars['Bytes']>;
  from_gte?: InputMaybe<Scalars['Bytes']>;
  from_lte?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  data?: InputMaybe<Scalars['Bytes']>;
  data_not?: InputMaybe<Scalars['Bytes']>;
  data_gt?: InputMaybe<Scalars['Bytes']>;
  data_lt?: InputMaybe<Scalars['Bytes']>;
  data_gte?: InputMaybe<Scalars['Bytes']>;
  data_lte?: InputMaybe<Scalars['Bytes']>;
  data_in?: InputMaybe<Array<Scalars['Bytes']>>;
  data_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  data_contains?: InputMaybe<Scalars['Bytes']>;
  data_not_contains?: InputMaybe<Scalars['Bytes']>;
  operatorData?: InputMaybe<Scalars['Bytes']>;
  operatorData_not?: InputMaybe<Scalars['Bytes']>;
  operatorData_gt?: InputMaybe<Scalars['Bytes']>;
  operatorData_lt?: InputMaybe<Scalars['Bytes']>;
  operatorData_gte?: InputMaybe<Scalars['Bytes']>;
  operatorData_lte?: InputMaybe<Scalars['Bytes']>;
  operatorData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operatorData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operatorData_contains?: InputMaybe<Scalars['Bytes']>;
  operatorData_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BurnedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BurnedEvent_filter>>>;
};

export type BurnedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'operator'
  | 'from'
  | 'token'
  | 'amount'
  | 'data'
  | 'operatorData';

export type CFAv1LiquidationPeriodChangedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `governanceAddress`
   * addresses[1] = `host`
   * addresses[2] = `superToken`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  order: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  host: Scalars['Bytes'];
  superToken: Scalars['Bytes'];
  isKeySet: Scalars['Boolean'];
  liquidationPeriod: Scalars['BigInt'];
};

export type CFAv1LiquidationPeriodChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  governanceAddress?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_gt?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_lt?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_gte?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_lte?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  host?: InputMaybe<Scalars['Bytes']>;
  host_not?: InputMaybe<Scalars['Bytes']>;
  host_gt?: InputMaybe<Scalars['Bytes']>;
  host_lt?: InputMaybe<Scalars['Bytes']>;
  host_gte?: InputMaybe<Scalars['Bytes']>;
  host_lte?: InputMaybe<Scalars['Bytes']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_contains?: InputMaybe<Scalars['Bytes']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']>;
  superToken?: InputMaybe<Scalars['Bytes']>;
  superToken_not?: InputMaybe<Scalars['Bytes']>;
  superToken_gt?: InputMaybe<Scalars['Bytes']>;
  superToken_lt?: InputMaybe<Scalars['Bytes']>;
  superToken_gte?: InputMaybe<Scalars['Bytes']>;
  superToken_lte?: InputMaybe<Scalars['Bytes']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_contains?: InputMaybe<Scalars['Bytes']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  isKeySet?: InputMaybe<Scalars['Boolean']>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  liquidationPeriod?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_not?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_gt?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_lt?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_gte?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_lte?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidationPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CFAv1LiquidationPeriodChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CFAv1LiquidationPeriodChangedEvent_filter>>>;
};

export type CFAv1LiquidationPeriodChangedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'governanceAddress'
  | 'addresses'
  | 'blockNumber'
  | 'order'
  | 'logIndex'
  | 'host'
  | 'superToken'
  | 'isKeySet'
  | 'liquidationPeriod';

export type ConfigChangedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `governanceAddress`
   * addresses[1] = `host`
   * addresses[2] = `superToken`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  host: Scalars['Bytes'];
  superToken: Scalars['Bytes'];
  key: Scalars['Bytes'];
  isKeySet: Scalars['Boolean'];
  value: Scalars['BigInt'];
};

export type ConfigChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  governanceAddress?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_gt?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_lt?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_gte?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_lte?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  host?: InputMaybe<Scalars['Bytes']>;
  host_not?: InputMaybe<Scalars['Bytes']>;
  host_gt?: InputMaybe<Scalars['Bytes']>;
  host_lt?: InputMaybe<Scalars['Bytes']>;
  host_gte?: InputMaybe<Scalars['Bytes']>;
  host_lte?: InputMaybe<Scalars['Bytes']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_contains?: InputMaybe<Scalars['Bytes']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']>;
  superToken?: InputMaybe<Scalars['Bytes']>;
  superToken_not?: InputMaybe<Scalars['Bytes']>;
  superToken_gt?: InputMaybe<Scalars['Bytes']>;
  superToken_lt?: InputMaybe<Scalars['Bytes']>;
  superToken_gte?: InputMaybe<Scalars['Bytes']>;
  superToken_lte?: InputMaybe<Scalars['Bytes']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_contains?: InputMaybe<Scalars['Bytes']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  key?: InputMaybe<Scalars['Bytes']>;
  key_not?: InputMaybe<Scalars['Bytes']>;
  key_gt?: InputMaybe<Scalars['Bytes']>;
  key_lt?: InputMaybe<Scalars['Bytes']>;
  key_gte?: InputMaybe<Scalars['Bytes']>;
  key_lte?: InputMaybe<Scalars['Bytes']>;
  key_in?: InputMaybe<Array<Scalars['Bytes']>>;
  key_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  key_contains?: InputMaybe<Scalars['Bytes']>;
  key_not_contains?: InputMaybe<Scalars['Bytes']>;
  isKeySet?: InputMaybe<Scalars['Boolean']>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  value?: InputMaybe<Scalars['BigInt']>;
  value_not?: InputMaybe<Scalars['BigInt']>;
  value_gt?: InputMaybe<Scalars['BigInt']>;
  value_lt?: InputMaybe<Scalars['BigInt']>;
  value_gte?: InputMaybe<Scalars['BigInt']>;
  value_lte?: InputMaybe<Scalars['BigInt']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ConfigChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ConfigChangedEvent_filter>>>;
};

export type ConfigChangedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'governanceAddress'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'host'
  | 'superToken'
  | 'key'
  | 'isKeySet'
  | 'value';

export type CustomSuperTokenCreatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
};

export type CustomSuperTokenCreatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CustomSuperTokenCreatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CustomSuperTokenCreatedEvent_filter>>>;
};

export type CustomSuperTokenCreatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token';

export type DistributionClaimedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `pool`
   * addresses[2] = `member`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  claimedAmount: Scalars['BigInt'];
  totalClaimed: Scalars['BigInt'];
  pool: Pool;
  poolMember: PoolMember;
};

export type DistributionClaimedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  claimedAmount?: InputMaybe<Scalars['BigInt']>;
  claimedAmount_not?: InputMaybe<Scalars['BigInt']>;
  claimedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  claimedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  claimedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  claimedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  claimedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  claimedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalClaimed?: InputMaybe<Scalars['BigInt']>;
  totalClaimed_not?: InputMaybe<Scalars['BigInt']>;
  totalClaimed_gt?: InputMaybe<Scalars['BigInt']>;
  totalClaimed_lt?: InputMaybe<Scalars['BigInt']>;
  totalClaimed_gte?: InputMaybe<Scalars['BigInt']>;
  totalClaimed_lte?: InputMaybe<Scalars['BigInt']>;
  totalClaimed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalClaimed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  poolMember?: InputMaybe<Scalars['String']>;
  poolMember_not?: InputMaybe<Scalars['String']>;
  poolMember_gt?: InputMaybe<Scalars['String']>;
  poolMember_lt?: InputMaybe<Scalars['String']>;
  poolMember_gte?: InputMaybe<Scalars['String']>;
  poolMember_lte?: InputMaybe<Scalars['String']>;
  poolMember_in?: InputMaybe<Array<Scalars['String']>>;
  poolMember_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolMember_contains?: InputMaybe<Scalars['String']>;
  poolMember_contains_nocase?: InputMaybe<Scalars['String']>;
  poolMember_not_contains?: InputMaybe<Scalars['String']>;
  poolMember_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolMember_starts_with?: InputMaybe<Scalars['String']>;
  poolMember_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolMember_not_starts_with?: InputMaybe<Scalars['String']>;
  poolMember_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolMember_ends_with?: InputMaybe<Scalars['String']>;
  poolMember_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolMember_not_ends_with?: InputMaybe<Scalars['String']>;
  poolMember_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolMember_?: InputMaybe<PoolMember_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DistributionClaimedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DistributionClaimedEvent_filter>>>;
};

export type DistributionClaimedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'claimedAmount'
  | 'totalClaimed'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__updatedAtTimestamp'
  | 'pool__updatedAtBlockNumber'
  | 'pool__totalUnits'
  | 'pool__totalConnectedUnits'
  | 'pool__totalDisconnectedUnits'
  | 'pool__totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'pool__totalAmountFlowedDistributedUntilUpdatedAt'
  | 'pool__totalAmountDistributedUntilUpdatedAt'
  | 'pool__totalFlowAdjustmentAmountDistributedUntilUpdatedAt'
  | 'pool__perUnitSettledValue'
  | 'pool__perUnitFlowRate'
  | 'pool__totalMembers'
  | 'pool__totalConnectedMembers'
  | 'pool__totalDisconnectedMembers'
  | 'pool__adjustmentFlowRate'
  | 'pool__flowRate'
  | 'pool__totalBuffer'
  | 'poolMember'
  | 'poolMember__id'
  | 'poolMember__createdAtTimestamp'
  | 'poolMember__createdAtBlockNumber'
  | 'poolMember__updatedAtTimestamp'
  | 'poolMember__updatedAtBlockNumber'
  | 'poolMember__units'
  | 'poolMember__isConnected'
  | 'poolMember__totalAmountClaimed'
  | 'poolMember__poolTotalAmountDistributedUntilUpdatedAt'
  | 'poolMember__totalAmountReceivedUntilUpdatedAt'
  | 'poolMember__syncedPerUnitSettledValue'
  | 'poolMember__syncedPerUnitFlowRate';

/**
 * Event: An interface which is shared by all event entities and contains basic transaction data.
 *
 */
export type Event = {
  /**
   * The id of the event entity.
   *
   */
  id: Scalars['ID'];
  /**
   * The block number which the event was logged in.
   *
   */
  blockNumber: Scalars['BigInt'];
  /**
   * The index of the event, e.g. first event emitted would have `logIndex` of 0.
   *
   */
  logIndex: Scalars['BigInt'];
  /**
   * A number used internally to sort the order of transactions.
   * The formula: `blockNumber * ORDER_MULTIPLIER + logIndex`
   * where: ORDER_MULTIPLIER = 10000
   *
   */
  order: Scalars['BigInt'];
  /**
   * The name of the event - is a 1-to-1 match with the name in our smart contracts.
   *
   */
  name: Scalars['String'];
  /**
   * Contains the addresses for accounts that were "impacted" by the event.
   * This typically involves accounts which experienced a state change as a result of the transaction which emitted this event.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  /**
   * The block timestamp which the event was logged in.
   *
   */
  timestamp: Scalars['BigInt'];
  /**
   * The transaction hash of the transaction that the event was logged in.
   *
   */
  transactionHash: Scalars['Bytes'];
  /**
   * The gas price of the transaction that the event was logged in.
   *
   */
  gasPrice: Scalars['BigInt'];
  /**
   * The gas used for this transaction.
   *
   */
  gasUsed: Scalars['BigInt'];
};

export type Event_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Event_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Event_filter>>>;
};

export type Event_orderBy =
  | 'id'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'name'
  | 'addresses'
  | 'timestamp'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed';

export type ExitRateChangedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  /**
   * The address of the `token` (supertoken).
   *
   */
  token: Scalars['Bytes'];
  /**
   * The flowrate at which the bond is streamed back to the Patrician In Charge.
   *
   */
  exitRate: Scalars['BigInt'];
};

export type ExitRateChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  exitRate?: InputMaybe<Scalars['BigInt']>;
  exitRate_not?: InputMaybe<Scalars['BigInt']>;
  exitRate_gt?: InputMaybe<Scalars['BigInt']>;
  exitRate_lt?: InputMaybe<Scalars['BigInt']>;
  exitRate_gte?: InputMaybe<Scalars['BigInt']>;
  exitRate_lte?: InputMaybe<Scalars['BigInt']>;
  exitRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  exitRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ExitRateChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ExitRateChangedEvent_filter>>>;
};

export type ExitRateChangedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'exitRate';

export type FlowDistributionUpdatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `pool`
   * addresses[2] = `poolDistributor`
   * addresses[3] = `operator`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  operator: Scalars['Bytes'];
  oldFlowRate: Scalars['BigInt'];
  newDistributorToPoolFlowRate: Scalars['BigInt'];
  newTotalDistributionFlowRate: Scalars['BigInt'];
  adjustmentFlowRecipient: Scalars['Bytes'];
  adjustmentFlowRate: Scalars['BigInt'];
  totalUnits: Scalars['BigInt'];
  userData: Scalars['Bytes'];
  pool: Pool;
  poolDistributor: PoolDistributor;
};

export type FlowDistributionUpdatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_gt?: InputMaybe<Scalars['Bytes']>;
  operator_lt?: InputMaybe<Scalars['Bytes']>;
  operator_gte?: InputMaybe<Scalars['Bytes']>;
  operator_lte?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  oldFlowRate?: InputMaybe<Scalars['BigInt']>;
  oldFlowRate_not?: InputMaybe<Scalars['BigInt']>;
  oldFlowRate_gt?: InputMaybe<Scalars['BigInt']>;
  oldFlowRate_lt?: InputMaybe<Scalars['BigInt']>;
  oldFlowRate_gte?: InputMaybe<Scalars['BigInt']>;
  oldFlowRate_lte?: InputMaybe<Scalars['BigInt']>;
  oldFlowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oldFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newDistributorToPoolFlowRate?: InputMaybe<Scalars['BigInt']>;
  newDistributorToPoolFlowRate_not?: InputMaybe<Scalars['BigInt']>;
  newDistributorToPoolFlowRate_gt?: InputMaybe<Scalars['BigInt']>;
  newDistributorToPoolFlowRate_lt?: InputMaybe<Scalars['BigInt']>;
  newDistributorToPoolFlowRate_gte?: InputMaybe<Scalars['BigInt']>;
  newDistributorToPoolFlowRate_lte?: InputMaybe<Scalars['BigInt']>;
  newDistributorToPoolFlowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newDistributorToPoolFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newTotalDistributionFlowRate?: InputMaybe<Scalars['BigInt']>;
  newTotalDistributionFlowRate_not?: InputMaybe<Scalars['BigInt']>;
  newTotalDistributionFlowRate_gt?: InputMaybe<Scalars['BigInt']>;
  newTotalDistributionFlowRate_lt?: InputMaybe<Scalars['BigInt']>;
  newTotalDistributionFlowRate_gte?: InputMaybe<Scalars['BigInt']>;
  newTotalDistributionFlowRate_lte?: InputMaybe<Scalars['BigInt']>;
  newTotalDistributionFlowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newTotalDistributionFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  adjustmentFlowRecipient?: InputMaybe<Scalars['Bytes']>;
  adjustmentFlowRecipient_not?: InputMaybe<Scalars['Bytes']>;
  adjustmentFlowRecipient_gt?: InputMaybe<Scalars['Bytes']>;
  adjustmentFlowRecipient_lt?: InputMaybe<Scalars['Bytes']>;
  adjustmentFlowRecipient_gte?: InputMaybe<Scalars['Bytes']>;
  adjustmentFlowRecipient_lte?: InputMaybe<Scalars['Bytes']>;
  adjustmentFlowRecipient_in?: InputMaybe<Array<Scalars['Bytes']>>;
  adjustmentFlowRecipient_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  adjustmentFlowRecipient_contains?: InputMaybe<Scalars['Bytes']>;
  adjustmentFlowRecipient_not_contains?: InputMaybe<Scalars['Bytes']>;
  adjustmentFlowRate?: InputMaybe<Scalars['BigInt']>;
  adjustmentFlowRate_not?: InputMaybe<Scalars['BigInt']>;
  adjustmentFlowRate_gt?: InputMaybe<Scalars['BigInt']>;
  adjustmentFlowRate_lt?: InputMaybe<Scalars['BigInt']>;
  adjustmentFlowRate_gte?: InputMaybe<Scalars['BigInt']>;
  adjustmentFlowRate_lte?: InputMaybe<Scalars['BigInt']>;
  adjustmentFlowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  adjustmentFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnits?: InputMaybe<Scalars['BigInt']>;
  totalUnits_not?: InputMaybe<Scalars['BigInt']>;
  totalUnits_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnits_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnits_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnits_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnits_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnits_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_gt?: InputMaybe<Scalars['Bytes']>;
  userData_lt?: InputMaybe<Scalars['Bytes']>;
  userData_gte?: InputMaybe<Scalars['Bytes']>;
  userData_lte?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  poolDistributor?: InputMaybe<Scalars['String']>;
  poolDistributor_not?: InputMaybe<Scalars['String']>;
  poolDistributor_gt?: InputMaybe<Scalars['String']>;
  poolDistributor_lt?: InputMaybe<Scalars['String']>;
  poolDistributor_gte?: InputMaybe<Scalars['String']>;
  poolDistributor_lte?: InputMaybe<Scalars['String']>;
  poolDistributor_in?: InputMaybe<Array<Scalars['String']>>;
  poolDistributor_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolDistributor_contains?: InputMaybe<Scalars['String']>;
  poolDistributor_contains_nocase?: InputMaybe<Scalars['String']>;
  poolDistributor_not_contains?: InputMaybe<Scalars['String']>;
  poolDistributor_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolDistributor_starts_with?: InputMaybe<Scalars['String']>;
  poolDistributor_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolDistributor_not_starts_with?: InputMaybe<Scalars['String']>;
  poolDistributor_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolDistributor_ends_with?: InputMaybe<Scalars['String']>;
  poolDistributor_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolDistributor_not_ends_with?: InputMaybe<Scalars['String']>;
  poolDistributor_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolDistributor_?: InputMaybe<PoolDistributor_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FlowDistributionUpdatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FlowDistributionUpdatedEvent_filter>>>;
};

export type FlowDistributionUpdatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'operator'
  | 'oldFlowRate'
  | 'newDistributorToPoolFlowRate'
  | 'newTotalDistributionFlowRate'
  | 'adjustmentFlowRecipient'
  | 'adjustmentFlowRate'
  | 'totalUnits'
  | 'userData'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__updatedAtTimestamp'
  | 'pool__updatedAtBlockNumber'
  | 'pool__totalUnits'
  | 'pool__totalConnectedUnits'
  | 'pool__totalDisconnectedUnits'
  | 'pool__totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'pool__totalAmountFlowedDistributedUntilUpdatedAt'
  | 'pool__totalAmountDistributedUntilUpdatedAt'
  | 'pool__totalFlowAdjustmentAmountDistributedUntilUpdatedAt'
  | 'pool__perUnitSettledValue'
  | 'pool__perUnitFlowRate'
  | 'pool__totalMembers'
  | 'pool__totalConnectedMembers'
  | 'pool__totalDisconnectedMembers'
  | 'pool__adjustmentFlowRate'
  | 'pool__flowRate'
  | 'pool__totalBuffer'
  | 'poolDistributor'
  | 'poolDistributor__id'
  | 'poolDistributor__createdAtTimestamp'
  | 'poolDistributor__createdAtBlockNumber'
  | 'poolDistributor__updatedAtTimestamp'
  | 'poolDistributor__updatedAtBlockNumber'
  | 'poolDistributor__totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'poolDistributor__totalAmountFlowedDistributedUntilUpdatedAt'
  | 'poolDistributor__totalAmountDistributedUntilUpdatedAt'
  | 'poolDistributor__totalBuffer'
  | 'poolDistributor__flowRate';

/**
 * FlowOperator: A higher order entity that of a flow operator for an `AccountTokenSnapshot`.
 *
 */
export type FlowOperator = {
  /**
   * ID composed of: flowOperator-token-sender
   *
   */
  id: Scalars['ID'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  updatedAtTimestamp: Scalars['BigInt'];
  updatedAtBlockNumber: Scalars['BigInt'];
  /**
   * The permissions granted to the `flowOperator`.
   * Bitmask representation:
   * Delete | Update | Create
   * | D | U | C |
   * | 0 | 0 | 0 |
   *
   */
  permissions: Scalars['Int'];
  /**
   * The flow rate allowance granted to the `flowOperator` by the `sender`. This can be reset if the `sender` updates the `flowOperator` flow rate allowance.
   *
   */
  flowRateAllowanceGranted: Scalars['BigInt'];
  /**
   * The remaining flow rate allowance the `flowOperator` has.
   * This will go down every time when the `flowOperator` uses the allowance, that is, if they increase flowRate for `sender` or create a new flow on behalf of `sender`.
   * It can only be reset if the `sender` updates the flow rate allowance.
   * NOTE: this value will NOT go down if max flow rate allowance is set.
   *
   */
  flowRateAllowanceRemaining: Scalars['BigInt'];
  /**
   * The transfer allowance granted to the `flowOperator` by the `sender`.
   *
   */
  allowance: Scalars['BigInt'];
  flowOperator: Scalars['Bytes'];
  sender: Account;
  token: Token;
  accountTokenSnapshot: AccountTokenSnapshot;
  flowOperatorUpdatedEvents: Array<FlowOperatorUpdatedEvent>;
};


/**
 * FlowOperator: A higher order entity that of a flow operator for an `AccountTokenSnapshot`.
 *
 */
export type FlowOperatorflowOperatorUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowOperatorUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowOperatorUpdatedEvent_filter>;
};

export type FlowOperatorUpdatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = sender
   * addresses[2] = `flowOperator`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  /**
   * The address of the `token` being streamed.
   *
   */
  token: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  /**
   * The permissions granted to the `flowOperator`.
   * Octo bitmask representation.
   *
   */
  permissions: Scalars['Int'];
  flowRateAllowance: Scalars['BigInt'];
  flowOperator: FlowOperator;
};

export type FlowOperatorUpdatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  permissions?: InputMaybe<Scalars['Int']>;
  permissions_not?: InputMaybe<Scalars['Int']>;
  permissions_gt?: InputMaybe<Scalars['Int']>;
  permissions_lt?: InputMaybe<Scalars['Int']>;
  permissions_gte?: InputMaybe<Scalars['Int']>;
  permissions_lte?: InputMaybe<Scalars['Int']>;
  permissions_in?: InputMaybe<Array<Scalars['Int']>>;
  permissions_not_in?: InputMaybe<Array<Scalars['Int']>>;
  flowRateAllowance?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowance_not?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowance_gt?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowance_lt?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowance_gte?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowance_lte?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRateAllowance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowOperator?: InputMaybe<Scalars['String']>;
  flowOperator_not?: InputMaybe<Scalars['String']>;
  flowOperator_gt?: InputMaybe<Scalars['String']>;
  flowOperator_lt?: InputMaybe<Scalars['String']>;
  flowOperator_gte?: InputMaybe<Scalars['String']>;
  flowOperator_lte?: InputMaybe<Scalars['String']>;
  flowOperator_in?: InputMaybe<Array<Scalars['String']>>;
  flowOperator_not_in?: InputMaybe<Array<Scalars['String']>>;
  flowOperator_contains?: InputMaybe<Scalars['String']>;
  flowOperator_contains_nocase?: InputMaybe<Scalars['String']>;
  flowOperator_not_contains?: InputMaybe<Scalars['String']>;
  flowOperator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  flowOperator_starts_with?: InputMaybe<Scalars['String']>;
  flowOperator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  flowOperator_not_starts_with?: InputMaybe<Scalars['String']>;
  flowOperator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  flowOperator_ends_with?: InputMaybe<Scalars['String']>;
  flowOperator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  flowOperator_not_ends_with?: InputMaybe<Scalars['String']>;
  flowOperator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  flowOperator_?: InputMaybe<FlowOperator_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FlowOperatorUpdatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FlowOperatorUpdatedEvent_filter>>>;
};

export type FlowOperatorUpdatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'sender'
  | 'permissions'
  | 'flowRateAllowance'
  | 'flowOperator'
  | 'flowOperator__id'
  | 'flowOperator__createdAtTimestamp'
  | 'flowOperator__createdAtBlockNumber'
  | 'flowOperator__updatedAtTimestamp'
  | 'flowOperator__updatedAtBlockNumber'
  | 'flowOperator__permissions'
  | 'flowOperator__flowRateAllowanceGranted'
  | 'flowOperator__flowRateAllowanceRemaining'
  | 'flowOperator__allowance'
  | 'flowOperator__flowOperator';

export type FlowOperator_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  permissions?: InputMaybe<Scalars['Int']>;
  permissions_not?: InputMaybe<Scalars['Int']>;
  permissions_gt?: InputMaybe<Scalars['Int']>;
  permissions_lt?: InputMaybe<Scalars['Int']>;
  permissions_gte?: InputMaybe<Scalars['Int']>;
  permissions_lte?: InputMaybe<Scalars['Int']>;
  permissions_in?: InputMaybe<Array<Scalars['Int']>>;
  permissions_not_in?: InputMaybe<Array<Scalars['Int']>>;
  flowRateAllowanceGranted?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceGranted_not?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceGranted_gt?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceGranted_lt?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceGranted_gte?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceGranted_lte?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceGranted_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRateAllowanceGranted_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRateAllowanceRemaining?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceRemaining_not?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceRemaining_gt?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceRemaining_lt?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceRemaining_gte?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceRemaining_lte?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceRemaining_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRateAllowanceRemaining_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allowance?: InputMaybe<Scalars['BigInt']>;
  allowance_not?: InputMaybe<Scalars['BigInt']>;
  allowance_gt?: InputMaybe<Scalars['BigInt']>;
  allowance_lt?: InputMaybe<Scalars['BigInt']>;
  allowance_gte?: InputMaybe<Scalars['BigInt']>;
  allowance_lte?: InputMaybe<Scalars['BigInt']>;
  allowance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allowance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowOperator?: InputMaybe<Scalars['Bytes']>;
  flowOperator_not?: InputMaybe<Scalars['Bytes']>;
  flowOperator_gt?: InputMaybe<Scalars['Bytes']>;
  flowOperator_lt?: InputMaybe<Scalars['Bytes']>;
  flowOperator_gte?: InputMaybe<Scalars['Bytes']>;
  flowOperator_lte?: InputMaybe<Scalars['Bytes']>;
  flowOperator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  flowOperator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  flowOperator_contains?: InputMaybe<Scalars['Bytes']>;
  flowOperator_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender?: InputMaybe<Scalars['String']>;
  sender_not?: InputMaybe<Scalars['String']>;
  sender_gt?: InputMaybe<Scalars['String']>;
  sender_lt?: InputMaybe<Scalars['String']>;
  sender_gte?: InputMaybe<Scalars['String']>;
  sender_lte?: InputMaybe<Scalars['String']>;
  sender_in?: InputMaybe<Array<Scalars['String']>>;
  sender_not_in?: InputMaybe<Array<Scalars['String']>>;
  sender_contains?: InputMaybe<Scalars['String']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_not_contains?: InputMaybe<Scalars['String']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_starts_with?: InputMaybe<Scalars['String']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_starts_with?: InputMaybe<Scalars['String']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_ends_with?: InputMaybe<Scalars['String']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_?: InputMaybe<Account_filter>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  accountTokenSnapshot?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_gt?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_lt?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_gte?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_lte?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_in?: InputMaybe<Array<Scalars['String']>>;
  accountTokenSnapshot_not_in?: InputMaybe<Array<Scalars['String']>>;
  accountTokenSnapshot_contains?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_contains_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_contains?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_contains_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_starts_with?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_starts_with_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_starts_with?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_ends_with?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_ends_with_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_ends_with?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_?: InputMaybe<AccountTokenSnapshot_filter>;
  flowOperatorUpdatedEvents_?: InputMaybe<FlowOperatorUpdatedEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FlowOperator_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FlowOperator_filter>>>;
};

export type FlowOperator_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'permissions'
  | 'flowRateAllowanceGranted'
  | 'flowRateAllowanceRemaining'
  | 'allowance'
  | 'flowOperator'
  | 'sender'
  | 'sender__id'
  | 'sender__createdAtTimestamp'
  | 'sender__createdAtBlockNumber'
  | 'sender__updatedAtTimestamp'
  | 'sender__updatedAtBlockNumber'
  | 'sender__isSuperApp'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress'
  | 'accountTokenSnapshot'
  | 'accountTokenSnapshot__id'
  | 'accountTokenSnapshot__createdAtTimestamp'
  | 'accountTokenSnapshot__createdAtBlockNumber'
  | 'accountTokenSnapshot__updatedAtTimestamp'
  | 'accountTokenSnapshot__updatedAtBlockNumber'
  | 'accountTokenSnapshot__isLiquidationEstimateOptimistic'
  | 'accountTokenSnapshot__maybeCriticalAtTimestamp'
  | 'accountTokenSnapshot__totalNumberOfActiveStreams'
  | 'accountTokenSnapshot__totalCFANumberOfActiveStreams'
  | 'accountTokenSnapshot__totalGDANumberOfActiveStreams'
  | 'accountTokenSnapshot__activeOutgoingStreamCount'
  | 'accountTokenSnapshot__activeCFAOutgoingStreamCount'
  | 'accountTokenSnapshot__activeGDAOutgoingStreamCount'
  | 'accountTokenSnapshot__activeIncomingStreamCount'
  | 'accountTokenSnapshot__totalNumberOfClosedStreams'
  | 'accountTokenSnapshot__totalCFANumberOfClosedStreams'
  | 'accountTokenSnapshot__totalGDANumberOfClosedStreams'
  | 'accountTokenSnapshot__inactiveOutgoingStreamCount'
  | 'accountTokenSnapshot__inactiveCFAOutgoingStreamCount'
  | 'accountTokenSnapshot__inactiveGDAOutgoingStreamCount'
  | 'accountTokenSnapshot__inactiveIncomingStreamCount'
  | 'accountTokenSnapshot__totalSubscriptionsWithUnits'
  | 'accountTokenSnapshot__totalApprovedSubscriptions'
  | 'accountTokenSnapshot__totalMembershipsWithUnits'
  | 'accountTokenSnapshot__totalConnectedMemberships'
  | 'accountTokenSnapshot__balanceUntilUpdatedAt'
  | 'accountTokenSnapshot__totalDeposit'
  | 'accountTokenSnapshot__totalCFADeposit'
  | 'accountTokenSnapshot__totalGDADeposit'
  | 'accountTokenSnapshot__totalNetFlowRate'
  | 'accountTokenSnapshot__totalCFANetFlowRate'
  | 'accountTokenSnapshot__totalInflowRate'
  | 'accountTokenSnapshot__totalOutflowRate'
  | 'accountTokenSnapshot__totalCFAOutflowRate'
  | 'accountTokenSnapshot__totalGDAOutflowRate'
  | 'accountTokenSnapshot__totalAmountStreamedInUntilUpdatedAt'
  | 'accountTokenSnapshot__totalAmountStreamedOutUntilUpdatedAt'
  | 'accountTokenSnapshot__totalCFAAmountStreamedOutUntilUpdatedAt'
  | 'accountTokenSnapshot__totalAmountStreamedUntilUpdatedAt'
  | 'accountTokenSnapshot__totalCFAAmountStreamedUntilUpdatedAt'
  | 'accountTokenSnapshot__totalAmountTransferredUntilUpdatedAt'
  | 'flowOperatorUpdatedEvents';

/**
 * FlowUpdated: An `Event` entity that is emitted
 * when a flow is created, updated, or deleted.
 *
 */
export type FlowUpdatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (supertoken)
   * addresses[1] = `sender`
   * addresses[2] = `receiver`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  /**
   * The address of the `token` (supertoken) being streamed.
   *
   */
  token: Scalars['Bytes'];
  /**
   * The address of the flow sender.
   *
   */
  sender: Scalars['Bytes'];
  /**
   * The address of the flow receiver.
   *
   */
  receiver: Scalars['Bytes'];
  /**
   * The address that is executing the flow update transaction.
   * This will be the zero address until the flowOperator feature is live.
   *
   */
  flowOperator: Scalars['Bytes'];
  /**
   * The flow rate per second.
   *
   */
  flowRate: Scalars['BigInt'];
  /**
   * The total (global/account level) flow rate of `sender` for `token` as of this event.
   *
   */
  totalSenderFlowRate: Scalars['BigInt'];
  /**
   * The total (global/account level) flow rate of `receiver` for `token` as of this event.
   *
   */
  totalReceiverFlowRate: Scalars['BigInt'];
  /**
   * The deposit amount put up for the creation of the flow.
   *
   */
  deposit: Scalars['BigInt'];
  /**
   * Arbitrary bytes (additional data) passed upon flow creation.
   *
   */
  userData: Scalars['Bytes'];
  /**
   * The previous flow rate, the absolute (positive) value.
   *
   */
  oldFlowRate: Scalars['BigInt'];
  /**
   * The "type" of the `FlowUpdated` event.
   * 0 = create
   * 1 = update
   * 2 = terminate
   *
   */
  type: Scalars['Int'];
  /**
   * The total amount streamed until the timestamp
   * for the Stream entity linked to this event.
   *
   */
  totalAmountStreamedUntilTimestamp: Scalars['BigInt'];
  /**
   * The stream entity which is being modified.
   *
   */
  stream: Stream;
};

export type FlowUpdatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  receiver?: InputMaybe<Scalars['Bytes']>;
  receiver_not?: InputMaybe<Scalars['Bytes']>;
  receiver_gt?: InputMaybe<Scalars['Bytes']>;
  receiver_lt?: InputMaybe<Scalars['Bytes']>;
  receiver_gte?: InputMaybe<Scalars['Bytes']>;
  receiver_lte?: InputMaybe<Scalars['Bytes']>;
  receiver_in?: InputMaybe<Array<Scalars['Bytes']>>;
  receiver_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  receiver_contains?: InputMaybe<Scalars['Bytes']>;
  receiver_not_contains?: InputMaybe<Scalars['Bytes']>;
  flowOperator?: InputMaybe<Scalars['Bytes']>;
  flowOperator_not?: InputMaybe<Scalars['Bytes']>;
  flowOperator_gt?: InputMaybe<Scalars['Bytes']>;
  flowOperator_lt?: InputMaybe<Scalars['Bytes']>;
  flowOperator_gte?: InputMaybe<Scalars['Bytes']>;
  flowOperator_lte?: InputMaybe<Scalars['Bytes']>;
  flowOperator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  flowOperator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  flowOperator_contains?: InputMaybe<Scalars['Bytes']>;
  flowOperator_not_contains?: InputMaybe<Scalars['Bytes']>;
  flowRate?: InputMaybe<Scalars['BigInt']>;
  flowRate_not?: InputMaybe<Scalars['BigInt']>;
  flowRate_gt?: InputMaybe<Scalars['BigInt']>;
  flowRate_lt?: InputMaybe<Scalars['BigInt']>;
  flowRate_gte?: InputMaybe<Scalars['BigInt']>;
  flowRate_lte?: InputMaybe<Scalars['BigInt']>;
  flowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSenderFlowRate?: InputMaybe<Scalars['BigInt']>;
  totalSenderFlowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalSenderFlowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalSenderFlowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalSenderFlowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalSenderFlowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalSenderFlowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSenderFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalReceiverFlowRate?: InputMaybe<Scalars['BigInt']>;
  totalReceiverFlowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalReceiverFlowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalReceiverFlowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalReceiverFlowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalReceiverFlowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalReceiverFlowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalReceiverFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit?: InputMaybe<Scalars['BigInt']>;
  deposit_not?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_gt?: InputMaybe<Scalars['Bytes']>;
  userData_lt?: InputMaybe<Scalars['Bytes']>;
  userData_gte?: InputMaybe<Scalars['Bytes']>;
  userData_lte?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  oldFlowRate?: InputMaybe<Scalars['BigInt']>;
  oldFlowRate_not?: InputMaybe<Scalars['BigInt']>;
  oldFlowRate_gt?: InputMaybe<Scalars['BigInt']>;
  oldFlowRate_lt?: InputMaybe<Scalars['BigInt']>;
  oldFlowRate_gte?: InputMaybe<Scalars['BigInt']>;
  oldFlowRate_lte?: InputMaybe<Scalars['BigInt']>;
  oldFlowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oldFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  type?: InputMaybe<Scalars['Int']>;
  type_not?: InputMaybe<Scalars['Int']>;
  type_gt?: InputMaybe<Scalars['Int']>;
  type_lt?: InputMaybe<Scalars['Int']>;
  type_gte?: InputMaybe<Scalars['Int']>;
  type_lte?: InputMaybe<Scalars['Int']>;
  type_in?: InputMaybe<Array<Scalars['Int']>>;
  type_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalAmountStreamedUntilTimestamp?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedUntilTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stream?: InputMaybe<Scalars['String']>;
  stream_not?: InputMaybe<Scalars['String']>;
  stream_gt?: InputMaybe<Scalars['String']>;
  stream_lt?: InputMaybe<Scalars['String']>;
  stream_gte?: InputMaybe<Scalars['String']>;
  stream_lte?: InputMaybe<Scalars['String']>;
  stream_in?: InputMaybe<Array<Scalars['String']>>;
  stream_not_in?: InputMaybe<Array<Scalars['String']>>;
  stream_contains?: InputMaybe<Scalars['String']>;
  stream_contains_nocase?: InputMaybe<Scalars['String']>;
  stream_not_contains?: InputMaybe<Scalars['String']>;
  stream_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stream_starts_with?: InputMaybe<Scalars['String']>;
  stream_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stream_not_starts_with?: InputMaybe<Scalars['String']>;
  stream_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stream_ends_with?: InputMaybe<Scalars['String']>;
  stream_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stream_not_ends_with?: InputMaybe<Scalars['String']>;
  stream_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stream_?: InputMaybe<Stream_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FlowUpdatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FlowUpdatedEvent_filter>>>;
};

export type FlowUpdatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'sender'
  | 'receiver'
  | 'flowOperator'
  | 'flowRate'
  | 'totalSenderFlowRate'
  | 'totalReceiverFlowRate'
  | 'deposit'
  | 'userData'
  | 'oldFlowRate'
  | 'type'
  | 'totalAmountStreamedUntilTimestamp'
  | 'stream'
  | 'stream__id'
  | 'stream__createdAtTimestamp'
  | 'stream__createdAtBlockNumber'
  | 'stream__updatedAtTimestamp'
  | 'stream__updatedAtBlockNumber'
  | 'stream__currentFlowRate'
  | 'stream__deposit'
  | 'stream__streamedUntilUpdatedAt'
  | 'stream__userData';

export type GovernanceReplacedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `oldGovernance`
   * addresses[1] = `newGovernance`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  oldGovernance: Scalars['Bytes'];
  newGovernance: Scalars['Bytes'];
};

export type GovernanceReplacedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  oldGovernance?: InputMaybe<Scalars['Bytes']>;
  oldGovernance_not?: InputMaybe<Scalars['Bytes']>;
  oldGovernance_gt?: InputMaybe<Scalars['Bytes']>;
  oldGovernance_lt?: InputMaybe<Scalars['Bytes']>;
  oldGovernance_gte?: InputMaybe<Scalars['Bytes']>;
  oldGovernance_lte?: InputMaybe<Scalars['Bytes']>;
  oldGovernance_in?: InputMaybe<Array<Scalars['Bytes']>>;
  oldGovernance_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  oldGovernance_contains?: InputMaybe<Scalars['Bytes']>;
  oldGovernance_not_contains?: InputMaybe<Scalars['Bytes']>;
  newGovernance?: InputMaybe<Scalars['Bytes']>;
  newGovernance_not?: InputMaybe<Scalars['Bytes']>;
  newGovernance_gt?: InputMaybe<Scalars['Bytes']>;
  newGovernance_lt?: InputMaybe<Scalars['Bytes']>;
  newGovernance_gte?: InputMaybe<Scalars['Bytes']>;
  newGovernance_lte?: InputMaybe<Scalars['Bytes']>;
  newGovernance_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newGovernance_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newGovernance_contains?: InputMaybe<Scalars['Bytes']>;
  newGovernance_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GovernanceReplacedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GovernanceReplacedEvent_filter>>>;
};

export type GovernanceReplacedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'addresses'
  | 'oldGovernance'
  | 'newGovernance';

/**
 * Index: An Index higher order entity.
 *
 */
export type Index = {
  /**
   * ID composed of: publisherAddress-tokenAddress-indexId
   *
   */
  id: Scalars['ID'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  updatedAtTimestamp: Scalars['BigInt'];
  updatedAtBlockNumber: Scalars['BigInt'];
  /**
   * NOTE: indexId is not the same as the id of the `Index` entity.
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt'];
  indexValue: Scalars['BigInt'];
  /**
   * The number of subscriptions which have units allocated to them on the `Index`.
   *
   */
  totalSubscriptionsWithUnits: Scalars['Int'];
  /**
   * The number of units allocated by the `Index` that are pending.
   * This refers to the current (as of updatedAt) `totalUnitsPending`-not all that has ever been pending.
   *
   */
  totalUnitsPending: Scalars['BigInt'];
  /**
   * The number of units allocated by the `Index` that are approved.
   * This refers to the current (as of updatedAt) `totalUnitsApproved`-not all that has ever been approved.
   *
   */
  totalUnitsApproved: Scalars['BigInt'];
  /**
   * The sum of `totalUnitsPending` and `totalUnitsApproved`.
   *
   */
  totalUnits: Scalars['BigInt'];
  /**
   * The total amount distributed from this `Index`.
   *
   */
  totalAmountDistributedUntilUpdatedAt: Scalars['BigInt'];
  token: Token;
  publisher: Account;
  /**
   * The subscriptions of the index, it will include approved, unapproved
   * and deleted subscriptions.
   *
   */
  subscriptions: Array<IndexSubscription>;
  /**
   * IndexCreated event, there will only be one.
   *
   */
  indexCreatedEvent: IndexCreatedEvent;
  indexDistributionClaimedEvents: Array<IndexDistributionClaimedEvent>;
  indexUpdatedEvents: Array<IndexUpdatedEvent>;
  indexSubscribedEvents: Array<IndexSubscribedEvent>;
  indexUnitsUpdatedEvents: Array<IndexUnitsUpdatedEvent>;
  indexUnsubscribedEvents: Array<IndexUnsubscribedEvent>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexsubscriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexSubscription_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexSubscription_filter>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexindexDistributionClaimedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexDistributionClaimedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexDistributionClaimedEvent_filter>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexindexUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexUpdatedEvent_filter>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexindexSubscribedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexSubscribedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexSubscribedEvent_filter>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexindexUnitsUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexUnitsUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexUnitsUpdatedEvent_filter>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexindexUnsubscribedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexUnsubscribedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexUnsubscribedEvent_filter>;
};

export type IndexCreatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt'];
  userData: Scalars['Bytes'];
  index: Index;
};

export type IndexCreatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_gt?: InputMaybe<Scalars['Bytes']>;
  userData_lt?: InputMaybe<Scalars['Bytes']>;
  userData_gte?: InputMaybe<Scalars['Bytes']>;
  userData_lte?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  index?: InputMaybe<Scalars['String']>;
  index_not?: InputMaybe<Scalars['String']>;
  index_gt?: InputMaybe<Scalars['String']>;
  index_lt?: InputMaybe<Scalars['String']>;
  index_gte?: InputMaybe<Scalars['String']>;
  index_lte?: InputMaybe<Scalars['String']>;
  index_in?: InputMaybe<Array<Scalars['String']>>;
  index_not_in?: InputMaybe<Array<Scalars['String']>>;
  index_contains?: InputMaybe<Scalars['String']>;
  index_contains_nocase?: InputMaybe<Scalars['String']>;
  index_not_contains?: InputMaybe<Scalars['String']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']>;
  index_starts_with?: InputMaybe<Scalars['String']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_starts_with?: InputMaybe<Scalars['String']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_ends_with?: InputMaybe<Scalars['String']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_ends_with?: InputMaybe<Scalars['String']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_?: InputMaybe<Index_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<IndexCreatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<IndexCreatedEvent_filter>>>;
};

export type IndexCreatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'publisher'
  | 'indexId'
  | 'userData'
  | 'index'
  | 'index__id'
  | 'index__createdAtTimestamp'
  | 'index__createdAtBlockNumber'
  | 'index__updatedAtTimestamp'
  | 'index__updatedAtBlockNumber'
  | 'index__indexId'
  | 'index__indexValue'
  | 'index__totalSubscriptionsWithUnits'
  | 'index__totalUnitsPending'
  | 'index__totalUnitsApproved'
  | 'index__totalUnits'
  | 'index__totalAmountDistributedUntilUpdatedAt';

export type IndexDistributionClaimedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  index: Index;
};

export type IndexDistributionClaimedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subscriber?: InputMaybe<Scalars['Bytes']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index?: InputMaybe<Scalars['String']>;
  index_not?: InputMaybe<Scalars['String']>;
  index_gt?: InputMaybe<Scalars['String']>;
  index_lt?: InputMaybe<Scalars['String']>;
  index_gte?: InputMaybe<Scalars['String']>;
  index_lte?: InputMaybe<Scalars['String']>;
  index_in?: InputMaybe<Array<Scalars['String']>>;
  index_not_in?: InputMaybe<Array<Scalars['String']>>;
  index_contains?: InputMaybe<Scalars['String']>;
  index_contains_nocase?: InputMaybe<Scalars['String']>;
  index_not_contains?: InputMaybe<Scalars['String']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']>;
  index_starts_with?: InputMaybe<Scalars['String']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_starts_with?: InputMaybe<Scalars['String']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_ends_with?: InputMaybe<Scalars['String']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_ends_with?: InputMaybe<Scalars['String']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_?: InputMaybe<Index_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<IndexDistributionClaimedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<IndexDistributionClaimedEvent_filter>>>;
};

export type IndexDistributionClaimedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'publisher'
  | 'indexId'
  | 'subscriber'
  | 'amount'
  | 'index'
  | 'index__id'
  | 'index__createdAtTimestamp'
  | 'index__createdAtBlockNumber'
  | 'index__updatedAtTimestamp'
  | 'index__updatedAtBlockNumber'
  | 'index__indexId'
  | 'index__indexValue'
  | 'index__totalSubscriptionsWithUnits'
  | 'index__totalUnitsPending'
  | 'index__totalUnitsApproved'
  | 'index__totalUnits'
  | 'index__totalAmountDistributedUntilUpdatedAt';

export type IndexSubscribedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes'];
  userData: Scalars['Bytes'];
  index: Index;
};

export type IndexSubscribedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subscriber?: InputMaybe<Scalars['Bytes']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_gt?: InputMaybe<Scalars['Bytes']>;
  userData_lt?: InputMaybe<Scalars['Bytes']>;
  userData_gte?: InputMaybe<Scalars['Bytes']>;
  userData_lte?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  index?: InputMaybe<Scalars['String']>;
  index_not?: InputMaybe<Scalars['String']>;
  index_gt?: InputMaybe<Scalars['String']>;
  index_lt?: InputMaybe<Scalars['String']>;
  index_gte?: InputMaybe<Scalars['String']>;
  index_lte?: InputMaybe<Scalars['String']>;
  index_in?: InputMaybe<Array<Scalars['String']>>;
  index_not_in?: InputMaybe<Array<Scalars['String']>>;
  index_contains?: InputMaybe<Scalars['String']>;
  index_contains_nocase?: InputMaybe<Scalars['String']>;
  index_not_contains?: InputMaybe<Scalars['String']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']>;
  index_starts_with?: InputMaybe<Scalars['String']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_starts_with?: InputMaybe<Scalars['String']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_ends_with?: InputMaybe<Scalars['String']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_ends_with?: InputMaybe<Scalars['String']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_?: InputMaybe<Index_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<IndexSubscribedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<IndexSubscribedEvent_filter>>>;
};

export type IndexSubscribedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'publisher'
  | 'indexId'
  | 'subscriber'
  | 'userData'
  | 'index'
  | 'index__id'
  | 'index__createdAtTimestamp'
  | 'index__createdAtBlockNumber'
  | 'index__updatedAtTimestamp'
  | 'index__updatedAtBlockNumber'
  | 'index__indexId'
  | 'index__indexValue'
  | 'index__totalSubscriptionsWithUnits'
  | 'index__totalUnitsPending'
  | 'index__totalUnitsApproved'
  | 'index__totalUnits'
  | 'index__totalAmountDistributedUntilUpdatedAt';

/**
 * IndexSubscription: A higher order entity that contains subscription data for a `subscriber` account of a particular `Index`.
 *
 */
export type IndexSubscription = {
  /**
   * ID composed of: subscriberAddress-publisherAddress-tokenAddress-IndexId
   *
   */
  id: Scalars['ID'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  updatedAtTimestamp: Scalars['BigInt'];
  updatedAtBlockNumber: Scalars['BigInt'];
  subscriber: Account;
  /**
   * A boolean indicating whether the `IndexSubscription` is approved.
   * Approved subscriptions don't require `subscriber` to claim tokens that are distributed from the publisher.
   *
   */
  approved: Scalars['Boolean'];
  /**
   * If `units` is `0`, it indicates that the subscription is "deleted" and `subscriber` is no longer subscribed to `index`.
   *
   */
  units: Scalars['BigInt'];
  /**
   * The total amount of tokens you've received via IDA until
   * `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalAmountReceivedUntilUpdatedAt: Scalars['BigInt'];
  /**
   * The previous index value - used to calculate `totalAmountReceivedUntilUpdatedAt` field as of the `index.updatedAtTimestamp`.
   * The formula to get this value is:
   * `IndexSubscription.totalAmountReceivedUntilUpdatedAt + ((index.newIndexValue - indexSubscription.indexValueUntilUpdatedAt) * indexSubscription.units)`.
   *
   */
  indexValueUntilUpdatedAt: Scalars['BigInt'];
  index: Index;
  /**
   * IndexSubscription approved events on the subscription.
   *
   */
  subscriptionApprovedEvents: Array<SubscriptionApprovedEvent>;
  subscriptionDistributionClaimedEvents: Array<SubscriptionDistributionClaimedEvent>;
  subscriptionRevokedEvents: Array<SubscriptionRevokedEvent>;
  subscriptionUnitsUpdatedEvents: Array<SubscriptionUnitsUpdatedEvent>;
};


/**
 * IndexSubscription: A higher order entity that contains subscription data for a `subscriber` account of a particular `Index`.
 *
 */
export type IndexSubscriptionsubscriptionApprovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionApprovedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionApprovedEvent_filter>;
};


/**
 * IndexSubscription: A higher order entity that contains subscription data for a `subscriber` account of a particular `Index`.
 *
 */
export type IndexSubscriptionsubscriptionDistributionClaimedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionDistributionClaimedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionDistributionClaimedEvent_filter>;
};


/**
 * IndexSubscription: A higher order entity that contains subscription data for a `subscriber` account of a particular `Index`.
 *
 */
export type IndexSubscriptionsubscriptionRevokedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionRevokedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionRevokedEvent_filter>;
};


/**
 * IndexSubscription: A higher order entity that contains subscription data for a `subscriber` account of a particular `Index`.
 *
 */
export type IndexSubscriptionsubscriptionUnitsUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionUnitsUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionUnitsUpdatedEvent_filter>;
};

export type IndexSubscription_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subscriber?: InputMaybe<Scalars['String']>;
  subscriber_not?: InputMaybe<Scalars['String']>;
  subscriber_gt?: InputMaybe<Scalars['String']>;
  subscriber_lt?: InputMaybe<Scalars['String']>;
  subscriber_gte?: InputMaybe<Scalars['String']>;
  subscriber_lte?: InputMaybe<Scalars['String']>;
  subscriber_in?: InputMaybe<Array<Scalars['String']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['String']>>;
  subscriber_contains?: InputMaybe<Scalars['String']>;
  subscriber_contains_nocase?: InputMaybe<Scalars['String']>;
  subscriber_not_contains?: InputMaybe<Scalars['String']>;
  subscriber_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subscriber_starts_with?: InputMaybe<Scalars['String']>;
  subscriber_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscriber_not_starts_with?: InputMaybe<Scalars['String']>;
  subscriber_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscriber_ends_with?: InputMaybe<Scalars['String']>;
  subscriber_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscriber_not_ends_with?: InputMaybe<Scalars['String']>;
  subscriber_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscriber_?: InputMaybe<Account_filter>;
  approved?: InputMaybe<Scalars['Boolean']>;
  approved_not?: InputMaybe<Scalars['Boolean']>;
  approved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  approved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  units?: InputMaybe<Scalars['BigInt']>;
  units_not?: InputMaybe<Scalars['BigInt']>;
  units_gt?: InputMaybe<Scalars['BigInt']>;
  units_lt?: InputMaybe<Scalars['BigInt']>;
  units_gte?: InputMaybe<Scalars['BigInt']>;
  units_lte?: InputMaybe<Scalars['BigInt']>;
  units_in?: InputMaybe<Array<Scalars['BigInt']>>;
  units_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountReceivedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceivedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceivedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceivedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceivedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceivedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceivedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountReceivedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexValueUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  indexValueUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  indexValueUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  indexValueUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  indexValueUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  indexValueUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  indexValueUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexValueUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index?: InputMaybe<Scalars['String']>;
  index_not?: InputMaybe<Scalars['String']>;
  index_gt?: InputMaybe<Scalars['String']>;
  index_lt?: InputMaybe<Scalars['String']>;
  index_gte?: InputMaybe<Scalars['String']>;
  index_lte?: InputMaybe<Scalars['String']>;
  index_in?: InputMaybe<Array<Scalars['String']>>;
  index_not_in?: InputMaybe<Array<Scalars['String']>>;
  index_contains?: InputMaybe<Scalars['String']>;
  index_contains_nocase?: InputMaybe<Scalars['String']>;
  index_not_contains?: InputMaybe<Scalars['String']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']>;
  index_starts_with?: InputMaybe<Scalars['String']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_starts_with?: InputMaybe<Scalars['String']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_ends_with?: InputMaybe<Scalars['String']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_ends_with?: InputMaybe<Scalars['String']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_?: InputMaybe<Index_filter>;
  subscriptionApprovedEvents_?: InputMaybe<SubscriptionApprovedEvent_filter>;
  subscriptionDistributionClaimedEvents_?: InputMaybe<SubscriptionDistributionClaimedEvent_filter>;
  subscriptionRevokedEvents_?: InputMaybe<SubscriptionRevokedEvent_filter>;
  subscriptionUnitsUpdatedEvents_?: InputMaybe<SubscriptionUnitsUpdatedEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<IndexSubscription_filter>>>;
  or?: InputMaybe<Array<InputMaybe<IndexSubscription_filter>>>;
};

export type IndexSubscription_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'subscriber'
  | 'subscriber__id'
  | 'subscriber__createdAtTimestamp'
  | 'subscriber__createdAtBlockNumber'
  | 'subscriber__updatedAtTimestamp'
  | 'subscriber__updatedAtBlockNumber'
  | 'subscriber__isSuperApp'
  | 'approved'
  | 'units'
  | 'totalAmountReceivedUntilUpdatedAt'
  | 'indexValueUntilUpdatedAt'
  | 'index'
  | 'index__id'
  | 'index__createdAtTimestamp'
  | 'index__createdAtBlockNumber'
  | 'index__updatedAtTimestamp'
  | 'index__updatedAtBlockNumber'
  | 'index__indexId'
  | 'index__indexValue'
  | 'index__totalSubscriptionsWithUnits'
  | 'index__totalUnitsPending'
  | 'index__totalUnitsApproved'
  | 'index__totalUnits'
  | 'index__totalAmountDistributedUntilUpdatedAt'
  | 'subscriptionApprovedEvents'
  | 'subscriptionDistributionClaimedEvents'
  | 'subscriptionRevokedEvents'
  | 'subscriptionUnitsUpdatedEvents';

export type IndexUnitsUpdatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes'];
  units: Scalars['BigInt'];
  userData: Scalars['Bytes'];
  oldUnits: Scalars['BigInt'];
  index: Index;
};

export type IndexUnitsUpdatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subscriber?: InputMaybe<Scalars['Bytes']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']>;
  units?: InputMaybe<Scalars['BigInt']>;
  units_not?: InputMaybe<Scalars['BigInt']>;
  units_gt?: InputMaybe<Scalars['BigInt']>;
  units_lt?: InputMaybe<Scalars['BigInt']>;
  units_gte?: InputMaybe<Scalars['BigInt']>;
  units_lte?: InputMaybe<Scalars['BigInt']>;
  units_in?: InputMaybe<Array<Scalars['BigInt']>>;
  units_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_gt?: InputMaybe<Scalars['Bytes']>;
  userData_lt?: InputMaybe<Scalars['Bytes']>;
  userData_gte?: InputMaybe<Scalars['Bytes']>;
  userData_lte?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  oldUnits?: InputMaybe<Scalars['BigInt']>;
  oldUnits_not?: InputMaybe<Scalars['BigInt']>;
  oldUnits_gt?: InputMaybe<Scalars['BigInt']>;
  oldUnits_lt?: InputMaybe<Scalars['BigInt']>;
  oldUnits_gte?: InputMaybe<Scalars['BigInt']>;
  oldUnits_lte?: InputMaybe<Scalars['BigInt']>;
  oldUnits_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oldUnits_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index?: InputMaybe<Scalars['String']>;
  index_not?: InputMaybe<Scalars['String']>;
  index_gt?: InputMaybe<Scalars['String']>;
  index_lt?: InputMaybe<Scalars['String']>;
  index_gte?: InputMaybe<Scalars['String']>;
  index_lte?: InputMaybe<Scalars['String']>;
  index_in?: InputMaybe<Array<Scalars['String']>>;
  index_not_in?: InputMaybe<Array<Scalars['String']>>;
  index_contains?: InputMaybe<Scalars['String']>;
  index_contains_nocase?: InputMaybe<Scalars['String']>;
  index_not_contains?: InputMaybe<Scalars['String']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']>;
  index_starts_with?: InputMaybe<Scalars['String']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_starts_with?: InputMaybe<Scalars['String']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_ends_with?: InputMaybe<Scalars['String']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_ends_with?: InputMaybe<Scalars['String']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_?: InputMaybe<Index_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<IndexUnitsUpdatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<IndexUnitsUpdatedEvent_filter>>>;
};

export type IndexUnitsUpdatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'publisher'
  | 'indexId'
  | 'subscriber'
  | 'units'
  | 'userData'
  | 'oldUnits'
  | 'index'
  | 'index__id'
  | 'index__createdAtTimestamp'
  | 'index__createdAtBlockNumber'
  | 'index__updatedAtTimestamp'
  | 'index__updatedAtBlockNumber'
  | 'index__indexId'
  | 'index__indexValue'
  | 'index__totalSubscriptionsWithUnits'
  | 'index__totalUnitsPending'
  | 'index__totalUnitsApproved'
  | 'index__totalUnits'
  | 'index__totalAmountDistributedUntilUpdatedAt';

export type IndexUnsubscribedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes'];
  userData: Scalars['Bytes'];
  index: Index;
};

export type IndexUnsubscribedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subscriber?: InputMaybe<Scalars['Bytes']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_gt?: InputMaybe<Scalars['Bytes']>;
  userData_lt?: InputMaybe<Scalars['Bytes']>;
  userData_gte?: InputMaybe<Scalars['Bytes']>;
  userData_lte?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  index?: InputMaybe<Scalars['String']>;
  index_not?: InputMaybe<Scalars['String']>;
  index_gt?: InputMaybe<Scalars['String']>;
  index_lt?: InputMaybe<Scalars['String']>;
  index_gte?: InputMaybe<Scalars['String']>;
  index_lte?: InputMaybe<Scalars['String']>;
  index_in?: InputMaybe<Array<Scalars['String']>>;
  index_not_in?: InputMaybe<Array<Scalars['String']>>;
  index_contains?: InputMaybe<Scalars['String']>;
  index_contains_nocase?: InputMaybe<Scalars['String']>;
  index_not_contains?: InputMaybe<Scalars['String']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']>;
  index_starts_with?: InputMaybe<Scalars['String']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_starts_with?: InputMaybe<Scalars['String']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_ends_with?: InputMaybe<Scalars['String']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_ends_with?: InputMaybe<Scalars['String']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_?: InputMaybe<Index_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<IndexUnsubscribedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<IndexUnsubscribedEvent_filter>>>;
};

export type IndexUnsubscribedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'publisher'
  | 'indexId'
  | 'subscriber'
  | 'userData'
  | 'index'
  | 'index__id'
  | 'index__createdAtTimestamp'
  | 'index__createdAtBlockNumber'
  | 'index__updatedAtTimestamp'
  | 'index__updatedAtBlockNumber'
  | 'index__indexId'
  | 'index__indexValue'
  | 'index__totalSubscriptionsWithUnits'
  | 'index__totalUnitsPending'
  | 'index__totalUnitsApproved'
  | 'index__totalUnits'
  | 'index__totalAmountDistributedUntilUpdatedAt';

export type IndexUpdatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt'];
  oldIndexValue: Scalars['BigInt'];
  newIndexValue: Scalars['BigInt'];
  totalUnitsPending: Scalars['BigInt'];
  totalUnitsApproved: Scalars['BigInt'];
  userData: Scalars['Bytes'];
  index: Index;
};

export type IndexUpdatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oldIndexValue?: InputMaybe<Scalars['BigInt']>;
  oldIndexValue_not?: InputMaybe<Scalars['BigInt']>;
  oldIndexValue_gt?: InputMaybe<Scalars['BigInt']>;
  oldIndexValue_lt?: InputMaybe<Scalars['BigInt']>;
  oldIndexValue_gte?: InputMaybe<Scalars['BigInt']>;
  oldIndexValue_lte?: InputMaybe<Scalars['BigInt']>;
  oldIndexValue_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oldIndexValue_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newIndexValue?: InputMaybe<Scalars['BigInt']>;
  newIndexValue_not?: InputMaybe<Scalars['BigInt']>;
  newIndexValue_gt?: InputMaybe<Scalars['BigInt']>;
  newIndexValue_lt?: InputMaybe<Scalars['BigInt']>;
  newIndexValue_gte?: InputMaybe<Scalars['BigInt']>;
  newIndexValue_lte?: InputMaybe<Scalars['BigInt']>;
  newIndexValue_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newIndexValue_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnitsPending?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_not?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnitsPending_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnitsApproved?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_not?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnitsApproved_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_gt?: InputMaybe<Scalars['Bytes']>;
  userData_lt?: InputMaybe<Scalars['Bytes']>;
  userData_gte?: InputMaybe<Scalars['Bytes']>;
  userData_lte?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  index?: InputMaybe<Scalars['String']>;
  index_not?: InputMaybe<Scalars['String']>;
  index_gt?: InputMaybe<Scalars['String']>;
  index_lt?: InputMaybe<Scalars['String']>;
  index_gte?: InputMaybe<Scalars['String']>;
  index_lte?: InputMaybe<Scalars['String']>;
  index_in?: InputMaybe<Array<Scalars['String']>>;
  index_not_in?: InputMaybe<Array<Scalars['String']>>;
  index_contains?: InputMaybe<Scalars['String']>;
  index_contains_nocase?: InputMaybe<Scalars['String']>;
  index_not_contains?: InputMaybe<Scalars['String']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']>;
  index_starts_with?: InputMaybe<Scalars['String']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_starts_with?: InputMaybe<Scalars['String']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_ends_with?: InputMaybe<Scalars['String']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_ends_with?: InputMaybe<Scalars['String']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_?: InputMaybe<Index_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<IndexUpdatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<IndexUpdatedEvent_filter>>>;
};

export type IndexUpdatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'publisher'
  | 'indexId'
  | 'oldIndexValue'
  | 'newIndexValue'
  | 'totalUnitsPending'
  | 'totalUnitsApproved'
  | 'userData'
  | 'index'
  | 'index__id'
  | 'index__createdAtTimestamp'
  | 'index__createdAtBlockNumber'
  | 'index__updatedAtTimestamp'
  | 'index__updatedAtBlockNumber'
  | 'index__indexId'
  | 'index__indexValue'
  | 'index__totalSubscriptionsWithUnits'
  | 'index__totalUnitsPending'
  | 'index__totalUnitsApproved'
  | 'index__totalUnits'
  | 'index__totalAmountDistributedUntilUpdatedAt';

export type Index_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexValue?: InputMaybe<Scalars['BigInt']>;
  indexValue_not?: InputMaybe<Scalars['BigInt']>;
  indexValue_gt?: InputMaybe<Scalars['BigInt']>;
  indexValue_lt?: InputMaybe<Scalars['BigInt']>;
  indexValue_gte?: InputMaybe<Scalars['BigInt']>;
  indexValue_lte?: InputMaybe<Scalars['BigInt']>;
  indexValue_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexValue_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSubscriptionsWithUnits?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_not?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_lt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_lte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSubscriptionsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalUnitsPending?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_not?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnitsPending_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnitsApproved?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_not?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnitsApproved_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnits?: InputMaybe<Scalars['BigInt']>;
  totalUnits_not?: InputMaybe<Scalars['BigInt']>;
  totalUnits_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnits_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnits_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnits_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnits_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnits_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountDistributedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountDistributedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  publisher?: InputMaybe<Scalars['String']>;
  publisher_not?: InputMaybe<Scalars['String']>;
  publisher_gt?: InputMaybe<Scalars['String']>;
  publisher_lt?: InputMaybe<Scalars['String']>;
  publisher_gte?: InputMaybe<Scalars['String']>;
  publisher_lte?: InputMaybe<Scalars['String']>;
  publisher_in?: InputMaybe<Array<Scalars['String']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['String']>>;
  publisher_contains?: InputMaybe<Scalars['String']>;
  publisher_contains_nocase?: InputMaybe<Scalars['String']>;
  publisher_not_contains?: InputMaybe<Scalars['String']>;
  publisher_not_contains_nocase?: InputMaybe<Scalars['String']>;
  publisher_starts_with?: InputMaybe<Scalars['String']>;
  publisher_starts_with_nocase?: InputMaybe<Scalars['String']>;
  publisher_not_starts_with?: InputMaybe<Scalars['String']>;
  publisher_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  publisher_ends_with?: InputMaybe<Scalars['String']>;
  publisher_ends_with_nocase?: InputMaybe<Scalars['String']>;
  publisher_not_ends_with?: InputMaybe<Scalars['String']>;
  publisher_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  publisher_?: InputMaybe<Account_filter>;
  subscriptions_?: InputMaybe<IndexSubscription_filter>;
  indexCreatedEvent?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_not?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_gt?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_lt?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_gte?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_lte?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_in?: InputMaybe<Array<Scalars['String']>>;
  indexCreatedEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexCreatedEvent_contains?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_not_contains?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_starts_with?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_ends_with?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_?: InputMaybe<IndexCreatedEvent_filter>;
  indexDistributionClaimedEvents_?: InputMaybe<IndexDistributionClaimedEvent_filter>;
  indexUpdatedEvents_?: InputMaybe<IndexUpdatedEvent_filter>;
  indexSubscribedEvents_?: InputMaybe<IndexSubscribedEvent_filter>;
  indexUnitsUpdatedEvents_?: InputMaybe<IndexUnitsUpdatedEvent_filter>;
  indexUnsubscribedEvents_?: InputMaybe<IndexUnsubscribedEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Index_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Index_filter>>>;
};

export type Index_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'indexId'
  | 'indexValue'
  | 'totalSubscriptionsWithUnits'
  | 'totalUnitsPending'
  | 'totalUnitsApproved'
  | 'totalUnits'
  | 'totalAmountDistributedUntilUpdatedAt'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress'
  | 'publisher'
  | 'publisher__id'
  | 'publisher__createdAtTimestamp'
  | 'publisher__createdAtBlockNumber'
  | 'publisher__updatedAtTimestamp'
  | 'publisher__updatedAtBlockNumber'
  | 'publisher__isSuperApp'
  | 'subscriptions'
  | 'indexCreatedEvent'
  | 'indexCreatedEvent__id'
  | 'indexCreatedEvent__transactionHash'
  | 'indexCreatedEvent__gasPrice'
  | 'indexCreatedEvent__gasUsed'
  | 'indexCreatedEvent__timestamp'
  | 'indexCreatedEvent__name'
  | 'indexCreatedEvent__blockNumber'
  | 'indexCreatedEvent__logIndex'
  | 'indexCreatedEvent__order'
  | 'indexCreatedEvent__token'
  | 'indexCreatedEvent__publisher'
  | 'indexCreatedEvent__indexId'
  | 'indexCreatedEvent__userData'
  | 'indexDistributionClaimedEvents'
  | 'indexUpdatedEvents'
  | 'indexSubscribedEvents'
  | 'indexUnitsUpdatedEvents'
  | 'indexUnsubscribedEvents';

export type InstantDistributionUpdatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `pool`
   * addresses[2] = `poolDistributor`
   * addresses[3] = `operator`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  operator: Scalars['Bytes'];
  requestedAmount: Scalars['BigInt'];
  actualAmount: Scalars['BigInt'];
  totalUnits: Scalars['BigInt'];
  userData: Scalars['Bytes'];
  pool: Pool;
  poolDistributor: PoolDistributor;
};

export type InstantDistributionUpdatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_gt?: InputMaybe<Scalars['Bytes']>;
  operator_lt?: InputMaybe<Scalars['Bytes']>;
  operator_gte?: InputMaybe<Scalars['Bytes']>;
  operator_lte?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  requestedAmount?: InputMaybe<Scalars['BigInt']>;
  requestedAmount_not?: InputMaybe<Scalars['BigInt']>;
  requestedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  requestedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  requestedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  requestedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  requestedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  requestedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  actualAmount?: InputMaybe<Scalars['BigInt']>;
  actualAmount_not?: InputMaybe<Scalars['BigInt']>;
  actualAmount_gt?: InputMaybe<Scalars['BigInt']>;
  actualAmount_lt?: InputMaybe<Scalars['BigInt']>;
  actualAmount_gte?: InputMaybe<Scalars['BigInt']>;
  actualAmount_lte?: InputMaybe<Scalars['BigInt']>;
  actualAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  actualAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnits?: InputMaybe<Scalars['BigInt']>;
  totalUnits_not?: InputMaybe<Scalars['BigInt']>;
  totalUnits_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnits_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnits_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnits_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnits_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnits_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_gt?: InputMaybe<Scalars['Bytes']>;
  userData_lt?: InputMaybe<Scalars['Bytes']>;
  userData_gte?: InputMaybe<Scalars['Bytes']>;
  userData_lte?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  poolDistributor?: InputMaybe<Scalars['String']>;
  poolDistributor_not?: InputMaybe<Scalars['String']>;
  poolDistributor_gt?: InputMaybe<Scalars['String']>;
  poolDistributor_lt?: InputMaybe<Scalars['String']>;
  poolDistributor_gte?: InputMaybe<Scalars['String']>;
  poolDistributor_lte?: InputMaybe<Scalars['String']>;
  poolDistributor_in?: InputMaybe<Array<Scalars['String']>>;
  poolDistributor_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolDistributor_contains?: InputMaybe<Scalars['String']>;
  poolDistributor_contains_nocase?: InputMaybe<Scalars['String']>;
  poolDistributor_not_contains?: InputMaybe<Scalars['String']>;
  poolDistributor_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolDistributor_starts_with?: InputMaybe<Scalars['String']>;
  poolDistributor_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolDistributor_not_starts_with?: InputMaybe<Scalars['String']>;
  poolDistributor_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolDistributor_ends_with?: InputMaybe<Scalars['String']>;
  poolDistributor_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolDistributor_not_ends_with?: InputMaybe<Scalars['String']>;
  poolDistributor_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolDistributor_?: InputMaybe<PoolDistributor_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<InstantDistributionUpdatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<InstantDistributionUpdatedEvent_filter>>>;
};

export type InstantDistributionUpdatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'operator'
  | 'requestedAmount'
  | 'actualAmount'
  | 'totalUnits'
  | 'userData'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__updatedAtTimestamp'
  | 'pool__updatedAtBlockNumber'
  | 'pool__totalUnits'
  | 'pool__totalConnectedUnits'
  | 'pool__totalDisconnectedUnits'
  | 'pool__totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'pool__totalAmountFlowedDistributedUntilUpdatedAt'
  | 'pool__totalAmountDistributedUntilUpdatedAt'
  | 'pool__totalFlowAdjustmentAmountDistributedUntilUpdatedAt'
  | 'pool__perUnitSettledValue'
  | 'pool__perUnitFlowRate'
  | 'pool__totalMembers'
  | 'pool__totalConnectedMembers'
  | 'pool__totalDisconnectedMembers'
  | 'pool__adjustmentFlowRate'
  | 'pool__flowRate'
  | 'pool__totalBuffer'
  | 'poolDistributor'
  | 'poolDistributor__id'
  | 'poolDistributor__createdAtTimestamp'
  | 'poolDistributor__createdAtBlockNumber'
  | 'poolDistributor__updatedAtTimestamp'
  | 'poolDistributor__updatedAtBlockNumber'
  | 'poolDistributor__totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'poolDistributor__totalAmountFlowedDistributedUntilUpdatedAt'
  | 'poolDistributor__totalAmountDistributedUntilUpdatedAt'
  | 'poolDistributor__totalBuffer'
  | 'poolDistributor__flowRate';

export type JailEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `app`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  app: Scalars['Bytes'];
  reason: Scalars['BigInt'];
};

export type JailEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  app?: InputMaybe<Scalars['Bytes']>;
  app_not?: InputMaybe<Scalars['Bytes']>;
  app_gt?: InputMaybe<Scalars['Bytes']>;
  app_lt?: InputMaybe<Scalars['Bytes']>;
  app_gte?: InputMaybe<Scalars['Bytes']>;
  app_lte?: InputMaybe<Scalars['Bytes']>;
  app_in?: InputMaybe<Array<Scalars['Bytes']>>;
  app_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  app_contains?: InputMaybe<Scalars['Bytes']>;
  app_not_contains?: InputMaybe<Scalars['Bytes']>;
  reason?: InputMaybe<Scalars['BigInt']>;
  reason_not?: InputMaybe<Scalars['BigInt']>;
  reason_gt?: InputMaybe<Scalars['BigInt']>;
  reason_lt?: InputMaybe<Scalars['BigInt']>;
  reason_gte?: InputMaybe<Scalars['BigInt']>;
  reason_lte?: InputMaybe<Scalars['BigInt']>;
  reason_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reason_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<JailEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<JailEvent_filter>>>;
};

export type JailEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'app'
  | 'reason';

export type MemberUnitsUpdatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `pool`
   * addresses[2] = `member`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  oldUnits: Scalars['BigInt'];
  units: Scalars['BigInt'];
  totalUnits: Scalars['BigInt'];
  pool: Pool;
  poolMember: PoolMember;
};

export type MemberUnitsUpdatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  oldUnits?: InputMaybe<Scalars['BigInt']>;
  oldUnits_not?: InputMaybe<Scalars['BigInt']>;
  oldUnits_gt?: InputMaybe<Scalars['BigInt']>;
  oldUnits_lt?: InputMaybe<Scalars['BigInt']>;
  oldUnits_gte?: InputMaybe<Scalars['BigInt']>;
  oldUnits_lte?: InputMaybe<Scalars['BigInt']>;
  oldUnits_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oldUnits_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  units?: InputMaybe<Scalars['BigInt']>;
  units_not?: InputMaybe<Scalars['BigInt']>;
  units_gt?: InputMaybe<Scalars['BigInt']>;
  units_lt?: InputMaybe<Scalars['BigInt']>;
  units_gte?: InputMaybe<Scalars['BigInt']>;
  units_lte?: InputMaybe<Scalars['BigInt']>;
  units_in?: InputMaybe<Array<Scalars['BigInt']>>;
  units_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnits?: InputMaybe<Scalars['BigInt']>;
  totalUnits_not?: InputMaybe<Scalars['BigInt']>;
  totalUnits_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnits_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnits_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnits_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnits_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnits_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  poolMember?: InputMaybe<Scalars['String']>;
  poolMember_not?: InputMaybe<Scalars['String']>;
  poolMember_gt?: InputMaybe<Scalars['String']>;
  poolMember_lt?: InputMaybe<Scalars['String']>;
  poolMember_gte?: InputMaybe<Scalars['String']>;
  poolMember_lte?: InputMaybe<Scalars['String']>;
  poolMember_in?: InputMaybe<Array<Scalars['String']>>;
  poolMember_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolMember_contains?: InputMaybe<Scalars['String']>;
  poolMember_contains_nocase?: InputMaybe<Scalars['String']>;
  poolMember_not_contains?: InputMaybe<Scalars['String']>;
  poolMember_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolMember_starts_with?: InputMaybe<Scalars['String']>;
  poolMember_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolMember_not_starts_with?: InputMaybe<Scalars['String']>;
  poolMember_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolMember_ends_with?: InputMaybe<Scalars['String']>;
  poolMember_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolMember_not_ends_with?: InputMaybe<Scalars['String']>;
  poolMember_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolMember_?: InputMaybe<PoolMember_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MemberUnitsUpdatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MemberUnitsUpdatedEvent_filter>>>;
};

export type MemberUnitsUpdatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'oldUnits'
  | 'units'
  | 'totalUnits'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__updatedAtTimestamp'
  | 'pool__updatedAtBlockNumber'
  | 'pool__totalUnits'
  | 'pool__totalConnectedUnits'
  | 'pool__totalDisconnectedUnits'
  | 'pool__totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'pool__totalAmountFlowedDistributedUntilUpdatedAt'
  | 'pool__totalAmountDistributedUntilUpdatedAt'
  | 'pool__totalFlowAdjustmentAmountDistributedUntilUpdatedAt'
  | 'pool__perUnitSettledValue'
  | 'pool__perUnitFlowRate'
  | 'pool__totalMembers'
  | 'pool__totalConnectedMembers'
  | 'pool__totalDisconnectedMembers'
  | 'pool__adjustmentFlowRate'
  | 'pool__flowRate'
  | 'pool__totalBuffer'
  | 'poolMember'
  | 'poolMember__id'
  | 'poolMember__createdAtTimestamp'
  | 'poolMember__createdAtBlockNumber'
  | 'poolMember__updatedAtTimestamp'
  | 'poolMember__updatedAtBlockNumber'
  | 'poolMember__units'
  | 'poolMember__isConnected'
  | 'poolMember__totalAmountClaimed'
  | 'poolMember__poolTotalAmountDistributedUntilUpdatedAt'
  | 'poolMember__totalAmountReceivedUntilUpdatedAt'
  | 'poolMember__syncedPerUnitSettledValue'
  | 'poolMember__syncedPerUnitFlowRate';

export type MintedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `operator`
   * addresses[2] = `to`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  operator: Scalars['Bytes'];
  to: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  data: Scalars['Bytes'];
  token: Scalars['Bytes'];
  operatorData: Scalars['Bytes'];
};

export type MintedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_gt?: InputMaybe<Scalars['Bytes']>;
  operator_lt?: InputMaybe<Scalars['Bytes']>;
  operator_gte?: InputMaybe<Scalars['Bytes']>;
  operator_lte?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_gt?: InputMaybe<Scalars['Bytes']>;
  to_lt?: InputMaybe<Scalars['Bytes']>;
  to_gte?: InputMaybe<Scalars['Bytes']>;
  to_lte?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  data?: InputMaybe<Scalars['Bytes']>;
  data_not?: InputMaybe<Scalars['Bytes']>;
  data_gt?: InputMaybe<Scalars['Bytes']>;
  data_lt?: InputMaybe<Scalars['Bytes']>;
  data_gte?: InputMaybe<Scalars['Bytes']>;
  data_lte?: InputMaybe<Scalars['Bytes']>;
  data_in?: InputMaybe<Array<Scalars['Bytes']>>;
  data_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  data_contains?: InputMaybe<Scalars['Bytes']>;
  data_not_contains?: InputMaybe<Scalars['Bytes']>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  operatorData?: InputMaybe<Scalars['Bytes']>;
  operatorData_not?: InputMaybe<Scalars['Bytes']>;
  operatorData_gt?: InputMaybe<Scalars['Bytes']>;
  operatorData_lt?: InputMaybe<Scalars['Bytes']>;
  operatorData_gte?: InputMaybe<Scalars['Bytes']>;
  operatorData_lte?: InputMaybe<Scalars['Bytes']>;
  operatorData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operatorData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operatorData_contains?: InputMaybe<Scalars['Bytes']>;
  operatorData_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MintedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MintedEvent_filter>>>;
};

export type MintedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'operator'
  | 'to'
  | 'amount'
  | 'data'
  | 'token'
  | 'operatorData';

export type NewPICEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `pic` (new Patrician In Charge)
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  /**
   * The address of the `token` (supertoken) the PIC is posting a bond for.
   *
   */
  token: Scalars['Bytes'];
  /**
   * The address of the new Patrician In Charge (PIC).
   *
   */
  pic: Scalars['Bytes'];
  /**
   * The bond the new PIC staked in order to claim the position.
   *
   */
  bond: Scalars['BigInt'];
  /**
   * The flowrate at which the bond is streamed back to the PIC.
   *
   */
  exitRate: Scalars['BigInt'];
};

export type NewPICEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  pic?: InputMaybe<Scalars['Bytes']>;
  pic_not?: InputMaybe<Scalars['Bytes']>;
  pic_gt?: InputMaybe<Scalars['Bytes']>;
  pic_lt?: InputMaybe<Scalars['Bytes']>;
  pic_gte?: InputMaybe<Scalars['Bytes']>;
  pic_lte?: InputMaybe<Scalars['Bytes']>;
  pic_in?: InputMaybe<Array<Scalars['Bytes']>>;
  pic_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  pic_contains?: InputMaybe<Scalars['Bytes']>;
  pic_not_contains?: InputMaybe<Scalars['Bytes']>;
  bond?: InputMaybe<Scalars['BigInt']>;
  bond_not?: InputMaybe<Scalars['BigInt']>;
  bond_gt?: InputMaybe<Scalars['BigInt']>;
  bond_lt?: InputMaybe<Scalars['BigInt']>;
  bond_gte?: InputMaybe<Scalars['BigInt']>;
  bond_lte?: InputMaybe<Scalars['BigInt']>;
  bond_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bond_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  exitRate?: InputMaybe<Scalars['BigInt']>;
  exitRate_not?: InputMaybe<Scalars['BigInt']>;
  exitRate_gt?: InputMaybe<Scalars['BigInt']>;
  exitRate_lt?: InputMaybe<Scalars['BigInt']>;
  exitRate_gte?: InputMaybe<Scalars['BigInt']>;
  exitRate_lte?: InputMaybe<Scalars['BigInt']>;
  exitRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  exitRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NewPICEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<NewPICEvent_filter>>>;
};

export type NewPICEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'pic'
  | 'bond'
  | 'exitRate';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type PPPConfigurationChangedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `governanceAddress`
   * addresses[1] = `host`
   * addresses[2] = `superToken`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  host: Scalars['Bytes'];
  superToken: Scalars['Bytes'];
  isKeySet: Scalars['Boolean'];
  liquidationPeriod: Scalars['BigInt'];
  patricianPeriod: Scalars['BigInt'];
};

export type PPPConfigurationChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  governanceAddress?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_gt?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_lt?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_gte?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_lte?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  host?: InputMaybe<Scalars['Bytes']>;
  host_not?: InputMaybe<Scalars['Bytes']>;
  host_gt?: InputMaybe<Scalars['Bytes']>;
  host_lt?: InputMaybe<Scalars['Bytes']>;
  host_gte?: InputMaybe<Scalars['Bytes']>;
  host_lte?: InputMaybe<Scalars['Bytes']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_contains?: InputMaybe<Scalars['Bytes']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']>;
  superToken?: InputMaybe<Scalars['Bytes']>;
  superToken_not?: InputMaybe<Scalars['Bytes']>;
  superToken_gt?: InputMaybe<Scalars['Bytes']>;
  superToken_lt?: InputMaybe<Scalars['Bytes']>;
  superToken_gte?: InputMaybe<Scalars['Bytes']>;
  superToken_lte?: InputMaybe<Scalars['Bytes']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_contains?: InputMaybe<Scalars['Bytes']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  isKeySet?: InputMaybe<Scalars['Boolean']>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  liquidationPeriod?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_not?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_gt?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_lt?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_gte?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_lte?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidationPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  patricianPeriod?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_not?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_gt?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_lt?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_gte?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_lte?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_in?: InputMaybe<Array<Scalars['BigInt']>>;
  patricianPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PPPConfigurationChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PPPConfigurationChangedEvent_filter>>>;
};

export type PPPConfigurationChangedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'governanceAddress'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'host'
  | 'superToken'
  | 'isKeySet'
  | 'liquidationPeriod'
  | 'patricianPeriod';

export type Pool = {
  /**
   * ID: poolAddress
   *
   */
  id: Scalars['ID'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  updatedAtTimestamp: Scalars['BigInt'];
  updatedAtBlockNumber: Scalars['BigInt'];
  totalUnits: Scalars['BigInt'];
  totalConnectedUnits: Scalars['BigInt'];
  totalDisconnectedUnits: Scalars['BigInt'];
  totalAmountInstantlyDistributedUntilUpdatedAt: Scalars['BigInt'];
  totalAmountFlowedDistributedUntilUpdatedAt: Scalars['BigInt'];
  totalAmountDistributedUntilUpdatedAt: Scalars['BigInt'];
  totalFlowAdjustmentAmountDistributedUntilUpdatedAt: Scalars['BigInt'];
  perUnitSettledValue: Scalars['BigInt'];
  perUnitFlowRate: Scalars['BigInt'];
  /**
   * A member is any account which has more than 0 units in the pool.
   *
   */
  totalMembers: Scalars['Int'];
  /**
   * A connected member is any account which has more than 0 units in the pool and is connected.
   *
   */
  totalConnectedMembers: Scalars['Int'];
  /**
   * A disconnected member is any account which has more than 0 units in the pool and is not connected.
   *
   */
  totalDisconnectedMembers: Scalars['Int'];
  adjustmentFlowRate: Scalars['BigInt'];
  flowRate: Scalars['BigInt'];
  totalBuffer: Scalars['BigInt'];
  token: Token;
  admin: Account;
  poolDistributors: Array<PoolDistributor>;
  poolMembers: Array<PoolMember>;
  poolCreatedEvent: PoolCreatedEvent;
  poolConnectionUpdatedEvents: Array<PoolConnectionUpdatedEvent>;
  bufferAdjustedEvents: Array<BufferAdjustedEvent>;
  instantDistributionUpdatedEvents: Array<InstantDistributionUpdatedEvent>;
  flowDistributionUpdatedEvents: Array<FlowDistributionUpdatedEvent>;
  memberUnitsUpdatedEvents: Array<MemberUnitsUpdatedEvent>;
  distributionClaimedEvents: Array<DistributionClaimedEvent>;
};


export type PoolpoolDistributorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolDistributor_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolDistributor_filter>;
};


export type PoolpoolMembersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolMember_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolMember_filter>;
};


export type PoolpoolConnectionUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolConnectionUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolConnectionUpdatedEvent_filter>;
};


export type PoolbufferAdjustedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BufferAdjustedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BufferAdjustedEvent_filter>;
};


export type PoolinstantDistributionUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InstantDistributionUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InstantDistributionUpdatedEvent_filter>;
};


export type PoolflowDistributionUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowDistributionUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowDistributionUpdatedEvent_filter>;
};


export type PoolmemberUnitsUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MemberUnitsUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MemberUnitsUpdatedEvent_filter>;
};


export type PooldistributionClaimedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributionClaimedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributionClaimedEvent_filter>;
};

export type PoolConnectionUpdatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `pool`
   * addresses[2] = `poolMember`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  connected: Scalars['Boolean'];
  userData: Scalars['Bytes'];
  pool: Pool;
  poolMember: PoolMember;
};

export type PoolConnectionUpdatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  connected?: InputMaybe<Scalars['Boolean']>;
  connected_not?: InputMaybe<Scalars['Boolean']>;
  connected_in?: InputMaybe<Array<Scalars['Boolean']>>;
  connected_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_gt?: InputMaybe<Scalars['Bytes']>;
  userData_lt?: InputMaybe<Scalars['Bytes']>;
  userData_gte?: InputMaybe<Scalars['Bytes']>;
  userData_lte?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  poolMember?: InputMaybe<Scalars['String']>;
  poolMember_not?: InputMaybe<Scalars['String']>;
  poolMember_gt?: InputMaybe<Scalars['String']>;
  poolMember_lt?: InputMaybe<Scalars['String']>;
  poolMember_gte?: InputMaybe<Scalars['String']>;
  poolMember_lte?: InputMaybe<Scalars['String']>;
  poolMember_in?: InputMaybe<Array<Scalars['String']>>;
  poolMember_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolMember_contains?: InputMaybe<Scalars['String']>;
  poolMember_contains_nocase?: InputMaybe<Scalars['String']>;
  poolMember_not_contains?: InputMaybe<Scalars['String']>;
  poolMember_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolMember_starts_with?: InputMaybe<Scalars['String']>;
  poolMember_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolMember_not_starts_with?: InputMaybe<Scalars['String']>;
  poolMember_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolMember_ends_with?: InputMaybe<Scalars['String']>;
  poolMember_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolMember_not_ends_with?: InputMaybe<Scalars['String']>;
  poolMember_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolMember_?: InputMaybe<PoolMember_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolConnectionUpdatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PoolConnectionUpdatedEvent_filter>>>;
};

export type PoolConnectionUpdatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'connected'
  | 'userData'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__updatedAtTimestamp'
  | 'pool__updatedAtBlockNumber'
  | 'pool__totalUnits'
  | 'pool__totalConnectedUnits'
  | 'pool__totalDisconnectedUnits'
  | 'pool__totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'pool__totalAmountFlowedDistributedUntilUpdatedAt'
  | 'pool__totalAmountDistributedUntilUpdatedAt'
  | 'pool__totalFlowAdjustmentAmountDistributedUntilUpdatedAt'
  | 'pool__perUnitSettledValue'
  | 'pool__perUnitFlowRate'
  | 'pool__totalMembers'
  | 'pool__totalConnectedMembers'
  | 'pool__totalDisconnectedMembers'
  | 'pool__adjustmentFlowRate'
  | 'pool__flowRate'
  | 'pool__totalBuffer'
  | 'poolMember'
  | 'poolMember__id'
  | 'poolMember__createdAtTimestamp'
  | 'poolMember__createdAtBlockNumber'
  | 'poolMember__updatedAtTimestamp'
  | 'poolMember__updatedAtBlockNumber'
  | 'poolMember__units'
  | 'poolMember__isConnected'
  | 'poolMember__totalAmountClaimed'
  | 'poolMember__poolTotalAmountDistributedUntilUpdatedAt'
  | 'poolMember__totalAmountReceivedUntilUpdatedAt'
  | 'poolMember__syncedPerUnitSettledValue'
  | 'poolMember__syncedPerUnitFlowRate';

export type PoolCreatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `pool`
   * addresses[2] = `caller`
   * addresses[3] = `admin`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  caller: Scalars['Bytes'];
  admin: Scalars['Bytes'];
  pool: Pool;
};

export type PoolCreatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  caller?: InputMaybe<Scalars['Bytes']>;
  caller_not?: InputMaybe<Scalars['Bytes']>;
  caller_gt?: InputMaybe<Scalars['Bytes']>;
  caller_lt?: InputMaybe<Scalars['Bytes']>;
  caller_gte?: InputMaybe<Scalars['Bytes']>;
  caller_lte?: InputMaybe<Scalars['Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_contains?: InputMaybe<Scalars['Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  admin?: InputMaybe<Scalars['Bytes']>;
  admin_not?: InputMaybe<Scalars['Bytes']>;
  admin_gt?: InputMaybe<Scalars['Bytes']>;
  admin_lt?: InputMaybe<Scalars['Bytes']>;
  admin_gte?: InputMaybe<Scalars['Bytes']>;
  admin_lte?: InputMaybe<Scalars['Bytes']>;
  admin_in?: InputMaybe<Array<Scalars['Bytes']>>;
  admin_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  admin_contains?: InputMaybe<Scalars['Bytes']>;
  admin_not_contains?: InputMaybe<Scalars['Bytes']>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolCreatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PoolCreatedEvent_filter>>>;
};

export type PoolCreatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'caller'
  | 'admin'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__updatedAtTimestamp'
  | 'pool__updatedAtBlockNumber'
  | 'pool__totalUnits'
  | 'pool__totalConnectedUnits'
  | 'pool__totalDisconnectedUnits'
  | 'pool__totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'pool__totalAmountFlowedDistributedUntilUpdatedAt'
  | 'pool__totalAmountDistributedUntilUpdatedAt'
  | 'pool__totalFlowAdjustmentAmountDistributedUntilUpdatedAt'
  | 'pool__perUnitSettledValue'
  | 'pool__perUnitFlowRate'
  | 'pool__totalMembers'
  | 'pool__totalConnectedMembers'
  | 'pool__totalDisconnectedMembers'
  | 'pool__adjustmentFlowRate'
  | 'pool__flowRate'
  | 'pool__totalBuffer';

export type PoolDistributor = {
  /**
   * ID composed of: "poolDistributor"-pool-poolDistributorAddress
   *
   */
  id: Scalars['ID'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  updatedAtTimestamp: Scalars['BigInt'];
  updatedAtBlockNumber: Scalars['BigInt'];
  totalAmountInstantlyDistributedUntilUpdatedAt: Scalars['BigInt'];
  totalAmountFlowedDistributedUntilUpdatedAt: Scalars['BigInt'];
  totalAmountDistributedUntilUpdatedAt: Scalars['BigInt'];
  totalBuffer: Scalars['BigInt'];
  flowRate: Scalars['BigInt'];
  account: Account;
  pool: Pool;
  bufferAdjustedEvents: Array<BufferAdjustedEvent>;
  instantDistributionUpdatedEvents: Array<InstantDistributionUpdatedEvent>;
  flowDistributionUpdatedEvents: Array<FlowDistributionUpdatedEvent>;
};


export type PoolDistributorbufferAdjustedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BufferAdjustedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BufferAdjustedEvent_filter>;
};


export type PoolDistributorinstantDistributionUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InstantDistributionUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InstantDistributionUpdatedEvent_filter>;
};


export type PoolDistributorflowDistributionUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowDistributionUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowDistributionUpdatedEvent_filter>;
};

export type PoolDistributor_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountInstantlyDistributedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountInstantlyDistributedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountInstantlyDistributedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountInstantlyDistributedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountInstantlyDistributedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountInstantlyDistributedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountInstantlyDistributedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountInstantlyDistributedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountFlowedDistributedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountFlowedDistributedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountFlowedDistributedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountFlowedDistributedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountFlowedDistributedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountFlowedDistributedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountFlowedDistributedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountFlowedDistributedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountDistributedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountDistributedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalBuffer?: InputMaybe<Scalars['BigInt']>;
  totalBuffer_not?: InputMaybe<Scalars['BigInt']>;
  totalBuffer_gt?: InputMaybe<Scalars['BigInt']>;
  totalBuffer_lt?: InputMaybe<Scalars['BigInt']>;
  totalBuffer_gte?: InputMaybe<Scalars['BigInt']>;
  totalBuffer_lte?: InputMaybe<Scalars['BigInt']>;
  totalBuffer_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalBuffer_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRate?: InputMaybe<Scalars['BigInt']>;
  flowRate_not?: InputMaybe<Scalars['BigInt']>;
  flowRate_gt?: InputMaybe<Scalars['BigInt']>;
  flowRate_lt?: InputMaybe<Scalars['BigInt']>;
  flowRate_gte?: InputMaybe<Scalars['BigInt']>;
  flowRate_lte?: InputMaybe<Scalars['BigInt']>;
  flowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<Account_filter>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  bufferAdjustedEvents_?: InputMaybe<BufferAdjustedEvent_filter>;
  instantDistributionUpdatedEvents_?: InputMaybe<InstantDistributionUpdatedEvent_filter>;
  flowDistributionUpdatedEvents_?: InputMaybe<FlowDistributionUpdatedEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolDistributor_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PoolDistributor_filter>>>;
};

export type PoolDistributor_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'totalAmountFlowedDistributedUntilUpdatedAt'
  | 'totalAmountDistributedUntilUpdatedAt'
  | 'totalBuffer'
  | 'flowRate'
  | 'account'
  | 'account__id'
  | 'account__createdAtTimestamp'
  | 'account__createdAtBlockNumber'
  | 'account__updatedAtTimestamp'
  | 'account__updatedAtBlockNumber'
  | 'account__isSuperApp'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__updatedAtTimestamp'
  | 'pool__updatedAtBlockNumber'
  | 'pool__totalUnits'
  | 'pool__totalConnectedUnits'
  | 'pool__totalDisconnectedUnits'
  | 'pool__totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'pool__totalAmountFlowedDistributedUntilUpdatedAt'
  | 'pool__totalAmountDistributedUntilUpdatedAt'
  | 'pool__totalFlowAdjustmentAmountDistributedUntilUpdatedAt'
  | 'pool__perUnitSettledValue'
  | 'pool__perUnitFlowRate'
  | 'pool__totalMembers'
  | 'pool__totalConnectedMembers'
  | 'pool__totalDisconnectedMembers'
  | 'pool__adjustmentFlowRate'
  | 'pool__flowRate'
  | 'pool__totalBuffer'
  | 'bufferAdjustedEvents'
  | 'instantDistributionUpdatedEvents'
  | 'flowDistributionUpdatedEvents';

export type PoolMember = {
  /**
   * ID composed of: "poolMember"-poolAddress-poolMemberAddress
   *
   */
  id: Scalars['ID'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  updatedAtTimestamp: Scalars['BigInt'];
  updatedAtBlockNumber: Scalars['BigInt'];
  units: Scalars['BigInt'];
  isConnected: Scalars['Boolean'];
  totalAmountClaimed: Scalars['BigInt'];
  poolTotalAmountDistributedUntilUpdatedAt: Scalars['BigInt'];
  totalAmountReceivedUntilUpdatedAt: Scalars['BigInt'];
  syncedPerUnitSettledValue: Scalars['BigInt'];
  syncedPerUnitFlowRate: Scalars['BigInt'];
  account: Account;
  pool: Pool;
  poolConnectionUpdatedEvents: Array<PoolConnectionUpdatedEvent>;
  memberUnitsUpdatedEvents: Array<MemberUnitsUpdatedEvent>;
  distributionClaimedEvents: Array<DistributionClaimedEvent>;
};


export type PoolMemberpoolConnectionUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolConnectionUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolConnectionUpdatedEvent_filter>;
};


export type PoolMembermemberUnitsUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MemberUnitsUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MemberUnitsUpdatedEvent_filter>;
};


export type PoolMemberdistributionClaimedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributionClaimedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributionClaimedEvent_filter>;
};

export type PoolMember_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  units?: InputMaybe<Scalars['BigInt']>;
  units_not?: InputMaybe<Scalars['BigInt']>;
  units_gt?: InputMaybe<Scalars['BigInt']>;
  units_lt?: InputMaybe<Scalars['BigInt']>;
  units_gte?: InputMaybe<Scalars['BigInt']>;
  units_lte?: InputMaybe<Scalars['BigInt']>;
  units_in?: InputMaybe<Array<Scalars['BigInt']>>;
  units_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  isConnected?: InputMaybe<Scalars['Boolean']>;
  isConnected_not?: InputMaybe<Scalars['Boolean']>;
  isConnected_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isConnected_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  totalAmountClaimed?: InputMaybe<Scalars['BigInt']>;
  totalAmountClaimed_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountClaimed_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountClaimed_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountClaimed_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountClaimed_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountClaimed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountClaimed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  poolTotalAmountDistributedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  poolTotalAmountDistributedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  poolTotalAmountDistributedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  poolTotalAmountDistributedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  poolTotalAmountDistributedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  poolTotalAmountDistributedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  poolTotalAmountDistributedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  poolTotalAmountDistributedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountReceivedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceivedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceivedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceivedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceivedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceivedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceivedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountReceivedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  syncedPerUnitSettledValue?: InputMaybe<Scalars['BigInt']>;
  syncedPerUnitSettledValue_not?: InputMaybe<Scalars['BigInt']>;
  syncedPerUnitSettledValue_gt?: InputMaybe<Scalars['BigInt']>;
  syncedPerUnitSettledValue_lt?: InputMaybe<Scalars['BigInt']>;
  syncedPerUnitSettledValue_gte?: InputMaybe<Scalars['BigInt']>;
  syncedPerUnitSettledValue_lte?: InputMaybe<Scalars['BigInt']>;
  syncedPerUnitSettledValue_in?: InputMaybe<Array<Scalars['BigInt']>>;
  syncedPerUnitSettledValue_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  syncedPerUnitFlowRate?: InputMaybe<Scalars['BigInt']>;
  syncedPerUnitFlowRate_not?: InputMaybe<Scalars['BigInt']>;
  syncedPerUnitFlowRate_gt?: InputMaybe<Scalars['BigInt']>;
  syncedPerUnitFlowRate_lt?: InputMaybe<Scalars['BigInt']>;
  syncedPerUnitFlowRate_gte?: InputMaybe<Scalars['BigInt']>;
  syncedPerUnitFlowRate_lte?: InputMaybe<Scalars['BigInt']>;
  syncedPerUnitFlowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  syncedPerUnitFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<Account_filter>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  poolConnectionUpdatedEvents_?: InputMaybe<PoolConnectionUpdatedEvent_filter>;
  memberUnitsUpdatedEvents_?: InputMaybe<MemberUnitsUpdatedEvent_filter>;
  distributionClaimedEvents_?: InputMaybe<DistributionClaimedEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolMember_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PoolMember_filter>>>;
};

export type PoolMember_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'units'
  | 'isConnected'
  | 'totalAmountClaimed'
  | 'poolTotalAmountDistributedUntilUpdatedAt'
  | 'totalAmountReceivedUntilUpdatedAt'
  | 'syncedPerUnitSettledValue'
  | 'syncedPerUnitFlowRate'
  | 'account'
  | 'account__id'
  | 'account__createdAtTimestamp'
  | 'account__createdAtBlockNumber'
  | 'account__updatedAtTimestamp'
  | 'account__updatedAtBlockNumber'
  | 'account__isSuperApp'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__updatedAtTimestamp'
  | 'pool__updatedAtBlockNumber'
  | 'pool__totalUnits'
  | 'pool__totalConnectedUnits'
  | 'pool__totalDisconnectedUnits'
  | 'pool__totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'pool__totalAmountFlowedDistributedUntilUpdatedAt'
  | 'pool__totalAmountDistributedUntilUpdatedAt'
  | 'pool__totalFlowAdjustmentAmountDistributedUntilUpdatedAt'
  | 'pool__perUnitSettledValue'
  | 'pool__perUnitFlowRate'
  | 'pool__totalMembers'
  | 'pool__totalConnectedMembers'
  | 'pool__totalDisconnectedMembers'
  | 'pool__adjustmentFlowRate'
  | 'pool__flowRate'
  | 'pool__totalBuffer'
  | 'poolConnectionUpdatedEvents'
  | 'memberUnitsUpdatedEvents'
  | 'distributionClaimedEvents';

export type Pool_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnits?: InputMaybe<Scalars['BigInt']>;
  totalUnits_not?: InputMaybe<Scalars['BigInt']>;
  totalUnits_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnits_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnits_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnits_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnits_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnits_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalConnectedUnits?: InputMaybe<Scalars['BigInt']>;
  totalConnectedUnits_not?: InputMaybe<Scalars['BigInt']>;
  totalConnectedUnits_gt?: InputMaybe<Scalars['BigInt']>;
  totalConnectedUnits_lt?: InputMaybe<Scalars['BigInt']>;
  totalConnectedUnits_gte?: InputMaybe<Scalars['BigInt']>;
  totalConnectedUnits_lte?: InputMaybe<Scalars['BigInt']>;
  totalConnectedUnits_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalConnectedUnits_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDisconnectedUnits?: InputMaybe<Scalars['BigInt']>;
  totalDisconnectedUnits_not?: InputMaybe<Scalars['BigInt']>;
  totalDisconnectedUnits_gt?: InputMaybe<Scalars['BigInt']>;
  totalDisconnectedUnits_lt?: InputMaybe<Scalars['BigInt']>;
  totalDisconnectedUnits_gte?: InputMaybe<Scalars['BigInt']>;
  totalDisconnectedUnits_lte?: InputMaybe<Scalars['BigInt']>;
  totalDisconnectedUnits_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDisconnectedUnits_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountInstantlyDistributedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountInstantlyDistributedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountInstantlyDistributedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountInstantlyDistributedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountInstantlyDistributedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountInstantlyDistributedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountInstantlyDistributedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountInstantlyDistributedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountFlowedDistributedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountFlowedDistributedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountFlowedDistributedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountFlowedDistributedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountFlowedDistributedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountFlowedDistributedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountFlowedDistributedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountFlowedDistributedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountDistributedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountDistributedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFlowAdjustmentAmountDistributedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalFlowAdjustmentAmountDistributedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalFlowAdjustmentAmountDistributedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalFlowAdjustmentAmountDistributedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalFlowAdjustmentAmountDistributedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalFlowAdjustmentAmountDistributedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalFlowAdjustmentAmountDistributedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFlowAdjustmentAmountDistributedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  perUnitSettledValue?: InputMaybe<Scalars['BigInt']>;
  perUnitSettledValue_not?: InputMaybe<Scalars['BigInt']>;
  perUnitSettledValue_gt?: InputMaybe<Scalars['BigInt']>;
  perUnitSettledValue_lt?: InputMaybe<Scalars['BigInt']>;
  perUnitSettledValue_gte?: InputMaybe<Scalars['BigInt']>;
  perUnitSettledValue_lte?: InputMaybe<Scalars['BigInt']>;
  perUnitSettledValue_in?: InputMaybe<Array<Scalars['BigInt']>>;
  perUnitSettledValue_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  perUnitFlowRate?: InputMaybe<Scalars['BigInt']>;
  perUnitFlowRate_not?: InputMaybe<Scalars['BigInt']>;
  perUnitFlowRate_gt?: InputMaybe<Scalars['BigInt']>;
  perUnitFlowRate_lt?: InputMaybe<Scalars['BigInt']>;
  perUnitFlowRate_gte?: InputMaybe<Scalars['BigInt']>;
  perUnitFlowRate_lte?: InputMaybe<Scalars['BigInt']>;
  perUnitFlowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  perUnitFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalMembers?: InputMaybe<Scalars['Int']>;
  totalMembers_not?: InputMaybe<Scalars['Int']>;
  totalMembers_gt?: InputMaybe<Scalars['Int']>;
  totalMembers_lt?: InputMaybe<Scalars['Int']>;
  totalMembers_gte?: InputMaybe<Scalars['Int']>;
  totalMembers_lte?: InputMaybe<Scalars['Int']>;
  totalMembers_in?: InputMaybe<Array<Scalars['Int']>>;
  totalMembers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalConnectedMembers?: InputMaybe<Scalars['Int']>;
  totalConnectedMembers_not?: InputMaybe<Scalars['Int']>;
  totalConnectedMembers_gt?: InputMaybe<Scalars['Int']>;
  totalConnectedMembers_lt?: InputMaybe<Scalars['Int']>;
  totalConnectedMembers_gte?: InputMaybe<Scalars['Int']>;
  totalConnectedMembers_lte?: InputMaybe<Scalars['Int']>;
  totalConnectedMembers_in?: InputMaybe<Array<Scalars['Int']>>;
  totalConnectedMembers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalDisconnectedMembers?: InputMaybe<Scalars['Int']>;
  totalDisconnectedMembers_not?: InputMaybe<Scalars['Int']>;
  totalDisconnectedMembers_gt?: InputMaybe<Scalars['Int']>;
  totalDisconnectedMembers_lt?: InputMaybe<Scalars['Int']>;
  totalDisconnectedMembers_gte?: InputMaybe<Scalars['Int']>;
  totalDisconnectedMembers_lte?: InputMaybe<Scalars['Int']>;
  totalDisconnectedMembers_in?: InputMaybe<Array<Scalars['Int']>>;
  totalDisconnectedMembers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  adjustmentFlowRate?: InputMaybe<Scalars['BigInt']>;
  adjustmentFlowRate_not?: InputMaybe<Scalars['BigInt']>;
  adjustmentFlowRate_gt?: InputMaybe<Scalars['BigInt']>;
  adjustmentFlowRate_lt?: InputMaybe<Scalars['BigInt']>;
  adjustmentFlowRate_gte?: InputMaybe<Scalars['BigInt']>;
  adjustmentFlowRate_lte?: InputMaybe<Scalars['BigInt']>;
  adjustmentFlowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  adjustmentFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRate?: InputMaybe<Scalars['BigInt']>;
  flowRate_not?: InputMaybe<Scalars['BigInt']>;
  flowRate_gt?: InputMaybe<Scalars['BigInt']>;
  flowRate_lt?: InputMaybe<Scalars['BigInt']>;
  flowRate_gte?: InputMaybe<Scalars['BigInt']>;
  flowRate_lte?: InputMaybe<Scalars['BigInt']>;
  flowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalBuffer?: InputMaybe<Scalars['BigInt']>;
  totalBuffer_not?: InputMaybe<Scalars['BigInt']>;
  totalBuffer_gt?: InputMaybe<Scalars['BigInt']>;
  totalBuffer_lt?: InputMaybe<Scalars['BigInt']>;
  totalBuffer_gte?: InputMaybe<Scalars['BigInt']>;
  totalBuffer_lte?: InputMaybe<Scalars['BigInt']>;
  totalBuffer_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalBuffer_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  admin?: InputMaybe<Scalars['String']>;
  admin_not?: InputMaybe<Scalars['String']>;
  admin_gt?: InputMaybe<Scalars['String']>;
  admin_lt?: InputMaybe<Scalars['String']>;
  admin_gte?: InputMaybe<Scalars['String']>;
  admin_lte?: InputMaybe<Scalars['String']>;
  admin_in?: InputMaybe<Array<Scalars['String']>>;
  admin_not_in?: InputMaybe<Array<Scalars['String']>>;
  admin_contains?: InputMaybe<Scalars['String']>;
  admin_contains_nocase?: InputMaybe<Scalars['String']>;
  admin_not_contains?: InputMaybe<Scalars['String']>;
  admin_not_contains_nocase?: InputMaybe<Scalars['String']>;
  admin_starts_with?: InputMaybe<Scalars['String']>;
  admin_starts_with_nocase?: InputMaybe<Scalars['String']>;
  admin_not_starts_with?: InputMaybe<Scalars['String']>;
  admin_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  admin_ends_with?: InputMaybe<Scalars['String']>;
  admin_ends_with_nocase?: InputMaybe<Scalars['String']>;
  admin_not_ends_with?: InputMaybe<Scalars['String']>;
  admin_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  admin_?: InputMaybe<Account_filter>;
  poolDistributors_?: InputMaybe<PoolDistributor_filter>;
  poolMembers_?: InputMaybe<PoolMember_filter>;
  poolCreatedEvent_?: InputMaybe<PoolCreatedEvent_filter>;
  poolConnectionUpdatedEvents_?: InputMaybe<PoolConnectionUpdatedEvent_filter>;
  bufferAdjustedEvents_?: InputMaybe<BufferAdjustedEvent_filter>;
  instantDistributionUpdatedEvents_?: InputMaybe<InstantDistributionUpdatedEvent_filter>;
  flowDistributionUpdatedEvents_?: InputMaybe<FlowDistributionUpdatedEvent_filter>;
  memberUnitsUpdatedEvents_?: InputMaybe<MemberUnitsUpdatedEvent_filter>;
  distributionClaimedEvents_?: InputMaybe<DistributionClaimedEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pool_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pool_filter>>>;
};

export type Pool_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'totalUnits'
  | 'totalConnectedUnits'
  | 'totalDisconnectedUnits'
  | 'totalAmountInstantlyDistributedUntilUpdatedAt'
  | 'totalAmountFlowedDistributedUntilUpdatedAt'
  | 'totalAmountDistributedUntilUpdatedAt'
  | 'totalFlowAdjustmentAmountDistributedUntilUpdatedAt'
  | 'perUnitSettledValue'
  | 'perUnitFlowRate'
  | 'totalMembers'
  | 'totalConnectedMembers'
  | 'totalDisconnectedMembers'
  | 'adjustmentFlowRate'
  | 'flowRate'
  | 'totalBuffer'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress'
  | 'admin'
  | 'admin__id'
  | 'admin__createdAtTimestamp'
  | 'admin__createdAtBlockNumber'
  | 'admin__updatedAtTimestamp'
  | 'admin__updatedAtBlockNumber'
  | 'admin__isSuperApp'
  | 'poolDistributors'
  | 'poolMembers'
  | 'poolCreatedEvent'
  | 'poolCreatedEvent__id'
  | 'poolCreatedEvent__transactionHash'
  | 'poolCreatedEvent__gasPrice'
  | 'poolCreatedEvent__gasUsed'
  | 'poolCreatedEvent__timestamp'
  | 'poolCreatedEvent__name'
  | 'poolCreatedEvent__blockNumber'
  | 'poolCreatedEvent__logIndex'
  | 'poolCreatedEvent__order'
  | 'poolCreatedEvent__token'
  | 'poolCreatedEvent__caller'
  | 'poolCreatedEvent__admin'
  | 'poolConnectionUpdatedEvents'
  | 'bufferAdjustedEvents'
  | 'instantDistributionUpdatedEvents'
  | 'flowDistributionUpdatedEvents'
  | 'memberUnitsUpdatedEvents'
  | 'distributionClaimedEvents';

export type Query = {
  flowUpdatedEvent?: Maybe<FlowUpdatedEvent>;
  flowUpdatedEvents: Array<FlowUpdatedEvent>;
  flowOperatorUpdatedEvent?: Maybe<FlowOperatorUpdatedEvent>;
  flowOperatorUpdatedEvents: Array<FlowOperatorUpdatedEvent>;
  indexCreatedEvent?: Maybe<IndexCreatedEvent>;
  indexCreatedEvents: Array<IndexCreatedEvent>;
  indexDistributionClaimedEvent?: Maybe<IndexDistributionClaimedEvent>;
  indexDistributionClaimedEvents: Array<IndexDistributionClaimedEvent>;
  indexUpdatedEvent?: Maybe<IndexUpdatedEvent>;
  indexUpdatedEvents: Array<IndexUpdatedEvent>;
  indexSubscribedEvent?: Maybe<IndexSubscribedEvent>;
  indexSubscribedEvents: Array<IndexSubscribedEvent>;
  indexUnitsUpdatedEvent?: Maybe<IndexUnitsUpdatedEvent>;
  indexUnitsUpdatedEvents: Array<IndexUnitsUpdatedEvent>;
  indexUnsubscribedEvent?: Maybe<IndexUnsubscribedEvent>;
  indexUnsubscribedEvents: Array<IndexUnsubscribedEvent>;
  subscriptionApprovedEvent?: Maybe<SubscriptionApprovedEvent>;
  subscriptionApprovedEvents: Array<SubscriptionApprovedEvent>;
  subscriptionDistributionClaimedEvent?: Maybe<SubscriptionDistributionClaimedEvent>;
  subscriptionDistributionClaimedEvents: Array<SubscriptionDistributionClaimedEvent>;
  subscriptionRevokedEvent?: Maybe<SubscriptionRevokedEvent>;
  subscriptionRevokedEvents: Array<SubscriptionRevokedEvent>;
  subscriptionUnitsUpdatedEvent?: Maybe<SubscriptionUnitsUpdatedEvent>;
  subscriptionUnitsUpdatedEvents: Array<SubscriptionUnitsUpdatedEvent>;
  poolCreatedEvent?: Maybe<PoolCreatedEvent>;
  poolCreatedEvents: Array<PoolCreatedEvent>;
  poolConnectionUpdatedEvent?: Maybe<PoolConnectionUpdatedEvent>;
  poolConnectionUpdatedEvents: Array<PoolConnectionUpdatedEvent>;
  bufferAdjustedEvent?: Maybe<BufferAdjustedEvent>;
  bufferAdjustedEvents: Array<BufferAdjustedEvent>;
  instantDistributionUpdatedEvent?: Maybe<InstantDistributionUpdatedEvent>;
  instantDistributionUpdatedEvents: Array<InstantDistributionUpdatedEvent>;
  flowDistributionUpdatedEvent?: Maybe<FlowDistributionUpdatedEvent>;
  flowDistributionUpdatedEvents: Array<FlowDistributionUpdatedEvent>;
  distributionClaimedEvent?: Maybe<DistributionClaimedEvent>;
  distributionClaimedEvents: Array<DistributionClaimedEvent>;
  memberUnitsUpdatedEvent?: Maybe<MemberUnitsUpdatedEvent>;
  memberUnitsUpdatedEvents: Array<MemberUnitsUpdatedEvent>;
  agreementClassRegisteredEvent?: Maybe<AgreementClassRegisteredEvent>;
  agreementClassRegisteredEvents: Array<AgreementClassRegisteredEvent>;
  agreementClassUpdatedEvent?: Maybe<AgreementClassUpdatedEvent>;
  agreementClassUpdatedEvents: Array<AgreementClassUpdatedEvent>;
  appRegisteredEvent?: Maybe<AppRegisteredEvent>;
  appRegisteredEvents: Array<AppRegisteredEvent>;
  governanceReplacedEvent?: Maybe<GovernanceReplacedEvent>;
  governanceReplacedEvents: Array<GovernanceReplacedEvent>;
  jailEvent?: Maybe<JailEvent>;
  jailEvents: Array<JailEvent>;
  superTokenFactoryUpdatedEvent?: Maybe<SuperTokenFactoryUpdatedEvent>;
  superTokenFactoryUpdatedEvents: Array<SuperTokenFactoryUpdatedEvent>;
  superTokenLogicUpdatedEvent?: Maybe<SuperTokenLogicUpdatedEvent>;
  superTokenLogicUpdatedEvents: Array<SuperTokenLogicUpdatedEvent>;
  roleAdminChangedEvent?: Maybe<RoleAdminChangedEvent>;
  roleAdminChangedEvents: Array<RoleAdminChangedEvent>;
  roleGrantedEvent?: Maybe<RoleGrantedEvent>;
  roleGrantedEvents: Array<RoleGrantedEvent>;
  roleRevokedEvent?: Maybe<RoleRevokedEvent>;
  roleRevokedEvents: Array<RoleRevokedEvent>;
  setEvent?: Maybe<SetEvent>;
  setEvents: Array<SetEvent>;
  cfav1LiquidationPeriodChangedEvent?: Maybe<CFAv1LiquidationPeriodChangedEvent>;
  cfav1LiquidationPeriodChangedEvents: Array<CFAv1LiquidationPeriodChangedEvent>;
  configChangedEvent?: Maybe<ConfigChangedEvent>;
  configChangedEvents: Array<ConfigChangedEvent>;
  rewardAddressChangedEvent?: Maybe<RewardAddressChangedEvent>;
  rewardAddressChangedEvents: Array<RewardAddressChangedEvent>;
  pppconfigurationChangedEvent?: Maybe<PPPConfigurationChangedEvent>;
  pppconfigurationChangedEvents: Array<PPPConfigurationChangedEvent>;
  superTokenMinimumDepositChangedEvent?: Maybe<SuperTokenMinimumDepositChangedEvent>;
  superTokenMinimumDepositChangedEvents: Array<SuperTokenMinimumDepositChangedEvent>;
  trustedForwarderChangedEvent?: Maybe<TrustedForwarderChangedEvent>;
  trustedForwarderChangedEvents: Array<TrustedForwarderChangedEvent>;
  agreementLiquidatedByEvent?: Maybe<AgreementLiquidatedByEvent>;
  agreementLiquidatedByEvents: Array<AgreementLiquidatedByEvent>;
  agreementLiquidatedV2Event?: Maybe<AgreementLiquidatedV2Event>;
  agreementLiquidatedV2Events: Array<AgreementLiquidatedV2Event>;
  burnedEvent?: Maybe<BurnedEvent>;
  burnedEvents: Array<BurnedEvent>;
  mintedEvent?: Maybe<MintedEvent>;
  mintedEvents: Array<MintedEvent>;
  sentEvent?: Maybe<SentEvent>;
  sentEvents: Array<SentEvent>;
  transferEvent?: Maybe<TransferEvent>;
  transferEvents: Array<TransferEvent>;
  tokenDowngradedEvent?: Maybe<TokenDowngradedEvent>;
  tokenDowngradedEvents: Array<TokenDowngradedEvent>;
  tokenUpgradedEvent?: Maybe<TokenUpgradedEvent>;
  tokenUpgradedEvents: Array<TokenUpgradedEvent>;
  approvalEvent?: Maybe<ApprovalEvent>;
  approvalEvents: Array<ApprovalEvent>;
  customSuperTokenCreatedEvent?: Maybe<CustomSuperTokenCreatedEvent>;
  customSuperTokenCreatedEvents: Array<CustomSuperTokenCreatedEvent>;
  superTokenCreatedEvent?: Maybe<SuperTokenCreatedEvent>;
  superTokenCreatedEvents: Array<SuperTokenCreatedEvent>;
  superTokenLogicCreatedEvent?: Maybe<SuperTokenLogicCreatedEvent>;
  superTokenLogicCreatedEvents: Array<SuperTokenLogicCreatedEvent>;
  newPICEvent?: Maybe<NewPICEvent>;
  newPICEvents: Array<NewPICEvent>;
  exitRateChangedEvent?: Maybe<ExitRateChangedEvent>;
  exitRateChangedEvents: Array<ExitRateChangedEvent>;
  bondIncreasedEvent?: Maybe<BondIncreasedEvent>;
  bondIncreasedEvents: Array<BondIncreasedEvent>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  poolMember?: Maybe<PoolMember>;
  poolMembers: Array<PoolMember>;
  poolDistributor?: Maybe<PoolDistributor>;
  poolDistributors: Array<PoolDistributor>;
  index?: Maybe<Index>;
  indexes: Array<Index>;
  indexSubscription?: Maybe<IndexSubscription>;
  indexSubscriptions: Array<IndexSubscription>;
  stream?: Maybe<Stream>;
  streams: Array<Stream>;
  flowOperator?: Maybe<FlowOperator>;
  flowOperators: Array<FlowOperator>;
  streamPeriod?: Maybe<StreamPeriod>;
  streamPeriods: Array<StreamPeriod>;
  tokenGovernanceConfig?: Maybe<TokenGovernanceConfig>;
  tokenGovernanceConfigs: Array<TokenGovernanceConfig>;
  streamRevision?: Maybe<StreamRevision>;
  streamRevisions: Array<StreamRevision>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  resolverEntry?: Maybe<ResolverEntry>;
  resolverEntries: Array<ResolverEntry>;
  accountTokenSnapshot?: Maybe<AccountTokenSnapshot>;
  accountTokenSnapshots: Array<AccountTokenSnapshot>;
  accountTokenSnapshotLog?: Maybe<AccountTokenSnapshotLog>;
  accountTokenSnapshotLogs: Array<AccountTokenSnapshotLog>;
  tokenStatistic?: Maybe<TokenStatistic>;
  tokenStatistics: Array<TokenStatistic>;
  tokenStatisticLog?: Maybe<TokenStatisticLog>;
  tokenStatisticLogs: Array<TokenStatisticLog>;
  sfmeta?: Maybe<SFMeta>;
  sfmetas: Array<SFMeta>;
  event?: Maybe<Event>;
  events: Array<Event>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryflowUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflowUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflowOperatorUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflowOperatorUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowOperatorUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowOperatorUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexCreatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexCreatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexDistributionClaimedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexDistributionClaimedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexDistributionClaimedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexDistributionClaimedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexSubscribedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexSubscribedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexSubscribedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexSubscribedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexUnitsUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexUnitsUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexUnitsUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexUnitsUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexUnsubscribedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexUnsubscribedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexUnsubscribedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexUnsubscribedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubscriptionApprovedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubscriptionApprovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionApprovedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionApprovedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubscriptionDistributionClaimedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubscriptionDistributionClaimedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionDistributionClaimedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionDistributionClaimedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubscriptionRevokedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubscriptionRevokedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionRevokedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionRevokedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubscriptionUnitsUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubscriptionUnitsUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionUnitsUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionUnitsUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolCreatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolCreatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolConnectionUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolConnectionUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolConnectionUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolConnectionUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybufferAdjustedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybufferAdjustedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BufferAdjustedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BufferAdjustedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinstantDistributionUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinstantDistributionUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InstantDistributionUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InstantDistributionUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflowDistributionUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflowDistributionUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowDistributionUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowDistributionUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydistributionClaimedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydistributionClaimedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributionClaimedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributionClaimedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymemberUnitsUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymemberUnitsUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MemberUnitsUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MemberUnitsUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryagreementClassRegisteredEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryagreementClassRegisteredEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AgreementClassRegisteredEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AgreementClassRegisteredEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryagreementClassUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryagreementClassUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AgreementClassUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AgreementClassUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryappRegisteredEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryappRegisteredEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AppRegisteredEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AppRegisteredEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygovernanceReplacedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygovernanceReplacedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GovernanceReplacedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GovernanceReplacedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryjailEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryjailEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<JailEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<JailEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysuperTokenFactoryUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysuperTokenFactoryUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenFactoryUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SuperTokenFactoryUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysuperTokenLogicUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysuperTokenLogicUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenLogicUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SuperTokenLogicUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryroleAdminChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryroleAdminChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleAdminChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoleAdminChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryroleGrantedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryroleGrantedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleGrantedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoleGrantedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryroleRevokedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryroleRevokedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleRevokedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoleRevokedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysetEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SetEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SetEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querycfav1LiquidationPeriodChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querycfav1LiquidationPeriodChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CFAv1LiquidationPeriodChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CFAv1LiquidationPeriodChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryconfigChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryconfigChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ConfigChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ConfigChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrewardAddressChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrewardAddressChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardAddressChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardAddressChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypppconfigurationChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypppconfigurationChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PPPConfigurationChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PPPConfigurationChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysuperTokenMinimumDepositChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysuperTokenMinimumDepositChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenMinimumDepositChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SuperTokenMinimumDepositChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytrustedForwarderChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytrustedForwarderChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TrustedForwarderChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TrustedForwarderChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryagreementLiquidatedByEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryagreementLiquidatedByEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AgreementLiquidatedByEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AgreementLiquidatedByEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryagreementLiquidatedV2EventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryagreementLiquidatedV2EventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AgreementLiquidatedV2Event_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AgreementLiquidatedV2Event_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryburnedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryburnedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BurnedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BurnedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymintedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymintedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MintedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MintedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysentEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysentEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SentEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SentEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenDowngradedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenDowngradedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDowngradedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenDowngradedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenUpgradedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenUpgradedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenUpgradedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenUpgradedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryapprovalEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryapprovalEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApprovalEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ApprovalEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycustomSuperTokenCreatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycustomSuperTokenCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CustomSuperTokenCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CustomSuperTokenCreatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysuperTokenCreatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysuperTokenCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SuperTokenCreatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysuperTokenLogicCreatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysuperTokenLogicCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenLogicCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SuperTokenLogicCreatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewPICEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewPICEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewPICEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewPICEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryexitRateChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryexitRateChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ExitRateChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExitRateChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybondIncreasedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybondIncreasedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BondIncreasedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BondIncreasedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolMemberArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolMembersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolMember_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolMember_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolDistributorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolDistributorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolDistributor_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolDistributor_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Index_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Index_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexSubscriptionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryindexSubscriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexSubscription_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexSubscription_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystreamArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystreamsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Stream_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Stream_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflowOperatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflowOperatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowOperator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowOperator_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystreamPeriodArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystreamPeriodsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StreamPeriod_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StreamPeriod_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenGovernanceConfigArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenGovernanceConfigsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenGovernanceConfig_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenGovernanceConfig_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystreamRevisionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystreamRevisionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StreamRevision_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StreamRevision_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryresolverEntryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryresolverEntriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ResolverEntry_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ResolverEntry_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountTokenSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountTokenSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountTokenSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountTokenSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountTokenSnapshotLogArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountTokenSnapshotLogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountTokenSnapshotLog_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountTokenSnapshotLog_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenStatisticArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenStatisticsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenStatistic_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenStatistic_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenStatisticLogArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenStatisticLogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenStatisticLog_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenStatisticLog_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysfmetaArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysfmetasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SFMeta_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SFMeta_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryeventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryeventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Event_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type ResolverEntry = {
  /**
   * ID: the keccak256 hash of the set name
   *
   */
  id: Scalars['ID'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  updatedAtTimestamp: Scalars['BigInt'];
  updatedAtBlockNumber: Scalars['BigInt'];
  targetAddress: Scalars['Bytes'];
  isToken: Scalars['Boolean'];
  isListed: Scalars['Boolean'];
  setEvents: Array<SetEvent>;
};


export type ResolverEntrysetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SetEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SetEvent_filter>;
};

export type ResolverEntry_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  targetAddress?: InputMaybe<Scalars['Bytes']>;
  targetAddress_not?: InputMaybe<Scalars['Bytes']>;
  targetAddress_gt?: InputMaybe<Scalars['Bytes']>;
  targetAddress_lt?: InputMaybe<Scalars['Bytes']>;
  targetAddress_gte?: InputMaybe<Scalars['Bytes']>;
  targetAddress_lte?: InputMaybe<Scalars['Bytes']>;
  targetAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  targetAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  targetAddress_contains?: InputMaybe<Scalars['Bytes']>;
  targetAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  isToken?: InputMaybe<Scalars['Boolean']>;
  isToken_not?: InputMaybe<Scalars['Boolean']>;
  isToken_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isToken_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isListed?: InputMaybe<Scalars['Boolean']>;
  isListed_not?: InputMaybe<Scalars['Boolean']>;
  isListed_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isListed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  setEvents_?: InputMaybe<SetEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ResolverEntry_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ResolverEntry_filter>>>;
};

export type ResolverEntry_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'targetAddress'
  | 'isToken'
  | 'isListed'
  | 'setEvents';

export type RewardAddressChangedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `governanceAddress`
   * addresses[1] = `host`
   * addresses[2] = `superToken`
   * addresses[3] = `rewardAddress`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  host: Scalars['Bytes'];
  superToken: Scalars['Bytes'];
  isKeySet: Scalars['Boolean'];
  rewardAddress: Scalars['Bytes'];
};

export type RewardAddressChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  governanceAddress?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_gt?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_lt?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_gte?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_lte?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  host?: InputMaybe<Scalars['Bytes']>;
  host_not?: InputMaybe<Scalars['Bytes']>;
  host_gt?: InputMaybe<Scalars['Bytes']>;
  host_lt?: InputMaybe<Scalars['Bytes']>;
  host_gte?: InputMaybe<Scalars['Bytes']>;
  host_lte?: InputMaybe<Scalars['Bytes']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_contains?: InputMaybe<Scalars['Bytes']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']>;
  superToken?: InputMaybe<Scalars['Bytes']>;
  superToken_not?: InputMaybe<Scalars['Bytes']>;
  superToken_gt?: InputMaybe<Scalars['Bytes']>;
  superToken_lt?: InputMaybe<Scalars['Bytes']>;
  superToken_gte?: InputMaybe<Scalars['Bytes']>;
  superToken_lte?: InputMaybe<Scalars['Bytes']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_contains?: InputMaybe<Scalars['Bytes']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  isKeySet?: InputMaybe<Scalars['Boolean']>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  rewardAddress?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_not?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_gt?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_lt?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_gte?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_lte?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardAddress_contains?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RewardAddressChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RewardAddressChangedEvent_filter>>>;
};

export type RewardAddressChangedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'governanceAddress'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'host'
  | 'superToken'
  | 'isKeySet'
  | 'rewardAddress';

export type RoleAdminChangedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `previousAdminRole`
   * addresses[1] = `newAdminRole`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  role: Scalars['Bytes'];
  previousAdminRole: Scalars['Bytes'];
  newAdminRole: Scalars['Bytes'];
};

export type RoleAdminChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_gt?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_lt?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_gte?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_lte?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_in?: InputMaybe<Array<Scalars['Bytes']>>;
  previousAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  previousAdminRole_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not_contains?: InputMaybe<Scalars['Bytes']>;
  newAdminRole?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_gt?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_lt?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_gte?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_lte?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newAdminRole_contains?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RoleAdminChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RoleAdminChangedEvent_filter>>>;
};

export type RoleAdminChangedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'role'
  | 'previousAdminRole'
  | 'newAdminRole';

export type RoleGrantedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `account`
   * addresses[1] = `sender`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  role: Scalars['Bytes'];
  account: Scalars['Bytes'];
  sender: Scalars['Bytes'];
};

export type RoleGrantedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RoleGrantedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RoleGrantedEvent_filter>>>;
};

export type RoleGrantedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'role'
  | 'account'
  | 'sender';

export type RoleRevokedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `account`
   * addresses[1] = `sender`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  role: Scalars['Bytes'];
  account: Scalars['Bytes'];
  sender: Scalars['Bytes'];
};

export type RoleRevokedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RoleRevokedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RoleRevokedEvent_filter>>>;
};

export type RoleRevokedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'role'
  | 'account'
  | 'sender';

export type SFMeta = {
  /**
   * The id is the commit hash.
   *
   */
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  /**
   * Whether the branch is feature/dev/v1.
   *
   */
  configuration: Scalars['String'];
  /**
   * The branch the current deployment is coming from.
   *
   */
  branch: Scalars['String'];
  /**
   * The subgraph package.json semver version of the current deployment.
   *
   */
  packageVersion: Scalars['String'];
};

export type SFMeta_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  configuration?: InputMaybe<Scalars['String']>;
  configuration_not?: InputMaybe<Scalars['String']>;
  configuration_gt?: InputMaybe<Scalars['String']>;
  configuration_lt?: InputMaybe<Scalars['String']>;
  configuration_gte?: InputMaybe<Scalars['String']>;
  configuration_lte?: InputMaybe<Scalars['String']>;
  configuration_in?: InputMaybe<Array<Scalars['String']>>;
  configuration_not_in?: InputMaybe<Array<Scalars['String']>>;
  configuration_contains?: InputMaybe<Scalars['String']>;
  configuration_contains_nocase?: InputMaybe<Scalars['String']>;
  configuration_not_contains?: InputMaybe<Scalars['String']>;
  configuration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  configuration_starts_with?: InputMaybe<Scalars['String']>;
  configuration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  configuration_not_starts_with?: InputMaybe<Scalars['String']>;
  configuration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  configuration_ends_with?: InputMaybe<Scalars['String']>;
  configuration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  configuration_not_ends_with?: InputMaybe<Scalars['String']>;
  configuration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  branch?: InputMaybe<Scalars['String']>;
  branch_not?: InputMaybe<Scalars['String']>;
  branch_gt?: InputMaybe<Scalars['String']>;
  branch_lt?: InputMaybe<Scalars['String']>;
  branch_gte?: InputMaybe<Scalars['String']>;
  branch_lte?: InputMaybe<Scalars['String']>;
  branch_in?: InputMaybe<Array<Scalars['String']>>;
  branch_not_in?: InputMaybe<Array<Scalars['String']>>;
  branch_contains?: InputMaybe<Scalars['String']>;
  branch_contains_nocase?: InputMaybe<Scalars['String']>;
  branch_not_contains?: InputMaybe<Scalars['String']>;
  branch_not_contains_nocase?: InputMaybe<Scalars['String']>;
  branch_starts_with?: InputMaybe<Scalars['String']>;
  branch_starts_with_nocase?: InputMaybe<Scalars['String']>;
  branch_not_starts_with?: InputMaybe<Scalars['String']>;
  branch_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  branch_ends_with?: InputMaybe<Scalars['String']>;
  branch_ends_with_nocase?: InputMaybe<Scalars['String']>;
  branch_not_ends_with?: InputMaybe<Scalars['String']>;
  branch_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  packageVersion?: InputMaybe<Scalars['String']>;
  packageVersion_not?: InputMaybe<Scalars['String']>;
  packageVersion_gt?: InputMaybe<Scalars['String']>;
  packageVersion_lt?: InputMaybe<Scalars['String']>;
  packageVersion_gte?: InputMaybe<Scalars['String']>;
  packageVersion_lte?: InputMaybe<Scalars['String']>;
  packageVersion_in?: InputMaybe<Array<Scalars['String']>>;
  packageVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  packageVersion_contains?: InputMaybe<Scalars['String']>;
  packageVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  packageVersion_not_contains?: InputMaybe<Scalars['String']>;
  packageVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  packageVersion_starts_with?: InputMaybe<Scalars['String']>;
  packageVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  packageVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  packageVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  packageVersion_ends_with?: InputMaybe<Scalars['String']>;
  packageVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  packageVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  packageVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SFMeta_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SFMeta_filter>>>;
};

export type SFMeta_orderBy =
  | 'id'
  | 'timestamp'
  | 'blockNumber'
  | 'configuration'
  | 'branch'
  | 'packageVersion';

export type SentEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `operator`
   * addresses[2] = `from`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  operator: Scalars['Bytes'];
  from: Scalars['Bytes'];
  to: Scalars['Bytes'];
  token: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  data: Scalars['Bytes'];
  operatorData: Scalars['Bytes'];
};

export type SentEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_gt?: InputMaybe<Scalars['Bytes']>;
  operator_lt?: InputMaybe<Scalars['Bytes']>;
  operator_gte?: InputMaybe<Scalars['Bytes']>;
  operator_lte?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_gt?: InputMaybe<Scalars['Bytes']>;
  from_lt?: InputMaybe<Scalars['Bytes']>;
  from_gte?: InputMaybe<Scalars['Bytes']>;
  from_lte?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_gt?: InputMaybe<Scalars['Bytes']>;
  to_lt?: InputMaybe<Scalars['Bytes']>;
  to_gte?: InputMaybe<Scalars['Bytes']>;
  to_lte?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  data?: InputMaybe<Scalars['Bytes']>;
  data_not?: InputMaybe<Scalars['Bytes']>;
  data_gt?: InputMaybe<Scalars['Bytes']>;
  data_lt?: InputMaybe<Scalars['Bytes']>;
  data_gte?: InputMaybe<Scalars['Bytes']>;
  data_lte?: InputMaybe<Scalars['Bytes']>;
  data_in?: InputMaybe<Array<Scalars['Bytes']>>;
  data_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  data_contains?: InputMaybe<Scalars['Bytes']>;
  data_not_contains?: InputMaybe<Scalars['Bytes']>;
  operatorData?: InputMaybe<Scalars['Bytes']>;
  operatorData_not?: InputMaybe<Scalars['Bytes']>;
  operatorData_gt?: InputMaybe<Scalars['Bytes']>;
  operatorData_lt?: InputMaybe<Scalars['Bytes']>;
  operatorData_gte?: InputMaybe<Scalars['Bytes']>;
  operatorData_lte?: InputMaybe<Scalars['Bytes']>;
  operatorData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operatorData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operatorData_contains?: InputMaybe<Scalars['Bytes']>;
  operatorData_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SentEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SentEvent_filter>>>;
};

export type SentEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'operator'
  | 'from'
  | 'to'
  | 'token'
  | 'amount'
  | 'data'
  | 'operatorData';

export type SetEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  /**
   * Because the name property is indexed, the
   * returned value will be a keccak256 hash
   * of the string.
   *
   */
  hashedName: Scalars['Bytes'];
  target: Scalars['Bytes'];
  resolverEntry: ResolverEntry;
};

export type SetEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hashedName?: InputMaybe<Scalars['Bytes']>;
  hashedName_not?: InputMaybe<Scalars['Bytes']>;
  hashedName_gt?: InputMaybe<Scalars['Bytes']>;
  hashedName_lt?: InputMaybe<Scalars['Bytes']>;
  hashedName_gte?: InputMaybe<Scalars['Bytes']>;
  hashedName_lte?: InputMaybe<Scalars['Bytes']>;
  hashedName_in?: InputMaybe<Array<Scalars['Bytes']>>;
  hashedName_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  hashedName_contains?: InputMaybe<Scalars['Bytes']>;
  hashedName_not_contains?: InputMaybe<Scalars['Bytes']>;
  target?: InputMaybe<Scalars['Bytes']>;
  target_not?: InputMaybe<Scalars['Bytes']>;
  target_gt?: InputMaybe<Scalars['Bytes']>;
  target_lt?: InputMaybe<Scalars['Bytes']>;
  target_gte?: InputMaybe<Scalars['Bytes']>;
  target_lte?: InputMaybe<Scalars['Bytes']>;
  target_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target_contains?: InputMaybe<Scalars['Bytes']>;
  target_not_contains?: InputMaybe<Scalars['Bytes']>;
  resolverEntry?: InputMaybe<Scalars['String']>;
  resolverEntry_not?: InputMaybe<Scalars['String']>;
  resolverEntry_gt?: InputMaybe<Scalars['String']>;
  resolverEntry_lt?: InputMaybe<Scalars['String']>;
  resolverEntry_gte?: InputMaybe<Scalars['String']>;
  resolverEntry_lte?: InputMaybe<Scalars['String']>;
  resolverEntry_in?: InputMaybe<Array<Scalars['String']>>;
  resolverEntry_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolverEntry_contains?: InputMaybe<Scalars['String']>;
  resolverEntry_contains_nocase?: InputMaybe<Scalars['String']>;
  resolverEntry_not_contains?: InputMaybe<Scalars['String']>;
  resolverEntry_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolverEntry_starts_with?: InputMaybe<Scalars['String']>;
  resolverEntry_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolverEntry_not_starts_with?: InputMaybe<Scalars['String']>;
  resolverEntry_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolverEntry_ends_with?: InputMaybe<Scalars['String']>;
  resolverEntry_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolverEntry_not_ends_with?: InputMaybe<Scalars['String']>;
  resolverEntry_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolverEntry_?: InputMaybe<ResolverEntry_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SetEvent_filter>>>;
};

export type SetEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'hashedName'
  | 'target'
  | 'resolverEntry'
  | 'resolverEntry__id'
  | 'resolverEntry__createdAtTimestamp'
  | 'resolverEntry__createdAtBlockNumber'
  | 'resolverEntry__updatedAtTimestamp'
  | 'resolverEntry__updatedAtBlockNumber'
  | 'resolverEntry__targetAddress'
  | 'resolverEntry__isToken'
  | 'resolverEntry__isListed';

/**
 * Stream: A higher order entity that represents the lifetime of a stream between a `sender` and a `receiver`.
 * A account can start a stream, update the flow rate, but when they close it, it is considered "dead".
 * The next stream you create with the same `sender` and `receiver` will create a new stream entity.
 * Therefore, multiple stream entities can be created between the same `sender` and `receiver`.
 *
 */
export type Stream = {
  /**
   * ID composed of: senderAddress-receiverAddress-tokenAddress-revisionIndex
   *
   */
  id: Scalars['ID'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  updatedAtTimestamp: Scalars['BigInt'];
  updatedAtBlockNumber: Scalars['BigInt'];
  currentFlowRate: Scalars['BigInt'];
  deposit: Scalars['BigInt'];
  /**
   * The amount streamed until `updatedAtTimestamp`/`updatedAtBlock`.
   * The formula to get the current streamed amount is:
   * `streamedUntilUpdatedAt + ((currentTime in seconds) - updatedAtTimestamp) * currentFlowRate`.
   *
   */
  streamedUntilUpdatedAt: Scalars['BigInt'];
  token: Token;
  sender: Account;
  receiver: Account;
  /**
   * The `userData` stored on the Stream is the last `userData` that was set in a `FlowUpdatedEvent`,
   * for this particular stream. To see the historical `userData` for this stream, you can query the `flowUpdatedEvents` field.
   *
   */
  userData: Scalars['Bytes'];
  flowUpdatedEvents: Array<FlowUpdatedEvent>;
  streamPeriods: Array<StreamPeriod>;
};


/**
 * Stream: A higher order entity that represents the lifetime of a stream between a `sender` and a `receiver`.
 * A account can start a stream, update the flow rate, but when they close it, it is considered "dead".
 * The next stream you create with the same `sender` and `receiver` will create a new stream entity.
 * Therefore, multiple stream entities can be created between the same `sender` and `receiver`.
 *
 */
export type StreamflowUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowUpdatedEvent_filter>;
};


/**
 * Stream: A higher order entity that represents the lifetime of a stream between a `sender` and a `receiver`.
 * A account can start a stream, update the flow rate, but when they close it, it is considered "dead".
 * The next stream you create with the same `sender` and `receiver` will create a new stream entity.
 * Therefore, multiple stream entities can be created between the same `sender` and `receiver`.
 *
 */
export type StreamstreamPeriodsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StreamPeriod_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StreamPeriod_filter>;
};

/**
 * StreamPeriod: A higher order entity that represents a period of time in a Stream with a constant flowRate.
 *
 */
export type StreamPeriod = {
  /**
   * ID composed of: streamId - periodRevisionIndex
   *
   */
  id: Scalars['ID'];
  stream: Stream;
  sender: Account;
  receiver: Account;
  token: Token;
  flowRate: Scalars['BigInt'];
  deposit: Scalars['BigInt'];
  startedAtTimestamp: Scalars['BigInt'];
  startedAtBlockNumber: Scalars['BigInt'];
  startedAtEvent: FlowUpdatedEvent;
  /**
   * Following values are null until the StreamPeriod is terminated
   *
   */
  stoppedAtTimestamp?: Maybe<Scalars['BigInt']>;
  stoppedAtBlockNumber?: Maybe<Scalars['BigInt']>;
  stoppedAtEvent?: Maybe<FlowUpdatedEvent>;
  totalAmountStreamed?: Maybe<Scalars['BigInt']>;
};

export type StreamPeriod_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  stream?: InputMaybe<Scalars['String']>;
  stream_not?: InputMaybe<Scalars['String']>;
  stream_gt?: InputMaybe<Scalars['String']>;
  stream_lt?: InputMaybe<Scalars['String']>;
  stream_gte?: InputMaybe<Scalars['String']>;
  stream_lte?: InputMaybe<Scalars['String']>;
  stream_in?: InputMaybe<Array<Scalars['String']>>;
  stream_not_in?: InputMaybe<Array<Scalars['String']>>;
  stream_contains?: InputMaybe<Scalars['String']>;
  stream_contains_nocase?: InputMaybe<Scalars['String']>;
  stream_not_contains?: InputMaybe<Scalars['String']>;
  stream_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stream_starts_with?: InputMaybe<Scalars['String']>;
  stream_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stream_not_starts_with?: InputMaybe<Scalars['String']>;
  stream_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stream_ends_with?: InputMaybe<Scalars['String']>;
  stream_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stream_not_ends_with?: InputMaybe<Scalars['String']>;
  stream_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stream_?: InputMaybe<Stream_filter>;
  sender?: InputMaybe<Scalars['String']>;
  sender_not?: InputMaybe<Scalars['String']>;
  sender_gt?: InputMaybe<Scalars['String']>;
  sender_lt?: InputMaybe<Scalars['String']>;
  sender_gte?: InputMaybe<Scalars['String']>;
  sender_lte?: InputMaybe<Scalars['String']>;
  sender_in?: InputMaybe<Array<Scalars['String']>>;
  sender_not_in?: InputMaybe<Array<Scalars['String']>>;
  sender_contains?: InputMaybe<Scalars['String']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_not_contains?: InputMaybe<Scalars['String']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_starts_with?: InputMaybe<Scalars['String']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_starts_with?: InputMaybe<Scalars['String']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_ends_with?: InputMaybe<Scalars['String']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_?: InputMaybe<Account_filter>;
  receiver?: InputMaybe<Scalars['String']>;
  receiver_not?: InputMaybe<Scalars['String']>;
  receiver_gt?: InputMaybe<Scalars['String']>;
  receiver_lt?: InputMaybe<Scalars['String']>;
  receiver_gte?: InputMaybe<Scalars['String']>;
  receiver_lte?: InputMaybe<Scalars['String']>;
  receiver_in?: InputMaybe<Array<Scalars['String']>>;
  receiver_not_in?: InputMaybe<Array<Scalars['String']>>;
  receiver_contains?: InputMaybe<Scalars['String']>;
  receiver_contains_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_contains?: InputMaybe<Scalars['String']>;
  receiver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  receiver_starts_with?: InputMaybe<Scalars['String']>;
  receiver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_starts_with?: InputMaybe<Scalars['String']>;
  receiver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_ends_with?: InputMaybe<Scalars['String']>;
  receiver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_ends_with?: InputMaybe<Scalars['String']>;
  receiver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_?: InputMaybe<Account_filter>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  flowRate?: InputMaybe<Scalars['BigInt']>;
  flowRate_not?: InputMaybe<Scalars['BigInt']>;
  flowRate_gt?: InputMaybe<Scalars['BigInt']>;
  flowRate_lt?: InputMaybe<Scalars['BigInt']>;
  flowRate_gte?: InputMaybe<Scalars['BigInt']>;
  flowRate_lte?: InputMaybe<Scalars['BigInt']>;
  flowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit?: InputMaybe<Scalars['BigInt']>;
  deposit_not?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  startedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  startedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  startedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  startedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  startedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  startedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  startedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  startedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  startedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  startedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  startedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  startedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startedAtEvent?: InputMaybe<Scalars['String']>;
  startedAtEvent_not?: InputMaybe<Scalars['String']>;
  startedAtEvent_gt?: InputMaybe<Scalars['String']>;
  startedAtEvent_lt?: InputMaybe<Scalars['String']>;
  startedAtEvent_gte?: InputMaybe<Scalars['String']>;
  startedAtEvent_lte?: InputMaybe<Scalars['String']>;
  startedAtEvent_in?: InputMaybe<Array<Scalars['String']>>;
  startedAtEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  startedAtEvent_contains?: InputMaybe<Scalars['String']>;
  startedAtEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  startedAtEvent_not_contains?: InputMaybe<Scalars['String']>;
  startedAtEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  startedAtEvent_starts_with?: InputMaybe<Scalars['String']>;
  startedAtEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  startedAtEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  startedAtEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  startedAtEvent_ends_with?: InputMaybe<Scalars['String']>;
  startedAtEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  startedAtEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  startedAtEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  startedAtEvent_?: InputMaybe<FlowUpdatedEvent_filter>;
  stoppedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  stoppedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  stoppedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  stoppedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  stoppedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  stoppedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  stoppedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stoppedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stoppedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  stoppedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  stoppedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  stoppedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  stoppedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  stoppedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  stoppedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stoppedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stoppedAtEvent?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_not?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_gt?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_lt?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_gte?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_lte?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_in?: InputMaybe<Array<Scalars['String']>>;
  stoppedAtEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  stoppedAtEvent_contains?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_not_contains?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_starts_with?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_ends_with?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_?: InputMaybe<FlowUpdatedEvent_filter>;
  totalAmountStreamed?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StreamPeriod_filter>>>;
  or?: InputMaybe<Array<InputMaybe<StreamPeriod_filter>>>;
};

export type StreamPeriod_orderBy =
  | 'id'
  | 'stream'
  | 'stream__id'
  | 'stream__createdAtTimestamp'
  | 'stream__createdAtBlockNumber'
  | 'stream__updatedAtTimestamp'
  | 'stream__updatedAtBlockNumber'
  | 'stream__currentFlowRate'
  | 'stream__deposit'
  | 'stream__streamedUntilUpdatedAt'
  | 'stream__userData'
  | 'sender'
  | 'sender__id'
  | 'sender__createdAtTimestamp'
  | 'sender__createdAtBlockNumber'
  | 'sender__updatedAtTimestamp'
  | 'sender__updatedAtBlockNumber'
  | 'sender__isSuperApp'
  | 'receiver'
  | 'receiver__id'
  | 'receiver__createdAtTimestamp'
  | 'receiver__createdAtBlockNumber'
  | 'receiver__updatedAtTimestamp'
  | 'receiver__updatedAtBlockNumber'
  | 'receiver__isSuperApp'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress'
  | 'flowRate'
  | 'deposit'
  | 'startedAtTimestamp'
  | 'startedAtBlockNumber'
  | 'startedAtEvent'
  | 'startedAtEvent__id'
  | 'startedAtEvent__transactionHash'
  | 'startedAtEvent__gasPrice'
  | 'startedAtEvent__gasUsed'
  | 'startedAtEvent__timestamp'
  | 'startedAtEvent__name'
  | 'startedAtEvent__blockNumber'
  | 'startedAtEvent__logIndex'
  | 'startedAtEvent__order'
  | 'startedAtEvent__token'
  | 'startedAtEvent__sender'
  | 'startedAtEvent__receiver'
  | 'startedAtEvent__flowOperator'
  | 'startedAtEvent__flowRate'
  | 'startedAtEvent__totalSenderFlowRate'
  | 'startedAtEvent__totalReceiverFlowRate'
  | 'startedAtEvent__deposit'
  | 'startedAtEvent__userData'
  | 'startedAtEvent__oldFlowRate'
  | 'startedAtEvent__type'
  | 'startedAtEvent__totalAmountStreamedUntilTimestamp'
  | 'stoppedAtTimestamp'
  | 'stoppedAtBlockNumber'
  | 'stoppedAtEvent'
  | 'stoppedAtEvent__id'
  | 'stoppedAtEvent__transactionHash'
  | 'stoppedAtEvent__gasPrice'
  | 'stoppedAtEvent__gasUsed'
  | 'stoppedAtEvent__timestamp'
  | 'stoppedAtEvent__name'
  | 'stoppedAtEvent__blockNumber'
  | 'stoppedAtEvent__logIndex'
  | 'stoppedAtEvent__order'
  | 'stoppedAtEvent__token'
  | 'stoppedAtEvent__sender'
  | 'stoppedAtEvent__receiver'
  | 'stoppedAtEvent__flowOperator'
  | 'stoppedAtEvent__flowRate'
  | 'stoppedAtEvent__totalSenderFlowRate'
  | 'stoppedAtEvent__totalReceiverFlowRate'
  | 'stoppedAtEvent__deposit'
  | 'stoppedAtEvent__userData'
  | 'stoppedAtEvent__oldFlowRate'
  | 'stoppedAtEvent__type'
  | 'stoppedAtEvent__totalAmountStreamedUntilTimestamp'
  | 'totalAmountStreamed';

export type StreamRevision = {
  /**
   * ID composed of: keccak256(abi.encode(sender,receiver))-tokenAddress
   *
   */
  id: Scalars['ID'];
  revisionIndex: Scalars['Int'];
  periodRevisionIndex: Scalars['Int'];
  /**
   * The "most recently alive" stream between a sender and receiver.
   * Note: The `revisionIndex` property may not be the same as the `revisionIndex` of `mostRecentStream`. Which means `mostRecentStream` has been closed and no new stream has been opened.
   *
   */
  mostRecentStream: Stream;
};

export type StreamRevision_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  revisionIndex?: InputMaybe<Scalars['Int']>;
  revisionIndex_not?: InputMaybe<Scalars['Int']>;
  revisionIndex_gt?: InputMaybe<Scalars['Int']>;
  revisionIndex_lt?: InputMaybe<Scalars['Int']>;
  revisionIndex_gte?: InputMaybe<Scalars['Int']>;
  revisionIndex_lte?: InputMaybe<Scalars['Int']>;
  revisionIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  revisionIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  periodRevisionIndex?: InputMaybe<Scalars['Int']>;
  periodRevisionIndex_not?: InputMaybe<Scalars['Int']>;
  periodRevisionIndex_gt?: InputMaybe<Scalars['Int']>;
  periodRevisionIndex_lt?: InputMaybe<Scalars['Int']>;
  periodRevisionIndex_gte?: InputMaybe<Scalars['Int']>;
  periodRevisionIndex_lte?: InputMaybe<Scalars['Int']>;
  periodRevisionIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  periodRevisionIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  mostRecentStream?: InputMaybe<Scalars['String']>;
  mostRecentStream_not?: InputMaybe<Scalars['String']>;
  mostRecentStream_gt?: InputMaybe<Scalars['String']>;
  mostRecentStream_lt?: InputMaybe<Scalars['String']>;
  mostRecentStream_gte?: InputMaybe<Scalars['String']>;
  mostRecentStream_lte?: InputMaybe<Scalars['String']>;
  mostRecentStream_in?: InputMaybe<Array<Scalars['String']>>;
  mostRecentStream_not_in?: InputMaybe<Array<Scalars['String']>>;
  mostRecentStream_contains?: InputMaybe<Scalars['String']>;
  mostRecentStream_contains_nocase?: InputMaybe<Scalars['String']>;
  mostRecentStream_not_contains?: InputMaybe<Scalars['String']>;
  mostRecentStream_not_contains_nocase?: InputMaybe<Scalars['String']>;
  mostRecentStream_starts_with?: InputMaybe<Scalars['String']>;
  mostRecentStream_starts_with_nocase?: InputMaybe<Scalars['String']>;
  mostRecentStream_not_starts_with?: InputMaybe<Scalars['String']>;
  mostRecentStream_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  mostRecentStream_ends_with?: InputMaybe<Scalars['String']>;
  mostRecentStream_ends_with_nocase?: InputMaybe<Scalars['String']>;
  mostRecentStream_not_ends_with?: InputMaybe<Scalars['String']>;
  mostRecentStream_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  mostRecentStream_?: InputMaybe<Stream_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StreamRevision_filter>>>;
  or?: InputMaybe<Array<InputMaybe<StreamRevision_filter>>>;
};

export type StreamRevision_orderBy =
  | 'id'
  | 'revisionIndex'
  | 'periodRevisionIndex'
  | 'mostRecentStream'
  | 'mostRecentStream__id'
  | 'mostRecentStream__createdAtTimestamp'
  | 'mostRecentStream__createdAtBlockNumber'
  | 'mostRecentStream__updatedAtTimestamp'
  | 'mostRecentStream__updatedAtBlockNumber'
  | 'mostRecentStream__currentFlowRate'
  | 'mostRecentStream__deposit'
  | 'mostRecentStream__streamedUntilUpdatedAt'
  | 'mostRecentStream__userData';

export type Stream_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentFlowRate?: InputMaybe<Scalars['BigInt']>;
  currentFlowRate_not?: InputMaybe<Scalars['BigInt']>;
  currentFlowRate_gt?: InputMaybe<Scalars['BigInt']>;
  currentFlowRate_lt?: InputMaybe<Scalars['BigInt']>;
  currentFlowRate_gte?: InputMaybe<Scalars['BigInt']>;
  currentFlowRate_lte?: InputMaybe<Scalars['BigInt']>;
  currentFlowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit?: InputMaybe<Scalars['BigInt']>;
  deposit_not?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  streamedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  streamedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  streamedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  streamedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  streamedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  streamedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  streamedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  streamedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  sender?: InputMaybe<Scalars['String']>;
  sender_not?: InputMaybe<Scalars['String']>;
  sender_gt?: InputMaybe<Scalars['String']>;
  sender_lt?: InputMaybe<Scalars['String']>;
  sender_gte?: InputMaybe<Scalars['String']>;
  sender_lte?: InputMaybe<Scalars['String']>;
  sender_in?: InputMaybe<Array<Scalars['String']>>;
  sender_not_in?: InputMaybe<Array<Scalars['String']>>;
  sender_contains?: InputMaybe<Scalars['String']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_not_contains?: InputMaybe<Scalars['String']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_starts_with?: InputMaybe<Scalars['String']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_starts_with?: InputMaybe<Scalars['String']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_ends_with?: InputMaybe<Scalars['String']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_?: InputMaybe<Account_filter>;
  receiver?: InputMaybe<Scalars['String']>;
  receiver_not?: InputMaybe<Scalars['String']>;
  receiver_gt?: InputMaybe<Scalars['String']>;
  receiver_lt?: InputMaybe<Scalars['String']>;
  receiver_gte?: InputMaybe<Scalars['String']>;
  receiver_lte?: InputMaybe<Scalars['String']>;
  receiver_in?: InputMaybe<Array<Scalars['String']>>;
  receiver_not_in?: InputMaybe<Array<Scalars['String']>>;
  receiver_contains?: InputMaybe<Scalars['String']>;
  receiver_contains_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_contains?: InputMaybe<Scalars['String']>;
  receiver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  receiver_starts_with?: InputMaybe<Scalars['String']>;
  receiver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_starts_with?: InputMaybe<Scalars['String']>;
  receiver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_ends_with?: InputMaybe<Scalars['String']>;
  receiver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_ends_with?: InputMaybe<Scalars['String']>;
  receiver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_?: InputMaybe<Account_filter>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_gt?: InputMaybe<Scalars['Bytes']>;
  userData_lt?: InputMaybe<Scalars['Bytes']>;
  userData_gte?: InputMaybe<Scalars['Bytes']>;
  userData_lte?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  flowUpdatedEvents_?: InputMaybe<FlowUpdatedEvent_filter>;
  streamPeriods_?: InputMaybe<StreamPeriod_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Stream_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Stream_filter>>>;
};

export type Stream_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'currentFlowRate'
  | 'deposit'
  | 'streamedUntilUpdatedAt'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress'
  | 'sender'
  | 'sender__id'
  | 'sender__createdAtTimestamp'
  | 'sender__createdAtBlockNumber'
  | 'sender__updatedAtTimestamp'
  | 'sender__updatedAtBlockNumber'
  | 'sender__isSuperApp'
  | 'receiver'
  | 'receiver__id'
  | 'receiver__createdAtTimestamp'
  | 'receiver__createdAtBlockNumber'
  | 'receiver__updatedAtTimestamp'
  | 'receiver__updatedAtBlockNumber'
  | 'receiver__isSuperApp'
  | 'userData'
  | 'flowUpdatedEvents'
  | 'streamPeriods';

export type Subscription = {
  flowUpdatedEvent?: Maybe<FlowUpdatedEvent>;
  flowUpdatedEvents: Array<FlowUpdatedEvent>;
  flowOperatorUpdatedEvent?: Maybe<FlowOperatorUpdatedEvent>;
  flowOperatorUpdatedEvents: Array<FlowOperatorUpdatedEvent>;
  indexCreatedEvent?: Maybe<IndexCreatedEvent>;
  indexCreatedEvents: Array<IndexCreatedEvent>;
  indexDistributionClaimedEvent?: Maybe<IndexDistributionClaimedEvent>;
  indexDistributionClaimedEvents: Array<IndexDistributionClaimedEvent>;
  indexUpdatedEvent?: Maybe<IndexUpdatedEvent>;
  indexUpdatedEvents: Array<IndexUpdatedEvent>;
  indexSubscribedEvent?: Maybe<IndexSubscribedEvent>;
  indexSubscribedEvents: Array<IndexSubscribedEvent>;
  indexUnitsUpdatedEvent?: Maybe<IndexUnitsUpdatedEvent>;
  indexUnitsUpdatedEvents: Array<IndexUnitsUpdatedEvent>;
  indexUnsubscribedEvent?: Maybe<IndexUnsubscribedEvent>;
  indexUnsubscribedEvents: Array<IndexUnsubscribedEvent>;
  subscriptionApprovedEvent?: Maybe<SubscriptionApprovedEvent>;
  subscriptionApprovedEvents: Array<SubscriptionApprovedEvent>;
  subscriptionDistributionClaimedEvent?: Maybe<SubscriptionDistributionClaimedEvent>;
  subscriptionDistributionClaimedEvents: Array<SubscriptionDistributionClaimedEvent>;
  subscriptionRevokedEvent?: Maybe<SubscriptionRevokedEvent>;
  subscriptionRevokedEvents: Array<SubscriptionRevokedEvent>;
  subscriptionUnitsUpdatedEvent?: Maybe<SubscriptionUnitsUpdatedEvent>;
  subscriptionUnitsUpdatedEvents: Array<SubscriptionUnitsUpdatedEvent>;
  poolCreatedEvent?: Maybe<PoolCreatedEvent>;
  poolCreatedEvents: Array<PoolCreatedEvent>;
  poolConnectionUpdatedEvent?: Maybe<PoolConnectionUpdatedEvent>;
  poolConnectionUpdatedEvents: Array<PoolConnectionUpdatedEvent>;
  bufferAdjustedEvent?: Maybe<BufferAdjustedEvent>;
  bufferAdjustedEvents: Array<BufferAdjustedEvent>;
  instantDistributionUpdatedEvent?: Maybe<InstantDistributionUpdatedEvent>;
  instantDistributionUpdatedEvents: Array<InstantDistributionUpdatedEvent>;
  flowDistributionUpdatedEvent?: Maybe<FlowDistributionUpdatedEvent>;
  flowDistributionUpdatedEvents: Array<FlowDistributionUpdatedEvent>;
  distributionClaimedEvent?: Maybe<DistributionClaimedEvent>;
  distributionClaimedEvents: Array<DistributionClaimedEvent>;
  memberUnitsUpdatedEvent?: Maybe<MemberUnitsUpdatedEvent>;
  memberUnitsUpdatedEvents: Array<MemberUnitsUpdatedEvent>;
  agreementClassRegisteredEvent?: Maybe<AgreementClassRegisteredEvent>;
  agreementClassRegisteredEvents: Array<AgreementClassRegisteredEvent>;
  agreementClassUpdatedEvent?: Maybe<AgreementClassUpdatedEvent>;
  agreementClassUpdatedEvents: Array<AgreementClassUpdatedEvent>;
  appRegisteredEvent?: Maybe<AppRegisteredEvent>;
  appRegisteredEvents: Array<AppRegisteredEvent>;
  governanceReplacedEvent?: Maybe<GovernanceReplacedEvent>;
  governanceReplacedEvents: Array<GovernanceReplacedEvent>;
  jailEvent?: Maybe<JailEvent>;
  jailEvents: Array<JailEvent>;
  superTokenFactoryUpdatedEvent?: Maybe<SuperTokenFactoryUpdatedEvent>;
  superTokenFactoryUpdatedEvents: Array<SuperTokenFactoryUpdatedEvent>;
  superTokenLogicUpdatedEvent?: Maybe<SuperTokenLogicUpdatedEvent>;
  superTokenLogicUpdatedEvents: Array<SuperTokenLogicUpdatedEvent>;
  roleAdminChangedEvent?: Maybe<RoleAdminChangedEvent>;
  roleAdminChangedEvents: Array<RoleAdminChangedEvent>;
  roleGrantedEvent?: Maybe<RoleGrantedEvent>;
  roleGrantedEvents: Array<RoleGrantedEvent>;
  roleRevokedEvent?: Maybe<RoleRevokedEvent>;
  roleRevokedEvents: Array<RoleRevokedEvent>;
  setEvent?: Maybe<SetEvent>;
  setEvents: Array<SetEvent>;
  cfav1LiquidationPeriodChangedEvent?: Maybe<CFAv1LiquidationPeriodChangedEvent>;
  cfav1LiquidationPeriodChangedEvents: Array<CFAv1LiquidationPeriodChangedEvent>;
  configChangedEvent?: Maybe<ConfigChangedEvent>;
  configChangedEvents: Array<ConfigChangedEvent>;
  rewardAddressChangedEvent?: Maybe<RewardAddressChangedEvent>;
  rewardAddressChangedEvents: Array<RewardAddressChangedEvent>;
  pppconfigurationChangedEvent?: Maybe<PPPConfigurationChangedEvent>;
  pppconfigurationChangedEvents: Array<PPPConfigurationChangedEvent>;
  superTokenMinimumDepositChangedEvent?: Maybe<SuperTokenMinimumDepositChangedEvent>;
  superTokenMinimumDepositChangedEvents: Array<SuperTokenMinimumDepositChangedEvent>;
  trustedForwarderChangedEvent?: Maybe<TrustedForwarderChangedEvent>;
  trustedForwarderChangedEvents: Array<TrustedForwarderChangedEvent>;
  agreementLiquidatedByEvent?: Maybe<AgreementLiquidatedByEvent>;
  agreementLiquidatedByEvents: Array<AgreementLiquidatedByEvent>;
  agreementLiquidatedV2Event?: Maybe<AgreementLiquidatedV2Event>;
  agreementLiquidatedV2Events: Array<AgreementLiquidatedV2Event>;
  burnedEvent?: Maybe<BurnedEvent>;
  burnedEvents: Array<BurnedEvent>;
  mintedEvent?: Maybe<MintedEvent>;
  mintedEvents: Array<MintedEvent>;
  sentEvent?: Maybe<SentEvent>;
  sentEvents: Array<SentEvent>;
  transferEvent?: Maybe<TransferEvent>;
  transferEvents: Array<TransferEvent>;
  tokenDowngradedEvent?: Maybe<TokenDowngradedEvent>;
  tokenDowngradedEvents: Array<TokenDowngradedEvent>;
  tokenUpgradedEvent?: Maybe<TokenUpgradedEvent>;
  tokenUpgradedEvents: Array<TokenUpgradedEvent>;
  approvalEvent?: Maybe<ApprovalEvent>;
  approvalEvents: Array<ApprovalEvent>;
  customSuperTokenCreatedEvent?: Maybe<CustomSuperTokenCreatedEvent>;
  customSuperTokenCreatedEvents: Array<CustomSuperTokenCreatedEvent>;
  superTokenCreatedEvent?: Maybe<SuperTokenCreatedEvent>;
  superTokenCreatedEvents: Array<SuperTokenCreatedEvent>;
  superTokenLogicCreatedEvent?: Maybe<SuperTokenLogicCreatedEvent>;
  superTokenLogicCreatedEvents: Array<SuperTokenLogicCreatedEvent>;
  newPICEvent?: Maybe<NewPICEvent>;
  newPICEvents: Array<NewPICEvent>;
  exitRateChangedEvent?: Maybe<ExitRateChangedEvent>;
  exitRateChangedEvents: Array<ExitRateChangedEvent>;
  bondIncreasedEvent?: Maybe<BondIncreasedEvent>;
  bondIncreasedEvents: Array<BondIncreasedEvent>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  poolMember?: Maybe<PoolMember>;
  poolMembers: Array<PoolMember>;
  poolDistributor?: Maybe<PoolDistributor>;
  poolDistributors: Array<PoolDistributor>;
  index?: Maybe<Index>;
  indexes: Array<Index>;
  indexSubscription?: Maybe<IndexSubscription>;
  indexSubscriptions: Array<IndexSubscription>;
  stream?: Maybe<Stream>;
  streams: Array<Stream>;
  flowOperator?: Maybe<FlowOperator>;
  flowOperators: Array<FlowOperator>;
  streamPeriod?: Maybe<StreamPeriod>;
  streamPeriods: Array<StreamPeriod>;
  tokenGovernanceConfig?: Maybe<TokenGovernanceConfig>;
  tokenGovernanceConfigs: Array<TokenGovernanceConfig>;
  streamRevision?: Maybe<StreamRevision>;
  streamRevisions: Array<StreamRevision>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  resolverEntry?: Maybe<ResolverEntry>;
  resolverEntries: Array<ResolverEntry>;
  accountTokenSnapshot?: Maybe<AccountTokenSnapshot>;
  accountTokenSnapshots: Array<AccountTokenSnapshot>;
  accountTokenSnapshotLog?: Maybe<AccountTokenSnapshotLog>;
  accountTokenSnapshotLogs: Array<AccountTokenSnapshotLog>;
  tokenStatistic?: Maybe<TokenStatistic>;
  tokenStatistics: Array<TokenStatistic>;
  tokenStatisticLog?: Maybe<TokenStatisticLog>;
  tokenStatisticLogs: Array<TokenStatisticLog>;
  sfmeta?: Maybe<SFMeta>;
  sfmetas: Array<SFMeta>;
  event?: Maybe<Event>;
  events: Array<Event>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionflowUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionflowUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionflowOperatorUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionflowOperatorUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowOperatorUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowOperatorUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionindexCreatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionindexCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexCreatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionindexDistributionClaimedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionindexDistributionClaimedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexDistributionClaimedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexDistributionClaimedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionindexUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionindexUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionindexSubscribedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionindexSubscribedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexSubscribedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexSubscribedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionindexUnitsUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionindexUnitsUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexUnitsUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexUnitsUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionindexUnsubscribedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionindexUnsubscribedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexUnsubscribedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexUnsubscribedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsubscriptionApprovedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsubscriptionApprovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionApprovedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionApprovedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsubscriptionDistributionClaimedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsubscriptionDistributionClaimedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionDistributionClaimedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionDistributionClaimedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsubscriptionRevokedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsubscriptionRevokedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionRevokedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionRevokedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsubscriptionUnitsUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsubscriptionUnitsUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionUnitsUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionUnitsUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolCreatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolCreatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolConnectionUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolConnectionUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolConnectionUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolConnectionUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbufferAdjustedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbufferAdjustedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BufferAdjustedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BufferAdjustedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninstantDistributionUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninstantDistributionUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InstantDistributionUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InstantDistributionUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionflowDistributionUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionflowDistributionUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowDistributionUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowDistributionUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondistributionClaimedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondistributionClaimedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributionClaimedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributionClaimedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmemberUnitsUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmemberUnitsUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MemberUnitsUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MemberUnitsUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionagreementClassRegisteredEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionagreementClassRegisteredEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AgreementClassRegisteredEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AgreementClassRegisteredEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionagreementClassUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionagreementClassUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AgreementClassUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AgreementClassUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionappRegisteredEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionappRegisteredEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AppRegisteredEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AppRegisteredEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongovernanceReplacedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongovernanceReplacedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GovernanceReplacedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GovernanceReplacedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionjailEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionjailEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<JailEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<JailEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsuperTokenFactoryUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsuperTokenFactoryUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenFactoryUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SuperTokenFactoryUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsuperTokenLogicUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsuperTokenLogicUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenLogicUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SuperTokenLogicUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionroleAdminChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionroleAdminChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleAdminChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoleAdminChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionroleGrantedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionroleGrantedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleGrantedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoleGrantedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionroleRevokedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionroleRevokedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleRevokedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoleRevokedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsetEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SetEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SetEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptioncfav1LiquidationPeriodChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptioncfav1LiquidationPeriodChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CFAv1LiquidationPeriodChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CFAv1LiquidationPeriodChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionconfigChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionconfigChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ConfigChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ConfigChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrewardAddressChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrewardAddressChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardAddressChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardAddressChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpppconfigurationChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpppconfigurationChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PPPConfigurationChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PPPConfigurationChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsuperTokenMinimumDepositChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsuperTokenMinimumDepositChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenMinimumDepositChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SuperTokenMinimumDepositChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontrustedForwarderChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontrustedForwarderChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TrustedForwarderChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TrustedForwarderChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionagreementLiquidatedByEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionagreementLiquidatedByEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AgreementLiquidatedByEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AgreementLiquidatedByEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionagreementLiquidatedV2EventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionagreementLiquidatedV2EventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AgreementLiquidatedV2Event_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AgreementLiquidatedV2Event_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionburnedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionburnedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BurnedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BurnedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmintedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmintedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MintedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MintedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsentEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsentEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SentEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SentEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenDowngradedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenDowngradedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDowngradedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenDowngradedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenUpgradedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenUpgradedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenUpgradedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenUpgradedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionapprovalEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionapprovalEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApprovalEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ApprovalEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncustomSuperTokenCreatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncustomSuperTokenCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CustomSuperTokenCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CustomSuperTokenCreatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsuperTokenCreatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsuperTokenCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SuperTokenCreatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsuperTokenLogicCreatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsuperTokenLogicCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenLogicCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SuperTokenLogicCreatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewPICEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewPICEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewPICEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewPICEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionexitRateChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionexitRateChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ExitRateChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExitRateChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbondIncreasedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbondIncreasedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BondIncreasedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BondIncreasedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolMemberArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolMembersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolMember_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolMember_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolDistributorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolDistributorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolDistributor_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolDistributor_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionindexArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionindexesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Index_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Index_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionindexSubscriptionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionindexSubscriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexSubscription_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexSubscription_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstreamArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstreamsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Stream_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Stream_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionflowOperatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionflowOperatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowOperator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowOperator_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstreamPeriodArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstreamPeriodsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StreamPeriod_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StreamPeriod_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenGovernanceConfigArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenGovernanceConfigsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenGovernanceConfig_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenGovernanceConfig_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstreamRevisionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstreamRevisionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StreamRevision_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StreamRevision_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionresolverEntryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionresolverEntriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ResolverEntry_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ResolverEntry_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountTokenSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountTokenSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountTokenSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountTokenSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountTokenSnapshotLogArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountTokenSnapshotLogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountTokenSnapshotLog_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountTokenSnapshotLog_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenStatisticArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenStatisticsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenStatistic_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenStatistic_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenStatisticLogArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenStatisticLogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenStatisticLog_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenStatisticLog_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsfmetaArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsfmetasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SFMeta_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SFMeta_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioneventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioneventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Event_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type SubscriptionApprovedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt'];
  userData: Scalars['Bytes'];
  subscription: IndexSubscription;
};

export type SubscriptionApprovedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber?: InputMaybe<Scalars['Bytes']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_gt?: InputMaybe<Scalars['Bytes']>;
  userData_lt?: InputMaybe<Scalars['Bytes']>;
  userData_gte?: InputMaybe<Scalars['Bytes']>;
  userData_lte?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  subscription?: InputMaybe<Scalars['String']>;
  subscription_not?: InputMaybe<Scalars['String']>;
  subscription_gt?: InputMaybe<Scalars['String']>;
  subscription_lt?: InputMaybe<Scalars['String']>;
  subscription_gte?: InputMaybe<Scalars['String']>;
  subscription_lte?: InputMaybe<Scalars['String']>;
  subscription_in?: InputMaybe<Array<Scalars['String']>>;
  subscription_not_in?: InputMaybe<Array<Scalars['String']>>;
  subscription_contains?: InputMaybe<Scalars['String']>;
  subscription_contains_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_contains?: InputMaybe<Scalars['String']>;
  subscription_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subscription_starts_with?: InputMaybe<Scalars['String']>;
  subscription_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_starts_with?: InputMaybe<Scalars['String']>;
  subscription_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_ends_with?: InputMaybe<Scalars['String']>;
  subscription_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_ends_with?: InputMaybe<Scalars['String']>;
  subscription_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_?: InputMaybe<IndexSubscription_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SubscriptionApprovedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SubscriptionApprovedEvent_filter>>>;
};

export type SubscriptionApprovedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'subscriber'
  | 'publisher'
  | 'indexId'
  | 'userData'
  | 'subscription'
  | 'subscription__id'
  | 'subscription__createdAtTimestamp'
  | 'subscription__createdAtBlockNumber'
  | 'subscription__updatedAtTimestamp'
  | 'subscription__updatedAtBlockNumber'
  | 'subscription__approved'
  | 'subscription__units'
  | 'subscription__totalAmountReceivedUntilUpdatedAt'
  | 'subscription__indexValueUntilUpdatedAt';

export type SubscriptionDistributionClaimedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt'];
  amount: Scalars['BigInt'];
  subscription: IndexSubscription;
};

export type SubscriptionDistributionClaimedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber?: InputMaybe<Scalars['Bytes']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subscription?: InputMaybe<Scalars['String']>;
  subscription_not?: InputMaybe<Scalars['String']>;
  subscription_gt?: InputMaybe<Scalars['String']>;
  subscription_lt?: InputMaybe<Scalars['String']>;
  subscription_gte?: InputMaybe<Scalars['String']>;
  subscription_lte?: InputMaybe<Scalars['String']>;
  subscription_in?: InputMaybe<Array<Scalars['String']>>;
  subscription_not_in?: InputMaybe<Array<Scalars['String']>>;
  subscription_contains?: InputMaybe<Scalars['String']>;
  subscription_contains_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_contains?: InputMaybe<Scalars['String']>;
  subscription_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subscription_starts_with?: InputMaybe<Scalars['String']>;
  subscription_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_starts_with?: InputMaybe<Scalars['String']>;
  subscription_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_ends_with?: InputMaybe<Scalars['String']>;
  subscription_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_ends_with?: InputMaybe<Scalars['String']>;
  subscription_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_?: InputMaybe<IndexSubscription_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SubscriptionDistributionClaimedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SubscriptionDistributionClaimedEvent_filter>>>;
};

export type SubscriptionDistributionClaimedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'subscriber'
  | 'publisher'
  | 'indexId'
  | 'amount'
  | 'subscription'
  | 'subscription__id'
  | 'subscription__createdAtTimestamp'
  | 'subscription__createdAtBlockNumber'
  | 'subscription__updatedAtTimestamp'
  | 'subscription__updatedAtBlockNumber'
  | 'subscription__approved'
  | 'subscription__units'
  | 'subscription__totalAmountReceivedUntilUpdatedAt'
  | 'subscription__indexValueUntilUpdatedAt';

export type SubscriptionRevokedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt'];
  userData: Scalars['Bytes'];
  subscription: IndexSubscription;
};

export type SubscriptionRevokedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber?: InputMaybe<Scalars['Bytes']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_gt?: InputMaybe<Scalars['Bytes']>;
  userData_lt?: InputMaybe<Scalars['Bytes']>;
  userData_gte?: InputMaybe<Scalars['Bytes']>;
  userData_lte?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  subscription?: InputMaybe<Scalars['String']>;
  subscription_not?: InputMaybe<Scalars['String']>;
  subscription_gt?: InputMaybe<Scalars['String']>;
  subscription_lt?: InputMaybe<Scalars['String']>;
  subscription_gte?: InputMaybe<Scalars['String']>;
  subscription_lte?: InputMaybe<Scalars['String']>;
  subscription_in?: InputMaybe<Array<Scalars['String']>>;
  subscription_not_in?: InputMaybe<Array<Scalars['String']>>;
  subscription_contains?: InputMaybe<Scalars['String']>;
  subscription_contains_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_contains?: InputMaybe<Scalars['String']>;
  subscription_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subscription_starts_with?: InputMaybe<Scalars['String']>;
  subscription_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_starts_with?: InputMaybe<Scalars['String']>;
  subscription_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_ends_with?: InputMaybe<Scalars['String']>;
  subscription_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_ends_with?: InputMaybe<Scalars['String']>;
  subscription_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_?: InputMaybe<IndexSubscription_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SubscriptionRevokedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SubscriptionRevokedEvent_filter>>>;
};

export type SubscriptionRevokedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'subscriber'
  | 'publisher'
  | 'indexId'
  | 'userData'
  | 'subscription'
  | 'subscription__id'
  | 'subscription__createdAtTimestamp'
  | 'subscription__createdAtBlockNumber'
  | 'subscription__updatedAtTimestamp'
  | 'subscription__updatedAtBlockNumber'
  | 'subscription__approved'
  | 'subscription__units'
  | 'subscription__totalAmountReceivedUntilUpdatedAt'
  | 'subscription__indexValueUntilUpdatedAt';

export type SubscriptionUnitsUpdatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt'];
  units: Scalars['BigInt'];
  userData: Scalars['Bytes'];
  oldUnits: Scalars['BigInt'];
  subscription: IndexSubscription;
};

export type SubscriptionUnitsUpdatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber?: InputMaybe<Scalars['Bytes']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  units?: InputMaybe<Scalars['BigInt']>;
  units_not?: InputMaybe<Scalars['BigInt']>;
  units_gt?: InputMaybe<Scalars['BigInt']>;
  units_lt?: InputMaybe<Scalars['BigInt']>;
  units_gte?: InputMaybe<Scalars['BigInt']>;
  units_lte?: InputMaybe<Scalars['BigInt']>;
  units_in?: InputMaybe<Array<Scalars['BigInt']>>;
  units_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_gt?: InputMaybe<Scalars['Bytes']>;
  userData_lt?: InputMaybe<Scalars['Bytes']>;
  userData_gte?: InputMaybe<Scalars['Bytes']>;
  userData_lte?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  oldUnits?: InputMaybe<Scalars['BigInt']>;
  oldUnits_not?: InputMaybe<Scalars['BigInt']>;
  oldUnits_gt?: InputMaybe<Scalars['BigInt']>;
  oldUnits_lt?: InputMaybe<Scalars['BigInt']>;
  oldUnits_gte?: InputMaybe<Scalars['BigInt']>;
  oldUnits_lte?: InputMaybe<Scalars['BigInt']>;
  oldUnits_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oldUnits_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subscription?: InputMaybe<Scalars['String']>;
  subscription_not?: InputMaybe<Scalars['String']>;
  subscription_gt?: InputMaybe<Scalars['String']>;
  subscription_lt?: InputMaybe<Scalars['String']>;
  subscription_gte?: InputMaybe<Scalars['String']>;
  subscription_lte?: InputMaybe<Scalars['String']>;
  subscription_in?: InputMaybe<Array<Scalars['String']>>;
  subscription_not_in?: InputMaybe<Array<Scalars['String']>>;
  subscription_contains?: InputMaybe<Scalars['String']>;
  subscription_contains_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_contains?: InputMaybe<Scalars['String']>;
  subscription_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subscription_starts_with?: InputMaybe<Scalars['String']>;
  subscription_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_starts_with?: InputMaybe<Scalars['String']>;
  subscription_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_ends_with?: InputMaybe<Scalars['String']>;
  subscription_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_ends_with?: InputMaybe<Scalars['String']>;
  subscription_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_?: InputMaybe<IndexSubscription_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SubscriptionUnitsUpdatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SubscriptionUnitsUpdatedEvent_filter>>>;
};

export type SubscriptionUnitsUpdatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'subscriber'
  | 'publisher'
  | 'indexId'
  | 'units'
  | 'userData'
  | 'oldUnits'
  | 'subscription'
  | 'subscription__id'
  | 'subscription__createdAtTimestamp'
  | 'subscription__createdAtBlockNumber'
  | 'subscription__updatedAtTimestamp'
  | 'subscription__updatedAtBlockNumber'
  | 'subscription__approved'
  | 'subscription__units'
  | 'subscription__totalAmountReceivedUntilUpdatedAt'
  | 'subscription__indexValueUntilUpdatedAt';

export type SuperTokenCreatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
};

export type SuperTokenCreatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SuperTokenCreatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SuperTokenCreatedEvent_filter>>>;
};

export type SuperTokenCreatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token';

export type SuperTokenFactoryUpdatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `newFactory`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  newFactory: Scalars['Bytes'];
};

export type SuperTokenFactoryUpdatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newFactory?: InputMaybe<Scalars['Bytes']>;
  newFactory_not?: InputMaybe<Scalars['Bytes']>;
  newFactory_gt?: InputMaybe<Scalars['Bytes']>;
  newFactory_lt?: InputMaybe<Scalars['Bytes']>;
  newFactory_gte?: InputMaybe<Scalars['Bytes']>;
  newFactory_lte?: InputMaybe<Scalars['Bytes']>;
  newFactory_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newFactory_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newFactory_contains?: InputMaybe<Scalars['Bytes']>;
  newFactory_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SuperTokenFactoryUpdatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SuperTokenFactoryUpdatedEvent_filter>>>;
};

export type SuperTokenFactoryUpdatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'newFactory';

export type SuperTokenLogicCreatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `tokenLogic`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  tokenLogic: Scalars['Bytes'];
};

export type SuperTokenLogicCreatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenLogic?: InputMaybe<Scalars['Bytes']>;
  tokenLogic_not?: InputMaybe<Scalars['Bytes']>;
  tokenLogic_gt?: InputMaybe<Scalars['Bytes']>;
  tokenLogic_lt?: InputMaybe<Scalars['Bytes']>;
  tokenLogic_gte?: InputMaybe<Scalars['Bytes']>;
  tokenLogic_lte?: InputMaybe<Scalars['Bytes']>;
  tokenLogic_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenLogic_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenLogic_contains?: InputMaybe<Scalars['Bytes']>;
  tokenLogic_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SuperTokenLogicCreatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SuperTokenLogicCreatedEvent_filter>>>;
};

export type SuperTokenLogicCreatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'tokenLogic';

export type SuperTokenLogicUpdatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token`
   * addresses[1] = `code`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  code: Scalars['Bytes'];
};

export type SuperTokenLogicUpdatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  code?: InputMaybe<Scalars['Bytes']>;
  code_not?: InputMaybe<Scalars['Bytes']>;
  code_gt?: InputMaybe<Scalars['Bytes']>;
  code_lt?: InputMaybe<Scalars['Bytes']>;
  code_gte?: InputMaybe<Scalars['Bytes']>;
  code_lte?: InputMaybe<Scalars['Bytes']>;
  code_in?: InputMaybe<Array<Scalars['Bytes']>>;
  code_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  code_contains?: InputMaybe<Scalars['Bytes']>;
  code_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SuperTokenLogicUpdatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SuperTokenLogicUpdatedEvent_filter>>>;
};

export type SuperTokenLogicUpdatedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'code';

export type SuperTokenMinimumDepositChangedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `governanceAddress`
   * addresses[1] = `host`
   * addresses[2] = `superToken`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  host: Scalars['Bytes'];
  superToken: Scalars['Bytes'];
  isKeySet: Scalars['Boolean'];
  minimumDeposit: Scalars['BigInt'];
};

export type SuperTokenMinimumDepositChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  governanceAddress?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_gt?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_lt?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_gte?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_lte?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  host?: InputMaybe<Scalars['Bytes']>;
  host_not?: InputMaybe<Scalars['Bytes']>;
  host_gt?: InputMaybe<Scalars['Bytes']>;
  host_lt?: InputMaybe<Scalars['Bytes']>;
  host_gte?: InputMaybe<Scalars['Bytes']>;
  host_lte?: InputMaybe<Scalars['Bytes']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_contains?: InputMaybe<Scalars['Bytes']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']>;
  superToken?: InputMaybe<Scalars['Bytes']>;
  superToken_not?: InputMaybe<Scalars['Bytes']>;
  superToken_gt?: InputMaybe<Scalars['Bytes']>;
  superToken_lt?: InputMaybe<Scalars['Bytes']>;
  superToken_gte?: InputMaybe<Scalars['Bytes']>;
  superToken_lte?: InputMaybe<Scalars['Bytes']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_contains?: InputMaybe<Scalars['Bytes']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  isKeySet?: InputMaybe<Scalars['Boolean']>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  minimumDeposit?: InputMaybe<Scalars['BigInt']>;
  minimumDeposit_not?: InputMaybe<Scalars['BigInt']>;
  minimumDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  minimumDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  minimumDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  minimumDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  minimumDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SuperTokenMinimumDepositChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SuperTokenMinimumDepositChangedEvent_filter>>>;
};

export type SuperTokenMinimumDepositChangedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'governanceAddress'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'host'
  | 'superToken'
  | 'isKeySet'
  | 'minimumDeposit';

/**
 * Token: A higher order entity created for super tokens (and underlying tokens) that are "valid" (tokens that have Superfluid's host contract address set as the host).
 *
 */
export type Token = {
  /**
   * ID: the token address
   *
   */
  id: Scalars['ID'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  decimals: Scalars['Int'];
  name: Scalars['String'];
  symbol: Scalars['String'];
  isSuperToken: Scalars['Boolean'];
  /**
   * A boolean indicating whether the token is a NativeAssetSuperToken.
   *
   */
  isNativeAssetSuperToken: Scalars['Boolean'];
  /**
   * A boolean indicating whether the token is a part of our resolver list.
   *
   */
  isListed: Scalars['Boolean'];
  /**
   * The address of the underlying ERC20 token (zero address for non-ERC20WrapperSuperToken's)
   *
   */
  underlyingAddress: Scalars['Bytes'];
  /**
   * The underlying ERC20 token for a ERC20WrapperSuperToken otherwise null.
   *
   */
  underlyingToken?: Maybe<Token>;
  /**
   * If `governanceConfig.id` is the zero address, the token uses the default governance config.
   *
   */
  governanceConfig?: Maybe<TokenGovernanceConfig>;
};

export type TokenDowngradedEvent = Event & {
  id: Scalars['ID'];
  account: Account;
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `account`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  amount: Scalars['BigInt'];
};

export type TokenDowngradedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<Account_filter>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenDowngradedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenDowngradedEvent_filter>>>;
};

export type TokenDowngradedEvent_orderBy =
  | 'id'
  | 'account'
  | 'account__id'
  | 'account__createdAtTimestamp'
  | 'account__createdAtBlockNumber'
  | 'account__updatedAtTimestamp'
  | 'account__updatedAtBlockNumber'
  | 'account__isSuperApp'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'amount';

/**
 * TokenGovernanceConfig: A higher order entity that represents the governance configs for a token.
 * If `id` is `address(0)`, it will be used as the default config.
 *
 */
export type TokenGovernanceConfig = {
  /**
   * id is the address of the SuperToken
   * NOTE: the zero address is reserved for the default config for all tokens with unset configs.
   *
   */
  id: Scalars['ID'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  updatedAtTimestamp: Scalars['BigInt'];
  updatedAtBlockNumber: Scalars['BigInt'];
  /**
   * If true, `id` is `address(0)` and this is the default config for all tokens with unset configs.
   *
   */
  isDefault: Scalars['Boolean'];
  /**
   * The (default or token-specific) address that receives liquidation rewards for a token prior to 3Ps and the TOGA address after 3Ps.
   *
   */
  rewardAddress?: Maybe<Scalars['Bytes']>;
  /**
   * The (default or token-specific) liquidation period (buffer amount required for a token).
   * This field can be used to calculate the liquidation buffer (or deposit) amount for a token: `liquidationBufferAmount = liquidationPeriod * flowRate`.
   * Note that if `minimumDeposit` is set, the liquidation buffer amount will be the greater of the two values.
   *
   */
  liquidationPeriod?: Maybe<Scalars['BigInt']>;
  /**
   * The (default or token-specific) patrician period, the patrician period is the window in which a patrician receives all rewards for a liquidation, no matter the liquidating account.
   *
   */
  patricianPeriod?: Maybe<Scalars['BigInt']>;
  /**
   * The (default or token-specific) minimum deposit amount.
   *
   */
  minimumDeposit?: Maybe<Scalars['BigInt']>;
  /**
   * A reverse lookup to the token it is associated with and null if it is the default config.
   *
   */
  token?: Maybe<Token>;
};

export type TokenGovernanceConfig_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  isDefault_not?: InputMaybe<Scalars['Boolean']>;
  isDefault_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isDefault_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  rewardAddress?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_not?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_gt?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_lt?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_gte?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_lte?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardAddress_contains?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  liquidationPeriod?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_not?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_gt?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_lt?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_gte?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_lte?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidationPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  patricianPeriod?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_not?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_gt?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_lt?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_gte?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_lte?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_in?: InputMaybe<Array<Scalars['BigInt']>>;
  patricianPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumDeposit?: InputMaybe<Scalars['BigInt']>;
  minimumDeposit_not?: InputMaybe<Scalars['BigInt']>;
  minimumDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  minimumDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  minimumDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  minimumDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  minimumDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenGovernanceConfig_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenGovernanceConfig_filter>>>;
};

export type TokenGovernanceConfig_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'isDefault'
  | 'rewardAddress'
  | 'liquidationPeriod'
  | 'patricianPeriod'
  | 'minimumDeposit'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress';

/**
 * TokenStatistic: An aggregate entity which contains aggregate data for `token`.
 *
 */
export type TokenStatistic = {
  /**
   * id: `token` (superToken) address
   *
   */
  id: Scalars['ID'];
  updatedAtTimestamp: Scalars['BigInt'];
  updatedAtBlockNumber: Scalars['BigInt'];
  /**
   * The total number of currently active `token` streams.
   *
   */
  totalNumberOfActiveStreams: Scalars['Int'];
  /**
   * The total number of currently active `token` streams for the CFA.
   *
   */
  totalCFANumberOfActiveStreams: Scalars['Int'];
  /**
   * The total number of currently active `token` streams for the GDA.
   *
   */
  totalGDANumberOfActiveStreams: Scalars['Int'];
  /**
   * The count of closed streams for `token`.
   *
   */
  totalNumberOfClosedStreams: Scalars['Int'];
  /**
   * The count of closed streams for `token` for the CFA.
   *
   */
  totalCFANumberOfClosedStreams: Scalars['Int'];
  /**
   * The count of closed streams for `token` for the GDA.
   *
   */
  totalGDANumberOfClosedStreams: Scalars['Int'];
  /**
   * The total number of Indexes created with `token`.
   *
   */
  totalNumberOfIndexes: Scalars['Int'];
  /**
   * The total number of "active" (has greater than 0 units and has distributed it at least once) Indexes created with `token`.
   *
   */
  totalNumberOfActiveIndexes: Scalars['Int'];
  /**
   * The number of subscriptions which have units allocated to them created with Indexes that distribute `token`.
   *
   */
  totalSubscriptionsWithUnits: Scalars['Int'];
  /**
   * Counts all approved subscriptions whether or not they have units.
   *
   */
  totalApprovedSubscriptions: Scalars['Int'];
  /**
   * The total number of Pools created with `token`.
   *
   */
  totalNumberOfPools: Scalars['Int'];
  /**
   * The total number of "active" (has greater than 0 units and has distributed it at least once) Pools created with `token`.
   *
   */
  totalNumberOfActivePools: Scalars['Int'];
  /**
   * The number of memberships which have units allocated to them created with Pools that distribute `token`.
   *
   */
  totalMembershipsWithUnits: Scalars['Int'];
  /**
   * Counts all approved memberships whether or not they have units.
   *
   */
  totalConnectedMemberships: Scalars['Int'];
  /**
   * The total deposit held by all flow agreements for this particular `token`.
   *
   */
  totalDeposit: Scalars['BigInt'];
  /**
   * The total deposit held by the CFA for this particular `token`.
   *
   */
  totalCFADeposit: Scalars['BigInt'];
  /**
   * The total deposit held by the GDA agreement for this particular `token`.
   *
   */
  totalGDADeposit: Scalars['BigInt'];
  /**
   * The total outflow rate of the `token` (how much value is being moved) for all flow agreements.
   *
   */
  totalOutflowRate: Scalars['BigInt'];
  /**
   * The total outflow rate of the `token` (how much value is being moved) for the CFA.
   *
   */
  totalCFAOutflowRate: Scalars['BigInt'];
  /**
   * The total outflow rate of the `token` (how much value is being moved) for the GDA.
   *
   */
  totalGDAOutflowRate: Scalars['BigInt'];
  /**
   * The all-time total amount streamed (outflows) until the `updatedAtTimestamp`/`updatedAtBlock` for all flow agreements.
   *
   */
  totalAmountStreamedUntilUpdatedAt: Scalars['BigInt'];
  /**
   * The all-time total amount streamed (outflows) until the `updatedAtTimestamp`/`updatedAtBlock` for the CFA.
   *
   */
  totalCFAAmountStreamedUntilUpdatedAt: Scalars['BigInt'];
  /**
   * The all-time total amount transferred until the `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalAmountTransferredUntilUpdatedAt: Scalars['BigInt'];
  /**
   * The all-time total amount distributed until the `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalAmountDistributedUntilUpdatedAt: Scalars['BigInt'];
  /**
   * The total supply of the token - this is impacted by users upgrading/downgrading their tokens.
   *
   */
  totalSupply: Scalars['BigInt'];
  /**
   * The total number of accounts that have interacted with the token (but might not hold a balance anymore).
   *
   */
  totalNumberOfAccounts: Scalars['Int'];
  /**
   * The total number of accounts holding a non-zero balance of the token.
   *
   */
  totalNumberOfHolders: Scalars['Int'];
  token: Token;
  tokenStatisticLogs: Array<TokenStatisticLog>;
};


/**
 * TokenStatistic: An aggregate entity which contains aggregate data for `token`.
 *
 */
export type TokenStatistictokenStatisticLogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenStatisticLog_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenStatisticLog_filter>;
};

/**
 * TokenStatisticLog: Historical entries of `TokenStatistic` updates.
 *
 */
export type TokenStatisticLog = {
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  triggeredByEventName: Scalars['String'];
  /**
   * The total number of currently active `token` streams for all flow agreements.
   *
   */
  totalNumberOfActiveStreams: Scalars['Int'];
  /**
   * The total number of currently active `token` streams for the CFA.
   *
   */
  totalCFANumberOfActiveStreams: Scalars['Int'];
  /**
   * The total number of currently active `token` streams for the GDA.
   *
   */
  totalGDANumberOfActiveStreams: Scalars['Int'];
  /**
   * The count of closed streams for `token` for all flow agreements.
   *
   */
  totalNumberOfClosedStreams: Scalars['Int'];
  /**
   * The count of closed streams for `token` for the CFA.
   *
   */
  totalCFANumberOfClosedStreams: Scalars['Int'];
  /**
   * The count of closed streams for `token` for the GDA.
   *
   */
  totalGDANumberOfClosedStreams: Scalars['Int'];
  /**
   * The total number of Indexes created with `token`.
   *
   */
  totalNumberOfIndexes: Scalars['Int'];
  /**
   * The total number of "active" (has greater than 0 units and has distributed it at least once) Indexes created with `token`.
   *
   */
  totalNumberOfActiveIndexes: Scalars['Int'];
  /**
   * The number of subscriptions which have units allocated to them created with Indexes that distribute `token`.
   *
   */
  totalSubscriptionsWithUnits: Scalars['Int'];
  /**
   * Counts all approved subscriptions whether or not they have units.
   *
   */
  totalApprovedSubscriptions: Scalars['Int'];
  /**
   * The total number of Pools created with `token`.
   *
   */
  totalNumberOfPools: Scalars['Int'];
  /**
   * The total number of "active" (has greater than 0 units and has distributed it at least once) Pools created with `token`.
   *
   */
  totalNumberOfActivePools: Scalars['Int'];
  /**
   * The number of memberships which have units allocated to them created with Pools that distribute `token`.
   *
   */
  totalMembershipsWithUnits: Scalars['Int'];
  /**
   * Counts all connected memberships whether or not they have units.
   *
   */
  totalConnectedMemberships: Scalars['Int'];
  /**
   * The total deposit held by the CFA agreement for this particular `token` for all flow agreements.
   *
   */
  totalDeposit: Scalars['BigInt'];
  /**
   * The total deposit held by the CFA agreement for this particular `token` for the CFA.
   *
   */
  totalCFADeposit: Scalars['BigInt'];
  /**
   * The total deposit held by the CFA agreement for this particular `token` for the GDA.
   *
   */
  totalGDADeposit: Scalars['BigInt'];
  /**
   * The total outflow rate of the `token` (how much value is being moved) for all flow agreements.
   *
   */
  totalOutflowRate: Scalars['BigInt'];
  /**
   * The total outflow rate of the `token` (how much value is being moved) for the CFA.
   *
   */
  totalCFAOutflowRate: Scalars['BigInt'];
  /**
   * The total outflow rate of the `token` (how much value is being moved) for the GDA.
   *
   */
  totalGDAOutflowRate: Scalars['BigInt'];
  /**
   * The all-time total amount of `token` streamed (outflows) until the `timestamp`/`block` for all flow agreements.
   *
   */
  totalAmountStreamed: Scalars['BigInt'];
  /**
   * The all-time total amount of `token` streamed (outflows) until the `timestamp`/`block` for the CFA.
   *
   */
  totalCFAAmountStreamed: Scalars['BigInt'];
  /**
   * The all-time total amount of `token` transferred until the `timestamp`/`block`.
   *
   */
  totalAmountTransferred: Scalars['BigInt'];
  /**
   * The all-time total amount of `token` distributed until the `timestamp`/`block`.
   *
   */
  totalAmountDistributed: Scalars['BigInt'];
  /**
   * The total supply of the token - this is impacted by users upgrading/downgrading their tokens.
   *
   */
  totalSupply: Scalars['BigInt'];
  /**
   * The total number of accounts that have interacted with the token (but might not hold a balance anymore).
   *
   */
  totalNumberOfAccounts: Scalars['Int'];
  /**
   * The total number of accounts holding a non-zero balance of the token.
   *
   */
  totalNumberOfHolders: Scalars['Int'];
  token: Token;
  tokenStatistic: TokenStatistic;
};

export type TokenStatisticLog_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  triggeredByEventName?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not?: InputMaybe<Scalars['String']>;
  triggeredByEventName_gt?: InputMaybe<Scalars['String']>;
  triggeredByEventName_lt?: InputMaybe<Scalars['String']>;
  triggeredByEventName_gte?: InputMaybe<Scalars['String']>;
  triggeredByEventName_lte?: InputMaybe<Scalars['String']>;
  triggeredByEventName_in?: InputMaybe<Array<Scalars['String']>>;
  triggeredByEventName_not_in?: InputMaybe<Array<Scalars['String']>>;
  triggeredByEventName_contains?: InputMaybe<Scalars['String']>;
  triggeredByEventName_contains_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_contains?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_starts_with?: InputMaybe<Scalars['String']>;
  triggeredByEventName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_starts_with?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_ends_with?: InputMaybe<Scalars['String']>;
  triggeredByEventName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_ends_with?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  totalNumberOfActiveStreams?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCFANumberOfActiveStreams?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfActiveStreams_not?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCFANumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalGDANumberOfActiveStreams?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfActiveStreams_not?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalGDANumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfClosedStreams?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCFANumberOfClosedStreams?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfClosedStreams_not?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCFANumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalGDANumberOfClosedStreams?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfClosedStreams_not?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalGDANumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfIndexes?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfIndexes_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActiveIndexes?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActiveIndexes_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSubscriptionsWithUnits?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_not?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_lt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_lte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSubscriptionsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalApprovedSubscriptions?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_not?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_gt?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_lt?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_gte?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_lte?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_in?: InputMaybe<Array<Scalars['Int']>>;
  totalApprovedSubscriptions_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfPools?: InputMaybe<Scalars['Int']>;
  totalNumberOfPools_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfPools_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfPools_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfPools_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfPools_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfPools_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfPools_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActivePools?: InputMaybe<Scalars['Int']>;
  totalNumberOfActivePools_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfActivePools_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActivePools_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActivePools_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActivePools_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActivePools_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActivePools_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalMembershipsWithUnits?: InputMaybe<Scalars['Int']>;
  totalMembershipsWithUnits_not?: InputMaybe<Scalars['Int']>;
  totalMembershipsWithUnits_gt?: InputMaybe<Scalars['Int']>;
  totalMembershipsWithUnits_lt?: InputMaybe<Scalars['Int']>;
  totalMembershipsWithUnits_gte?: InputMaybe<Scalars['Int']>;
  totalMembershipsWithUnits_lte?: InputMaybe<Scalars['Int']>;
  totalMembershipsWithUnits_in?: InputMaybe<Array<Scalars['Int']>>;
  totalMembershipsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalConnectedMemberships?: InputMaybe<Scalars['Int']>;
  totalConnectedMemberships_not?: InputMaybe<Scalars['Int']>;
  totalConnectedMemberships_gt?: InputMaybe<Scalars['Int']>;
  totalConnectedMemberships_lt?: InputMaybe<Scalars['Int']>;
  totalConnectedMemberships_gte?: InputMaybe<Scalars['Int']>;
  totalConnectedMemberships_lte?: InputMaybe<Scalars['Int']>;
  totalConnectedMemberships_in?: InputMaybe<Array<Scalars['Int']>>;
  totalConnectedMemberships_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalDeposit?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_not?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFADeposit?: InputMaybe<Scalars['BigInt']>;
  totalCFADeposit_not?: InputMaybe<Scalars['BigInt']>;
  totalCFADeposit_gt?: InputMaybe<Scalars['BigInt']>;
  totalCFADeposit_lt?: InputMaybe<Scalars['BigInt']>;
  totalCFADeposit_gte?: InputMaybe<Scalars['BigInt']>;
  totalCFADeposit_lte?: InputMaybe<Scalars['BigInt']>;
  totalCFADeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFADeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGDADeposit?: InputMaybe<Scalars['BigInt']>;
  totalGDADeposit_not?: InputMaybe<Scalars['BigInt']>;
  totalGDADeposit_gt?: InputMaybe<Scalars['BigInt']>;
  totalGDADeposit_lt?: InputMaybe<Scalars['BigInt']>;
  totalGDADeposit_gte?: InputMaybe<Scalars['BigInt']>;
  totalGDADeposit_lte?: InputMaybe<Scalars['BigInt']>;
  totalGDADeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGDADeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalOutflowRate?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFAOutflowRate?: InputMaybe<Scalars['BigInt']>;
  totalCFAOutflowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalCFAOutflowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalCFAOutflowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalCFAOutflowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalCFAOutflowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalCFAOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFAOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGDAOutflowRate?: InputMaybe<Scalars['BigInt']>;
  totalGDAOutflowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalGDAOutflowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalGDAOutflowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalGDAOutflowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalGDAOutflowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalGDAOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGDAOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamed?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFAAmountStreamed?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamed_not?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamed_gt?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamed_lt?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamed_gte?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamed_lte?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFAAmountStreamed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountTransferred?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountTransferred_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountDistributed?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributed_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributed_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributed_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributed_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributed_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountDistributed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNumberOfAccounts?: InputMaybe<Scalars['Int']>;
  totalNumberOfAccounts_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfAccounts_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfAccounts_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfAccounts_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfAccounts_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfAccounts_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfAccounts_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfHolders?: InputMaybe<Scalars['Int']>;
  totalNumberOfHolders_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfHolders_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfHolders_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfHolders_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfHolders_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfHolders_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfHolders_not_in?: InputMaybe<Array<Scalars['Int']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  tokenStatistic?: InputMaybe<Scalars['String']>;
  tokenStatistic_not?: InputMaybe<Scalars['String']>;
  tokenStatistic_gt?: InputMaybe<Scalars['String']>;
  tokenStatistic_lt?: InputMaybe<Scalars['String']>;
  tokenStatistic_gte?: InputMaybe<Scalars['String']>;
  tokenStatistic_lte?: InputMaybe<Scalars['String']>;
  tokenStatistic_in?: InputMaybe<Array<Scalars['String']>>;
  tokenStatistic_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenStatistic_contains?: InputMaybe<Scalars['String']>;
  tokenStatistic_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenStatistic_not_contains?: InputMaybe<Scalars['String']>;
  tokenStatistic_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenStatistic_starts_with?: InputMaybe<Scalars['String']>;
  tokenStatistic_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenStatistic_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenStatistic_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenStatistic_ends_with?: InputMaybe<Scalars['String']>;
  tokenStatistic_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenStatistic_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenStatistic_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenStatistic_?: InputMaybe<TokenStatistic_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenStatisticLog_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenStatisticLog_filter>>>;
};

export type TokenStatisticLog_orderBy =
  | 'id'
  | 'timestamp'
  | 'blockNumber'
  | 'transactionHash'
  | 'logIndex'
  | 'order'
  | 'triggeredByEventName'
  | 'totalNumberOfActiveStreams'
  | 'totalCFANumberOfActiveStreams'
  | 'totalGDANumberOfActiveStreams'
  | 'totalNumberOfClosedStreams'
  | 'totalCFANumberOfClosedStreams'
  | 'totalGDANumberOfClosedStreams'
  | 'totalNumberOfIndexes'
  | 'totalNumberOfActiveIndexes'
  | 'totalSubscriptionsWithUnits'
  | 'totalApprovedSubscriptions'
  | 'totalNumberOfPools'
  | 'totalNumberOfActivePools'
  | 'totalMembershipsWithUnits'
  | 'totalConnectedMemberships'
  | 'totalDeposit'
  | 'totalCFADeposit'
  | 'totalGDADeposit'
  | 'totalOutflowRate'
  | 'totalCFAOutflowRate'
  | 'totalGDAOutflowRate'
  | 'totalAmountStreamed'
  | 'totalCFAAmountStreamed'
  | 'totalAmountTransferred'
  | 'totalAmountDistributed'
  | 'totalSupply'
  | 'totalNumberOfAccounts'
  | 'totalNumberOfHolders'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress'
  | 'tokenStatistic'
  | 'tokenStatistic__id'
  | 'tokenStatistic__updatedAtTimestamp'
  | 'tokenStatistic__updatedAtBlockNumber'
  | 'tokenStatistic__totalNumberOfActiveStreams'
  | 'tokenStatistic__totalCFANumberOfActiveStreams'
  | 'tokenStatistic__totalGDANumberOfActiveStreams'
  | 'tokenStatistic__totalNumberOfClosedStreams'
  | 'tokenStatistic__totalCFANumberOfClosedStreams'
  | 'tokenStatistic__totalGDANumberOfClosedStreams'
  | 'tokenStatistic__totalNumberOfIndexes'
  | 'tokenStatistic__totalNumberOfActiveIndexes'
  | 'tokenStatistic__totalSubscriptionsWithUnits'
  | 'tokenStatistic__totalApprovedSubscriptions'
  | 'tokenStatistic__totalNumberOfPools'
  | 'tokenStatistic__totalNumberOfActivePools'
  | 'tokenStatistic__totalMembershipsWithUnits'
  | 'tokenStatistic__totalConnectedMemberships'
  | 'tokenStatistic__totalDeposit'
  | 'tokenStatistic__totalCFADeposit'
  | 'tokenStatistic__totalGDADeposit'
  | 'tokenStatistic__totalOutflowRate'
  | 'tokenStatistic__totalCFAOutflowRate'
  | 'tokenStatistic__totalGDAOutflowRate'
  | 'tokenStatistic__totalAmountStreamedUntilUpdatedAt'
  | 'tokenStatistic__totalCFAAmountStreamedUntilUpdatedAt'
  | 'tokenStatistic__totalAmountTransferredUntilUpdatedAt'
  | 'tokenStatistic__totalAmountDistributedUntilUpdatedAt'
  | 'tokenStatistic__totalSupply'
  | 'tokenStatistic__totalNumberOfAccounts'
  | 'tokenStatistic__totalNumberOfHolders';

export type TokenStatistic_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNumberOfActiveStreams?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCFANumberOfActiveStreams?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfActiveStreams_not?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCFANumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalGDANumberOfActiveStreams?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfActiveStreams_not?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalGDANumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfClosedStreams?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCFANumberOfClosedStreams?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfClosedStreams_not?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']>;
  totalCFANumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCFANumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalGDANumberOfClosedStreams?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfClosedStreams_not?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']>;
  totalGDANumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalGDANumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfIndexes?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfIndexes_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActiveIndexes?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActiveIndexes_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSubscriptionsWithUnits?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_not?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_lt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_lte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSubscriptionsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalApprovedSubscriptions?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_not?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_gt?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_lt?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_gte?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_lte?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_in?: InputMaybe<Array<Scalars['Int']>>;
  totalApprovedSubscriptions_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfPools?: InputMaybe<Scalars['Int']>;
  totalNumberOfPools_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfPools_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfPools_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfPools_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfPools_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfPools_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfPools_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActivePools?: InputMaybe<Scalars['Int']>;
  totalNumberOfActivePools_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfActivePools_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActivePools_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActivePools_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActivePools_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActivePools_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActivePools_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalMembershipsWithUnits?: InputMaybe<Scalars['Int']>;
  totalMembershipsWithUnits_not?: InputMaybe<Scalars['Int']>;
  totalMembershipsWithUnits_gt?: InputMaybe<Scalars['Int']>;
  totalMembershipsWithUnits_lt?: InputMaybe<Scalars['Int']>;
  totalMembershipsWithUnits_gte?: InputMaybe<Scalars['Int']>;
  totalMembershipsWithUnits_lte?: InputMaybe<Scalars['Int']>;
  totalMembershipsWithUnits_in?: InputMaybe<Array<Scalars['Int']>>;
  totalMembershipsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalConnectedMemberships?: InputMaybe<Scalars['Int']>;
  totalConnectedMemberships_not?: InputMaybe<Scalars['Int']>;
  totalConnectedMemberships_gt?: InputMaybe<Scalars['Int']>;
  totalConnectedMemberships_lt?: InputMaybe<Scalars['Int']>;
  totalConnectedMemberships_gte?: InputMaybe<Scalars['Int']>;
  totalConnectedMemberships_lte?: InputMaybe<Scalars['Int']>;
  totalConnectedMemberships_in?: InputMaybe<Array<Scalars['Int']>>;
  totalConnectedMemberships_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalDeposit?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_not?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFADeposit?: InputMaybe<Scalars['BigInt']>;
  totalCFADeposit_not?: InputMaybe<Scalars['BigInt']>;
  totalCFADeposit_gt?: InputMaybe<Scalars['BigInt']>;
  totalCFADeposit_lt?: InputMaybe<Scalars['BigInt']>;
  totalCFADeposit_gte?: InputMaybe<Scalars['BigInt']>;
  totalCFADeposit_lte?: InputMaybe<Scalars['BigInt']>;
  totalCFADeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFADeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGDADeposit?: InputMaybe<Scalars['BigInt']>;
  totalGDADeposit_not?: InputMaybe<Scalars['BigInt']>;
  totalGDADeposit_gt?: InputMaybe<Scalars['BigInt']>;
  totalGDADeposit_lt?: InputMaybe<Scalars['BigInt']>;
  totalGDADeposit_gte?: InputMaybe<Scalars['BigInt']>;
  totalGDADeposit_lte?: InputMaybe<Scalars['BigInt']>;
  totalGDADeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGDADeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalOutflowRate?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFAOutflowRate?: InputMaybe<Scalars['BigInt']>;
  totalCFAOutflowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalCFAOutflowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalCFAOutflowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalCFAOutflowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalCFAOutflowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalCFAOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFAOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGDAOutflowRate?: InputMaybe<Scalars['BigInt']>;
  totalGDAOutflowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalGDAOutflowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalGDAOutflowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalGDAOutflowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalGDAOutflowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalGDAOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGDAOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFAAmountStreamedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalCFAAmountStreamedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCFAAmountStreamedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountTransferredUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountTransferredUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountDistributedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountDistributedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNumberOfAccounts?: InputMaybe<Scalars['Int']>;
  totalNumberOfAccounts_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfAccounts_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfAccounts_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfAccounts_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfAccounts_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfAccounts_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfAccounts_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfHolders?: InputMaybe<Scalars['Int']>;
  totalNumberOfHolders_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfHolders_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfHolders_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfHolders_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfHolders_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfHolders_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfHolders_not_in?: InputMaybe<Array<Scalars['Int']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  tokenStatisticLogs_?: InputMaybe<TokenStatisticLog_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenStatistic_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenStatistic_filter>>>;
};

export type TokenStatistic_orderBy =
  | 'id'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'totalNumberOfActiveStreams'
  | 'totalCFANumberOfActiveStreams'
  | 'totalGDANumberOfActiveStreams'
  | 'totalNumberOfClosedStreams'
  | 'totalCFANumberOfClosedStreams'
  | 'totalGDANumberOfClosedStreams'
  | 'totalNumberOfIndexes'
  | 'totalNumberOfActiveIndexes'
  | 'totalSubscriptionsWithUnits'
  | 'totalApprovedSubscriptions'
  | 'totalNumberOfPools'
  | 'totalNumberOfActivePools'
  | 'totalMembershipsWithUnits'
  | 'totalConnectedMemberships'
  | 'totalDeposit'
  | 'totalCFADeposit'
  | 'totalGDADeposit'
  | 'totalOutflowRate'
  | 'totalCFAOutflowRate'
  | 'totalGDAOutflowRate'
  | 'totalAmountStreamedUntilUpdatedAt'
  | 'totalCFAAmountStreamedUntilUpdatedAt'
  | 'totalAmountTransferredUntilUpdatedAt'
  | 'totalAmountDistributedUntilUpdatedAt'
  | 'totalSupply'
  | 'totalNumberOfAccounts'
  | 'totalNumberOfHolders'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress'
  | 'tokenStatisticLogs';

export type TokenUpgradedEvent = Event & {
  id: Scalars['ID'];
  account: Account;
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `account`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  amount: Scalars['BigInt'];
};

export type TokenUpgradedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<Account_filter>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenUpgradedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenUpgradedEvent_filter>>>;
};

export type TokenUpgradedEvent_orderBy =
  | 'id'
  | 'account'
  | 'account__id'
  | 'account__createdAtTimestamp'
  | 'account__createdAtBlockNumber'
  | 'account__updatedAtTimestamp'
  | 'account__updatedAtBlockNumber'
  | 'account__isSuperApp'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'amount';

export type Token_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals?: InputMaybe<Scalars['Int']>;
  decimals_not?: InputMaybe<Scalars['Int']>;
  decimals_gt?: InputMaybe<Scalars['Int']>;
  decimals_lt?: InputMaybe<Scalars['Int']>;
  decimals_gte?: InputMaybe<Scalars['Int']>;
  decimals_lte?: InputMaybe<Scalars['Int']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  isSuperToken?: InputMaybe<Scalars['Boolean']>;
  isSuperToken_not?: InputMaybe<Scalars['Boolean']>;
  isSuperToken_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isSuperToken_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isNativeAssetSuperToken?: InputMaybe<Scalars['Boolean']>;
  isNativeAssetSuperToken_not?: InputMaybe<Scalars['Boolean']>;
  isNativeAssetSuperToken_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isNativeAssetSuperToken_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isListed?: InputMaybe<Scalars['Boolean']>;
  isListed_not?: InputMaybe<Scalars['Boolean']>;
  isListed_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isListed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  underlyingAddress?: InputMaybe<Scalars['Bytes']>;
  underlyingAddress_not?: InputMaybe<Scalars['Bytes']>;
  underlyingAddress_gt?: InputMaybe<Scalars['Bytes']>;
  underlyingAddress_lt?: InputMaybe<Scalars['Bytes']>;
  underlyingAddress_gte?: InputMaybe<Scalars['Bytes']>;
  underlyingAddress_lte?: InputMaybe<Scalars['Bytes']>;
  underlyingAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  underlyingAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  underlyingAddress_contains?: InputMaybe<Scalars['Bytes']>;
  underlyingAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  underlyingToken?: InputMaybe<Scalars['String']>;
  underlyingToken_not?: InputMaybe<Scalars['String']>;
  underlyingToken_gt?: InputMaybe<Scalars['String']>;
  underlyingToken_lt?: InputMaybe<Scalars['String']>;
  underlyingToken_gte?: InputMaybe<Scalars['String']>;
  underlyingToken_lte?: InputMaybe<Scalars['String']>;
  underlyingToken_in?: InputMaybe<Array<Scalars['String']>>;
  underlyingToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  underlyingToken_contains?: InputMaybe<Scalars['String']>;
  underlyingToken_contains_nocase?: InputMaybe<Scalars['String']>;
  underlyingToken_not_contains?: InputMaybe<Scalars['String']>;
  underlyingToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  underlyingToken_starts_with?: InputMaybe<Scalars['String']>;
  underlyingToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  underlyingToken_not_starts_with?: InputMaybe<Scalars['String']>;
  underlyingToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  underlyingToken_ends_with?: InputMaybe<Scalars['String']>;
  underlyingToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  underlyingToken_not_ends_with?: InputMaybe<Scalars['String']>;
  underlyingToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  underlyingToken_?: InputMaybe<Token_filter>;
  governanceConfig?: InputMaybe<Scalars['String']>;
  governanceConfig_not?: InputMaybe<Scalars['String']>;
  governanceConfig_gt?: InputMaybe<Scalars['String']>;
  governanceConfig_lt?: InputMaybe<Scalars['String']>;
  governanceConfig_gte?: InputMaybe<Scalars['String']>;
  governanceConfig_lte?: InputMaybe<Scalars['String']>;
  governanceConfig_in?: InputMaybe<Array<Scalars['String']>>;
  governanceConfig_not_in?: InputMaybe<Array<Scalars['String']>>;
  governanceConfig_contains?: InputMaybe<Scalars['String']>;
  governanceConfig_contains_nocase?: InputMaybe<Scalars['String']>;
  governanceConfig_not_contains?: InputMaybe<Scalars['String']>;
  governanceConfig_not_contains_nocase?: InputMaybe<Scalars['String']>;
  governanceConfig_starts_with?: InputMaybe<Scalars['String']>;
  governanceConfig_starts_with_nocase?: InputMaybe<Scalars['String']>;
  governanceConfig_not_starts_with?: InputMaybe<Scalars['String']>;
  governanceConfig_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  governanceConfig_ends_with?: InputMaybe<Scalars['String']>;
  governanceConfig_ends_with_nocase?: InputMaybe<Scalars['String']>;
  governanceConfig_not_ends_with?: InputMaybe<Scalars['String']>;
  governanceConfig_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  governanceConfig_?: InputMaybe<TokenGovernanceConfig_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Token_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Token_filter>>>;
};

export type Token_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'decimals'
  | 'name'
  | 'symbol'
  | 'isSuperToken'
  | 'isNativeAssetSuperToken'
  | 'isListed'
  | 'underlyingAddress'
  | 'underlyingToken'
  | 'underlyingToken__id'
  | 'underlyingToken__createdAtTimestamp'
  | 'underlyingToken__createdAtBlockNumber'
  | 'underlyingToken__decimals'
  | 'underlyingToken__name'
  | 'underlyingToken__symbol'
  | 'underlyingToken__isSuperToken'
  | 'underlyingToken__isNativeAssetSuperToken'
  | 'underlyingToken__isListed'
  | 'underlyingToken__underlyingAddress'
  | 'governanceConfig'
  | 'governanceConfig__id'
  | 'governanceConfig__createdAtTimestamp'
  | 'governanceConfig__createdAtBlockNumber'
  | 'governanceConfig__updatedAtTimestamp'
  | 'governanceConfig__updatedAtBlockNumber'
  | 'governanceConfig__isDefault'
  | 'governanceConfig__rewardAddress'
  | 'governanceConfig__liquidationPeriod'
  | 'governanceConfig__patricianPeriod'
  | 'governanceConfig__minimumDeposit';

export type TransferEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token`
   * addresses[1] = `from`
   * addresses[2] = `to`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  from: Account;
  to: Account;
  value: Scalars['BigInt'];
  token: Scalars['Bytes'];
};

export type TransferEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_?: InputMaybe<Account_filter>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_?: InputMaybe<Account_filter>;
  value?: InputMaybe<Scalars['BigInt']>;
  value_not?: InputMaybe<Scalars['BigInt']>;
  value_gt?: InputMaybe<Scalars['BigInt']>;
  value_lt?: InputMaybe<Scalars['BigInt']>;
  value_gte?: InputMaybe<Scalars['BigInt']>;
  value_lte?: InputMaybe<Scalars['BigInt']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TransferEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TransferEvent_filter>>>;
};

export type TransferEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'from'
  | 'from__id'
  | 'from__createdAtTimestamp'
  | 'from__createdAtBlockNumber'
  | 'from__updatedAtTimestamp'
  | 'from__updatedAtBlockNumber'
  | 'from__isSuperApp'
  | 'to'
  | 'to__id'
  | 'to__createdAtTimestamp'
  | 'to__createdAtBlockNumber'
  | 'to__updatedAtTimestamp'
  | 'to__updatedAtBlockNumber'
  | 'to__isSuperApp'
  | 'value'
  | 'token';

export type TrustedForwarderChangedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `governanceAddress`
   * addresses[1] = `host`
   * addresses[2] = `superToken`
   * addresses[3] = `forwarder`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  host: Scalars['Bytes'];
  superToken: Scalars['Bytes'];
  isKeySet: Scalars['Boolean'];
  forwarder: Scalars['Bytes'];
  enabled: Scalars['Boolean'];
};

export type TrustedForwarderChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  governanceAddress?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_gt?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_lt?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_gte?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_lte?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  host?: InputMaybe<Scalars['Bytes']>;
  host_not?: InputMaybe<Scalars['Bytes']>;
  host_gt?: InputMaybe<Scalars['Bytes']>;
  host_lt?: InputMaybe<Scalars['Bytes']>;
  host_gte?: InputMaybe<Scalars['Bytes']>;
  host_lte?: InputMaybe<Scalars['Bytes']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_contains?: InputMaybe<Scalars['Bytes']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']>;
  superToken?: InputMaybe<Scalars['Bytes']>;
  superToken_not?: InputMaybe<Scalars['Bytes']>;
  superToken_gt?: InputMaybe<Scalars['Bytes']>;
  superToken_lt?: InputMaybe<Scalars['Bytes']>;
  superToken_gte?: InputMaybe<Scalars['Bytes']>;
  superToken_lte?: InputMaybe<Scalars['Bytes']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_contains?: InputMaybe<Scalars['Bytes']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  isKeySet?: InputMaybe<Scalars['Boolean']>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forwarder?: InputMaybe<Scalars['Bytes']>;
  forwarder_not?: InputMaybe<Scalars['Bytes']>;
  forwarder_gt?: InputMaybe<Scalars['Bytes']>;
  forwarder_lt?: InputMaybe<Scalars['Bytes']>;
  forwarder_gte?: InputMaybe<Scalars['Bytes']>;
  forwarder_lte?: InputMaybe<Scalars['Bytes']>;
  forwarder_in?: InputMaybe<Array<Scalars['Bytes']>>;
  forwarder_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  forwarder_contains?: InputMaybe<Scalars['Bytes']>;
  forwarder_not_contains?: InputMaybe<Scalars['Bytes']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  enabled_not?: InputMaybe<Scalars['Boolean']>;
  enabled_in?: InputMaybe<Array<Scalars['Boolean']>>;
  enabled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TrustedForwarderChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TrustedForwarderChangedEvent_filter>>>;
};

export type TrustedForwarderChangedEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'governanceAddress'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'host'
  | 'superToken'
  | 'isKeySet'
  | 'forwarder'
  | 'enabled';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  flowUpdatedEvent: InContextSdkMethod<Query['flowUpdatedEvent'], QueryflowUpdatedEventArgs, MeshContext>,
  /** null **/
  flowUpdatedEvents: InContextSdkMethod<Query['flowUpdatedEvents'], QueryflowUpdatedEventsArgs, MeshContext>,
  /** null **/
  flowOperatorUpdatedEvent: InContextSdkMethod<Query['flowOperatorUpdatedEvent'], QueryflowOperatorUpdatedEventArgs, MeshContext>,
  /** null **/
  flowOperatorUpdatedEvents: InContextSdkMethod<Query['flowOperatorUpdatedEvents'], QueryflowOperatorUpdatedEventsArgs, MeshContext>,
  /** null **/
  indexCreatedEvent: InContextSdkMethod<Query['indexCreatedEvent'], QueryindexCreatedEventArgs, MeshContext>,
  /** null **/
  indexCreatedEvents: InContextSdkMethod<Query['indexCreatedEvents'], QueryindexCreatedEventsArgs, MeshContext>,
  /** null **/
  indexDistributionClaimedEvent: InContextSdkMethod<Query['indexDistributionClaimedEvent'], QueryindexDistributionClaimedEventArgs, MeshContext>,
  /** null **/
  indexDistributionClaimedEvents: InContextSdkMethod<Query['indexDistributionClaimedEvents'], QueryindexDistributionClaimedEventsArgs, MeshContext>,
  /** null **/
  indexUpdatedEvent: InContextSdkMethod<Query['indexUpdatedEvent'], QueryindexUpdatedEventArgs, MeshContext>,
  /** null **/
  indexUpdatedEvents: InContextSdkMethod<Query['indexUpdatedEvents'], QueryindexUpdatedEventsArgs, MeshContext>,
  /** null **/
  indexSubscribedEvent: InContextSdkMethod<Query['indexSubscribedEvent'], QueryindexSubscribedEventArgs, MeshContext>,
  /** null **/
  indexSubscribedEvents: InContextSdkMethod<Query['indexSubscribedEvents'], QueryindexSubscribedEventsArgs, MeshContext>,
  /** null **/
  indexUnitsUpdatedEvent: InContextSdkMethod<Query['indexUnitsUpdatedEvent'], QueryindexUnitsUpdatedEventArgs, MeshContext>,
  /** null **/
  indexUnitsUpdatedEvents: InContextSdkMethod<Query['indexUnitsUpdatedEvents'], QueryindexUnitsUpdatedEventsArgs, MeshContext>,
  /** null **/
  indexUnsubscribedEvent: InContextSdkMethod<Query['indexUnsubscribedEvent'], QueryindexUnsubscribedEventArgs, MeshContext>,
  /** null **/
  indexUnsubscribedEvents: InContextSdkMethod<Query['indexUnsubscribedEvents'], QueryindexUnsubscribedEventsArgs, MeshContext>,
  /** null **/
  subscriptionApprovedEvent: InContextSdkMethod<Query['subscriptionApprovedEvent'], QuerysubscriptionApprovedEventArgs, MeshContext>,
  /** null **/
  subscriptionApprovedEvents: InContextSdkMethod<Query['subscriptionApprovedEvents'], QuerysubscriptionApprovedEventsArgs, MeshContext>,
  /** null **/
  subscriptionDistributionClaimedEvent: InContextSdkMethod<Query['subscriptionDistributionClaimedEvent'], QuerysubscriptionDistributionClaimedEventArgs, MeshContext>,
  /** null **/
  subscriptionDistributionClaimedEvents: InContextSdkMethod<Query['subscriptionDistributionClaimedEvents'], QuerysubscriptionDistributionClaimedEventsArgs, MeshContext>,
  /** null **/
  subscriptionRevokedEvent: InContextSdkMethod<Query['subscriptionRevokedEvent'], QuerysubscriptionRevokedEventArgs, MeshContext>,
  /** null **/
  subscriptionRevokedEvents: InContextSdkMethod<Query['subscriptionRevokedEvents'], QuerysubscriptionRevokedEventsArgs, MeshContext>,
  /** null **/
  subscriptionUnitsUpdatedEvent: InContextSdkMethod<Query['subscriptionUnitsUpdatedEvent'], QuerysubscriptionUnitsUpdatedEventArgs, MeshContext>,
  /** null **/
  subscriptionUnitsUpdatedEvents: InContextSdkMethod<Query['subscriptionUnitsUpdatedEvents'], QuerysubscriptionUnitsUpdatedEventsArgs, MeshContext>,
  /** null **/
  poolCreatedEvent: InContextSdkMethod<Query['poolCreatedEvent'], QuerypoolCreatedEventArgs, MeshContext>,
  /** null **/
  poolCreatedEvents: InContextSdkMethod<Query['poolCreatedEvents'], QuerypoolCreatedEventsArgs, MeshContext>,
  /** null **/
  poolConnectionUpdatedEvent: InContextSdkMethod<Query['poolConnectionUpdatedEvent'], QuerypoolConnectionUpdatedEventArgs, MeshContext>,
  /** null **/
  poolConnectionUpdatedEvents: InContextSdkMethod<Query['poolConnectionUpdatedEvents'], QuerypoolConnectionUpdatedEventsArgs, MeshContext>,
  /** null **/
  bufferAdjustedEvent: InContextSdkMethod<Query['bufferAdjustedEvent'], QuerybufferAdjustedEventArgs, MeshContext>,
  /** null **/
  bufferAdjustedEvents: InContextSdkMethod<Query['bufferAdjustedEvents'], QuerybufferAdjustedEventsArgs, MeshContext>,
  /** null **/
  instantDistributionUpdatedEvent: InContextSdkMethod<Query['instantDistributionUpdatedEvent'], QueryinstantDistributionUpdatedEventArgs, MeshContext>,
  /** null **/
  instantDistributionUpdatedEvents: InContextSdkMethod<Query['instantDistributionUpdatedEvents'], QueryinstantDistributionUpdatedEventsArgs, MeshContext>,
  /** null **/
  flowDistributionUpdatedEvent: InContextSdkMethod<Query['flowDistributionUpdatedEvent'], QueryflowDistributionUpdatedEventArgs, MeshContext>,
  /** null **/
  flowDistributionUpdatedEvents: InContextSdkMethod<Query['flowDistributionUpdatedEvents'], QueryflowDistributionUpdatedEventsArgs, MeshContext>,
  /** null **/
  distributionClaimedEvent: InContextSdkMethod<Query['distributionClaimedEvent'], QuerydistributionClaimedEventArgs, MeshContext>,
  /** null **/
  distributionClaimedEvents: InContextSdkMethod<Query['distributionClaimedEvents'], QuerydistributionClaimedEventsArgs, MeshContext>,
  /** null **/
  memberUnitsUpdatedEvent: InContextSdkMethod<Query['memberUnitsUpdatedEvent'], QuerymemberUnitsUpdatedEventArgs, MeshContext>,
  /** null **/
  memberUnitsUpdatedEvents: InContextSdkMethod<Query['memberUnitsUpdatedEvents'], QuerymemberUnitsUpdatedEventsArgs, MeshContext>,
  /** null **/
  agreementClassRegisteredEvent: InContextSdkMethod<Query['agreementClassRegisteredEvent'], QueryagreementClassRegisteredEventArgs, MeshContext>,
  /** null **/
  agreementClassRegisteredEvents: InContextSdkMethod<Query['agreementClassRegisteredEvents'], QueryagreementClassRegisteredEventsArgs, MeshContext>,
  /** null **/
  agreementClassUpdatedEvent: InContextSdkMethod<Query['agreementClassUpdatedEvent'], QueryagreementClassUpdatedEventArgs, MeshContext>,
  /** null **/
  agreementClassUpdatedEvents: InContextSdkMethod<Query['agreementClassUpdatedEvents'], QueryagreementClassUpdatedEventsArgs, MeshContext>,
  /** null **/
  appRegisteredEvent: InContextSdkMethod<Query['appRegisteredEvent'], QueryappRegisteredEventArgs, MeshContext>,
  /** null **/
  appRegisteredEvents: InContextSdkMethod<Query['appRegisteredEvents'], QueryappRegisteredEventsArgs, MeshContext>,
  /** null **/
  governanceReplacedEvent: InContextSdkMethod<Query['governanceReplacedEvent'], QuerygovernanceReplacedEventArgs, MeshContext>,
  /** null **/
  governanceReplacedEvents: InContextSdkMethod<Query['governanceReplacedEvents'], QuerygovernanceReplacedEventsArgs, MeshContext>,
  /** null **/
  jailEvent: InContextSdkMethod<Query['jailEvent'], QueryjailEventArgs, MeshContext>,
  /** null **/
  jailEvents: InContextSdkMethod<Query['jailEvents'], QueryjailEventsArgs, MeshContext>,
  /** null **/
  superTokenFactoryUpdatedEvent: InContextSdkMethod<Query['superTokenFactoryUpdatedEvent'], QuerysuperTokenFactoryUpdatedEventArgs, MeshContext>,
  /** null **/
  superTokenFactoryUpdatedEvents: InContextSdkMethod<Query['superTokenFactoryUpdatedEvents'], QuerysuperTokenFactoryUpdatedEventsArgs, MeshContext>,
  /** null **/
  superTokenLogicUpdatedEvent: InContextSdkMethod<Query['superTokenLogicUpdatedEvent'], QuerysuperTokenLogicUpdatedEventArgs, MeshContext>,
  /** null **/
  superTokenLogicUpdatedEvents: InContextSdkMethod<Query['superTokenLogicUpdatedEvents'], QuerysuperTokenLogicUpdatedEventsArgs, MeshContext>,
  /** null **/
  roleAdminChangedEvent: InContextSdkMethod<Query['roleAdminChangedEvent'], QueryroleAdminChangedEventArgs, MeshContext>,
  /** null **/
  roleAdminChangedEvents: InContextSdkMethod<Query['roleAdminChangedEvents'], QueryroleAdminChangedEventsArgs, MeshContext>,
  /** null **/
  roleGrantedEvent: InContextSdkMethod<Query['roleGrantedEvent'], QueryroleGrantedEventArgs, MeshContext>,
  /** null **/
  roleGrantedEvents: InContextSdkMethod<Query['roleGrantedEvents'], QueryroleGrantedEventsArgs, MeshContext>,
  /** null **/
  roleRevokedEvent: InContextSdkMethod<Query['roleRevokedEvent'], QueryroleRevokedEventArgs, MeshContext>,
  /** null **/
  roleRevokedEvents: InContextSdkMethod<Query['roleRevokedEvents'], QueryroleRevokedEventsArgs, MeshContext>,
  /** null **/
  setEvent: InContextSdkMethod<Query['setEvent'], QuerysetEventArgs, MeshContext>,
  /** null **/
  setEvents: InContextSdkMethod<Query['setEvents'], QuerysetEventsArgs, MeshContext>,
  /** null **/
  cfav1LiquidationPeriodChangedEvent: InContextSdkMethod<Query['cfav1LiquidationPeriodChangedEvent'], Querycfav1LiquidationPeriodChangedEventArgs, MeshContext>,
  /** null **/
  cfav1LiquidationPeriodChangedEvents: InContextSdkMethod<Query['cfav1LiquidationPeriodChangedEvents'], Querycfav1LiquidationPeriodChangedEventsArgs, MeshContext>,
  /** null **/
  configChangedEvent: InContextSdkMethod<Query['configChangedEvent'], QueryconfigChangedEventArgs, MeshContext>,
  /** null **/
  configChangedEvents: InContextSdkMethod<Query['configChangedEvents'], QueryconfigChangedEventsArgs, MeshContext>,
  /** null **/
  rewardAddressChangedEvent: InContextSdkMethod<Query['rewardAddressChangedEvent'], QueryrewardAddressChangedEventArgs, MeshContext>,
  /** null **/
  rewardAddressChangedEvents: InContextSdkMethod<Query['rewardAddressChangedEvents'], QueryrewardAddressChangedEventsArgs, MeshContext>,
  /** null **/
  pppconfigurationChangedEvent: InContextSdkMethod<Query['pppconfigurationChangedEvent'], QuerypppconfigurationChangedEventArgs, MeshContext>,
  /** null **/
  pppconfigurationChangedEvents: InContextSdkMethod<Query['pppconfigurationChangedEvents'], QuerypppconfigurationChangedEventsArgs, MeshContext>,
  /** null **/
  superTokenMinimumDepositChangedEvent: InContextSdkMethod<Query['superTokenMinimumDepositChangedEvent'], QuerysuperTokenMinimumDepositChangedEventArgs, MeshContext>,
  /** null **/
  superTokenMinimumDepositChangedEvents: InContextSdkMethod<Query['superTokenMinimumDepositChangedEvents'], QuerysuperTokenMinimumDepositChangedEventsArgs, MeshContext>,
  /** null **/
  trustedForwarderChangedEvent: InContextSdkMethod<Query['trustedForwarderChangedEvent'], QuerytrustedForwarderChangedEventArgs, MeshContext>,
  /** null **/
  trustedForwarderChangedEvents: InContextSdkMethod<Query['trustedForwarderChangedEvents'], QuerytrustedForwarderChangedEventsArgs, MeshContext>,
  /** null **/
  agreementLiquidatedByEvent: InContextSdkMethod<Query['agreementLiquidatedByEvent'], QueryagreementLiquidatedByEventArgs, MeshContext>,
  /** null **/
  agreementLiquidatedByEvents: InContextSdkMethod<Query['agreementLiquidatedByEvents'], QueryagreementLiquidatedByEventsArgs, MeshContext>,
  /** null **/
  agreementLiquidatedV2Event: InContextSdkMethod<Query['agreementLiquidatedV2Event'], QueryagreementLiquidatedV2EventArgs, MeshContext>,
  /** null **/
  agreementLiquidatedV2Events: InContextSdkMethod<Query['agreementLiquidatedV2Events'], QueryagreementLiquidatedV2EventsArgs, MeshContext>,
  /** null **/
  burnedEvent: InContextSdkMethod<Query['burnedEvent'], QueryburnedEventArgs, MeshContext>,
  /** null **/
  burnedEvents: InContextSdkMethod<Query['burnedEvents'], QueryburnedEventsArgs, MeshContext>,
  /** null **/
  mintedEvent: InContextSdkMethod<Query['mintedEvent'], QuerymintedEventArgs, MeshContext>,
  /** null **/
  mintedEvents: InContextSdkMethod<Query['mintedEvents'], QuerymintedEventsArgs, MeshContext>,
  /** null **/
  sentEvent: InContextSdkMethod<Query['sentEvent'], QuerysentEventArgs, MeshContext>,
  /** null **/
  sentEvents: InContextSdkMethod<Query['sentEvents'], QuerysentEventsArgs, MeshContext>,
  /** null **/
  transferEvent: InContextSdkMethod<Query['transferEvent'], QuerytransferEventArgs, MeshContext>,
  /** null **/
  transferEvents: InContextSdkMethod<Query['transferEvents'], QuerytransferEventsArgs, MeshContext>,
  /** null **/
  tokenDowngradedEvent: InContextSdkMethod<Query['tokenDowngradedEvent'], QuerytokenDowngradedEventArgs, MeshContext>,
  /** null **/
  tokenDowngradedEvents: InContextSdkMethod<Query['tokenDowngradedEvents'], QuerytokenDowngradedEventsArgs, MeshContext>,
  /** null **/
  tokenUpgradedEvent: InContextSdkMethod<Query['tokenUpgradedEvent'], QuerytokenUpgradedEventArgs, MeshContext>,
  /** null **/
  tokenUpgradedEvents: InContextSdkMethod<Query['tokenUpgradedEvents'], QuerytokenUpgradedEventsArgs, MeshContext>,
  /** null **/
  approvalEvent: InContextSdkMethod<Query['approvalEvent'], QueryapprovalEventArgs, MeshContext>,
  /** null **/
  approvalEvents: InContextSdkMethod<Query['approvalEvents'], QueryapprovalEventsArgs, MeshContext>,
  /** null **/
  customSuperTokenCreatedEvent: InContextSdkMethod<Query['customSuperTokenCreatedEvent'], QuerycustomSuperTokenCreatedEventArgs, MeshContext>,
  /** null **/
  customSuperTokenCreatedEvents: InContextSdkMethod<Query['customSuperTokenCreatedEvents'], QuerycustomSuperTokenCreatedEventsArgs, MeshContext>,
  /** null **/
  superTokenCreatedEvent: InContextSdkMethod<Query['superTokenCreatedEvent'], QuerysuperTokenCreatedEventArgs, MeshContext>,
  /** null **/
  superTokenCreatedEvents: InContextSdkMethod<Query['superTokenCreatedEvents'], QuerysuperTokenCreatedEventsArgs, MeshContext>,
  /** null **/
  superTokenLogicCreatedEvent: InContextSdkMethod<Query['superTokenLogicCreatedEvent'], QuerysuperTokenLogicCreatedEventArgs, MeshContext>,
  /** null **/
  superTokenLogicCreatedEvents: InContextSdkMethod<Query['superTokenLogicCreatedEvents'], QuerysuperTokenLogicCreatedEventsArgs, MeshContext>,
  /** null **/
  newPICEvent: InContextSdkMethod<Query['newPICEvent'], QuerynewPICEventArgs, MeshContext>,
  /** null **/
  newPICEvents: InContextSdkMethod<Query['newPICEvents'], QuerynewPICEventsArgs, MeshContext>,
  /** null **/
  exitRateChangedEvent: InContextSdkMethod<Query['exitRateChangedEvent'], QueryexitRateChangedEventArgs, MeshContext>,
  /** null **/
  exitRateChangedEvents: InContextSdkMethod<Query['exitRateChangedEvents'], QueryexitRateChangedEventsArgs, MeshContext>,
  /** null **/
  bondIncreasedEvent: InContextSdkMethod<Query['bondIncreasedEvent'], QuerybondIncreasedEventArgs, MeshContext>,
  /** null **/
  bondIncreasedEvents: InContextSdkMethod<Query['bondIncreasedEvents'], QuerybondIncreasedEventsArgs, MeshContext>,
  /** null **/
  account: InContextSdkMethod<Query['account'], QueryaccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<Query['accounts'], QueryaccountsArgs, MeshContext>,
  /** null **/
  pool: InContextSdkMethod<Query['pool'], QuerypoolArgs, MeshContext>,
  /** null **/
  pools: InContextSdkMethod<Query['pools'], QuerypoolsArgs, MeshContext>,
  /** null **/
  poolMember: InContextSdkMethod<Query['poolMember'], QuerypoolMemberArgs, MeshContext>,
  /** null **/
  poolMembers: InContextSdkMethod<Query['poolMembers'], QuerypoolMembersArgs, MeshContext>,
  /** null **/
  poolDistributor: InContextSdkMethod<Query['poolDistributor'], QuerypoolDistributorArgs, MeshContext>,
  /** null **/
  poolDistributors: InContextSdkMethod<Query['poolDistributors'], QuerypoolDistributorsArgs, MeshContext>,
  /** null **/
  index: InContextSdkMethod<Query['index'], QueryindexArgs, MeshContext>,
  /** null **/
  indexes: InContextSdkMethod<Query['indexes'], QueryindexesArgs, MeshContext>,
  /** null **/
  indexSubscription: InContextSdkMethod<Query['indexSubscription'], QueryindexSubscriptionArgs, MeshContext>,
  /** null **/
  indexSubscriptions: InContextSdkMethod<Query['indexSubscriptions'], QueryindexSubscriptionsArgs, MeshContext>,
  /** null **/
  stream: InContextSdkMethod<Query['stream'], QuerystreamArgs, MeshContext>,
  /** null **/
  streams: InContextSdkMethod<Query['streams'], QuerystreamsArgs, MeshContext>,
  /** null **/
  flowOperator: InContextSdkMethod<Query['flowOperator'], QueryflowOperatorArgs, MeshContext>,
  /** null **/
  flowOperators: InContextSdkMethod<Query['flowOperators'], QueryflowOperatorsArgs, MeshContext>,
  /** null **/
  streamPeriod: InContextSdkMethod<Query['streamPeriod'], QuerystreamPeriodArgs, MeshContext>,
  /** null **/
  streamPeriods: InContextSdkMethod<Query['streamPeriods'], QuerystreamPeriodsArgs, MeshContext>,
  /** null **/
  tokenGovernanceConfig: InContextSdkMethod<Query['tokenGovernanceConfig'], QuerytokenGovernanceConfigArgs, MeshContext>,
  /** null **/
  tokenGovernanceConfigs: InContextSdkMethod<Query['tokenGovernanceConfigs'], QuerytokenGovernanceConfigsArgs, MeshContext>,
  /** null **/
  streamRevision: InContextSdkMethod<Query['streamRevision'], QuerystreamRevisionArgs, MeshContext>,
  /** null **/
  streamRevisions: InContextSdkMethod<Query['streamRevisions'], QuerystreamRevisionsArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Query['token'], QuerytokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Query['tokens'], QuerytokensArgs, MeshContext>,
  /** null **/
  resolverEntry: InContextSdkMethod<Query['resolverEntry'], QueryresolverEntryArgs, MeshContext>,
  /** null **/
  resolverEntries: InContextSdkMethod<Query['resolverEntries'], QueryresolverEntriesArgs, MeshContext>,
  /** null **/
  accountTokenSnapshot: InContextSdkMethod<Query['accountTokenSnapshot'], QueryaccountTokenSnapshotArgs, MeshContext>,
  /** null **/
  accountTokenSnapshots: InContextSdkMethod<Query['accountTokenSnapshots'], QueryaccountTokenSnapshotsArgs, MeshContext>,
  /** null **/
  accountTokenSnapshotLog: InContextSdkMethod<Query['accountTokenSnapshotLog'], QueryaccountTokenSnapshotLogArgs, MeshContext>,
  /** null **/
  accountTokenSnapshotLogs: InContextSdkMethod<Query['accountTokenSnapshotLogs'], QueryaccountTokenSnapshotLogsArgs, MeshContext>,
  /** null **/
  tokenStatistic: InContextSdkMethod<Query['tokenStatistic'], QuerytokenStatisticArgs, MeshContext>,
  /** null **/
  tokenStatistics: InContextSdkMethod<Query['tokenStatistics'], QuerytokenStatisticsArgs, MeshContext>,
  /** null **/
  tokenStatisticLog: InContextSdkMethod<Query['tokenStatisticLog'], QuerytokenStatisticLogArgs, MeshContext>,
  /** null **/
  tokenStatisticLogs: InContextSdkMethod<Query['tokenStatisticLogs'], QuerytokenStatisticLogsArgs, MeshContext>,
  /** null **/
  sfmeta: InContextSdkMethod<Query['sfmeta'], QuerysfmetaArgs, MeshContext>,
  /** null **/
  sfmetas: InContextSdkMethod<Query['sfmetas'], QuerysfmetasArgs, MeshContext>,
  /** null **/
  event: InContextSdkMethod<Query['event'], QueryeventArgs, MeshContext>,
  /** null **/
  events: InContextSdkMethod<Query['events'], QueryeventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  flowUpdatedEvent: InContextSdkMethod<Subscription['flowUpdatedEvent'], SubscriptionflowUpdatedEventArgs, MeshContext>,
  /** null **/
  flowUpdatedEvents: InContextSdkMethod<Subscription['flowUpdatedEvents'], SubscriptionflowUpdatedEventsArgs, MeshContext>,
  /** null **/
  flowOperatorUpdatedEvent: InContextSdkMethod<Subscription['flowOperatorUpdatedEvent'], SubscriptionflowOperatorUpdatedEventArgs, MeshContext>,
  /** null **/
  flowOperatorUpdatedEvents: InContextSdkMethod<Subscription['flowOperatorUpdatedEvents'], SubscriptionflowOperatorUpdatedEventsArgs, MeshContext>,
  /** null **/
  indexCreatedEvent: InContextSdkMethod<Subscription['indexCreatedEvent'], SubscriptionindexCreatedEventArgs, MeshContext>,
  /** null **/
  indexCreatedEvents: InContextSdkMethod<Subscription['indexCreatedEvents'], SubscriptionindexCreatedEventsArgs, MeshContext>,
  /** null **/
  indexDistributionClaimedEvent: InContextSdkMethod<Subscription['indexDistributionClaimedEvent'], SubscriptionindexDistributionClaimedEventArgs, MeshContext>,
  /** null **/
  indexDistributionClaimedEvents: InContextSdkMethod<Subscription['indexDistributionClaimedEvents'], SubscriptionindexDistributionClaimedEventsArgs, MeshContext>,
  /** null **/
  indexUpdatedEvent: InContextSdkMethod<Subscription['indexUpdatedEvent'], SubscriptionindexUpdatedEventArgs, MeshContext>,
  /** null **/
  indexUpdatedEvents: InContextSdkMethod<Subscription['indexUpdatedEvents'], SubscriptionindexUpdatedEventsArgs, MeshContext>,
  /** null **/
  indexSubscribedEvent: InContextSdkMethod<Subscription['indexSubscribedEvent'], SubscriptionindexSubscribedEventArgs, MeshContext>,
  /** null **/
  indexSubscribedEvents: InContextSdkMethod<Subscription['indexSubscribedEvents'], SubscriptionindexSubscribedEventsArgs, MeshContext>,
  /** null **/
  indexUnitsUpdatedEvent: InContextSdkMethod<Subscription['indexUnitsUpdatedEvent'], SubscriptionindexUnitsUpdatedEventArgs, MeshContext>,
  /** null **/
  indexUnitsUpdatedEvents: InContextSdkMethod<Subscription['indexUnitsUpdatedEvents'], SubscriptionindexUnitsUpdatedEventsArgs, MeshContext>,
  /** null **/
  indexUnsubscribedEvent: InContextSdkMethod<Subscription['indexUnsubscribedEvent'], SubscriptionindexUnsubscribedEventArgs, MeshContext>,
  /** null **/
  indexUnsubscribedEvents: InContextSdkMethod<Subscription['indexUnsubscribedEvents'], SubscriptionindexUnsubscribedEventsArgs, MeshContext>,
  /** null **/
  subscriptionApprovedEvent: InContextSdkMethod<Subscription['subscriptionApprovedEvent'], SubscriptionsubscriptionApprovedEventArgs, MeshContext>,
  /** null **/
  subscriptionApprovedEvents: InContextSdkMethod<Subscription['subscriptionApprovedEvents'], SubscriptionsubscriptionApprovedEventsArgs, MeshContext>,
  /** null **/
  subscriptionDistributionClaimedEvent: InContextSdkMethod<Subscription['subscriptionDistributionClaimedEvent'], SubscriptionsubscriptionDistributionClaimedEventArgs, MeshContext>,
  /** null **/
  subscriptionDistributionClaimedEvents: InContextSdkMethod<Subscription['subscriptionDistributionClaimedEvents'], SubscriptionsubscriptionDistributionClaimedEventsArgs, MeshContext>,
  /** null **/
  subscriptionRevokedEvent: InContextSdkMethod<Subscription['subscriptionRevokedEvent'], SubscriptionsubscriptionRevokedEventArgs, MeshContext>,
  /** null **/
  subscriptionRevokedEvents: InContextSdkMethod<Subscription['subscriptionRevokedEvents'], SubscriptionsubscriptionRevokedEventsArgs, MeshContext>,
  /** null **/
  subscriptionUnitsUpdatedEvent: InContextSdkMethod<Subscription['subscriptionUnitsUpdatedEvent'], SubscriptionsubscriptionUnitsUpdatedEventArgs, MeshContext>,
  /** null **/
  subscriptionUnitsUpdatedEvents: InContextSdkMethod<Subscription['subscriptionUnitsUpdatedEvents'], SubscriptionsubscriptionUnitsUpdatedEventsArgs, MeshContext>,
  /** null **/
  poolCreatedEvent: InContextSdkMethod<Subscription['poolCreatedEvent'], SubscriptionpoolCreatedEventArgs, MeshContext>,
  /** null **/
  poolCreatedEvents: InContextSdkMethod<Subscription['poolCreatedEvents'], SubscriptionpoolCreatedEventsArgs, MeshContext>,
  /** null **/
  poolConnectionUpdatedEvent: InContextSdkMethod<Subscription['poolConnectionUpdatedEvent'], SubscriptionpoolConnectionUpdatedEventArgs, MeshContext>,
  /** null **/
  poolConnectionUpdatedEvents: InContextSdkMethod<Subscription['poolConnectionUpdatedEvents'], SubscriptionpoolConnectionUpdatedEventsArgs, MeshContext>,
  /** null **/
  bufferAdjustedEvent: InContextSdkMethod<Subscription['bufferAdjustedEvent'], SubscriptionbufferAdjustedEventArgs, MeshContext>,
  /** null **/
  bufferAdjustedEvents: InContextSdkMethod<Subscription['bufferAdjustedEvents'], SubscriptionbufferAdjustedEventsArgs, MeshContext>,
  /** null **/
  instantDistributionUpdatedEvent: InContextSdkMethod<Subscription['instantDistributionUpdatedEvent'], SubscriptioninstantDistributionUpdatedEventArgs, MeshContext>,
  /** null **/
  instantDistributionUpdatedEvents: InContextSdkMethod<Subscription['instantDistributionUpdatedEvents'], SubscriptioninstantDistributionUpdatedEventsArgs, MeshContext>,
  /** null **/
  flowDistributionUpdatedEvent: InContextSdkMethod<Subscription['flowDistributionUpdatedEvent'], SubscriptionflowDistributionUpdatedEventArgs, MeshContext>,
  /** null **/
  flowDistributionUpdatedEvents: InContextSdkMethod<Subscription['flowDistributionUpdatedEvents'], SubscriptionflowDistributionUpdatedEventsArgs, MeshContext>,
  /** null **/
  distributionClaimedEvent: InContextSdkMethod<Subscription['distributionClaimedEvent'], SubscriptiondistributionClaimedEventArgs, MeshContext>,
  /** null **/
  distributionClaimedEvents: InContextSdkMethod<Subscription['distributionClaimedEvents'], SubscriptiondistributionClaimedEventsArgs, MeshContext>,
  /** null **/
  memberUnitsUpdatedEvent: InContextSdkMethod<Subscription['memberUnitsUpdatedEvent'], SubscriptionmemberUnitsUpdatedEventArgs, MeshContext>,
  /** null **/
  memberUnitsUpdatedEvents: InContextSdkMethod<Subscription['memberUnitsUpdatedEvents'], SubscriptionmemberUnitsUpdatedEventsArgs, MeshContext>,
  /** null **/
  agreementClassRegisteredEvent: InContextSdkMethod<Subscription['agreementClassRegisteredEvent'], SubscriptionagreementClassRegisteredEventArgs, MeshContext>,
  /** null **/
  agreementClassRegisteredEvents: InContextSdkMethod<Subscription['agreementClassRegisteredEvents'], SubscriptionagreementClassRegisteredEventsArgs, MeshContext>,
  /** null **/
  agreementClassUpdatedEvent: InContextSdkMethod<Subscription['agreementClassUpdatedEvent'], SubscriptionagreementClassUpdatedEventArgs, MeshContext>,
  /** null **/
  agreementClassUpdatedEvents: InContextSdkMethod<Subscription['agreementClassUpdatedEvents'], SubscriptionagreementClassUpdatedEventsArgs, MeshContext>,
  /** null **/
  appRegisteredEvent: InContextSdkMethod<Subscription['appRegisteredEvent'], SubscriptionappRegisteredEventArgs, MeshContext>,
  /** null **/
  appRegisteredEvents: InContextSdkMethod<Subscription['appRegisteredEvents'], SubscriptionappRegisteredEventsArgs, MeshContext>,
  /** null **/
  governanceReplacedEvent: InContextSdkMethod<Subscription['governanceReplacedEvent'], SubscriptiongovernanceReplacedEventArgs, MeshContext>,
  /** null **/
  governanceReplacedEvents: InContextSdkMethod<Subscription['governanceReplacedEvents'], SubscriptiongovernanceReplacedEventsArgs, MeshContext>,
  /** null **/
  jailEvent: InContextSdkMethod<Subscription['jailEvent'], SubscriptionjailEventArgs, MeshContext>,
  /** null **/
  jailEvents: InContextSdkMethod<Subscription['jailEvents'], SubscriptionjailEventsArgs, MeshContext>,
  /** null **/
  superTokenFactoryUpdatedEvent: InContextSdkMethod<Subscription['superTokenFactoryUpdatedEvent'], SubscriptionsuperTokenFactoryUpdatedEventArgs, MeshContext>,
  /** null **/
  superTokenFactoryUpdatedEvents: InContextSdkMethod<Subscription['superTokenFactoryUpdatedEvents'], SubscriptionsuperTokenFactoryUpdatedEventsArgs, MeshContext>,
  /** null **/
  superTokenLogicUpdatedEvent: InContextSdkMethod<Subscription['superTokenLogicUpdatedEvent'], SubscriptionsuperTokenLogicUpdatedEventArgs, MeshContext>,
  /** null **/
  superTokenLogicUpdatedEvents: InContextSdkMethod<Subscription['superTokenLogicUpdatedEvents'], SubscriptionsuperTokenLogicUpdatedEventsArgs, MeshContext>,
  /** null **/
  roleAdminChangedEvent: InContextSdkMethod<Subscription['roleAdminChangedEvent'], SubscriptionroleAdminChangedEventArgs, MeshContext>,
  /** null **/
  roleAdminChangedEvents: InContextSdkMethod<Subscription['roleAdminChangedEvents'], SubscriptionroleAdminChangedEventsArgs, MeshContext>,
  /** null **/
  roleGrantedEvent: InContextSdkMethod<Subscription['roleGrantedEvent'], SubscriptionroleGrantedEventArgs, MeshContext>,
  /** null **/
  roleGrantedEvents: InContextSdkMethod<Subscription['roleGrantedEvents'], SubscriptionroleGrantedEventsArgs, MeshContext>,
  /** null **/
  roleRevokedEvent: InContextSdkMethod<Subscription['roleRevokedEvent'], SubscriptionroleRevokedEventArgs, MeshContext>,
  /** null **/
  roleRevokedEvents: InContextSdkMethod<Subscription['roleRevokedEvents'], SubscriptionroleRevokedEventsArgs, MeshContext>,
  /** null **/
  setEvent: InContextSdkMethod<Subscription['setEvent'], SubscriptionsetEventArgs, MeshContext>,
  /** null **/
  setEvents: InContextSdkMethod<Subscription['setEvents'], SubscriptionsetEventsArgs, MeshContext>,
  /** null **/
  cfav1LiquidationPeriodChangedEvent: InContextSdkMethod<Subscription['cfav1LiquidationPeriodChangedEvent'], Subscriptioncfav1LiquidationPeriodChangedEventArgs, MeshContext>,
  /** null **/
  cfav1LiquidationPeriodChangedEvents: InContextSdkMethod<Subscription['cfav1LiquidationPeriodChangedEvents'], Subscriptioncfav1LiquidationPeriodChangedEventsArgs, MeshContext>,
  /** null **/
  configChangedEvent: InContextSdkMethod<Subscription['configChangedEvent'], SubscriptionconfigChangedEventArgs, MeshContext>,
  /** null **/
  configChangedEvents: InContextSdkMethod<Subscription['configChangedEvents'], SubscriptionconfigChangedEventsArgs, MeshContext>,
  /** null **/
  rewardAddressChangedEvent: InContextSdkMethod<Subscription['rewardAddressChangedEvent'], SubscriptionrewardAddressChangedEventArgs, MeshContext>,
  /** null **/
  rewardAddressChangedEvents: InContextSdkMethod<Subscription['rewardAddressChangedEvents'], SubscriptionrewardAddressChangedEventsArgs, MeshContext>,
  /** null **/
  pppconfigurationChangedEvent: InContextSdkMethod<Subscription['pppconfigurationChangedEvent'], SubscriptionpppconfigurationChangedEventArgs, MeshContext>,
  /** null **/
  pppconfigurationChangedEvents: InContextSdkMethod<Subscription['pppconfigurationChangedEvents'], SubscriptionpppconfigurationChangedEventsArgs, MeshContext>,
  /** null **/
  superTokenMinimumDepositChangedEvent: InContextSdkMethod<Subscription['superTokenMinimumDepositChangedEvent'], SubscriptionsuperTokenMinimumDepositChangedEventArgs, MeshContext>,
  /** null **/
  superTokenMinimumDepositChangedEvents: InContextSdkMethod<Subscription['superTokenMinimumDepositChangedEvents'], SubscriptionsuperTokenMinimumDepositChangedEventsArgs, MeshContext>,
  /** null **/
  trustedForwarderChangedEvent: InContextSdkMethod<Subscription['trustedForwarderChangedEvent'], SubscriptiontrustedForwarderChangedEventArgs, MeshContext>,
  /** null **/
  trustedForwarderChangedEvents: InContextSdkMethod<Subscription['trustedForwarderChangedEvents'], SubscriptiontrustedForwarderChangedEventsArgs, MeshContext>,
  /** null **/
  agreementLiquidatedByEvent: InContextSdkMethod<Subscription['agreementLiquidatedByEvent'], SubscriptionagreementLiquidatedByEventArgs, MeshContext>,
  /** null **/
  agreementLiquidatedByEvents: InContextSdkMethod<Subscription['agreementLiquidatedByEvents'], SubscriptionagreementLiquidatedByEventsArgs, MeshContext>,
  /** null **/
  agreementLiquidatedV2Event: InContextSdkMethod<Subscription['agreementLiquidatedV2Event'], SubscriptionagreementLiquidatedV2EventArgs, MeshContext>,
  /** null **/
  agreementLiquidatedV2Events: InContextSdkMethod<Subscription['agreementLiquidatedV2Events'], SubscriptionagreementLiquidatedV2EventsArgs, MeshContext>,
  /** null **/
  burnedEvent: InContextSdkMethod<Subscription['burnedEvent'], SubscriptionburnedEventArgs, MeshContext>,
  /** null **/
  burnedEvents: InContextSdkMethod<Subscription['burnedEvents'], SubscriptionburnedEventsArgs, MeshContext>,
  /** null **/
  mintedEvent: InContextSdkMethod<Subscription['mintedEvent'], SubscriptionmintedEventArgs, MeshContext>,
  /** null **/
  mintedEvents: InContextSdkMethod<Subscription['mintedEvents'], SubscriptionmintedEventsArgs, MeshContext>,
  /** null **/
  sentEvent: InContextSdkMethod<Subscription['sentEvent'], SubscriptionsentEventArgs, MeshContext>,
  /** null **/
  sentEvents: InContextSdkMethod<Subscription['sentEvents'], SubscriptionsentEventsArgs, MeshContext>,
  /** null **/
  transferEvent: InContextSdkMethod<Subscription['transferEvent'], SubscriptiontransferEventArgs, MeshContext>,
  /** null **/
  transferEvents: InContextSdkMethod<Subscription['transferEvents'], SubscriptiontransferEventsArgs, MeshContext>,
  /** null **/
  tokenDowngradedEvent: InContextSdkMethod<Subscription['tokenDowngradedEvent'], SubscriptiontokenDowngradedEventArgs, MeshContext>,
  /** null **/
  tokenDowngradedEvents: InContextSdkMethod<Subscription['tokenDowngradedEvents'], SubscriptiontokenDowngradedEventsArgs, MeshContext>,
  /** null **/
  tokenUpgradedEvent: InContextSdkMethod<Subscription['tokenUpgradedEvent'], SubscriptiontokenUpgradedEventArgs, MeshContext>,
  /** null **/
  tokenUpgradedEvents: InContextSdkMethod<Subscription['tokenUpgradedEvents'], SubscriptiontokenUpgradedEventsArgs, MeshContext>,
  /** null **/
  approvalEvent: InContextSdkMethod<Subscription['approvalEvent'], SubscriptionapprovalEventArgs, MeshContext>,
  /** null **/
  approvalEvents: InContextSdkMethod<Subscription['approvalEvents'], SubscriptionapprovalEventsArgs, MeshContext>,
  /** null **/
  customSuperTokenCreatedEvent: InContextSdkMethod<Subscription['customSuperTokenCreatedEvent'], SubscriptioncustomSuperTokenCreatedEventArgs, MeshContext>,
  /** null **/
  customSuperTokenCreatedEvents: InContextSdkMethod<Subscription['customSuperTokenCreatedEvents'], SubscriptioncustomSuperTokenCreatedEventsArgs, MeshContext>,
  /** null **/
  superTokenCreatedEvent: InContextSdkMethod<Subscription['superTokenCreatedEvent'], SubscriptionsuperTokenCreatedEventArgs, MeshContext>,
  /** null **/
  superTokenCreatedEvents: InContextSdkMethod<Subscription['superTokenCreatedEvents'], SubscriptionsuperTokenCreatedEventsArgs, MeshContext>,
  /** null **/
  superTokenLogicCreatedEvent: InContextSdkMethod<Subscription['superTokenLogicCreatedEvent'], SubscriptionsuperTokenLogicCreatedEventArgs, MeshContext>,
  /** null **/
  superTokenLogicCreatedEvents: InContextSdkMethod<Subscription['superTokenLogicCreatedEvents'], SubscriptionsuperTokenLogicCreatedEventsArgs, MeshContext>,
  /** null **/
  newPICEvent: InContextSdkMethod<Subscription['newPICEvent'], SubscriptionnewPICEventArgs, MeshContext>,
  /** null **/
  newPICEvents: InContextSdkMethod<Subscription['newPICEvents'], SubscriptionnewPICEventsArgs, MeshContext>,
  /** null **/
  exitRateChangedEvent: InContextSdkMethod<Subscription['exitRateChangedEvent'], SubscriptionexitRateChangedEventArgs, MeshContext>,
  /** null **/
  exitRateChangedEvents: InContextSdkMethod<Subscription['exitRateChangedEvents'], SubscriptionexitRateChangedEventsArgs, MeshContext>,
  /** null **/
  bondIncreasedEvent: InContextSdkMethod<Subscription['bondIncreasedEvent'], SubscriptionbondIncreasedEventArgs, MeshContext>,
  /** null **/
  bondIncreasedEvents: InContextSdkMethod<Subscription['bondIncreasedEvents'], SubscriptionbondIncreasedEventsArgs, MeshContext>,
  /** null **/
  account: InContextSdkMethod<Subscription['account'], SubscriptionaccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<Subscription['accounts'], SubscriptionaccountsArgs, MeshContext>,
  /** null **/
  pool: InContextSdkMethod<Subscription['pool'], SubscriptionpoolArgs, MeshContext>,
  /** null **/
  pools: InContextSdkMethod<Subscription['pools'], SubscriptionpoolsArgs, MeshContext>,
  /** null **/
  poolMember: InContextSdkMethod<Subscription['poolMember'], SubscriptionpoolMemberArgs, MeshContext>,
  /** null **/
  poolMembers: InContextSdkMethod<Subscription['poolMembers'], SubscriptionpoolMembersArgs, MeshContext>,
  /** null **/
  poolDistributor: InContextSdkMethod<Subscription['poolDistributor'], SubscriptionpoolDistributorArgs, MeshContext>,
  /** null **/
  poolDistributors: InContextSdkMethod<Subscription['poolDistributors'], SubscriptionpoolDistributorsArgs, MeshContext>,
  /** null **/
  index: InContextSdkMethod<Subscription['index'], SubscriptionindexArgs, MeshContext>,
  /** null **/
  indexes: InContextSdkMethod<Subscription['indexes'], SubscriptionindexesArgs, MeshContext>,
  /** null **/
  indexSubscription: InContextSdkMethod<Subscription['indexSubscription'], SubscriptionindexSubscriptionArgs, MeshContext>,
  /** null **/
  indexSubscriptions: InContextSdkMethod<Subscription['indexSubscriptions'], SubscriptionindexSubscriptionsArgs, MeshContext>,
  /** null **/
  stream: InContextSdkMethod<Subscription['stream'], SubscriptionstreamArgs, MeshContext>,
  /** null **/
  streams: InContextSdkMethod<Subscription['streams'], SubscriptionstreamsArgs, MeshContext>,
  /** null **/
  flowOperator: InContextSdkMethod<Subscription['flowOperator'], SubscriptionflowOperatorArgs, MeshContext>,
  /** null **/
  flowOperators: InContextSdkMethod<Subscription['flowOperators'], SubscriptionflowOperatorsArgs, MeshContext>,
  /** null **/
  streamPeriod: InContextSdkMethod<Subscription['streamPeriod'], SubscriptionstreamPeriodArgs, MeshContext>,
  /** null **/
  streamPeriods: InContextSdkMethod<Subscription['streamPeriods'], SubscriptionstreamPeriodsArgs, MeshContext>,
  /** null **/
  tokenGovernanceConfig: InContextSdkMethod<Subscription['tokenGovernanceConfig'], SubscriptiontokenGovernanceConfigArgs, MeshContext>,
  /** null **/
  tokenGovernanceConfigs: InContextSdkMethod<Subscription['tokenGovernanceConfigs'], SubscriptiontokenGovernanceConfigsArgs, MeshContext>,
  /** null **/
  streamRevision: InContextSdkMethod<Subscription['streamRevision'], SubscriptionstreamRevisionArgs, MeshContext>,
  /** null **/
  streamRevisions: InContextSdkMethod<Subscription['streamRevisions'], SubscriptionstreamRevisionsArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Subscription['token'], SubscriptiontokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Subscription['tokens'], SubscriptiontokensArgs, MeshContext>,
  /** null **/
  resolverEntry: InContextSdkMethod<Subscription['resolverEntry'], SubscriptionresolverEntryArgs, MeshContext>,
  /** null **/
  resolverEntries: InContextSdkMethod<Subscription['resolverEntries'], SubscriptionresolverEntriesArgs, MeshContext>,
  /** null **/
  accountTokenSnapshot: InContextSdkMethod<Subscription['accountTokenSnapshot'], SubscriptionaccountTokenSnapshotArgs, MeshContext>,
  /** null **/
  accountTokenSnapshots: InContextSdkMethod<Subscription['accountTokenSnapshots'], SubscriptionaccountTokenSnapshotsArgs, MeshContext>,
  /** null **/
  accountTokenSnapshotLog: InContextSdkMethod<Subscription['accountTokenSnapshotLog'], SubscriptionaccountTokenSnapshotLogArgs, MeshContext>,
  /** null **/
  accountTokenSnapshotLogs: InContextSdkMethod<Subscription['accountTokenSnapshotLogs'], SubscriptionaccountTokenSnapshotLogsArgs, MeshContext>,
  /** null **/
  tokenStatistic: InContextSdkMethod<Subscription['tokenStatistic'], SubscriptiontokenStatisticArgs, MeshContext>,
  /** null **/
  tokenStatistics: InContextSdkMethod<Subscription['tokenStatistics'], SubscriptiontokenStatisticsArgs, MeshContext>,
  /** null **/
  tokenStatisticLog: InContextSdkMethod<Subscription['tokenStatisticLog'], SubscriptiontokenStatisticLogArgs, MeshContext>,
  /** null **/
  tokenStatisticLogs: InContextSdkMethod<Subscription['tokenStatisticLogs'], SubscriptiontokenStatisticLogsArgs, MeshContext>,
  /** null **/
  sfmeta: InContextSdkMethod<Subscription['sfmeta'], SubscriptionsfmetaArgs, MeshContext>,
  /** null **/
  sfmetas: InContextSdkMethod<Subscription['sfmetas'], SubscriptionsfmetasArgs, MeshContext>,
  /** null **/
  event: InContextSdkMethod<Subscription['event'], SubscriptioneventArgs, MeshContext>,
  /** null **/
  events: InContextSdkMethod<Subscription['events'], SubscriptioneventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["gda"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      ["url"]: Scalars['ID']
    };
}
