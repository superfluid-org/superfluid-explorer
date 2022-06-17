import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Card, CardContent, Container, NoSsr, Tab } from "@mui/material";
import { FC, SyntheticEvent, useState } from "react";
import SuperTokensTable from "../components/Tables/SuperTokensTable";
import { networksByTestAndName } from "../redux/networks";

interface SuperTokensProps {}

const SuperTokens: FC<SuperTokensProps> = ({}) => {
  const [activeTab, setActiveTab] = useState("matic");

  const onTabChange = (_event: SyntheticEvent, newValue: string) =>
    setActiveTab(newValue);

  return (
    <Container component={Box} sx={{ my: 2, py: 2 }}>
      <TabContext value={activeTab}>
        <Card>
          <TabList
            variant="scrollable"
            scrollButtons="auto"
            data-cy={"landing-page-networks"}
            onChange={onTabChange}
          >
            {networksByTestAndName.map((network) => (
              <Tab
                data-cy={`${network.slugName}-landing-button`}
                key={`Tab_${network.slugName}`}
                label={network.displayName}
                value={network.slugName}
              />
            ))}
          </TabList>
        </Card>

        {networksByTestAndName.map((network) => (
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
