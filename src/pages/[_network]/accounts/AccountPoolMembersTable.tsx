import FilterListIcon from '@mui/icons-material/FilterList'
import {
  Box,
  Button,
  Chip,
  IconButton,
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
import { createSkipPaging, Ordering } from '@superfluid-finance/sdk-core'
import omit from 'lodash/fp/omit'
import set from 'lodash/fp/set'
import isEqual from 'lodash/isEqual'
import { FC, FormEvent, useEffect, useRef, useState } from 'react'

import { AccountAddressFormatted } from '../../../components/Address/AccountAddressFormatted'
import FlowingBalanceWithToken from '../../../components/Amount/FlowingBalanceWithToken'
import AppLink from '../../../components/AppLink/AppLink'
import DetailsButton from '../../../components/Details/DetailsButton'
import InfoTooltipBtn from '../../../components/Info/InfoTooltipBtn'
import { PoolPercentage } from '../../../components/PoolPercentage/PoolPercentage'
import InfinitePagination from '../../../components/Table/InfinitePagination'
import TableLoader from '../../../components/Table/TableLoader'
import TimeAgo from '../../../components/TimeAgo/TimeAgo'
import useDebounce from '../../../hooks/useDebounce'
import { Network } from '../../../redux/networks'
import { sfGdaSubgraph } from '../../../redux/store'
import {
  PoolMember_Filter,
  PoolMember_OrderBy
} from '../../../subgraphs/gda/.graphclient'
import { PoolMembersQuery } from '../../../subgraphs/gda/endpoints/entityArgs'
import { PoolMemberDetailsDialog } from '../pool-members/PoolMemberDetails'
import { PoolMemberTotalAmountReceived } from '../pool-members/PoolMemberTotalAmountReceived'
import { UnitsStatus } from './AccountPoolAdminsTable'

enum MemberStatus {
  IsConnected,
  IsNotConnected
}

enum DistributionStatus {
  HasClaimed,
  HasNotClaimed
}

export const PoolMembersOrderingDefault: Ordering<PoolMember_OrderBy> = {
  orderBy: 'createdAtTimestamp',
  orderDirection: 'desc'
}

export const PoolMembersPagingDefault = createSkipPaging({ take: 10 })

interface AccountPoolMembersTableProps {
  network: Network
  accountAddress: string
}

type RequiredPoolMembersQuery = Required<Omit<PoolMembersQuery, 'block'>>

const AccountPoolMembersTable: FC<AccountPoolMembersTableProps> = ({
  network,
  accountAddress
}) => {
  const filterAnchorRef = useRef(null)
  const [showFilterMenu, setShowFilterMenu] = useState(false)

  const [memberStatus, setMemberStatus] = useState<MemberStatus | null>(null)

  const [distributionStatus, setDistributionStatus] =
    useState<DistributionStatus | null>(null)
  const [unitsStatus, setUnitsStatus] = useState<UnitsStatus | null>(null)

  const defaultFilter = {
    account: accountAddress
  }

  const createDefaultArg = (): RequiredPoolMembersQuery => ({
    chainId: network.chainId,
    filter: defaultFilter,
    pagination: PoolMembersPagingDefault,
    order: PoolMembersOrderingDefault
  })

  const [queryArg, setQueryArg] =
    useState<RequiredPoolMembersQuery>(createDefaultArg())

  const [queryTrigger, queryResult] = sfGdaSubgraph.useLazyPoolMembersQuery()

  const queryTriggerDebounced = useDebounce(queryTrigger, 250)

  const onQueryArgChanged = (newArgs: RequiredPoolMembersQuery) => {
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

  const onOrderingChanged = (newOrdering: Ordering<PoolMember_OrderBy>) =>
    onQueryArgChanged({ ...queryArg, order: newOrdering })

  const onSortClicked = (field: PoolMember_OrderBy) => () => {
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
      onOrderingChanged(PoolMembersOrderingDefault)
    }
  }

  const onFilterChange = (newFilter: PoolMember_Filter) => {
    onQueryArgChanged({
      ...queryArg,
      pagination: { ...queryArg.pagination, skip: 0 },
      filter: newFilter
    })
  }

  const clearFilterField =
    (...fields: Array<keyof PoolMember_Filter>) =>
      () =>
        onFilterChange(omit(fields, queryArg.filter))

  const getMemberStatusFilter = (
    status: MemberStatus | null
  ): PoolMember_Filter => {
    switch (status) {
      case MemberStatus.IsConnected:
        return { isConnected: true }
      case MemberStatus.IsNotConnected:
        return { isConnected: false }
      default:
        return {}
    }
  }

  const changeMemberStatus = (newStatus: MemberStatus | null) => {
    const { isConnected, ...newFilter } = queryArg.filter

    setMemberStatus(newStatus)
    onFilterChange({
      ...newFilter,
      ...getMemberStatusFilter(newStatus)
    })
  }

  const onMemberStatusChange = (_event: unknown, newStatus: MemberStatus) =>
    changeMemberStatus(newStatus)

  const clearMemberStatusFilter = () => changeMemberStatus(null)

  const getDistributionFilter = (
    status: DistributionStatus | null
  ): PoolMember_Filter => {
    switch (status) {
      case DistributionStatus.HasClaimed:
        return { totalAmountClaimed_gt: '0' }
      case DistributionStatus.HasNotClaimed:
        return { totalAmountClaimed: '0' }
      default:
        return {}
    }
  }

  const changeDistributionStatus = (newStatus: DistributionStatus | null) => {
    const { totalAmountClaimed, totalAmountClaimed_gt, ...newFilter } =
      queryArg.filter

    setDistributionStatus(newStatus)
    onFilterChange({
      ...newFilter,
      ...getDistributionFilter(newStatus)
    })
  }

  const onDistributionStatusChange = (
    _event: unknown,
    newStatus: DistributionStatus
  ) => changeDistributionStatus(newStatus)

  const clearDistributionStatusFilter = () => changeDistributionStatus(null)

  const getUnitsStatusFilter = (
    status: UnitsStatus | null
  ): PoolMember_Filter => {
    switch (status) {
      case UnitsStatus.Issued:
        return { units_gt: '0' }
      case UnitsStatus.NotIssued:
        return { units: '0' }
      default:
        return {}
    }
  }

  const changeUnitsStatus = (newStatus: UnitsStatus | null) => {
    const { units_gt, units, ...newFilter } = queryArg.filter

    setUnitsStatus(newStatus)
    onFilterChange({
      ...newFilter,
      ...getUnitsStatusFilter(newStatus)
    })
  }

  const onUnitsStatusChange = (_event: unknown, newStatus: UnitsStatus) =>
    changeUnitsStatus(newStatus)

  const clearUnitsStatusFilter = () => changeUnitsStatus(null)

  const openFilter = () => setShowFilterMenu(true)
  const closeFilter = () => setShowFilterMenu(false)

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    closeFilter()
  }

  const resetFilter = () => {
    setUnitsStatus(null)
    setDistributionStatus(null)
    setMemberStatus(null)
    onFilterChange(defaultFilter)
    closeFilter()
  }

  const tableRows = queryResult.data?.data || []
  const hasNextPage = !!queryResult.data?.nextPaging

  const { order, pagination } = queryArg

  const {
    skip = PoolMembersPagingDefault.skip,
    take = PoolMembersPagingDefault.take
  } = queryResult.data?.paging || {}

  return (
    <>
      <Toolbar sx={{ mt: 3, px: 1 }} variant="dense" disableGutters>
        <Typography sx={{ flex: '1 1 100%' }} variant="h6" component="h2">
          Pool Members
          <InfoTooltipBtn
            dataCy={'members-tooltip'}
            size={22}
            title={
              <>
                Accounts that have received flows/units within the Pool. Members
                will receive distributed funds based on the portion of units
                they own in and pool.{' '}
                <AppLink
                  data-cy={'members-tooltip-link'}
                  href="https://docs.superfluid.finance/superfluid/protocol-overview/in-depth-overview/super-agreements/streaming-distributions-coming-soon"
                  target="_blank"
                >
                  Read more
                </AppLink>
              </>
            }
          />
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center" sx={{ mx: 2 }}>
          {memberStatus !== null && (
            <Chip
              label={
                <b data-cy={'chip-status'}>
                  {memberStatus === MemberStatus.IsConnected
                    ? 'Approved'
                    : 'Not approved'}
                </b>
              }
              size="small"
              onDelete={clearMemberStatusFilter}
            />
          )}

          {distributionStatus !== null && (
            <Chip
              label={
                <b data-cy={'chip-distributed'}>
                  {distributionStatus === DistributionStatus.HasClaimed
                    ? 'Has received distribution'
                    : 'No distributions received'}
                </b>
              }
              size="small"
              onDelete={clearDistributionStatusFilter}
            />
          )}

          {unitsStatus !== null && (
            <Chip
              label={
                <b data-cy={'chip-units'}>
                  {unitsStatus === UnitsStatus.Issued
                    ? 'Has units'
                    : 'No units'}
                </b>
              }
              size="small"
              onDelete={clearUnitsStatusFilter}
            />
          )}
        </Stack>

        <Tooltip disableFocusListener title="Filter">
          <IconButton
            data-cy={'members-filter'}
            ref={filterAnchorRef}
            onClick={openFilter}
          >
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
                Is Connected?
              </Typography>

              <ToggleButtonGroup
                size="small"
                exclusive
                fullWidth
                value={memberStatus}
                onChange={onMemberStatusChange}
              >
                <ToggleButton
                  data-cy={'filter-members-approved-yes'}
                  value={MemberStatus.IsConnected}
                >
                  Yes
                </ToggleButton>
                <ToggleButton
                  data-cy={'filter-members-approved-no'}
                  value={MemberStatus.IsNotConnected}
                >
                  No
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Box>
              <Typography variant="subtitle2" component="div" sx={{ mb: 1 }}>
                Has received distributions?
              </Typography>

              <ToggleButtonGroup
                size="small"
                exclusive
                fullWidth
                value={distributionStatus}
                onChange={onDistributionStatusChange}
              >
                <ToggleButton
                  data-cy={'filter-members-received-distributions-yes'}
                  value={UnitsStatus.Issued}
                >
                  Yes
                </ToggleButton>
                <ToggleButton
                  data-cy={'filter-members-received-distributions-no'}
                  value={UnitsStatus.NotIssued}
                >
                  No
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Box>
              <Typography variant="subtitle2" component="div" sx={{ mb: 1 }}>
                Has Member units?
              </Typography>

              <ToggleButtonGroup
                size="small"
                exclusive
                fullWidth
                value={unitsStatus}
                onChange={onUnitsStatusChange}
              >
                <ToggleButton
                  data-cy={'filter-members-units-yes'}
                  value={UnitsStatus.Issued}
                >
                  Yes
                </ToggleButton>
                <ToggleButton
                  data-cy={'filter-members-units-no'}
                  value={UnitsStatus.NotIssued}
                >
                  No
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
            <Stack direction="row" justifyContent="flex-end" spacing={1}>
              {(memberStatus !== null ||
                distributionStatus !== null ||
                unitsStatus !== null) && (
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
            {/* <TableCell>
              Pool Admin
              <InfoTooltipBtn
                dataCy="gda-admin-tooltip"
                title={
                  <>
                    The creator of an pool using the GDA - admins may update the
                    pool of members and flow/distribute funds to members.{' '}
                    <AppLink
                      data-cy="gda-admin-tooltip-link"
                      href="https://docs.superfluid.finance/superfluid/protocol-overview/in-depth-overview/super-agreements/streaming-distributions-coming-soon"
                      target="_blank"
                    >
                      Read more
                    </AppLink>
                  </>
                }
                iconSx={{ mb: 0, mr: 0.5 }}
              />
            </TableCell> */}
            <TableCell>Pool ID</TableCell>
            <TableCell>
              <TableSortLabel
                active={order?.orderBy === 'totalAmountReceivedUntilUpdatedAt'}
                direction={
                  order?.orderBy === 'totalAmountReceivedUntilUpdatedAt'
                    ? order?.orderDirection
                    : 'desc'
                }
                onClick={onSortClicked('totalAmountReceivedUntilUpdatedAt')}
              >
                Amount Received
              </TableSortLabel>
            </TableCell>

            <TableCell width="160px">
              <TableSortLabel
                active={order.orderBy === 'isConnected'}
                direction={
                  order?.orderBy === 'isConnected'
                    ? order?.orderDirection
                    : 'desc'
                }
                onClick={onSortClicked('isConnected')}
              >
                Connected
                <InfoTooltipBtn
                  dataCy="gda-connected-tooltip"
                  title="Indicates if account has claimed all past distributions and automatically claims all future distributions."
                  iconSx={{ mb: 0, mr: 0.5 }}
                />
              </TableSortLabel>
            </TableCell>
            {/* <TableCell>
              <TableSortLabel
                active={order?.orderBy === 'totalAmountClaimed'}
                direction={
                  order?.orderBy === 'totalAmountClaimed'
                    ? order?.orderDirection
                    : 'desc'
                }
                onClick={onSortClicked('totalAmountClaimed')}
              >
                Amount Claimed
              </TableSortLabel>
            </TableCell> */}
            <TableCell>
              <TableSortLabel
                active={order?.orderBy === 'units'}
                direction={
                  order?.orderBy === 'units' ? order?.orderDirection : 'desc'
                }
                onClick={onSortClicked('units')}
              >
                Units
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={order?.orderBy === 'updatedAtTimestamp'}
                direction={
                  order?.orderBy === 'updatedAtTimestamp'
                    ? order?.orderDirection
                    : 'desc'
                }
                onClick={onSortClicked('updatedAtTimestamp')}
              >
                Updated
              </TableSortLabel>
            </TableCell>
            <TableCell width="68px" />
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows.map((member) => (
            <TableRow key={member.id} hover>
              <TableCell data-cy={'pool-id'} className="address">
                <AccountAddressFormatted
                  network={network}
                  address={member.pool}
                  ellipsis={6}
                />
              </TableCell>

              <TableCell data-cy={'amount-received'}>
                <PoolMemberTotalAmountReceived
                  member={member}
                  pool={{
                    flowRate: member.pool_flowRate,
                    totalAmountDistributedUntilUpdatedAt:
                      member.pool_totalAmountDistributedUntilUpdatedAt,
                    totalUnits: member.pool_totalUnits,
                    updatedAtTimestamp: member.pool_updatedAtTimestamp
                  }}
                >
                  {({
                    memberCurrentTotalAmountReceived,
                    timestamp,
                    memberFlowRate
                  }) => (
                    <FlowingBalanceWithToken
                      balance={memberCurrentTotalAmountReceived}
                      balanceTimestamp={timestamp}
                      flowRate={memberFlowRate}
                      TokenChipProps={{
                        network: network,
                        tokenAddress: member.token
                      }}
                    />
                  )}
                </PoolMemberTotalAmountReceived>
              </TableCell>

              <TableCell data-cy={'connected-status'}>
                {member.isConnected ? 'Yes' : 'No'}
              </TableCell>
              {/* <TableCell data-cy={'amount-claimed'}>
                <BalanceWithToken
                  network={network}
                  tokenAddress={member.token}
                  wei={BigNumber.from(member.totalAmountClaimed)}
                />
              </TableCell> */}
              <TableCell data-cy={'member-units'}>
                <PoolPercentage
                  totalUnits={member.pool_totalUnits}
                  individualUnits={member.units}
                />
              </TableCell>

              <TableCell>
                <TimeAgo subgraphTime={member.updatedAtTimestamp} />
              </TableCell>

              <TableCell align="right">
                <PoolMemberDetailsDialog
                  network={network}
                  poolMemberId={member.id.toString()}
                >
                  {(onClick) => <DetailsButton onClick={onClick} />}
                </PoolMemberDetailsDialog>
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
                <Typography data-cy={'members-no-results'} variant="body1">
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

export default AccountPoolMembersTable
