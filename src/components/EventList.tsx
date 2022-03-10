import {
  createSkipPaging,
  Event_OrderBy,
  Ordering,
  SkipPaging,
} from "@superfluid-finance/sdk-core";
import { FC, ReactElement, useState } from "react";
import { Network } from "../redux/networks";
import { sfApi } from "../redux/store";
import AppLink from "./AppLink";
import EventDataGrid from "./EventDataGrid";
import HelpAlert from "./HelpAlert";

interface Props {
  network: Network;
  address: string;
}

const EventList: FC<Props> = ({ network, address }): ReactElement => {
  const [eventPaging, setEventPaging] = useState<SkipPaging>(
    createSkipPaging({
      take: 10,
    })
  );

  const [eventOrdering, setEventOrdering] = useState<
    Ordering<Event_OrderBy> | undefined
  >({
    orderBy: "timestamp",
    orderDirection: "desc",
  });

  // TODO(KK) Use ordering.

  const eventQuery = sfApi.useListEventsQuery({
    chainId: network.chainId,
    accountAddress: address,
    timestamp_gt: 0,
    skip: eventPaging.skip,
    take: eventPaging.take,
  });

  return (
    <>
      <HelpAlert sx={{ mb: 3 }}>
        A timeline of events emitted by contracts that are related to the
        current address.{" "}
        <AppLink
          href="https://docs.superfluid.finance/superfluid/protocol-developers/subgraph#event-entities"
          target="_blank"
        >
          Read more
        </AppLink>
      </HelpAlert>
      <EventDataGrid
        network={network}
        queryResult={eventQuery}
        setPaging={setEventPaging}
        ordering={eventOrdering}
        setOrdering={setEventOrdering}
      />
    </>
  );
};

export default EventList;
