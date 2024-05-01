import { GridColDef } from '@mui/x-data-grid'
import {
  Ordering,
  PagedResult,
  PoolDistributor,
  PoolDistributor_OrderBy,
  SkipPaging
} from '@superfluid-finance/sdk-core'
import { FC, useMemo } from 'react'

import AccountAddress from '../../../components/Address/AccountAddress'
import { PoolAddress } from '../../../components/Address/PoolAddress'
import Amount from '../../../components/Amount/Amount'
import FlowingBalance from '../../../components/Amount/FlowingBalance'
import FlowRate from '../../../components/Amount/FlowRate'
import { AppDataGrid } from '../../../components/DataGrid/AppDataGrid'
import TimeAgo from '../../../components/TimeAgo/TimeAgo'
import TokenChip from '../../../components/TokenChip/TokenChip'
import { Network } from '../../../redux/networks'

interface Props {
  network: Network
  queryResult: {
    isFetching: boolean
    data?: PagedResult<PoolDistributor>
  }
  setPaging: (paging: SkipPaging) => void
  ordering: Ordering<PoolDistributor_OrderBy> | undefined
  setOrdering: (ordering?: Ordering<PoolDistributor_OrderBy>) => void
  hideColumns?: (keyof PoolDistributor)[]
}

export const PoolDistributorsDataGrid: FC<Props> = ({
  network,
  queryResult,
  setPaging,
  ordering,
  setOrdering,
  ...props
}) => {
  const hideColumns = props.hideColumns || []

  const columns = useMemo(() => {
    return getColumns({ network, hideColumns })
  }, [network, ...hideColumns])

  const rows: PoolDistributor[] = queryResult.data ? queryResult.data.items : []

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

const getColumns = ({
  network,
  hideColumns
}: {
  network: Network
  hideColumns: (keyof PoolDistributor)[]
}): GridColDef<PoolDistributor>[] => {
  const columns: GridColDef<PoolDistributor>[] = [
    {
      flex: 10,
      field: 'id',
      headerName: 'Subgraph ID',
      hide: true,
      sortable: false
    },
    {
      flex: 8,
      field: 'createdAtTimestamp',
      headerName: 'Created At',
      hide: true,
      sortable: true,
      renderCell: ({ row: { createdAtTimestamp } }) => (
        <TimeAgo
          subgraphTime={createdAtTimestamp}
          typographyProps={{ color: 'text.secondary' }}
        />
      )
    },
    {
      flex: 5,
      field: 'createdAtBlockNumber',
      headerName: 'Creation Block',
      hide: true,
      sortable: true,
      type: 'number'
    },
    {
      flex: 8,
      field: 'updatedAtTimestamp',
      headerName: 'Updated At',
      hide: false,
      sortable: true,
      renderCell: ({ row: { updatedAtTimestamp } }) => (
        <TimeAgo
          subgraphTime={updatedAtTimestamp}
          typographyProps={{ color: 'text.secondary' }}
        />
      )
    },
    {
      flex: 5,
      field: 'updatedAtBlockNumber',
      headerName: 'Update Block',
      hide: true,
      sortable: true,
      type: 'number'
    },
    {
      flex: 8,
      field: 'pool',
      headerName: 'Pool',
      hide: false,
      sortable: false,
      renderCell: ({ row: { pool } }) => (
        <PoolAddress address={pool} network={network} ellipsis={4} />
      )
    },
    {
      flex: 8,
      field: 'account',
      headerName: 'Distributor',
      hide: false,
      sortable: false,
      renderCell: ({ row: { account } }) => (
        <AccountAddress address={account} network={network} ellipsis={4} />
      )
    },
    {
      flex: 5,
      field: 'token',
      headerName: 'Token',
      hide: false,
      sortable: false,
      renderCell: ({ row: { token } }) => (
        <TokenChip tokenAddress={token} network={network} />
      )
    },
    {
      flex: 10,
      field: 'totalAmountDistributedUntilUpdatedAt',
      headerName: 'Total Distributed',
      hide: false,
      sortable: true,
      renderCell: ({
        row: {
          totalAmountDistributedUntilUpdatedAt,
          updatedAtTimestamp,
          flowRate
        }
      }) => (
        <FlowingBalance
          balance={totalAmountDistributedUntilUpdatedAt}
          balanceTimestamp={updatedAtTimestamp}
          flowRate={flowRate}
        />
      )
    },
    {
      flex: 10,
      field: 'totalAmountInstantlyDistributedUntilUpdatedAt',
      headerName: 'Instantly Distributed',
      hide: true,
      sortable: true,
      renderCell: ({
        row: { totalAmountInstantlyDistributedUntilUpdatedAt }
      }) => <Amount wei={totalAmountInstantlyDistributedUntilUpdatedAt} />
    },
    {
      flex: 10,
      field: 'totalAmountFlowedDistributedUntilUpdatedAt',
      headerName: 'Flow Distributed',
      hide: true,
      sortable: true,
      renderCell: ({
        row: {
          totalAmountFlowedDistributedUntilUpdatedAt,
          updatedAtTimestamp,
          flowRate
        }
      }) => (
        <FlowingBalance
          balance={totalAmountFlowedDistributedUntilUpdatedAt}
          balanceTimestamp={updatedAtTimestamp}
          flowRate={flowRate}
        />
      )
    },
    {
      flex: 10,
      field: 'flowRate',
      headerName: 'Flow Rate',
      hide: false,
      sortable: true,
      renderCell: ({ row: { flowRate } }) => <FlowRate flowRate={flowRate} />
    },
    {
      flex: 5,
      field: 'totalBuffer',
      headerName: 'Total Buffer',
      hide: true,
      sortable: true,
      renderCell: ({ row: { totalBuffer } }) => <Amount wei={totalBuffer} />
    }
  ]

  return columns.reduce((acc, column) => {
    if (hideColumns.includes(column.field as keyof PoolDistributor)) {
      column.hide = true
    }
    acc.push(column)
    return acc
  }, [] as GridColDef<PoolDistributor>[])
}
