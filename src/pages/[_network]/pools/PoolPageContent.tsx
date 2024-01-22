import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Skeleton,
  Stack,
  Tooltip,
  Typography
} from '@mui/material'
import {
  createSkipPaging,
  Ordering,
  SkipPaging
} from '@superfluid-finance/sdk-core'
import { gql } from 'graphql-request'
import Error from 'next/error'
import { FC, useState } from 'react'

import AccountAddress from '../../../components/Address/AccountAddress'
import { AccountAddressFormatted } from '../../../components/Address/AccountAddressFormatted'
import SuperTokenAddress from '../../../components/Address/SuperTokenAddress'
import BalanceWithToken from '../../../components/Amount/BalanceWithToken'
import FlowingBalanceWithToken from '../../../components/Amount/FlowingBalanceWithToken'
import AppLink from '../../../components/AppLink/AppLink'
import CopyLink from '../../../components/Copy/CopyLink'
import InfoTooltipBtn from '../../../components/Info/InfoTooltipBtn'
import SkeletonAddress from '../../../components/Skeleton/SkeletonAddress'
import TimeAgo from '../../../components/TimeAgo/TimeAgo'
import { Network } from '../../../redux/networks'
import { sfGdaSubgraph } from '../../../redux/store'
import {
  FlowDistributionUpdatedEvent_OrderBy,
  InstantDistributionUpdatedEvent_OrderBy,
  PoolMember_OrderBy
} from '../../../subgraphs/gda/.graphclient'
import { Pool } from '../../../subgraphs/gda/entities/pool/pool'
import SubgraphQueryLink from '../../subgraph/SubgraphQueryLink'
import FlowDistributionUpdatedEventDataGrid from './FlowDistributionUpdatedEventDataGrid'
import InstantDistributionUpdatedEventDataGrid from './InstantDistributionUpdatedEventDataGrid'
import PoolMemberDataGrid from './PoolMemberDataGrid'

