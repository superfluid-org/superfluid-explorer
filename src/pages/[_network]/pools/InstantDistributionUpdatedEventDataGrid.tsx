import { Skeleton } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import { Ordering, PagedResult, SkipPaging } from '@superfluid-finance/sdk-core'
import { BigNumber } from 'ethers'
import { FC, useMemo } from 'react'

import BalanceWithToken from '../../../components/Amount/BalanceWithToken'
import { AppDataGrid } from '../../../components/DataGrid/AppDataGrid'
import TimeAgo from '../../../components/TimeAgo/TimeAgo'
import { useNetworkContext } from '../../../contexts/NetworkContext'
import { InstantDistributionUpdatedEvent_OrderBy } from '../../../subgraphs/gda/.graphclient'
import { Pool } from '../../../subgraphs/gda/entities/pool/pool'
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
  distributionAmount: BigNumber,
  // requestedAmount: BigNumber,
}

const calculateDistributionAmount = (
  event: InstantDistributionUpdatedEvent
): BigNumber => {
  // const totalUnits = event.totalConnectedUnits.add(
  //   event.totalDisconnectedUnits
  // )

  // const indexValueDifference = BigNumber.from(event.newIndexValue).sub(
  //   BigNumber.from(event.oldIndexValue)
  // );
  //BUG HERE

  // return BigNumber.from(event.actualAmount).mul(totalUnits)

  return BigNumber.from("0")
}

const InstantDistributionUpdatedEventDataGrid: FC<Props> = ({
  pool,
  queryResult,
  setPaging,
  ordering,
  setOrdering,
}) => {
  const network = useNetworkContext()

  const rows: Distribution[] =
    queryResult.data && pool
      ? queryResult.data.data.map((x) => ({
        id: x.id,
        distributionAmount: BigNumber.from(x.actualAmount),
        // distributionAmount: calculateDistributionAmount(
        //   instantDistributionUpdatedEvent
        // ),
        timestamp: x.timestamp,
        // totalConnectedUnits:
        //   instantDistributionUpdatedEvent.totalConnectedUnits,
        // totalDisconnectedUnits:
        //   instantDistributionUpdatedEvent.totalDisconnectedUnits,
      }))
      : []

  const columns: GridColDef[] = useMemo(
    () => [
      { field: 'id', hide: true, sortable: false, flex: 1 },
      {
        field: 'timestamp',
        headerName: 'Distribution Date',
        sortable: true,
        flex: 0.5,
        renderCell: (params) => <TimeAgo subgraphTime={params.value} />,
      },
      {
        field: 'distributionAmount',
        headerName: 'Distribution Amount',
        hide: false,
        sortable: false,
        flex: 1.5,
        renderCell: (params) => {
          return pool ? (
            <>
              <BalanceWithToken
                wei={params.row.distributionAmount}
                network={network}
                tokenAddress={pool.token}
              />
            </>
          ) : (
            <Skeleton sx={{ width: '100px' }} />
          )
        },
      },
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
