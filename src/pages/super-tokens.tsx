import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Card, CardContent, Container, NoSsr, Tab } from "@mui/material";
import { useRouter } from "next/router";
import { FC, SyntheticEvent, useEffect, useState } from "react";
import SuperTokensTable, { RequiredTokensQuery } from "../components/Tables/SuperTokensTable";
import { networksByTestAndName, tryGetNetwork } from "../redux/networks";

interface SuperTokensProps {}

const SuperTokens: FC<SuperTokensProps> = ({}) => {
  const [activeTab, setActiveTab] = useState("matic");

  const onTabChange = (_event: SyntheticEvent, newValue: string) =>
    setActiveTab(newValue);

  useEffect(() => {
    const urlQueryParams = new URLSearchParams(window.location.search);
    const urlFilter = urlQueryParams.get("filter");
    if(typeof urlFilter === "string"){
      const { chainId }: RequiredTokensQuery = JSON.parse(urlFilter);
      const networkSlug = tryGetNetwork(chainId);
      if(networkSlug != null) {
        const { slugName } = networkSlug;
        setActiveTab(slugName);
      }
    }
  }, [setActiveTab])

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
