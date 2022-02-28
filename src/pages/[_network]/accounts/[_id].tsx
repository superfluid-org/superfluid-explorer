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
  Tab,
  Tooltip,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { sfApi, sfSubgraph } from "../../../redux/store";
import AccountStreams from "../../../components/AccountStreams";
import AccountIndexes from "../../../components/AccountIndexes";
import AccountTokens from "../../../components/AccountTokens";
import { NextPage } from "next";
import NetworkDisplay from "../../../components/NetworkDisplay";
import SkeletonNetwork from "../../../components/skeletons/SkeletonNetwork";
import SkeletonAddress from "../../../components/skeletons/SkeletonAddress";
import EventList from "../../../components/EventList";
import { AddressBookButton } from "../../../components/AddressBook";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  addressBookSelectors,
  createEntryId,
} from "../../../redux/slices/addressBook.slice";
import { useAppSelector } from "../../../redux/hooks";
import { ethers } from "ethers";
import Error from "next/error";
import {
  incomingStreamOrderingDefault,
  incomingStreamPagingDefault,
} from "../../../components/AccountStreamsIncomingDataGrid";
import {
  outgoingStreamOrderingDefault,
  outgoingStreamPagingDefault,
} from "../../../components/AccountStreamsOutgoingDataGrid";
import {
  publishedIndexOrderingDefault,
  publishedIndexPagingDefault,
} from "../../../components/AccountIndexesDataGrid";
import {
  indexSubscriptionOrderingDefault,
  indexSubscriptionPagingDefault,
} from "../../../components/AccountIndexSubscriptionsDataGrid";
import NetworkContext from "../../../contexts/NetworkContext";
import IdContext from "../../../contexts/IdContext";
import CopyLink from "../../../components/CopyLink";
import { useRouter } from "next/router";
import AppLink from "../../../components/AppLink";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SubgraphQueryLink from "../../../components/SubgraphQueryLink";
import { gql } from "graphql-request";

