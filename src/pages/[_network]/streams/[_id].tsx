import {
  Box,
  Breadcrumbs,
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
import { gql } from "graphql-request";
import { NextPage } from "next";
import Error from "next/error";
import { FC, useContext, useState } from "react";
import AccountAddress from "../../../components/AccountAddress";
import AppLink from "../../../components/AppLink";
import CopyLink from "../../../components/CopyLink";
import FlowingBalance from "../../../components/FlowingBalance";
import FlowRate from "../../../components/FlowRate";
import InfoTooltipBtn from "../../../components/InfoTooltipBtn";
import SkeletonAddress from "../../../components/skeletons/SkeletonAddress";
import StreamPeriodDataGrid from "../../../components/StreamPeriodDataGrid";
import SubgraphQueryLink from "../../../components/SubgraphQueryLink";
import SuperTokenAddress from "../../../components/SuperTokenAddress";
import TimeAgo from "../../../components/TimeAgo";
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
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="text.secondary">
              {network.displayName}
            </Typography>
            <Typography color="text.secondary">Streams</Typography>
            <Typography color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
              {streamId.substring(0, 6) + "..."}
            </Typography>
          </Breadcrumbs>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h4" component="h1">
            <Grid container alignItems="center">
              <Grid item sx={{ mx: 0.5 }}>
                Stream
              </Grid>
              <CopyLink
                localPath={`/${network.slugName}/streams/${streamId}`}
              />
              <SubgraphQueryLink
                network={network}
                query={gql`
                  query ($id: ID!) {
                    stream(id: $id) {
                      currentFlowRate
                      sender {
                        id
                      }
                      receiver {
                        id
                      }
                      token {
                        symbol
                      }
                      streamedUntilUpdatedAt
                    }
                  }
                `}
                variables={`{ "id": "${streamId.toLowerCase()}" }`}
              />
            </Grid>
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
              <Grid container>
                <Grid item xs={6}>
                  <ListItem divider>
                    <ListItemText
                      secondary="Last Updated At"
                      primary={
                        stream ? (
                          <TimeAgo subgraphTime={stream.updatedAtTimestamp} />
                        ) : (
                          <Skeleton sx={{ width: "80px" }} />
                        )
                      }
                    />
                  </ListItem>
                </Grid>
                <Grid item xs={6}>
                  <ListItem divider>
                    <ListItemText
                      secondary="Created At"
                      primary={
                        stream ? (
                          <TimeAgo subgraphTime={stream.createdAtTimestamp} />
                        ) : (
                          <Skeleton sx={{ width: "80px" }} />
                        )
                      }
                    />
                  </ListItem>
                </Grid>
              </Grid>
            </List>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card elevation={2}>
            <List>
              <ListItem divider>
                <ListItemText
                  secondary={
                    <>
                      Current Flow Rate
                      <InfoTooltipBtn title="Flow rate is the velocity of tokens being streamed." />
                    </>
                  }
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
                        />
                        &nbsp;
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
            </List>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
            Stream periods
            <InfoTooltipBtn
              title={
                <>
                  The amount of tokens sent from sender to receiver in a stream
                  until it is updated or deleted. For example, if I create a
                  stream on day 1, update it on day 3, and delete it on day 5, I
                  will have generated 2 distinct stream periods: one between
                  creation and update, and another between the update and
                  deletion.{" "}
                  <AppLink
                    href="https://docs.superfluid.finance/superfluid/protocol-developers/subgraph#higher-order-level-entities"
                    target="_blank"
                  >
                    Read more
                  </AppLink>
                </>
              }
              size={22}
            />
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
