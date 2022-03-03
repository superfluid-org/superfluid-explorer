import { FC, useMemo, useState } from "react";
import { Network } from "../redux/networks";
import {
  GridColDef,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import AccountAddress from "./AccountAddress";
import {
  createSkipPaging,
  Ordering,
  SkipPaging,
  Stream,
  Stream_OrderBy,
} from "@superfluid-finance/sdk-core";
import { sfSubgraph } from "../redux/store";
import { AppDataGrid } from "./AppDataGrid";
import { Grid, Typography } from "@mui/material";
import TimeAgo from "./TimeAgo";
import FlowingBalanceWithToken from "./FlowingBalanceWithToken";

export const NetworkStreams: FC<{ network: Network }> = ({ network }) => {
  const columns: GridColDef[] = useMemo(
    () => [
      { field: "id", type: "string", hide: true, sortable: false },
      {
        field: "createdAtTimestamp",
        headerName: "Created At",
        sortable: true,
        flex: 2,
        renderCell: (params) => <TimeAgo subgraphTime={params.value} />,
      },
      {
        field: "from-to",
        headerName: "Sender & Receiver",
        sortable: false,
        flex: 5,
        renderCell: (params: GridRenderCellParams<any, Stream>) => (
          <SenderReceiver
            network={network}
            fromAddress={params.row.sender}
            toAddress={params.row.receiver}
          />
        ),
      },
      {
        field: "token",
        headerName: "Token",
        flex: 5,
        sortable: false,
        renderCell: ({
          row: {
            token,
            streamedUntilUpdatedAt,
            updatedAtTimestamp,
            currentFlowRate,
          },
        }: GridRenderCellParams<any, Stream>) => (
          <TotalStreamed
            network={network}
            tokenAddress={token}
            balance={streamedUntilUpdatedAt}
            balanceTimestamp={updatedAtTimestamp}
            flowRate={currentFlowRate}
          />
        ),
      },
    ],
    [network]
  );

  const [ordering, setOrdering] = useState<
    Ordering<Stream_OrderBy> | undefined
  >(defaultStreamQueryOrdering);
  const [paging, setPaging] = useState<SkipPaging>(defaultStreamQueryPaging);

  const query = sfSubgraph.useStreamsQuery({
    chainId: network.chainId,
    order: ordering,
    pagination: paging,
  });

  const rows: Stream[] = query.data ? query.data.data : [];

  return (
    <AppDataGrid
      dataGridProps={{
        headerHeight: 0,
        components: {
          Header: () => (
            <Typography variant="subtitle2" sx={{ m: 1 }}>
              Latest Streams
            </Typography>
          ),
        },
      }}
      columns={columns}
      rows={rows}
      queryResult={query}
      setPaging={setPaging}
      ordering={ordering}
      setOrdering={(x: any) => setOrdering(x)}
    />
  );
};

export const defaultStreamQueryOrdering: Ordering<Stream_OrderBy> = {
  orderBy: "createdAtTimestamp",
  orderDirection: "desc",
};

export const defaultStreamQueryPaging: SkipPaging = createSkipPaging({
  take: 10,
});

const SenderReceiver: FC<{
  network: Network;
  fromAddress: string;
  toAddress: string;
}> = ({ network, fromAddress, toAddress }) => {
  return (
    <Grid container spacing={0} sx={{ lineHeight: "1.5" }}>
      <Grid container item xs={2}>
        <Grid item xs={12}>
          Sender:
        </Grid>
        <Grid item xs={12}>
          Receiver:
        </Grid>
      </Grid>
      <Grid container item xs={10}>
        <Grid item xs={12}>
          <AccountAddress network={network} address={fromAddress} />
        </Grid>
        <Grid item xs={12}>
          <AccountAddress network={network} address={toAddress} />
        </Grid>
      </Grid>
    </Grid>
  );
};

const TotalStreamed: FC<{
  network: Network;
  tokenAddress: string;
  balance: string;
  balanceTimestamp: number;
  flowRate: string;
}> = (props) => {
  return (
    <Grid container spacing={0} sx={{ lineHeight: "1.5" }}>
      <Grid item xs={12}>
        Total streamed:
      </Grid>
      <Grid item xs={12}>
        <FlowingBalanceWithToken {...props}  />
      </Grid>
    </Grid>
  );
};
