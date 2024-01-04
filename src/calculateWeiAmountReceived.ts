import { BigNumber } from 'ethers'

const calculateWeiAmountReceived = (
  publisherIndexValue: BigNumber,
  subscriberTotalAmountReceivedUntilUpdatedAt: BigNumber,
  subscriberIndexValueUntilUpdatedAt: BigNumber,
  subscriberUnits: BigNumber
) => {
  const publisherSubscriberDifference = publisherIndexValue
    .sub(subscriberIndexValueUntilUpdatedAt)
    .mul(subscriberUnits)

  const totalAmountReceived = subscriberTotalAmountReceivedUntilUpdatedAt.add(
    publisherSubscriberDifference
  )

  return totalAmountReceived
}

export default calculateWeiAmountReceived
