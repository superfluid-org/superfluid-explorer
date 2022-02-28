import { FC, useMemo, useState } from "react";
import { Network } from "../redux/networks";
import { GridColDef } from "@mui/x-data-grid";
import SuperTokenAddress from "./SuperTokenAddress";
import AccountAddress from "./AccountAddress";
import FlowRate from "./FlowRate";
import { createSkipPaging, Ordering, SkipPaging, Stream, Stream_OrderBy } from "@superfluid-finance/sdk-core";
import FlowingBalance from "./FlowingBalance";
import { timeAgo } from "../utils/dateTime";
import { StreamDetailsDialog } from "./StreamDetails";
import { sfSubgraph } from "../redux/store";
import { AppDataGrid } from "./AppDataGrid";
import TimeAgo from "./TimeAgo";

export const incomingStreamOrderingDefault: Ordering<Stream_OrderBy> = {
  orderBy: "createdAtTimestamp",
  orderDirection: "desc"
};

export const incomingStreamPagingDefault = createSkipPaging({
  take: 10
});

const AccountStreamsIncomingDataGrid: FC<{ network: Network, accountAddress: string }> = ({
  network,
  accountAddress
}) => {
  const incomingStreamColumns: GridColDef[] = useMemo(() => [
    { field: 'id', type: "string", hide: true, sortable: false },
    {
      field: 'token',
      headerName: "Token",
      flex: 1.5,
      sortable: false,
      renderCell: (params) => (<SuperTokenAddress network={network} address={params.value} />)
    },
    {
      field: 'sender',
      headerName: "Sender",
      sortable: false,
      flex: 1.5,
      renderCell: (params) => (<AccountAddress network={network} address={params.value} />)
    },
    {
      field: 'currentFlowRate',
      headerName: "Flow Rate",
      flex: 2,
      sortable: true,
      renderCell: (params) => (<FlowRate flowRate={params.value} />)
    },
    {
      field: 'streamedUntilUpdatedAt',
      headerName: "Total Streamed",
      flex: 1.5,
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
      field: 'details', headerName: "Details", flex: 0.5, sortable: false, renderCell: (cellParams) => (
        <StreamDetailsDialog network={network} streamId={cellParams.id.toString()} />
      )
    }
  ], [network]);

  const [incomingStreamOrdering, setIncomingStreamOrdering] = useState<Ordering<Stream_OrderBy> | undefined>(incomingStreamOrderingDefault);
  const [incomingStreamPaging, setIncomingStreamPaging] = useState<SkipPaging>(incomingStreamPagingDefault);

  const incomingStreamsQuery = sfSubgraph.useStreamsQuery({
    chainId: network.chainId,
    filter: {
      receiver: accountAddress
    },
    pagination: incomingStreamPaging,
    order: incomingStreamOrdering
  });

  const incomingStreamRows: Stream[] = incomingStreamsQuery.data ? incomingStreamsQuery.data.data : [];

  return <AppDataGrid columns={incomingStreamColumns} rows={incomingStreamRows} queryResult={incomingStreamsQuery}
    setPaging={setIncomingStreamPaging} ordering={incomingStreamOrdering}
    setOrdering={(x: any) => setIncomingStreamOrdering(x)} />
}

export default AccountStreamsIncomingDataGrid;

