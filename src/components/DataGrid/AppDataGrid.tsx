import { Pagination } from '@mui/material'
import {
  DataGrid,
  DataGridProps,
  gridClasses,
  GridColumns,
  GridRowsProp
} from '@mui/x-data-grid'
import {
  ILightEntity,
  Ordering,
  PagedResult,
  SkipPaging
} from '@superfluid-finance/sdk-core'
import _ from 'lodash'
import { FC, ReactElement } from 'react'

interface Props {
  columns: GridColumns
  rows: GridRowsProp
  queryResult: {
    isFetching: boolean
    data?: PagedResult<ILightEntity>
  }
  setPaging: (paging: SkipPaging) => void
  ordering?: Ordering<string>
  setOrdering: (ordering?: Ordering<string>) => void
  dataGridProps?: Partial<DataGridProps>
}

export const AppDataGrid: FC<Props> = ({
  columns,
  rows,
  queryResult,
  setPaging,
  ordering,
  setOrdering,
  dataGridProps
}): ReactElement => {
  const defaultDataGridProps: DataGridProps = {
    autoHeight: true,
    disableColumnFilter: true,
    pagination: true,
    rows: rows,
    columns: columns,
    paginationMode: 'server',
    components: {
      Pagination: () =>
        AppDataGridPagination({
          paging: queryResult.data?.paging as SkipPaging,
          hasNextPage: !!queryResult.data?.nextPaging,
          setPaging
        })
    },
    loading: queryResult.isFetching,
    disableSelectionOnClick: true,
    sortingMode: 'server',
    sortModel: ordering
      ? [
          {
            field: ordering.orderBy,
            sort: ordering.orderDirection
          }
        ]
      : [],
    onSortModelChange: (sortModel) =>
      setOrdering(
        sortModel[0]
          ? {
              orderBy: sortModel[0].field,
              orderDirection: sortModel[0].sort! // TODO(KK): Forbidden
            }
          : undefined
      ),
    sx: {
      [`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]: {
        outline: 'none'
      },
      [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]:
        {
          outline: 'none'
        }
    }
  }

  const finalDataGridProps = _.merge(defaultDataGridProps, dataGridProps)

  return <DataGrid {...finalDataGridProps} />
}

interface PaginationProps {
  paging?: SkipPaging
  hasNextPage: boolean
  setPaging: (paging: SkipPaging) => void
}

const AppDataGridPagination: FC<PaginationProps> = ({
  paging,
  hasNextPage,
  setPaging
}) => {
  if (!paging) {
    return <></>
  }

  const pageSize = paging.take
  const page = paging.skip / pageSize + 1
  return page == 1 && !hasNextPage ? (
    <></>
  ) : (
    <Pagination
      count={hasNextPage ? page + 1 : page}
      disabled={page === 1 && !hasNextPage}
      page={page}
      onChange={(event, value) =>
        setPaging({
          skip: (value - 1) * pageSize,
          take: paging.take
        })
      }
    />
  )
}
