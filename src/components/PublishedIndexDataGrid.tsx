import { FC, useMemo } from "react";
import { AppDataGrid } from "./AppDataGrid";
import { GridColDef } from "@mui/x-data-grid";
import {
  Index,
  Ordering,
  PagedResult,
  SkipPaging,
  Index_OrderBy,
} from "@superfluid-finance/sdk-core";
import { IndexPublicationDetailsDialog } from "./IndexPublicationDetails";
import SuperTokenAddress from "./SuperTokenAddress";
import { Network } from "../redux/networks";
import { timeAgo } from "../utils/dateTime";
import TimeAgo from "./TimeAgo";
import { ethers } from "ethers";
import AccountAddress from "./AccountAddress";
import EtherFormatted from "./EtherFormatted";

interface Props {
  network: Network;
  queryResult: {
    isFetching: boolean;
    data?: PagedResult<Index>;
  };
  setPaging: (paging: SkipPaging) => void;
  ordering: Ordering<Index_OrderBy> | undefined;
  setOrdering: (ordering?: Ordering<Index_OrderBy>) => void;
  // columnsToHide: string[];
}

const PublishedIndexDataGrid: FC<Props> = ({
  network,
  queryResult,
  setPaging,
  ordering,
  setOrdering,
}) => {
  const rows: Index[] = queryResult.data ? queryResult.data.data : [];

  const columns: GridColDef[] = useMemo(
    () => [
      { field: "id", hide: true, flex: 1 },
      {
        field: "createdAtTimestamp",
        headerName: "Created At",
        sortable: true,
        flex: 0.5,
        renderCell: (params) => <TimeAgo subgraphTime={params.value} />,
      },
      {
        field: "publisher",
        headerName: "Publisher",
        flex: 1.5,
        renderCell: (params) => (
          <AccountAddress network={network} address={params.value} />
        ),
      },
      {
        field: "indexId",
        headerName: "Index ID",
        flex: 0.5,
      },
      {
        field: "totalAmountDistributedUntilUpdatedAt",
        headerName: "Total Amount Distributed",
        sortable: true,
        flex: 1.5,
        renderCell: (params) => (
          <>
            <EtherFormatted wei={params.value} />
            &nbsp;
            <SuperTokenAddress
              network={network}
              address={(params.row as Index).token}
              format={(token) => token.symbol}
              formatLoading={() => ""}
            />
          </>
        ),
      },
      {
        field: "details",
        headerName: "Details",
        flex: 0.5,
        sortable: false,
        renderCell: (cellParams) => (
          <IndexPublicationDetailsDialog
            network={network}
            indexId={cellParams.id.toString()}
          />
        ),
      },
    ],
    [network]
  );

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

export default PublishedIndexDataGrid;
