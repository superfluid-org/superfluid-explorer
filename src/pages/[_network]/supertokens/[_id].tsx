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
  }, [superToken]);

  const [tabValue, setTabValue] = useState<string>("streams");

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
            <Typography color="text.secondary">
              {superToken && superToken.symbol}
            </Typography>
          </Breadcrumbs>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h3" component="h1">
            {superToken ? superToken.name : <SkeletonTokenName />}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Card elevation={2}>
            <Grid container>
              <Grid item md={6}>
                <List>
                  <ListItem divider>
                    <ListItemText
                      secondary="Symbol"
                      primary={
                        superToken ? superToken.symbol : <SkeletonTokenSymbol />
                      }
                    />
                  </ListItem>
                  <ListItem divider>
                    <ListItemText
                      secondary="Address"
                      primary={superToken ? superToken.id : <SkeletonAddress />}
                    />
                  </ListItem>
                  <ListItem divider>
                    <ListItemText
                      secondary="Listed"
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
                      secondary="Network"
                      primary={<NetworkDisplay network={network} />}
                    />
                  </ListItem>
                  <ListItem divider>
                    <ListItemText
                      secondary="Underlying Token Address"
                      primary={
                        superToken ? (
                          superToken.underlyingAddress
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
                  <Tab label="Streams" value="streams" />
                  <Tab label="Indexes" value="indexes" />
                  <Tab label="Events" value="events" />
                </TabList>
              </Box>
              <Box>
                <TabPanel value="events">
                  {<EventList network={network} address={address} />}
                </TabPanel>
                <TabPanel value="streams">
                  {
                    <SuperTokenStreams
                      network={network}
                      tokenAddress={address}
                    />
                  }
                </TabPanel>
                <TabPanel value="indexes">
                  {
                    <SuperTokenIndexes
                      network={network}
                      tokenAddress={address}
                    />
                  }
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
