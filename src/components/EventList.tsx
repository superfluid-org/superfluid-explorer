import { FC, ReactElement } from "react";
import { Network } from "../redux/networks";
import AppLink from "./AppLink";
import HelpAlert from "./HelpAlert";
import EventTable from "./Tables/EventTable";

interface Props {
  network: Network;
  address: string;
}

const EventList: FC<Props> = ({ network, address }): ReactElement => {
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

      <EventTable network={network} accountAddress={address} />
    </>
  );
};

export default EventList;
