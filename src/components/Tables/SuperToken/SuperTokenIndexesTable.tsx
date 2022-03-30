import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
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
  Index_Filter,
  Index_OrderBy,
  Ordering,
} from "@superfluid-finance/sdk-core";
import { IndexesQuery } from "@superfluid-finance/sdk-redux";
import omit from "lodash/fp/omit";
import set from "lodash/fp/set";
import isEqual from "lodash/isEqual";
import { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import { Network } from "../../../redux/networks";
import { sfSubgraph } from "../../../redux/store";
import AccountAddress from "../../AccountAddress";
import AppLink from "../../AppLink";
import DetailsButton from "../../DetailsButton";
import EtherFormatted from "../../EtherFormatted";
import { IndexPublicationDetailsDialog } from "../../IndexPublicationDetails";
import InfinitePagination from "../../InfinitePagination";
import InfoTooltipBtn from "../../InfoTooltipBtn";
import SuperTokenAddress from "../../SuperTokenAddress";
import TableLoader from "../../TableLoader";
import { DistributionStatus } from "../Account/AccountPublishedIndexesTable";

const defaultOrdering = {
  orderBy: "createdAtTimestamp",
  orderDirection: "desc",
} as Ordering<Index_OrderBy>;

export const defaultPaging = createSkipPaging({
  take: 10,
});

interface SuperTokenIndexesTableProps {
  network: Network;
  tokenAddress: string;
}

const SuperTokenIndexesTable: FC<SuperTokenIndexesTableProps> = ({
  network,
  tokenAddress,
}) => {
  const filterAnchorRef = useRef(null);
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const [distributionStatus, setDistributionStatus] =
    useState<DistributionStatus | null>(null);

  const defaultFilter = {
    token: tokenAddress,
  };

  const createDefaultArg = (): Required<IndexesQuery> => ({
    chainId: network.chainId,
    filter: defaultFilter,
    pagination: defaultPaging,
    order: defaultOrdering,
  });

  const [queryArg, setQueryArg] = useState<Required<IndexesQuery>>(
    createDefaultArg()
  );

  const [queryTrigger, queryResult] = sfSubgraph.useLazyIndexesQuery();

  const queryTriggerDebounced = useDebounce(queryTrigger, 250);

  const onQueryArgChanged = (newArgs: Required<IndexesQuery>) => {
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
  }, [network, tokenAddress]);

  const setPage = (newPage: number) =>
    onQueryArgChanged(
      set("pagination.skip", (newPage - 1) * queryArg.pagination.take, queryArg)
    );

  const setPageSize = (newPageSize: number) =>
    onQueryArgChanged(set("pagination.take", newPageSize, queryArg));

  const onOrderingChanged = (newOrdering: Ordering<Index_OrderBy>) =>
    onQueryArgChanged({ ...queryArg, order: newOrdering });

  const onSortClicked = (field: Index_OrderBy) => () => {
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

  const onFilterChange = (newFilter: Index_Filter) =>
    onQueryArgChanged({
      ...queryArg,
      pagination: { ...queryArg.pagination, skip: 0 },
      filter: newFilter,
    });

  const onStringFilterChange =
    (field: string) => (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.value) {
        onFilterChange({
          ...queryArg.filter,
          [field]: e.target.value.toLowerCase(),
        });
      } else {
        onFilterChange(omit(field, queryArg.filter));
      }
    };

  const getDistributionStatusFilter = (
    status: DistributionStatus | null
  ): Index_Filter => {
    switch (status) {
      case DistributionStatus.Distributed:
        return { totalAmountDistributedUntilUpdatedAt_gt: "0" };
      case DistributionStatus.NotDistributed:
        return { totalAmountDistributedUntilUpdatedAt: "0" };
      default:
        return {};
    }
  };

  const changeDistributionStatus = (newStatus: DistributionStatus | null) => {
    const {
      totalAmountDistributedUntilUpdatedAt_gt,
      totalAmountDistributedUntilUpdatedAt,
      ...newFilter
    } = queryArg.filter;

    setDistributionStatus(newStatus);
    onFilterChange({
      ...newFilter,
      ...getDistributionStatusFilter(newStatus),
    });
  };

  const onDistributionStatusChange = (
    _event: unknown,
    newValue: DistributionStatus
  ) => changeDistributionStatus(newValue);

  const clearDistributionStatusFilter = () => changeDistributionStatus(null);

  const clearFilterField =
    (...fields: Array<keyof Index_Filter>) =>
    () =>
      onFilterChange(omit(fields, queryArg.filter));

  const openFilter = () => setShowFilterMenu(true);
  const closeFilter = () => setShowFilterMenu(false);

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeFilter();
  };

  const resetFilter = () => {
    setDistributionStatus(null);
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
          Indexes
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center" sx={{ mx: 2 }}>
          {filter.indexId && (
            <Chip
              label={
                <>
                  Index ID: <b>{filter.indexId}</b>
                </>
              }
              size="small"
              onDelete={clearFilterField("indexId")}
            />
          )}

          {filter.publisher_contains && (
            <Chip
              label={
                <>
                  Publisher: <b>{filter.publisher_contains}</b>
                </>
              }
              size="small"
              onDelete={clearFilterField("publisher_contains")}
            />
          )}

          {distributionStatus !== null && (
            <Chip
              label={
                distributionStatus === DistributionStatus.Distributed
                  ? "Has distributed tokens"
                  : "Has not distributed tokens"
              }
              size="small"
              onDelete={clearDistributionStatusFilter}
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
                Index ID
              </Typography>
              <OutlinedInput
                fullWidth
                size="small"
                type="number"
                inputProps={{ min: 0 }}
                value={filter.indexId || ""}
                onChange={onStringFilterChange("indexId")}
                endAdornment={
                  filter.indexId && (
                    <IconButton
                      size="small"
                      sx={{ fontSize: "16px", p: 0.5 }}
                      tabIndex={-1}
                      onClick={clearFilterField("indexId")}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  )
                }
              />
            </Box>

            <Box>
              <Typography variant="subtitle2" component="div" sx={{ mb: 1 }}>
                Publisher address
              </Typography>
              <OutlinedInput
                fullWidth
                size="small"
                inputProps={{ min: 0 }}
                value={filter.publisher_contains || ""}
                onChange={onStringFilterChange("publisher_contains")}
                endAdornment={
                  filter.indexId && (
                    <IconButton
                      size="small"
                      sx={{ fontSize: "16px", p: 0.5 }}
                      tabIndex={-1}
                      onClick={clearFilterField("indexId")}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  )
                }
              />
            </Box>

            <Box>
              <Typography variant="subtitle2" component="div" sx={{ mb: 1 }}>
                Has distributed?
              </Typography>

              <ToggleButtonGroup
                size="small"
                exclusive
                fullWidth
                value={distributionStatus}
                onChange={onDistributionStatusChange}
              >
                <ToggleButton value={DistributionStatus.Distributed}>
                  Yes
                </ToggleButton>
                <ToggleButton value={DistributionStatus.NotDistributed}>
                  No
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Stack direction="row" justifyContent="flex-end" spacing={1}>
              {(filter.indexId ||
                filter.publisher_contains ||
                distributionStatus !== null) && (
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
            <TableCell width="160px">Index ID</TableCell>
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
            <TableCell>
              <TableSortLabel
                active={
                  order.orderBy === "totalAmountDistributedUntilUpdatedAt"
                }
                direction={
                  order.orderBy === "totalAmountDistributedUntilUpdatedAt"
                    ? order.orderDirection
                    : "desc"
                }
                onClick={onSortClicked("totalAmountDistributedUntilUpdatedAt")}
              >
                Total Distributed
              </TableSortLabel>
            </TableCell>
            <TableCell width="220px">
              <TableSortLabel
                active={order.orderBy === "createdAtTimestamp"}
                direction={
                  order.orderBy === "createdAtTimestamp"
                    ? order.orderDirection
                    : "desc"
                }
                onClick={onSortClicked("createdAtTimestamp")}
              >
                Created
              </TableSortLabel>
            </TableCell>
            <TableCell width="68px" />
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows.map((index) => (
            <TableRow key={index.id} hover>
              <TableCell data-cy={"index-id"}>{index.indexId}</TableCell>
              <TableCell>
                <AccountAddress
                  dataCy={"publisher"}
                  network={network}
                  address={index.publisher}
                  ellipsis={6}
                />
              </TableCell>
              <TableCell data-cy={"total-distributed"}>
                <EtherFormatted
                  wei={index.totalAmountDistributedUntilUpdatedAt}
                />
                &nbsp;
                <SuperTokenAddress
                  network={network}
                  address={index.token}
                  format={(token) => token.symbol}
                  formatLoading={() => ""}
                />
              </TableCell>
              <TableCell>
                {new Date(index.createdAtTimestamp * 1000).toLocaleString()}
              </TableCell>

              <TableCell align="right">
                <IndexPublicationDetailsDialog
                  network={network}
                  indexId={index.id.toString()}
                >
                  {(onClick) => <DetailsButton onClick={onClick} />}
                </IndexPublicationDetailsDialog>
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
                <Typography variant="body1">No results</Typography>
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

export default SuperTokenIndexesTable;
