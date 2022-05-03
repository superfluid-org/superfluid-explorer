import { useContext, useEffect, useState } from "react";
import { sfSubgraph } from "../../../redux/store";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
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
import { Box } from "@mui/system";
import { Token } from "@superfluid-finance/sdk-core";
import { NextPage } from "next";
import Error from "next/error";
import { useRouter } from "next/router";
import AppLink from "../../../components/AppLink";
import { ethers } from "ethers";
import SubgraphQueryLink from "../../../components/SubgraphQueryLink";
import { gql } from "graphql-request";
import InfoTooltipBtn from "../../../components/InfoTooltipBtn";
import CopyClipboard from "../../../components/CopyClipboard";
import CopyLink from "../../../components/CopyLink";
import EtherFormatted from "../../../components/EtherFormatted";
import EventList from "../../../components/EventList";
import FlowingBalance from "../../../components/FlowingBalance";
import NetworkDisplay from "../../../components/NetworkDisplay";
import SkeletonAddress from "../../../components/skeletons/SkeletonAddress";
import SkeletonTokenName from "../../../components/skeletons/SkeletonTokenName";
import SuperTokenIndexes from "../../../components/SuperTokenIndexes";
import SuperTokenStreams from "../../../components/SuperTokenStreams";
import IdContext from "../../../contexts/IdContext";
import NetworkContext from "../../../contexts/NetworkContext";

