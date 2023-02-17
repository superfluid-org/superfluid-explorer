import FilterListIcon from "@mui/icons-material/FilterList";
import {
  Box,
  Button,
  Chip,
  IconButton,
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
  AccountTokenSnapshot_Filter,
  AccountTokenSnapshot_OrderBy,
  createSkipPaging,
  Ordering,
} from "@superfluid-finance/sdk-core";
import { AccountTokenSnapshotsQuery } from "@superfluid-finance/sdk-redux";
import set from "lodash/fp/set";
import isEqual from "lodash/isEqual";
import { FC, FormEvent, useEffect, useRef, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import { Network } from "../../../redux/networks";
import { sfSubgraph } from "../../../redux/store";
import AccountTokenBalance from "../../AccountTokenBalance";
import AccountTokenFlowRate from "../../AccountTokenFlowRate";
import AppLink from "../../AppLink";
import FlowingBalanceWithToken from "../../FlowingBalanceWithToken";
import InfinitePagination from "../../InfinitePagination";
import InfoTooltipBtn from "../../InfoTooltipBtn";
import SuperTokenAddress from "../../SuperTokenAddress";
import TableLoader from "../../TableLoader";
import { StreamStatus } from "./AccountIncomingStreamsTable";
import { UnitsStatus } from "./AccountPublishedIndexesTable";

const defaultOrdering = {
  orderBy: "balanceUntilUpdatedAt",
  orderDirection: "desc",
} as Ordering<AccountTokenSnapshot_OrderBy>;

export const defaultPaging = createSkipPaging({
  take: 10,
});

interface AccountTokenSnapshotTableProps {
  network: Network;
  accountAddress: string;
}

type RequiredAccountTokenSnapshotsQuery = Required<
  Omit<AccountTokenSnapshotsQuery, "block">
>;

const AccountTokenSnapshotTable: FC<AccountTokenSnapshotTableProps> = ({
  network,
  accountAddress,
}) => {
  const filterAnchorRef = useRef(null);

  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const [activeStreamsStatus, setActiveStreamsStatus] =
    useState<StreamStatus | null>(null);
  const [inactiveStreamsStatus, setInactiveStreamsStatus] =
    useState<StreamStatus | null>(null);
  const [subsWithUnitsStatus, setSubsWithUnitsStatus] =
    useState<UnitsStatus | null>(null);

  const defaultFilter = {
    account: accountAddress,
  };

  const createDefaultArg = (): RequiredAccountTokenSnapshotsQuery => ({
    chainId: network.chainId,
    filter: defaultFilter,
    pagination: defaultPaging,
    order: defaultOrdering,
  });

  const [queryArg, setQueryArg] = useState<RequiredAccountTokenSnapshotsQuery>(
    createDefaultArg()
  );

  const [queryTrigger, queryResult] =
    sfSubgraph.useLazyAccountTokenSnapshotsQuery();

  const queryTriggerDebounced = useDebounce(queryTrigger, 250);

  const onQueryArgChanged = (newArgs: RequiredAccountTokenSnapshotsQuery) => {
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
    onQueryArgChanged(createDefaultArg());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [network, accountAddress]);

  const setPage = (newPage: number) =>
    onQueryArgChanged(
      set("pagination.skip", (newPage - 1) * queryArg.pagination.take, queryArg)
    );

  const setPageSize = (newPageSize: number) =>
    onQueryArgChanged(set("pagination.take", newPageSize, queryArg));

  const onOrderingChanged = (
    newOrdering: Ordering<AccountTokenSnapshot_OrderBy>
  ) => onQueryArgChanged({ ...queryArg, order: newOrdering });

  const onSortClicked = (field: AccountTokenSnapshot_OrderBy) => () => {
    if (queryArg.order.orderBy !== field) {
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

  const onFilterChange = (newFilter: AccountTokenSnapshot_Filter) => {
    onQueryArgChanged({
      ...queryArg,
      pagination: { ...queryArg.pagination, skip: 0 },
      filter: newFilter,
    });
  };

  const getActiveStreamsStatusFilter = (
    status: StreamStatus | null
  ): AccountTokenSnapshot_Filter => {
    switch (status) {
      case StreamStatus.Active:
        return { totalNumberOfActiveStreams_gt: 0 };
      case StreamStatus.Inactive:
        return { totalNumberOfActiveStreams: 0 };
      default:
        return {};
    }
  };

  const changeActiveStreamsStatus = (newStatus: StreamStatus | null) => {
    const {
      totalNumberOfActiveStreams_gt,
      totalNumberOfActiveStreams,
      ...newFilter
    } = queryArg.filter;

    setActiveStreamsStatus(newStatus);
    onFilterChange({
      ...newFilter,
      ...getActiveStreamsStatusFilter(newStatus),
    });
  };

  const onActiveStreamsStatusChange = (
    _event: unknown,
    newStatus: StreamStatus
  ) => changeActiveStreamsStatus(newStatus);

  const clearActiveStreamsStatusFilter = () => changeActiveStreamsStatus(null);

  const getInactiveStreamsStatusFilter = (
    status: StreamStatus | null
  ): AccountTokenSnapshot_Filter => {
    switch (status) {
      case StreamStatus.Active:
        return { totalNumberOfClosedStreams: 0 };
      case StreamStatus.Inactive:
        return { totalNumberOfClosedStreams_gt: 0 };
      default:
        return {};
    }
  };

  const changeInactiveStreamsStatus = (newStatus: StreamStatus | null) => {
    const {
      totalNumberOfClosedStreams,
      totalNumberOfClosedStreams_gt,
      ...newFilter
    } = queryArg.filter;

    setInactiveStreamsStatus(newStatus);
    onFilterChange({
      ...newFilter,
      ...getInactiveStreamsStatusFilter(newStatus),
    });
  };

  const onInactiveStreamsStatusChange = (
    _event: unknown,
    newStatus: StreamStatus
  ) => changeInactiveStreamsStatus(newStatus);

  const clearInactiveStreamsStatusFilter = () =>
    changeInactiveStreamsStatus(null);

  const getSubsWithUnitsStatusFilter = (
    status: UnitsStatus | null
  ): AccountTokenSnapshot_Filter => {
    switch (status) {
      case UnitsStatus.Issued:
        return { totalSubscriptionsWithUnits_gt: 0 };
      case UnitsStatus.NotIssued:
        return { totalSubscriptionsWithUnits: 0 };
      default:
        return {};
    }
  };

  const changeSubsWithUnitsStatus = (newStatus: UnitsStatus | null) => {
    const {
      totalSubscriptionsWithUnits_gt,
      totalSubscriptionsWithUnits,
      ...newFilter
    } = queryArg.filter;

    setSubsWithUnitsStatus(newStatus);
    onFilterChange({
      ...newFilter,
      ...getSubsWithUnitsStatusFilter(newStatus),
    });
  };

  const onSubsWithUnitsStatusChange = (
    _event: unknown,
    newStatus: UnitsStatus
  ) => changeSubsWithUnitsStatus(newStatus);

  const clearSubsWithUnitsStatusFilter = () => changeSubsWithUnitsStatus(null);

  const openFilter = () => setShowFilterMenu(true);
  const closeFilter = () => setShowFilterMenu(false);

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeFilter();
  };

  const resetFilter = () => {
    setActiveStreamsStatus(null);
    setInactiveStreamsStatus(null);
    setSubsWithUnitsStatus(null);
    onFilterChange(defaultFilter);
    closeFilter();
  };

  const tableRows = queryResult.data?.data || [];
  const hasNextPage = !!queryResult.data?.nextPaging;

  const { filter, order, pagination } = queryArg;
  const { skip = defaultPaging.skip, take = defaultPaging.take } =
    queryResult.data?.paging || {};

  return (
    <>
      <Toolbar sx={{ mt: 3, px: 1 }} variant="dense" disableGutters>
        <Typography sx={{ flex: "1 1 100%" }} variant="h6" component="h2">
          Super Tokens
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center" sx={{ mx: 2 }}>
          {activeStreamsStatus !== null && (
            <Chip
              data-cy={"chip-active"}
              label={
                activeStreamsStatus === StreamStatus.Active
                  ? "Has active streams"
                  : "Has no active streams"
              }
              size="small"
              onDelete={clearActiveStreamsStatusFilter}
            />
          )}

          {inactiveStreamsStatus !== null && (
            <Chip
              data-cy={"chip-inactive"}
              label={
                inactiveStreamsStatus === StreamStatus.Inactive
                  ? "Has inactive streams"
                  : "Has no inactive streams"
              }
              size="small"
              onDelete={clearInactiveStreamsStatusFilter}
            />
          )}

          {subsWithUnitsStatus !== null && (
            <Chip
              data-cy={"chip-units"}
              label={
                subsWithUnitsStatus === UnitsStatus.Issued
                  ? "Has subscriptions with units"
                  : "Has no subscriptions with units"
              }
              size="small"
              onDelete={clearSubsWithUnitsStatusFilter}
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
                Has active streams?
              </Typography>

              <ToggleButtonGroup
                exclusive
                fullWidth
                size="small"
                value={activeStreamsStatus}
                onChange={onActiveStreamsStatusChange}
              >
                <ToggleButton
                  data-cy={"filter-active-yes"}
                  value={StreamStatus.Active}
                >
                  Yes
                </ToggleButton>
                <ToggleButton
                  data-cy={"filter-active-no"}
                  value={StreamStatus.Inactive}
                >
                  No
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Box>
              <Typography variant="subtitle2" component="div" sx={{ mb: 1 }}>
                Has closed streams?
              </Typography>

              <ToggleButtonGroup
                exclusive
                fullWidth
                size="small"
                value={inactiveStreamsStatus}
                onChange={onInactiveStreamsStatusChange}
              >
                <ToggleButton
                  data-cy={"filter-closed-yes"}
                  value={StreamStatus.Inactive}
                >
                  Yes
                </ToggleButton>
                <ToggleButton
                  data-cy={"filter-closed-no"}
                  value={StreamStatus.Active}
                >
                  No
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Box>
              <Typography variant="subtitle2" component="div" sx={{ mb: 1 }}>
                Has subscriptions with units?
              </Typography>

              <ToggleButtonGroup
                exclusive
                fullWidth
                size="small"
                value={subsWithUnitsStatus}
                onChange={onSubsWithUnitsStatusChange}
              >
                <ToggleButton
                  data-cy={"filter-subscriptions-units-yes"}
                  value={UnitsStatus.Issued}
                >
                  Yes
                </ToggleButton>
                <ToggleButton
                  data-cy={"filter-subscriptions-units-no"}
                  value={UnitsStatus.NotIssued}
                >
                  No
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Stack direction="row" justifyContent="flex-end" spacing={1}>
              {(activeStreamsStatus !== null ||
                inactiveStreamsStatus !== null ||
                subsWithUnitsStatus !== null) && (
                <Button
                  data-cy={"reset-filter"}
                  onClick={resetFilter}
                  tabIndex={-1}
                >
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
      <Table sx={{ tableLayout: "fixed" }}>
        <TableHead>
          <TableRow>
            <TableCell>Token</TableCell>
            <TableCell>
              Balance
              <InfoTooltipBtn
                title={
                  <>
                    The balance this account holds of this supertoken, at the
                    current time{" "}
                  </>
                }
                iconSx={{ mb: 0, mr: 0.5 }}
              />
            </TableCell>
            <TableCell>
              Net Flow
              <InfoTooltipBtn
                title={<>The change in balance of this supertoken </>}
                iconSx={{ mb: 0, mr: 0.5 }}
              />
            </TableCell>
            <TableCell width="160px">
              <TableSortLabel
                active={order?.orderBy === "totalNumberOfActiveStreams"}
                direction={
                  order?.orderBy === "totalNumberOfActiveStreams"
                    ? order?.orderDirection
                    : "desc"
                }
                onClick={onSortClicked("totalNumberOfActiveStreams")}
              >
                Active Streams
              </TableSortLabel>
            </TableCell>
            <TableCell width="160px">
              <TableSortLabel
                active={order?.orderBy === "totalNumberOfClosedStreams"}
                direction={
                  order?.orderBy === "totalNumberOfClosedStreams"
                    ? order?.orderDirection
                    : "desc"
                }
                onClick={onSortClicked("totalNumberOfClosedStreams")}
              >
                Closed Streams
              </TableSortLabel>
            </TableCell>
            <TableCell width="260px">
              <TableSortLabel
                active={order?.orderBy === "totalSubscriptionsWithUnits"}
                direction={
                  order?.orderBy === "totalSubscriptionsWithUnits"
                    ? order?.orderDirection
                    : "desc"
                }
                onClick={onSortClicked("totalSubscriptionsWithUnits")}
              >
                Subscriptions With Units
                <InfoTooltipBtn
                  title={
                    <>
                      The amount of subscribers on an index that hold some
                      number of units.{" "}
                      <AppLink
                        href="https://docs.superfluid.finance/superfluid/protocol-developers/interactive-tutorials/instant-distribution"
                        target="_blank"
                      >
                        Read more
                      </AppLink>
                    </>
                  }
                  iconSx={{ mb: 0, mr: 0.5 }}
                />
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows.map((tokenSnapshot) => (
            <TableRow key={tokenSnapshot.id} hover>
              <TableCell>
                <SuperTokenAddress
                  network={network}
                  address={tokenSnapshot.token}
                />
              </TableCell>
              <TableCell>
                <AccountTokenBalance
                  network={network}
                  accountAddress={accountAddress}
                  tokenAddress={tokenSnapshot.token}
                  placeholder={{
                    balance: tokenSnapshot.balanceUntilUpdatedAt,
                    balanceTimestamp: tokenSnapshot.updatedAtTimestamp,
                    flowRate: tokenSnapshot.totalNetFlowRate,
                  }}
                >
                  {({ balance, balanceTimestamp, flowRate }) => (
                    <FlowingBalanceWithToken
                      balance={balance}
                      balanceTimestamp={balanceTimestamp}
                      flowRate={flowRate}
                      TokenChipProps={null}
                    />
                  )}
                </AccountTokenBalance>
              </TableCell>

              <TableCell>
                <AccountTokenFlowRate
                  network={network}
                  accountAddress={accountAddress}
                  tokenAddress={tokenSnapshot.token}
                  placeholder={{
                    balance: tokenSnapshot.balanceUntilUpdatedAt,
                    balanceTimestamp: tokenSnapshot.updatedAtTimestamp,
                    flowRate: tokenSnapshot.totalNetFlowRate,
                  }}
                  TokenChipProps={null}
                />
              </TableCell>

              <TableCell data-cy={"active-streams"}>
                {tokenSnapshot.totalNumberOfActiveStreams}
              </TableCell>
              <TableCell data-cy={"closed-streams"}>
                {tokenSnapshot.totalNumberOfClosedStreams}
              </TableCell>
              <TableCell data-cy={"subscriptions-with-units"}>
                {tokenSnapshot.totalSubscriptionsWithUnits}
              </TableCell>
            </TableRow>
          ))}

          {queryResult.isSuccess && tableRows.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={5}
                sx={{ border: 0, height: "96px" }}
                align="center"
              >
                <Typography data-cy={"no-results"} variant="body1">
                  No results
                </Typography>
              </TableCell>
            </TableRow>
          )}

          <TableLoader
            isLoading={queryResult.isLoading || queryResult.isFetching}
            showSpacer={tableRows.length === 0}
          />
        </TableBody>
        {tableRows.length > 0 && (
          <TableFooter>
            <TableRow>
              <TableCell colSpan={6} align="right">
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

export default AccountTokenSnapshotTable;
