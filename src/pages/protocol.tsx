import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Tab,
  Typography,
} from "@mui/material";
import { FC, SyntheticEvent, useState } from "react";
import CopyClipboard from "../components/CopyClipboard";
import InfoTooltipBtn from "../components/InfoTooltipBtn";
import { networksByTestAndName } from "../redux/networks";
import protocolContracts from "../redux/protocolContracts";

interface AddressListItemProps {
  title: string;
  address?: string;
}

const AddressListItem: FC<AddressListItemProps> = ({ title, address }) => (
  <ListItem>
    <ListItemText
      primary={title}
      secondary={
        <Stack direction="row" alignItems="center">
          {address || "-"}
          {address && <CopyClipboard copyText={address} />}
        </Stack>
      }
    />
  </ListItem>
);

const Protocol: FC = () => {
  const [activeTab, setActiveTab] = useState("matic");

  const onTabChange = (_event: SyntheticEvent, newValue: string) =>
    setActiveTab(newValue);

  const {
    resolver,
    host,
    CFAv1,
    IDAv1,
    superTokenFactory,
    superfluidLoaderv1,
    TOGA,
  } = protocolContracts[activeTab] || {};

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
                    secondary={
                      <>
                        Deposit size
                        <InfoTooltipBtn title="The amount of tokens that an account must temporarily lock up when a stream is started." />
                      </>
                    }
                  />
                  <ListItemText
                    primary={`${network.isTestnet ? 1 : 4} hour flowrate`}
                    secondary={
                      <>
                        Owed deposit size
                        <InfoTooltipBtn title="Extra deposit that super apps can lock for opening new streams." />
                      </>
                    }
                  />
                  <ListItemText
                    primary={`${network.isTestnet ? 12 : 30} minutes`}
                    secondary={
                      <>
                        Patrician period
                        <InfoTooltipBtn title="Time after the streamer runs out of tokens and stream can be closed by anyone, but reward goes to Patrician" />
                      </>
                    }
                  />
                </Box>
              </CardContent>
              <Divider />
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
                    secondary={
                      <>
                        Minimum exit period
                        <InfoTooltipBtn title="Lower bound for how long it would take a PIC to stream out the stake." />
                      </>
                    }
                  />
                  <ListItemText
                    primary="4 weeks"
                    secondary={
                      <>
                        Default exit period
                        <InfoTooltipBtn title="Default amount of time for PIC to stream out the stake." />
                      </>
                    }
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
                <AddressListItem title="Resolver" address={resolver} />
                <AddressListItem title="Host" address={host} />
                <AddressListItem title="CFAv1" address={CFAv1} />
                <AddressListItem title="IDAv1" address={IDAv1} />
                <AddressListItem
                  title="SuperTokenFactory"
                  address={superTokenFactory}
                />
                <AddressListItem
                  title="SuperfluidLoader v1"
                  address={superfluidLoaderv1}
                />
                <AddressListItem title="TOGA" address={TOGA} />
              </List>
            </Card>
          </TabPanel>
        ))}
      </TabContext>
    </Container>
  );
};

export default Protocol;
