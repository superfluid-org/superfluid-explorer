import {
  Box,
  AppBar,
  Button,
  Toolbar,
  Container,
  Stack
} from "@mui/material";
import AppLink from "./AppLink";
import SearchDialog from "./SearchDialog";
import SelectThemeButton from "./SelectThemeButton";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { FC, useState } from "react";
import SubgraphIcon from "./SubgraphIcon";

export const SfAppBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <AppLink href="/">
          <Box>
            <Image
              data-cy={"superfluid-logo"}
              src="/superfluid-logo.svg"
              width={150}
              height={36}
              layout="fixed"
              alt="Superfluid logo"
            />
          </Box>
        </AppLink>

        <Container
          component={Box}
          maxWidth="md"
          sx={{
            display: isSearchOpen ? "none" : "inline",
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
              onClick={() => setIsSearchOpen(true)}
            ></Box>
          </SearchBar>
        </Container>

        <SearchDialog open={isSearchOpen} close={() => setIsSearchOpen(false)} />

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
              <SubgraphIcon sx={{ mr: 1 }}  />
              Subgraph Explorer
            </Button>
          </AppLink>
          <SelectThemeButton />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default SfAppBar;
