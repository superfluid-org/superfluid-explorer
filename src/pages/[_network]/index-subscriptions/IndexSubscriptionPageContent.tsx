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
  Index,
  IndexSubscription,
  Ordering,
  SkipPaging,
  SubscriptionUnitsUpdatedEvent_OrderBy
} from '@superfluid-finance/sdk-core'
import { BigNumber, BigNumberish } from 'ethers'
import { gql } from 'graphql-request'
import Error from 'next/error'
import { FC, useEffect, useState } from 'react'

import calculateWeiAmountReceived from '../../../calculateWeiAmountReceived'
import AccountAddress from '../../../components/Address/AccountAddress'
import SuperTokenAddress from '../../../components/Address/SuperTokenAddress'
import BalanceWithToken from '../../../components/Amount/BalanceWithToken'
import AppLink from '../../../components/AppLink/AppLink'
import CopyLink from '../../../components/Copy/CopyLink'
import InfoTooltipBtn from '../../../components/Info/InfoTooltipBtn'
import { PoolPercentage } from '../../../components/PoolPercentage/PoolPercentage'
import SkeletonAddress from '../../../components/Skeleton/SkeletonAddress'
import TimeAgo from '../../../components/TimeAgo/TimeAgo'
import { Network } from '../../../redux/networks'
import { sfSubgraph } from '../../../redux/store'
import SubgraphQueryLink from '../../subgraph/SubgraphQueryLink'
import { IndexSubscriptionDistributions } from './IndexSubscriptionDistributions'
import SubscriptionUnitsUpdatedEventDataGrid from './SubscriptionUnitsUpdatedEventDataGrid'

