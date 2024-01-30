import FilterListIcon from '@mui/icons-material/FilterList'
import {
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
  Typography
} from '@mui/material'
import { Box } from '@mui/system'
import {
  createSkipPaging,
  Ordering,
  Stream_Filter,
  Stream_OrderBy
} from '@superfluid-finance/sdk-core'
import { StreamsQuery } from '@superfluid-finance/sdk-redux'
import omit from 'lodash/fp/omit'
import set from 'lodash/fp/set'
import isEqual from 'lodash/isEqual'
import { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from 'react'

import AccountAddress from '../../../../components/Address/AccountAddress'
import FlowRate from '../../../../components/Amount/FlowRate'
import DetailsButton from '../../../../components/Details/DetailsButton'
import InfoTooltipBtn from '../../../../components/Info/InfoTooltipBtn'
import ClearInputAdornment from '../../../../components/Table/ClearInputAdornment'
import InfinitePagination from '../../../../components/Table/InfinitePagination'
import TableLoader from '../../../../components/Table/TableLoader'
import useDebounce from '../../../../hooks/useDebounce'
import { Network } from '../../../../redux/networks'
import { sfSubgraph } from '../../../../redux/store'
import { StreamStatus } from '../../accounts/AccountIncomingStreamsTable'
import { StreamDetailsDialog } from '../../streams/StreamDetails'

const defaultOrdering = {
  orderBy: 'createdAtTimestamp',
  orderDirection: 'desc'
} as Ordering<Stream_OrderBy>

export const defaultPaging = createSkipPaging({
  take: 10
})

interface SuperTokenStreamsTableProps {
  network: Network
  tokenAddress: string
}

type RequiredStreamsQuery = Required<Omit<StreamsQuery, 'block'>>

const SuperTokenStreamsTable: FC<SuperTokenStreamsTableProps> = ({
  network,
  tokenAddress
}) => {
  const filterAnchorRef = useRef(null)

  const [showFilterMenu, setShowFilterMenu] = useState(false)

  const [streamStatus, setStreamStatus] = useState<StreamStatus | null>(null)

  const defaultFilter = {
    token: tokenAddress
  }

  const createDefaultArg = (): RequiredStreamsQuery => ({
    chainId: network.chainId,
    filter: defaultFilter,
    pagination: defaultPaging,
    order: defaultOrdering
  })

  const [queryArg, setQueryArg] =
    useState<RequiredStreamsQuery>(createDefaultArg())

  const [queryTrigger, queryResult] = sfSubgraph.useLazyStreamsQuery()

  const queryTriggerDebounced = useDebounce(queryTrigger, 250)

  const onQueryArgChanged = (newArgs: RequiredStreamsQuery) => {
    setQueryArg(newArgs)

    if (
      queryResult.originalArgs &&
      !isEqual(queryResult.originalArgs.filter, newArgs.filter)
    ) {
      queryTriggerDebounced(newArgs, true)
    } else {
      queryTrigger(newArgs, true)
    }
  }

  useEffect(() => {
    onQueryArgChanged(createDefaultArg())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [network, tokenAddress])

  const setPage = (newPage: number) =>
    onQueryArgChanged(
      set('pagination.skip', (newPage - 1) * queryArg.pagination.take, queryArg)
    )

  const setPageSize = (newPageSize: number) =>
    onQueryArgChanged(set('pagination.take', newPageSize, queryArg))

  const onOrderingChanged = (newOrdering: Ordering<Stream_OrderBy>) =>
    onQueryArgChanged({ ...queryArg, order: newOrdering })

  const onSortClicked = (field: Stream_OrderBy) => () => {
    if (queryArg.order.orderBy !== field) {
      onOrderingChanged({
        orderBy: field,
        orderDirection: 'desc'
      })
    } else if (queryArg.order.orderDirection === 'desc') {
      onOrderingChanged({
        orderBy: field,
        orderDirection: 'asc'
      })
    } else {
      onOrderingChanged(defaultOrdering)
    }
  }

  const onFilterChange = (newFilter: Stream_Filter) =>
    onQueryArgChanged({
      ...queryArg,
      pagination: { ...queryArg.pagination, skip: 0 },
      filter: newFilter
    })

  const onSenderChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      onFilterChange({
        ...queryArg.filter,
        sender_contains: e.target.value.toLowerCase()
      })
    } else {
      onFilterChange(omit('sender_contains', queryArg.filter))
    }
  }

  const onReceiverChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      onFilterChange({
        ...queryArg.filter,
        receiver_contains: e.target.value.toLowerCase()
      })
    } else {
      onFilterChange(omit('receiver_contains', queryArg.filter))
    }
  }

  const clearFilterField =
    (...fields: Array<keyof Stream_Filter>) =>
    () =>
      onFilterChange(omit(fields, queryArg.filter))

  const getStreamStatusFilter = (
    status: StreamStatus | null
  ): Stream_Filter => {
    switch (status) {
      case StreamStatus.Active:
        return { currentFlowRate_gt: '0' }
      case StreamStatus.Inactive:
        return { currentFlowRate: '0' }
      default:
        return {}
    }
  }

  const changeStreamStatus = (newStatus: StreamStatus | null) => {
    const { currentFlowRate_gt, currentFlowRate, ...newFilter } =
      queryArg.filter

    setStreamStatus(newStatus)
    onFilterChange({
      ...newFilter,
      ...getStreamStatusFilter(newStatus)
    })
  }

  const onStreamStatusChange = (_event: unknown, newStatus: StreamStatus) =>
    changeStreamStatus(newStatus)

  const clearStreamStatusFilter = () => changeStreamStatus(null)

  const openFilter = () => setShowFilterMenu(true)
  const closeFilter = () => setShowFilterMenu(false)

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    closeFilter()
  }

  const resetFilter = () => {
    setStreamStatus(null)
    onFilterChange(defaultFilter)
    closeFilter()
  }

  const tableRows = queryResult.data?.data || []
  const hasNextPage = !!queryResult.data?.nextPaging

  const { filter, order, pagination } = queryArg

  const { skip = defaultPaging.skip, take = defaultPaging.take } =
    queryResult.data?.paging || {}

  return (
    <>
      <Toolbar sx={{ mt: 3, px: 1 }} variant="dense" disableGutters>
        <Typography sx={{ flex: '1 1 100%' }} variant="h6" component="h2">
          Streams
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center" sx={{ mx: 2 }}>
          {filter.sender_contains && (
            <Chip
              label={
                <>
                  Sender:{' '}
                  <b data-cy={'chip-sender'}>{filter.sender_contains}</b>
                </>
              }
              size="small"
              onDelete={clearFilterField('sender_contains')}
            />
          )}

          {filter.receiver_contains && (
            <Chip
              label={
                <>
                  Receiver:{' '}
                  <b data-cy={'chip-receiver'}>{filter.receiver_contains}</b>
                </>
              }
              size="small"
              onDelete={clearFilterField('receiver_contains')}
            />
          )}

          {streamStatus !== null && (
            <Chip
              label={
                <>
                  Stream status:{' '}
                  <b data-cy={'chip-status'}>
                    {streamStatus === StreamStatus.Active
                      ? 'Active'
                      : 'Inactive'}
                  </b>
                </>
              }
              size="small"
              onDelete={clearStreamStatusFilter}
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
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Stack
            sx={{ p: 3, pb: 2, minWidth: '300px' }}
            component="form"
            onSubmit={onFormSubmit}
            noValidate
            spacing={2}
          >
            <Box>
              <Typography variant="subtitle2" component="div" sx={{ mb: 1 }}>
                Sender address
              </Typography>
              <OutlinedInput
                autoFocus
                fullWidth
                size="small"
                value={filter.sender_contains || ''}
                onChange={onSenderChange}
                data-cy={'sender-address-input'}
                endAdornment={
                  filter.sender_contains && (
                    <ClearInputAdornment
                      onClick={clearFilterField('sender_contains')}
                    />
                  )
                }
              />
            </Box>

            <Box>
              <Typography variant="subtitle2" component="div" sx={{ mb: 1 }}>
                Receiver address
              </Typography>
              <OutlinedInput
                fullWidth
                size="small"
                value={filter.receiver_contains || ''}
                onChange={onReceiverChange}
                data-cy={'receiver-address-input'}
                endAdornment={
                  filter.receiver_contains && (
                    <ClearInputAdornment
                      onClick={clearFilterField('receiver_contains')}
                    />
                  )
                }
              />
            </Box>

            <Box>
              <Typography variant="subtitle2" component="div" sx={{ mb: 1 }}>
                Is stream active?
              </Typography>

              <ToggleButtonGroup
                exclusive
                fullWidth
                size="small"
                value={streamStatus}
                onChange={onStreamStatusChange}
              >
                <ToggleButton
                  data-cy={'filter-active-yes'}
                  value={StreamStatus.Active}
                >
                  Yes
                </ToggleButton>
                <ToggleButton
                  data-cy={'filter-active-no'}
                  value={StreamStatus.Inactive}
                >
                  No
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Stack direction="row" justifyContent="flex-end" spacing={1}>
              {(filter.sender_contains ||
                filter.receiver_contains ||
                streamStatus !== null) && (
                <Button
                  data-cy={'reset-filter'}
                  onClick={resetFilter}
                  tabIndex={-1}
                >
                  Reset
                </Button>
              )}
              <Button data-cy={'close-filter'} type="submit" tabIndex={-1}>
                Close
              </Button>
            </Stack>
          </Stack>
        </Popover>
      </Toolbar>
      <Table sx={{ tableLayout: 'fixed' }}>
        <TableHead>
          <TableRow>
            <TableCell>Sender</TableCell>
            <TableCell>Receiver</TableCell>
            <TableCell>
              <TableSortLabel
                active={order.orderBy === 'currentFlowRate'}
                direction={
                  order.orderBy === 'currentFlowRate'
                    ? order.orderDirection
                    : 'desc'
                }
                onClick={onSortClicked('currentFlowRate')}
              >
                Flow Rate
                <InfoTooltipBtn
                  iconSx={{ mb: 0 }}
                  title="Flow rate is the velocity of tokens being streamed."
                />
              </TableSortLabel>
            </TableCell>
            <TableCell width="200px">
              <TableSortLabel
                active={order.orderBy === 'createdAtTimestamp'}
                direction={
                  order.orderBy === 'createdAtTimestamp'
                    ? order.orderDirection
                    : 'desc'
                }
                onClick={onSortClicked('createdAtTimestamp')}
              >
                Created
              </TableSortLabel>
            </TableCell>
            <TableCell width="68px" />
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows.map((stream) => (
            <TableRow key={stream.id} hover>
              <TableCell>
                <AccountAddress
                  dataCy={'sender'}
                  network={network}
                  address={stream.sender}
                  ellipsis={6}
                />
              </TableCell>
              <TableCell>
                <AccountAddress
                  dataCy={'receiver'}
                  network={network}
                  address={stream.receiver}
                  ellipsis={6}
                />
              </TableCell>
              <TableCell>
                <FlowRate flowRate={stream.currentFlowRate} />
              </TableCell>
              <TableCell>
                {new Date(stream.createdAtTimestamp * 1000).toLocaleString()}
              </TableCell>

              <TableCell align="right">
                <StreamDetailsDialog network={network} streamId={stream.id}>
                  {(onClick) => <DetailsButton onClick={onClick} />}
                </StreamDetailsDialog>
              </TableCell>
            </TableRow>
          ))}

          {queryResult.isSuccess && tableRows.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={5}
                sx={{ border: 0, height: '96px' }}
                align="center"
              >
                <Typography data-cy={'no-results'} variant="body1">
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
                  sx={{ justifyContent: 'flex-end' }}
                />
              </TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </>
  )
}

export default SuperTokenStreamsTable
