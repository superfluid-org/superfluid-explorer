import {
  Box,
  AppBar,
  Button,
  Toolbar,
  Container,
  Stack,
  Tooltip,
  IconButton,
} from "@mui/material";
import AppLink from "./AppLink";
import SearchDialog from "./SearchDialog";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { FC, useState } from "react";
import SubgraphIcon from "./SubgraphIcon";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import SettingsDrawer from "./SettingsDrawer";

export const SfAppBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <AppLink href="/" sx={{ display: "flex" }}>
            <Image
              data-cy={"superfluid-logo"}
              src="/superfluid-logo.svg"
              width={150}
              height={36}
              layout="fixed"
              alt="Superfluid logo"
            />
          </AppLink>

          <Container
            component={Box}
            maxWidth="md"
            sx={{
              display: searchOpen ? "none" : "inline",
            }}
          >
            <SearchBar>
              <Box
                sx={{
                  cursor: "pointer",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 10,
                }}
                onClick={() => setSearchOpen(true)}
              ></Box>
            </SearchBar>
          </Container>

          <SearchDialog open={searchOpen} close={() => setSearchOpen(false)} />

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <AppLink href="/subgraph">
              <Button
                sx={{ ml: 1, whiteSpace: "nowrap" }}
                id="search-button"
                size="medium"
                variant="contained"
              >
                <SubgraphIcon sx={{ mr: 1 }} />
                Subgraph Explorer
              </Button>
            </AppLink>
            <Tooltip title="Settings" enterDelay={100}>
              <IconButton
                sx={{ ml: 1 }}
                color="inherit"
                onClick={() => setSettingsOpen(true)}
              >
                <SettingsIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Toolbar>
      </AppBar>
      <SettingsDrawer
        onClose={() => setSettingsOpen(false)}
        open={settingsOpen}
      />
    </>
  );
};

export default SfAppBar;