const AccountPage: NextPage = () => {
  const network = useContext(NetworkContext);
  const address = useContext(IdContext);

  const accountQuery = sfSubgraph.useAccountQuery({
    chainId: network.chainId,
    id: address,
  });

  const [triggerMonitoring, monitorResult] =
    sfApi.useMonitorForEventsToInvalidateCacheMutation();
  useEffect(() => {
    if (network && accountQuery.data) {
      triggerMonitoring({
        chainId: network.chainId,
        address: accountQuery.data.id,
      });
      return monitorResult.reset;
    }
  }, []);

  const prefetchStreamsQuery = sfSubgraph.usePrefetch("streams");
  const prefetchIndexesQuery = sfSubgraph.usePrefetch("indexes");
  const prefetchIndexSubscriptionsQuery =
    sfSubgraph.usePrefetch("indexSubscriptions");
  const prefetchTokensQuery = sfSubgraph.usePrefetch("accountTokenSnapshots");
  const prefetchEventsQuery = sfSubgraph.usePrefetch("events");

  const router = useRouter();
  const { tab } = router.query;
  const [tabValue, setTabValue] = useState<string>(
    (tab as string) ?? "streams"
  );
  useEffect(() => {
    router.replace({
      query: {
        _network: network.slugName,
        _id: address,
        tab: tabValue,
      },
    });
  }, [tabValue]);

  const addressBookEntry = useAppSelector((state) =>
    network
      ? addressBookSelectors.selectById(state, createEntryId(network, address))
      : undefined
  );

  if (
    !accountQuery.isUninitialized &&
    !accountQuery.isLoading &&
    !accountQuery.data
  ) {
    return <Error statusCode={404} />;
  }

  return (
    <Container component={Box} sx={{ my: 2, py: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="text.secondary">
              {network && network.displayName}
            </Typography>
            <Typography color="text.secondary">Accounts</Typography>
            <Typography color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
              {accountQuery.data && accountQuery.data.id}
            </Typography>
          </Breadcrumbs>
        </Grid>

        <Grid item xs={12}>
          {network && accountQuery.data ? (
            <Typography variant="h4" component="h1">
              <Grid container alignItems="center">
                <Grid item>
                  <AddressBookButton
                    iconProps={{ fontSize: "large" }}
                    network={network}
                    address={accountQuery.data.id}
                  />
                </Grid>
                <Grid item sx={{ mx: 0.5 }}>
                  {addressBookEntry
                    ? addressBookEntry.nameTag
                    : accountQuery.data.isSuperApp
                    ? "Super App"
                    : "Account"}
                </Grid>
                <Grid item>
                  <CopyLink
                    IconProps={{ fontSize: "large" }}
                    localPath={`/${network.slugName}/accounts/${address}`}
                  />
                </Grid>
                <Grid item>
                  <SubgraphQueryLink
                    network={network}
                    query={gql`
                      query ($id: ID = "") {
                        account(id: $id) {
                          createdAtTimestamp
                          createdAtBlockNumber
                          isSuperApp
                          updatedAtBlockNumber
                          updatedAtTimestamp
                        }
                      }
                    `}
                    variables={`{ "id": "${address.toLowerCase()}" }`}
                  />
                </Grid>
              </Grid>
            </Typography>
          ) : (
            <SkeletonAddress />
          )}
        </Grid>

        <Grid item xs={12}>
          <Card elevation={2}>
            <Grid container>
              <Grid item md={6}>
                <List>
                  <ListItem divider>
                    <ListItemText
                      data-cy={"address"}
                      secondary="Address"
                      primary={
                        accountQuery.data ? (
                          <Tooltip title="View on blockchain explorer">
                            <AppLink
                              href={network.getLinkForAddress(
                                accountQuery.data.id
                              )}
                              target="_blank"
                            >
                              <Grid container alignItems="center">
                                {ethers.utils.getAddress(accountQuery.data.id)}
                                <OpenInNewIcon
                                  sx={{ ml: 0.5, fontSize: "inherit" }}
                                />
                              </Grid>
                            </AppLink>
                          </Tooltip>
                        ) : (
                          <SkeletonAddress />
                        )
                      }
                    />
                  </ListItem>
                  <ListItem divider>
                    <ListItemText
                      data-cy={"account-type"}
                      secondary="Account Type"
                      primary={
                        accountQuery.data ? (
                          accountQuery.data.isSuperApp ? (
                            "Super App"
                          ) : (
                            "Regular account"
                          )
                        ) : (
                          <Skeleton sx={{ width: "40px" }} />
                        )
                      }
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item md={6}>
                <List>
                  <ListItem divider>
                    <ListItemText
                      data-cy={"network-name"}
                      secondary="Network"
                      primary={
                        network ? (
                          <NetworkDisplay network={network} />
                        ) : (
                          <SkeletonNetwork />
                        )
                      }
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card elevation={2}>
            <TabContext value={tabValue}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  variant="scrollable"
                  scrollButtons="auto"
                  onChange={(_event, newValue: string) => setTabValue(newValue)}
                  aria-label="tabs"
                >
                  <Tab
                    label="Streams"
                    data-cy={"streams-tab"}
                    value="streams"
                    onMouseEnter={() => {
                      if (network) {
                        prefetchStreamsQuery({
                          chainId: network.chainId,
                          filter: {
                            receiver: address,
                          },
                          order: incomingStreamOrderingDefault,
                          pagination: incomingStreamPagingDefault,
                        });
                        prefetchStreamsQuery({
                          chainId: network.chainId,
                          filter: {
                            sender: address,
                          },
                          order: outgoingStreamOrderingDefault,
                          pagination: outgoingStreamPagingDefault,
                        });
                      }
                    }}
                  />
                  <Tab
                    data-cy={"indexes-tab"}
                    label="Indexes"
                    value="indexes"
                    onMouseEnter={() => {
                      if (network) {
                        prefetchIndexesQuery({
                          chainId: network.chainId,
                          filter: {
                            publisher: address,
                          },
                          order: publishedIndexOrderingDefault,
                          pagination: publishedIndexPagingDefault,
                        });
                        prefetchIndexSubscriptionsQuery({
                          chainId: network.chainId,
                          filter: {
                            subscriber: address,
                          },
                          order: indexSubscriptionOrderingDefault,
                          pagination: indexSubscriptionPagingDefault,
                        });
                      }
                    }}
                  />
                  <Tab data-cy={"super-tokens-tab"} label="Super Tokens" value="tokens" />
                  <Tab data-cy={"events-tab"} label="Events" value="events" />
                </TabList>
              </Box>

              <Box>
                <TabPanel value="events">
                  <EventList network={network} address={address} />
                </TabPanel>
                <TabPanel value="tokens">
                  <AccountTokens network={network} accountAddress={address} />
                </TabPanel>
                <TabPanel value="streams">
                  <AccountStreams network={network} accountAddress={address} />
                </TabPanel>
                <TabPanel value="indexes">
                  <AccountIndexes network={network} accountAddress={address} />
                </TabPanel>
              </Box>
            </TabContext>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AccountPage;
