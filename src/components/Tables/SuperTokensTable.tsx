import FilterListIcon from "@mui/icons-material/FilterList";
import {
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
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
import set from "lodash/fp/set";
import { FC, useEffect, useRef, useState } from "react";
import { Network } from "../../redux/networks";
import { sfSubgraph } from "../../redux/store";
import InfinitePagination from "../InfinitePagination";
import SuperTokenAddress from "../SuperTokenAddress";
import TokenChip from "../TokenChip";
import isEqual from "lodash/fp/isEqual";
import useDebounce from "../../hooks/useDebounce";
import AppLink from "../AppLink";
import TableLoader from "../TableLoader";

interface SuperTokensTableProps {
  network: Network;
}

const defaultOrdering = {} as Ordering<Token_OrderBy>;

const defaultFilter: Token_Filter = {};

export const defaultPaging = createSkipPaging({
  take: 10,
});

const SuperTokensTable: FC<SuperTokensTableProps> = ({ network }) => {
  const filterAnchorRef = useRef(null);
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const createDefaultArg = (): Required<TokensQuery> => ({
    chainId: network.chainId,
    filter: defaultFilter,
    pagination: defaultPaging,
    order: defaultOrdering,
  });

  const [queryArg, setQueryArg] = useState<Required<TokensQuery>>(
    createDefaultArg()
  );

  const [queryTrigger, queryResult] = sfSubgraph.useLazyTokensQuery();

  const queryTriggerDebounced = useDebounce(queryTrigger, 250);

  const onQueryArgsChanged = (newArgs: Required<TokensQuery>) => {
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

  const openFilter = () => setShowFilterMenu(true);
  const closeFilter = () => setShowFilterMenu(false);

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
        <Tooltip disableFocusListener title="Filter">
          <IconButton ref={filterAnchorRef} onClick={openFilter}>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell width="40%">Token name</TableCell>
            <TableCell width="20%">Symbol</TableCell>
            <TableCell width="20%">Listed</TableCell>
            <TableCell width="40%">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tokens.map((token) => (
            <TableRow key={token.id}>
              <TableCell>
                <AppLink href={`/${network.slugName}/supertokens/${token.id}`}>
                  {token.name}
                </AppLink>
              </TableCell>
              <TableCell>
                <AppLink
                  href={`/${network.slugName}/supertokens/${token.id}`}
                  sx={{ textDecoration: "none", flexShrink: 0 }}
                >
                  <Chip
                    clickable
                    size="small"
                    label={token.symbol}
                    sx={{ cursor: "pointer", lineHeight: "24px" }}
                  />
                </AppLink>
              </TableCell>
              <TableCell>{token.isListed ? "Yes" : "No"}</TableCell>
              <TableCell>{token.id}</TableCell>
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
