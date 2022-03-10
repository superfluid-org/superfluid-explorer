import { Box, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import { Network } from "../redux/networks";
import AccountIndexesDataGrid from "./AccountIndexesDataGrid";
import AccountIndexSubscriptionsDataGrid from "./AccountIndexSubscriptionsDataGrid";
import AppLink from "./AppLink";
import HelpAlert from "./HelpAlert";
import InfoTooltipBtn from "./InfoTooltipBtn";

const AccountIndexes: FC<{
  network: Network;
  accountAddress: string;
}> = ({ network, accountAddress }): ReactElement => {
  return (
    <>
      <HelpAlert>
        A pool of subscribers, each of which who holds a given number of units
        in the index.An index is created by a publisher who may update the index
        or distribute funds to the index using the Instant Distribution
        Agreement (IDA).{" "}
        <AppLink
          href="https://docs.superfluid.finance/superfluid/protocol-developers/interactive-tutorials/instant-distribution"
          target="_blank"
        >
          Read more
        </AppLink>
      </HelpAlert>
      <Box data-cy={"publications-box"}>
        <Typography variant="h6" component="h2" sx={{ mt: 3, ml: 1, mb: 1 }}>
          Publications
        </Typography>
        <AccountIndexesDataGrid
          network={network}
          accountAddress={accountAddress}
        />
      </Box>
      <Box data-cy={"subscriptions-box"}>
        <Typography variant="h6" component="h2" sx={{ mt: 3, ml: 1, mb: 1 }}>
          Subscriptions
          <InfoTooltipBtn
            size={22}
            title={
              <>
                Accounts that have received units within the Index. Subscribers
                will receive distributed funds based on the portion of units
                they own in and index.{" "}
                <AppLink
                  href="https://docs.superfluid.finance/superfluid/protocol-developers/interactive-tutorials/instant-distribution"
                  target="_blank"
                >
                  Read more
                </AppLink>
              </>
            }
          />
        </Typography>
        <AccountIndexSubscriptionsDataGrid
          network={network}
          accountAddress={accountAddress}
        />
      </Box>
    </>
  );
};

export default AccountIndexes;
