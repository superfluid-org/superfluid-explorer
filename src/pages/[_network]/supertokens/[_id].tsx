import { useContext, useEffect, useState } from "react";
import { sfSubgraph, sfApi } from "../../../redux/store";
import {
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
import { Box } from "@mui/system";
import NetworkDisplay from "../../../components/NetworkDisplay";
import { Token } from "@superfluid-finance/sdk-core";
import { NextPage } from "next";
import SuperTokenIndexes from "../../../components/SuperTokenIndexes";
import SuperTokenStreams from "../../../components/SuperTokenStreams";
import SkeletonTokenSymbol from "../../../components/skeletons/SkeletonTokenSymbol";
import SkeletonAddress from "../../../components/skeletons/SkeletonAddress";
import SkeletonTokenName from "../../../components/skeletons/SkeletonTokenName";
import EventList from "../../../components/EventList";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Error from "next/error";
import NetworkContext from "../../../contexts/NetworkContext";
import IdContext from "../../../contexts/IdContext";
import CopyLink from "../../../components/CopyLink";
import { useRouter } from "next/router";
import AppLink from "../../../components/AppLink";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { ethers } from "ethers";
import SubgraphQueryLink from "../../../components/SubgraphQueryLink";
import { gql } from "graphql-request";
import InfoTooltipBtn from "../../../components/InfoTooltipBtn";

const SuperTokenPage: NextPage = () => {
  const network = useContext(NetworkContext);
  const address = useContext(IdContext);

  const tokenQuery = sfSubgraph.useTokenQuery({
    chainId: network.chainId,
    id: address,
  });

  const superToken: Token | null | undefined = tokenQuery.data;

  const [triggerMonitoring, monitorResult] =
    sfApi.useMonitorForEventsToInvalidateCacheMutation();

  useEffect(() => {
    if (superToken) {
      triggerMonitoring({
        chainId: network.chainId,
        address: superToken.id,
      });
      return monitorResult.reset;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [superToken]);

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
    !tokenQuery.data
  ) {
    return <Error statusCode={404} />;
  }

  return (
    <Container component={Box} sx={{ my: 2, py: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="text.secondary">
              {network.displayName}
            </Typography>
            <Typography color="text.secondary">Super Tokens</Typography>
            <Typography color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
              {superToken && superToken.symbol}
            </Typography>
          </Breadcrumbs>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h4" component="h1">
            {superToken ? (
              <Grid container alignItems="center">
                <Grid item sx={{ mx: 0.5 }}>
                  {superToken.name}
                </Grid>
                <CopyLink
                  localPath={`/${network.slugName}/supertokens/${address}`}
                />
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
              </Grid>
            ) : (
              <SkeletonTokenName />
            )}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Card elevation={2}>
            <Grid container>
              <Grid item md={6}>
                <List>
                  <ListItem divider>
                    <ListItemText
                      data-cy={"token-symbol"}
                      secondary="Symbol"
                      primary={
                        superToken ? superToken.symbol : <SkeletonTokenSymbol />
                      }
                    />
                  </ListItem>
                  <ListItem divider>
                    <ListItemText
                      data-cy={"token-address"}
                      secondary="Address"
                      primary={
                        superToken ? (
                          <Tooltip title="View on blockchain explorer">
                            <AppLink
                              href={network.getLinkForAddress(superToken.id)}
                              target="_blank"
                            >
                              <Grid container alignItems="center">
                                {ethers.utils.getAddress(superToken.id)}
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
                          <Skeleton sx={{ width: "20px" }} />
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
                      data-cy={"token-fancy-network"}
                      secondary="Network"
                      primary={<NetworkDisplay network={network} />}
                    />
                  </ListItem>
                  <ListItem divider>
                    <ListItemText
                      data-cy={"underlying-token-address"}
                      secondary={
                        <>
                          Underlying Token Address
                          <InfoTooltipBtn
                            dataCy={"underlying-token-tooltip"}
                            title={
                              <>
                                Already existing ERC20 token&apos;s address that
                                has been upgraded to super token.{" "}
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
                    data-cy={"streams-tab"}
                    label="Streams"
                    value="streams"
                  />
                  <Tab
                    data-cy={"indexes-tab"}
                    label="Indexes"
                    value="indexes"
                  />
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default SuperTokenPage;
