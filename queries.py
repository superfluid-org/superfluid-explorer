from string import Template

def supertoken_metrics(token_address):
    return Template('''
    {
        tokenStatistics(where: {token: "$token_address"}) {
            id
            totalDeposit
            totalNumberOfAccounts
            totalNumberOfActiveIndexes
            totalNumberOfActivePools
            totalNumberOfActiveStreams
            totalNumberOfClosedStreams
            totalNumberOfHolders
            totalNumberOfIndexes
            totalNumberOfPools
            totalOutflowRate
            totalSubscriptionsWithUnits
            totalSupply
            totalMembershipsWithUnits
            totalGDAOutflowRate
            totalGDANumberOfClosedStreams
            totalGDANumberOfActiveStreams
            totalGDADeposit
            totalCFAOutflowRate
            totalConnectedMemberships
            totalCFANumberOfClosedStreams
            totalCFANumberOfActiveStreams
            totalCFADeposit
            totalApprovedSubscriptions
            totalAmountTransferredUntilUpdatedAt
            totalAmountStreamedUntilUpdatedAt
            totalAmountDistributedUntilUpdatedAt
            totalCFAAmountStreamedUntilUpdatedAt
        }
    }
    ''').substitute(token_address=token_address)