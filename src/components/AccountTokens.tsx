import {
  AccountTokenSnapshot_OrderBy,
  createSkipPaging,
  Ordering,
  SkipPaging,
} from "@superfluid-finance/sdk-core";
import { FC, ReactElement, useState } from "react";
import { Network } from "../redux/networks";
import { sfSubgraph } from "../redux/store";
import AccountTokenSnapshotDataGrid from "./AccountTokenSnapshotDataGrid";
import AppLink from "./AppLink";
import HelpAlert from "./HelpAlert";

const AccountTokens: FC<{
  network: Network;
  accountAddress: string;
}> = ({ network, accountAddress }): ReactElement => {
  const [accountTokenSnapshotPaging, setAccountTokenSnapshotPaging] =
    useState<SkipPaging>(
      createSkipPaging({
        take: 10,
      })
    );
  const [accountTokenSnapshotOrdering, setAccountTokenSnapshotOrdering] =
    useState<Ordering<AccountTokenSnapshot_OrderBy> | undefined>({
      orderBy: "balanceUntilUpdatedAt",
      orderDirection: "desc",
    });
  const accountTokenSnapshotsQuery = sfSubgraph.useAccountTokenSnapshotsQuery({
    chainId: network.chainId,
    pagination: accountTokenSnapshotPaging,
    filter: {
      account: accountAddress,
    },
    order: accountTokenSnapshotOrdering,
  });

  return (
    <>
      <HelpAlert sx={{ mb: 3 }}>
        A super token is either a wrapper around existing ERC20 token or a
        custom token that has special properties which allow them to be streamed
        and distributed to many accounts at the same time.{" "}
        <AppLink
          href="https://docs.superfluid.finance/superfluid/protocol-developers/guides/super-tokens"
          target="_blank"
        >
          Read more
        </AppLink>
      </HelpAlert>
      <AccountTokenSnapshotDataGrid
        network={network}
        queryResult={accountTokenSnapshotsQuery}
        setPaging={setAccountTokenSnapshotPaging}
        ordering={accountTokenSnapshotOrdering}
        setOrdering={setAccountTokenSnapshotOrdering}
      />
    </>
  );
};

export default AccountTokens;