export const PoolPageContent: FC<{ id: string; network: Network }> = ({
  id: id,
  network
}) => {
  const poolQuery = sfGdaSubgraph.usePoolQuery({
    chainId: network.chainId,
    id: id
  })

  const pool: Pool | null | undefined = poolQuery.data

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

  const [
    flowDistributionUpdatedEventOrdering,
    setFlowDistributionUpdatedEventOrdering
  ] = useState<Ordering<FlowDistributionUpdatedEvent_OrderBy> | undefined>({
    orderBy: 'timestamp',
    orderDirection: 'desc'
  })

  const [
    flowDistributionUpdatedEventPaging,
    setFlowDistributionUpdatedEventPaging
  ] = useState<SkipPaging>(
    createSkipPaging({
      take: 10
    })
  )

  const instantDistributionUpdatedEventQuery =
    sfGdaSubgraph.useInstantDistributionUpdatedEventsQuery({
      chainId: network.chainId,
      filter: {
        pool: id
      },
      pagination: instantDistributionUpdatedEventPaging,
      order: instantDistributionUpdatedEventOrdering
    })

  const flowDistributionUpdatedEventQuery =
    sfGdaSubgraph.useFlowDistributionUpdatedEventsQuery({
      chainId: network.chainId,
      filter: {
        pool: id
      },
      pagination: flowDistributionUpdatedEventPaging,
      order: flowDistributionUpdatedEventOrdering
    })

  const [poolMemberPaging, setPoolMemberPaging] = useState<SkipPaging>(
    createSkipPaging({
      take: 10
    })
  )
  const [poolMemberPagingOrdering, setPoolMemberOrdering] = useState<
    Ordering<PoolMember_OrderBy> | undefined
  >({
    orderBy: 'createdAtTimestamp',
    orderDirection: 'desc'
  })

  const poolMemberEventQuery = sfGdaSubgraph.usePoolMembersQuery({
    chainId: network.chainId,
    filter: {
      pool: id
    },
    pagination: poolMemberPaging,
    order: poolMemberPagingOrdering
  })

  if (!poolQuery.isUninitialized && !poolQuery.isLoading && !poolQuery.data) {
    return <Error statusCode={404} />
  }

  return (
    <Container
      data-cy={'pool-page-container'}
      component={Box}
      sx={{ my: 2, py: 2 }}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.secondary">{network.displayName}</Typography>
          <Typography color="text.secondary">Pools</Typography>
          <Typography color="text.secondary" sx={{ whiteSpace: 'nowrap' }}>
            {id.substring(0, 6) + '...'}
          </Typography>
        </Breadcrumbs>
        <CopyLink localPath={`/${network.slugName}/pools/${id}`} />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: 1 }}
      >
        <Typography variant="h4" component="h1">
          Pool
        </Typography>
        <Stack direction="row" justifyContent="flex-end" flex={1} gap={1}>
          <SubgraphQueryLink
            network={network}
            query={gql`
              query ($id: ID!) {
                pool(id: $id) {
                  totalAmountFlowedDistributedUntilUpdatedAt
                  totalAmountInstantlyDistributedUntilUpdatedAt
                  totalAmountDistributedUntilUpdatedAt
                  totalUnits
                  totalConnectedUnits
                  totalDisconnectedUnits
                }
              }
            `}
            variables={`{ "id": "${id}" }`}
          />
          <Tooltip title="View on blockchain Explorer">
            <Button
              size="small"
              variant="outlined"
              href={network.getLinkForAddress(poolQuery.data?.id!)}
              target="_blank"
              startIcon={<OpenInNewIcon />}
            >
              Blockchain
            </Button>
          </Tooltip>
        </Stack>
      </Stack>

      <Grid container spacing={3} sx={{ pt: 3 }}>
        <Grid item md={6} sm={12}>
          <Card elevation={2}>
            <List data-cy={'pool-general-info'}>
              <ListItem divider>
                <ListItemText
                  secondary="Token"
                  primary={
                    pool ? (
                      <SuperTokenAddress
                        network={network}
                        address={pool.token}
                      />
                    ) : (
                      <SkeletonAddress />
                    )
                  }
                />
              </ListItem>
              <ListItem divider>
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
                              data-cy="admin-tooltip-link"
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
                    pool ? (
                      <AccountAddress
                        dataCy={'account-address'}
                        network={network}
                        address={pool.admin}
                      />
                    ) : (
                      <SkeletonAddress />
                    )
                  }
                />
              </ListItem>
              <ListItem data-cy={'pool-id'} divider>
                <ListItemText
                  secondary={
                    <>
                      Pool Address
                      <InfoTooltipBtn
                        dataCy={'pool-id-tooltip'}
                        title={
                          <>
                            The ID which is associated with each pool in the
                            General distribution agreement - this address is
                            created when a admin creates an pool.{' '}
                            <AppLink
                              data-cy="pool-id-tooltip-link"
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
                    pool ? (
                      <AccountAddressFormatted
                        network={network}
                        address={pool.id}
                      />
                    ) : (
                      <Skeleton sx={{ width: '20px' }} />
                    )
                  }
                />
              </ListItem>
              <Grid container>
                <Grid item xs={6}>
                  <ListItem>
                    <ListItemText
                      data-cy="last-updated-at"
                      secondary="Last Updated At"
                      primary={
                        pool ? (
                          <TimeAgo subgraphTime={pool.updatedAtTimestamp} />
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
                        pool ? (
                          <TimeAgo subgraphTime={pool.createdAtTimestamp} />
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
        <Grid item md={6} sm={12}>
          <Card elevation={2}>
            <List>
              <ListItem data-cy={'total-units'} divider>
                <ListItemText
                  secondary={
                    <>
                      Total Units
                      <InfoTooltipBtn
                        dataCy={'total-units-tooltip'}
                        title="The sum of total pending and approved units issued to subscribers."
                      />
                    </>
                  }
                  primary={
                    pool ? pool.totalUnits : <Skeleton sx={{ width: '75px' }} />
                  }
                />
              </ListItem>
              <Grid container>
                <Grid item xs={6}>
                  <ListItem divider>
                    <ListItemText
                      data-cy="total-connected-units"
                      secondary={
                        <>
                          Total Connected Units
                          <InfoTooltipBtn
                            dataCy={'total-connected-units-tooltip'}
                            title="Units that have claimed all past distributions and will automatically claim all future distributions."
                          />
                        </>
                      }
                      primary={
                        pool ? (
                          pool.totalConnectedUnits
                        ) : (
                          <Skeleton sx={{ width: '75px' }} />
                        )
                      }
                    />
                  </ListItem>
                </Grid>
                <Grid item xs={6}>
                  <ListItem divider>
                    <ListItemText
                      data-cy="total-disconnected-units"
                      secondary={
                        <>
                          Total Disconnected Units
                          <InfoTooltipBtn
                            dataCy={'total-disconnected-units-tooltip'}
                            title="Units that have not claimed their distribution yet."
                          />
                        </>
                      }
                      primary={
                        pool ? (
                          pool.totalDisconnectedUnits
                        ) : (
                          <Skeleton sx={{ width: '75px' }} />
                        )
                      }
                    />
                  </ListItem>
                </Grid>
              </Grid>
              <ListItem divider data-cy={'total-amount-distributed'}>
                <ListItemText
                  secondary="Total Amount Distributed"
                  primary={
                    pool ? (
                      <FlowingBalanceWithToken
                        balance={pool.totalAmountDistributedUntilUpdatedAt}
                        balanceTimestamp={pool.updatedAtTimestamp}
                        flowRate={pool.flowRate}
                        TokenChipProps={{
                          network: network,
                          tokenAddress: pool.token
                        }}
                      />
                    ) : (
                      <Skeleton sx={{ width: '75px' }} />
                    )
                  }
                />
              </ListItem>

              <Grid container>
                <Grid item xs={6}>
                  <ListItem>
                    <ListItemText
                      data-cy={'total-flow-distributed'}
                      secondary="Total Flow Distributed"
                      primary={
                        pool ? (
                          <FlowingBalanceWithToken
                            balance={
                              pool.totalAmountFlowedDistributedUntilUpdatedAt
                            }
                            balanceTimestamp={pool.updatedAtTimestamp}
                            flowRate={pool.flowRate}
                            TokenChipProps={{
                              network: network,
                              tokenAddress: pool.token
                            }}
                          />
                        ) : (
                          <Skeleton sx={{ width: '75px' }} />
                        )
                      }
                    />
                  </ListItem>
                </Grid>
                <Grid item xs={6}>
                  <ListItem>
                    <ListItemText
                      data-cy={'total-instantly-distributed'}
                      secondary="Total Instant Distributed"
                      primary={
                        pool ? (
                          <BalanceWithToken
                            wei={
                              pool.totalAmountInstantlyDistributedUntilUpdatedAt
                            }
                            network={network}
                            tokenAddress={pool.token}
                          />
                        ) : (
                          <Skeleton sx={{ width: '75px' }} />
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
            dataCy={'flows-tooltip'}
            size={22}
            title={
              <>
                An event in which super tokens are flow to the entire pool of
                members for a given pool using the Superfluid GDA.{' '}
                <AppLink
                  data-cy={'flows-tooltip-link'}
                  href="https://docs.superfluid.finance/superfluid/protocol-overview/in-depth-overview/super-agreements/streaming-distributions-coming-soon#gda-examples-by-illustration"
                  target="_blank"
                >
                  Read more
                </AppLink>
              </>
            }
          />
        </Typography>

        <Card elevation={2}>
          <FlowDistributionUpdatedEventDataGrid
            pool={pool}
            queryResult={flowDistributionUpdatedEventQuery}
            setPaging={setFlowDistributionUpdatedEventPaging}
            ordering={flowDistributionUpdatedEventOrdering}
            setOrdering={setFlowDistributionUpdatedEventOrdering}
          />
        </Card>
      </Box>

      <Box data-cy={'instant-distributions-grid'} sx={{ mt: 3 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
          Instant Distributions
          <InfoTooltipBtn
            dataCy={'distributions-tooltip'}
            size={22}
            title={
              <>
                An event in which super tokens are distributed to the entire
                pool of members for a given pool using the Superfluid GDA.{' '}
                <AppLink
                  data-cy={'distributions-tooltip-link'}
                  href="https://docs.superfluid.finance/superfluid/protocol-overview/in-depth-overview/super-agreements/streaming-distributions-coming-soon#gda-examples-by-illustration"
                  target="_blank"
                >
                  Read more
                </AppLink>
              </>
            }
          />
        </Typography>

        <Card elevation={2}>
          <InstantDistributionUpdatedEventDataGrid
            pool={pool}
            queryResult={instantDistributionUpdatedEventQuery}
            setPaging={setInstantDistributionUpdatedEventPaging}
            ordering={instantDistributionUpdatedEventOrdering}
            setOrdering={setInstantDistributionUpdatedEventOrdering}
          />
        </Card>
      </Box>

      <Box data-cy="members-grid" sx={{ mt: 3 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
          Pool Member
          <InfoTooltipBtn
            dataCy={'pool-members-tooltip'}
            size={22}
            title={
              <>
                Accounts that have received units within the Pool. Subscribers
                will receive distributed funds based on the portion of units
                they own in and pool.{' '}
                <AppLink
                  data-cy={'pool-members-tooltip-link'}
                  href="https://docs.superfluid.finance/superfluid/protocol-overview/in-depth-overview/super-agreements/streaming-distributions-coming-soon"
                  target="_blank"
                >
                  Read more
                </AppLink>
              </>
            }
          />
        </Typography>
        <Card elevation={2}>
          <PoolMemberDataGrid
            network={network}
            queryResult={poolMemberEventQuery}
            setPaging={setPoolMemberPaging}
            ordering={poolMemberPagingOrdering}
            setOrdering={setPoolMemberOrdering}
          />
        </Card>
      </Box>
    </Container>
  )
}
