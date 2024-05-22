from string import Template

def supertoken_metrics(token_address):
    return Template('''
    {
        tokenStatistics(where: {token: "$token_address"}) {
            id
            totalNumberOfAccounts
            totalNumberOfActivePools
            totalNumberOfActiveStreams
            totalNumberOfHolders
            totalOutflowRate
            totalSupply
            totalConnectedMemberships
            totalAmountStreamedUntilUpdatedAt
            totalAmountDistributedUntilUpdatedAt
        }
    }
    ''').substitute(token_address=token_address)