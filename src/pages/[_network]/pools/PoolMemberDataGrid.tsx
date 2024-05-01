import { Button, Skeleton } from '@mui/material'
import {
  GridColDef,
  GridColumnHeaderTitle,
  GridRenderCellParams
} from '@mui/x-data-grid'
import {
  Ordering,
  PagedResult,
  Pool,
  PoolMember,
  SkipPaging
} from '@superfluid-finance/sdk-core'
import { FC, useMemo } from 'react'

import AccountAddress from '../../../components/Address/AccountAddress'
import FlowingBalanceWithToken from '../../../components/Amount/FlowingBalanceWithToken'
import { AppDataGrid } from '../../../components/DataGrid/AppDataGrid'
import InfoTooltipBtn from '../../../components/Info/InfoTooltipBtn'
import { PoolPercentage } from '../../../components/PoolPercentage/PoolPercentage'
import TimeAgo from '../../../components/TimeAgo/TimeAgo'
import { Network } from '../../../redux/networks'
import { PoolMember_OrderBy } from '../../../subgraphs/gda/.graphclient'
import { PoolMemberDetailsDialog } from '../pool-members/PoolMemberDetails'
import { PoolMemberTotalAmountReceived } from '../pool-members/PoolMemberTotalAmountReceived'
import { PoolQuery } from './PoolQuery'

interface Props {
  network: Network
  queryResult: {
    isFetching: boolean
    data?: PagedResult<PoolMember>
  }
  setPaging: (paging: SkipPaging) => void
  ordering: Ordering<PoolMember_OrderBy> | undefined
  setOrdering: (ordering?: Ordering<PoolMember_OrderBy>) => void
  pool: Pool | null | undefined
}

const PoolMemberDataGrid: FC<Props> = ({
  network,
  queryResult,
  setPaging,
  ordering,
  setOrdering,
  pool
}) => {
  const rows: PoolMember[] = queryResult.data ? queryResult.data.data : []

  const columns: GridColDef<PoolMember>[] = useMemo(
    () => [
      { field: 'id', hide: true },
      {
        field: 'updatedAtTimestamp',
        headerName: 'Updated',
        sortable: true,
        flex: 1,
        renderCell: (params) =>
          params.row.updatedAtTimestamp ? (
            <TimeAgo subgraphTime={params.row.updatedAtTimestamp} />
          ) : null
      },
      {
        field: 'account',
        headerName: 'Account',
        sortable: false,
        flex: 1,
        renderCell: (params) => (
          <AccountAddress
            network={network}
            address={params.row.account}
            ellipsis={6}
          />
        )
      },
      {
        field: 'approved',
        headerName: 'Connected',
        flex: 1,
        renderCell: (params: GridRenderCellParams<boolean>) => {
          return <>{params.row.isConnected ? 'Yes' : 'No'}</>
        },
        renderHeader: ({ colDef }) => (
          <>
            <GridColumnHeaderTitle
              label="Connected"
              columnWidth={colDef.computedWidth}
            />
            <InfoTooltipBtn
              dataCy={'approved-tooltip'}
              title="Indicates if account has claimed all past distributions and automatically claims all future distributions."
              iconSx={{ mb: 0, mr: 0.5 }}
            />
          </>
        )
      },
      {
        field: 'totalAmountReceivedUntilUpdatedAt',
        headerName: 'Amount Received',
        sortable: false,
        flex: 2,
        renderCell: (params: GridRenderCellParams<string, PoolMember>) =>
          pool ? (
            <PoolMemberTotalAmountReceived
              chainId={network.chainId}
              memberAddress={params.row.account}
              poolAddress={pool.id}
            >
              {({
                memberCurrentTotalAmountReceived,
                memberFlowRate,
                timestamp
              }) => (
                <FlowingBalanceWithToken
                  balance={memberCurrentTotalAmountReceived}
                  balanceTimestamp={timestamp}
                  flowRate={memberFlowRate}
                  TokenChipProps={{
                    network: network,
                    tokenAddress: params.row.token
                  }}
                />
              )}
            </PoolMemberTotalAmountReceived>
          ) : (
            <Skeleton sx={{ width: '100px' }} />
          )
      },
      {
        field: 'units',
        headerName: 'Units',
        flex: 2,
        renderCell: (params) => {
          return (
            <PoolQuery chainId={network.chainId} id={params.row.pool}>
              {({ currentData: pool }) =>
                pool ? (
                  <PoolPercentage
                    totalUnits={pool?.totalUnits}
                    individualUnits={params.row.units}
                  />
                ) : (
                  <Skeleton sx={{ width: '50px' }} />
                )
              }
            </PoolQuery>
          )
        }
      },
      {
        field: 'details',
        headerName: 'Details',
        flex: 1,
        sortable: false,
        renderCell: (cellParams) => (
          <PoolMemberDetailsDialog
            network={network}
            poolMemberId={cellParams.id.toString()}
          >
            {(onClick) => (
              <Button variant="outlined" onClick={onClick}>
                Details
              </Button>
            )}
          </PoolMemberDetailsDialog>
        )
      }
    ],
    [network, pool]
  )

  return (
    <AppDataGrid
      columns={columns}
      rows={rows}
      queryResult={queryResult}
      setPaging={setPaging}
      ordering={ordering}
      setOrdering={(x) => setOrdering(x as any)}
    />
  )
}

export default PoolMemberDataGrid
