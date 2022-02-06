import { FC, useEffect, useState } from "react";
import {
  Button,
  TextField,
  Typography,
  DialogContent,
  Dialog,
  InputAdornment,
  ListItem,
  List,
  ListItemButton,
  CircularProgress,
  Grid,
  Card,
  Divider,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/router";
import { sfApi, sfSubgraph } from "../redux/store";
import { skipToken } from "@reduxjs/toolkit/query";
import { ethers } from "ethers";
import { gql } from "graphql-request";
import SearchIcon from "@mui/icons-material/Search";
import AccountAddress, { AccountAddressFormatted } from "./AccountAddress";
import { SuperTokenFormatted } from "./SuperTokenAddress";
import { PossibleErrors } from "@superfluid-finance/sdk-redux";
import QueryError from "./QueryError";
import Box from "@mui/material/Box";
import { BoxProps } from "@mui/material/Box/Box";
import _ from "lodash";
import NextLink from "next/link";
import NetworkFormatted from "./NetworkDisplay";
import {
  tryGetNetwork,
  Network,
  networks,
  networksByChainId,
} from "../redux/networks";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  createEntryId,
  getEntryId,
  searchHistorySelectors,
  searchHistorySlice,
} from "../redux/slices/searchHistory.slice";
import { timeAgo } from "../utils/dateTime";
import { addressBookSelectors } from "../redux/slices/addressBook.slice";
import SearchBar, { searchBarPlaceholderText } from "./SearchBar";

const searchByAddressDocument = gql`
  query Search($addressId: ID, $addressBytes: Bytes) {
    tokensByAddress: tokens(where: { id: $addressId, isSuperToken: true }) {
      id
      symbol
      name
    }
    tokensByUnderlyingAddress: tokens(
      where: { isSuperToken: true, underlyingAddress: $addressBytes }
    ) {
      id
      symbol
      name
    }
    accounts(where: { id: $addressId }) {
      id
    }
  }
`;

type SubgraphSearchResult = {
  tokensByAddress: {
    id: string;
    symbol: string;
    name: string;
  }[];
  tokensByUnderlyingAddress: {
    id: string;
    symbol: string;
    name: string;
  }[];
  accounts: {
    id: string;
  }[];
};

type NetworkSearchResult = {
  network: Network;
  isFetching: boolean;
  error?: PossibleErrors;
  tokens: {
    id: string;
    symbol: string;
    name: string;
  }[];
  accounts: {
    id: string;
  }[];
};

const useSearchHook = (address: string): NetworkSearchResult[] => {
  const dispatch = useAppDispatch();
  const isSearchTermAddress = ethers.utils.isAddress(address);
  const chainResults: NetworkSearchResult[] = [];
  const lastSearchAddress = useAppSelector(
    (state) => state.searchHistory.ids[0]
  );

  networks.forEach((network) => {
    const queryState = sfSubgraph.useCustomQuery(
      isSearchTermAddress
        ? {
            chainId: network.chainId,
            document: searchByAddressDocument,
            variables: {
              addressId: address.toLowerCase(),
              addressBytes: address.toLowerCase(),
            },
          }
        : skipToken
    );

    if (!!queryState.data) {
      const queryResult = queryState.data as SubgraphSearchResult;
      chainResults.push({
        network: network,
        isFetching: queryState.isFetching,
        error: queryState.error,
        tokens: _.uniq(
          queryResult.tokensByAddress.concat(
            queryResult.tokensByUnderlyingAddress
          )
        ),
        accounts: queryResult.accounts,
      });
    } else {
      chainResults.push({
        network: network,
        isFetching: queryState.isFetching,
        error: queryState.error,
        tokens: [],
        accounts: [],
      });
    }
  });

  if (!isSearchTermAddress) {
    return [];
  }

  if (
    lastSearchAddress !== address.toLowerCase() &&
    (chainResults.some((x) => x.tokens.length) ||
      chainResults.some((x) => x.accounts.length))
  ) {
    dispatch(
      searchHistorySlice.actions.searchMatched({
        address: ethers.utils.getAddress(address),
        timestamp: new Date().getTime(),
      })
    );
  }

  return chainResults;
};

