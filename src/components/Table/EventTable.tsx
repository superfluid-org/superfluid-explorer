import FilterListIcon from '@mui/icons-material/FilterList'
import {
  Box,
  Button,
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
  Typography
} from '@mui/material'
import {
  createSkipPaging,
  Event_Filter,
  Event_OrderBy,
  EventListQuery,
  Ordering
} from '@superfluid-finance/sdk-core'
import omit from 'lodash/fp/omit'
import set from 'lodash/fp/set'
import isEqual from 'lodash/isEqual'
import { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from 'react'

import useDebounce from '../../hooks/useDebounce'
import { Network } from '../../redux/networks'
import { sfSubgraph } from '../../redux/store'
import TimeAgo from '../TimeAgo/TimeAgo'
import { TransactionHash } from '../TransactionHash/TransactionHash'
import ClearInputAdornment from './ClearInputAdornment'
import InfinitePagination from './InfinitePagination'
import TableLoader from './TableLoader'

interface EventsQuery extends EventListQuery {
  chainId: number
}

const defaultOrdering = {
  orderBy: 'timestamp',
  orderDirection: 'desc'
} as Ordering<Event_OrderBy>

export const defaultPaging = createSkipPaging({
  take: 10
})

interface EventTableProps {
  network: Network
  accountAddress: string
}

type RequiredEventsQuery = Required<Omit<EventsQuery, 'block'>>

const EventTable: FC<EventTableProps> = ({ network, accountAddress }) => {
  const filterAnchorRef = useRef(null)
  const [showFilterMenu, setShowFilterMenu] = useState(false)

  const defaultFilter = {
    timestamp_gt: '0',
    addresses_contains: [accountAddress]
  }

  const createDefaultArg = (): RequiredEventsQuery => ({
    chainId: network.chainId,
    filter: defaultFilter,
    pagination: defaultPaging,
    order: defaultOrdering
  })

  const [queryArg, setQueryArg] =
    useState<RequiredEventsQuery>(createDefaultArg())

  const [queryTrigger, queryResult] = sfSubgraph.useLazyEventsQuery()

  const queryTriggerDebounced = useDebounce(queryTrigger, 250)

  const onQueryArgChanged = (newArgs: RequiredEventsQuery) => {
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
  }, [network, accountAddress])

  const setPage = (newPage: number) =>
    onQueryArgChanged(
      set('pagination.skip', (newPage - 1) * queryArg.pagination.take, queryArg)
    )

  const setPageSize = (newPageSize: number) =>
    onQueryArgChanged(set('pagination.take', newPageSize, queryArg))

  const onFilterChange = (newFilter: Event_Filter) => {
    onQueryArgChanged({
      ...queryArg,
      pagination: { ...queryArg.pagination, skip: 0 },
      filter: newFilter
    })
  }

  const onOrderingChanged = (newOrdering: Ordering<Event_OrderBy>) =>
    onQueryArgChanged({ ...queryArg, order: newOrdering })

  const onSortClicked = (field: Event_OrderBy) => () => {
    if (queryArg.order?.orderBy !== field) {
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

  const onFilterFieldChange =
    (field: keyof Event_Filter) => (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.value) {
        onFilterChange({
          ...queryArg.filter,
          [field]: e.target.value
        })
      } else {
        onFilterChange(omit(field, queryArg.filter))
      }
    }

  const clearFilterField =
    (...fields: Array<keyof Event_Filter>) =>
    () =>
      onFilterChange(omit(fields, queryArg.filter))

  const openFilter = () => setShowFilterMenu(true)
  const closeFilter = () => setShowFilterMenu(false)

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    closeFilter()
  }

  const resetFilter = () => {
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
          Events
        </Typography>
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
                Event name
              </Typography>
              <OutlinedInput
                autoFocus
                fullWidth
                size="small"
                value={filter.name_contains || ''}
                onChange={onFilterFieldChange('name_contains')}
                data-cy={'event_name_input'}
                endAdornment={
                  filter.name_contains && (
                    <ClearInputAdornment
                      onClick={clearFilterField('name_contains')}
                    />
                  )
                }
              />
            </Box>

            <Box>
              <Typography variant="subtitle2" component="div" sx={{ mb: 1 }}>
                Transaction hash
              </Typography>
              <OutlinedInput
                fullWidth
                size="small"
                value={filter.transactionHash_contains || ''}
                onChange={onFilterFieldChange('transactionHash_contains')}
                data-cy={'transaction_hash_input'}
                endAdornment={
                  filter.transactionHash_contains && (
                    <ClearInputAdornment
                      onClick={clearFilterField('transactionHash_contains')}
                    />
                  )
                }
              />
            </Box>

            <Stack direction="row" justifyContent="flex-end" spacing={1}>
              {(filter.name_contains || filter.transactionHash_contains) && (
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
            <TableCell>Name</TableCell>
            <TableCell>Block Number</TableCell>
            <TableCell>Transaction Hash</TableCell>
            <TableCell width="160px">
              <TableSortLabel
                active={order?.orderBy === 'timestamp'}
                direction={
                  order?.orderBy === 'timestamp'
                    ? order?.orderDirection
                    : 'desc'
                }
                onClick={onSortClicked('timestamp')}
              >
                Timestamp
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows.map((event) => (
            <TableRow key={event.id} hover>
              <TableCell data-cy={'event-name'}>{event.name}</TableCell>
              <TableCell data-cy={'event-block-number'}>
                {event.blockNumber}
              </TableCell>
              <TableCell data-cy={'transaction-hash'}>
                <TransactionHash
                  network={network}
                  transactionHash={event.transactionHash}
                />
              </TableCell>
              <TableCell>
                <TimeAgo
                  subgraphTime={event.timestamp}
                  typographyProps={{ typography: 'body2' }}
                />
              </TableCell>
            </TableRow>
          ))}
          {queryResult.isSuccess && tableRows.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={4}
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
              <TableCell colSpan={4} align="right">
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
export default EventTable
