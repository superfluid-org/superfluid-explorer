import { NextPage } from "next";
import { useRouter } from "next/router";
import { tryGetNetwork, Network } from "../../../redux/networks";
import Error from "next/error";
import { FC, useState } from "react";
import { sfSubgraph } from "../../../redux/store";
import { createSkipPaging, Index, IndexSubscription_OrderBy, IndexUpdatedEvent_OrderBy, Ordering, SkipPaging } from "@superfluid-finance/sdk-core";
import { Box, Card, Container, Grid, List, ListItem, ListItemText, Skeleton, Typography } from "@mui/material";
import AccountAddress from "../../../components/AccountAddress";
import SkeletonAddress from "../../../components/skeletons/SkeletonAddress";
import SuperTokenAddress from "../../../components/SuperTokenAddress";
import IndexUpdatedEventDataGrid from "../../../components/IndexUpdatedEventDataGrid";
import IndexSubscriptionDataGrid from "../../../components/IndexSubscriptionDataGrid";

const IndexPage: NextPage = () => {
    const router = useRouter()
    const { _network, _id } = router.query;

    const network = typeof _network === "string" ? tryGetNetwork(_network) : undefined;

    if (!network) {
        return <Error statusCode={404} />;
    }

    return <IndexPageContent indexId={getId(_id)} network={network} />;
}

export default IndexPage;

export const IndexPageContent: FC<{ indexId: string, network: Network }> = ({ indexId, network }) => {
    const indexQuery = sfSubgraph.useIndexQuery({
        chainId: network.chainId,
        id: indexId
    });

    const index: Index | null | undefined = indexQuery.data;

    const [indexUpdatedEventPaging, setIndexUpdatedEventPaging] = useState<SkipPaging>(createSkipPaging({
        take: 10
    }))
    const [indexUpdatedEventPagingOrdering, setIndexUpdatedEventOrdering] = useState<Ordering<IndexUpdatedEvent_OrderBy> | undefined>({
        orderBy: "timestamp",
        orderDirection: "desc"
    })
    const indexUpdatedEventQuery = sfSubgraph.useIndexUpdatedEventsQuery({
        chainId: network.chainId,
        filter: {
            index: indexId.toLowerCase()
        },
        pagination: indexUpdatedEventPaging,
        order: indexUpdatedEventPagingOrdering
    });

    const [indexSubscriptionPaging, setIndexSubscriptionPaging] = useState<SkipPaging>(createSkipPaging({
        take: 10
    }))
    const [indexSubscriptionPagingOrdering, setIndexSubscriptionOrdering] = useState<Ordering<IndexSubscription_OrderBy> | undefined>()
    const indexSubscriptionEventQuery = sfSubgraph.useIndexSubscriptionsQuery({
        chainId: network.chainId,
        filter: {
            index: indexId.toLowerCase()
        },
        pagination: indexSubscriptionPaging,
        order: indexSubscriptionPagingOrdering
    });

    if (!indexQuery.isLoading && !indexQuery.data) {
        return <Error statusCode={404} />;
    }

    return (<Container component={Box} sx={{ my: 2, py: 2 }}>
        <Grid container spacing={3}>

            <Grid item xs={12}>
                <Typography variant="h3" component="h1">
                    Index
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Card elevation={2}>
                    <List>
                        <ListItem divider>
                            <ListItemText secondary="Token"
                                primary={(index) ? <SuperTokenAddress network={network} address={index.token} /> :
                                    <SkeletonAddress />} />
                        </ListItem>
                        <ListItem divider>
                            <ListItemText secondary="Publisher"
                                primary={(index) ? <AccountAddress network={network} address={index.publisher} /> : <SkeletonAddress />} />
                        </ListItem>
                        <ListItem divider>
                            <ListItemText secondary="Total Units" primary={index ? index.totalUnits : <Skeleton sx={{ width: "75px" }} />} />
                        </ListItem>
                        <ListItem divider>
                            <ListItemText secondary="Total Distributed" primary={index ? index.totalAmountDistributedUntilUpdatedAt : <Skeleton sx={{ width: "75px" }} />} />
                        </ListItem>
                        <ListItem divider>
                            <ListItemText secondary="Subgraph ID" primary={index && index.id} />
                        </ListItem>
                    </List>
                </Card>
            </Grid>

            <Grid item xs={12}>
                <Typography variant="h5" component="h2" sx={{mb: 1}}>
                    Distributions
                </Typography>
                <Card elevation={2}>
                    <IndexUpdatedEventDataGrid index={index} queryResult={indexUpdatedEventQuery}
                        setPaging={setIndexUpdatedEventPaging}
                        ordering={indexUpdatedEventPagingOrdering}
                        setOrdering={setIndexUpdatedEventOrdering} />
                </Card>
            </Grid>

            <Grid item xs={12}>
                <Typography variant="h5" component="h2" sx={{mb: 1}}>
                    Subscriptions
                </Typography>
                <Card elevation={2}>
                    <IndexSubscriptionDataGrid network={network}
                        queryResult={indexSubscriptionEventQuery}
                        setPaging={setIndexSubscriptionPaging}
                        ordering={indexSubscriptionPagingOrdering}
                        setOrdering={setIndexSubscriptionOrdering} />
                </Card>
            </Grid>
        </Grid>
    </Container>
    );
}

const getId = (id: unknown): string => {
    if (typeof id === "string") {
        return id;
    }
    throw `Id ${id} not found. TODO(KK): error page`;
}