import { GridColDef, GridColumnHeaderTitle } from "@mui/x-data-grid";
import {
  AccountTokenSnapshot,
  AccountTokenSnapshot_OrderBy,
  Ordering,
  PagedResult,
  SkipPaging,
} from "@superfluid-finance/sdk-core";
import { FC, useMemo } from "react";
import { Network } from "../redux/networks";
import { AppDataGrid } from "./AppDataGrid";
import AppLink from "./AppLink";
import FlowingBalance from "./FlowingBalance";
import InfoTooltipBtn from "./InfoTooltipBtn";
import SuperTokenAddress from "./SuperTokenAddress";

interface Props {
  network: Network;
  queryResult: {
    isFetching: boolean;
    data?: PagedResult<AccountTokenSnapshot>;
  };
  setPaging: (paging: SkipPaging) => void;
  ordering: Ordering<AccountTokenSnapshot_OrderBy> | undefined;
  setOrdering: (ordering?: Ordering<AccountTokenSnapshot_OrderBy>) => void;
}

const AccountTokenSnapshotDataGrid: FC<Props> = ({
  network,
  queryResult,
  setPaging,
  ordering,
  setOrdering,
}) => {
  const columns: GridColDef[] = useMemo(
    () => [
      { field: "id", hide: true, sortable: false, flex: 1 },
      {
        field: "token",
        headerName: "Token",
        sortable: true,
        flex: 1,
        renderCell: (params) => (
          <SuperTokenAddress network={network} address={params.value} />
        ),
      },
      {
        field: "balance",
        headerName: "Balance",
        sortable: false,
        flex: 1,
        renderCell: (params) => {
          const accountTokenSnapshot = params.row as AccountTokenSnapshot;
          return (
            <FlowingBalance
              {...{
                balance: accountTokenSnapshot.balanceUntilUpdatedAt,
                balanceTimestamp: accountTokenSnapshot.updatedAtTimestamp,
                flowRate: accountTokenSnapshot.totalNetFlowRate,
              }}
            />
          );
        },
      },
      {
        field: "totalNumberOfActiveStreams",
        headerName: "Active Streams",
        sortable: true,
        flex: 1,
      },
      {
        field: "totalNumberOfClosedStreams",
        headerName: "Closed Streams",
        sortable: true,
        flex: 1,
      },
      {
        field: "totalSubscriptionsWithUnits",
        sortable: true,
        flex: 1,
        renderHeader: ({ colDef }) => (
          <>
            <GridColumnHeaderTitle
              label="Subscriptions With Units"
              columnWidth={colDef.computedWidth}
            />

            <InfoTooltipBtn
              dataCy={"subscriptions-with-units-tooltip"}
              title={
                <>
                  The amount of subscribers on an index that hold some number of
                  units.{" "}
                  <AppLink
                    data-cy={"subscriptions-with-units-link"}
                    href="https://docs.superfluid.finance/superfluid/protocol-developers/interactive-tutorials/instant-distribution"
                    target="_blank"
                  >
                    Read more
                  </AppLink>
                </>
              }
              iconSx={{ mb: 0, mr: 0.5 }}
            />
          </>
        ),
      },
    ],
    [network]
  );

  const rows: AccountTokenSnapshot[] = queryResult.data?.data ?? [];

  return (
    <AppDataGrid
      columns={columns}
      rows={rows}
      queryResult={queryResult}
      setPaging={setPaging}
      ordering={ordering}
      setOrdering={(x) => setOrdering(x as any)}
    />
  );
};

export default AccountTokenSnapshotDataGrid;
