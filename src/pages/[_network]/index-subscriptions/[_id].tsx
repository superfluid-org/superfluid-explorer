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
import { GridColDef } from "@mui/x-data-grid";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import {
  createSkipPaging,
  Index,
  IndexSubscription,
  IndexUpdatedEvent,
  IndexUpdatedEvent_OrderBy,
  Ordering,
  SkipPaging,
  SubscriptionUnitsUpdatedEvent,
  SubscriptionUnitsUpdatedEvent_OrderBy,
} from "@superfluid-finance/sdk-core";
import Decimal from "decimal.js";
import { BigNumber, BigNumberish } from "ethers";
import { gql } from "graphql-request";
import _ from "lodash";
import { NextPage } from "next";
import Error from "next/error";
import { FC, useContext, useEffect, useMemo, useState } from "react";
import AccountAddress from "../../../components/AccountAddress";
import { AppDataGrid } from "../../../components/AppDataGrid";
import AppLink from "../../../components/AppLink";
import BalanceWithToken from "../../../components/BalanceWithToken";
import CopyLink from "../../../components/CopyLink";
import EtherFormatted from "../../../components/EtherFormatted";
import InfoTooltipBtn from "../../../components/InfoTooltipBtn";
import SkeletonAddress from "../../../components/skeletons/SkeletonAddress";
import SubgraphQueryLink from "../../../components/SubgraphQueryLink";
import SubscriptionUnitsUpdatedEventDataGrid from "../../../components/SubscriptionUnitsUpdatedEventDataGrid";
import SuperTokenAddress from "../../../components/SuperTokenAddress";
import TimeAgo from "../../../components/TimeAgo";
import IdContext from "../../../contexts/IdContext";
import NetworkContext from "../../../contexts/NetworkContext";
import calculatePoolPercentage from "../../../logic/calculatePoolPercentage";
import calculateWeiAmountReceived from "../../../logic/calculateWeiAmountReceived";
import { Network } from "../../../redux/networks";
import { sfSubgraph } from "../../../redux/store";

const IndexSubscriptionPage: NextPage = () => {
  const network = useContext(NetworkContext);
  const indexSubscriptionId = useContext(IdContext);

  return (
    <IndexSubscriptionPageContent
      indexSubscriptionId={indexSubscriptionId}
      network={network}
    />
  );
};

export default IndexSubscriptionPage;

