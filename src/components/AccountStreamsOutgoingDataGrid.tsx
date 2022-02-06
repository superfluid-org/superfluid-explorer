import { FC, useMemo, useState } from "react";
import { Network } from "../redux/networks";
import { createSkipPaging, Ordering, SkipPaging, Stream, Stream_OrderBy } from "@superfluid-finance/sdk-core";
import { GridColDef } from "@mui/x-data-grid";
import SuperTokenAddress from "./SuperTokenAddress";
import AccountAddress from "./AccountAddress";
import FlowRate from "./FlowRate";
import FlowingBalance from "./FlowingBalance";
import { timeAgo } from "../utils/dateTime";
import { StreamDetailsDialog } from "./StreamDetails";
import { sfSubgraph } from "../redux/store";
import { AppDataGrid } from "./AppDataGrid";
import TimeAgo from "./TimeAgo";

export const outgoingStreamOrderingDefault: Ordering<Stream_OrderBy> = {
  orderBy: "createdAtTimestamp",
  orderDirection: "desc"
};

export const outgoingStreamPagingDefault = createSkipPaging({
  take: 10
});

const AccountStreamsOutgoingDataGrid: FC<{ network: Network, accountAddress: string }> = ({
  network,
  accountAddress
}) => {
  const [outgoingStreamOrdering, setOutgoingStreamOrdering] = useState<Ordering<Stream_OrderBy> | undefined>(outgoingStreamOrderingDefault);
  const [outgoingStreamPaging, setOutgoingStreamPaging] = useState<SkipPaging>(outgoingStreamPagingDefault);

  const outgoingStreamColumns: GridColDef[] = useMemo(() => [
    { field: 'id', hide: true, flex: 1 },
    {
      field: 'token',
      headerName: "Token",
      sortable: false,
      flex: 1,
      renderCell: (params) => (<SuperTokenAddress network={network} address={params.value} />)
    },
    {
      field: 'receiver',
      headerName: "Receiver",
      sortable: false,
      flex: 1,
      renderCell: (params) => (<AccountAddress network={network} address={params.value} />)
    },
    {
      field: 'currentFlowRate',
      headerName: "Flow Rate",
      sortable: true,
      flex: 1,
      renderCell: (params) => (<FlowRate flowRate={params.value} />)
    },
    {
      field: 'streamedUntilUpdatedAt',
      headerName: "Total Streamed",
      flex: 1,
      sortable: false,
      renderCell: (params) => {
        const stream = params.row as Stream;
        return (<FlowingBalance
          {...{
            balance: stream.streamedUntilUpdatedAt,
            balanceTimestamp: stream.updatedAtTimestamp,
            flowRate: stream.currentFlowRate
          }}
        />)
      }
    },
    {
      field: 'createdAtTimestamp',
      headerName: "Created At",
      sortable: true,
      flex: 1,
      renderCell: (params) => <TimeAgo subgraphTime={params.value} />
    },
    {
      field: 'details', headerName: "Details", flex: 1, sortable: false, renderCell: (cellParams) => (
        <StreamDetailsDialog network={network} streamId={cellParams.id.toString()} />
      )
    }
  ], [network]);

  const outgoingStreamsQuery = sfSubgraph.useStreamsQuery({
    chainId: network.chainId,
    filter: {
      sender: accountAddress
    },
    pagination: outgoingStreamPaging,
    order: outgoingStreamOrdering
  });

  const outgoingStreamRows: Stream[] = outgoingStreamsQuery.data ? outgoingStreamsQuery.data.data : [];

  return <AppDataGrid columns={outgoingStreamColumns} rows={outgoingStreamRows} queryResult={outgoingStreamsQuery}
    setPaging={setOutgoingStreamPaging} ordering={outgoingStreamOrdering}
    setOrdering={(x: any) => setOutgoingStreamOrdering(x)} />
}

export default AccountStreamsOutgoingDataGrid;