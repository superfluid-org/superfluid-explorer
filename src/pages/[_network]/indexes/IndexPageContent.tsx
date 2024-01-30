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
import {
  createSkipPaging,
  Index,
  IndexSubscription_OrderBy,
  IndexUpdatedEvent_OrderBy,
  Ordering,
  SkipPaging
} from '@superfluid-finance/sdk-core'
import { gql } from 'graphql-request'
import Error from 'next/error'
import { FC, useState } from 'react'

import AccountAddress from '../../../components/Address/AccountAddress'
import SuperTokenAddress from '../../../components/Address/SuperTokenAddress'
import BalanceWithToken from '../../../components/Amount/BalanceWithToken'
import AppLink from '../../../components/AppLink/AppLink'
import CopyLink from '../../../components/Copy/CopyLink'
import InfoTooltipBtn from '../../../components/Info/InfoTooltipBtn'
import SkeletonAddress from '../../../components/Skeleton/SkeletonAddress'
import TimeAgo from '../../../components/TimeAgo/TimeAgo'
import { Network } from '../../../redux/networks'
import { sfSubgraph } from '../../../redux/store'
import SubgraphQueryLink from '../../subgraph/SubgraphQueryLink'
import IndexSubscriptionDataGrid from '../index-subscriptions/IndexSubscriptionDataGrid'
import IndexUpdatedEventDataGrid from './IndexUpdatedEventDataGrid'

