import { GridColDef } from '@mui/x-data-grid'
import { skipToken } from '@reduxjs/toolkit/dist/query'
import {
  createSkipPaging,
  Ordering,
  SkipPaging,
} from '@superfluid-finance/sdk-core'
import { FC, useMemo, useState } from 'react'

import AccountAddress from '../../../components/Address/AccountAddress'
import SuperTokenAddress from '../../../components/Address/SuperTokenAddress'
import EtherFormatted from '../../../components/Amount/EtherFormatted'
import { AppDataGrid } from '../../../components/DataGrid/AppDataGrid'
import TimeAgo from '../../../components/TimeAgo/TimeAgo'
import { Network } from '../../../redux/networks'
import { sfGdaSubgraph } from '../../../redux/store'
import { FlowDistributionUpdatedEvent_OrderBy } from '../../../subgraphs/gda/.graphclient'
import { Pool } from '../../../subgraphs/gda/entities/pool/pool'
import { PoolMember } from '../../../subgraphs/gda/entities/poolMember/poolMember'
import {
  FlowDistributionUpdatedEvent,
  PoolMemberUnitsUpdatedEvent,
} from '../../../subgraphs/gda/events'

export const PoolMemberFlowDistributions: FC<{
  network: Network
  poolMemberId: string
}> = ({ network, poolMemberId }) => {
  const poolMemberQuery = sfGdaSubgraph.usePoolMemberQuery({
    chainId: network.chainId,
    id: poolMemberId,
  })

  const poolMember: PoolMember | undefined | null = poolMemberQuery.data

  const poolQuery = sfGdaSubgraph.usePoolQuery(
    poolMember
      ? {
          chainId: network.chainId,
          id: poolMember.pool,
        }
      : skipToken
  )

  const pool: Pool | undefined | null = poolQuery.data

  const [
    flowDistributionUpdatedEventPaging,
    setFlowDistributionUpdatedEventPaging,
  ] = useState<SkipPaging>(
    createSkipPaging({
      take: 10,
    })
  )
  const [
    flowDistributionUpdatedEventOrdering,
    setFlowDistributionUpdatedEventOrdering,
  ] = useState<Ordering<FlowDistributionUpdatedEvent_OrderBy> | undefined>({
    orderBy: 'timestamp',
    orderDirection: 'desc',
  })

  const memberUnitsUpdatedEventsQuery =
    sfGdaSubgraph.usePoolMemberUnitsUpdatedEventsQuery({
      chainId: network.chainId,
      filter: {
        poolMember: poolMemberId,
      },
      pagination: {
        take: 999,
        skip: 0,
      },
      // Very important to order by timestamp in descending direction. Later `distributionAmount` logic depends on it.
      order: {
        orderBy: 'timestamp',
        orderDirection: 'desc',
      },
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
                : {}),
            },
            order: flowDistributionUpdatedEventOrdering,
            pagination: flowDistributionUpdatedEventPaging,
          }
        : skipToken
    )

  const flowDistributionUpdatedEvents: FlowDistributionUpdatedEvent[] =
    flowDistributionUpdatedEventsQuery.data?.data ?? []

  const columns: GridColDef<FlowDistributionUpdatedEvent>[] = useMemo(
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
            address={params.row.operator}
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
            address={params.row.adjustmentFlowRecipient}
          />
        ),
      },
      {
        field: 'timestamp',
        headerName: 'Distribution Date',
        sortable: true,
        flex: 0.5,
        renderCell: (params) => <TimeAgo subgraphTime={params.row.timestamp} />,
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
              <EtherFormatted wei={params.row.adjustmentFlowRate} />
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
    [network, pool]
  )

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
