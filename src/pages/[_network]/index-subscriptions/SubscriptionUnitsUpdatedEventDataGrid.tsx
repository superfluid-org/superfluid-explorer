import { GridColDef } from '@mui/x-data-grid'
import {
  Ordering,
  PagedResult,
  SkipPaging,
  SubscriptionUnitsUpdatedEvent,
  SubscriptionUnitsUpdatedEvent_OrderBy
} from '@superfluid-finance/sdk-core'
import { FC, useMemo } from 'react'

import { AppDataGrid } from '../../../components/DataGrid/AppDataGrid'
import TimeAgo from '../../../components/TimeAgo/TimeAgo'

interface Props {
  queryResult: {
    isFetching: boolean
    data?: PagedResult<SubscriptionUnitsUpdatedEvent>
  }
  setPaging: (paging: SkipPaging) => void
  ordering: Ordering<SubscriptionUnitsUpdatedEvent_OrderBy> | undefined
  setOrdering: (
    ordering?: Ordering<SubscriptionUnitsUpdatedEvent_OrderBy>
  ) => void
}

const SubscriptionUnitsUpdatedEventDataGrid: FC<Props> = ({
  queryResult,
  setPaging,
  ordering,
  setOrdering
}) => {
  const rows: SubscriptionUnitsUpdatedEvent[] = queryResult.data
    ? queryResult.data.data
    : []

  const columns: GridColDef<SubscriptionUnitsUpdatedEvent>[] = useMemo(
    () => [
      { field: 'id', hide: true, sortable: false, flex: 1 },
      {
        field: 'timestamp',
        headerName: 'Date',
        sortable: true,
        flex: 1,
        renderCell: (params) => <TimeAgo subgraphTime={params.row.timestamp} />
      },
      {
        field: 'units',
        headerName: 'Units',
        flex: 2,
        renderCell: (params) => {
          return <>{params.row.units}</>
        }
      }
    ],
    []
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

export default SubscriptionUnitsUpdatedEventDataGrid
