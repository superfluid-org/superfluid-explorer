import { GridColDef, GridColumnHeaderTitle } from "@mui/x-data-grid";
import {
  createSkipPaging,
  Ordering,
  SkipPaging,
  Stream,
  Stream_OrderBy,
} from "@superfluid-finance/sdk-core";
import { FC, useMemo, useState } from "react";
import { Network } from "../redux/networks";
import { sfSubgraph } from "../redux/store";
import AccountAddress from "./AccountAddress";
import { AppDataGrid } from "./AppDataGrid";
import FlowingBalance from "./FlowingBalance";
import FlowRate from "./FlowRate";
import InfoTooltipBtn from "./InfoTooltipBtn";
import { StreamDetailsDialog } from "./StreamDetails";
import SuperTokenAddress from "./SuperTokenAddress";
import TimeAgo from "./TimeAgo";

export const incomingStreamOrderingDefault: Ordering<Stream_OrderBy> = {
  orderBy: "createdAtTimestamp",
  orderDirection: "desc",
};

export const incomingStreamPagingDefault = createSkipPaging({
  take: 10,
});

const AccountStreamsIncomingDataGrid: FC<{
  network: Network;
  accountAddress: string;
}> = ({ network, accountAddress }) => {
  const incomingStreamColumns: GridColDef[] = useMemo(
    () => [
      { field: "id", type: "string", hide: true, sortable: false },
      {
        field: "token",
        headerName: "Token",
        flex: 1.5,
        sortable: false,
        renderCell: (params) => (
          <SuperTokenAddress network={network} address={params.value} />
        ),
      },
      {
        field: "sender",
        headerName: "Sender",
        sortable: false,
        flex: 1.5,
        renderCell: (params) => (
          <AccountAddress network={network} address={params.value} />
        ),
      },
      {
        field: "currentFlowRate",
        flex: 2,
        sortable: true,
        renderCell: (params) => <FlowRate flowRate={params.value} />,
        renderHeader: ({ colDef }) => (
          <>
            <GridColumnHeaderTitle
              label="Flow Rate"
              columnWidth={colDef.computedWidth}
            />
            <InfoTooltipBtn
              title="Flow rate is the velocity of tokens being streamed."
              iconSx={{ mb: 0, mr: 0.5 }}
            />
          </>
        ),
      },
      {
        field: "streamedUntilUpdatedAt",
        headerName: "Total Streamed",
        flex: 1.5,
        sortable: false,
        renderCell: (params) => {
          const stream = params.row as Stream;
          return (
            <FlowingBalance
              {...{
                balance: stream.streamedUntilUpdatedAt,
                balanceTimestamp: stream.updatedAtTimestamp,
                flowRate: stream.currentFlowRate,
              }}
            />
          );
        },
      },
      {
        field: "createdAtTimestamp",
        headerName: "Created At",
        sortable: true,
        flex: 1,
        renderCell: (params) => <TimeAgo subgraphTime={params.value} />,
      },
      {
        field: "details",
        headerName: "Details",
        flex: 0.5,
        sortable: false,
        renderCell: (cellParams) => (
          <StreamDetailsDialog
            network={network}
            streamId={cellParams.id.toString()}
          />
        ),
      },
    ],
    [network]
  );

  const [incomingStreamOrdering, setIncomingStreamOrdering] = useState<
    Ordering<Stream_OrderBy> | undefined
  >(incomingStreamOrderingDefault);
  const [incomingStreamPaging, setIncomingStreamPaging] = useState<SkipPaging>(
    incomingStreamPagingDefault
  );

  const incomingStreamsQuery = sfSubgraph.useStreamsQuery({
    chainId: network.chainId,
    filter: {
      receiver: accountAddress,
    },
    pagination: incomingStreamPaging,
    order: incomingStreamOrdering,
  });

  const incomingStreamRows: Stream[] = incomingStreamsQuery.data
    ? incomingStreamsQuery.data.data
    : [];

  return (
    <AppDataGrid
      columns={incomingStreamColumns}
      rows={incomingStreamRows}
      queryResult={incomingStreamsQuery}
      setPaging={setIncomingStreamPaging}
      ordering={incomingStreamOrdering}
      setOrdering={(x: any) => setIncomingStreamOrdering(x)}
    />
  );
};

export default AccountStreamsIncomingDataGrid;
