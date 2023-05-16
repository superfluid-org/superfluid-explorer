import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  Container,
  Grid,
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
import AccountTokenBalance from "../../../components/AccountTokenBalance";
import AccountTokenFlowRate from "../../../components/AccountTokenFlowRate";
import AccountMap from "../../../components/AccountMap";
import AccountTokens from "../../../components/AccountTokens";
import { AddressBookButton } from "../../../components/AddressBook";
import CopyIconBtn from "../../../components/CopyIconBtn";
import CopyLink from "../../../components/CopyLink";
import DepletionDate from "../../../components/DepletionDate";
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
import { useNetworkContext } from "../../../contexts/NetworkContext";
import { useAppSelector } from "../../../redux/hooks";
import {
  addressBookSelectors,
  createEntryId,
} from "../../../redux/slices/addressBook.slice";
import { ensApi } from "../../../redux/slices/ensResolver.slice";
import { sfSubgraph } from "../../../redux/store";
import ellipsisAddress from "../../../utils/ellipsisAddress";
import TokenChip from "../../../components/TokenChip";
import FlowingBalance from "../../../components/FlowingBalance";
import FlowRate from "../../../components/FlowRate";

const AccountPage: NextPage = () => {
  const network = useNetworkContext();
  const address = useContext(IdContext);
  const accountQuery = sfSubgraph.useAccountQuery({
    chainId: network.chainId,
    id: address,
  });

  const ensAddressQuery = ensApi.useLookupAddressQuery(address);

  const ensName = ensAddressQuery.currentData?.name;

  const prefetchStreamsQuery = sfSubgraph.usePrefetch("streams");
  const prefetchIndexesQuery = sfSubgraph.usePrefetch("indexes");
  const prefetchIndexSubscriptionsQuery =
    sfSubgraph.usePrefetch("indexSubscriptions");
  // const prefetchTokensQuery = sfSubgraph.usePrefetch("accountTokenSnapshots");
  // const prefetchEventsQuery = sfSubgraph.usePrefetch("events");

  const tokenSnapshotQuery = sfSubgraph.useAccountTokenSnapshotsQuery({
    chainId: network.chainId,
    order: {
      orderBy: "balanceUntilUpdatedAt",
      orderDirection: "desc",
    },
    filter: {
      account: address,
    },
    pagination: {
      take: 50,
      skip: 0,
    },
  });

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

  const addressBookEntry = useAppSelector((state: any) =>
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

  const tokens = tokenSnapshotQuery.data?.data || [];
  const tokensWithBalance = tokens.filter(
    (snapshot) => Number(snapshot.balanceUntilUpdatedAt) !== 0
  );
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
            <Typography
              data-cy={"ensName"}
              variant="h4"
              component="h1"
              sx={{ mx: 1 }}
            >
              {/* TODO(KK): When there's an address book entry then ENS name is not displayed anywhere. Not sure if I like it...  */}
              {addressBookEntry ? addressBookEntry.nameTag : ensName}
            </Typography>
            <Typography
              data-cy={"address"}
              variant="h4"
              component="h1"
              sx={{ mx: 1 }}
            >
              {ellipsisAddress(
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
        <List sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
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
        </List>
      </Card>

      {(tokenSnapshotQuery.isFetching || tokenSnapshotQuery.isLoading) && (
        <Skeleton
          sx={{ height: 112, width: "100%", transform: "scale(1)", mt: 3 }}
        />
      )}

      {tokensWithBalance.length > 0 && (
        <Card elevation={2} sx={{ mt: 3 }}>
          <Typography variant="h6" component="h2" sx={{ mx: 2, mt: 2 }}>
            Balances
          </Typography>
          <Grid container rowSpacing={0} columnSpacing={1} component={List}>
            {tokensWithBalance.map((tokenSnapshot) => (
              <Grid item sm={4} key={tokenSnapshot.id}>
                <ListItem>
                  <ListItemText>
                    <AccountTokenBalance
                      network={network}
                      accountAddress={address}
                      tokenAddress={tokenSnapshot.token}
                      placeholder={{
                        balance: tokenSnapshot.balanceUntilUpdatedAt,
                        balanceTimestamp: tokenSnapshot.updatedAtTimestamp,
                        flowRate: tokenSnapshot.totalNetFlowRate,
                      }}
                    >
                      {({ balance, balanceTimestamp, flowRate }) => (
                        <Box
                          sx={{
                            display: "grid",
                            gridTemplateColumns: "auto 1fr",
                            columnGap: 1,
                            alignItems: "center",
                          }}
                        >
                          <TokenChip
                            network={network}
                            tokenAddress={tokenSnapshot.token}
                            ChipProps={{ sx: { width: "100%" } }}
                          />
                          <FlowingBalance
                            balance={balance}
                            balanceTimestamp={balanceTimestamp}
                            flowRate={flowRate}
                          />

                          {flowRate != "0" && (
                            <>
                              <Typography
                                variant="caption"
                                sx={{ textAlign: "right" }}
                              >
                                Flow rate:
                              </Typography>
                              <Typography variant="caption">
                                <FlowRate flowRate={flowRate} />
                              </Typography>
                            </>
                          )}

                          {flowRate != "0" && flowRate.charAt(0) === "-" && (
                            <>
                              <Typography
                                variant="caption"
                                sx={{ textAlign: "right" }}
                              >
                                Pred. liquidation:
                              </Typography>
                              <Typography variant="caption">
                                <DepletionDate
                                  balance={balance}
                                  balanceTimestamp={balanceTimestamp}
                                  flowRate={flowRate}
                                />
                              </Typography>
                            </>
                          )}
                        </Box>
                      )}
                    </AccountTokenBalance>
                  </ListItemText>
                </ListItem>
              </Grid>
            ))}
          </Grid>
        </Card>
      )}

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
              <Tab data-cy={"map-tab"} label="Map" value="map" />
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
            <TabPanel value="map">
              <AccountMap
                network={network}
                accountAddress={address}
                key={`${network}-${address}`}
              />
            </TabPanel>
          </Box>
        </TabContext>
      </Card>
    </Container>
  );
};

export default AccountPage;
