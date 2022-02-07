import { FC, useContext, useMemo } from "react";
import { AppDataGrid } from "./AppDataGrid";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import {
  Index,
  IndexUpdatedEvent_OrderBy,
  Ordering,
  PagedResult,
  SkipPaging,
} from "@superfluid-finance/sdk-core";
import { IndexUpdatedEvent } from "@superfluid-finance/sdk-core";
import { BigNumber, ethers } from "ethers";
import TimeAgo from "./TimeAgo";
import SuperTokenAddress from "./SuperTokenAddress";
import { Network } from "../redux/networks";
import NetworkContext from "../contexts/NetworkContext";

interface Props {
  index: Index | null | undefined;
  queryResult: {
    isFetching: boolean;
    data?: PagedResult<IndexUpdatedEvent>;
  };
  setPaging: (paging: SkipPaging) => void;
  ordering: Ordering<IndexUpdatedEvent_OrderBy> | undefined;
  setOrdering: (ordering?: Ordering<IndexUpdatedEvent_OrderBy>) => void;
}

interface Distribution {
  id: string;
  totalUnitsApproved: string;
  totalUnitsPending: string;
  timestamp: number;
  distributionAmount: BigNumber;
}

const calculateDistributionAmount = (
  index: Index,
  event: IndexUpdatedEvent
): BigNumber => {
  return BigNumber.from(event.newIndexValue)
    .mul(index.totalUnits)
    .sub(BigNumber.from(event.oldIndexValue).mul(index.totalUnits));
};

const IndexUpdatedEventDataGrid: FC<Props> = ({
  index,
  queryResult,
  setPaging,
  ordering,
  setOrdering,
}) => {
  const network = useContext(NetworkContext);

  const columns: GridColDef[] = useMemo(
    () => [
      { field: "id", hide: true, sortable: false, flex: 1 },
      {
        field: "totalUnitsApproved",
        headerName: "Total Units Approved",
        sortable: true,
        flex: 1,
      },
      {
        field: "totalUnitsPending",
        headerName: "Total Units Pending",
        sortable: true,
        flex: 1,
      },
      {
        field: "timestamp",
        headerName: "Distribution Date",
        sortable: true,
        flex: 1,
        renderCell: (params) => <TimeAgo subgraphTime={params.value} />,
      },
      {
        field: "distributionAmount",
        headerName: "Distribution Amount",
        hide: false,
        sortable: false,
        flex: 1,
        renderCell: (params) => {
          return (
            <>
              {ethers.utils.formatEther(params.value)}&nbsp;
              {index && (
                <SuperTokenAddress
                  network={network}
                  address={index.token}
                  format={(token) => token.symbol}
                  formatLoading={() => ""}
                />
              )}
            </>
          );
        },
      },
    ],
    []
  );

  const rows: Distribution[] =
    queryResult.data && index
      ? queryResult.data.data.map((indexUpdatedEvent) => ({
          id: indexUpdatedEvent.id,
          distributionAmount: calculateDistributionAmount(
            index,
            indexUpdatedEvent
          ),
          timestamp: indexUpdatedEvent.timestamp,
          totalUnitsApproved: indexUpdatedEvent.totalUnitsApproved,
          totalUnitsPending: indexUpdatedEvent.totalUnitsPending,
        }))
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

export default IndexUpdatedEventDataGrid;