export const IndexSubscriptionPageContent: FC<{
  indexSubscriptionId: string
  network: Network
}> = ({ indexSubscriptionId, network }) => {
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

  const [
    subscriptionUnitsUpdatedEventPaging,
    setSubscriptionUnitsUpdatedEventPaging
  ] = useState<SkipPaging>(
    createSkipPaging({
      take: 10
    })
  )
  const [
    subscriptionUnitsUpdatedEventPagingOrdering,
    setSubscriptionUnitsUpdatedEventOrdering
  ] = useState<Ordering<SubscriptionUnitsUpdatedEvent_OrderBy> | undefined>({
    orderBy: 'timestamp',
    orderDirection: 'desc'
  })
  const subscriptionUnitsUpdatedEventQuery =
    sfSubgraph.useSubscriptionUnitsUpdatedEventsQuery({
      chainId: network.chainId,
      filter: {
        subscription: indexSubscriptionId.toLowerCase()
      },
      pagination: subscriptionUnitsUpdatedEventPaging,
      order: subscriptionUnitsUpdatedEventPagingOrdering
    })

  const [totalWeiAmountReceived, setTotalWeiAmountReceived] = useState<
    BigNumberish | undefined
  >()

  useEffect(() => {
    if (index && indexSubscription) {
      setTotalWeiAmountReceived(
        calculateWeiAmountReceived(
          BigNumber.from(index.indexValue),
          BigNumber.from(indexSubscription.totalAmountReceivedUntilUpdatedAt),
          BigNumber.from(indexSubscription.indexValueUntilUpdatedAt),
          BigNumber.from(indexSubscription.units)
        )
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexSubscription && index])

  if (
    !indexQuery.isUninitialized &&
    !indexQuery.isLoading &&
    !indexQuery.data
  ) {
    return <Error statusCode={404} />
  }

  return (
    <Container
      data-cy={'index-subscription-container'}
      component={Box}
      sx={{ my: 2, py: 2 }}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.secondary">
            {network && network.displayName}
          </Typography>
          <Typography color="text.secondary">Index Subscriptions</Typography>
          <Typography color="text.secondary" sx={{ whiteSpace: 'nowrap' }}>
            {indexSubscriptionId.substring(0, 6) + '...'}
          </Typography>
        </Breadcrumbs>
        <CopyLink
          localPath={`/${network.slugName}/index-subscriptions/${indexSubscriptionId}`}
        />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: 1 }}
      >
        <Typography variant="h4" component="h1">
          Index Subscription
        </Typography>
        <SubgraphQueryLink
          network={network}
          query={gql`
            query ($id: ID!) {
              indexSubscription(id: $id) {
                indexValueUntilUpdatedAt
                approved
                totalAmountReceivedUntilUpdatedAt
                units
              }
            }
          `}
          variables={`{ "id": "${indexSubscriptionId.toLowerCase()}" }`}
        />
      </Stack>

      <Grid container spacing={3} sx={{ pt: 3 }}>
        <Grid item xs={12} md={6}>
          <Card elevation={2}>
            <List>
              <ListItem data-cy={'index-subscription-short-hash'} divider>
                <ListItemText
                  secondary="Index"
                  primary={
                    indexSubscription && index ? (
                      <AppLink
                        href={`/${network.slugName}/indexes/${index.id}`}
                      >{`${index.id.substring(0, 6)}... (${
                        index.indexId
                      })`}</AppLink>
                    ) : (
                      <Skeleton sx={{ width: '50px' }} />
                    )
                  }
                />
              </ListItem>
              <ListItem data-cy={'index-subscription-token'} divider>
                <ListItemText
                  secondary="Token"
                  primary={
                    indexSubscription ? (
                      <SuperTokenAddress
                        network={network}
                        address={indexSubscription.token}
                      />
                    ) : (
                      <SkeletonAddress />
                    )
                  }
                />
              </ListItem>
              <ListItem data-cy={'subscription-publisher'} divider>
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
                              data-cy={'publisher-tooltip-link'}
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
                    indexSubscription ? (
                      <AccountAddress
                        network={network}
                        address={indexSubscription.publisher}
                      />
                    ) : (
                      <SkeletonAddress />
                    )
                  }
                />
              </ListItem>
              <ListItem data-cy={'subscription-subscriber'} divider>
                <ListItemText
                  secondary="Subscriber"
                  primary={
                    indexSubscription ? (
                      <AccountAddress
                        network={network}
                        address={indexSubscription.subscriber}
                      />
                    ) : (
                      <SkeletonAddress />
                    )
                  }
                />
              </ListItem>
              <Grid container>
                <Grid item xs={6}>
                  <ListItem>
                    <ListItemText
                      secondary="Last Updated At"
                      primary={
                        indexSubscription ? (
                          <TimeAgo
                            subgraphTime={indexSubscription.updatedAtTimestamp}
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
                      secondary="Created At"
                      primary={
                        indexSubscription ? (
                          <TimeAgo
                            subgraphTime={indexSubscription.createdAtTimestamp}
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
                    indexSubscription && index ? (
                      <PoolPercentage
                        totalUnits={index.totalUnits}
                        individualUnits={indexSubscription.units}
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
                      Approved
                      <InfoTooltipBtn
                        dataCy={'approval-tooltip'}
                        title="Indicates if account has claimed all past distributions and automatically claims all future distributions."
                      />
                    </>
                  }
                  primary={
                    indexSubscription ? (
                      indexSubscription.approved ? (
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
              <ListItem data-cy={'subscription-total-amount-received'}>
                <ListItemText
                  secondary="Total Amount Received"
                  primary={
                    indexSubscription && index && totalWeiAmountReceived ? (
                      <>
                        <BalanceWithToken
                          wei={totalWeiAmountReceived}
                          network={network}
                          tokenAddress={index.token}
                        />
                      </>
                    ) : (
                      <Skeleton sx={{ width: '100px' }} />
                    )
                  }
                />
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>

      <Box data-cy={'distributions-grid'} sx={{ mt: 3 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
          Distributions
          <InfoTooltipBtn
            dataCy={'distributions-tooltip'}
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
            size={22}
          />
        </Typography>

        <Card elevation={2}>
          <IndexSubscriptionDistributions
            network={network}
            indexSubscriptionId={indexSubscriptionId}
          />
        </Card>
      </Box>

      <Box data-cy={'units-updated-grid'} sx={{ mt: 3 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
          Units Updated
        </Typography>
        <Card elevation={2}>
          <SubscriptionUnitsUpdatedEventDataGrid
            queryResult={subscriptionUnitsUpdatedEventQuery}
            setPaging={setSubscriptionUnitsUpdatedEventPaging}
            ordering={subscriptionUnitsUpdatedEventPagingOrdering}
            setOrdering={setSubscriptionUnitsUpdatedEventOrdering}
          />
        </Card>
      </Box>
    </Container>
  )
}