export const IndexSubscriptionPageContent: FC<{
  indexSubscriptionId: string;
  network: Network;
}> = ({ indexSubscriptionId, network }) => {
  const indexSubscriptionQuery = sfSubgraph.useIndexSubscriptionQuery({
    chainId: network.chainId,
    id: indexSubscriptionId,
  });

  const indexSubscription: IndexSubscription | undefined | null =
    indexSubscriptionQuery.data;

  const indexQuery = sfSubgraph.useIndexQuery(
    indexSubscription
      ? {
          chainId: network.chainId,
          id: indexSubscription.index,
        }
      : skipToken
  );

  const index: Index | undefined | null = indexQuery.data;

  const [
    subscriptionUnitsUpdatedEventPaging,
    setSubscriptionUnitsUpdatedEventPaging,
  ] = useState<SkipPaging>(
    createSkipPaging({
      take: 10,
    })
  );
  const [
    subscriptionUnitsUpdatedEventPagingOrdering,
    setSubscriptionUnitsUpdatedEventOrdering,
  ] = useState<Ordering<SubscriptionUnitsUpdatedEvent_OrderBy> | undefined>({
    orderBy: "timestamp",
    orderDirection: "desc",
  });
  const subscriptionUnitsUpdatedEventQuery =
    sfSubgraph.useSubscriptionUnitsUpdatedEventsQuery({
      chainId: network.chainId,
      filter: {
        subscription: indexSubscriptionId.toLowerCase(),
      },
      pagination: subscriptionUnitsUpdatedEventPaging,
      order: subscriptionUnitsUpdatedEventPagingOrdering,
    });

  const [poolPercentage, setPoolPercentage] = useState<Decimal | undefined>();
  const [totalWeiAmountReceived, setTotalWeiAmountReceived] = useState<
    BigNumberish | undefined
  >();

  useEffect(() => {
    if (index && indexSubscription) {
      setPoolPercentage(
        calculatePoolPercentage(
          new Decimal(indexSubscription.indexTotalUnits),
          new Decimal(indexSubscription.units)
        )
      );

      setTotalWeiAmountReceived(
        calculateWeiAmountReceived(
          BigNumber.from(index.indexValue),
          BigNumber.from(indexSubscription.totalAmountReceivedUntilUpdatedAt),
          BigNumber.from(indexSubscription.indexValueUntilUpdatedAt),
          BigNumber.from(indexSubscription.units)
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexSubscription && index]);

  if (
    !indexQuery.isUninitialized &&
    !indexQuery.isLoading &&
    !indexQuery.data
  ) {
    return <Error statusCode={404} />;
  }

  return (
    <Container
      data-cy={"index-subscription-container"}
      component={Box}
      sx={{ my: 2, py: 2 }}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.secondary">
            {network && network.displayName}
          </Typography>
          <Typography color="text.secondary">Index Subscriptions</Typography>
          <Typography color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
            {indexSubscriptionId.substring(0, 6) + "..."}
          </Typography>
        </Breadcrumbs>
        <CopyLink
          localPath={`/${network.slugName}/index-subscriptions/${indexSubscriptionId}`}
        />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: 1 }}
      >
        <Typography variant="h4" component="h1">
          Index Subscription
        </Typography>
        <SubgraphQueryLink
          network={network}
          query={gql`
            query ($id: ID!) {
              indexSubscription(id: $id) {
                indexValueUntilUpdatedAt
                approved
                totalAmountReceivedUntilUpdatedAt
                units
              }
            }
          `}
          variables={`{ "id": "${indexSubscriptionId.toLowerCase()}" }`}
        />
      </Stack>

      <Grid container spacing={3} sx={{ pt: 3 }}>
        <Grid item xs={12} md={6}>
          <Card elevation={2}>
            <List>
              <ListItem data-cy={"index-subscription-short-hash"} divider>
                <ListItemText
                  secondary="Index"
                  primary={
                    indexSubscription && index ? (
                      <AppLink
                        href={`/${network.slugName}/indexes/${index.id}`}
                      >{`${index.id.substring(0, 6)}... (${
                        index.indexId
                      })`}</AppLink>
                    ) : (
                      <Skeleton sx={{ width: "50px" }} />
                    )
                  }
                />
              </ListItem>
              <ListItem data-cy={"index-subscription-token"} divider>
                <ListItemText
                  secondary="Token"
                  primary={
                    indexSubscription ? (
                      <SuperTokenAddress
                        network={network}
                        address={indexSubscription.token}
                      />
                    ) : (
                      <SkeletonAddress />
                    )
                  }
                />
              </ListItem>
              <ListItem data-cy={"subscription-publisher"} divider>
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
                              data-cy={"publisher-tooltip-link"}
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
                    indexSubscription ? (
                      <AccountAddress
                        network={network}
                        address={indexSubscription.publisher}
                      />
                    ) : (
                      <SkeletonAddress />
                    )
                  }
                />
              </ListItem>
              <ListItem data-cy={"subscription-subscriber"} divider>
                <ListItemText
                  secondary="Subscriber"
                  primary={
                    indexSubscription ? (
                      <AccountAddress
                        network={network}
                        address={indexSubscription.subscriber}
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
                        indexSubscription ? (
                          <TimeAgo
                            subgraphTime={indexSubscription.updatedAtTimestamp}
                          />
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
                        indexSubscription ? (
                          <TimeAgo
                            subgraphTime={indexSubscription.createdAtTimestamp}
                          />
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
              <ListItem data-cy={"subscription-units"} divider>
                <ListItemText
                  secondary={
                    <>
                      Units (Pool %)
                      <InfoTooltipBtn
                        dataCy={"units-tooltip"}
                        title={
                          <>
                            Amount of units compared to the total pool. Funds
                            will be distributed depending on the portion of
                            units an account has.{" "}
                            <AppLink
                              data-cy={"units-tooltip-link"}
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
                    indexSubscription && index ? (
                      <>
                        {indexSubscription.units} / {index.totalUnits} (
                        {poolPercentage &&
                          poolPercentage.toDP(2).toString() + " %"}
                        )
                      </>
                    ) : (
                      <Skeleton sx={{ width: "150px" }} />
                    )
                  }
                />
              </ListItem>
              <ListItem data-cy={"subscription-approval"} divider>
                <ListItemText
                  secondary={
                    <>
                      Approved
                      <InfoTooltipBtn
                        dataCy={"approval-tooltip"}
                        title="Indicates if account has claimed all past distributions and automatically claims all future distributions."
                      />
                    </>
                  }
                  primary={
                    indexSubscription ? (
                      indexSubscription.approved ? (
                        "Yes"
                      ) : (
                        "No"
                      )
                    ) : (
                      <Skeleton sx={{ width: "25px" }} />
                    )
                  }
                />
              </ListItem>
              <ListItem data-cy={"subscription-total-amount-received"}>
                <ListItemText
                  secondary="Total Amount Received"
                  primary={
                    indexSubscription && index && totalWeiAmountReceived ? (
                      <>
                        <BalanceWithToken
                          wei={totalWeiAmountReceived}
                          network={network}
                          tokenAddress={index.token}
                        />
                      </>
                    ) : (
                      <Skeleton sx={{ width: "100px" }} />
                    )
                  }
                />
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>

      <Box data-cy={"distributions-grid"} sx={{ mt: 3 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
          Distributions
          <InfoTooltipBtn
            dataCy={"distributions-tooltip"}
            title={
              <>
                An event in which super tokens are distributed to the entire
                pool of subscribers for a given index using the Superfluid IDA.{" "}
                <AppLink
                  data-cy={"distributions-tooltip-link"}
                  href="https://docs.superfluid.finance/superfluid/protocol-developers/interactive-tutorials/instant-distribution"
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
          <IndexSubscriptionDistributions
            network={network}
            indexSubscriptionId={indexSubscriptionId}
          />
        </Card>
      </Box>

      <Box data-cy={"units-updated-grid"} sx={{ mt: 3 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
          Units Updated (i.e. Pool % Updated)
        </Typography>
        <Card elevation={2}>
          <SubscriptionUnitsUpdatedEventDataGrid
            queryResult={subscriptionUnitsUpdatedEventQuery}
            setPaging={setSubscriptionUnitsUpdatedEventPaging}
            ordering={subscriptionUnitsUpdatedEventPagingOrdering}
            setOrdering={setSubscriptionUnitsUpdatedEventOrdering}
          />
        </Card>
      </Box>
    </Container>
  );
};

export const IndexSubscriptionDistributions: FC<{
  network: Network;
  indexSubscriptionId: string;
}> = ({ network, indexSubscriptionId }) => {
  const indexSubscriptionQuery = sfSubgraph.useIndexSubscriptionQuery({
    chainId: network.chainId,
    id: indexSubscriptionId,
  });
  const indexSubscription: IndexSubscription | undefined | null =
    indexSubscriptionQuery.data;

  const indexQuery = sfSubgraph.useIndexQuery(
    indexSubscription
      ? {
          chainId: network.chainId,
          id: indexSubscription.index,
        }
      : skipToken
  );

  const index: Index | undefined | null = indexQuery.data;

  const [indexUpdatedEventPaging, setIndexUpdatedEventPaging] =
    useState<SkipPaging>(
      createSkipPaging({
        take: 10,
      })
    );
  const [indexUpdatedEventOrdering, setIndexUpdatedEventOrdering] = useState<
    Ordering<IndexUpdatedEvent_OrderBy> | undefined
  >({
    orderBy: "timestamp",
    orderDirection: "desc",
  });

  const subscriptionUnitsUpdatedEventsQuery =
    sfSubgraph.useSubscriptionUnitsUpdatedEventsQuery({
      chainId: network.chainId,
      filter: {
        subscription: indexSubscriptionId,
      },
      pagination: {
        take: 999,
        skip: 0,
      },
      // Very important to order by timestamp in descending direction. Later `distributionAmount` logic depends on it.
      order: {
        orderBy: "timestamp",
        orderDirection: "desc",
      },
    });

  const subscriptionEndTime = useMemo<number | undefined>(
    () =>
      (subscriptionUnitsUpdatedEventsQuery.data?.data ?? []).find(
        (x) => x.units === "0"
      )?.timestamp,
    [subscriptionUnitsUpdatedEventsQuery.data]
  );

  const subscriptionStartTime = useMemo<number | undefined>(
    () =>
      (subscriptionUnitsUpdatedEventsQuery.data?.data ?? [])
        .slice() // To keep the reversing immutable.
        .reverse()
        .find((x) => x.units !== "0")?.timestamp,
    [subscriptionUnitsUpdatedEventsQuery]
  );

  const subscriptionUnitsUpdatedEvents:
    | SubscriptionUnitsUpdatedEvent[]
    | undefined = useMemo(() => subscriptionUnitsUpdatedEventsQuery.data?.items ?? [], [subscriptionUnitsUpdatedEventsQuery.data]);

  const indexUpdatedEventsQuery = sfSubgraph.useIndexUpdatedEventsQuery(
    index && subscriptionStartTime
      ? {
          chainId: network.chainId,
          filter: {
            index: index.id,
            timestamp_gte: subscriptionStartTime.toString(),
            ...(subscriptionEndTime
              ? { timestamp_lte: subscriptionEndTime.toString() }
              : {}),
          },
          order: indexUpdatedEventOrdering,
          pagination: indexUpdatedEventPaging,
        }
      : skipToken
  );

  const indexUpdatedEvents: IndexUpdatedEvent[] | undefined =
    indexUpdatedEventsQuery.data?.data ?? [];

  const columns: GridColDef[] = useMemo(
    () => [
      { field: "id", hide: true, sortable: false, flex: 1 },
      {
        field: "timestamp",
        headerName: "Distribution Date",
        sortable: true,
        flex: 0.5,
        renderCell: (params) => <TimeAgo subgraphTime={params.value} />,
      },
      {
        field: "newIndexValue",
        headerName: "Amount Received",
        hide: false,
        sortable: false,
        flex: 1,
        renderCell: (params) => {
          if (!index || !subscriptionUnitsUpdatedEvents?.length) {
            return <Skeleton sx={{ width: "100px" }} />;
          }

          // Very touchy logic below...

          const indexUpdatedEvent = params.row as IndexUpdatedEvent;

          let closestSubscriptionUnitsUpdatedEvent =
            subscriptionUnitsUpdatedEvents.find(
              (x) => x.timestamp <= indexUpdatedEvent.timestamp
            )!;

          if (
            indexUpdatedEvent.timestamp ===
            closestSubscriptionUnitsUpdatedEvent.timestamp
          ) {
            // *sigh* the timestamps match so we have to look at log indexes as well to know which came first...

            const indexUpdatedEventLogIndex = Number(
              _.last(indexUpdatedEvent.id.split("-"))
            );
            const subscriptionUnitsUpdatedEventLogIndex = Number(
              _.last(closestSubscriptionUnitsUpdatedEvent.id.split("-"))
            );

            if (
              subscriptionUnitsUpdatedEventLogIndex > indexUpdatedEventLogIndex
            ) {
              closestSubscriptionUnitsUpdatedEvent =
                subscriptionUnitsUpdatedEvents.find(
                  (x) => x.timestamp < indexUpdatedEvent.timestamp
                )!;
            }
          }

          if (!closestSubscriptionUnitsUpdatedEvent) {
            return <>0</>;
          }

          const subscriptionUnits = BigNumber.from(
            closestSubscriptionUnitsUpdatedEvent.units
          );

          const indexDistributionAmount = BigNumber.from(
            indexUpdatedEvent.newIndexValue // Index is always incrementing bigger.
          ).sub(BigNumber.from(indexUpdatedEvent.oldIndexValue));

          const subscriptionDistributionAmount =
            indexDistributionAmount.mul(subscriptionUnits);

          return (
            <BalanceWithToken
              wei={subscriptionDistributionAmount}
              network={network}
              tokenAddress={index.token}
            />
          );
        },
      },
    ],
    [network, index, subscriptionUnitsUpdatedEvents]
  );

  return (
    <AppDataGrid
      rows={indexUpdatedEvents}
      columns={columns}
      queryResult={indexUpdatedEventsQuery}
      setOrdering={(x) => setIndexUpdatedEventOrdering(x as any)}
      ordering={indexUpdatedEventOrdering}
      setPaging={setIndexUpdatedEventPaging}
    />
  );
};
