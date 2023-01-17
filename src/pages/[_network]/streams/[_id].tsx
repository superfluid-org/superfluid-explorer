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
  Stack,
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
import FlowingBalanceWithToken from "../../../components/FlowingBalanceWithToken";
import FlowRate from "../../../components/FlowRate";
import InfoTooltipBtn from "../../../components/InfoTooltipBtn";
import SkeletonAddress from "../../../components/skeletons/SkeletonAddress";
import StreamPeriodDataGrid from "../../../components/StreamPeriodDataGrid";
import SubgraphQueryLink from "../../../components/SubgraphQueryLink";
import SuperTokenAddress from "../../../components/SuperTokenAddress";
import TimeAgo from "../../../components/TimeAgo";
import IdContext from "../../../contexts/IdContext";
import { useNetworkContext } from "../../../contexts/NetworkContext";
import { Network } from "../../../redux/networks";
import { sfSubgraph } from "../../../redux/store";

const StreamPage: NextPage = () => {
  const network = useNetworkContext();
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
      <Stack direction="row" alignItems="center" gap={1}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.secondary">{network.displayName}</Typography>
          <Typography color="text.secondary">Streams</Typography>
          <Typography color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
            {streamId.substring(0, 6) + "..."}
          </Typography>
        </Breadcrumbs>
        <CopyLink localPath={`/${network.slugName}/streams/${streamId}`} />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: 1 }}
      >
        <Typography variant="h4" component="h1">
          Stream
        </Typography>
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
      </Stack>

      <Card elevation={2} sx={{ mt: 3 }}>
        <List>
          <ListItem divider>
            <ListItemText
              data-cy={"streamed-token"}
              secondary="Token"
              primary={
                stream ? (
                  <SuperTokenAddress network={network} address={stream.token} />
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
                    dataCy={"sender-address"}
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
                    dataCy={"receiver-address"}
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
              <ListItem>
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
              <ListItem>
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

      <Card elevation={2} sx={{ mt: 3 }}>
        <List
          data-cy={"flow-rate-list"}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              sm: "1fr",
              md: "1fr 1fr",
            },
          }}
        >
          <ListItem>
            <ListItemText
              data-cy={"current-flow-rate"}
              secondary={
                <>
                  Current Flow Rate
                  <InfoTooltipBtn
                    dataCy={"current-flow-rate-tooltip"}
                    title="Flow rate is the velocity of tokens being streamed."
                  />
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
          <ListItem>
            <ListItemText
              secondary="Total Amount Streamed"
              primary={
                stream ? (
                  <>
                    <FlowingBalanceWithToken
                      balance={stream.streamedUntilUpdatedAt}
                      balanceTimestamp={stream.updatedAtTimestamp}
                      flowRate={stream.currentFlowRate}
                      TokenChipProps={{
                        network,
                        tokenAddress: stream.token,
                      }}
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

      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
          Stream periods
          <InfoTooltipBtn
            dataCy={"stream-periods-tooltip"}
            title={
              <>
                The amount of tokens sent from sender to receiver in a stream
                until it is updated or deleted. For example, if I create a
                stream on day 1, update it on day 3, and delete it on day 5, I
                will have generated 2 distinct stream periods: one between
                creation and update, and another between the update and
                deletion.{" "}
                <AppLink
                  data-cy={"stream-periods-tooltip-link"}
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

        <Card elevation={2} data-cy={"stream-period-grid"}>
          <StreamPeriodDataGrid
            queryResult={streamPeriodListQuery}
            setPaging={setStreamPeriodPaging}
            ordering={streamPeriodOrdering}
            setOrdering={setStreamPeriodOrdering}
          />
        </Card>
      </Box>
    </Container>
  );
};
