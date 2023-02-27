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
  Typography
} from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import {
  createSkipPaging,
  Index,
  IndexSubscription,
  IndexUpdatedEvent_OrderBy,
  Ordering,
  SkipPaging,
  SubscriptionUnitsUpdatedEvent,
} from "@superfluid-finance/sdk-core";
import Decimal from "decimal.js";
import { BigNumber } from "ethers";
import { gql } from "graphql-request";
import { NextPage } from "next";
import Error from "next/error";
import { FC, useContext, useEffect, useMemo, useState } from "react";
import AccountAddress from "../../../components/AccountAddress";
import { AppDataGrid } from "../../../components/AppDataGrid";
import AppLink from "../../../components/AppLink";
import BalanceWithToken from "../../../components/BalanceWithToken";
import CopyLink from "../../../components/CopyLink";
import InfoTooltipBtn from "../../../components/InfoTooltipBtn";
import SkeletonAddress from "../../../components/skeletons/SkeletonAddress";
import SubgraphQueryLink from "../../../components/SubgraphQueryLink";
import SuperTokenAddress from "../../../components/SuperTokenAddress";
import TimeAgo from "../../../components/TimeAgo";
import IdContext from "../../../contexts/IdContext";
import { useNetworkContext } from "../../../contexts/NetworkContext";
import calculatePoolPercentage from "../../../logic/calculatePoolPercentage";
import { Network } from "../../../redux/networks";
import { sfSubgraph } from "../../../redux/store";
import { getDistributionDetails } from "./getDistributionDetailsQuery";

interface Subscriber {
  units: string;
  totalAmountReceivedUntilUpdatedAt: string;
  subscriber: {
    id: string;
  };
}

interface Subscription {
  id: string;
  units: string;
  token: string;
  totalUnits: string;
  distributionAmount: BigNumber;
}

interface DistributionIndex {
  indexId: string;
  indexValue: string;
  subscriptions: Subscriber[];
  token: {
    id: string;
  };
  totalAmountDistributedUntilUpdatedAt: string;
  totalSubscriptionsWithUnits: number;
  totalUnits: string;
}

interface DistributionDetails {
  id: string;
  index: DistributionIndex;
  publisher: string;
  timestamp: string;
  totalUnitsApproved: string;
  totalUnitsPending: string;
  newIndexValue: string;
  oldIndexValue: string;
}

const DistributionsPage: NextPage = () => {
  const network = useNetworkContext();
  const distributionId = useContext(IdContext);

  return (
    <DistributionsPageContent
      distributionId={distributionId}
      network={network}
    />
  );
};

export default DistributionsPage;

