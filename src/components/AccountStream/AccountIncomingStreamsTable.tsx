import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
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
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import {
  Ordering,
  Stream_Filter,
  Stream_OrderBy,
} from "@superfluid-finance/sdk-core";
import { parseEther } from "ethers/lib/utils";
import omit from "lodash/fp/omit";
import { ChangeEvent, FC, FormEvent, useRef, useState } from "react";
import { Network } from "../../redux/networks";
import { sfSubgraph } from "../../redux/store";
import { timeAgo } from "../../utils/dateTime";
import AccountAddress from "../AccountAddress";
import { incomingStreamOrderingDefault } from "../AccountStreamsIncomingDataGrid";
import FlowingBalanceWithToken from "../FlowingBalanceWithToken";
import FlowRate from "../FlowRate";
import InfinitePagination from "../InfinitePagination";
import InfoTooltipBtn from "../InfoTooltipBtn";
import { StreamDetailsDialog } from "../StreamDetails";

// const MAPPER = {
//   currentFlowRate_gt: (value) => parseEther(value).toString(),
// };

interface AccountIncomingStreamsTableProps {
  network: Network;
  accountAddress: string;
}

const AccountIncomingStreamsTable: FC<AccountIncomingStreamsTableProps> = ({
  network,
  accountAddress,
}) => {
  const filterAnchorRef = useRef(null);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const [incomingStreamFilter, setIncomingStreamFilter] =
    useState<Stream_Filter>({});

  const [incomingStreamOrdering, setIncomingStreamOrdering] = useState<
    Ordering<Stream_OrderBy> | undefined
  >(incomingStreamOrderingDefault);

  const incomingStreamsQuery = sfSubgraph.useStreamsQuery({
    chainId: network.chainId,
    filter: {
      receiver: accountAddress,
      ...incomingStreamFilter,
      currentFlowRate_gte: incomingStreamFilter.currentFlowRate_gte
        ? parseEther(incomingStreamFilter.currentFlowRate_gte).toString()
        : undefined,
      currentFlowRate_lte: incomingStreamFilter.currentFlowRate_lte
        ? parseEther(incomingStreamFilter.currentFlowRate_lte).toString()
        : undefined,
    },
    pagination: { take: pageSize, skip: (page - 1) * pageSize },
    order: incomingStreamOrdering,
  });

  const onSortClicked = (field: Stream_OrderBy) => () => {
    if (incomingStreamOrdering?.orderBy !== field) {
      setIncomingStreamOrdering({
        orderBy: field,
        orderDirection: "desc",
      });
    } else if (incomingStreamOrdering.orderDirection === "desc") {
      setIncomingStreamOrdering({
        orderBy: field,
        orderDirection: "asc",
      });
    } else {
      setIncomingStreamOrdering(undefined);
    }
  };

  const onFilterFieldChange =
    (field: keyof Stream_Filter) => (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.value) {
        setIncomingStreamFilter({
          ...incomingStreamFilter,
          [field]: e.target.value,
        });
      } else {
        setIncomingStreamFilter(omit(field, incomingStreamFilter));
      }
    };

  const clearFilterField =
    (...fields: Array<keyof Stream_Filter>) =>
    () =>
      setIncomingStreamFilter(omit(fields, incomingStreamFilter));

  const openFilter = () => setShowFilterMenu(true);
  const closeFilter = () => setShowFilterMenu(false);

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeFilter();
  };

  const resetFilter = () => {
    setIncomingStreamFilter({});
    closeFilter();
  };

  const tableRows = incomingStreamsQuery.data?.data || [];
  const hasNextPage = !!incomingStreamsQuery.data?.nextPaging;

  return (
    <>
      <Toolbar sx={{ mt: 3, px: 1 }} variant="dense" disableGutters>
        <Typography sx={{ flex: "1 1 100%" }} variant="h6" component="h2">
          Incoming streams
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center" sx={{ mx: 2 }}>
          {incomingStreamFilter.sender_contains && (
            <Chip
              label={
                <>
                  Sender: <b>{incomingStreamFilter.sender_contains}</b>
                </>
              }
              size="small"
              onDelete={clearFilterField("sender_contains")}
            />
          )}
          {(incomingStreamFilter.currentFlowRate_gte ||
            incomingStreamFilter.currentFlowRate_lte) && (
            <Chip
              label={
                <>
                  Flow rate:{" "}
                  <b>
                    {`${incomingStreamFilter.currentFlowRate_gte || "..."} - ${
                      incomingStreamFilter.currentFlowRate_lte || "..."
                    }`}
                  </b>
                </>
              }
              size="small"
              onDelete={clearFilterField(
                "currentFlowRate_gte",
                "currentFlowRate_lte"
              )}
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
            sx={{ p: 3, pb: 2 }}
            component="form"
            onSubmit={onFormSubmit}
            noValidate
            spacing={2}
          >
            <Box>
              <Typography variant="subtitle2" component="div" sx={{ mb: 1 }}>
                Sender
              </Typography>
              <OutlinedInput
                autoFocus
                fullWidth
                size="small"
                placeholder="Sender address"
                value={incomingStreamFilter.sender_contains || ""}
                onChange={onFilterFieldChange("sender_contains")}
                endAdornment={
                  incomingStreamFilter.sender_contains && (
                    <IconButton
                      size="small"
                      sx={{ fontSize: "16px", p: 0.5 }}
                      tabIndex={-1}
                      onClick={clearFilterField("sender_contains")}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  )
                }
              />
            </Box>
            <Box>
              <Typography variant="subtitle2" component="div" sx={{ mb: 1 }}>
                Flow rate
              </Typography>
              <Stack direction="row" spacing={2}>
                <OutlinedInput
                  size="small"
                  placeholder="Min"
                  type="number"
                  inputProps={{ min: 0 }}
                  value={incomingStreamFilter.currentFlowRate_gte || ""}
                  onChange={onFilterFieldChange("currentFlowRate_gte")}
                  endAdornment={
                    incomingStreamFilter.currentFlowRate_gte && (
                      <IconButton
                        size="small"
                        sx={{ fontSize: "16px", p: 0.5 }}
                        tabIndex={-1}
                        onClick={clearFilterField("currentFlowRate_gte")}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    )
                  }
                />
                <OutlinedInput
                  size="small"
                  placeholder="Max"
                  type="number"
                  inputProps={{ min: 0 }}
                  value={incomingStreamFilter.currentFlowRate_lte || ""}
                  onChange={onFilterFieldChange("currentFlowRate_lte")}
                  endAdornment={
                    incomingStreamFilter.currentFlowRate_lte && (
                      <IconButton
                        size="small"
                        sx={{ fontSize: "16px", p: 0.5 }}
                        tabIndex={-1}
                        onClick={clearFilterField("currentFlowRate_lte")}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    )
                  }
                />
              </Stack>
            </Box>

            <Stack direction="row" justifyContent="flex-end" spacing={1}>
              {Object.keys(incomingStreamFilter).length !== 0 && (
                <Button onClick={resetFilter} tabIndex={-1}>
                  Reset
                </Button>
              )}
              <Button type="submit" tabIndex={-1}>
                Apply
              </Button>
            </Stack>
          </Stack>
        </Popover>
      </Toolbar>
      <Table sx={{ tableLayout: "fixed" }}>
        <TableHead>
          <TableRow>
            <TableCell width="220px">Sender</TableCell>
            <TableCell>
              <TableSortLabel
                sx={{ transition: "all 200ms ease-in-out" }}
                active={incomingStreamOrdering?.orderBy === "currentFlowRate"}
                direction={
                  incomingStreamOrdering?.orderBy === "currentFlowRate"
                    ? incomingStreamOrdering?.orderDirection
                    : "desc"
                }
                onClick={onSortClicked("currentFlowRate")}
              >
                Flow Rate
                <InfoTooltipBtn
                  iconSx={{ mb: 0 }}
                  title="Flow rate is the velocity of tokens being streamed."
                />
              </TableSortLabel>
            </TableCell>
            <TableCell>Total Streamed</TableCell>
            <TableCell width="140px">
              <TableSortLabel
                active={
                  incomingStreamOrdering?.orderBy === "updatedAtTimestamp"
                }
                direction={
                  incomingStreamOrdering?.orderBy === "updatedAtTimestamp"
                    ? incomingStreamOrdering?.orderDirection
                    : "desc"
                }
                onClick={onSortClicked("updatedAtTimestamp")}
              >
                Updated
              </TableSortLabel>
            </TableCell>
            <TableCell width="60px"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows.map((stream) => (
            <TableRow key={stream.id} hover>
              <TableCell>
                <AccountAddress
                  network={network}
                  address={stream.sender}
                  ellipsis={6}
                />
              </TableCell>
              <TableCell>
                <FlowRate flowRate={stream.currentFlowRate} />
              </TableCell>
              <TableCell>
                <FlowingBalanceWithToken
                  balance={stream.streamedUntilUpdatedAt}
                  balanceTimestamp={stream.updatedAtTimestamp}
                  flowRate={stream.currentFlowRate}
                  network={network}
                  tokenAddress={stream.token}
                />
              </TableCell>
              <TableCell>
                {timeAgo(new Date(stream.updatedAtTimestamp * 1000).getTime())}
              </TableCell>

              <TableCell align="right">
                <StreamDetailsDialog network={network} streamId={stream.id}>
                  <IconButton sx={{ background: "rgba(255, 255, 255, 0.05)" }}>
                    <ArrowForwardIcon fontSize="small" />
                  </IconButton>
                </StreamDetailsDialog>
              </TableCell>
            </TableRow>
          ))}

          {incomingStreamsQuery.isSuccess && tableRows.length === 0 && (
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

          {incomingStreamsQuery.isLoading && (
            <TableRow>
              <TableCell
                colSpan={5}
                sx={{ border: 0, height: "96px" }}
                align="center"
              >
                <CircularProgress size={40} />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        {tableRows.length > 0 && (
          <TableFooter>
            <TableRow>
              <TableCell colSpan={5} align="right">
                <InfinitePagination
                  page={page}
                  pageSize={pageSize}
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

export default AccountIncomingStreamsTable;
