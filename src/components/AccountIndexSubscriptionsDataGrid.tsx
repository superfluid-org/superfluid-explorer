import {
  GridColDef,
  GridColumnHeaderTitle,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import {
  createSkipPaging,
  IndexSubscription,
  IndexSubscription_OrderBy,
  Ordering,
  SkipPaging,
} from "@superfluid-finance/sdk-core";
import Decimal from "decimal.js";
import { BigNumber } from "ethers";
import { FC, useMemo, useState } from "react";
import calculatePoolPercentage from "../logic/calculatePoolPercentage";
import calculateWeiAmountReceived from "../logic/calculateWeiAmountReceived";
import { Network } from "../redux/networks";
import { sfSubgraph } from "../redux/store";
import AccountAddress from "./AccountAddress";
import { AppDataGrid } from "./AppDataGrid";
import AppLink from "./AppLink";
import EtherFormatted from "./EtherFormatted";
import { IndexSubscriptionDetailsDialog } from "./IndexSubscriptionDetails";
import InfoTooltipBtn from "./InfoTooltipBtn";
import SuperTokenAddress from "./SuperTokenAddress";

export const indexSubscriptionOrderingDefault:
  | Ordering<IndexSubscription_OrderBy>
  | undefined = undefined;
export const indexSubscriptionPagingDefault: SkipPaging = createSkipPaging({
  take: 10,
});

export const AccountIndexSubscriptionsDataGrid: FC<{
  network: Network;
  accountAddress: string;
}> = ({ network, accountAddress }) => {
  const [indexSubscriptionPaging, setIndexSubscriptionPaging] =
    useState<SkipPaging>(indexSubscriptionPagingDefault);
  const [indexSubscriptionOrdering, setIndexSubscriptionOrdering] = useState<
    Ordering<IndexSubscription_OrderBy> | undefined
  >(indexSubscriptionOrderingDefault);

  const indexSubscriptionQuery = sfSubgraph.useIndexSubscriptionsQuery({
    chainId: network.chainId,
    pagination: indexSubscriptionPaging,
    filter: {
      subscriber: accountAddress,
    },
    order: indexSubscriptionOrdering,
  });

  const columns: GridColDef[] = useMemo(
    () => [
      { field: "id", hide: true },
      {
        field: "token",
        headerName: "Token",
        flex: 1,
        renderCell: (params) => (
          <SuperTokenAddress network={network} address={params.value} />
        ),
      },
      {
        field: "publisher",
        flex: 1.5,
        renderCell: (params) => (
          <AccountAddress network={network} address={params.value} />
        ),
        renderHeader: ({ colDef }) => (
          <>
            <GridColumnHeaderTitle
              label="Publisher"
              columnWidth={colDef.computedWidth}
            />
            <InfoTooltipBtn
              dataCy={"publisher-tooltip"}
              title={
                <>
                  The creator of an index using the IDA - publishers may update
                  the index of subscribers and distribute funds to subscribers.{" "}
                  <AppLink
                    data-cy={"publisher-tooltip-link"}
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
      {
        field: "approved",
        flex: 0.75,
        renderCell: (params: GridRenderCellParams<boolean>) =>
          params.value ? "Yes" : "No",
        renderHeader: ({ colDef }) => (
          <>
            <GridColumnHeaderTitle
              label="Approved"
              columnWidth={colDef.computedWidth}
            />
            <InfoTooltipBtn
              dataCy={"approved-tooltip"}
              title="Indicates if account has claimed all past distributions and automatically claims all future distributions."
              iconSx={{ mb: 0, mr: 0.5 }}
            />
          </>
        ),
      },
      {
        field: "totalAmountReceivedUntilUpdatedAt",
        headerName: "Total Amount Received",
        sort: false,
        flex: 1.5,
        renderCell: (
          params: GridRenderCellParams<string, IndexSubscription>
        ) => (
          <>
            <EtherFormatted
              wei={calculateWeiAmountReceived(
                BigNumber.from(params.row.indexValueCurrent),
                BigNumber.from(params.row.totalAmountReceivedUntilUpdatedAt),
                BigNumber.from(params.row.indexValueUntilUpdatedAt),
                BigNumber.from(params.row.units)
              )}
            />
            &nbsp;
            <SuperTokenAddress
              network={network}
              address={params.row.token}
              format={(token) => token.symbol}
              formatLoading={() => ""}
            />
          </>
        ),
      },
      {
        field: "units",
        headerName: "Subscription Units",
        flex: 2,
        renderCell: (
          params: GridRenderCellParams<string, IndexSubscription>
        ) => {
          return (
            <>
              {params.value}&nbsp;
              {`(${calculatePoolPercentage(
                new Decimal(params.row.indexTotalUnits),
                new Decimal(params.row.units)
              )
                .toDP(2)
                .toString()}%)`}
            </>
          );
        },
      },
      {
        field: "details",
        headerName: "Details",
        flex: 0.5,
        sortable: false,
        renderCell: (cellParams) => (
          <IndexSubscriptionDetailsDialog
            network={network}
            indexSubscriptionId={cellParams.id.toString()}
          />
        ),
      },
    ],
    [network]
  );

  const rows: IndexSubscription[] = indexSubscriptionQuery.data
    ? indexSubscriptionQuery.data.data
    : [];

  return (
    <AppDataGrid
      columns={columns}
      rows={rows}
      queryResult={indexSubscriptionQuery}
      setPaging={setIndexSubscriptionPaging}
      ordering={indexSubscriptionOrdering}
      setOrdering={(x) => setIndexSubscriptionOrdering(x as any)}
    />
  );
};

export default AccountIndexSubscriptionsDataGrid;
