import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Card, CardContent, Container, NoSsr, Tab } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { SyntheticEvent, useContext, useState } from "react";
import SuperTokensTable from "../../components/Tables/SuperTokensTable";
import NetworkContext from "../../contexts/NetworkContext";
import { networks } from "../../redux/networks";

const SuperTokens: NextPage = ({}) => {
  const network = useContext(NetworkContext);

  const router = useRouter();
  const onTabChange = (_event: SyntheticEvent, newValue: string) =>
    router.replace({
      query: {
        ...router.query,
        "_network": newValue
      }
    });

  return (
    <Container component={Box} sx={{ my: 2, py: 2 }}>
      <TabContext value={network.slugName}>
        <Card>
          <TabList
            variant="scrollable"
            scrollButtons="auto"
            data-cy={"landing-page-networks"}
            onChange={onTabChange}
          >
            {networks.map((network) => (
              <Tab
                data-cy={`${network.slugName}-landing-button`}
                key={`Tab_${network.slugName}`}
                label={network.displayName}
                value={network.slugName}
              />
            ))}
          </TabList>
        </Card>

        {networks.map((network) => (
          <TabPanel
            key={network.slugName}
            value={network.slugName}
            sx={{ px: 0 }}
          >
            <Card>
              <CardContent>
                <NoSsr>
                  <SuperTokensTable network={network} />
                </NoSsr>
              </CardContent>
            </Card>
          </TabPanel>
        ))}
      </TabContext>
    </Container>
  );
};

export default SuperTokens;
