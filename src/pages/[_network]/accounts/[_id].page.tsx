import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { TabContext, TabList, TabPanel } from '@mui/lab'
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
  Avatar
} from '@mui/material'
import {
  createSkipPaging,
  Ordering,
  Pool,
  SkipPaging
} from '@superfluid-finance/sdk-core'
import { ethers } from 'ethers'
import { gql } from 'graphql-request'
import { NextPage } from 'next'
import Error from 'next/error'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'

import { AddressBookButton } from '../../../components/AddressBook/AddressBook'
import FlowingBalance from '../../../components/Amount/FlowingBalance'
import FlowRate from '../../../components/Amount/FlowRate'
import CopyIconBtn from '../../../components/Copy/CopyIconBtn'
import CopyLink from '../../../components/Copy/CopyLink'
import DepletionDate from '../../../components/Date/DepletionDate'
import InfoTooltipBtn from '../../../components/Info/InfoTooltipBtn'
import AccountNetworkSelect from '../../../components/NetworkSelect/AccountNetworkSelect'
import SkeletonAddress from '../../../components/Skeleton/SkeletonAddress'
import SkeletonNetwork from '../../../components/Skeleton/SkeletonNetwork'
import EventTableWithInfo from '../../../components/Table/EventTableWithInfo'
import TokenChip from '../../../components/TokenChip/TokenChip'
import IdContext from '../../../contexts/IdContext'
import { useNetworkContext } from '../../../contexts/NetworkContext'
import { useAppSelector } from '../../../redux/hooks'
import {
  addressBookSelectors,
  createEntryId
} from '../../../redux/slices/addressBook.slice'
import { ensApi } from '../../../redux/slices/ensResolver.slice'
import { sfSubgraph, sfGdaSubgraph } from '../../../redux/store'
import ellipsisAddress from '../../../utils/ellipsisAddress'
import SubgraphQueryLink from '../../subgraph/SubgraphQueryLink'
import {
  incomingStreamOrderingDefault,
  incomingStreamPagingDefault
} from './AccountIncomingStreamsTable'
import AccountIndexes from './AccountIndexes'
import {
  publishedIndexOrderingDefault,
  publishedIndexPagingDefault
} from './AccountIndexPublicationsTable'
import {
  indexSubscriptionOrderingDefault,
  indexSubscriptionPagingDefault
} from './AccountIndexSubscriptionsTable'
import AccountMap from './AccountMap'
import {
  outgoingStreamOrderingDefault,
  outgoingStreamPagingDefault
} from './AccountOutgoingStreamsTable'
import AccountPools from './AccountPools'
import AccountStreams from './AccountStreams'
import AccountTokenBalance from './AccountTokenBalance'
import AccountTokens from './AccountTokens'
import { useAddress, useAfChannel } from '../../../hooks/useAddressDisplay'
import AccountAddress from "../../../components/Address/AccountAddress"
import { channel } from 'diagnostics_channel'

