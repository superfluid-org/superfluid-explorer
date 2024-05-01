import { Skeleton } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import { skipToken } from '@reduxjs/toolkit/dist/query'
import {
  createSkipPaging,
  Ordering,
  Pool,
  PoolMember,
  SkipPaging
} from '@superfluid-finance/sdk-core'
import { BigNumber } from 'ethers'
import _ from 'lodash'
import { FC, useMemo, useState } from 'react'

import BalanceWithToken from '../../../components/Amount/BalanceWithToken'
import { AppDataGrid } from '../../../components/DataGrid/AppDataGrid'
import TimeAgo from '../../../components/TimeAgo/TimeAgo'
import { Network } from '../../../redux/networks'
import { sfGdaSubgraph } from '../../../redux/store'
import { InstantDistributionUpdatedEvent_OrderBy } from '../../../subgraphs/gda/.graphclient'
import {
  InstantDistributionUpdatedEvent,
  PoolMemberUnitsUpdatedEvent
} from '../../../subgraphs/gda/events'

export const PoolMemberDistributions: FC<{
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
    instantDistributionUpdatedEventPaging,
    setInstantDistributionUpdatedEventPaging
  ] = useState<SkipPaging>(
    createSkipPaging({
      take: 10
    })
  )
  const [
    instantDistributionUpdatedEventOrdering,
    setInstantDistributionUpdatedEventOrdering
  ] = useState<Ordering<InstantDistributionUpdatedEvent_OrderBy> | undefined>({
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

  const subscribersUnitsUpdatedEvents:
    | PoolMemberUnitsUpdatedEvent[]
    | undefined = useMemo(
    () => memberUnitsUpdatedEventsQuery.data?.items ?? [],
    [memberUnitsUpdatedEventsQuery.data]
  )

  const instantDistributionUpdatedEventsQuery =
    sfGdaSubgraph.useInstantDistributionUpdatedEventsQuery(
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
            order: instantDistributionUpdatedEventOrdering,
            pagination: instantDistributionUpdatedEventPaging
          }
        : skipToken
    )

  const instantDistributionUpdatedEvents: InstantDistributionUpdatedEvent[] =
    instantDistributionUpdatedEventsQuery.data?.data ?? []

  const columns: GridColDef<InstantDistributionUpdatedEvent>[] = useMemo(
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
        field: 'newIndexValue',
        headerName: 'Amount Received',
        hide: false,
        sortable: false,
        flex: 1,
        renderCell: (params) => {
          if (!pool || !subscribersUnitsUpdatedEvents?.length) {
            return <Skeleton sx={{ width: '100px' }} />
          }

          // Very touchy logic below...
          const instantDistributionUpdatedEvent =
            params.row as InstantDistributionUpdatedEvent

          let closestMembershipUnitsUpdatedEvent =
            subscribersUnitsUpdatedEvents.find(
              (x) => x.timestamp <= instantDistributionUpdatedEvent.timestamp
            )!

          if (
            instantDistributionUpdatedEvent.timestamp ===
            closestMembershipUnitsUpdatedEvent.timestamp
          ) {
            // *sigh* the timestamps match so we have to look at log indexes as well to know which came first...
            const instantDistributionUpdatedEventLogIndex = Number(
              _.last(instantDistributionUpdatedEvent.id.split('-'))
            )
            const subscribersUnitsUpdatedEventLogIndex = Number(
              _.last(closestMembershipUnitsUpdatedEvent.id.split('-'))
            )

            if (
              subscribersUnitsUpdatedEventLogIndex >
              instantDistributionUpdatedEventLogIndex
            ) {
              closestMembershipUnitsUpdatedEvent =
                subscribersUnitsUpdatedEvents.find(
                  (x) => x.timestamp < instantDistributionUpdatedEvent.timestamp
                )!
            }
          }

          if (!closestMembershipUnitsUpdatedEvent) {
            return <>0</>
          }

          const subscribersUnits = BigNumber.from(
            closestMembershipUnitsUpdatedEvent.units
          )

          // as per vincent we are not more using index value, instead of we can directly use actualAmount here
          // const indexDistributionAmount = BigNumber.from(
          //   instantDistributionUpdatedEvent.newIndexValue // Index is always incrementing bigger.
          // ).sub(BigNumber.from(instantDistributionUpdatedEvent.oldIndexValue));
          const subscribersDistributionAmount = BigNumber.from(
            instantDistributionUpdatedEvent.actualAmount
          ).mul(subscribersUnits)

          return (
            <BalanceWithToken
              wei={subscribersDistributionAmount}
              network={network}
              tokenAddress={pool.token}
            />
          )
        }
      }
    ],
    [network, pool, subscribersUnitsUpdatedEvents]
  )

  return (
    <AppDataGrid
      rows={instantDistributionUpdatedEvents}
      columns={columns}
      queryResult={instantDistributionUpdatedEventsQuery}
      setOrdering={(x) => setInstantDistributionUpdatedEventOrdering(x as any)}
      ordering={instantDistributionUpdatedEventOrdering}
      setPaging={setInstantDistributionUpdatedEventPaging}
    />
  )
}
