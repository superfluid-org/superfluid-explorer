import {
  Box,
  Card,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Skeleton,
  Typography,
} from "@mui/material";
import {
  createSkipPaging,
  Ordering,
  SkipPaging,
  Stream,
  StreamPeriod_OrderBy,
} from "@superfluid-finance/sdk-core";
import { NextPage } from "next";
import Error from "next/error";
import { FC, useContext, useState } from "react";
import AccountAddress from "../../../components/AccountAddress";
import ClipboardCopy from "../../../components/ClipboardCopy";
import FlowingBalance from "../../../components/FlowingBalance";
import FlowRate from "../../../components/FlowRate";
import SkeletonAddress from "../../../components/skeletons/SkeletonAddress";
import StreamPeriodDataGrid from "../../../components/StreamPeriodDataGrid";
import SuperTokenAddress from "../../../components/SuperTokenAddress";
import IdContext from "../../../contexts/IdContext";
import NetworkContext from "../../../contexts/NetworkContext";
import { Network } from "../../../redux/networks";
import { sfSubgraph } from "../../../redux/store";

const StreamPage: NextPage = () => {
  const network = useContext(NetworkContext);
  const streamId = useContext(IdContext);

  return <StreamPageContent streamId={streamId} network={network} />;
};

export default StreamPage;

export const StreamPageContent: FC<{ streamId: string; network: Network }> = ({
  streamId,
  network,
}) => {
  const streamQuery = sfSubgraph.useStreamQuery({
    chainId: network.chainId,
    id: streamId,
  });

  const stream: Stream | null | undefined = streamQuery.data;

  const [streamPeriodPaging, setStreamPeriodPaging] = useState<SkipPaging>(
    createSkipPaging()
  );
  const [streamPeriodOrdering, setStreamPeriodOrdering] = useState<
    Ordering<StreamPeriod_OrderBy> | undefined
  >({
    orderBy: "startedAtTimestamp",
    orderDirection: "desc",
  });
  const streamPeriodListQuery = sfSubgraph.useStreamPeriodsQuery({
    chainId: network.chainId,
    filter: {
      stream: streamId,
    },
    pagination: streamPeriodPaging,
    order: streamPeriodOrdering,
  });

  if (
    !streamQuery.isUninitialized &&
    !streamQuery.isLoading &&
    !streamQuery.data
  ) {
    return <Error statusCode={404} />;
  }

  return (
    <Container component={Box} sx={{ my: 2, py: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h1">
            Stream
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Card elevation={2}>
            <List>
              <ListItem divider>
                <ListItemText
                  secondary="Token"
                  primary={
                    stream ? (
                      <SuperTokenAddress
                        network={network}
                        address={stream.token}
                      />
                    ) : (
                      <SkeletonAddress />
                    )
                  }
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  secondary="Sender"
                  primary={
                    stream ? (
                      <AccountAddress
                        network={network}
                        address={stream.sender}
                      />
                    ) : (
                      <SkeletonAddress />
                    )
                  }
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  secondary="Receiver"
                  primary={
                    stream ? (
                      <AccountAddress
                        network={network}
                        address={stream.receiver}
                      />
                    ) : (
                      <SkeletonAddress />
                    )
                  }
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  secondary="Current Flow Rate"
                  primary={
                    stream ? (
                      <FlowRate flowRate={stream.currentFlowRate} />
                    ) : (
                      <Skeleton sx={{ width: "125px" }} />
                    )
                  }
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  secondary="Total Amount Streamed"
                  primary={
                    stream ? (
                      <>
                        <FlowingBalance
                          {...{
                            balance: stream.streamedUntilUpdatedAt,
                            balanceTimestamp: stream.updatedAtTimestamp,
                            flowRate: stream.currentFlowRate,
                          }}
                        />&nbsp;
                        <SuperTokenAddress
                          network={network}
                          address={stream.token}
                          format={(token) => token.symbol}
                          formatLoading={() => ""}
                        />
                      </>
                    ) : (
                      <Skeleton sx={{ width: "125px" }} />
                    )
                  }
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  secondary="Created At"
                  primary={
                    stream ? (
                      new Date(stream.createdAtTimestamp * 1000).toDateString()
                    ) : (
                      <Skeleton sx={{ width: "100px" }} />
                    )
                  }
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  secondary="Subgraph ID"
                  primary={
                    <>
                      {streamId}
                      <ClipboardCopy copyText={streamId} />
                    </>
                  }
                />
              </ListItem>
            </List>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
            Stream periods
          </Typography>
          <Card elevation={2}>
            <StreamPeriodDataGrid
              queryResult={streamPeriodListQuery}
              setPaging={setStreamPeriodPaging}
              ordering={streamPeriodOrdering}
              setOrdering={setStreamPeriodOrdering}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