const AccountPage: NextPage = () => {
  const network = useNetworkContext()
  const address = useContext(IdContext)
  const accountQuery = sfSubgraph.useAccountQuery({
    chainId: network.chainId,
    id: address
  })

  const user = useAddress(address, false);
  console.log("user: ", user);
  const {ensName: name, avatar, isFetching} = user;
  const afChannel = useAfChannel({name: name?.split("(")[0].trim() || ""});
  const isChannel = name?.includes("AF channel");
  const isAFUser = name?.includes("AF user");

  const prefetchStreamsQuery = sfSubgraph.usePrefetch('streams')
  const prefetchIndexesQuery = sfSubgraph.usePrefetch('indexes')
  const prefetchIndexSubscriptionsQuery =
    sfSubgraph.usePrefetch('indexSubscriptions')
  // const prefetchTokensQuery = sfSubgraph.usePrefetch("accountTokenSnapshots");
  // const prefetchEventsQuery = sfSubgraph.usePrefetch("events");

  const tokenSnapshotQuery = sfSubgraph.useAccountTokenSnapshotsQuery({
    chainId: network.chainId,
    order: {
      orderBy: 'balanceUntilUpdatedAt',
      orderDirection: 'desc'
    },
    filter: {
      account: address
    },
    pagination: {
      take: 50,
      skip: 0
    }
  })
  
  // fetch the user's channel
  const channelPoolQuery = sfGdaSubgraph.usePoolsQuery({
    chainId: network.chainId,
    filter: {
      admin: address,
    },
    pagination: {
      take: 1
    }
  });

  const router = useRouter()
  const { tab } = router.query
  const [tabValue, setTabValue] = useState<string>('tokens')
  // Effect to update state based on router.query
  useEffect(() => {
    if (typeof tab === 'string') {
      setTabValue(tab);
    }
  }, [tab]);

  useEffect(() => {
    router.replace({
      query: {
        _network: network.slugName,
        _id: address,
        tab: tabValue
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabValue])

  const addressBookEntry = useAppSelector((state: any) =>
    network
      ? addressBookSelectors.selectById(state, createEntryId(network, address))
      : undefined
  )

  if (
    !accountQuery.isUninitialized &&
    !accountQuery.isLoading &&
    !accountQuery.data
  ) {
    return <Error statusCode={404} />
  }

  const tokens = tokenSnapshotQuery.data?.data || []
  const tokensWithBalance = tokens.filter(
    (snapshot) => Number(snapshot.balanceUntilUpdatedAt) !== 0
  )
  console.log("tokensWithBalance: ", tokensWithBalance);

  const accountType =
    name?.includes("AF") ? (
      name?.includes("channel") 
      ? 'AlfaFrens channel' 
      : 'AlfaFrens user'
    ) : accountQuery.data 
      ? (
          accountQuery.data.isSuperApp 
          ? 'Super App'
          : 'Regular account'
        )
      : null;

  const pool: Pool | null | undefined = (channelPoolQuery && channelPoolQuery?.data?.data?.[0]) || undefined;
  const precisionLoss = 1/Number(pool?.perUnitFlowRate)*100 > 100 ? 100 : 1/Number(pool?.perUnitFlowRate)*100;
  const precisionRisk = precisionLoss > 20 ? "red" : precisionLoss > 5 ? "orange" : "green";
  
  return (
    <Container component={Box} sx={{ my: 2, py: 2 }}>
      <Stack direction="row" alignItems="center" gap={1}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.secondary">
            {network && network.displayName}
          </Typography>
          <Typography color="text.secondary">Accounts</Typography>
          <Typography color="text.secondary" sx={{ whiteSpace: 'nowrap' }}>
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
            {
              avatar &&
                <Avatar src={avatar} />
            }
            <Typography
              data-cy={'name'}
              variant="h4"
              component="h1"
              sx={{ mx: 1 }}
            >
              {/* TODO(KK): When there's an address book entry then ENS name is not displayed anywhere. Not sure if I like it...  */}
              {addressBookEntry ? addressBookEntry.nameTag : name}
            </Typography>
            <Typography
              data-cy={'address'}
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
        <List sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
          <ListItem>
            <ListItemText
              data-cy={'network-name'}
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
              data-cy={'account-type'}
              secondary={
                <>
                  Account type
                  <InfoTooltipBtn
                    dataCy={'account-type-tooltip'}
                    title="Either a regular account or a super app."
                  />
                </>
              }
              primary={
                accountType ? accountType : (
                  <Skeleton sx={{ width: '40px' }} />
                )
              }
            />
          </ListItem>
          {
            accountType?.includes("AlfaFrens") &&
            <ListItem>
              {
                accountType?.includes("channel") && afChannel?.aaAddress
                ? (
                  <ListItemText
                  data-cy={'af-owner'}
                  secondary={
                    <>
                    Channel Owner
                    </>
                  }
                  primary={
                    <AccountAddress 
                      network={network}
                      address={afChannel.aaAddress}
                      />
                  }
                />
                ) : afChannel?.channelAddress 
                  ? (
                    <ListItemText
                    data-cy={'af-channel'}
                    secondary={
                      <>
                      User Channel 
                      </>
                    }
                    primary={
                      <AccountAddress 
                        network={network}
                        address={afChannel.channelAddress}
                        />
                    }
                    />
                  ) : (
                    <></>
                  )
              }
            </ListItem>
          }
        </List>
      </Card>

      {(tokenSnapshotQuery.isFetching || tokenSnapshotQuery.isLoading) && (
        <Skeleton
          sx={{
            height: 112,
            width: '100%',
            transform: 'scale(1)',
            mt: 3
          }}
        />
      )}

      {tokensWithBalance.length > 0 && (
        <Card elevation={2} sx={{ mt: 3 }}>
          <Typography variant="h6" component="h2" sx={{ mx: 2, mt: 2 }}>
            Balances
          </Typography>
          <Grid container rowSpacing={0} columnSpacing={1} component={List}>
            {tokensWithBalance.map((tokenSnapshot) => (
              <Grid item sm={3} key={tokenSnapshot.id}>
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
                            display: 'grid',
                            gridTemplateColumns: 'auto 1fr',
                            columnGap: 1,
                            alignItems: 'center'
                          }}
                        >
                          <TokenChip
                            network={network}
                            tokenAddress={tokenSnapshot.token}
                            ChipProps={{
                              sx: {
                                width: '100%'
                              }
                            }}
                          />
                          <FlowingBalance
                            balance={balance}
                            balanceTimestamp={balanceTimestamp}
                            flowRate={flowRate}
                          />

                          {flowRate != '0' && (
                            <>
                              <Typography
                                variant="caption"
                                sx={{
                                  textAlign: 'right'
                                }}
                              >
                                Net Flow rate:
                              </Typography>
                              <Typography variant="caption">
                                <FlowRate flowRate={flowRate} />
                              </Typography>
                              {
                                isChannel && 
                                (
                                  <>
                                    <Typography
                                      variant="subtitle2"
                                      sx={{
                                        textAlign: "right"
                                      }}
                                    >
                                      Channel Stats:
                                    </Typography>
                                    <Typography></Typography>
                                    <Typography
                                      variant="caption"
                                      sx={{
                                        textAlign: 'right'
                                      }}
                                    >
                                      InFlow rate:
                                    </Typography>
                                    <Typography variant="caption">
                                      <FlowRate flowRate={tokenSnapshot.totalInflowRate} />
                                    </Typography>
                                    <Typography
                                      variant="caption"
                                      sx={{
                                        textAlign: 'right'
                                      }}
                                    >
                                      OutFlow rate:
                                    </Typography>
                                    <Typography variant="caption">
                                      <FlowRate flowRate={tokenSnapshot.totalOutflowRate} />
                                    </Typography>
                                    <Typography
                                      variant="caption"
                                      sx={{
                                        textAlign: 'right'
                                      }}
                                      color={precisionRisk}
                                    >
                                      Potential Precision Loss:
                                      
                                    </Typography>
                                    <Typography variant="caption" color={precisionRisk}>
                                      { precisionLoss } %
                                      <InfoTooltipBtn
                                        dataCy={'total-units-tooltip'}
                                        title="The % of expected outflow potentially lost to the adjustmentFlowrate"
                                      />
                                    </Typography>
                                  </>
                                )
                              }

                              {
                                isAFUser && 
                                (
                                  <>
                                    <Typography
                                      variant="subtitle2"
                                      sx={{
                                        textAlign: "right"
                                      }}
                                    >
                                      User Stats:
                                    </Typography>
                                    <Typography></Typography>
                                    <Typography
                                      variant="caption"
                                      sx={{
                                        textAlign: 'right'
                                      }}
                                    >
                                      OutFlow rate:
                                    </Typography>
                                    <Typography variant="caption">
                                      <FlowRate flowRate={tokenSnapshot.totalOutflowRate} />
                                    </Typography>
                                  </>
                                )
                              }
                            </>
                          )}

                          {flowRate != '0' &&
                            flowRate.toString().charAt(0) === '-' && (
                              <>
                                <Typography
                                  variant="caption"
                                  sx={{
                                    textAlign: 'right'
                                  }}
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
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              variant="scrollable"
              scrollButtons="auto"
              onChange={(_event, newValue: string) => setTabValue(newValue)}
              aria-label="tabs"
            >
              <Tab
                data-cy={'super-tokens-tab'}
                label="Super Tokens"
                value="tokens"
              />
              <Tab
                label="Streams (CFA)"
                data-cy={'streams-tab'}
                value="streams"
                onMouseEnter={() => {
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
                }}
              />
              <Tab
                data-cy={'indexes-tab'}
                label="Indexes (IDA)"
                value="indexes"
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
                }}
              />
              {network.supportsGDA && (
                <Tab data-cy={'pools-tab'} label="Pools (GDA)" value="pools" />
              )}
              <Tab data-cy={'events-tab'} label="Events" value="events" />
              <Tab data-cy={'map-tab'} label="Map" value="map" />
            </TabList>
          </Box>

          <Box>
            <TabPanel value="events">
              <EventTableWithInfo network={network} address={address} />
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
            <TabPanel value="pools">
              <AccountPools network={network} accountAddress={address} />
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
  )
}

export default AccountPage