const AppSearch: FC<{ open: boolean; close: () => void }> = ({
  open,
  close,
}) => {
  const lastSearches = useAppSelector((state) =>
    searchHistorySelectors.selectAll(state)
  ).slice(0, 5);
  const addressBookEntries = useAppSelector((state) =>
    addressBookSelectors.selectAll(state)
  );

  const handleClose = () => {
    close();
    setSearchTerm("");
  };

  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleRouteChange = () => {
      handleClose();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  const networkSearchResults = useSearchHook(searchTerm);

  return (
    <Dialog
      fullWidth
      maxWidth="lg"
      onClose={handleClose}
      open={open}
      sx={{ verticalAlign: "top" }}
    >
      <DialogContent>
        <TextField
          sx={{
            mt: 1,
          }}
          variant="outlined"
          label="Search"
          placeholder={searchBarPlaceholderText}
          autoFocus
          fullWidth
          id="outlined-search"
          type="search"
          value={searchTerm}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setSearchTerm(e.currentTarget.value)}
        />
        {!networkSearchResults.length && lastSearches.length ? (
          <Card sx={{ mt: 2 }}>
            <Typography variant="subtitle2" sx={{ m: 1 }}>
              Last Searches
            </Typography>
            <Divider />
            <List>
              {lastSearches.map((lastSearch) => (
                <ListItem key={lastSearch.address} disablePadding>
                  <ListItemButton>
                    <ListItemText
                      primary={`${lastSearch.address} (${timeAgo(
                        lastSearch.timestamp
                      )})`}
                      onClick={() => setSearchTerm(lastSearch.address)}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Card>
        ) : networkSearchResults.some((x) => x.isFetching) ? (
          <Grid container justifyContent="center" sx={{ mt: 3 }}>
            <CircularProgress />
          </Grid>
        ) : (
          networkSearchResults
            .filter((x) => x.tokens.length || x.accounts.length)
            .map((x) => (
              <Card sx={{ mt: 2 }} component="section" key={x.network.chainId}>
                <Typography sx={{ p: 1 }} variant="subtitle1" component="h3">
                  <NetworkFormatted network={x.network} />
                </Typography>
                <Divider />
                {x.error ? (
                  <QueryError error={x.error} />
                ) : (
                  <List disablePadding>
                    {x.accounts.map((account) => (
                      <ListItem
                        disablePadding
                        sx={{ pt: 0.5, pb: 0.5 }}
                        key={`${x.network.chainId}_${account.id}`}
                      >
                        <NextLink
                          href={`/${x.network.slugName}/accounts/${account.id}`}
                          passHref
                        >
                          <ListItemButton component="a">
                            <AccountAddressFormatted
                              network={x.network}
                              address={account.id}
                            />
                          </ListItemButton>
                        </NextLink>
                      </ListItem>
                    ))}
                    {x.tokens.map((token) => (
                      <ListItem
                        disablePadding
                        sx={{ mt: 1, mb: 1 }}
                        key={`${x.network.chainId}_${token.id}`}
                      >
                        <NextLink
                          href={`/${x.network.slugName}/supertokens/${token.id}`}
                          passHref
                        >
                          <ListItemButton component="a">
                            <SuperTokenFormatted
                              name={token.name}
                              symbol={token.symbol}
                              address={token.id}
                            />
                          </ListItemButton>
                        </NextLink>
                      </ListItem>
                    ))}
                  </List>
                )}
              </Card>
            ))
        )}
        {(!networkSearchResults.length && addressBookEntries.length) ? (
          <Card sx={{ mt: 2 }}>
            <Typography variant="subtitle2" sx={{ m: 1 }}>
              Address Book
            </Typography>
            <Divider />
            <List>
              {addressBookEntries.map((entry) => (
                <ListItem
                  key={`${entry.chainId}_${entry.address}`}
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemText
                      primary={
                        <AccountAddress
                          network={networksByChainId.get(entry.chainId)!}
                          address={entry.address}
                        />
                      }
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Card>
        ) : null}
      </DialogContent>
    </Dialog>
  );
};

export default AppSearch;
