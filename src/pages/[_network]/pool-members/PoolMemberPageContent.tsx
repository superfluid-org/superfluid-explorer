import {
  Box,
  Breadcrumbs,
  Card,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Skeleton,
  Stack,
  Typography
} from '@mui/material'
import { skipToken } from '@reduxjs/toolkit/dist/query'
import {
  createSkipPaging,
  Ordering,
  SkipPaging
} from '@superfluid-finance/sdk-core'
import { gql } from 'graphql-request'
import Error from 'next/error'
import { FC, useState } from 'react'

import AccountAddress from '../../../components/Address/AccountAddress'
import SuperTokenAddress from '../../../components/Address/SuperTokenAddress'
import FlowingBalanceWithToken from '../../../components/Amount/FlowingBalanceWithToken'
import AppLink from '../../../components/AppLink/AppLink'
import CopyLink from '../../../components/Copy/CopyLink'
import InfoTooltipBtn from '../../../components/Info/InfoTooltipBtn'
import { PoolPercentage } from '../../../components/PoolPercentage/PoolPercentage'
import SkeletonAddress from '../../../components/Skeleton/SkeletonAddress'
import TimeAgo from '../../../components/TimeAgo/TimeAgo'
import { Network } from '../../../redux/networks'
import { sfGdaSubgraph } from '../../../redux/store'
import { MemberUnitsUpdatedEvent_OrderBy } from '../../../subgraphs/gda/.graphclient'
import { Pool } from '../../../subgraphs/gda/entities/pool/pool'
import { PoolMember } from '../../../subgraphs/gda/entities/poolMember/poolMember'
import SubgraphQueryLink from '../../subgraph/SubgraphQueryLink'
import { PoolMemberFlowDistributions } from './PoolMemberFlowDistributions'
import { useTotalAmountRecivedFromPoolMember } from './PoolMemberTotalAmountReceived'
import PoolMemberUnitsUpdatedEventDataGrid from './PoolMemberUnitsUpdatedEventDataGrid'

