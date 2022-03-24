import { FC, ReactElement } from "react";
import { Network } from "../redux/networks";
import AppLink from "./AppLink";
import HelpAlert from "./HelpAlert";
import AccountIndexSubscriptionsTable from "./Tables/Account/AccountIndexSubscriptionsTable";
import AccountPublishedIndexesTable from "./Tables/Account/AccountPublishedIndexesTable";

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

      <AccountPublishedIndexesTable
        network={network}
        accountAddress={accountAddress}
      />

      <AccountIndexSubscriptionsTable
        network={network}
        accountAddress={accountAddress}
      />
    </>
  );
};

export default AccountIndexes;
