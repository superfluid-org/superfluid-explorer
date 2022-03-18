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
  Index,
  IndexSubscription_OrderBy,
  IndexUpdatedEvent_OrderBy,
  Ordering,
  SkipPaging,
} from "@superfluid-finance/sdk-core";
import { gql } from "graphql-request";
import { NextPage } from "next";
import Error from "next/error";
import { FC, useContext, useState } from "react";
import AccountAddress from "../../../components/AccountAddress";
import AppLink from "../../../components/AppLink";
import CopyLink from "../../../components/CopyLink";
import EtherFormatted from "../../../components/EtherFormatted";
import IndexSubscriptionDataGrid from "../../../components/IndexSubscriptionDataGrid";
import IndexUpdatedEventDataGrid from "../../../components/IndexUpdatedEventDataGrid";
import InfoTooltipBtn from "../../../components/InfoTooltipBtn";
import SkeletonAddress from "../../../components/skeletons/SkeletonAddress";
import SubgraphQueryLink from "../../../components/SubgraphQueryLink";
import SuperTokenAddress from "../../../components/SuperTokenAddress";
import TimeAgo from "../../../components/TimeAgo";
import IdContext from "../../../contexts/IdContext";
import NetworkContext from "../../../contexts/NetworkContext";
import { Network } from "../../../redux/networks";
import { sfSubgraph } from "../../../redux/store";

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
    <Container data-cy={"index-page-container"} component={Box} sx={{ my: 2, py: 2 }}>
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
            <List data-cy={"index-general-info"}>
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
                  secondary={
                    <>
                      Publisher
                      <InfoTooltipBtn
                        dataCy={"publisher-tooltip"}
                        title={
                          <>
                            The creator of an index using the IDA - publishers
                            may update the index of subscribers and distribute
                            funds to subscribers.{" "}
                            <AppLink
                              href="https://docs.superfluid.finance/superfluid/protocol-developers/interactive-tutorials/instant-distribution"
                              target="_blank"
                            >
                              Read more
                            </AppLink>
                          </>
                        }
                      />
                    </>
                  }
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
              <ListItem data-cy={"index-id"} divider>
                <ListItemText
                  secondary={
                    <>
                      Index ID
                      <InfoTooltipBtn
                        dataCy={"index-id-tooltip"}
                        title={
                          <>
                            The ID which is associated with each index in the
                            instant distribution agreement - this number is
                            created when a publisher creates an index.{" "}
                            <AppLink
                              href="https://docs.superfluid.finance/superfluid/protocol-developers/interactive-tutorials/instant-distribution"
                              target="_blank"
                            >
                              Read more
                            </AppLink>
                          </>
                        }
                      />
                    </>
                  }
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
              <ListItem data-cy={"total-units"} divider>
                <ListItemText
                  secondary={
                    <>
                      Total Units
                      <InfoTooltipBtn dataCy={"total-units-tooltip"} title="The sum of total pending and approved units issued to subscribers." />
                    </>
                  }
                  primary={
                    index ? (
                      index.totalUnits
                    ) : (
                      <Skeleton sx={{ width: "75px" }} />
                    )
                  }
                />
              </ListItem>
              <ListItem data-cy={"total-units-approved"} divider>
                <ListItemText
                  secondary={
                    <>
                      Total Units Approved
                      <InfoTooltipBtn dataCy={"total-units-approved-tooltip"} title="Units that have claimed all past distributions and will automatically claim all future distributions." />
                    </>
                  }
                  primary={
                    index ? (
                      index.totalUnitsApproved
                    ) : (
                      <Skeleton sx={{ width: "75px" }} />
                    )
                  }
                />
              </ListItem>
              <ListItem data-cy={"total-units-pending"} divider>
                <ListItemText
                  secondary={
                    <>
                      Total Units Pending
                      < InfoTooltipBtn dataCy={"total-units-pending-tooltip"} title="Units that have not claimed their distribution yet." />
                    </>
                  }
                  primary={
                    index ? (
                      index.totalUnitsPending
                    ) : (
                      <Skeleton sx={{ width: "75px" }} />
                    )
                  }
                />
              </ListItem>
              <ListItem data-cy={"total-amount-distributed"} divider>
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
            <InfoTooltipBtn
              dataCy={"distributions-tooltip"}
              size={22}
              title={
                <>
                  An event in which super tokens are distributed to the entire
                  pool of subscribers for a given index using the Superfluid
                  IDA.{" "}
                  <AppLink
                    data-cy={"distributions-tooltip-link"}
                    href="https://docs.superfluid.finance/superfluid/protocol-developers/interactive-tutorials/instant-distribution"
                    target="_blank"
                  >
                    Read more
                  </AppLink>
                </>
              }
            />
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
            <InfoTooltipBtn
              dataCy={"subscriptions-tooltip"}
              size={22}
              title={
                <>
                  Accounts that have received units within the Index.
                  Subscribers will receive distributed funds based on the
                  portion of units they own in and index.{" "}
                  <AppLink
                    data-cy={"subscriptions-tooltip-link"}
                    href="https://docs.superfluid.finance/superfluid/protocol-developers/interactive-tutorials/instant-distribution"
                    target="_blank"
                  >
                    Read more
                  </AppLink>
                </>
              }
            />
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
