import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
  Typography,
} from "@mui/material";
import {
  createSkipPaging,
  Ordering,
  SkipPaging,
  Stream_OrderBy,
} from "@superfluid-finance/sdk-core";
import { FC, useState } from "react";
import { Network } from "../redux/networks";
import { sfSubgraph } from "../redux/store";
import AccountAddress from "./AccountAddress";
import FlowingBalanceWithToken from "./FlowingBalanceWithToken";
import InfinitePagination from "./InfinitePagination";
import TableLoader from "./TableLoader";
import TimeAgo from "./TimeAgo";

export const defaultStreamQueryOrdering: Ordering<Stream_OrderBy> = {
  orderBy: "createdAtTimestamp",
  orderDirection: "desc",
};

export const defaultStreamQueryPaging: SkipPaging = createSkipPaging({
  take: 10,
});

interface NetworkStreamsProps {
  network: Network;
}

export const NetworkStreams: FC<NetworkStreamsProps> = ({ network }) => {
  const [paging, setPaging] = useState<SkipPaging>(defaultStreamQueryPaging);

  const query = sfSubgraph.useStreamsQuery({
    chainId: network.chainId,
    order: defaultStreamQueryOrdering,
    pagination: paging,
  });

  const onPageChange = (newPage: number) =>
    setPaging({
      ...paging,
      skip: (newPage - 1) * paging.take,
    });

  const streams = query.data?.data ?? [];

  return (
    <Table sx={{ tableLayout: "fixed" }}>
      <TableBody>
        {streams.map((stream) => (
          <TableRow key={stream.id} hover>
            <TableCell width="60%">
              <SenderReceiver
                network={network}
                fromAddress={stream.sender}
                toAddress={stream.receiver}
              />
            </TableCell>
            <TableCell width="50%">
              <TotalStreamed
                network={network}
                tokenAddress={stream.token}
                balance={stream.streamedUntilUpdatedAt}
                balanceTimestamp={stream.updatedAtTimestamp}
                flowRate={stream.currentFlowRate}
              />
            </TableCell>
            <TableCell width="20%" align="right">
              <TimeAgo
                subgraphTime={stream.createdAtTimestamp}
                typographyProps={{ typography: "body2" }}
              />
            </TableCell>
          </TableRow>
        ))}

        <TableLoader
          isLoading={query.isLoading || query.isFetching}
          showSpacer={streams.length === 0}
          minHeight="576px"
        />
      </TableBody>

      {streams.length > 0 && (
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3} align="right">
              <InfinitePagination
                page={(paging.skip ?? 0) / paging.take + 1}
                isLoading={query.isFetching}
                hasNext={!!query.data?.nextPaging}
                onPageChange={onPageChange}
                sx={{ justifyContent: "flex-end" }}
              />
            </TableCell>
          </TableRow>
        </TableFooter>
      )}
    </Table>
  );
};

interface SenderReceiverProps {
  network: Network;
  fromAddress: string;
  toAddress: string;
}

const SenderReceiver: FC<SenderReceiverProps> = ({
  network,
  fromAddress,
  toAddress,
}) => (
  <Box
    display="grid"
    gridTemplateColumns="60px 1fr"
    columnGap={1}
    sx={{ lineHeight: "1.5" }}
  >
    <Typography variant="body2">Sender:</Typography>
    <AccountAddress dataCy={"account-address"} network={network} address={fromAddress} ellipsis={10} />
    <Typography variant="body2">Receiver:</Typography>
    <AccountAddress dataCy={"account-address"} network={network} address={toAddress} ellipsis={10} />
  </Box>
);

interface TotalStreamedProps {
  network: Network;
  tokenAddress: string;
  balance: string;
  balanceTimestamp: number;
  flowRate: string;
}

const TotalStreamed: FC<TotalStreamedProps> = ({network, tokenAddress, ...props}) => (
  <Stack sx={{ lineHeight: "1.5" }}>
    <Typography variant="body2">Total streamed:</Typography>
    <FlowingBalanceWithToken {...props} TokenChipProps={{ network, tokenAddress }}  />
  </Stack>
);