const SuperTokenPage: NextPage = () => {
  const network = useContext(NetworkContext);
  const address = useContext(IdContext);

  const tokenQuery = sfSubgraph.useTokenQuery({
    chainId: network.chainId,
    id: address,
  });

  const tokenStatisticsQuery = sfSubgraph.useTokenStatisticQuery({
    chainId: network.chainId,
    id: address,
  });

  const superToken: Token | null | undefined = tokenQuery.data;

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

  if (
    !tokenQuery.isUninitialized &&
    !tokenQuery.isLoading &&
    (!tokenQuery.data || !tokenQuery.data.isSuperToken)
  ) {
    return <Error statusCode={404} />;
  }

  const tokenStatistics = tokenStatisticsQuery.data;

  return (
    <Container component={Box} sx={{ my: 2, py: 2 }}>
      <Stack direction="row" alignItems="center" gap={1}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.secondary">{network.displayName}</Typography>
          <Typography color="text.secondary">Super Tokens</Typography>
          <Typography color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
            {superToken && superToken.symbol}
          </Typography>
        </Breadcrumbs>
        <CopyLink localPath={`/${network.slugName}/supertokens/${address}`} />
      </Stack>

      <Box sx={{ mt: 1 }}>
        {superToken ? (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h4" component="h1" sx={{ mr: 1 }}>
              {superToken.name}
            </Typography>
            <Stack direction="row" justifyContent="flex-end" flex={1} gap={1}>
              <SubgraphQueryLink
                network={network}
                query={gql`
                  query ($id: ID!) {
                    token(id: $id) {
                      name
                      symbol
                      isSuperToken
                      isListed
                      underlyingAddress
                      decimals
                      createdAtTimestamp
                      createdAtBlockNumber
                    }
                  }
                `}
                variables={`{ "id": "${address.toLowerCase()}" }`}
              />
              <Tooltip title="View on blockchain Explorer">
                <Button
                  size="small"
                  variant="outlined"
                  href={network.getLinkForAddress(superToken.id)}
                  target="_blank"
                  startIcon={<OpenInNewIcon />}
                >
                  Blockchain
                </Button>
              </Tooltip>
            </Stack>
          </Stack>
        ) : (
          <SkeletonTokenName />
        )}
      </Box>

      <Grid container spacing={3} sx={{ pt: 3 }}>
        <Grid item sm={6}>
          <Card elevation={2}>
            <List>
              <Stack direction="row">
                <ListItem divider>
                  <ListItemText
                    data-cy={"token-symbol"}
                    secondary="Symbol"
                    primary={
                      superToken ? (
                        superToken.symbol
                      ) : (
                        <Skeleton sx={{ width: 60 }} />
                      )
                    }
                  />
                </ListItem>
                <ListItem divider>
                  <ListItemText
                    data-cy={"token-fancy-network"}
                    secondary="Network"
                    primary={<NetworkDisplay network={network} />}
                  />
                </ListItem>
                <ListItem divider>
                  <ListItemText
                    data-cy={"token-listed-status"}
                    secondary={
                      <>
                        Listed
                        <InfoTooltipBtn
                          dataCy={"listed-tooltip"}
                          title={
                            <>
                              A token is listed & recognized by the Superfluid
                              protocol. Benefits of deploying a listed super
                              token include that it may be instantiated by
                              symbol in our SDK, and listed by symbol in the
                              Superfluid dashboard{" "}
                              <AppLink
                                data-cy={"listed-tooltip-link"}
                                href="https://docs.superfluid.finance/superfluid/protocol-developers/guides/super-tokens"
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
                      superToken ? (
                        superToken.isListed ? (
                          "Yes"
                        ) : (
                          "No"
                        )
                      ) : (
                        <Skeleton sx={{ width: 40 }} />
                      )
                    }
                  />
                </ListItem>
              </Stack>

              <ListItem divider>
                <ListItemText
                  data-cy={"token-address"}
                  secondary="Address"
                  primary={
                    superToken ? (
                      <Stack direction="row" alignItems="center">
                        {ethers.utils.getAddress(superToken.id)}
                        <CopyClipboard
                          copyText={ethers.utils.getAddress(superToken.id)}
                          description="Copy address to clipboard"
                        />
                      </Stack>
                    ) : (
                      <SkeletonAddress />
                    )
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  data-cy={"underlying-token-address"}
                  secondary={
                    <>
                      Underlying Token Address
                      <InfoTooltipBtn
                        dataCy={"underlying-token-tooltip"}
                        title={
                          <>
                            Already existing ERC20 token&apos;s address that has
                            been upgraded to super token.{" "}
                            <AppLink
                              data-cy={"underlying-token-tooltip-link"}
                              href="https://docs.superfluid.finance/superfluid/protocol-developers/guides/super-tokens"
                              target="_blank"
                            >
                              Read more
                            </AppLink>
                          </>
                        }
                        size={16}
                      />
                    </>
                  }
                  primary={
                    superToken ? (
                      superToken.underlyingAddress ===
                        "0x0000000000000000000000000000000000000000" ||
                      superToken.underlyingAddress === "0x" ? (
                        <>None</>
                      ) : (
                        <Tooltip title="View on blockchain explorer">
                          <AppLink
                            href={network.getLinkForAddress(
                              superToken.underlyingAddress
                            )}
                            target="_blank"
                          >
                            <Grid container alignItems="center">
                              {ethers.utils.getAddress(
                                superToken.underlyingAddress
                              )}
                              <OpenInNewIcon
                                sx={{ ml: 0.5, fontSize: "inherit" }}
                              />
                            </Grid>
                          </AppLink>
                        </Tooltip>
                      )
                    ) : (
                      <SkeletonAddress />
                    )
                  }
                />
              </ListItem>
            </List>
          </Card>
        </Grid>

        <Grid item sm={6}>
          <Card elevation={2}>
            <List sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <ListItem divider>
                <ListItemText
                  secondary="Total streams"
                  primary={
                    tokenStatistics ? (
                      tokenStatistics.totalNumberOfActiveStreams +
                      tokenStatistics.totalNumberOfClosedStreams
                    ) : (
                      <Skeleton sx={{ width: "100px" }} />
                    )
                  }
                />
              </ListItem>

              <ListItem divider>
                <ListItemText
                  secondary="Indexes"
                  primary={
                    tokenStatistics ? (
                      tokenStatistics.totalNumberOfIndexes
                    ) : (
                      <Skeleton sx={{ width: "100px" }} />
                    )
                  }
                />
              </ListItem>

              <ListItem divider>
                <ListItemText
                  secondary="Active streams"
                  primary={
                    tokenStatistics ? (
                      tokenStatistics.totalNumberOfActiveStreams
                    ) : (
                      <Skeleton sx={{ width: "100px" }} />
                    )
                  }
                />
              </ListItem>

              <ListItem divider>
                <ListItemText
                  secondary="Active indexes"
                  primary={
                    tokenStatistics ? (
                      tokenStatistics.totalNumberOfActiveIndexes
                    ) : (
                      <Skeleton sx={{ width: "100px" }} />
                    )
                  }
                />
              </ListItem>

              <ListItem>
                <ListItemText
                  secondary="Closed streams"
                  primary={
                    tokenStatistics ? (
                      tokenStatistics.totalNumberOfClosedStreams
                    ) : (
                      <Skeleton sx={{ width: "100px" }} />
                    )
                  }
                />
              </ListItem>

              <ListItem>
                <ListItemText
                  secondary="Approved subscriptions"
                  primary={
                    tokenStatistics ? (
                      tokenStatistics.totalApprovedSubscriptions
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
          <ListItem divider>
            <ListItemText
              secondary="Total amount streamed"
              primary={
                tokenStatistics ? (
                  <FlowingBalance
                    balance={tokenStatistics.totalAmountStreamedUntilUpdatedAt}
                    balanceTimestamp={tokenStatistics.updatedAtTimestamp}
                    flowRate={tokenStatistics.totalOutflowRate}
                  />
                ) : (
                  // <EtherFormatted
                  //   wei={tokenStatistics.totalAmountStreamedUntilUpdatedAt}
                  // />
                  <Skeleton sx={{ width: "200px" }} />
                )
              }
            />
          </ListItem>

          <ListItem divider>
            <ListItemText
              secondary="Total amount distributed"
              primary={
                tokenStatistics ? (
                  <EtherFormatted
                    wei={tokenStatistics.totalAmountDistributedUntilUpdatedAt}
                  />
                ) : (
                  <Skeleton sx={{ width: "200px" }} />
                )
              }
            />
          </ListItem>

          <ListItem>
            <ListItemText
              secondary="Total amount transferred"
              primary={
                tokenStatistics ? (
                  <EtherFormatted
                    wei={tokenStatistics.totalAmountTransferredUntilUpdatedAt}
                  />
                ) : (
                  <Skeleton sx={{ width: "200px" }} />
                )
              }
            />
          </ListItem>

          <ListItem>
            <ListItemText
              secondary="Total supply"
              primary={
                tokenStatistics ? (
                  <EtherFormatted wei={tokenStatistics.totalSupply} />
                ) : (
                  <Skeleton sx={{ width: "200px" }} />
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
              <Tab data-cy={"streams-tab"} label="Streams" value="streams" />
              <Tab data-cy={"indexes-tab"} label="Indexes" value="indexes" />
              <Tab data-cy={"events-tab"} label="Events" value="events" />
            </TabList>
          </Box>
          <Box>
            <TabPanel value="events">
              <EventList network={network} address={address} />
            </TabPanel>
            <TabPanel value="streams">
              <SuperTokenStreams network={network} tokenAddress={address} />
            </TabPanel>
            <TabPanel value="indexes">
              <SuperTokenIndexes network={network} tokenAddress={address} />
            </TabPanel>
          </Box>
        </TabContext>
      </Card>
    </Container>
  );
};

export default SuperTokenPage;
