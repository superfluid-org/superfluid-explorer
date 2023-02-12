// A distribution id is the following: (publisherAddress-tokenAddress-distributionNumber)

export const getDistributionDetails = (distributionId: string) => `{
  index(id: "${distributionId}") {
    indexId
    indexValue
    totalAmountDistributedUntilUpdatedAt
    totalSubscriptionsWithUnits
    totalUnits
    subscriptions(where: {units_not: "0"}) {
      units
      totalAmountReceivedUntilUpdatedAt
      subscriber {
        id
      }
    }
    createdAtTimestamp
    token {
      id
    }
    publisher {
      id
    }
  }
}`;
