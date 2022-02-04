import { FC, ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import { Network } from "../redux/networks";
import AccountIndexesDataGrid from "./AccountIndexesDataGrid";
import AccountIndexSubscriptionsDataGrid from "./AccountIndexSubscriptionsDataGrid";

const AccountIndexes: FC<{
  network: Network,
  accountAddress: string
}> = ({ network, accountAddress }): ReactElement => {
  return <>
    <Box>
      <Typography variant="h6" component="h2" sx={{ ml: 1, mb: 1 }}>
        Publications
      </Typography>
      <AccountIndexesDataGrid network={network} accountAddress={accountAddress} />
    </Box>
    <Box>
      <Typography variant="h6" component="h2" sx={{ mt: 3, ml: 1, mb: 1 }}>
        Subscriptions
      </Typography>
      <AccountIndexSubscriptionsDataGrid network={network} accountAddress={accountAddress} />
    </Box>
  </>
}

export default AccountIndexes;