export const PoolMemberPageContent: FC<{
  poolMemberId: string
  network: Network
}> = ({ poolMemberId, network }) => {
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
    poolMemberUnitsUpdatedEventPaging,
    setPoolMemberUnitsUpdatedEventPaging
  ] = useState<SkipPaging>(
    createSkipPaging({
      take: 10
    })
  )
  const [
    poolMemberUnitsUpdatedEventPagingOrdering,
    setPoolMemberUnitsUpdatedEventOrdering
  ] = useState<Ordering<MemberUnitsUpdatedEvent_OrderBy> | undefined>({
    orderBy: 'timestamp',
    orderDirection: 'desc'
  })
  const poolMemberUnitsUpdatedEventQuery =
    sfGdaSubgraph.usePoolMemberUnitsUpdatedEventsQuery({
      chainId: network.chainId,
      filter: {
        poolMember: poolMemberId
      },
      pagination: poolMemberUnitsUpdatedEventPaging,
      order: poolMemberUnitsUpdatedEventPagingOrdering
    })

  const totalAmountReceivedForPoolMember = useTotalAmountRecivedFromPoolMember(
    poolMember,
    pool
  )

  if (!poolQuery.isUninitialized && !poolQuery.isLoading && !poolQuery.data) {
    return <Error statusCode={404} />
  }

  return (
    <Container
      data-cy={'pool-member-container'}
      component={Box}
      sx={{ my: 2, py: 2 }}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.secondary">
            {network && network.displayName}
          </Typography>
          <Typography color="text.secondary">Pool Members</Typography>
          <Typography color="text.secondary" sx={{ whiteSpace: 'nowrap' }}>
            {poolMemberId.substring(0, 6) + '...'}
          </Typography>
        </Breadcrumbs>
        <CopyLink
          localPath={`/${network.slugName}/pool-members/${poolMemberId}`}
        />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: 1 }}
      >
        <Typography variant="h4" component="h1">
          Pool Member
        </Typography>
        <SubgraphQueryLink
          network={network}
          query={gql`
            query ($id: ID!) {
              poolMember(id: $id) {
                units
                totalAmountClaimed
                isConnected
                pool {
                  totalAmountDistributedUntilUpdatedAt
                }
              }
            }
          `}
          variables={`{ "id": "${poolMemberId}" }`}
        />
      </Stack>

      <Grid container spacing={3} sx={{ pt: 3 }}>
        <Grid item xs={12} md={6}>
          <Card elevation={2}>
            <List>
              <ListItem data-cy={'pool-subscribers-short-hash'} divider>
                <ListItemText
                  secondary="Pool"
                  primary={
                    poolMember && pool ? (
                      <AppLink
                        href={`/${network.slugName}/pools/${pool.id}`}
                      >{`${pool.id.substring(0, 6)}... (${pool.id})`}</AppLink>
                    ) : (
                      <Skeleton sx={{ width: '50px' }} />
                    )
                  }
                />
              </ListItem>
              <ListItem data-cy={'pool-subscribers-token'} divider>
                <ListItemText
                  secondary="Token"
                  primary={
                    poolMember ? (
                      <SuperTokenAddress
                        network={network}
                        address={poolMember.token}
                      />
                    ) : (
                      <SkeletonAddress />
                    )
                  }
                />
              </ListItem>
              <ListItem data-cy={'subscribers-admin'} divider>
                <ListItemText
                  secondary={
                    <>
                      Pool Admin
                      <InfoTooltipBtn
                        dataCy={'admin-tooltip'}
                        title={
                          <>
                            The creator of an pool using the GDA - admins may
                            update the pool of members and distribute funds to
                            members.{' '}
                            <AppLink
                              data-cy={'admin-tooltip-link'}
                              href="https://docs.superfluid.finance/superfluid/protocol-overview/in-depth-overview/super-agreements/streaming-distributions-coming-soon"
                              target="_blank"
                            >
                              Read more
                            </AppLink>
                          </>
                        }
                      />
                    </>
                  }
                  primary={
                    poolMember ? (
                      <AccountAddress
                        network={network}
                        address={poolMember.admin}
                      />
                    ) : (
                      <SkeletonAddress />
                    )
                  }
                />
              </ListItem>
              <ListItem data-cy={'subscription-member'}>
                <ListItemText
                  secondary="Member"
                  primary={
                    poolMember ? (
                      <AccountAddress
                        network={network}
                        address={poolMember.account}
                      />
                    ) : (
                      <SkeletonAddress />
                    )
                  }
                />
              </ListItem>
            </List>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card elevation={2}>
            <List>
              <ListItem data-cy={'subscription-units'} divider>
                <ListItemText
                  secondary={
                    <>
                      Units
                      <InfoTooltipBtn
                        dataCy={'units-tooltip'}
                        title={
                          <>
                            Amount of units compared to the total pool. Funds
                            will be distributed depending on the portion of
                            units an account has.{' '}
                            <AppLink
                              data-cy={'units-tooltip-link'}
                              href="https://docs.superfluid.finance/superfluid/protocol-developers/interactive-tutorials/instant-distribution"
                              target="_blank"
                            >
                              Read more
                            </AppLink>
                          </>
                        }
                      />
                    </>
                  }
                  primary={
                    poolMember && pool ? (
                      <PoolPercentage
                        totalUnits={pool.totalUnits}
                        individualUnits={poolMember.units}
                      />
                    ) : (
                      <Skeleton sx={{ width: '150px' }} />
                    )
                  }
                />
              </ListItem>
              <ListItem data-cy={'subscription-approval'} divider>
                <ListItemText
                  secondary={
                    <>
                      Connected
                      <InfoTooltipBtn
                        dataCy={'approval-tooltip'}
                        title="Indicates if account has claimed all past distributions and automatically claims all future distributions."
                      />
                    </>
                  }
                  primary={
                    poolMember ? (
                      poolMember.isConnected ? (
                        'Yes'
                      ) : (
                        'No'
                      )
                    ) : (
                      <Skeleton sx={{ width: '25px' }} />
                    )
                  }
                />
              </ListItem>
              <ListItem data-cy={'subscription-total-amount-received'} divider>
                <ListItemText
                  secondary="Total Amount Received"
                  primary={
                    poolMember && totalAmountReceivedForPoolMember ? (
                      <FlowingBalanceWithToken
                        balance={
                          totalAmountReceivedForPoolMember.memberCurrentTotalAmountReceived
                        }
                        balanceTimestamp={
                          totalAmountReceivedForPoolMember.timestamp
                        }
                        flowRate={
                          totalAmountReceivedForPoolMember.memberFlowRate
                        }
                        TokenChipProps={{
                          network: network,
                          tokenAddress: poolMember?.token
                        }}
                      />
                    ) : (
                      <Skeleton sx={{ width: '100px' }} />
                    )
                  }
                />
              </ListItem>
              {/* <ListItem data-cy={'subscription-total-amount-claimed'} divider>
                <ListItemText
                  secondary="Total Amount Claimed"
                  primary={
                    poolMember ? (
                      <>
                        <BalanceWithToken
                          wei={poolMember.totalAmountClaimed}
                          network={network}
                          tokenAddress={poolMember.token}
                        />
                      </>
                    ) : (
                      <Skeleton sx={{ width: '100px' }} />
                    )
                  }
                />
              </ListItem> */}
              <Grid container>
                <Grid item xs={6}>
                  <ListItem>
                    <ListItemText
                      data-cy="last-updated-at"
                      secondary="Last Updated At"
                      primary={
                        poolMember ? (
                          <TimeAgo
                            subgraphTime={poolMember.updatedAtTimestamp}
                          />
                        ) : (
                          <Skeleton sx={{ width: '80px' }} />
                        )
                      }
                    />
                  </ListItem>
                </Grid>
                <Grid item xs={6}>
                  <ListItem>
                    <ListItemText
                      data-cy="created-at"
                      secondary="Created At"
                      primary={
                        poolMember ? (
                          <TimeAgo
                            subgraphTime={poolMember.createdAtTimestamp}
                          />
                        ) : (
                          <Skeleton sx={{ width: '80px' }} />
                        )
                      }
                    />
                  </ListItem>
                </Grid>
              </Grid>
            </List>
          </Card>
        </Grid>
      </Grid>

      <Box data-cy={'flow-distributions-grid'} sx={{ mt: 3 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
          Flow Distributions
          <InfoTooltipBtn
            dataCy={'flow-distributions-tooltip'}
            title={
              <>
                An event in which super tokens are stream to the entire pool of
                members for a given pool using the Superfluid GDA.{' '}
                <AppLink
                  data-cy={'flow-distributions-tooltip-link'}
                  href="https://docs.superfluid.finance/superfluid/protocol-overview/in-depth-overview/super-agreements/streaming-distributions-coming-soon"
                  target="_blank"
                >
                  Read more
                </AppLink>
              </>
            }
            size={22}
          />
        </Typography>

        <Card elevation={2}>
          <PoolMemberFlowDistributions
            network={network}
            poolMemberId={poolMemberId}
          />
        </Card>
      </Box>

      {/* <Box data-cy={"instant-distributions-grid"} sx={{ mt: 3 }}>
              <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
                Instant Distributions
                <InfoTooltipBtn
                  dataCy={"distributions-tooltip"}
                  title={
                    <>
                      An event in which super tokens are distributed to the entire
                      pool of members for a given pool using the Superfluid GDA.{" "}
                      <AppLink
                        data-cy={"distributions-tooltip-link"}
                        href="https://docs.superfluid.finance/superfluid/protocol-overview/in-depth-overview/super-agreements/streaming-distributions-coming-soon#gda-examples-by-illustration"
                        target="_blank"
                      >
                        Read more
                      </AppLink>
                    </>
                  }
                  size={22}
                />
              </Typography>
      
              <Card elevation={2}>
                <PoolMemberDistributions
                  network={network}
                  poolMemberId={poolMemberId}
                />
              </Card>
            </Box> */}

      <Box data-cy={'units-updated-grid'} sx={{ mt: 3 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
          Units Updated
        </Typography>
        <Card elevation={2}>
          <PoolMemberUnitsUpdatedEventDataGrid
            queryResult={poolMemberUnitsUpdatedEventQuery}
            setPaging={setPoolMemberUnitsUpdatedEventPaging}
            ordering={poolMemberUnitsUpdatedEventPagingOrdering}
            setOrdering={setPoolMemberUnitsUpdatedEventOrdering}
          />
        </Card>
      </Box>
    </Container>
  )
}