export const DistributionsPageContent: FC<{
  distributionId: string;
  network: Network;
}> = ({ distributionId, network }) => {
  const indexSubscriptionQuery = sfSubgraph.useIndexSubscriptionQuery({
    chainId: network.chainId,
    id: "",
  });
  const [distributionDetails, setDistributionDetails] =
    useState<DistributionDetails>();

  const handleSetDistributionDetails = (data: DistributionDetails) => {
    if (!data) return;
    setDistributionDetails(data);
  };

  const baseUrl =
    "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-matic";

  useEffect(() => {
    if (!distributionId) return;
    const fetchData = async () => {
      await fetch(baseUrl, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({
          query: `${getDistributionDetails(distributionId)}`,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          const distribution = res.data.indexUpdatedEvent;
          if (distribution) {
            handleSetDistributionDetails(distribution);
          }
        });
    };
    fetchData();
  }, [distributionId]);

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

  const calculateDistributionAmount = (
    event: DistributionDetails
  ): BigNumber => {
    const totalUnits = BigNumber.from(event.totalUnitsApproved).add(
      BigNumber.from(event.totalUnitsPending)
    );
    const indexValueDifference = BigNumber.from(event.newIndexValue).sub(
      BigNumber.from(event.oldIndexValue)
    );
    return indexValueDifference.mul(totalUnits);
  };

  if (!distributionDetails && !distributionId) {
    return <Error statusCode={404} />;
  }

  return (
    <Container
      data-cy={"distribution-container"}
      component={Box}
      sx={{ my: 2, py: 2 }}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.secondary">
            {network && network.displayName}
          </Typography>
          <Typography color="text.secondary">Distribution Details</Typography>
          <Typography color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
            {distributionId.substring(0, 6) + "..."}
          </Typography>
        </Breadcrumbs>
        <CopyLink
          localPath={`/${network.slugName}/distributions/${distributionId}`}
        />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: 1 }}
      >
        <Typography variant="h4" component="h1">
          Distribution
        </Typography>
        <SubgraphQueryLink
          network={network}
          query={gql`
            query ($id: ID!) {
              indexUpdatedEvent(id: $id) {
                index {
                  indexId
                  indexValue
                  totalAmountDistributedUntilUpdatedAt
                  totalSubscriptionsWithUnits
                  totalUnits
                  subscriptions(where: { units_not: "0" }) {
                    units
                    totalAmountReceivedUntilUpdatedAt
                    subscriber {
                      id
                    }
                  }
                  token {
                    id
                  }
                }
                timestamp
                publisher
                totalUnitsApproved
                totalUnitsPending
                newIndexValue
                oldIndexValue
              }
            }
          `}
          variables={`{ "id": "${distributionId}" }`}
        />
      </Stack>

      <Grid container spacing={3} sx={{ pt: 3 }}>
        <Grid item xs={12} md={6}>
          <Card elevation={2}>
            <List>
              <ListItem data-cy={"distribution-short-hash"} divider>
                <ListItemText
                  secondary="Index"
                  primary={
                    distributionDetails ? (
                      <AppLink
                        href={`/${network.slugName}/distributions/${distributionId}`}
                      >{`${distributionId.substring(0, 6)}... (${
                        distributionDetails?.index.indexId
                      })`}</AppLink>
                    ) : (
                      <Skeleton sx={{ width: "50px" }} />
                    )
                  }
                />
              </ListItem>
              <ListItem data-cy={"distribution-token"} divider>
                <ListItemText
                  secondary="Token"
                  primary={
                    distributionDetails ? (
                      <SuperTokenAddress
                        network={network}
                        address={distributionDetails?.index.token.id ?? ""}
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
                    distributionDetails ? (
                      <AccountAddress
                        network={network}
                        address={distributionDetails.publisher ?? ""}
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
                      secondary="Distributed At"
                      primary={
                        distributionDetails ? (
                          <TimeAgo
                            subgraphTime={Number(distributionDetails.timestamp)}
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
              <ListItem data-cy={"total-units"} divider>
                <ListItemText
                  secondary={
                    <>
                      Total Units
                      <InfoTooltipBtn
                        dataCy={"total-units-tooltip"}
                        title="The sum of total pending and approved units issued to subscribers."
                      />
                    </>
                  }
                  primary={
                    distributionDetails ? (
                      distributionDetails.index.totalUnits
                    ) : (
                      <Skeleton sx={{ width: "75px" }} />
                    )
                  }
                />
              </ListItem>
              <ListItem data-cy={"subscription-total-amount-received"}>
                <ListItemText
                  secondary="Total Amount Distributed"
                  primary={
                    distributionDetails ? (
                      <>
                        <BalanceWithToken
                          wei={calculateDistributionAmount(distributionDetails)}
                          network={network}
                          tokenAddress={distributionDetails.index.token.id}
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
          {
            distributionDetails && (
              <DistributionsGrid
                network={network}
                distributionId={distributionId}
                distributionDetails={distributionDetails}
              />
            )
          }
        </Card>
      </Box>
    </Container>
  );
};

export const DistributionsGrid: FC<{
  distributionDetails: DistributionDetails;
  network: Network;
  distributionId: string;
}> = ({ network, distributionId, distributionDetails }) => {

  const indexSubscriptionQuery = sfSubgraph.useIndexSubscriptionQuery({
    chainId: network.chainId,
    id: distributionId,
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
        subscription: distributionId,
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
    | undefined = useMemo(
    () => subscriptionUnitsUpdatedEventsQuery.data?.items ?? [],
    [subscriptionUnitsUpdatedEventsQuery.data]
  );

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

  const calculateDistributionAmount = (
    event: DistributionDetails
  ): BigNumber => {
    const totalUnits = BigNumber.from(event.totalUnitsApproved).add(
      BigNumber.from(event.totalUnitsPending)
    );
    const indexValueDifference = BigNumber.from(event.newIndexValue).sub(
      BigNumber.from(event.oldIndexValue)
    );
    return indexValueDifference.mul(totalUnits);
  };

  const rows: Subscription[] = distributionDetails
    ? distributionDetails.index.subscriptions.map((subscription) => ({
        id: subscription.subscriber.id,
        units: subscription.units,
        distributionAmount: calculateDistributionAmount(distributionDetails),
        token: distributionDetails.index.token.id,
        totalUnits: distributionDetails.index.totalUnits,
      }))
    : [];

  const columns: GridColDef[] = useMemo(
    () => [
      { field: "id", hide: true, sortable: false, flex: 1 },
      {
        field: "addresses",
        headerName: "Subscriber Addresses",
        sortable: true,
        flex: 0.5,
        renderCell: (params) => (
          <AccountAddress network={network} address={params.row.id} />
        ),
      },
      {
        field: "amount",
        headerName: "Amount Received",
        hide: false,
        sortable: false,
        flex: 1,
        renderCell: (params) => {
          if (!distributionDetails) return <>-</>;
          const subscriptionUnits = BigNumber.from(params.row.units);

          const indexDistributionAmount = BigNumber.from(
            distributionDetails.newIndexValue // Index is always incrementing bigger.
          ).sub(BigNumber.from(distributionDetails.oldIndexValue));

          const subscriptionDistributionAmount =
            indexDistributionAmount.mul(subscriptionUnits);
          return (
            <BalanceWithToken
              wei={subscriptionDistributionAmount}
              network={network}
              tokenAddress={params.row.token}
            />
          );
        },
      },
      {
        field: "pool-percentage",
        headerName: "Pool Percentage",
        sortable: true,
        flex: 0.5,
        renderCell: (params) => {
          const percentage = calculatePoolPercentage(
            new Decimal(params.row.totalUnits),
            new Decimal(params.row.units)
          );
          return <>{percentage.toDP(2).toString() + " %"}</>;
        },
      },
    ],
    [network, index, subscriptionUnitsUpdatedEvents]
  );

  return (
    <AppDataGrid
      rows={rows}
      columns={columns}
      queryResult={indexUpdatedEventsQuery}
      setOrdering={(x) => setIndexUpdatedEventOrdering(x as any)}
      ordering={indexUpdatedEventOrdering}
      setPaging={setIndexUpdatedEventPaging}
    />
  );
};
