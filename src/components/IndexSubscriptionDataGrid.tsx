import { FC, useMemo } from "react";
import { AppDataGrid } from "./AppDataGrid";
import {
  GridColDef,
  GridColumnHeaderTitle,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import {
  IndexSubscription,
  IndexSubscription_OrderBy,
  Ordering,
  PagedResult,
  SkipPaging,
} from "@superfluid-finance/sdk-core";
import { IndexSubscriptionDetailsDialog } from "./IndexSubscriptionDetails";
import { Network } from "../redux/networks";
import calculateWeiAmountReceived from "../logic/calculateWeiAmountReceived";
import { BigNumber } from "ethers";
import calculatePoolPercentage from "../logic/calculatePoolPercentage";
import Decimal from "decimal.js";
import TimeAgo from "./TimeAgo";
import InfoTooltipBtn from "./InfoTooltipBtn";
import { Button } from "@mui/material";
import BalanceWithToken from "./BalanceWithToken";

interface Props {
  network: Network;
  queryResult: {
    isFetching: boolean;
    data?: PagedResult<IndexSubscription>;
  };
  setPaging: (paging: SkipPaging) => void;
  ordering: Ordering<IndexSubscription_OrderBy> | undefined;
  setOrdering: (ordering?: Ordering<IndexSubscription_OrderBy>) => void;
}

const IndexSubscriptionDataGrid: FC<Props> = ({
  network,
  queryResult,
  setPaging,
  ordering,
  setOrdering,
}) => {
  const columns: GridColDef[] = useMemo(
    () => [
      { field: "id", hide: true },
      {
        field: "createdAtTimestamp",
        headerName: "Created At",
        sortable: true,
        flex: 0.5,
        renderCell: (params: GridRenderCellParams<number>) => params.value ? (
          <TimeAgo subgraphTime={params.value} /> 
        ) : null,
      },
      {
        field: "approved",
        headerName: "Approved",
        flex: 0.5,
        renderCell: (params: GridRenderCellParams<boolean>) => (
          <>{params.value ? "Yes" : "No"}</>
        ),
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
        sortable: false,
        flex: 1.5,
        renderCell: (
          params: GridRenderCellParams<string, IndexSubscription>
        ) => (
          <BalanceWithToken
            wei={calculateWeiAmountReceived(
              BigNumber.from(params.row.indexValueCurrent),
              BigNumber.from(params.row.totalAmountReceivedUntilUpdatedAt),
              BigNumber.from(params.row.indexValueUntilUpdatedAt),
              BigNumber.from(params.row.units)
            )}
            network={network}
            tokenAddress={params.row.token}
          />
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
          >
            {(onClick) => (
              <Button variant="outlined" onClick={onClick}>
                Details
              </Button>
            )}
          </IndexSubscriptionDetailsDialog>
        ),
      },
    ],
    [network]
  );

  const rows: IndexSubscription[] = queryResult.data
    ? queryResult.data.data
    : [];

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

export default IndexSubscriptionDataGrid;
