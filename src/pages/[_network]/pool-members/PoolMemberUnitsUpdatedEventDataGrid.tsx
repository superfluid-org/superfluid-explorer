import { GridColDef } from '@mui/x-data-grid'
import { Ordering, PagedResult, SkipPaging } from '@superfluid-finance/sdk-core'
import { FC, useMemo } from 'react'

import { AppDataGrid } from '../../../components/DataGrid/AppDataGrid'
import { PoolPercentage } from '../../../components/PoolPercentage/PoolPercentage'
import TimeAgo from '../../../components/TimeAgo/TimeAgo'
import { MemberUnitsUpdatedEvent_OrderBy } from '../../../subgraphs/gda/.graphclient'
import { PoolMemberUnitsUpdatedEvent } from '../../../subgraphs/gda/events'

interface Props {
  queryResult: {
    isFetching: boolean
    data?: PagedResult<PoolMemberUnitsUpdatedEvent>
  }
  setPaging: (paging: SkipPaging) => void
  ordering: Ordering<MemberUnitsUpdatedEvent_OrderBy> | undefined
  setOrdering: (ordering?: Ordering<MemberUnitsUpdatedEvent_OrderBy>) => void
}

const PoolMemberUnitsUpdatedEventDataGrid: FC<Props> = ({
  queryResult,
  setPaging,
  ordering,
  setOrdering
}) => {
  const rows: PoolMemberUnitsUpdatedEvent[] = queryResult.data
    ? queryResult.data.data
    : []

  const columns: GridColDef<PoolMemberUnitsUpdatedEvent>[] = useMemo(
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
        sortable: true,
        flex: 1,
        renderCell: (params) => (
          <PoolPercentage
            totalUnits={params.row.totalUnits}
            individualUnits={params.row.units}
          />
        )
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

export default PoolMemberUnitsUpdatedEventDataGrid
