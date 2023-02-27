const getDistributionDetails = (distributionId: string) => `{
  indexUpdatedEvent(id: "${distributionId}") {
    index {
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
      token {
        id
      }
    }
    timestamp
    publisher
    totalUnitsApproved
    totalUnitsPending
    newIndexValue
    oldIndexValue
  }
}`;

export default getDistributionDetails;
