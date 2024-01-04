import { PoolMemberUnitsUpdatedEvent } from "../events";

import {
  RelevantAddressesIntermediate,
  SubgraphListQuery,
  SubgraphQueryHandler,
} from "@superfluid-finance/sdk-core";

import {
  MemberUnitsUpdatedEvent,
  MemberUnitsUpdatedEvent_Filter,
  MemberUnitsUpdatedEvent_OrderBy,
  Pool,
  PoolMember,
  PoolMemberUnitsUpdatedEventsDocument,
  PoolMemberUnitsUpdatedEventsQuery,
  PoolMemberUnitsUpdatedEventsQueryVariables,
} from "../.graphclient";

export type PoolMemberUnitsUpdatedEventListQuery = SubgraphListQuery<
  MemberUnitsUpdatedEvent_Filter,
  MemberUnitsUpdatedEvent_OrderBy
>;

export class PoolMemberUnitsUpdatedEventQueryHandler extends SubgraphQueryHandler<
  PoolMemberUnitsUpdatedEvent,
  PoolMemberUnitsUpdatedEventListQuery,
  PoolMemberUnitsUpdatedEventsQuery,
  PoolMemberUnitsUpdatedEventsQueryVariables
> {
  getAddressFieldKeysFromFilter = (): {
    accountKeys: (keyof MemberUnitsUpdatedEvent_Filter)[];
    tokenKeys: (keyof MemberUnitsUpdatedEvent_Filter)[];
  } => ({
    accountKeys: ["poolMember", "pool"],
    tokenKeys: ["token"],
  });

  getRelevantAddressesFromResultCore(
    result: PoolMemberUnitsUpdatedEvent
  ): RelevantAddressesIntermediate {
    return {
      accounts: [result.poolMember, result.pool],
      tokens: [result.token],
    };
  }

  mapFromSubgraphResponse(
    response: PoolMemberUnitsUpdatedEventsQuery
  ): PoolMemberUnitsUpdatedEvent[] {
    return mapGetAllEventsQueryEvent(
      response.memberUnitsUpdatedEvents
    ) as PoolMemberUnitsUpdatedEvent[];
  }
  requestDocument = PoolMemberUnitsUpdatedEventsDocument;
}
function mapGetAllEventsQueryEvent(
  memberUnitsUpdatedEvents: Array<
    { __typename: "MemberUnitsUpdatedEvent" } & Pick<
      MemberUnitsUpdatedEvent,
      | "id"
      | "units"
      | "token"
      | "timestamp"
      | "blockNumber"
      | "transactionHash"
      | "gasPrice"
      | "order"
      | "logIndex"
    > & { poolMember: Pick<PoolMember, "id">; pool: Pick<Pool, "id"> }
  >
): PoolMemberUnitsUpdatedEvent[] {
  return memberUnitsUpdatedEvents.map((memberUnitEvent) => {
    return {
      name: "MemberUnitsUpdated",
      id: memberUnitEvent.id,
      blockNumber: Number(memberUnitEvent.blockNumber),
      order: Number(memberUnitEvent.order),
      timestamp: Number(memberUnitEvent.timestamp),
      logIndex: Number(memberUnitEvent.logIndex),
      transactionHash: memberUnitEvent.transactionHash,
      gasPrice: memberUnitEvent.gasPrice,
      token: memberUnitEvent.token,
      pool: memberUnitEvent.pool.id,
      poolMember: memberUnitEvent.poolMember.id,
      units: memberUnitEvent.units,
    } as PoolMemberUnitsUpdatedEvent;
  });
}
