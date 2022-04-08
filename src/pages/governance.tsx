import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Card, Container, Tab } from "@mui/material";
import sortBy from "lodash/fp/sortBy";
import { FC, SyntheticEvent, useState } from "react";
import GovernanceTab from "../components/Tabs/GovernanceTab";
import { networks } from "../redux/networks";

interface GovernanceProps {}

// TODO: Governance data prefetching logic
const Governance: FC<GovernanceProps> = ({}) => {
  const [activeTab, setActiveTab] = useState("matic");

  const onTabChange = (_event: SyntheticEvent, newValue: string) =>
    setActiveTab(newValue);

  const networksOrdered = sortBy(
    [(x) => x.isTestnet, (x) => x.slugName],
    networks
  );

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
            {networksOrdered.map((network) => (
              <Tab
                data-cy={`${network.slugName}-landing-button`}
                key={`Tab_${network.slugName}`}
                label={network.displayName}
                value={network.slugName}
              />
            ))}
          </TabList>
        </Card>
        {networksOrdered.map((network) => (
          <TabPanel
            key={network.slugName}
            value={network.slugName}
            sx={{ px: 0 }}
          >
            <GovernanceTab network={network} />
          </TabPanel>
        ))}
      </TabContext>
    </Container>
  );
};

export default Governance;
