import CloseIcon from "@mui/icons-material/Close";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  Box,
  Button,
  Chip,
  IconButton,
  OutlinedInput,
  Popover,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  TableSortLabel,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  createSkipPaging,
  Ordering,
  Token_Filter,
  Token_OrderBy,
} from "@superfluid-finance/sdk-core";
import { TokensQuery } from "@superfluid-finance/sdk-redux";
import isEqual from "lodash/fp/isEqual";
import omit from "lodash/fp/omit";
import set from "lodash/fp/set";
import { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { Network } from "../../redux/networks";
import { sfSubgraph } from "../../redux/store";
import AppLink from "../AppLink";
import ClearInputAdornment from "../ClearInputAdornment";
import InfinitePagination from "../InfinitePagination";
import InfoTooltipBtn from "../InfoTooltipBtn";
import TableLoader from "../TableLoader";

export enum ListedStatus {
  Listed,
  NotListed,
}

interface SuperTokensTableProps {
  network: Network;
}

type RequiredTokensQuery = Required<Omit<TokensQuery, "block">>;

const defaultOrdering = {} as Ordering<Token_OrderBy>;

const defaultFilter: Token_Filter = {
  isSuperToken: true,
};

export const defaultPaging = createSkipPaging({
  take: 10,
});

const SuperTokensTable: FC<SuperTokensTableProps> = ({ network }) => {
  const filterAnchorRef = useRef(null);
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const [listedStatus, setListedStatus] = useState<ListedStatus | null>(null);

  const createDefaultArg = (): RequiredTokensQuery => ({
    chainId: network.chainId,
    filter: defaultFilter,
    pagination: defaultPaging,
    order: defaultOrdering,
  });

  const [queryArg, setQueryArg] = useState<RequiredTokensQuery>(
    createDefaultArg()
  );

  const [queryTrigger, queryResult] = sfSubgraph.useLazyTokensQuery();

  const queryTriggerDebounced = useDebounce(queryTrigger, 250);

  const onQueryArgsChanged = (newArgs: RequiredTokensQuery) => {
    setQueryArg(newArgs);

    if (
      queryResult.originalArgs &&
      !isEqual(queryResult.originalArgs.filter, newArgs.filter)
    ) {
      queryTriggerDebounced(newArgs, true);
    } else {
      queryTrigger(newArgs, true);
    }
  };

  useEffect(() => {
    onQueryArgsChanged(createDefaultArg());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [network]);

  const setPage = (newPage: number) =>
    onQueryArgsChanged(
      set("pagination.skip", (newPage - 1) * queryArg.pagination.take, queryArg)
    );

  const setPageSize = (newPageSize: number) =>
    onQueryArgsChanged(set("pagination.take", newPageSize, queryArg));

  const onOrderingChanged = (newOrdering: Ordering<Token_OrderBy>) =>
    onQueryArgsChanged({ ...queryArg, order: newOrdering });

  const onSortClicked = (field: Token_OrderBy) => () => {
    if (queryArg.order?.orderBy !== field) {
      onOrderingChanged({
        orderBy: field,
        orderDirection: "desc",
      });
    } else if (queryArg.order.orderDirection === "desc") {
      onOrderingChanged({
        orderBy: field,
        orderDirection: "asc",
      });
    } else {
      onOrderingChanged(defaultOrdering);
    }
  };

  const onFilterChange = (newFilter: Token_Filter) => {
    onQueryArgsChanged({
      ...queryArg,
      pagination: { ...queryArg.pagination, skip: 0 },
      filter: newFilter,
    });
  };

  const clearFilterField =
    (...fields: Array<keyof Token_Filter>) =>
    () =>
      onFilterChange(omit(fields, queryArg.filter));

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      onFilterChange({
        ...queryArg.filter,
        name_contains: e.target.value,
      });
    } else {
      onFilterChange(omit("name_contains", queryArg.filter));
    }
  };

  const onSymbolChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      onFilterChange({
        ...queryArg.filter,
        symbol_contains: e.target.value,
      });
    } else {
      onFilterChange(omit("symbol_contains", queryArg.filter));
    }
  };

  const getListedStatusFilter = (status: ListedStatus | null): Token_Filter => {
    switch (status) {
      case ListedStatus.Listed:
        return { isListed: true };
      case ListedStatus.NotListed:
        return { isListed: false };
      default:
        return {};
    }
  };

  const changeListedStatus = (newStatus: ListedStatus | null) => {
    const { isListed, ...newFilter } = queryArg.filter;

    setListedStatus(newStatus);
    onFilterChange({
      ...newFilter,
      ...getListedStatusFilter(newStatus),
    });
  };

  const onListedStatusChange = (_event: unknown, newStatus: ListedStatus) =>
    changeListedStatus(newStatus);

  const clearListedStatusFilter = () => changeListedStatus(null);

  const openFilter = () => setShowFilterMenu(true);
  const closeFilter = () => setShowFilterMenu(false);

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeFilter();
  };

  const resetFilter = () => {
    clearListedStatusFilter();
    onFilterChange(defaultFilter);
    closeFilter();
  };

  const hasNextPage = !!queryResult.data?.nextPaging;

  const tokens = queryResult.data?.data || [];

  const { filter, order, pagination } = queryArg;

  const { skip = defaultPaging.skip, take = defaultPaging.take } =
    queryResult.data?.paging || {};

  return (
    <>
      <Toolbar sx={{ px: 1 }} variant="dense" disableGutters>
        <Typography sx={{ flex: "1 1 100%" }} variant="h6" component="h2">
          Super tokens
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center" sx={{ mx: 2 }}>
          {filter.name_contains && (
            <Chip
              label={
                <>
                  Name: <b data-cy={"chip-name"}>{filter.name_contains}</b>
                </>
              }
              size="small"
              onDelete={clearFilterField("name_contains")}
            />
          )}

          {filter.symbol_contains && (
            <Chip
              label={
                <>
                  Symbol: <b data-cy={"chip-symbol"}>{filter.symbol_contains}</b>
                </>
              }
              size="small"
              onDelete={clearFilterField("symbol_contains")}
            />
          )}

          {listedStatus !== null && (
            <Chip
              label={
                <>
                  Listed:{" "}
                  <b data-cy={"chip-listed-status"}>{listedStatus === ListedStatus.Listed ? "Yes" : "No"}</b>
                </>
              }
              size="small"
              onDelete={clearListedStatusFilter}
            />
          )}
        </Stack>

        <Tooltip disableFocusListener title="Filter">
          <IconButton ref={filterAnchorRef} onClick={openFilter}>
            <FilterListIcon />
          </IconButton>
        </Tooltip>

        <Popover
          open={showFilterMenu}
          anchorEl={filterAnchorRef.current}
          onClose={closeFilter}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Stack
            sx={{ p: 3, pb: 2, minWidth: "300px" }}
            component="form"
            onSubmit={onFormSubmit}
            noValidate
            spacing={2}
          >
            <Box>
              <Typography variant="subtitle2" component="div" sx={{ mb: 1 }}>
                Token name
              </Typography>
              <OutlinedInput
                data-cy={"filter-name-input"}
                autoFocus
                fullWidth
                size="small"
                value={filter.name_contains || ""}
                onChange={onNameChange}
                endAdornment={
                  filter.name_contains && (
                    <ClearInputAdornment
                      onClick={clearFilterField("name_contains")}
                    />
                  )
                }
              />
            </Box>

            <Box>
              <Typography variant="subtitle2" component="div" sx={{ mb: 1 }}>
                Token symbol
              </Typography>
              <OutlinedInput
                data-cy={"filter-symbol-input"}
                fullWidth
                size="small"
                value={filter.symbol_contains || ""}
                onChange={onSymbolChange}
                endAdornment={
                  filter.symbol_contains && (
                    <ClearInputAdornment
                      onClick={clearFilterField("symbol_contains")}
                    />
                  )
                }
              />
            </Box>

            <Box>
              <Typography variant="subtitle2" component="div" sx={{ mb: 1 }}>
                Is token listed?
              </Typography>

              <ToggleButtonGroup
                exclusive
                fullWidth
                size="small"
                value={listedStatus}
                onChange={onListedStatusChange}
              >
                <ToggleButton data-cy={"filter-listed-yes"} value={ListedStatus.Listed}>Yes</ToggleButton>
                <ToggleButton data-cy={"filter-listed-no"} value={ListedStatus.NotListed}>No</ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Stack direction="row" justifyContent="flex-end" spacing={1}>
              {(filter.name_contains ||
                filter.symbol_contains ||
                listedStatus !== null) && (
                <Button data-cy={"reset-filter"} onClick={resetFilter} tabIndex={-1}>
                  Reset
                </Button>
              )}
              <Button data-cy={"close-filter"} type="submit" tabIndex={-1}>
                Close
              </Button>
            </Stack>
          </Stack>
        </Popover>
      </Toolbar>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell width="40%">
              <TableSortLabel
                active={order?.orderBy === "name"}
                direction={
                  order?.orderBy === "name" ? order?.orderDirection : "desc"
                }
                onClick={onSortClicked("name")}
              >
                Token name
              </TableSortLabel>
            </TableCell>
            <TableCell width="20%">Symbol</TableCell>
            <TableCell width="20%">
              <TableSortLabel
                active={order?.orderBy === "isListed"}
                direction={
                  order?.orderBy === "isListed" ? order?.orderDirection : "desc"
                }
                onClick={onSortClicked("isListed")}
              >
                Listed
                <InfoTooltipBtn
                  title={
                    <>
                      A token is listed & recognized by the Superfluid protocol.
                      Benefits of deploying a listed super token include that it
                      may be instantiated by symbol in our SDK, and listed by
                      symbol in the Superfluid dashboard{" "}
                      <AppLink
                        href="https://docs.superfluid.finance/superfluid/protocol-developers/guides/super-tokens"
                        target="_blank"
                      >
                        Read more
                      </AppLink>
                    </>
                  }
                />
              </TableSortLabel>
            </TableCell>
            <TableCell width="40%">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tokens.map((token) => (
            <TableRow key={token.id}>
              <TableCell data-cy={"token-name"}>
                <AppLink href={`/${network.slugName}/supertokens/${token.id}`}>
                  {token.name || <>&#8212;</>}
                </AppLink>
              </TableCell>
              <TableCell data-cy={"token-symbol"}>
                <AppLink
                  href={`/${network.slugName}/supertokens/${token.id}`}
                  sx={{ textDecoration: "none", flexShrink: 0 }}
                >
                  <Chip
                    clickable
                    size="small"
                    label={token.symbol || <>&#8211;</>}
                    sx={{ cursor: "pointer", lineHeight: "24px" }}
                  />
                </AppLink>
              </TableCell>
              <TableCell data-cy={"token-listed-status"}>{token.isListed ? "Yes" : "No"}</TableCell>
              <TableCell data-cy={"token-address"}>{token.id}</TableCell>
            </TableRow>
          ))}

          {queryResult.isSuccess && tokens.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={3}
                sx={{ border: 0, height: "96px" }}
                align="center"
              >
                <Typography variant="body1">No results</Typography>
              </TableCell>
            </TableRow>
          )}

          <TableLoader
            isLoading={queryResult.isLoading || queryResult.isFetching}
            showSpacer={tokens.length === 0}
          />
        </TableBody>

        {tokens.length > 0 && (
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4} align="right">
                <InfinitePagination
                  page={skip / take + 1}
                  pageSize={pagination.take}
                  isLoading={queryResult.isFetching}
                  hasNext={hasNextPage}
                  onPageChange={setPage}
                  onPageSizeChange={setPageSize}
                  sx={{ justifyContent: "flex-end" }}
                />
              </TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </>
  );
};

export default SuperTokensTable;
