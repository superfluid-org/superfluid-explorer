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
} from "@superfluid-finance/sdk-core";
import { gql } from "graphql-request";
import { NextPage } from "next";
import Error from "next/error";
import { FC, useContext, useState } from "react";
import AccountAddress from "../../../components/AccountAddress";
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
import { Network } from "../../../redux/networks";
import { sfGdaSubgraph } from "../../../redux/store";
import { Pool } from "../../../gda-subgraph/entities/pool/pool";
import PoolMemberDataGrid from "../../../components/PoolMemberDataGrid";
import { InstantDistributionUpdatedEvent_OrderBy, PoolMember_OrderBy } from "../../../gda-subgraph/.graphclient";
import InstantDistributionUpdatedEventDataGrid from "../../../components/InstantDistributionUpdatedEventDataGrid";

const PoolPage: NextPage = () => {
  const network = useNetworkContext();
  const id = useContext(IdContext);

  return <PoolPageContent id={id} network={network} />;
};

export default PoolPage;

export const PoolPageContent: FC<{ id: string; network: Network }> = ({
  id: id,
  network,
}) => {
  const poolQuery = sfGdaSubgraph.usePoolQuery({
    chainId: network.chainId,
    id: id,
  });

  const pool: Pool | null | undefined = poolQuery.data;

  const [InstantDistributionUpdatedEventPaging, setInstantDistributionUpdatedEventPaging] =
    useState<SkipPaging>(
      createSkipPaging({
        take: 10,
      })
    );
  const [instantDistributionUpdatedEventPagingOrdering, setInstantDistributionUpdatedEventOrdering] =
    useState<Ordering<InstantDistributionUpdatedEvent_OrderBy> | undefined>({
      orderBy: "timestamp",
      orderDirection: "desc",
    });

  const instantDistributionUpdatedEventQuery = sfGdaSubgraph.useInstantDistributionUpdatedEventsQuery({
    chainId: network.chainId,
    filter: {
      pool: id,
    },
    pagination: InstantDistributionUpdatedEventPaging,
    order: instantDistributionUpdatedEventPagingOrdering,
  });

  const [poolMemberPaging, setPoolMemberPaging] =
    useState<SkipPaging>(
      createSkipPaging({
        take: 10,
      })
    );
  const [poolMemberPagingOrdering, setPoolMemberOrdering] =
    useState<Ordering<PoolMember_OrderBy> | undefined>();
  const poolMemberEventQuery = sfGdaSubgraph.usePoolMembersQuery({
    chainId: network.chainId,
    filter: {
      pool: id,
    },
    pagination: poolMemberPaging,
    order: poolMemberPagingOrdering,
  });

  if (
    !poolQuery.isUninitialized &&
    !poolQuery.isLoading &&
    !poolQuery.data
  ) {
    return <Error statusCode={404} />;
  }

  return (
    <Container
      data-cy={"pool-page-container"}
      component={Box}
      sx={{ my: 2, py: 2 }}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.secondary">{network.displayName}</Typography>
          <Typography color="text.secondary">Pools</Typography>
          <Typography color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
            {id.substring(0, 6) + "..."}
          </Typography>
        </Breadcrumbs>
        <CopyLink localPath={`/${network.slugName}/pools/${id}`} />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: 1 }}
      >
        <Typography variant="h4" component="h1">
          Pool
        </Typography>
        <SubgraphQueryLink
          network={network}
          query={gql`
            query ($id: ID!) {
              pool(id: $id) {
                totalAmountFlowedDistributedUntilUpdatedAt
                totalAmountInstantlyDistributedUntilUpdatedAt
                totalAmountDistributedUntilUpdatedAt
                totalUnits
                totalConnectedUnits
                totalDisconnectedUnits
              }
            }
          `}
          variables={`{ "id": "${id}" }`}
        />
      </Stack>

      <Grid container spacing={3} sx={{ pt: 3 }}>
        <Grid item md={6} sm={12}>
          <Card elevation={2}>
            <List data-cy={"pool-general-info"}>
              <ListItem divider>
                <ListItemText
                  secondary="Token"
                  primary={
                    pool ? (
                      <SuperTokenAddress
                        network={network}
                        address={pool.token}
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
                      Admim
                      <InfoTooltipBtn
                        dataCy={"admin-tooltip"}
                        title={
                          <>
                            The creator of an pool using the GDA - admins
                            may update the pool of members and distribute
                            funds to members.{" "}
                            <AppLink
                              href="https://docs.superfluid.finance/superfluid/protocol-overview/in-depth-overview/super-agreements/streaming-distributions-coming-soon"
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
                    pool ? (
                      <AccountAddress
                        dataCy={"account-address"}
                        network={network}
                        address={pool.admin}
                      />
                    ) : (
                      <SkeletonAddress />
                    )
                  }
                />
              </ListItem>
              <ListItem data-cy={"pool-id"} divider>
                <ListItemText
                  secondary={
                    <>
                      Pool Address
                      <InfoTooltipBtn
                        dataCy={"pool-id-tooltip"}
                        title={
                          <>
                            The ID which is associated with each pool in the
                            General distribution agreement - this address is
                            created when a admin creates an pool.{" "}
                            <AppLink
                              href="https://docs.superfluid.finance/superfluid/protocol-overview/in-depth-overview/super-agreements/streaming-distributions-coming-soon"
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
                    pool ? pool.id : <Skeleton sx={{ width: "20px" }} />
                  }
                />
              </ListItem>
              <Grid container>
                <Grid item xs={6}>
                  <ListItem>
                    <ListItemText
                      secondary="Last Updated At"
                      primary={
                        pool ? (
                          <TimeAgo subgraphTime={pool.updatedAtTimestamp} />
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
                        pool ? (
                          <TimeAgo subgraphTime={pool.createdAtTimestamp} />
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
        <Grid item md={6} sm={12}>
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
                    pool ? (
                      pool.totalUnits
                    ) : (
                      <Skeleton sx={{ width: "75px" }} />
                    )
                  }
                />
              </ListItem>
              <ListItem data-cy={"total-connected-units"} divider>
                <ListItemText
                  secondary={
                    <>
                      Total Connected Units
                      <InfoTooltipBtn
                        dataCy={"total-connected-units-tooltip"}
                        title="Units that have claimed all past distributions and will automatically claim all future distributions."
                      />
                    </>
                  }
                  primary={
                    pool ? (
                      pool.totalConnectedUnits
                    ) : (
                      <Skeleton sx={{ width: "75px" }} />
                    )
                  }
                />
              </ListItem>
              <ListItem data-cy={"total-disconnected-units"} divider>
                <ListItemText
                  secondary={
                    <>
                      Total Disconnected Units
                      <InfoTooltipBtn
                        dataCy={"total-disconnected-units-tooltip"}
                        title="Units that have not claimed their distribution yet."
                      />
                    </>
                  }
                  primary={
                    pool ? (
                      pool.totalDisconnectedUnits
                    ) : (
                      <Skeleton sx={{ width: "75px" }} />
                    )
                  }
                />
              </ListItem>
              <ListItem data-cy={"total-amount-distributed"}>
                <ListItemText
                  secondary="Total Amount Distributed"
                  primary={
                    pool ? (
                      <BalanceWithToken
                        wei={pool.totalAmountDistributedUntilUpdatedAt}
                        network={network}
                        tokenAddress={pool.token}
                      />
                    ) : (
                      <Skeleton sx={{ width: "75px" }} />
                    )
                  }
                />
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>

    
      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
          Instant Distributions
          <InfoTooltipBtn
            dataCy={"distributions-tooltip"}
            size={22}
            title={
              <>
                An event in which super tokens are distributed to the entire
                pool of subscribers for a given pool using the Superfluid GDA.{" "}
                <AppLink
                  data-cy={"distributions-tooltip-link"}
                  href="https://docs.superfluid.finance/superfluid/protocol-overview/in-depth-overview/super-agreements/streaming-distributions-coming-soon#gda-examples-by-illustration"
                  target="_blank"
                >
                  Read more
                </AppLink>
              </>
            }
          />
        </Typography>

        <Card elevation={2}>
          <InstantDistributionUpdatedEventDataGrid
            pool={pool}
            queryResult={instantDistributionUpdatedEventQuery}
            setPaging={setInstantDistributionUpdatedEventPaging}
            ordering={instantDistributionUpdatedEventPagingOrdering}
            setOrdering={setInstantDistributionUpdatedEventOrdering}
          />
        </Card>
      </Box>

    
      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
          Members
          <InfoTooltipBtn
            dataCy={"members-tooltip"}
            size={22}
            title={
              <>
                Accounts that have received units within the Pool. Subscribers
                will receive distributed funds based on the portion of units
                they own in and pool.{" "}
                <AppLink
                  data-cy={"members-tooltip-link"}
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
          <PoolMemberDataGrid
            network={network}
            queryResult={poolMemberEventQuery}
            setPaging={setPoolMemberPaging}
            ordering={poolMemberPagingOrdering}
            setOrdering={setPoolMemberOrdering}
          />
        </Card>
      </Box>
    </Container>
  );
};
