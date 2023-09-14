import { FC, useMemo } from "react";
import { AppDataGrid } from "./AppDataGrid";
import {
  GridColDef,
  GridColumnHeaderTitle,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import {
  Ordering,
  PagedResult,
  SkipPaging,
} from "@superfluid-finance/sdk-core";
import { PoolMemberDetailsDialog } from "./PoolMemberDetails";
import { Network } from "../redux/networks";
import calculateWeiAmountReceived from "../logic/calculateWeiAmountReceived";
import { BigNumber } from "ethers";
import calculatePoolPercentage from "../logic/calculatePoolPercentage";
import Decimal from "decimal.js";
import TimeAgo from "./TimeAgo";
import InfoTooltipBtn from "./InfoTooltipBtn";
import { Button } from "@mui/material";
import BalanceWithToken from "./BalanceWithToken";
import { PoolMember_OrderBy } from "../gda-subgraph/.graphclient";
import { PoolMember } from "../gda-subgraph/entities/poolMember/poolMember";

interface Props {
  network: Network;
  queryResult: {
    isFetching: boolean;
    data?: PagedResult<PoolMember>;
  };
  setPaging: (paging: SkipPaging) => void;
  ordering: Ordering<PoolMember_OrderBy> | undefined;
  setOrdering: (ordering?: Ordering<PoolMember_OrderBy>) => void;
}

const PoolMemberDataGrid: FC<Props> = ({
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
        renderCell: (params: GridRenderCellParams<number>) =>
          params.value ? <TimeAgo subgraphTime={params.value} /> : null,
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
        field: "totalAmountClaimed",
        headerName: "Total Amount Claimed",
        sortable: false,
        flex: 1.5,
        renderCell: (params: GridRenderCellParams<string, PoolMember>) => (
          /* <TableCell data-cy={"amount-received"} >
                <BalanceWithToken
                  network={network}
                  // Actual index calculation but not possible with pool since we don't have exposed pool value and other parameters to calculate the recevied amount
                  wei={calculateWeiAmountReceived(
                    BigNumber.from(subscription.indexValueCurrent),
                    BigNumber.from(
                      subscription.totalAmountReceivedUntilUpdatedAt
                    ),
                    BigNumber.from(subscription.indexValueUntilUpdatedAt),
                    BigNumber.from(subscription.units)
                  )}
                />
              </TableCell> */
          <BalanceWithToken
            network={network}
            tokenAddress={params.row.token}
            wei={BigNumber.from(params.row.totalAmountClaimed)}
          />
        ),
      },
      {
        field: "units",
        headerName: "Member Units",
        flex: 2,
        renderCell: (params: GridRenderCellParams<string, PoolMember>) => {
          return (
            <>
              {params.value}&nbsp;
              {`(${calculatePoolPercentage(
                new Decimal(params.row.poolTotalUnits),
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
          <PoolMemberDetailsDialog
            network={network}
            poolMemberId={cellParams.id.toString()}
          >
            {(onClick) => (
              <Button variant="outlined" onClick={onClick}>
                Details
              </Button>
            )}
          </PoolMemberDetailsDialog>
        ),
      },
    ],
    [network]
  );

  const rows: PoolMember[] = queryResult.data ? queryResult.data.data : [];

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

export default PoolMemberDataGrid;
