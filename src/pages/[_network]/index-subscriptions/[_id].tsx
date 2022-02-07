import { NextPage } from "next";
import { FC, useContext, useMemo, useState } from "react";
import { Network } from "../../../redux/networks";
import { sfSubgraph } from "../../../redux/store";
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
import { skipToken } from "@reduxjs/toolkit/dist/query";
import {
  Box,
  Card,
  CircularProgress,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Skeleton,
  Typography,
} from "@mui/material";
import SuperTokenAddress from "../../../components/SuperTokenAddress";
import SkeletonAddress from "../../../components/skeletons/SkeletonAddress";
import AccountAddress from "../../../components/AccountAddress";
import { BigNumber, ethers } from "ethers";
import SubscriptionUnitsUpdatedEventDataGrid from "../../../components/SubscriptionUnitsUpdatedEventDataGrid";
import NetworkContext from "../../../contexts/NetworkContext";
import IdContext from "../../../contexts/IdContext";
import Error from "next/error";
import ClipboardCopy from "../../../components/ClipboardCopy";
import TimeAgo from "../../../components/TimeAgo";
import _ from "lodash";
import { GridColDef } from "@mui/x-data-grid";
import { AppDataGrid } from "../../../components/AppDataGrid";

const IndexSubscriptionDistributions: FC<{
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

  const subscriptionUnitsUpdatedEvents:
    | SubscriptionUnitsUpdatedEvent[]
    | undefined = subscriptionUnitsUpdatedEventsQuery.data?.data;

  const indexUpdatedEventsQuery = sfSubgraph.useIndexUpdatedEventsQuery(
    index && subscriptionUnitsUpdatedEvents?.length
      ? {
          chainId: network.chainId,
          filter: {
            index: index.id,
            timestamp_gte: _.last(
              subscriptionUnitsUpdatedEvents
            )!.timestamp.toString(),
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
        flex: 1,
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

          // Crazy logic below...

          const indexUpdatedEvent = params.row as IndexUpdatedEvent;
          const closestSubscriptionUnitsUpdatedEvent = _.first(
            subscriptionUnitsUpdatedEvents.filter(
              (x) => x.timestamp <= indexUpdatedEvent.timestamp
            )
          )!;
          const poolFraction = BigNumber.from(
            indexUpdatedEvent.totalUnitsPending
          )
            .add(BigNumber.from(indexUpdatedEvent.totalUnitsApproved))
            .div(BigNumber.from(closestSubscriptionUnitsUpdatedEvent.units));

          const indexDistributionAmount = BigNumber.from(
            indexUpdatedEvent.newIndexValue
          ).sub(BigNumber.from(indexUpdatedEvent.oldIndexValue));
          const subscriptionDistributionAmount =
            indexDistributionAmount.mul(poolFraction);

          return (
            <>
              {ethers.utils.formatEther(subscriptionDistributionAmount)}&nbsp;
              <SuperTokenAddress
                network={network}
                address={index.token}
                format={(token) => token.symbol}
                formatLoading={() => ""}
              />
            </>
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
  ] = useState<Ordering<SubscriptionUnitsUpdatedEvent_OrderBy> | undefined>();
  const subscriptionUnitsUpdatedEventQuery =
    sfSubgraph.useSubscriptionUnitsUpdatedEventsQuery({
      chainId: network.chainId,
      filter: {
        subscription: indexSubscriptionId.toLowerCase(),
      },
      pagination: subscriptionUnitsUpdatedEventPaging,
      order: subscriptionUnitsUpdatedEventPagingOrdering,
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
          <Typography variant="h3" component="h1">
            Index Subscription
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Card elevation={2}>
            <List>
              <ListItem divider>
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
              <ListItem divider>
                <ListItemText
                  secondary="Publisher"
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
              <ListItem divider>
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
              <ListItem divider>
                <ListItemText
                  secondary="Units (Pool %)"
                  primary={
                    indexSubscription && index ? (
                      <>
                        {indexSubscription.units} / {index.totalUnits} (
                        {BigNumber.from(indexSubscription.units)
                          .div(BigNumber.from(index.totalUnits))
                          .mul(100)
                          .toString()}
                        %)
                      </>
                    ) : (
                      <Skeleton sx={{ width: "150px" }} />
                    )
                  }
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  secondary="Approved"
                  primary={
                    indexSubscription ? (
                      indexSubscription.approved.toString()
                    ) : (
                      <Skeleton sx={{ width: "25px" }} />
                    )
                  }
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  secondary="Total Amount Received"
                  primary={
                    indexSubscription && index ? (
                      <>
                        {calculateEtherAmountReceived(
                          BigNumber.from(index.indexValue),
                          BigNumber.from(
                            indexSubscription.totalAmountReceivedUntilUpdatedAt
                          ),
                          BigNumber.from(
                            indexSubscription.indexValueUntilUpdatedAt
                          ),
                          Number(indexSubscription.units)
                        ).toString()}
                        &nbsp;
                        <SuperTokenAddress
                          network={network}
                          address={index.token}
                          format={(token) => token.symbol}
                          formatLoading={() => ""}
                        />
                      </>
                    ) : (
                      <Skeleton sx={{ width: "100px" }} />
                    )
                  }
                />
              </ListItem>
              <ListItem divider>
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
              <ListItem divider>
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
              <ListItem divider>
                <ListItemText
                  secondary="Subgraph ID"
                  primary={
                    <>
                      {indexSubscriptionId}
                      <ClipboardCopy copyText={indexSubscriptionId} />
                    </>
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
            <IndexSubscriptionDistributions
              network={network}
              indexSubscriptionId={indexSubscriptionId}
            />
          </Card>
        </Grid>

        <Grid item xs={12}>
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
        </Grid>
      </Grid>
    </Container>
  );
};

const calculateEtherAmountReceived = (
  publisherIndexValue: BigNumber,
  subscriberTotalAmountReceivedUntilUpdatedAt: BigNumber,
  subscriberIndexValueUntilUpdatedAt: BigNumber,
  subscriberUnits: number
) => {
  const totalUnitsReceived = subscriberTotalAmountReceivedUntilUpdatedAt.add(
    publisherIndexValue
      .sub(subscriberIndexValueUntilUpdatedAt)
      .mul(subscriberUnits)
  );

  return ethers.utils.formatEther(totalUnitsReceived);
};
