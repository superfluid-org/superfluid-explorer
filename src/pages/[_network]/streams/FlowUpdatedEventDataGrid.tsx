import { GridColDef } from '@mui/x-data-grid'
import {
  FlowUpdatedEvent,
  FlowUpdatedEvent_OrderBy,
  Ordering,
  PagedResult,
  SkipPaging,
  Stream
} from '@superfluid-finance/sdk-core'
import { FC, useMemo } from 'react'

import AccountAddress from '../../../components/Address/AccountAddress'
import FlowRate from '../../../components/Amount/FlowRate'
import EtherFormatted from '../../../components/Amount/EtherFormatted'
import { AppDataGrid } from '../../../components/DataGrid/AppDataGrid'
import TimeAgo from '../../../components/TimeAgo/TimeAgo'
import { TransactionHash } from '../../../components/TransactionHash/TransactionHash'
import { useNetworkContext } from '../../../contexts/NetworkContext'
 
interface Props {
  stream: Stream | null | undefined
  queryResult: {
    isFetching: boolean
    data?: PagedResult<FlowUpdatedEvent>
  }
  setPaging: (paging: SkipPaging) => void
  ordering: Ordering<FlowUpdatedEvent_OrderBy> | undefined
  setOrdering: (ordering?: Ordering<FlowUpdatedEvent_OrderBy>) => void
}

const FlowUpdatedEventDataGrid: FC<Props> = ({
  stream,
  queryResult,
  setPaging,
  ordering,
  setOrdering
}) => {
  const network = useNetworkContext()

  const rows: FlowUpdatedEvent[] = queryResult.data?.data || []

  const columns: GridColDef<FlowUpdatedEvent>[] = useMemo(
    () => [
      { field: 'id', hide: true, sortable: false, flex: 1 },
      {
        field: 'timestamp',
        headerName: 'Date',
        sortable: true,
        flex: 0.8,
        renderCell: (params) => <TimeAgo subgraphTime={params.row.timestamp} />
      },
      {
        field: 'type',
        headerName: 'Type',
        sortable: false,
        flex: 0.5,
        renderCell: (params) => {
          const type = params.row.type
          switch (type) {
            case 0:
              return 'Create'
            case 1:
              return 'Update'
            case 2:
              return 'Terminate'
            default:
              return type
          }
        }
      },
      {
        field: 'transactionHash',
        headerName: 'Transaction',
        sortable: false,
        flex: 0.8,
        renderCell: (params) => (
          <TransactionHash
            network={network}
            transactionHash={params.row.transactionHash}
          />
        )
      },
      {
        field: 'sender',
        headerName: 'Sender',
        sortable: true,
        flex: 1,
        renderCell: (params) => (
          <AccountAddress
            dataCy={'sender-address'}
            network={network}
            address={params.row.sender}
          />
        )
      },
      {
        field: 'receiver',
        headerName: 'Receiver',
        sortable: true,
        flex: 1,
        renderCell: (params) => (
          <AccountAddress
            dataCy={'receiver-address'}
            network={network}
            address={params.row.receiver}
          />
        )
      },
      {
        field: 'flowRate',
        headerName: 'Flow Rate',
        sortable: false,
        flex: 0.8,
        renderCell: (params) => <FlowRate flowRate={params.row.flowRate} />
      },
      {
        field: 'deposit',
        headerName: 'Deposit',
        sortable: false,
        flex: 0.8,
        renderCell: (params) => {
          return <EtherFormatted wei={params.row.deposit} />
        }
      },
      {
        field: 'flowOperator',
        headerName: 'Operator',
        sortable: true,
        flex: 1,
        hide: true,
        renderCell: (params) => {
          // Only show if operator is different from sender
          if (params.row.flowOperator === params.row.sender) {
            return null
          }
          return (
            <AccountAddress
              dataCy={'operator-address'}
              network={network}
              address={params.row.flowOperator}
            />
          )
        }
      }
    ],
    [network]
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

export default FlowUpdatedEventDataGrid
