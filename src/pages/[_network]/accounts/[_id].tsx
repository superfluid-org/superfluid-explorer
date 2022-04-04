import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  Container,
  List,
  ListItem,
  ListItemText,
  Skeleton,
  Stack,
  Tab,
  Tooltip,
  Typography,
} from "@mui/material";
import { ethers } from "ethers";
import { gql } from "graphql-request";
import { NextPage } from "next";
import Error from "next/error";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import AccountIndexes from "../../../components/AccountIndexes";
import AccountStreams from "../../../components/AccountStreams";
import AccountTokens from "../../../components/AccountTokens";
import { AddressBookButton } from "../../../components/AddressBook";
import CopyIconBtn from "../../../components/CopyIconBtn";
import CopyLink from "../../../components/CopyLink";
import EventList from "../../../components/EventList";
import InfoTooltipBtn from "../../../components/InfoTooltipBtn";
import AccountNetworkSelect from "../../../components/NetworkSelect/AccountNetworkSelect";
import SkeletonAddress from "../../../components/skeletons/SkeletonAddress";
import SkeletonNetwork from "../../../components/skeletons/SkeletonNetwork";
import SubgraphQueryLink from "../../../components/SubgraphQueryLink";
import {
  incomingStreamOrderingDefault,
  incomingStreamPagingDefault,
} from "../../../components/Tables/Account/AccountIncomingStreamsTable";
import {
  indexSubscriptionOrderingDefault,
  indexSubscriptionPagingDefault,
} from "../../../components/Tables/Account/AccountIndexSubscriptionsTable";
import {
  outgoingStreamOrderingDefault,
  outgoingStreamPagingDefault,
} from "../../../components/Tables/Account/AccountOutgoingStreamsTable";
import {
  publishedIndexOrderingDefault,
  publishedIndexPagingDefault,
} from "../../../components/Tables/Account/AccountPublishedIndexesTable";
import IdContext from "../../../contexts/IdContext";
import NetworkContext from "../../../contexts/NetworkContext";
import { useAppSelector } from "../../../redux/hooks";
import {
  addressBookSelectors,
  createEntryId,
} from "../../../redux/slices/addressBook.slice";
import { sfApi, sfSubgraph } from "../../../redux/store";
import ellipsisAddress from "../../../utils/ellipsisAddress";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <Stack direction="row" alignItems="center" gap={1}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.secondary">
            {network && network.displayName}
          </Typography>
          <Typography color="text.secondary">Accounts</Typography>
          <Typography color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
            {accountQuery.data && accountQuery.data.id}
          </Typography>
        </Breadcrumbs>
        <CopyLink localPath={`/${network.slugName}/accounts/${address}`} />
      </Stack>

      <Box sx={{ mt: 1 }}>
        {network && accountQuery.data ? (
          <Stack direction="row" alignItems="center">
            <AddressBookButton
              network={network}
              address={accountQuery.data.id}
            />
            <Typography data-cy={"address"} variant="h4" component="h1" sx={{ mx: 1 }}>
              {addressBookEntry
                ? addressBookEntry.nameTag
                : ellipsisAddress(
                    ethers.utils.getAddress(accountQuery.data.id),
                    6
                  )}
            </Typography>
            <CopyIconBtn
              copyText={ethers.utils.getAddress(accountQuery.data.id)}
              description="Copy address to clipboard"
            />
            <Stack direction="row" justifyContent="flex-end" flex={1} gap={1}>
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
              <Tooltip title="View on blockchain Explorer">
                <Button
                  size="small"
                  variant="outlined"
                  href={network.getLinkForAddress(accountQuery.data.id)}
                  target="_blank"
                  startIcon={<OpenInNewIcon />}
                >
                  Blockchain
                </Button>
              </Tooltip>
            </Stack>
          </Stack>
        ) : (
          <SkeletonAddress />
        )}
      </Box>

      <Card elevation={2} sx={{ mt: 3 }}>
        <List
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
              data-cy={"account-type"}
              secondary={
                <>
                  Account type
                  <InfoTooltipBtn
                    dataCy={"account-type-tooltip"}
                    title="Either a regular account or a super app."
                  />
                </>
              }
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
          <ListItem>
            <ListItemText
              data-cy={"network-name"}
              secondary="Network"
              primary={
                network ? (
                  <AccountNetworkSelect
                    activeNetwork={network}
                    address={address}
                  />
                ) : (
                  <SkeletonNetwork />
                )
              }
            />
          </ListItem>
        </List>
      </Card>

      <Card elevation={2} sx={{ mt: 3 }}>
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
              <Tab
                data-cy={"super-tokens-tab"}
                label="Super Tokens"
                value="tokens"
              />
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
    </Container>
  );
};

export default AccountPage;
