import {
  createSkipPaging,
  Ordering,
  SkipPaging} from '@superfluid-finance/sdk-core'
import { FC, useState } from 'react'

import { Network } from '../../../redux/networks'
import { sfSubgraph } from '../../../redux/store'
import { PoolDistributor_OrderBy } from '../../../subgraphs/gda/.graphclient'
import { PoolDistributorsDataGrid } from './PoolDistributorsDataGrid'

type Props = {
  network: Network
  accountAddress?: string
  poolAddress?: string
}

export const PoolDistributorsDataGridManager: FC<Props> = ({
  network,
  accountAddress,
  poolAddress
}) => {
  const [poolDistributorPaging, setPoolDistributorPaging] =
    useState<SkipPaging>(
      createSkipPaging({
        take: 10
      })
    )
  const [poolDistributorOrdering, setPoolDistributorOrdering] = useState<
    Ordering<PoolDistributor_OrderBy> | undefined
  >({
    orderBy: 'createdAtTimestamp',
    orderDirection: 'desc'
  })

  const poolDistributorsQuery = sfSubgraph.usePoolDistributorsQuery({
    chainId: network.chainId,
    pagination: poolDistributorPaging,
    order: poolDistributorOrdering,
    filter: {
      ...(accountAddress ? { account: accountAddress } : {}),
      ...(poolAddress ? { pool: poolAddress } : {})
    }
  })

  return (
    <PoolDistributorsDataGrid
      network={network}
      queryResult={poolDistributorsQuery}
      setPaging={setPoolDistributorPaging}
      ordering={poolDistributorOrdering}
      setOrdering={setPoolDistributorOrdering}
      hideColumns={[
        ...(accountAddress ? (['account'] as const) : []),
        ...(poolAddress ? (['pool'] as const) : [])
      ]}
    />
  )
}
