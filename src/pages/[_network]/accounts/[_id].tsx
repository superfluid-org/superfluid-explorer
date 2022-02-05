import {
  Box,
  Breadcrumbs,
  Card,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText, Skeleton,
  Tab,
  Typography
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { sfApi, sfSubgraph } from "../../../redux/store";
import { skipToken } from "@reduxjs/toolkit/query";
import AccountStreams from "../../../components/AccountStreams";
import AccountIndexes from "../../../components/AccountIndexes";
import AccountTokens from "../../../components/AccountTokens";
import { NextPage } from "next";
import NetworkDisplay from "../../../components/NetworkDisplay";
import SkeletonNetwork from "../../../components/skeletons/SkeletonNetwork";
import SkeletonAddress from "../../../components/skeletons/SkeletonAddress";
import EventList from "../../../components/EventList";
import { tryGetNetwork, Network } from "../../../redux/networks";
import { FavouriteButton } from "../../../components/AddressBook";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { addressBookSelectors, createEntryId } from "../../../redux/slices/addressBook.slice";
import { useAppSelector } from "../../../redux/hooks";
import { ethers } from "ethers";
import Error from "next/error";
import { incomingStreamOrderingDefault, incomingStreamPagingDefault } from "../../../components/AccountStreamsIncomingDataGrid";
import { outgoingStreamOrderingDefault, outgoingStreamPagingDefault } from "../../../components/AccountStreamsOutgoingDataGrid";
import { publishedIndexOrderingDefault, publishedIndexPagingDefault } from "../../../components/AccountIndexesDataGrid";
import { indexSubscriptionOrderingDefault, indexSubscriptionPagingDefault } from "../../../components/AccountIndexSubscriptionsDataGrid";
import AccountAddress from "../../../components/AccountAddress";

const getAddress = (address: unknown): string => {
  if (typeof address === "string") {
    return address;
  }

  throw `Address ${address} not found. TODO(KK): error page`
}

const AccountPage: NextPage = () => {
  const router = useRouter()
  const { _network, _id } = router.query;

  const network = typeof _network === "string" ? tryGetNetwork(_network) : undefined;

  const accountQuery = sfSubgraph.useAccountQuery(network ? {
    chainId: network.chainId,
    id: getAddress(_id)
  } : skipToken);

  const [triggerMonitoring, monitorResult] = sfApi.useMonitorForEventsToInvalidateCacheMutation();
  useEffect(() => {
    if (network && accountQuery.data) {
      triggerMonitoring({
        chainId: network.chainId,
        address: accountQuery.data.id
      });
      return monitorResult.reset;
    }
  }, [])

  const prefetchStreamsQuery = sfSubgraph.usePrefetch('streams')
  const prefetchIndexesQuery = sfSubgraph.usePrefetch('indexes')
  const prefetchIndexSubscriptionsQuery = sfSubgraph.usePrefetch('indexSubscriptions')
  const prefetchTokensQuery = sfSubgraph.usePrefetch('accountTokenSnapshots')
  const prefetchEventsQuery = sfSubgraph.usePrefetch('events')

  const accountAddress = getAddress(_id);
  const [tabValue, setTabValue] = useState<string>("streams");
  const addressBookEntry = useAppSelector(state => network ? addressBookSelectors.selectById(state, createEntryId(network, accountAddress)) : undefined);

  if (!accountQuery.isLoading && !accountQuery.data) {
    return <Error statusCode={404} />;
  }

  return (
    <Container component={Box} sx={{ my: 2, py: 2 }}>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="text.secondary">{network && network.displayName}</Typography>
            <Typography color="text.secondary">Accounts</Typography>
            <Typography color="text.secondary">{accountQuery.data && accountQuery.data.id}</Typography>
          </Breadcrumbs>
        </Grid>

        <Grid item xs={12}>
          {(network && accountQuery.data) && (
            <Typography variant="h4" component="h1"><Grid container component={Box} direction="row" alignItems="center">
              <Grid item><FavouriteButton iconProps={{ fontSize: "large" }} network={network} address={accountQuery.data.id} /></Grid>
              <Grid item>{addressBookEntry ? addressBookEntry.nameTag : accountQuery.data.isSuperApp ? "Super App" : "Account"}</Grid>
            </Grid></Typography>)
          }
        </Grid>

        <Grid item xs={12}>
          <Card elevation={2}>
            <Grid container>
              <Grid item md={6}>
                <List>
                  <ListItem divider>
                    <ListItemText secondary="Address"
                      primary={(accountQuery.data) ? ethers.utils.getAddress(accountQuery.data.id) :
                        <SkeletonAddress />} />
                  </ListItem>
                  <ListItem divider>
                    <ListItemText secondary="Account Type"
                      primary={accountQuery.data ? (accountQuery.data.isSuperApp ? "Super App" : "Regular account") :
                        <Skeleton sx={{ width: "40px" }} />} />
                  </ListItem>
                </List>
              </Grid>
              <Grid item md={6}>
                <List>
                  <ListItem divider>
                    <ListItemText secondary="Network"
                      primary={network ? <NetworkDisplay network={network} /> : <SkeletonNetwork />} />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card elevation={2}>
            <TabContext value={tabValue}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList variant="scrollable"
                  scrollButtons="auto"
                  onChange={(_event, newValue: string) => setTabValue(newValue)}
                  aria-label="tabs">
                  <Tab label="Streams" value="streams" onMouseEnter={() => {
                    if (network) {
                      prefetchStreamsQuery({
                        chainId: network.chainId,
                        filter: {
                          receiver: accountAddress
                        },
                        order: incomingStreamOrderingDefault,
                        pagination: incomingStreamPagingDefault
                      })
                      prefetchStreamsQuery({
                        chainId: network.chainId,
                        filter: {
                          sender: accountAddress
                        },
                        order: outgoingStreamOrderingDefault,
                        pagination: outgoingStreamPagingDefault
                      })
                    }
                  }} />
                  <Tab label="Indexes" value="indexes"
                    onMouseEnter={() => {
                      if (network) {
                        prefetchIndexesQuery({
                          chainId: network.chainId,
                          filter: {
                            publisher: accountAddress
                          },
                          order: publishedIndexOrderingDefault,
                          pagination: publishedIndexPagingDefault
                        })
                        prefetchIndexSubscriptionsQuery({
                          chainId: network.chainId,
                          filter: {
                            subscriber: accountAddress
                          },
                          order: indexSubscriptionOrderingDefault,
                          pagination: indexSubscriptionPagingDefault
                        })
                      }
                    }} />
                  <Tab label="Super Tokens" value="tokens" />
                  <Tab label="Events" value="events" />
                </TabList>
              </Box>
              <Box>
                <TabPanel value="events">
                  {(network && _id) && <EventList network={network} address={getAddress(_id)} />}
                </TabPanel>
                <TabPanel value="tokens">
                  {(network && _id) && <AccountTokens network={network} accountAddress={getAddress(_id)} />}
                </TabPanel>
                <TabPanel value="streams">
                  {(network && _id) && <AccountStreams network={network} accountAddress={getAddress(_id)} />}
                </TabPanel>
                <TabPanel value="indexes">
                  {(network && _id) && <AccountIndexes network={network} accountAddress={getAddress(_id)} />}
                </TabPanel>
              </Box>
            </TabContext>
          </Card>
        </Grid>
      </Grid>

    </Container >
  );
}

export default AccountPage;
