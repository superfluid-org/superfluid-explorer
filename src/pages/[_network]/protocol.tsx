import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { TabContext, TabPanel } from "@mui/lab";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { FC, useContext } from "react";
import CopyClipboard from "../../components/CopyClipboard";
import InfoTooltipBtn from "../../components/InfoTooltipBtn";
import NetworkTabs from "../../components/NetworkTabs";
import NetworkContext from "../../contexts/NetworkContext";
import { Network, networks } from "../../redux/networks";
import protocolContracts from "../../redux/protocolContracts";

interface AddressListItemProps {
  title: string;
  network: Network;
  address?: string;
  dataCy?: string;
}

const AddressListItem: FC<AddressListItemProps> = ({
  network,
  title,
  address,
  dataCy,
}) => (
  <ListItem>
    <ListItemText
      data-cy={dataCy}
      primary={title}
      secondary={
        <Stack
          component="span"
          direction="row"
          alignItems="center"
          sx={{ fontFamily: "Roboto Mono" }}
        >
          {address || "-"}
          {address && (
            <Stack component="span" direction="row" alignItems="center" gap={1}>
              <CopyClipboard
                copyText={address}
                IconProps={{ sx: { fontSize: "16px" } }}
              />
              <Tooltip title="View on blockchain Explorer">
                <Link
                  href={network.getLinkForAddress(address)}
                  target="_blank"
                  sx={{ color: "inherit" }}
                >
                  <OpenInNewIcon sx={{ fontSize: "16px", display: "block" }} />
                </Link>
              </Tooltip>
            </Stack>
          )}
        </Stack>
      }
    />
  </ListItem>
);

const Protocol: NextPage = () => {
  const network = useContext(NetworkContext);
  const router = useRouter();

  const onTabChange = (newValue: string) =>
    router.replace({
      query: {
        ...router.query,
        _network: newValue,
      },
    });

  const {
    resolver,
    host,
    CFAv1,
    IDAv1,
    superTokenFactory,
    superfluidLoaderv1,
    TOGA,
  } = protocolContracts[network.slugName] || {};

  return (
    <Container component={Box} sx={{ my: 2, py: 2 }}>
      <TabContext value={network.slugName}>
        <Card>
          <NetworkTabs
            activeTab={network.slugName}
            setActiveTab={onTabChange}
          />
        </Card>

        {networks.map((network) => (
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
                    data-cy={"deposit"}
                    primary={`${network.isTestnet ? 1 : 4} hour flowrate`}
                    secondary={
                      <>
                        Deposit size
                        <InfoTooltipBtn title="The amount of tokens that an account must temporarily lock up when a stream is started." />
                      </>
                    }
                  />
                  <ListItemText
                    data-cy={"owed-deposit"}
                    primary={`${network.isTestnet ? 1 : 4} hour flowrate`}
                    secondary={
                      <>
                        Owed deposit size
                        <InfoTooltipBtn title="Extra deposit that super apps can lock for opening new streams." />
                      </>
                    }
                  />
                  <ListItemText
                    data-cy={"patrician-period"}
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
                    data-cy={"toga-min-exit-period"}
                    primary="1 week"
                    secondary={
                      <>
                        Minimum exit period
                        <InfoTooltipBtn title="Lower bound for how long it would take a PIC to stream out the stake." />
                      </>
                    }
                  />
                  <ListItemText
                    data-cy={"toga-default-exit-period"}
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
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  pb: 2,
                }}
              >
                <AddressListItem
                  dataCy={"resolver-address"}
                  title="Resolver"
                  network={network}
                  address={resolver}
                />
                <AddressListItem
                  dataCy={"host-address"}
                  title="Host"
                  network={network}
                  address={host}
                />
                <AddressListItem
                  dataCy={"CFAv1-address"}
                  title="CFAv1"
                  network={network}
                  address={CFAv1}
                />
                <AddressListItem
                  dataCy={"IDAv1-address"}
                  title="IDAv1"
                  network={network}
                  address={IDAv1}
                />
                <AddressListItem
                  dataCy={"SuperTokenFactory-address"}
                  title="SuperTokenFactory"
                  network={network}
                  address={superTokenFactory}
                />
                <AddressListItem
                  dataCy={"SuperLoaderV1-address"}
                  title="SuperfluidLoader v1"
                  network={network}
                  address={superfluidLoaderv1}
                />
                <AddressListItem
                  dataCy={"TOGA-address"}
                  title="TOGA"
                  network={network}
                  address={TOGA}
                />
              </List>
            </Card>
          </TabPanel>
        ))}
      </TabContext>
    </Container>
  );
};

export default Protocol;
