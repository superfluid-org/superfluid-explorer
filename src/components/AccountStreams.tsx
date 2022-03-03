import {FC, ReactElement} from "react";
import {Box, Typography} from "@mui/material";
import {Network} from "../redux/networks";
import AccountStreamsIncomingDataGrid from "./AccountStreamsIncomingDataGrid";
import AccountStreamsOutgoingDataGrid from "./AccountStreamsOutgoingDataGrid";

const AccountStreams: FC<{ network: Network, accountAddress: string }> = ({ network, accountAddress }): ReactElement => {
  return (<Box>
    <Box data-cy={"incoming-box"}>
      <Typography variant="h6" component="h2" sx={{ ml: 1, mb: 1 }}>
        Incoming
      </Typography>
      <AccountStreamsIncomingDataGrid network={network} accountAddress={accountAddress} />
    </Box>
    <Box data-cy={"outgoing-box"}>
      <Typography variant="h6" component="h2" sx={{ mt: 3, ml: 1, mb: 1 }}>
        Outgoing
      </Typography>
      <AccountStreamsOutgoingDataGrid network={network} accountAddress={accountAddress} />
    </Box>
  </Box>);
}

export default AccountStreams;
