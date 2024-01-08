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
import FlowingBalanceWithToken from '../../../components/Amount/FlowingBalanceWithToken'
import FlowRate from '../../../components/Amount/FlowRate'

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

  // const rows: FlowDistribution[] =
  //   queryResult.data && pool
  //     ? queryResult.data.data.map((x) => ({
  //       id: x.id,
  //       timestamp: x.timestamp,
  //       newDistributorToPoolFlowRate: x.newDistributorToPoolFlowRate,
  //       newTotalDistributionFlowRate: x.newTotalDistributionFlowRate,
  //       adjustmentFlowRate: BigNumber.from(
  //         x.adjustmentFlowRate
  //       ),
  //       adjustmentFlowRecipient:
  //         x.adjustmentFlowRecipient,
  //       operator: x.operator,
  //     }))
  //     : []

  const rows: FlowDistributionUpdatedEvent[] = queryResult.data
    ? queryResult.data.data
    : []

  const columns: GridColDef<FlowDistributionUpdatedEvent>[] = useMemo(
    () => [
      { field: 'id', hide: true, sortable: false, flex: 1 },
      {
        field: 'timestamp',
        headerName: 'Date',
        sortable: true,
        flex: 0.5,
        renderCell: (params) => <TimeAgo subgraphTime={params.row.timestamp} />,
      },
      {
        field: 'distributor',
        headerName: 'Distributor',
        sortable: true,
        flex: 0.5,
        renderCell: (params) => (
          <AccountAddress
            dataCy={'distributor-address'}
            network={network}
            address={params.row.poolDistributor}
          />
        ),
      },
      {
        field: 'newDistributorToPoolFlowRate',
        headerName: "Distributor's Flow Rate",
        hide: false,
        sortable: false,
        flex: 1.5,
        renderCell: (params) => {
          return (
            <FlowRate flowRate={params.row.newDistributorToPoolFlowRate} />
          )
        },
      },
      {
        field: 'newTotalDistributionFlowRate',
        headerName: 'Total Flow Rate',
        hide: false,
        sortable: false,
        flex: 1.5,
        renderCell: (params) => {
          return (
            <FlowRate flowRate={params.row.newTotalDistributionFlowRate} />
          )
        },
      },
      {
        field: 'adjustmentFlowRecipient',
        headerName: 'Adjustment Flow Recipient',
        hide: true,
        sortable: true,
        flex: 0.5,
        renderCell: (params) => (
          <AccountAddress
            dataCy={'adjustment-flow-recipient-address'}
            network={network}
            address={params.row.adjustmentFlowRecipient}
          />
        ),
      },
      {
        field: 'adjustmentFlowRate',
        headerName: 'Adjustment Flow Rate',
        hide: true,
        sortable: false,
        flex: 1.5,
        renderCell: (params) => {
          return (
            <FlowRate flowRate={params.row.adjustmentFlowRate} />
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

export default FlowDistributionUpdatedEventDataGrid
