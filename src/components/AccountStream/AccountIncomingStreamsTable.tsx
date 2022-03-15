import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  Button,
  CircularProgress,
  IconButton,
  Pagination,
  Popover,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  TableSortLabel,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import {
  Ordering,
  SkipPaging,
  Stream_Filter,
  Stream_OrderBy,
} from "@superfluid-finance/sdk-core";
import { BigNumber, ethers } from "ethers";
import { formatUnits, parseEther } from "ethers/lib/utils";
import omit from "lodash/fp/omit";
import { ChangeEvent, FC, useRef, useState } from "react";
import { Network } from "../../redux/networks";
import { sfSubgraph } from "../../redux/store";
import { timeAgo } from "../../utils/dateTime";
import ellipsisAddress from "../../utils/ellipsisAddress";
import {
  incomingStreamOrderingDefault,
  incomingStreamPagingDefault,
} from "../AccountStreamsIncomingDataGrid";
import FlowingBalanceWithToken from "../FlowingBalanceWithToken";
import FlowRate from "../FlowRate";
import InfoTooltipBtn from "../InfoTooltipBtn";
import InfinitePagination from "../InfinitePagination";

const StyledRow = styled(TableRow)(({ theme }) => ({
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.shortest,
    easing: theme.transitions.easing.easeInOut,
    delay: 0,
  }),
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.04)"
        : "rgba(255, 255, 255, 0.08)",
  },
}));

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
  const [perPage, setPerPage] = useState(0);

  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [incomingStreamFilter, setIncomingStreamFilter] =
    useState<Stream_Filter>({});

  const [incomingStreamOrdering, setIncomingStreamOrdering] = useState<
    Ordering<Stream_OrderBy> | undefined
  >(incomingStreamOrderingDefault);
  const [incomingStreamPaging, setIncomingStreamPaging] = useState<SkipPaging>(
    incomingStreamPagingDefault
  );

  const incomingStreamsQuery = sfSubgraph.useStreamsQuery({
    chainId: network.chainId,
    filter: {
      receiver: accountAddress,
      ...incomingStreamFilter,
      currentFlowRate_gte: incomingStreamFilter.currentFlowRate_gte
        ? parseEther(incomingStreamFilter.currentFlowRate_gte).toString()
        : undefined,
    },
    pagination: incomingStreamPaging,
    order: incomingStreamOrdering,
  });

  const openFilter = () => setShowFilterMenu(true);
  const closeFilter = () => setShowFilterMenu(false);

  const setPagination = (newPagination: any) => console.log(newPagination);

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

  const resetFilter = () => setIncomingStreamFilter({});

  const tableRows = incomingStreamsQuery.data?.data || [];
  const hasNextPage = !!incomingStreamsQuery.data?.nextPaging;

  console.log(hasNextPage);

  return (
    <>
      <Toolbar sx={{ mt: 3, px: 1 }} variant="dense" disableGutters>
        <Typography sx={{ flex: "1 1 100%" }} variant="h6" component="h2">
          Incoming streams
        </Typography>

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
          <Box sx={{ p: 3, pb: 2 }}>
            <Typography variant="subtitle2" component="div" sx={{ mb: 1 }}>
              Sender
            </Typography>
            <TextField
              sx={{ width: "100%" }}
              size="small"
              placeholder="Sender address"
              value={incomingStreamFilter.sender_contains || ""}
              onChange={onFilterFieldChange("sender_contains")}
            />
            <Typography
              variant="subtitle2"
              component="div"
              sx={{ mb: 1, mt: 2 }}
            >
              Token
            </Typography>
            <TextField
              sx={{ width: "100%" }}
              size="small"
              placeholder="Token name"
              value={incomingStreamFilter.token_contains || ""}
              onChange={onFilterFieldChange("token_contains")}
            />

            <Typography
              variant="subtitle2"
              component="div"
              sx={{ mb: 1, mt: 2 }}
            >
              Flow rate
            </Typography>
            <Stack direction="row" spacing={2}>
              <TextField
                size="small"
                label="Min"
                type="number"
                value={incomingStreamFilter.currentFlowRate_gte || ""}
                onChange={onFilterFieldChange("currentFlowRate_gte")}
              />
              <TextField
                size="small"
                label="Max"
                type="number"
                value={incomingStreamFilter.currentFlowRate_lte || ""}
                onChange={onFilterFieldChange("currentFlowRate_lte")}
              />
            </Stack>

            <Typography
              variant="subtitle2"
              component="div"
              sx={{ mb: 1, mt: 2 }}
            >
              Total Streamed
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <TextField size="small" label="Min" type="number" />
              <TextField size="small" label="Max" type="number" />
            </Stack>

            {Object.keys(incomingStreamFilter).length !== 0 && (
              <Stack direction="row" justifyContent="flex-end" spacing={1}>
                <Button onClick={resetFilter}>Reset</Button>
              </Stack>
            )}
          </Box>
        </Popover>
      </Toolbar>
      <Table sx={{ tableLayout: "fixed" }}>
        <TableHead>
          <TableRow>
            <TableCell width="200px">Sender</TableCell>
            <TableCell>
              <TableSortLabel
                active
                direction={"desc"}
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
                active
                direction={"desc"}
                onClick={onSortClicked("createdAtTimestamp")}
              >
                Created At
              </TableSortLabel>
            </TableCell>
            <TableCell width="60px"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows.map((stream) => (
            <StyledRow
              key={stream.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                {ellipsisAddress(stream.sender, 6)}
                {/* <AccountAddress network={network} address={stream.sender} /> */}
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
                {timeAgo(new Date(stream.createdAtTimestamp * 1000).getTime())}
              </TableCell>

              <TableCell align="right">
                {/* rgba(255, 255, 255, 0.05) */}
                <IconButton>
                  <ArrowForwardIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </StyledRow>
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
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5} align="right">
              <InfinitePagination
                activePage={page}
                hasNext={hasNextPage}
                onChange={setPage}
              />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
};

export default AccountIncomingStreamsTable;
