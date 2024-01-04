import { GridColDef } from '@mui/x-data-grid'
import { Ordering, PagedResult, SkipPaging } from '@superfluid-finance/sdk-core'
import { BigNumber } from 'ethers'
import { FC, useMemo } from 'react'

import AccountAddress from '../../../components/Address/AccountAddress'
import SuperTokenAddress from '../../../components/Address/SuperTokenAddress'
import EtherFormatted from '../../../components/Amount/EtherFormatted'
import { AppDataGrid } from '../../../components/DataGrid/AppDataGrid'
import TimeAgo from '../../../components/TimeAgo/TimeAgo'
import { useNetworkContext } from '../../../contexts/NetworkContext'
import { FlowDistributionUpdatedEvent_OrderBy } from '../../../subgraphs/gda/.graphclient'
import { Pool } from '../../../subgraphs/gda/entities/pool/pool'
import { FlowDistributionUpdatedEvent } from '../../../subgraphs/gda/events'

interface Props {
  pool: Pool | null | undefined
  queryResult: {
    isFetching: boolean
    data?: PagedResult<FlowDistributionUpdatedEvent>
  }
  setPaging: (paging: SkipPaging) => void
  ordering: Ordering<FlowDistributionUpdatedEvent_OrderBy> | undefined
  setOrdering: (
    ordering?: Ordering<FlowDistributionUpdatedEvent_OrderBy>
  ) => void
}

interface FlowDistribution {
  id: string
  timestamp: number
  adjustmentFlowRate: BigNumber
  adjustmentFlowRecipient: string
  operator: string
}

const FlowDistributionUpdatedEventDataGrid: FC<Props> = ({
  pool,
  queryResult,
  setPaging,
  ordering,
  setOrdering,
}) => {
  const network = useNetworkContext()

  const columns: GridColDef[] = useMemo(
    () => [
      { field: 'id', hide: true, sortable: false, flex: 1 },
      {
        field: 'operator',
        headerName: 'Operator',
        sortable: true,
        flex: 0.5,
        renderCell: (params) => (
          <AccountAddress
            dataCy={'operator-address'}
            network={network}
            address={params.value}
          />
        ),
      },
      {
        field: 'adjustmentFlowRecipient',
        headerName: 'Adjustment Flow Recipient',
        sortable: true,
        flex: 0.5,
        renderCell: (params) => (
          <AccountAddress
            dataCy={'adjustment-flow-recipient-address'}
            network={network}
            address={params.value}
          />
        ),
      },
      {
        field: 'timestamp',
        headerName: 'Distribution Date',
        sortable: true,
        flex: 0.5,
        renderCell: (params) => <TimeAgo subgraphTime={params.value} />,
      },
      {
        field: 'adjustmentFlowRate',
        headerName: 'Adjustment Flow Rate',
        hide: false,
        sortable: false,
        flex: 1.5,
        renderCell: (params) => {
          return (
            <>
              <EtherFormatted wei={params.value} />
              &nbsp;
              {pool && (
                <SuperTokenAddress
                  network={network}
                  address={pool.token}
                  format={(token) => token.symbol}
                  formatLoading={() => ''}
                />
              )}
            </>
          )
        },
      },
    ],
    [pool, network]
  )

  const rows: FlowDistribution[] =
    queryResult.data && pool
      ? queryResult.data.data.map((flowDistributionUpdatedEvent) => ({
          id: flowDistributionUpdatedEvent.id,
          timestamp: flowDistributionUpdatedEvent.timestamp,
          adjustmentFlowRate: BigNumber.from(
            flowDistributionUpdatedEvent.adjustmentFlowRate
          ),
          adjustmentFlowRecipient:
            flowDistributionUpdatedEvent.adjustmentFlowRecipient,
          operator: flowDistributionUpdatedEvent.operator,
        }))
      : []

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

export default FlowDistributionUpdatedEventDataGrid
