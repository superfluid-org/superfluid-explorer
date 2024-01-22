import { skipToken } from '@reduxjs/toolkit/dist/query'
import {
  createSkipPaging,
  Ordering,
  SkipPaging
} from '@superfluid-finance/sdk-core'
import { FC, useMemo, useState } from 'react'

import { AppDataGrid } from '../../../components/DataGrid/AppDataGrid'
import { Network } from '../../../redux/networks'
import { sfGdaSubgraph } from '../../../redux/store'
import { FlowDistributionUpdatedEvent_OrderBy } from '../../../subgraphs/gda/.graphclient'
import { Pool } from '../../../subgraphs/gda/entities/pool/pool'
import { PoolMember } from '../../../subgraphs/gda/entities/poolMember/poolMember'
import { FlowDistributionUpdatedEvent } from '../../../subgraphs/gda/events'
import { useFlowDistributionUpdatedColumns } from '../pools/useFlowDistributionUpdatedColumns'

export const PoolMemberFlowDistributions: FC<{
  network: Network
  poolMemberId: string
}> = ({ network, poolMemberId }) => {
  const poolMemberQuery = sfGdaSubgraph.usePoolMemberQuery({
    chainId: network.chainId,
    id: poolMemberId
  })

  const poolMember: PoolMember | undefined | null = poolMemberQuery.data

  const poolQuery = sfGdaSubgraph.usePoolQuery(
    poolMember
      ? {
          chainId: network.chainId,
          id: poolMember.pool
        }
      : skipToken
  )

  const pool: Pool | undefined | null = poolQuery.data

  const [
    flowDistributionUpdatedEventPaging,
    setFlowDistributionUpdatedEventPaging
  ] = useState<SkipPaging>(
    createSkipPaging({
      take: 10
    })
  )
  const [
    flowDistributionUpdatedEventOrdering,
    setFlowDistributionUpdatedEventOrdering
  ] = useState<Ordering<FlowDistributionUpdatedEvent_OrderBy> | undefined>({
    orderBy: 'timestamp',
    orderDirection: 'desc'
  })

  const memberUnitsUpdatedEventsQuery =
    sfGdaSubgraph.usePoolMemberUnitsUpdatedEventsQuery({
      chainId: network.chainId,
      filter: {
        poolMember: poolMemberId
      },
      pagination: {
        take: 999,
        skip: 0
      },
      // Very important to order by timestamp in descending direction. Later `distributionAmount` logic depends on it.
      order: {
        orderBy: 'timestamp',
        orderDirection: 'desc'
      }
    })

  const subscribersEndTime = useMemo<number | undefined>(
    () =>
      (memberUnitsUpdatedEventsQuery.data?.data ?? []).find(
        (x) => x.units === '0'
      )?.timestamp,
    [memberUnitsUpdatedEventsQuery.data]
  )

  const subscribersStartTime = useMemo<number | undefined>(
    () =>
      (memberUnitsUpdatedEventsQuery.data?.data ?? [])
        .slice() // To keep the reversing immutable.
        .reverse()
        .find((x) => x.units !== '0')?.timestamp,
    [memberUnitsUpdatedEventsQuery]
  )

  const flowDistributionUpdatedEventsQuery =
    sfGdaSubgraph.useFlowDistributionUpdatedEventsQuery(
      pool && subscribersStartTime
        ? {
            chainId: network.chainId,
            filter: {
              pool: pool.id,
              timestamp_gte: subscribersStartTime.toString(),
              ...(subscribersEndTime
                ? { timestamp_lte: subscribersEndTime.toString() }
                : {})
            },
            order: flowDistributionUpdatedEventOrdering,
            pagination: flowDistributionUpdatedEventPaging
          }
        : skipToken
    )

  const flowDistributionUpdatedEvents: FlowDistributionUpdatedEvent[] =
    flowDistributionUpdatedEventsQuery.data?.data ?? []

  const columns = useFlowDistributionUpdatedColumns(network)

  return (
    <AppDataGrid
      rows={flowDistributionUpdatedEvents}
      columns={columns}
      queryResult={flowDistributionUpdatedEventsQuery}
      setOrdering={(x) => setFlowDistributionUpdatedEventOrdering(x as any)}
      ordering={flowDistributionUpdatedEventOrdering}
      setPaging={setFlowDistributionUpdatedEventPaging}
    />
  )
}
