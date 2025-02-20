import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material'
import {
  createSkipPaging,
  Ordering,
  SkipPaging,
  Stream_OrderBy
} from '@superfluid-finance/sdk-core'
import React, { FC, useCallback, useEffect, useState } from 'react'

import AccountAddress from '../components/Address/AccountAddress'
import FlowingBalanceWithToken from '../components/Amount/FlowingBalanceWithToken'
import InfinitePagination from '../components/Table/InfinitePagination'
import TableLoader from '../components/Table/TableLoader'
import TimeAgo from '../components/TimeAgo/TimeAgo'
import { Network } from '../redux/networks'
import { sfSubgraph } from '../redux/store'
import SimpleStream from '../components/SimpleStream/SimpleStream'
import ReactFlow, {
  OnConnect,
  Position,
  addEdge,
  useEdgesState,
  useNodesState
} from 'reactflow'

export enum ViewMode {
  Table,
  Map
}

export const defaultStreamQueryOrdering: Ordering<Stream_OrderBy> = {
  orderBy: 'createdAtTimestamp',
  orderDirection: 'desc'
}

export const defaultStreamQueryPaging: SkipPaging = createSkipPaging({
  take: 10
})

interface NetworkStreamsProps {
  network: Network
}

export const NetworkStreams: FC<NetworkStreamsProps> = ({ network }) => {
  const [paging, setPaging] = useState<SkipPaging>(defaultStreamQueryPaging)
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.Table)

  const onViewModeChange = (_event: any, newViewMode: ViewMode) =>
    setViewMode(newViewMode)

  const query = sfSubgraph.useStreamsQuery({
    chainId: network.chainId,
    order: defaultStreamQueryOrdering,
    pagination: paging
  })

  const onPageChange = (newPage: number) =>
    setPaging({
      ...paging,
      skip: (newPage - 1) * paging.take
    })

  const streams = query.data?.data ?? []

  const initialNodes = streams
    .map((stream, index) => [
      {
        id: `${stream.sender}`,
        type: 'input',
        position: { x: -200, y: 0 },
        data: {
          label: stream.sender.slice(0, 6) + '...' + stream.sender.slice(-4)
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left
      },
      {
        id: `${stream.receiver}`,
        position: { x: 150, y: 0 },
        data: {
          label: stream.receiver.slice(0, 6) + '...' + stream.receiver.slice(-4)
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left
      }
    ])
    .flat()

  const initialEdges = streams
    .map((stream, index) => [
      {
        id: `${stream.id}`,
        source: `${stream.sender}`,
        target: `${stream.receiver}`,
        animated: true,
        sourceHandle: 'left',
        targetHandle: 'right',
        type: 'straight'
      }
    ])
    .flat()

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  useEffect(() => {
    // need to update nodes and edges when streams change
  }, [paging])

  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  )

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {/* <Box marginBottom="10px" width="50%">
        <ToggleButtonGroup
          exclusive
          fullWidth
          size="small"
          value={viewMode}
          onChange={onViewModeChange}
        >
          <ToggleButton value={ViewMode.Table}>Table view</ToggleButton>
          <ToggleButton value={ViewMode.Map}>Map view</ToggleButton>
        </ToggleButtonGroup>
      </Box> */}
      <Table sx={{ tableLayout: 'fixed' }}>
        <TableBody>
          {streams.map((stream) => (
            <TableRow
              hover
              sx={{ '& > *': { borderBottom: 'none' } }}
              key={stream.id}
            >
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
                  typographyProps={{ typography: 'body2' }}
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
                  sx={{ justifyContent: 'flex-end' }}
                />
              </TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </Box>
  )
}

interface SenderReceiverProps {
  network: Network
  fromAddress: string
  toAddress: string
}

const SenderReceiver: FC<SenderReceiverProps> = ({
  network,
  fromAddress,
  toAddress
}) => (
  <Box
    display="grid"
    gridTemplateColumns="60px 1fr"
    columnGap={1}
    sx={{ lineHeight: '1.5' }}
  >
    <Typography variant="body2">Sender:</Typography>
    <AccountAddress
      dataCy={'account-address'}
      network={network}
      address={fromAddress}
      ellipsis={6}
    />
    <Typography variant="body2">Receiver:</Typography>
    <AccountAddress
      dataCy={'account-address'}
      network={network}
      address={toAddress}
      ellipsis={6}
    />
  </Box>
)

interface TotalStreamedProps {
  network: Network
  tokenAddress: string
  balance: string
  balanceTimestamp: number
  flowRate: string
}

const TotalStreamed: FC<TotalStreamedProps> = ({
  network,
  tokenAddress,
  ...props
}) => (
  <Stack sx={{ lineHeight: '1.5' }}>
    <Typography variant="body2">Total streamed:</Typography>
    <FlowingBalanceWithToken
      {...props}
      TokenChipProps={{ network, tokenAddress }}
    />
  </Stack>
)
