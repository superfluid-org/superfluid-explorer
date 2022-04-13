import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Card,
  CardContent,
  Container,
  List,
  ListItem,
  ListItemText,
  Stack,
  Tab,
  Typography,
} from "@mui/material";
import sortBy from "lodash/fp/sortBy";
import { FC, SyntheticEvent, useState } from "react";
import CopyClipboard from "../components/CopyClipboard";
import { networks } from "../redux/networks";

const FRAMEWORKS = [
  {
    name: "Resolver",
    address: "0xe0cc76334405ee8b39213e620587d815967af39c",
  },
  {
    name: "Host",
    address: "0x3e14dc1b13c488a8d5d310918780c983bd5982e7",
  },
  {
    name: "CFAv1",
    address: "0x6eee6060f715257b970700bc2656de21dedf074c",
  },
  {
    name: "IDAv1",
    address: "0xb0aabba4b2783a72c52956cdef62d438eca2d7a1",
  },
  {
    name: "SuperTokenFactory",
    address: "0x2c90719f25b10fc5646c82da3240c76fa5bccf34",
  },
  {
    name: "SuperfluidLoader v1",
    address: "0x15f0ca26781c3852f8166ed2ebce5d18265cceb7",
  },
  {
    name: "TOGA",
    address: "0x6aeaee5fd4d05a741723d752d30ee4d72690a8f7",
  },
];

interface ProtocolProps {}

// TODO: Protocol data prefetching logic
const Protocol: FC<ProtocolProps> = ({}) => {
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
            <Typography
              variant="h5"
              component="h2"
              sx={{
                px: 2,
                mt: 2,
                mb: 2,
              }}
            >
              Governance parameters
            </Typography>

            <Card>
              <CardContent>
                <Typography variant="h6" component="h2" sx={{ mb: 1 }}>
                  Deposit
                </Typography>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                  }}
                >
                  <ListItemText
                    primary={`${network.isTestnet ? 1 : 4} hour flowrate`}
                    secondary="Deposit size"
                  />
                  <ListItemText
                    primary={`${network.isTestnet ? 1 : 4} hour flowrate`}
                    secondary="Owed deposit size"
                  />
                  <ListItemText
                    primary={`${network.isTestnet ? 12 : 30} minutes`}
                    secondary="Patrician period"
                  />
                </Box>
              </CardContent>

              <CardContent>
                <Typography variant="h6" component="h2" sx={{ mb: 1 }}>
                  TOGA
                </Typography>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                  }}
                >
                  <ListItemText
                    primary="1 week"
                    secondary="Minimum exit period"
                  />
                  <ListItemText
                    primary="4 weeks"
                    secondary="Default exit period"
                  />
                </Box>
              </CardContent>
            </Card>

            <Typography
              variant="h5"
              component="h2"
              sx={{
                px: 2,
                mt: 4,
                mb: 2,
              }}
            >
              Contract addresses
            </Typography>

            <Card>
              <List
                sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", pb: 2 }}
              >
                {FRAMEWORKS.map((framework, i) => (
                  <ListItem key={framework.address}>
                    <ListItemText
                      primary={framework.name}
                      secondary={
                        <Stack direction="row" alignItems="center">
                          {framework.address}
                          <CopyClipboard copyText={framework.address} />
                        </Stack>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Card>
          </TabPanel>
        ))}
      </TabContext>
    </Container>
  );
};

export default Protocol;
