import { Skeleton } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import { skipToken } from '@reduxjs/toolkit/dist/query'
import {
  createSkipPaging,
  Index,
  IndexSubscription,
  IndexUpdatedEvent,
  IndexUpdatedEvent_OrderBy,
  Ordering,
  SkipPaging,
  SubscriptionUnitsUpdatedEvent
} from '@superfluid-finance/sdk-core'
import { BigNumber } from 'ethers'
import _ from 'lodash'
import { FC, useMemo, useState } from 'react'

import BalanceWithToken from '../../../components/Amount/BalanceWithToken'
import { AppDataGrid } from '../../../components/DataGrid/AppDataGrid'
import TimeAgo from '../../../components/TimeAgo/TimeAgo'
import { Network } from '../../../redux/networks'
import { sfSubgraph } from '../../../redux/store'

export const IndexSubscriptionDistributions: FC<{
  network: Network
  indexSubscriptionId: string
}> = ({ network, indexSubscriptionId }) => {
  const indexSubscriptionQuery = sfSubgraph.useIndexSubscriptionQuery({
    chainId: network.chainId,
    id: indexSubscriptionId
  })
  const indexSubscription: IndexSubscription | undefined | null =
    indexSubscriptionQuery.data

  const indexQuery = sfSubgraph.useIndexQuery(
    indexSubscription
      ? {
          chainId: network.chainId,
          id: indexSubscription.index
        }
      : skipToken
  )

  const index: Index | undefined | null = indexQuery.data

  const [indexUpdatedEventPaging, setIndexUpdatedEventPaging] =
    useState<SkipPaging>(
      createSkipPaging({
        take: 10
      })
    )
  const [indexUpdatedEventOrdering, setIndexUpdatedEventOrdering] = useState<
    Ordering<IndexUpdatedEvent_OrderBy> | undefined
  >({
    orderBy: 'timestamp',
    orderDirection: 'desc'
  })

  const subscriptionUnitsUpdatedEventsQuery =
    sfSubgraph.useSubscriptionUnitsUpdatedEventsQuery({
      chainId: network.chainId,
      filter: {
        subscription: indexSubscriptionId
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

  const subscriptionEndTime = useMemo<number | undefined>(
    () =>
      (subscriptionUnitsUpdatedEventsQuery.data?.data ?? []).find(
        (x) => x.units === '0'
      )?.timestamp,
    [subscriptionUnitsUpdatedEventsQuery.data]
  )

  const subscriptionStartTime = useMemo<number | undefined>(
    () =>
      (subscriptionUnitsUpdatedEventsQuery.data?.data ?? [])
        .slice() // To keep the reversing immutable.
        .reverse()
        .find((x) => x.units !== '0')?.timestamp,
    [subscriptionUnitsUpdatedEventsQuery]
  )

  const subscriptionUnitsUpdatedEvents:
    | SubscriptionUnitsUpdatedEvent[]
    | undefined = useMemo(
    () => subscriptionUnitsUpdatedEventsQuery.data?.items ?? [],
    [subscriptionUnitsUpdatedEventsQuery.data]
  )

  const indexUpdatedEventsQuery = sfSubgraph.useIndexUpdatedEventsQuery(
    index && subscriptionStartTime
      ? {
          chainId: network.chainId,
          filter: {
            index: index.id,
            timestamp_gte: subscriptionStartTime.toString(),
            ...(subscriptionEndTime
              ? { timestamp_lte: subscriptionEndTime.toString() }
              : {})
          },
          order: indexUpdatedEventOrdering,
          pagination: indexUpdatedEventPaging
        }
      : skipToken
  )

  const indexUpdatedEvents: IndexUpdatedEvent[] | undefined =
    indexUpdatedEventsQuery.data?.data ?? []

  const columns: GridColDef[] = useMemo(
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
          if (!index || !subscriptionUnitsUpdatedEvents?.length) {
            return <Skeleton sx={{ width: '100px' }} />
          }

          // Very touchy logic below...
          const indexUpdatedEvent = params.row as IndexUpdatedEvent

          let closestSubscriptionUnitsUpdatedEvent =
            subscriptionUnitsUpdatedEvents.find(
              (x) => x.timestamp <= indexUpdatedEvent.timestamp
            )!

          if (
            indexUpdatedEvent.timestamp ===
            closestSubscriptionUnitsUpdatedEvent.timestamp
          ) {
            // *sigh* the timestamps match so we have to look at log indexes as well to know which came first...
            const indexUpdatedEventLogIndex = Number(
              _.last(indexUpdatedEvent.id.split('-'))
            )
            const subscriptionUnitsUpdatedEventLogIndex = Number(
              _.last(closestSubscriptionUnitsUpdatedEvent.id.split('-'))
            )

            if (
              subscriptionUnitsUpdatedEventLogIndex > indexUpdatedEventLogIndex
            ) {
              closestSubscriptionUnitsUpdatedEvent =
                subscriptionUnitsUpdatedEvents.find(
                  (x) => x.timestamp < indexUpdatedEvent.timestamp
                )!
            }
          }

          if (!closestSubscriptionUnitsUpdatedEvent) {
            return <>0</>
          }

          const subscriptionUnits = BigNumber.from(
            closestSubscriptionUnitsUpdatedEvent.units
          )

          const indexDistributionAmount = BigNumber.from(
            indexUpdatedEvent.newIndexValue // Index is always incrementing bigger.
          ).sub(BigNumber.from(indexUpdatedEvent.oldIndexValue))

          const subscriptionDistributionAmount =
            indexDistributionAmount.mul(subscriptionUnits)

          return (
            <BalanceWithToken
              wei={subscriptionDistributionAmount}
              network={network}
              tokenAddress={index.token}
            />
          )
        }
      }
    ],
    [network, index, subscriptionUnitsUpdatedEvents]
  )

  return (
    <AppDataGrid
      rows={indexUpdatedEvents}
      columns={columns}
      queryResult={indexUpdatedEventsQuery}
      setOrdering={(x) => setIndexUpdatedEventOrdering(x as any)}
      ordering={indexUpdatedEventOrdering}
      setPaging={setIndexUpdatedEventPaging}
    />
  )
}
