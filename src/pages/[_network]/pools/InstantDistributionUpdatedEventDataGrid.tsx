import { Skeleton } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import {
  Ordering,
  PagedResult,
  Pool,
  SkipPaging
} from '@superfluid-finance/sdk-core'
import { BigNumber } from 'ethers'
import { FC, useMemo } from 'react'

import AccountAddress from '../../../components/Address/AccountAddress'
import BalanceWithToken from '../../../components/Amount/BalanceWithToken'
import { AppDataGrid } from '../../../components/DataGrid/AppDataGrid'
import TimeAgo from '../../../components/TimeAgo/TimeAgo'
import { useNetworkContext } from '../../../contexts/NetworkContext'
import { InstantDistributionUpdatedEvent_OrderBy } from '../../../subgraphs/gda/.graphclient'
import { InstantDistributionUpdatedEvent } from '../../../subgraphs/gda/events'

interface Props {
  pool: Pool | null | undefined
  queryResult: {
    isFetching: boolean
    data?: PagedResult<InstantDistributionUpdatedEvent>
  }
  setPaging: (paging: SkipPaging) => void
  ordering: Ordering<InstantDistributionUpdatedEvent_OrderBy> | undefined
  setOrdering: (
    ordering?: Ordering<InstantDistributionUpdatedEvent_OrderBy>
  ) => void
}

interface Distribution {
  id: string
  // totalConnectedUnits: string
  // totalDisconnectedUnits: string
  timestamp: number
  actualAmount: BigNumber
  requestedAmount: BigNumber
}

const InstantDistributionUpdatedEventDataGrid: FC<Props> = ({
  pool,
  queryResult,
  setPaging,
  ordering,
  setOrdering
}) => {
  const network = useNetworkContext()

  // const rows: Distribution[] =
  //   queryResult.data && pool
  //     ? queryResult.data.data.map((x) => ({
  //       id: x.id,
  //       actualAmount: BigNumber.from(x.actualAmount),
  //       requestedAmount: BigNumber.from(x.requestedAmount),
  //       timestamp: x.timestamp,
  //     }))
  //     : []

  const rows: InstantDistributionUpdatedEvent[] = queryResult.data
    ? queryResult.data.data
    : []

  const columns: GridColDef<InstantDistributionUpdatedEvent>[] = useMemo(
    () => [
      { field: 'id', hide: true, sortable: false, flex: 2 },
      {
        field: 'timestamp',
        headerName: 'Date',
        sortable: true,
        flex: 1,
        renderCell: (params) => <TimeAgo subgraphTime={params.row.timestamp} />
      },
      {
        field: 'distributor',
        headerName: 'Distributor',
        sortable: true,
        flex: 1,
        renderCell: (params) => (
          <AccountAddress
            dataCy={'instant-distributor-address'}
            network={network}
            address={params.row.poolDistributor}
            ellipsis={6}
          />
        )
      },
      {
        field: 'actualAmount',
        headerName: 'Distributed Amount',
        hide: false,
        sortable: false,
        flex: 2,
        renderCell: (params) => {
          return pool ? (
            <>
              <BalanceWithToken
                wei={params.row.actualAmount}
                network={network}
                tokenAddress={pool.token}
              />
            </>
          ) : (
            <Skeleton sx={{ width: '100px' }} />
          )
        }
      },
      {
        field: 'requestedAmount',
        headerName: 'Requested Amount',
        hide: false,
        sortable: false,
        flex: 1,
        renderCell: (params) => {
          return pool ? (
            <>
              <BalanceWithToken
                wei={params.row.requestedAmount}
                network={network}
                tokenAddress={pool.token}
              />
            </>
          ) : (
            <Skeleton sx={{ width: '100px' }} />
          )
        }
      }
    ],
    [pool, network]
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

export default InstantDistributionUpdatedEventDataGrid
