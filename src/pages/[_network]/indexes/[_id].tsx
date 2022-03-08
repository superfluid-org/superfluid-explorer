import { NextPage } from "next";
import { Network } from "../../../redux/networks";
import Error from "next/error";
import { FC, useContext, useState } from "react";
import { sfSubgraph } from "../../../redux/store";
import {
  createSkipPaging,
  Index,
  IndexSubscription_OrderBy,
  IndexUpdatedEvent_OrderBy,
  Ordering,
  SkipPaging,
} from "@superfluid-finance/sdk-core";
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
import AccountAddress from "../../../components/AccountAddress";
import SkeletonAddress from "../../../components/skeletons/SkeletonAddress";
import SuperTokenAddress from "../../../components/SuperTokenAddress";
import IndexUpdatedEventDataGrid from "../../../components/IndexUpdatedEventDataGrid";
import IndexSubscriptionDataGrid from "../../../components/IndexSubscriptionDataGrid";
import NetworkContext from "../../../contexts/NetworkContext";
import IdContext from "../../../contexts/IdContext";
import CopyClipboard from "../../../components/CopyClipboard";
import TimeAgo from "../../../components/TimeAgo";
import { ethers } from "ethers";
import CopyLink from "../../../components/CopyLink";
import { gql } from "graphql-request";
import SubgraphQueryLink from "../../../components/SubgraphQueryLink";
import EtherFormatted from "../../../components/EtherFormatted";

const IndexPage: NextPage = () => {
  const network = useContext(NetworkContext);
  const indexId = useContext(IdContext);

  return <IndexPageContent indexId={indexId} network={network} />;
};

export default IndexPage;

export const IndexPageContent: FC<{ indexId: string; network: Network }> = ({
  indexId,
  network,
}) => {
  const indexQuery = sfSubgraph.useIndexQuery({
    chainId: network.chainId,
    id: indexId,
  });

  const index: Index | null | undefined = indexQuery.data;

  const [indexUpdatedEventPaging, setIndexUpdatedEventPaging] =
    useState<SkipPaging>(
      createSkipPaging({
        take: 10,
      })
    );
  const [indexUpdatedEventPagingOrdering, setIndexUpdatedEventOrdering] =
    useState<Ordering<IndexUpdatedEvent_OrderBy> | undefined>({
      orderBy: "timestamp",
      orderDirection: "desc",
    });
  const indexUpdatedEventQuery = sfSubgraph.useIndexUpdatedEventsQuery({
    chainId: network.chainId,
    filter: {
      index: indexId.toLowerCase(),
    },
    pagination: indexUpdatedEventPaging,
    order: indexUpdatedEventPagingOrdering,
  });

  const [indexSubscriptionPaging, setIndexSubscriptionPaging] =
    useState<SkipPaging>(
      createSkipPaging({
        take: 10,
      })
    );
  const [indexSubscriptionPagingOrdering, setIndexSubscriptionOrdering] =
    useState<Ordering<IndexSubscription_OrderBy> | undefined>();
  const indexSubscriptionEventQuery = sfSubgraph.useIndexSubscriptionsQuery({
    chainId: network.chainId,
    filter: {
      index: indexId.toLowerCase(),
    },
    pagination: indexSubscriptionPaging,
    order: indexSubscriptionPagingOrdering,
  });

  if (
    !indexQuery.isUninitialized &&
    !indexQuery.isLoading &&
    !indexQuery.data
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
            <Typography color="text.secondary">Indexes</Typography>
            <Typography color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
              {indexId.substring(0, 6) + "..."}
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1">
            <Grid container alignItems="center">
              <Grid item sx={{ mx: 0.5 }}>
                Index
              </Grid>
              <CopyLink localPath={`/${network.slugName}/indexes/${indexId}`} />
              <SubgraphQueryLink
                network={network}
                query={gql`
                  query ($id: ID!) {
                    index(id: $id) {
                      indexId
                      indexValue
                      totalAmountDistributedUntilUpdatedAt
                      totalSubscriptionsWithUnits
                      totalUnits
                      totalUnitsApproved
                      totalUnitsPending
                    }
                  }
                `}
                variables={`{ "id": "${indexId.toLowerCase()}" }`}
              />
            </Grid>
          </Typography>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Card elevation={2}>
            <List>
              <ListItem divider>
                <ListItemText
                  secondary="Token"
                  primary={
                    index ? (
                      <SuperTokenAddress
                        network={network}
                        address={index.token}
                      />
                    ) : (
                      <SkeletonAddress />
                    )
                  }
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  secondary="Publisher"
                  primary={
                    index ? (
                      <AccountAddress
                        network={network}
                        address={index.publisher}
                      />
                    ) : (
                      <SkeletonAddress />
                    )
                  }
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  secondary="Index ID"
                  primary={
                    index ? index.indexId : <Skeleton sx={{ width: "20px" }} />
                  }
                />
              </ListItem>
              <Grid container>
                <Grid item xs={6}>
                  <ListItem divider>
                    <ListItemText
                      secondary="Last Updated At"
                      primary={
                        index ? (
                          <TimeAgo subgraphTime={index.updatedAtTimestamp} />
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
                        index ? (
                          <TimeAgo subgraphTime={index.createdAtTimestamp} />
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

        <Grid item xs={12} lg={6}>
          <Card elevation={2}>
            <List>
              <ListItem divider>
                <ListItemText
                  secondary="Total Units"
                  primary={
                    index ? (
                      index.totalUnits
                    ) : (
                      <Skeleton sx={{ width: "75px" }} />
                    )
                  }
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  secondary="Total Units Approved"
                  primary={
                    index ? (
                      index.totalUnitsApproved
                    ) : (
                      <Skeleton sx={{ width: "75px" }} />
                    )
                  }
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  secondary="Total Units Pending"
                  primary={
                    index ? (
                      index.totalUnitsPending
                    ) : (
                      <Skeleton sx={{ width: "75px" }} />
                    )
                  }
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  secondary="Total Amount Distributed"
                  primary={
                    index ? (
                      <>
                        <EtherFormatted
                          wei={index.totalAmountDistributedUntilUpdatedAt}
                        />
                        &nbsp;
                        <SuperTokenAddress
                          network={network}
                          address={index.token}
                          format={(token) => token.symbol}
                          formatLoading={() => ""}
                        />
                      </>
                    ) : (
                      <Skeleton sx={{ width: "75px" }} />
                    )
                  }
                />
              </ListItem>
            </List>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
            Distributions
          </Typography>
          <Card elevation={2}>
            <IndexUpdatedEventDataGrid
              index={index}
              queryResult={indexUpdatedEventQuery}
              setPaging={setIndexUpdatedEventPaging}
              ordering={indexUpdatedEventPagingOrdering}
              setOrdering={setIndexUpdatedEventOrdering}
            />
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
            Subscriptions
          </Typography>
          <Card elevation={2}>
            <IndexSubscriptionDataGrid
              network={network}
              queryResult={indexSubscriptionEventQuery}
              setPaging={setIndexSubscriptionPaging}
              ordering={indexSubscriptionPagingOrdering}
              setOrdering={setIndexSubscriptionOrdering}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
