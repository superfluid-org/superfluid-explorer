import { GridColDef, GridColumnHeaderTitle } from "@mui/x-data-grid";
import {
  createSkipPaging,
  Ordering,
  SkipPaging,
  Stream,
  Stream_OrderBy,
} from "@superfluid-finance/sdk-core";
import { FC, ReactElement, useState } from "react";
import { Network } from "../redux/networks";
import { sfSubgraph } from "../redux/store";
import AccountAddress from "./AccountAddress";
import { AppDataGrid } from "./AppDataGrid";
import AppLink from "./AppLink";
import FlowRate from "./FlowRate";
import HelpAlert from "./HelpAlert";
import InfoTooltipBtn from "./InfoTooltipBtn";
import { StreamDetailsDialog } from "./StreamDetails";

interface Props {
  network: Network;
  tokenAddress: string;
}

const SuperTokenStreams: FC<Props> = ({
  network,
  tokenAddress,
}): ReactElement => {
  const [streamPaging, setStreamPaging] = useState<SkipPaging>(
    createSkipPaging({
      take: 10,
    })
  );
  const [streamOrdering, setStreamOrdering] = useState<
    Ordering<Stream_OrderBy> | undefined
  >({
    orderBy: "createdAtTimestamp",
    orderDirection: "desc",
  });
  const streamQuery = sfSubgraph.useStreamsQuery({
    chainId: network.chainId,
    pagination: streamPaging,
    filter: {
      token: tokenAddress,
    },
    order: streamOrdering,
  });

  const streamColumns: GridColDef[] = [
    { field: "id", hide: true, flex: 1 },
    {
      field: "sender",
      headerName: "Sender",
      sortable: false,
      flex: 1,
      renderCell: (params) => (
        <AccountAddress network={network} address={params.value} />
      ),
    },
    {
      field: "receiver",
      headerName: "Receiver",
      sortable: false,
      flex: 1,
      renderCell: (params) => (
        <AccountAddress network={network} address={params.value} />
      ),
    },
    {
      field: "currentFlowRate",
      sortable: true,
      flex: 1,
      renderCell: (params) => <FlowRate flowRate={params.value} />,
      renderHeader: ({ colDef }) => (
        <>
          <GridColumnHeaderTitle
            label="Flow Rate"
            columnWidth={colDef.computedWidth}
          />
          <InfoTooltipBtn
            dataCy={"flow-rate-tooltip"}
            title="Flow rate is the velocity of tokens being streamed."
            iconSx={{ mb: 0, mr: 0.5 }}
          />
        </>
      ),
    },
    {
      field: "createdAtTimestamp",
      headerName: "Created At",
      sortable: true,
      flex: 1,
      renderCell: (params) => new Date(params.value * 1000).toLocaleString(),
    },
    {
      field: "details",
      headerName: "Details",
      flex: 1,
      sortable: false,
      renderCell: (cellParams) => (
        <StreamDetailsDialog
          network={network}
          streamId={cellParams.id.toString()}
        />
      ),
    },
  ];

  const rows: Stream[] = streamQuery.data ? streamQuery.data.data : [];

  return (
    <>
      <HelpAlert dataCy={"streams-help-alert"} sx={{ mb: 3 }}>
        Stream represents super token flow between a sender and a receiver.
        Sender accounts can create, update, and delete streams, while receiver
        accounts can delete streams. However, a pair of addresses may only have
        one stream open per token (but this stream may be updated at any time by
        the sender).{" "}
        <AppLink
          data-cy={"streams-help-alert-link"}
          href="https://docs.superfluid.finance/superfluid/protocol-developers/interactive-tutorials/money-streaming-1"
          target="_blank"
        >
          Read more
        </AppLink>
      </HelpAlert>

      <AppDataGrid
        columns={streamColumns}
        rows={rows}
        queryResult={streamQuery}
        setPaging={setStreamPaging}
        ordering={streamOrdering}
        setOrdering={(x: any) => setStreamOrdering(x)}
      />
    </>
  );
};

export default SuperTokenStreams;
