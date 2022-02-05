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
import NetworkContext from "../../../contexts/NetworkContext";
import IdContext from "../../../contexts/IdContext";

const AccountPage: NextPage = () => {
  const network = useContext(NetworkContext);
  const address = useContext(IdContext);

  const accountQuery = sfSubgraph.useAccountQuery({
    chainId: network.chainId,
    id: address
  });

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

  const [tabValue, setTabValue] = useState<string>("streams");
  const addressBookEntry = useAppSelector(state => network ? addressBookSelectors.selectById(state, createEntryId(network, address)) : undefined);

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
                          receiver: address
                        },
                        order: incomingStreamOrderingDefault,
                        pagination: incomingStreamPagingDefault
                      })
                      prefetchStreamsQuery({
                        chainId: network.chainId,
                        filter: {
                          sender: address
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
                            publisher: address
                          },
                          order: publishedIndexOrderingDefault,
                          pagination: publishedIndexPagingDefault
                        })
                        prefetchIndexSubscriptionsQuery({
                          chainId: network.chainId,
                          filter: {
                            subscriber: address
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

    </Container >
  );
}

export default AccountPage;
