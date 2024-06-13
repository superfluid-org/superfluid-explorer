import FilterListIcon from '@mui/icons-material/FilterList'
import {
  Box,
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
import {
  createSkipPaging,
  Ordering,
  Token_Filter,
  Token_OrderBy,
  TokenStatistic_OrderBy
} from '@superfluid-finance/sdk-core'
import {
  TokenStatisticsQuery,
  TokensQuery
} from '@superfluid-finance/sdk-redux'
import isEqual from 'lodash/fp/isEqual'
import omit from 'lodash/fp/omit'
import set from 'lodash/fp/set'
import { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from 'react'

import AppLink from '../../../../components/AppLink/AppLink'
import InfoTooltipBtn from '../../../../components/Info/InfoTooltipBtn'
import ClearInputAdornment from '../../../../components/Table/ClearInputAdornment'
import InfinitePagination from '../../../../components/Table/InfinitePagination'
import TableLoader from '../../../../components/Table/TableLoader'
import useDebounce from '../../../../hooks/useDebounce'
import { Network } from '../../../../redux/networks'
import { sfSubgraph } from '../../../../redux/store'
import { gql } from 'graphql-request'
import { id } from 'ethers/lib/utils'
import { TokenStatistic_Filter } from '../../../../subgraphs/gda/.graphclient'

export enum ListedStatus {
  Listed,
  NotListed
}

interface SuperTokensTableProps {
  network: Network
}

type RequiredTokensQuery = Required<Omit<TokensQuery, 'block'>>
type RequiredTokenStatisticsQuery = Required<
  Omit<TokenStatisticsQuery, 'block'>
>

const defaultOrdering = {
  orderBy: 'isListed',
  orderDirection: 'desc'
} as Ordering<Token_OrderBy>

const defaultStatisticsOrdering = {
  orderBy: 'token__isListed',
  orderDirection: 'desc'
} as Ordering<TokenStatistic_OrderBy>

const defaultFilter: Token_Filter = {
  isSuperToken: true
}

export const defaultPaging = createSkipPaging({
  take: 10
})

// const metricsQueryDocument = gql`
//   query Search {
//     tokenStatistics(where: { token: $address }) {
//       totalNumberOfActiveStreams
//       totalNumberOfHolders
//       totalOutflowRate
//     }
//   }
// `

const SuperTokensTable: FC<SuperTokensTableProps> = ({ network }) => {
  const filterAnchorRef = useRef(null)
  const [showFilterMenu, setShowFilterMenu] = useState(false)

  const [listedStatus, setListedStatus] = useState<ListedStatus | null>(null)

  const createDefaultArg = (): RequiredTokensQuery => ({
    chainId: network.chainId,
    filter: defaultFilter,
    pagination: defaultPaging,
    order: defaultOrdering
  })

  const createDefaultStatisticsArg = (): RequiredTokenStatisticsQuery => ({
    chainId: network.chainId,
    filter: '' as TokenStatistic_Filter,
    pagination: defaultPaging,
    order: defaultStatisticsOrdering
  })

  const [queryArg, setQueryArg] =
    useState<RequiredTokensQuery>(createDefaultArg())

  const [queryTrigger, queryResult] = sfSubgraph.useLazyTokensQuery()

  const [queryStatisticsArg, setQueryStatisticsArg] =
    useState<RequiredTokenStatisticsQuery>(createDefaultStatisticsArg())

  const [queryStatisticsTrigger, queryStatisticsResult] =
    sfSubgraph.useLazyTokenStatisticsQuery()

  const queryTriggerDebounced = useDebounce(queryTrigger, 250)

  const onQueryArgsChanged = (newArgs: RequiredTokensQuery) => {
    setQueryArg(newArgs)

    if (
      queryResult.originalArgs &&
      !isEqual(queryResult.originalArgs.filter, newArgs.filter)
    ) {
      queryTriggerDebounced(newArgs, true)
    } else {
      queryTrigger(newArgs, true)
    }
    // queryStatisticsTrigger(newStatisticsArgs, true)
  }

  const onQueryStatisticsArgsChanged = (
    newStatisticsArgs: RequiredTokenStatisticsQuery
  ) => {
    setQueryStatisticsArg(newStatisticsArgs)
    queryStatisticsTrigger(newStatisticsArgs, true)
  }

  useEffect(() => {
    onQueryArgsChanged(createDefaultArg())
    onQueryStatisticsArgsChanged(createDefaultStatisticsArg())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [network])

  const setPage = (newPage: number) => {
    onQueryArgsChanged(
      set('pagination.skip', (newPage - 1) * queryArg.pagination.take, queryArg)
    )
    onQueryStatisticsArgsChanged(
      set(
        'pagination.skip',
        (newPage - 1) * queryStatisticsArg.pagination.take,
        queryStatisticsArg
      )
    )
  }

  const setPageSize = (newPageSize: number) => {
    onQueryArgsChanged(set('pagination.take', newPageSize, queryArg))
    onQueryStatisticsArgsChanged(
      set('pagination.take', newPageSize, queryStatisticsArg)
    )
  }

  const onOrderingChanged = (newOrdering: Ordering<Token_OrderBy>) =>
    onQueryArgsChanged({ ...queryArg, order: newOrdering })

  const onStatisticsOrderingChanged = (
    newStatisticsOrdering: Ordering<TokenStatistic_OrderBy>
  ) =>
    onQueryStatisticsArgsChanged({
      ...queryStatisticsArg,
      order: newStatisticsOrdering
    })

  const onSortClicked = (field: Token_OrderBy) => () => {
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

  const onStatisticsSortClicked = (field: TokenStatistic_OrderBy) => () => {
    if (queryStatisticsArg.order?.orderBy !== field) {
      onStatisticsOrderingChanged({
        orderBy: field,
        orderDirection: 'desc'
      })
    } else if (queryStatisticsArg.order.orderDirection === 'desc') {
      onStatisticsOrderingChanged({
        orderBy: field,
        orderDirection: 'asc'
      })
    } else {
      onStatisticsOrderingChanged(defaultStatisticsOrdering)
    }
  }

  const handleSorts =
    (field?: Token_OrderBy, statisticsField?: TokenStatistic_OrderBy) => () => {
      if (field) {
        onSortClicked(field)()
      }
      if (statisticsField) {
        onStatisticsSortClicked(statisticsField)()
      }
    }

  const onFilterChange = (newFilter: Token_Filter) => {
    onQueryArgsChanged(
      {
        ...queryArg,
        pagination: { ...queryArg.pagination, skip: 0 },
        filter: newFilter
      }
      // {
      //   ...queryStatisticsArg,
      //   pagination: { ...queryStatisticsArg.pagination, skip: 0 },
      //   filter: newFilter
      // }
    )
  }

  const clearFilterField =
    (...fields: Array<keyof Token_Filter>) =>
    () =>
      onFilterChange(omit(fields, queryArg.filter))

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      onFilterChange({
        ...queryArg.filter,
        name_contains_nocase: e.target.value
      })
    } else {
      onFilterChange(omit('name_contains_nocase', queryArg.filter))
    }
  }

  const onSymbolChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      onFilterChange({
        ...queryArg.filter,
        symbol_contains_nocase: e.target.value
      })
    } else {
      onFilterChange(omit('symbol_contains_nocase', queryArg.filter))
    }
  }

  const getListedStatusFilter = (status: ListedStatus | null): Token_Filter => {
    switch (status) {
      case ListedStatus.Listed:
        return { isListed: true }
      case ListedStatus.NotListed:
        return { isListed: false }
      default:
        return {}
    }
  }

  const changeListedStatus = (newStatus: ListedStatus | null) => {
    const { isListed, ...newFilter } = queryArg.filter

    setListedStatus(newStatus)
    onFilterChange({
      ...newFilter,
      ...getListedStatusFilter(newStatus)
    })
  }

  const onListedStatusChange = (_event: unknown, newStatus: ListedStatus) =>
    changeListedStatus(newStatus)

  const clearListedStatusFilter = () => changeListedStatus(null)

  const openFilter = () => setShowFilterMenu(true)
  const closeFilter = () => setShowFilterMenu(false)

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    closeFilter()
  }

  const resetFilter = () => {
    clearListedStatusFilter()
    onFilterChange(defaultFilter)
    closeFilter()
  }

  const hasNextPage = !!queryResult.data?.nextPaging

  const tokens = queryResult.data?.data || []

  const tokenStatistics = queryStatisticsResult.data?.data || []

  const { filter, order, pagination } = queryArg

  const { filter: statisticsFilter, order: statisticsOrder } =
    queryStatisticsArg

  const { skip = defaultPaging.skip, take = defaultPaging.take } =
    queryResult.data?.paging || {}

  // for each token in tokens, i need to fetch the metrics with the token address using the metricsQueryDocument and useCustomQuery
  // then i need to merge the token with the metrics
  // then i need to display the token with the metrics in the table

  console.log('queryStatisticsResult', queryStatisticsResult)

  return (
    <>
      <Toolbar sx={{ px: 1 }} variant="dense" disableGutters>
        <Typography sx={{ flex: '1 1 100%' }} variant="h6" component="h2">
          Super tokens
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center" sx={{ mx: 2 }}>
          {filter.name_contains_nocase && (
            <Chip
              label={
                <>
                  Name:{' '}
                  <b data-cy={'chip-name'}>{filter.name_contains_nocase}</b>
                </>
              }
              size="small"
              onDelete={clearFilterField('name_contains_nocase')}
            />
          )}

          {filter.symbol_contains_nocase && (
            <Chip
              label={
                <>
                  Symbol:{' '}
                  <b data-cy={'chip-symbol'}>{filter.symbol_contains_nocase}</b>
                </>
              }
              size="small"
              onDelete={clearFilterField('symbol_contains_nocase')}
            />
          )}

          {listedStatus !== null && (
            <Chip
              label={
                <>
                  Listed:{' '}
                  <b data-cy={'chip-listed-status'}>
                    {listedStatus === ListedStatus.Listed ? 'Yes' : 'No'}
                  </b>
                </>
              }
              size="small"
              onDelete={clearListedStatusFilter}
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
                Token name
              </Typography>
              <OutlinedInput
                data-cy={'filter-name-input'}
                autoFocus
                fullWidth
                size="small"
                value={filter.name_contains_nocase || ''}
                onChange={onNameChange}
                endAdornment={
                  filter.name_contains_nocase && (
                    <ClearInputAdornment
                      onClick={clearFilterField('name_contains_nocase')}
                    />
                  )
                }
              />
            </Box>

            <Box>
              <Typography variant="subtitle2" component="div" sx={{ mb: 1 }}>
                Token symbol
              </Typography>
              <OutlinedInput
                data-cy={'filter-symbol-input'}
                fullWidth
                size="small"
                value={filter.symbol_contains_nocase || ''}
                onChange={onSymbolChange}
                endAdornment={
                  filter.symbol_contains_nocase && (
                    <ClearInputAdornment
                      onClick={clearFilterField('symbol_contains_nocase')}
                    />
                  )
                }
              />
            </Box>

            <Box>
              <Typography variant="subtitle2" component="div" sx={{ mb: 1 }}>
                Is token listed?
              </Typography>

              <ToggleButtonGroup
                exclusive
                fullWidth
                size="small"
                value={listedStatus}
                onChange={onListedStatusChange}
              >
                <ToggleButton
                  data-cy={'filter-listed-yes'}
                  value={ListedStatus.Listed}
                >
                  Yes
                </ToggleButton>
                <ToggleButton
                  data-cy={'filter-listed-no'}
                  value={ListedStatus.NotListed}
                >
                  No
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Stack direction="row" justifyContent="flex-end" spacing={1}>
              {(filter.name_contains_nocase ||
                filter.symbol_contains_nocase ||
                listedStatus !== null) && (
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
      <Table>
        <TableHead>
          <TableRow>
            <TableCell width="40%">
              <TableSortLabel
                active={order?.orderBy === 'name'}
                direction={
                  order?.orderBy === 'name' ? order?.orderDirection : 'desc'
                }
                onClick={handleSorts('name', 'token__name')}
              >
                Token name
              </TableSortLabel>
            </TableCell>
            <TableCell width="20%">Symbol</TableCell>
            <TableCell width="20%">
              <TableSortLabel
                active={order?.orderBy === 'isListed'}
                direction={
                  order?.orderBy === 'isListed' ? order?.orderDirection : 'desc'
                }
                onClick={handleSorts('isListed', 'token__isListed')}
              >
                Listed
                <InfoTooltipBtn
                  title={
                    <>
                      A token is listed & recognized by the Superfluid protocol.
                      Benefits of deploying a listed super token include that it
                      may be instantiated by symbol in our SDK, and listed by
                      symbol in the Superfluid dashboard{' '}
                      <AppLink
                        href="https://docs.superfluid.finance/superfluid/protocol-developers/guides/super-tokens"
                        target="_blank"
                      >
                        Read more
                      </AppLink>
                    </>
                  }
                />
              </TableSortLabel>
            </TableCell>
            <TableCell width="20%">
              <TableSortLabel
                active={
                  statisticsOrder?.orderBy === 'totalNumberOfActiveStreams'
                }
                direction={
                  statisticsOrder?.orderBy === 'totalNumberOfActiveStreams'
                    ? statisticsOrder?.orderDirection
                    : 'desc'
                }
                onClick={handleSorts(undefined, 'totalNumberOfActiveStreams')}
              >
                Active Streams
              </TableSortLabel>
            </TableCell>
            {/* <TableCell width="20%">Holders</TableCell> */}
            <TableCell width="20%">
              <TableSortLabel
                active={statisticsOrder?.orderBy === 'totalOutflowRate'}
                direction={
                  statisticsOrder?.orderBy === 'totalOutflowRate'
                    ? statisticsOrder?.orderDirection
                    : 'desc'
                }
                onClick={handleSorts(undefined, 'totalOutflowRate')}
              >
                Daily Outflow Rate
              </TableSortLabel>
            </TableCell>
            <TableCell width="40%">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tokenStatistics.map((token) => (
            <TableRow key={token.id}>
              <TableCell data-cy={'token-name'}>
                <AppLink href={`/${network.slugName}/supertokens/${token.id}`}>
                  {tokens.find((stat) => stat.id === token.id)?.name || (
                    <>&#8212;</>
                  )}
                </AppLink>
              </TableCell>
              <TableCell data-cy={'token-symbol'}>
                <AppLink
                  href={`/${network.slugName}/supertokens/${token.id}`}
                  sx={{
                    textDecoration: 'none',
                    flexShrink: 0
                  }}
                >
                  <Chip
                    clickable
                    size="small"
                    label={
                      tokens.find((stat) => stat.id === token.id)?.symbol || (
                        <>&#8211;</>
                      )
                    }
                    sx={{
                      cursor: 'pointer',
                      lineHeight: '24px'
                    }}
                  />
                </AppLink>
              </TableCell>
              <TableCell data-cy={'token-listed-status'}>
                {tokens.find((stat) => stat.id === token.id)?.isListed
                  ? 'Yes'
                  : 'No'}
              </TableCell>
              {/* need to get the token from tokenStatistics that has the same id as token */}
              <TableCell data-cy={'token-active-streams'}>
                {token.totalNumberOfActiveStreams}
              </TableCell>
              {/* <TableCell></TableCell> */}
              <TableCell data-cy={'token-outflow-rate'}>
                {(Number(token.totalOutflowRate) * 60 * 60 * 24) / 1e18}
              </TableCell>
              <TableCell data-cy={'token-address'}>{token.id}</TableCell>
            </TableRow>
          ))}

          {queryResult.isSuccess && tokens.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={3}
                sx={{ border: 0, height: '96px' }}
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
              <TableCell colSpan={6} align="right">
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

export default SuperTokensTable
