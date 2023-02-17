// A distribution id is the following: (publisherAddress-tokenAddress-distributionNumber)

const getDistributionDetails = () => `{
  index(id: "0xbb5c64b929b1e60c085dcdf88dfe41c6b9dcf65b-0x263026e7e53dbfdce5ae55ade22493f828922965-3") {
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
  }
}`;

export default getDistributionDetails;
