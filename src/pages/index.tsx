import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Card, Divider, Grid, Stack, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { networks } from "../redux/networks";
import {
  defaultStreamQueryOrdering,
  defaultStreamQueryPaging,
  NetworkStreams,
} from "../components/NetworkStreams";
import _ from "lodash";
import SearchBar from "../components/SearchBar";
import AppLink from "../components/AppLink";
import { sfSubgraph } from "../redux/store";

const Home: NextPage = () => {
  const [value, setValue] = React.useState("matic");

  const networksOrdered = _.sortBy(
    networks,
    (x) => x.isTestnet,
    (x) => x.slugName
  );
  const prefetchStreamsQuery = sfSubgraph.usePrefetch("streams", {
    ifOlderThan: 45,
  });

  return (
    <>
      <Box
        sx={{
          width: "100%",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Welcome to Superfluid Console
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            paragraph
          >
            Superfluid Console is an explorer meant for developers and advanced
            users of the{" "}
            <AppLink
              data-cy={"protocol-link"}
              href="https://docs.superfluid.finance/superfluid/protocol-overview/what-is-superfluid"
              target="_blank"
              rel="noreferrer"
            >
              Superfluid Protocol
            </AppLink>
            .
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          ></Stack>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Card data-cy={"landing-page-card"}>
          <Typography variant="h5" sx={{ my: 2, mx: 3 }}>
            Latest Streams
          </Typography>
          <Divider />
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                variant="scrollable"
                scrollButtons="auto"
                data-cy={"landing-page-networks"}
                onChange={(_event, newValue: string) => setValue(newValue)}
              >
                {networksOrdered.map((network) => (
                  <Tab
                    data-cy={`${network.slugName}-landing-button`}
                    key={`Tab_${network.slugName}`}
                    label={network.displayName}
                    value={network.slugName}
                    onMouseEnter={() =>
                      prefetchStreamsQuery({
                        chainId: network.chainId,
                        order: defaultStreamQueryOrdering,
                        pagination: defaultStreamQueryPaging,
                      })
                    }
                  />
                ))}
              </TabList>
            </Box>
            {networksOrdered.map((network) => (
              <TabPanel
                key={`TabPanel_${network.slugName}`}
                value={network.slugName}
                data-cy={`${network.slugName}-streams`}
              >
                <NetworkStreams network={network} />
              </TabPanel>
            ))}
          </TabContext>
        </Card>
      </Container>
    </>
  );
};

export default Home;
