import { GridColDef } from '@mui/x-data-grid'
import { useMemo } from 'react'

import AccountAddress from '../../../components/Address/AccountAddress'
import FlowRate from '../../../components/Amount/FlowRate'
import TimeAgo from '../../../components/TimeAgo/TimeAgo'
import { Network } from '../../../redux/networks'
import { FlowDistributionUpdatedEvent } from '../../../subgraphs/gda/events'

export const useFlowDistributionUpdatedColumns = (network: Network) => {
  const columns: GridColDef<FlowDistributionUpdatedEvent>[] = useMemo(
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
            dataCy={'distributor-address'}
            network={network}
            address={params.row.poolDistributor}
          />
        )
      },
      {
        field: 'newDistributorToPoolFlowRate',
        headerName: "Distributor's Flow Rate",
        hide: false,
        sortable: false,
        flex: 2,
        renderCell: (params) => {
          return <FlowRate flowRate={params.row.newDistributorToPoolFlowRate} />
        }
      },
      {
        field: 'newTotalDistributionFlowRate',
        headerName: 'Total Flow Rate',
        hide: false,
        sortable: false,
        flex: 2,
        renderCell: (params) => {
          return <FlowRate flowRate={params.row.newTotalDistributionFlowRate} />
        }
      },
      {
        field: 'adjustmentFlowRate',
        headerName: 'Adjustment Flow Rate',
        hide: false,
        sortable: false,
        flex: 1,
        renderCell: (params) => {
          return <FlowRate flowRate={params.row.adjustmentFlowRate} />
        }
      },
      {
        field: 'adjustmentFlowRecipient',
        headerName: 'Adjustment Flow Receiver',
        hide: false,
        sortable: true,
        flex: 1,
        renderCell: (params) => (
          <AccountAddress
            dataCy={'adjustment-flow-recipient-address'}
            network={network}
            address={params.row.adjustmentFlowRecipient}
          />
        )
      }
    ],
    [network]
  )

  return columns
}
