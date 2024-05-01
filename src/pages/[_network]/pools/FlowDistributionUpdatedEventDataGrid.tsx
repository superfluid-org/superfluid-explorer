import {
  Ordering,
  PagedResult,
  Pool,
  SkipPaging
} from '@superfluid-finance/sdk-core'
import { BigNumber } from 'ethers'
import { FC } from 'react'

import { AppDataGrid } from '../../../components/DataGrid/AppDataGrid'
import { useNetworkContext } from '../../../contexts/NetworkContext'
import { FlowDistributionUpdatedEvent_OrderBy } from '../../../subgraphs/gda/.graphclient'
import { FlowDistributionUpdatedEvent } from '../../../subgraphs/gda/events'
import { useFlowDistributionUpdatedColumns } from './useFlowDistributionUpdatedColumns'

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
  setOrdering
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

  const columns = useFlowDistributionUpdatedColumns(network)

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
