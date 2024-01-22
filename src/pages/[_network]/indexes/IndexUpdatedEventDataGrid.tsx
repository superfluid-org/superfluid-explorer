import { GridColDef } from '@mui/x-data-grid'
import {
  Index,
  IndexUpdatedEvent,
  IndexUpdatedEvent_OrderBy,
  Ordering,
  PagedResult,
  SkipPaging
} from '@superfluid-finance/sdk-core'
import { BigNumber } from 'ethers'
import { FC, useMemo } from 'react'

import SuperTokenAddress from '../../../components/Address/SuperTokenAddress'
import EtherFormatted from '../../../components/Amount/EtherFormatted'
import { AppDataGrid } from '../../../components/DataGrid/AppDataGrid'
import TimeAgo from '../../../components/TimeAgo/TimeAgo'
import { useNetworkContext } from '../../../contexts/NetworkContext'

interface Props {
  index: Index | null | undefined
  queryResult: {
    isFetching: boolean
    data?: PagedResult<IndexUpdatedEvent>
  }
  setPaging: (paging: SkipPaging) => void
  ordering: Ordering<IndexUpdatedEvent_OrderBy> | undefined
  setOrdering: (ordering?: Ordering<IndexUpdatedEvent_OrderBy>) => void
}

interface Distribution {
  id: string
  totalUnitsApproved: string
  totalUnitsPending: string
  timestamp: number
  distributionAmount: BigNumber
}

const calculateDistributionAmount = (event: IndexUpdatedEvent): BigNumber => {
  const totalUnits = BigNumber.from(event.totalUnitsApproved).add(
    BigNumber.from(event.totalUnitsPending)
  )
  const indexValueDifference = BigNumber.from(event.newIndexValue).sub(
    BigNumber.from(event.oldIndexValue)
  )
  return indexValueDifference.mul(totalUnits)
}

const IndexUpdatedEventDataGrid: FC<Props> = ({
  index,
  queryResult,
  setPaging,
  ordering,
  setOrdering
}) => {
  const network = useNetworkContext()

  const rows: Distribution[] =
    queryResult.data && index
      ? queryResult.data.data.map((indexUpdatedEvent) => ({
          id: indexUpdatedEvent.id,
          distributionAmount: calculateDistributionAmount(indexUpdatedEvent),
          timestamp: indexUpdatedEvent.timestamp,
          totalUnitsApproved: indexUpdatedEvent.totalUnitsApproved,
          totalUnitsPending: indexUpdatedEvent.totalUnitsPending
        }))
      : []

  const columns: GridColDef<Distribution>[] = useMemo(
    () => [
      { field: 'id', hide: true, sortable: false, flex: 1 },
      {
        field: 'timestamp',
        headerName: 'Distribution Date',
        sortable: true,
        flex: 0.5,
        renderCell: (params) => <TimeAgo subgraphTime={params.row.timestamp} />
      },
      {
        field: 'distributionAmount',
        headerName: 'Distribution Amount',
        hide: false,
        sortable: false,
        flex: 1.5,
        renderCell: (params) => {
          return (
            <>
              <EtherFormatted wei={params.row.distributionAmount} />
              &nbsp;
              {index && (
                <SuperTokenAddress
                  network={network}
                  address={index.token}
                  format={(token) => token.symbol}
                  formatLoading={() => ''}
                />
              )}
            </>
          )
        }
      }
    ],
    [index, network]
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

export default IndexUpdatedEventDataGrid
