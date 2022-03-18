import { Box, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import { Network } from "../redux/networks";
import AccountStreamsIncomingDataGrid from "./AccountStreamsIncomingDataGrid";
import AccountStreamsOutgoingDataGrid from "./AccountStreamsOutgoingDataGrid";
import AppLink from "./AppLink";
import HelpAlert from "./HelpAlert";

const AccountStreams: FC<{ network: Network; accountAddress: string }> = ({
  network,
  accountAddress,
}): ReactElement => {
  return (
    <>
      <HelpAlert dataCy={"streams-help-alert"}>
        Stream represents super token flow between a sender and a receiver.
        Sender accounts can create, update, and delete streams, while receiver
        accounts can delete streams. However, a pair of addresses may only have
        one stream open per token (but this stream may be updated at any time by
        the sender).{" "}
        <AppLink
          data-cy={"streams-help-alert-link"}
          href="https://docs.superfluid.finance/superfluid/protocol-developers/interactive-tutorials/money-streaming-1"
          target="_blank"
        >
          Read more
        </AppLink>
      </HelpAlert>

      <Box data-cy={"incoming-box"}>
        <Typography variant="h6" component="h2" sx={{ mt: 3, ml: 1, mb: 1 }}>
          Incoming
        </Typography>
        <AccountStreamsIncomingDataGrid
          network={network}
          accountAddress={accountAddress}
        />
      </Box>
      <Box data-cy={"outgoing-box"}>
        <Typography variant="h6" component="h2" sx={{ mt: 3, ml: 1, mb: 1 }}>
          Outgoing
        </Typography>
        <AccountStreamsOutgoingDataGrid
          network={network}
          accountAddress={accountAddress}
        />
      </Box>
    </>
  );
};

export default AccountStreams;
