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
  TokenStatistic_OrderBy,
  TokenStatistic_Filter
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

const defaultStatisticsFilter: TokenStatistic_Filter = {
  token_: defaultFilter
}

export const defaultPaging = createSkipPaging({
  take: 10
})

export const tokensPaging = createSkipPaging({
  take: 500
})

const SuperTokensTable: FC<SuperTokensTableProps> = ({ network }) => {
  const filterAnchorRef = useRef(null)
  const [showFilterMenu, setShowFilterMenu] = useState(false)

  const [listedStatus, setListedStatus] = useState<ListedStatus | null>(null)

  const createDefaultArg = (): RequiredTokensQuery => ({
    chainId: network.chainId,
    filter: defaultFilter,
    pagination: tokensPaging,
    order: defaultOrdering
  })

  const createDefaultStatisticsArg = (): RequiredTokenStatisticsQuery => ({
    chainId: network.chainId,
    filter: defaultStatisticsFilter,
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

  const [dailyOutflowRateGte, setDailyOutflowRateGte] = useState<string>('')
  const [dailyOutflowRateLte, setDailyOutflowRateLte] = useState<string>('')
  const [perSecondOutflowRateGte, setPerSecondOutflowRateGte] =
    useState<string>('')
  const [perSecondOutflowRateLte, setPerSecondOutflowRateLte] =
    useState<string>('')

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
    onQueryStatisticsArgsChanged(
      set(
        'pagination.skip',
        (newPage - 1) * queryStatisticsArg.pagination.take,
        queryStatisticsArg
      )
    )
  }

  const setPageSize = (newPageSize: number) => {
    onQueryStatisticsArgsChanged(
      set('pagination.take', newPageSize, queryStatisticsArg)
    )
  }

  const onStatisticsOrderingChanged = (
    newStatisticsOrdering: Ordering<TokenStatistic_OrderBy>
  ) =>
    onQueryStatisticsArgsChanged({
      ...queryStatisticsArg,
      order: newStatisticsOrdering
    })

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

  const onFilterChange = (newFilter: TokenStatistic_Filter) => {
    onQueryStatisticsArgsChanged({
      ...queryStatisticsArg,
      pagination: { ...queryStatisticsArg.pagination, skip: 0 },
      filter: newFilter
    })
  }

  const clearFilterField =
    (...fields: Array<keyof TokenStatistic_Filter> | string[]) =>
    () => {
      if (fields.includes('totalOutflowRate_gte')) {
        setDailyOutflowRateGte('')
        setPerSecondOutflowRateGte('')
      } else if (fields.includes('totalOutflowRate_lte')) {
        setDailyOutflowRateLte('')
        setPerSecondOutflowRateLte('')
      }
      onFilterChange(omit(fields, queryStatisticsArg.filter))
    }

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { token_, ...newFilter } = queryStatisticsArg.filter
    if (e.target.value) {
      onFilterChange({
        ...queryStatisticsArg.filter,
        token_: {
          name_contains_nocase: e.target.value,
          isListed: token_?.isListed,
          symbol_contains_nocase: token_?.symbol_contains_nocase
        }
      })
    } else {
      onFilterChange(
        omit('token_.name_contains_nocase', queryStatisticsArg.filter)
      )
    }
  }

  const onSymbolChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { token_, ...newFilter } = queryStatisticsArg.filter
    if (e.target.value) {
      onFilterChange({
        ...queryStatisticsArg.filter,
        token_: {
          symbol_contains_nocase: e.target.value,
          isListed: token_?.isListed,
          name_contains_nocase: token_?.name_contains_nocase
        }
      })
    } else {
      onFilterChange(
        omit('token_.symbol_contains_nocase', queryStatisticsArg.filter)
      )
    }
  }

  const onActiveStreamsGteChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      onFilterChange({
        ...queryStatisticsArg.filter,
        totalNumberOfActiveStreams_gte: Number(e.target.value)
      })
    } else {
      onFilterChange(
        omit('totalNumberOfActiveStreams_gte', queryStatisticsArg.filter)
      )
    }
  }

  const onActiveStreamsLteChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      onFilterChange({
        ...queryStatisticsArg.filter,
        totalNumberOfActiveStreams_lte: Number(e.target.value)
      })
    } else {
      onFilterChange(
        omit('totalNumberOfActiveStreams_lte', queryStatisticsArg.filter)
      )
    }
  }

  const queryOutflowRateGte = (normalizedOutflowRate: string) => {
    if (normalizedOutflowRate) {
      onFilterChange({
        ...queryStatisticsArg.filter,
        totalOutflowRate_gte: normalizedOutflowRate
      })
    } else {
      onFilterChange(omit('totalOutflowRate_gte', queryStatisticsArg.filter))
    }
  }

  const onOutflowRateGteChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDailyOutflowRateGte(e.target.value)
  }

  useEffect(() => {
    if (dailyOutflowRateGte) {
      const dailyOutflowRateGteValue = Number(dailyOutflowRateGte)
      if (!isNaN(dailyOutflowRateGteValue)) {
        const normalizedOutflowRate = (
          (dailyOutflowRateGteValue * 1e18) /
          (60 * 60 * 24)
        ).toFixed(0)
        setPerSecondOutflowRateGte(normalizedOutflowRate)
        queryOutflowRateGte(normalizedOutflowRate)
      }
    }
  }, [dailyOutflowRateGte])

  const queryOutflowRateLte = (normalizedOutflowRate: string) => {
    if (normalizedOutflowRate) {
      onFilterChange({
        ...queryStatisticsArg.filter,
        totalOutflowRate_lte: normalizedOutflowRate
      })
    } else {
      onFilterChange(omit('totalOutflowRate_lte', queryStatisticsArg.filter))
    }
  }

  const onOutflowRateLteChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDailyOutflowRateLte(e.target.value)
  }

  useEffect(() => {
    if (dailyOutflowRateLte) {
      const dailyOutflowRateLteValue = Number(dailyOutflowRateLte)
      if (!isNaN(dailyOutflowRateLteValue)) {
        const normalizedOutflowRate = (
          (dailyOutflowRateLteValue * 1e18) /
          (60 * 60 * 24)
        ).toFixed(0)
        setPerSecondOutflowRateLte(normalizedOutflowRate)
        queryOutflowRateLte(normalizedOutflowRate)
      }
    }
  }, [dailyOutflowRateLte])

  const getListedStatusFilter = (
    status: ListedStatus | null
  ): TokenStatistic_Filter => {
    const { token_, ...newFilter } = queryStatisticsArg.filter
    switch (status) {
      case ListedStatus.Listed:
        return {
          token_: {
            isListed: true,
            name_contains_nocase: token_?.name_contains_nocase,
            symbol_contains_nocase: token_?.symbol_contains_nocase
          }
        }
      case ListedStatus.NotListed:
        return {
          token_: {
            isListed: false,
            name_contains_nocase: token_?.name_contains_nocase,
            symbol_contains_nocase: token_?.symbol_contains_nocase
          }
        }
      default:
        return {}
    }
  }

  const changeListedStatus = (newStatus: ListedStatus | null) => {
    const { token_, ...newFilter } = queryStatisticsArg.filter

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
    onFilterChange(defaultStatisticsFilter)
    closeFilter()
  }

  const hasNextPage = !!queryStatisticsResult.data?.nextPaging

  const tokens = queryResult.data?.data || []

  const tokenStatistics = queryStatisticsResult.data?.data || []

  const resultsToShow = tokenStatistics.map((stat) => ({
    ...stat,
    ...tokens.find((token) => token.id === stat.id)
  }))

  const {
    filter: statisticsFilter,
    order: statisticsOrder,
    pagination: statisticsPagination
  } = queryStatisticsArg

  const { skip = defaultPaging.skip, take = defaultPaging.take } =
    queryStatisticsResult.data?.paging || {}

  return (
    <>
      <Toolbar sx={{ px: 1 }} variant="dense" disableGutters>
        <Typography sx={{ flex: '1 1 100%' }} variant="h6" component="h2">
          Super tokens
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center" sx={{ mx: 2 }}>
          {statisticsFilter.token_?.name_contains_nocase && (
            <Chip
              label={
                <>
                  Name:{' '}
                  <b data-cy={'chip-name'}>
                    {statisticsFilter.token_?.name_contains_nocase}
                  </b>
                </>
              }
              size="small"
              onDelete={clearFilterField('token_.name_contains_nocase')}
            />
          )}

          {statisticsFilter.token_?.symbol_contains_nocase && (
            <Chip
              label={
                <>
                  Symbol:{' '}
                  <b data-cy={'chip-symbol'}>
                    {statisticsFilter.token_?.symbol_contains_nocase}
                  </b>
                </>
              }
              size="small"
              onDelete={clearFilterField('token_.symbol_contains_nocase')}
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

          {statisticsFilter.totalNumberOfActiveStreams_gte && (
            <Chip
              label={
                <>
                  Active Streams &#8805;{' '}
                  <b data-cy={'chip-active-streams-gte'}>
                    {statisticsFilter.totalNumberOfActiveStreams_gte}
                  </b>
                </>
              }
              size="small"
              onDelete={clearFilterField('totalNumberOfActiveStreams_gte')}
            />
          )}

          {statisticsFilter.totalNumberOfActiveStreams_lte && (
            <Chip
              label={
                <>
                  Active Streams &#8804;{' '}
                  <b data-cy={'chip-active-streams-lte'}>
                    {statisticsFilter.totalNumberOfActiveStreams_lte}
                  </b>
                </>
              }
              size="small"
              onDelete={clearFilterField('totalNumberOfActiveStreams_lte')}
            />
          )}

          {statisticsFilter.totalOutflowRate_gte && (
            <Chip
              label={
                <>
                  Outflow Rate &#8805;{' '}
                  <b data-cy={'chip-outflow-rate-gte'}>{dailyOutflowRateGte}</b>
                </>
              }
              size="small"
              onDelete={clearFilterField('totalOutflowRate_gte')}
            />
          )}

          {statisticsFilter.totalOutflowRate_lte && (
            <Chip
              label={
                <>
                  Outflow Rate &#8804;{' '}
                  <b data-cy={'chip-outflow-rate-lte'}>{dailyOutflowRateLte}</b>
                </>
              }
              size="small"
              onDelete={clearFilterField('totalOutflowRate_lte')}
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
                value={statisticsFilter.token_?.name_contains_nocase || ''}
                onChange={onNameChange}
                endAdornment={
                  statisticsFilter.token_?.name_contains_nocase && (
                    <ClearInputAdornment
                      onClick={clearFilterField('token_.name_contains_nocase')}
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
                value={statisticsFilter.token_?.symbol_contains_nocase || ''}
                onChange={onSymbolChange}
                endAdornment={
                  statisticsFilter.token_?.symbol_contains_nocase && (
                    <ClearInputAdornment
                      onClick={clearFilterField(
                        'token_.symbol_contains_nocase'
                      )}
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

            <Box>
              <Typography variant="subtitle2" component="div" sx={{ mb: 1 }}>
                Active Streams
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="space-between"
              >
                <>&#8804;</>
                <OutlinedInput
                  data-cy={'filter-active-streams-gte-input'}
                  fullWidth
                  size="small"
                  value={statisticsFilter.totalNumberOfActiveStreams_gte || ''}
                  onChange={onActiveStreamsGteChange}
                  endAdornment={
                    statisticsFilter.totalNumberOfActiveStreams_gte && (
                      <ClearInputAdornment
                        onClick={clearFilterField(
                          'totalNumberOfActiveStreams_gte'
                        )}
                      />
                    )
                  }
                />
              </Stack>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="space-between"
              >
                <>&#8805;</>
                <OutlinedInput
                  data-cy={'filter-active-streams-lte-input'}
                  fullWidth
                  size="small"
                  value={statisticsFilter.totalNumberOfActiveStreams_lte || ''}
                  onChange={onActiveStreamsLteChange}
                  endAdornment={
                    statisticsFilter.totalNumberOfActiveStreams_lte && (
                      <ClearInputAdornment
                        onClick={clearFilterField(
                          'totalNumberOfActiveStreams_lte'
                        )}
                      />
                    )
                  }
                />
              </Stack>
            </Box>

            <Box>
              <Typography variant="subtitle2" component="div" sx={{ mb: 1 }}>
                Daily Outflow Rate
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="space-between"
              >
                <>&#8804;</>
                <OutlinedInput
                  data-cy={'filter-outflow-rate-gte-input'}
                  fullWidth
                  size="small"
                  value={dailyOutflowRateGte || ''}
                  onChange={onOutflowRateGteChange}
                  endAdornment={
                    statisticsFilter.totalOutflowRate_gte && (
                      <ClearInputAdornment
                        onClick={clearFilterField('totalOutflowRate_gte')}
                      />
                    )
                  }
                />
              </Stack>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="space-between"
              >
                <>&#8805;</>
                <OutlinedInput
                  data-cy={'filter-outflow-rate-lte-input'}
                  fullWidth
                  size="small"
                  value={dailyOutflowRateLte || ''}
                  onChange={onOutflowRateLteChange}
                  endAdornment={
                    statisticsFilter.totalOutflowRate_lte && (
                      <ClearInputAdornment
                        onClick={clearFilterField('totalOutflowRate_lte')}
                      />
                    )
                  }
                />
              </Stack>
            </Box>

            <Stack direction="row" justifyContent="flex-end" spacing={1}>
              {(statisticsFilter.token_?.name_contains_nocase ||
                statisticsFilter.token_?.symbol_contains_nocase ||
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
                active={statisticsOrder?.orderBy === 'token__name'}
                direction={
                  statisticsOrder?.orderBy === 'token__name'
                    ? statisticsOrder?.orderDirection
                    : 'desc'
                }
                onClick={onStatisticsSortClicked('token__name')}
              >
                Token name
              </TableSortLabel>
            </TableCell>
            <TableCell width="20%">Symbol</TableCell>
            <TableCell width="20%">
              <TableSortLabel
                active={statisticsOrder?.orderBy === 'token__isListed'}
                direction={
                  statisticsOrder?.orderBy === 'token__isListed'
                    ? statisticsOrder?.orderDirection
                    : 'desc'
                }
                onClick={onStatisticsSortClicked('token__isListed')}
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
                onClick={onStatisticsSortClicked('totalNumberOfActiveStreams')}
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
                onClick={onStatisticsSortClicked('totalOutflowRate')}
              >
                Daily Outflow Rate
              </TableSortLabel>
            </TableCell>
            <TableCell width="40%">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resultsToShow.map((token) => (
            <TableRow key={token.id}>
              <TableCell data-cy={'token-name'}>
                <AppLink href={`/${network.slugName}/supertokens/${token.id}`}>
                  {/* {tokens.find((stat) => stat.id === token.id)?.name || (
                    <>&#8212;</>
                  )} */}
                  {token.name || <>&#8212;</>}
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
                      // } //   ) //     <>&#8212;</> //   tokens.find((stat) => stat.id === token.id)?.symbol || ( // {
                      token.symbol || <>&#8212;</>
                    }
                    sx={{
                      cursor: 'pointer',
                      lineHeight: '24px'
                    }}
                  />
                </AppLink>
              </TableCell>
              <TableCell data-cy={'token-listed-status'}>
                {/* {tokens.find((stat) => stat.id === token.id)?.isListed
                  ? 'Yes'
                  : 'No'} */}
                {token.isListed ? 'Yes' : 'No'}
              </TableCell>
              <TableCell data-cy={'token-active-streams'}>
                {token.totalNumberOfActiveStreams}
              </TableCell>
              {/* <TableCell></TableCell> */}
              <TableCell data-cy={'token-outflow-rate'}>
                {(Number(token.totalOutflowRate) * 60 * 60 * 24) / 1e18 >
                0.01 ? (
                  <>
                    {(
                      (Number(token.totalOutflowRate) * 60 * 60 * 24) /
                      1e18
                    ).toFixed(2)}
                  </>
                ) : (
                  <>0</>
                )}
              </TableCell>
              <TableCell data-cy={'token-address'}>{token.id}</TableCell>
            </TableRow>
          ))}

          {queryStatisticsResult.isSuccess && resultsToShow.length === 0 && (
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
            isLoading={
              queryStatisticsResult.isLoading ||
              queryStatisticsResult.isFetching
            }
            showSpacer={resultsToShow.length === 0}
          />
        </TableBody>

        {resultsToShow.length > 0 && (
          <TableFooter>
            <TableRow>
              <TableCell colSpan={6} align="right">
                <InfinitePagination
                  page={skip / take + 1}
                  pageSize={statisticsPagination.take}
                  isLoading={queryStatisticsResult.isFetching}
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
