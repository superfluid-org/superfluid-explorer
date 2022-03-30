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
  createSkipPaging,
  IndexSubscription_Filter,
  IndexSubscription_OrderBy,
  Ordering,
} from "@superfluid-finance/sdk-core";
import { IndexSubscriptionsQuery } from "@superfluid-finance/sdk-redux";
import Decimal from "decimal.js";
import { BigNumber } from "ethers";
import omit from "lodash/fp/omit";
import set from "lodash/fp/set";
import isEqual from "lodash/isEqual";
import { FC, FormEvent, useEffect, useRef, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import calculatePoolPercentage from "../../../logic/calculatePoolPercentage";
import calculateWeiAmountReceived from "../../../logic/calculateWeiAmountReceived";
import { Network } from "../../../redux/networks";
import { sfSubgraph } from "../../../redux/store";
import AccountAddress from "../../AccountAddress";
import AppLink from "../../AppLink";
import BalanceWithToken from "../../BalanceWithToken";
import DetailsButton from "../../DetailsButton";
import { IndexSubscriptionDetailsDialog } from "../../IndexSubscriptionDetails";
import InfinitePagination from "../../InfinitePagination";
import InfoTooltipBtn from "../../InfoTooltipBtn";
import TableLoader from "../../TableLoader";
import { UnitsStatus } from "./AccountPublishedIndexesTable";

enum SubscriptionStatus {
  Approved,
  NotApproved,
}

enum DistributionStatus {
  HasReceived,
  HasNotReceived,
}

export const indexSubscriptionOrderingDefault: Ordering<IndexSubscription_OrderBy> =
  { orderBy: "createdAtTimestamp", orderDirection: "desc" };

export const indexSubscriptionPagingDefault = createSkipPaging({ take: 10 });

interface AccountIndexSubscriptionsTableProps {
  network: Network;
  accountAddress: string;
}

const AccountIndexSubscriptionsTable: FC<
  AccountIndexSubscriptionsTableProps
> = ({ network, accountAddress }) => {
  const filterAnchorRef = useRef(null);
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const [subscriptionStatus, setSubscriptionStatus] =
    useState<SubscriptionStatus | null>(null);

  const [distributionStatus, setDistributionStatus] =
    useState<DistributionStatus | null>(null);
  const [unitsStatus, setUnitsStatus] = useState<UnitsStatus | null>(null);

  const defaultFilter = {
    subscriber: accountAddress,
  };

  const createDefaultArg = (): Required<IndexSubscriptionsQuery> => ({
    chainId: network.chainId,
    filter: defaultFilter,
    pagination: indexSubscriptionPagingDefault,
    order: indexSubscriptionOrderingDefault,
  });

  const [queryArg, setQueryArg] = useState<Required<IndexSubscriptionsQuery>>(
    createDefaultArg()
  );

  const [queryTrigger, queryResult] =
    sfSubgraph.useLazyIndexSubscriptionsQuery();

  const queryTriggerDebounced = useDebounce(queryTrigger, 250);

  const onQueryArgChanged = (newArgs: Required<IndexSubscriptionsQuery>) => {
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
    newOrdering: Ordering<IndexSubscription_OrderBy>
  ) => onQueryArgChanged({ ...queryArg, order: newOrdering });

  const onSortClicked = (field: IndexSubscription_OrderBy) => () => {
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
      onOrderingChanged(indexSubscriptionOrderingDefault);
    }
  };

  const onFilterChange = (newFilter: IndexSubscription_Filter) => {
    onQueryArgChanged({
      ...queryArg,
      pagination: { ...queryArg.pagination, skip: 0 },
      filter: newFilter,
    });
  };

  const clearFilterField =
    (...fields: Array<keyof IndexSubscription_Filter>) =>
    () =>
      onFilterChange(omit(fields, queryArg.filter));

  const getSubscriptionStatusFilter = (
    status: SubscriptionStatus | null
  ): IndexSubscription_Filter => {
    switch (status) {
      case SubscriptionStatus.Approved:
        return { approved: true };
      case SubscriptionStatus.NotApproved:
        return { approved: false };
      default:
        return {};
    }
  };

  const changeSubscriptionStatus = (newStatus: SubscriptionStatus | null) => {
    const { approved, ...newFilter } = queryArg.filter;

    setSubscriptionStatus(newStatus);
    onFilterChange({
      ...newFilter,
      ...getSubscriptionStatusFilter(newStatus),
    });
  };

  const onSubscriptionStatusChange = (
    _event: unknown,
    newStatus: SubscriptionStatus
  ) => changeSubscriptionStatus(newStatus);

  const clearSubscriptionStatusFilter = () => changeSubscriptionStatus(null);

  const getDistributionFilter = (
    status: DistributionStatus | null
  ): IndexSubscription_Filter => {
    switch (status) {
      case DistributionStatus.HasReceived:
        return { totalAmountReceivedUntilUpdatedAt_gt: "0" };
      case DistributionStatus.HasNotReceived:
        return { totalAmountReceivedUntilUpdatedAt: "0" };
      default:
        return {};
    }
  };

  const changeDistributionStatus = (newStatus: DistributionStatus | null) => {
    const {
      totalAmountReceivedUntilUpdatedAt,
      totalAmountReceivedUntilUpdatedAt_gt,
      ...newFilter
    } = queryArg.filter;

    setDistributionStatus(newStatus);
    onFilterChange({
      ...newFilter,
      ...getDistributionFilter(newStatus),
    });
  };

  const onDistributionStatusChange = (
    _event: unknown,
    newStatus: DistributionStatus
  ) => changeDistributionStatus(newStatus);

  const clearDistributionStatusFilter = () => changeDistributionStatus(null);

  const getUnitsStatusFilter = (
    status: UnitsStatus | null
  ): IndexSubscription_Filter => {
    switch (status) {
      case UnitsStatus.Issued:
        return { units_gt: "0" };
      case UnitsStatus.NotIssued:
        return { units: "0" };
      default:
        return {};
    }
  };

  const changeUnitsStatus = (newStatus: UnitsStatus | null) => {
    const { units_gt, units, ...newFilter } = queryArg.filter;

    setUnitsStatus(newStatus);
    onFilterChange({
      ...newFilter,
      ...getUnitsStatusFilter(newStatus),
    });
  };

  const onUnitsStatusChange = (_event: unknown, newStatus: UnitsStatus) =>
    changeUnitsStatus(newStatus);

  const clearUnitsStatusFilter = () => changeUnitsStatus(null);

  const openFilter = () => setShowFilterMenu(true);
  const closeFilter = () => setShowFilterMenu(false);

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeFilter();
  };

  const resetFilter = () => {
    setUnitsStatus(null);
    setDistributionStatus(null);
    setSubscriptionStatus(null);
    onFilterChange(defaultFilter);
    closeFilter();
  };

  const tableRows = queryResult.data?.data || [];
  const hasNextPage = !!queryResult.data?.nextPaging;

  const { order, pagination } = queryArg;

  const {
    skip = indexSubscriptionPagingDefault.skip,
    take = indexSubscriptionPagingDefault.take,
  } = queryResult.data?.paging || {};

  return (
    <>
      <Toolbar sx={{ mt: 3, px: 1 }} variant="dense" disableGutters>
        <Typography sx={{ flex: "1 1 100%" }} variant="h6" component="h2">
          Subscriptions
          <InfoTooltipBtn
            dataCy={"subscriptions-tooltip"}
            size={22}
            title={
              <>
                Accounts that have received units within the Index. Subscribers
                will receive distributed funds based on the portion of units
                they own in and index.{" "}
                <AppLink
                  data-cy={"subscriptions-tooltip-link"}
                  href="https://docs.superfluid.finance/superfluid/protocol-developers/interactive-tutorials/instant-distribution"
                  target="_blank"
                >
                  Read more
                </AppLink>
              </>
            }
          />
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center" sx={{ mx: 2 }}>
          {subscriptionStatus !== null && (
            <Chip
              label={
                <b>
                  {subscriptionStatus === SubscriptionStatus.Approved
                    ? "Approved"
                    : "Not approved"}
                </b>
              }
              size="small"
              onDelete={clearSubscriptionStatusFilter}
            />
          )}

          {distributionStatus !== null && (
            <Chip
              label={
                <b>
                  {distributionStatus === DistributionStatus.HasReceived
                    ? "Has received distribution"
                    : "No distributions received"}
                </b>
              }
              size="small"
              onDelete={clearDistributionStatusFilter}
            />
          )}

          {unitsStatus !== null && (
            <Chip
              label={
                <b>
                  {unitsStatus === UnitsStatus.Issued
                    ? "Has units"
                    : "No units"}
                </b>
              }
              size="small"
              onDelete={clearUnitsStatusFilter}
            />
          )}
        </Stack>

        <Tooltip title="Filter">
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
                Is subscription approved?
              </Typography>

              <ToggleButtonGroup
                size="small"
                exclusive
                fullWidth
                value={subscriptionStatus}
                onChange={onSubscriptionStatusChange}
              >
                <ToggleButton value={SubscriptionStatus.Approved}>
                  Yes
                </ToggleButton>
                <ToggleButton value={SubscriptionStatus.NotApproved}>
                  No
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Box>
              <Typography variant="subtitle2" component="div" sx={{ mb: 1 }}>
                Has received distributions?
              </Typography>

              <ToggleButtonGroup
                size="small"
                exclusive
                fullWidth
                value={distributionStatus}
                onChange={onDistributionStatusChange}
              >
                <ToggleButton value={UnitsStatus.Issued}>Yes</ToggleButton>
                <ToggleButton value={UnitsStatus.NotIssued}>No</ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Box>
              <Typography variant="subtitle2" component="div" sx={{ mb: 1 }}>
                Has subscription units?
              </Typography>

              <ToggleButtonGroup
                size="small"
                exclusive
                fullWidth
                value={unitsStatus}
                onChange={onUnitsStatusChange}
              >
                <ToggleButton value={UnitsStatus.Issued}>Yes</ToggleButton>
                <ToggleButton value={UnitsStatus.NotIssued}>No</ToggleButton>
              </ToggleButtonGroup>
            </Box>
            <Stack direction="row" justifyContent="flex-end" spacing={1}>
              {(subscriptionStatus !== null ||
                distributionStatus !== null ||
                unitsStatus !== null) && (
                <Button onClick={resetFilter} tabIndex={-1}>
                  Reset
                </Button>
              )}
              <Button type="submit" tabIndex={-1}>
                Close
              </Button>
            </Stack>
          </Stack>
        </Popover>
      </Toolbar>
      <Table sx={{ tableLayout: "fixed" }}>
        <TableHead>
          <TableRow>
            <TableCell>
              Publisher
              <InfoTooltipBtn
                title={
                  <>
                    The creator of an index using the IDA - publishers may
                    update the index of subscribers and distribute funds to
                    subscribers.{" "}
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
            </TableCell>
            <TableCell width="160px">
              <TableSortLabel
                active={order.orderBy === "approved"}
                direction={
                  order?.orderBy === "approved" ? order?.orderDirection : "desc"
                }
                onClick={onSortClicked("approved")}
              >
                Approved
                <InfoTooltipBtn
                  title="Indicates if account has claimed all past distributions and automatically claims all future distributions."
                  iconSx={{ mb: 0, mr: 0.5 }}
                />
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={order?.orderBy === "totalAmountReceivedUntilUpdatedAt"}
                direction={
                  order?.orderBy === "totalAmountReceivedUntilUpdatedAt"
                    ? order?.orderDirection
                    : "desc"
                }
                onClick={onSortClicked("totalAmountReceivedUntilUpdatedAt")}
              >
                Total Amount Received
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={order?.orderBy === "units"}
                direction={
                  order?.orderBy === "units" ? order?.orderDirection : "desc"
                }
                onClick={onSortClicked("units")}
              >
                Subscription Units
              </TableSortLabel>
            </TableCell>
            <TableCell width="68px" />
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows.map((subscription) => (
            <TableRow key={subscription.id} hover>
              <TableCell>
                <AccountAddress
                  network={network}
                  address={subscription.publisher}
                  ellipsis={6}
                />
              </TableCell>
              <TableCell>{subscription.approved ? "Yes" : "No"}</TableCell>
              <TableCell>
                <BalanceWithToken
                  network={network}
                  tokenAddress={subscription.token}
                  wei={calculateWeiAmountReceived(
                    BigNumber.from(subscription.indexValueCurrent),
                    BigNumber.from(
                      subscription.totalAmountReceivedUntilUpdatedAt
                    ),
                    BigNumber.from(subscription.indexValueUntilUpdatedAt),
                    BigNumber.from(subscription.units)
                  )}
                />
              </TableCell>
              <TableCell>
                {subscription.units}&nbsp;
                {`(${calculatePoolPercentage(
                  new Decimal(subscription.indexTotalUnits),
                  new Decimal(subscription.units)
                )
                  .toDP(2)
                  .toString()}%)`}
              </TableCell>

              <TableCell align="right">
                <IndexSubscriptionDetailsDialog
                  network={network}
                  indexSubscriptionId={subscription.id.toString()}
                >
                  {(onClick) => <DetailsButton onClick={onClick} />}
                </IndexSubscriptionDetailsDialog>
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
                <Typography
                  data-cy={"subscriptions-no-results"}
                  variant="body1"
                >
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
              <TableCell colSpan={5} align="right">
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

export default AccountIndexSubscriptionsTable;