export const IndexPageContent: FC<{ indexId: string; network: Network }> = ({
  indexId,
  network
}) => {
  const indexQuery = sfSubgraph.useIndexQuery({
    chainId: network.chainId,
    id: indexId
  })

  const index: Index | null | undefined = indexQuery.data

  const [indexUpdatedEventPaging, setIndexUpdatedEventPaging] =
    useState<SkipPaging>(
      createSkipPaging({
        take: 10
      })
    )
  const [indexUpdatedEventPagingOrdering, setIndexUpdatedEventOrdering] =
    useState<Ordering<IndexUpdatedEvent_OrderBy> | undefined>({
      orderBy: 'timestamp',
      orderDirection: 'desc'
    })
  const indexUpdatedEventQuery = sfSubgraph.useIndexUpdatedEventsQuery({
    chainId: network.chainId,
    filter: {
      index: indexId.toLowerCase()
    },
    pagination: indexUpdatedEventPaging,
    order: indexUpdatedEventPagingOrdering
  })

  const [indexSubscriptionPaging, setIndexSubscriptionPaging] =
    useState<SkipPaging>(
      createSkipPaging({
        take: 10
      })
    )
  const [indexSubscriptionPagingOrdering, setIndexSubscriptionOrdering] =
    useState<Ordering<IndexSubscription_OrderBy> | undefined>()
  const indexSubscriptionEventQuery = sfSubgraph.useIndexSubscriptionsQuery({
    chainId: network.chainId,
    filter: {
      index: indexId.toLowerCase()
    },
    pagination: indexSubscriptionPaging,
    order: indexSubscriptionPagingOrdering
  })

  if (
    !indexQuery.isUninitialized &&
    !indexQuery.isLoading &&
    !indexQuery.data
  ) {
    return <Error statusCode={404} />
  }

  return (
    <Container
      data-cy={'index-page-container'}
      component={Box}
      sx={{ my: 2, py: 2 }}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.secondary">{network.displayName}</Typography>
          <Typography color="text.secondary">Indexes</Typography>
          <Typography color="text.secondary" sx={{ whiteSpace: 'nowrap' }}>
            {indexId.substring(0, 6) + '...'}
          </Typography>
        </Breadcrumbs>
        <CopyLink localPath={`/${network.slugName}/indexes/${indexId}`} />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: 1 }}
      >
        <Typography variant="h4" component="h1">
          Index
        </Typography>
        <SubgraphQueryLink
          network={network}
          query={gql`
            query ($id: ID!) {
              index(id: $id) {
                indexId
                indexValue
                totalAmountDistributedUntilUpdatedAt
                totalSubscriptionsWithUnits
                totalUnits
                totalUnitsApproved
                totalUnitsPending
              }
            }
          `}
          variables={`{ "id": "${indexId.toLowerCase()}" }`}
        />
      </Stack>

      <Grid container spacing={3} sx={{ pt: 3 }}>
        <Grid item md={6} sm={12}>
          <Card elevation={2}>
            <List data-cy={'index-general-info'}>
              <ListItem divider>
                <ListItemText
                  secondary="Token"
                  primary={
                    index ? (
                      <SuperTokenAddress
                        network={network}
                        address={index.token}
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
                      Publisher
                      <InfoTooltipBtn
                        dataCy={'publisher-tooltip'}
                        title={
                          <>
                            The creator of an index using the IDA - publishers
                            may update the index of subscribers and distribute
                            funds to subscribers.{' '}
                            <AppLink
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
                    index ? (
                      <AccountAddress
                        dataCy={'account-address'}
                        network={network}
                        address={index.publisher}
                      />
                    ) : (
                      <SkeletonAddress />
                    )
                  }
                />
              </ListItem>
              <ListItem data-cy={'index-id'} divider>
                <ListItemText
                  secondary={
                    <>
                      Index ID
                      <InfoTooltipBtn
                        dataCy={'index-id-tooltip'}
                        title={
                          <>
                            The ID which is associated with each index in the
                            instant distribution agreement - this number is
                            created when a publisher creates an index.{' '}
                            <AppLink
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
                    index ? index.indexId : <Skeleton sx={{ width: '20px' }} />
                  }
                />
              </ListItem>
              <Grid container>
                <Grid item xs={6}>
                  <ListItem>
                    <ListItemText
                      secondary="Last Updated At"
                      primary={
                        index ? (
                          <TimeAgo subgraphTime={index.updatedAtTimestamp} />
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
                      secondary="Created At"
                      primary={
                        index ? (
                          <TimeAgo subgraphTime={index.createdAtTimestamp} />
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
                    index ? (
                      index.totalUnits
                    ) : (
                      <Skeleton sx={{ width: '75px' }} />
                    )
                  }
                />
              </ListItem>
              <ListItem data-cy={'total-units-approved'} divider>
                <ListItemText
                  secondary={
                    <>
                      Total Units Approved
                      <InfoTooltipBtn
                        dataCy={'total-units-approved-tooltip'}
                        title="Units that have claimed all past distributions and will automatically claim all future distributions."
                      />
                    </>
                  }
                  primary={
                    index ? (
                      index.totalUnitsApproved
                    ) : (
                      <Skeleton sx={{ width: '75px' }} />
                    )
                  }
                />
              </ListItem>
              <ListItem data-cy={'total-units-pending'} divider>
                <ListItemText
                  secondary={
                    <>
                      Total Units Pending
                      <InfoTooltipBtn
                        dataCy={'total-units-pending-tooltip'}
                        title="Units that have not claimed their distribution yet."
                      />
                    </>
                  }
                  primary={
                    index ? (
                      index.totalUnitsPending
                    ) : (
                      <Skeleton sx={{ width: '75px' }} />
                    )
                  }
                />
              </ListItem>
              <ListItem data-cy={'total-amount-distributed'}>
                <ListItemText
                  secondary="Total Amount Distributed"
                  primary={
                    index ? (
                      <BalanceWithToken
                        wei={index.totalAmountDistributedUntilUpdatedAt}
                        network={network}
                        tokenAddress={index.token}
                      />
                    ) : (
                      <Skeleton sx={{ width: '75px' }} />
                    )
                  }
                />
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
          Distributions
          <InfoTooltipBtn
            dataCy={'distributions-tooltip'}
            size={22}
            title={
              <>
                An event in which super tokens are distributed to the entire
                pool of subscribers for a given index using the Superfluid IDA.{' '}
                <AppLink
                  data-cy={'distributions-tooltip-link'}
                  href="https://docs.superfluid.finance/superfluid/protocol-developers/interactive-tutorials/instant-distribution"
                  target="_blank"
                >
                  Read more
                </AppLink>
              </>
            }
          />
        </Typography>

        <Card elevation={2}>
          <IndexUpdatedEventDataGrid
            index={index}
            queryResult={indexUpdatedEventQuery}
            setPaging={setIndexUpdatedEventPaging}
            ordering={indexUpdatedEventPagingOrdering}
            setOrdering={setIndexUpdatedEventOrdering}
          />
        </Card>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
          Subscriptions
          <InfoTooltipBtn
            dataCy={'subscriptions-tooltip'}
            size={22}
            title={
              <>
                Accounts that have received units within the Index. Subscribers
                will receive distributed funds based on the portion of units
                they own in and index.{' '}
                <AppLink
                  data-cy={'subscriptions-tooltip-link'}
                  href="https://docs.superfluid.finance/superfluid/protocol-developers/interactive-tutorials/instant-distribution"
                  target="_blank"
                >
                  Read more
                </AppLink>
              </>
            }
          />
        </Typography>
        <Card elevation={2}>
          <IndexSubscriptionDataGrid
            network={network}
            queryResult={indexSubscriptionEventQuery}
            setPaging={setIndexSubscriptionPaging}
            ordering={indexSubscriptionPagingOrdering}
            setOrdering={setIndexSubscriptionOrdering}
          />
        </Card>
      </Box>
    </Container>
  )
}
