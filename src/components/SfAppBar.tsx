import {
  Box,
  AppBar,
  Toolbar,
  Container,
  Stack,
  Tooltip,
  IconButton,
  Typography,
} from "@mui/material";
import AppLink from "./AppLink";
import SearchDialog from "./SearchDialog";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { FC, useState } from "react";
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
            spacing={6}
          >
            <Stack direction="row" alignItems="center" spacing={4}>
              <AppLink data-cy="token-page-button" href="/super-tokens" sx={{ textDecoration: "none" }}>
                <Typography
                  variant="button"
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    color: "white",
                    textTransform: "none",
                  }}
                >
                  Tokens
                </Typography>
              </AppLink>
              <AppLink data-cy={"protocol-button"} href="/protocol" sx={{ textDecoration: "none" }}>
                <Typography
                  variant="button"
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    color: "white",
                    textTransform: "none",
                  }}
                >
                  Protocol
                </Typography>
              </AppLink>
              <AppLink
                id="subgraph-button"
                href="/subgraph"
                sx={{ textDecoration: "none" }}
              >
                <Typography
                  variant="button"
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    color: "white",
                    textTransform: "none",
                  }}
                >
                  Subgraph
                </Typography>
              </AppLink>
            </Stack>
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
