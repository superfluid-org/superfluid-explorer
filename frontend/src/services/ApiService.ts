import { IToken, ITokenMetrics } from '../types/Token'

const baseMainnetUrl = 'https://base-mainnet.subgraph.x.superfluid.dev/'

export const ApiService = {
  getBaseMainnetSuperTokens: async (): Promise<IToken[]> => {
    const response = await fetch(`${baseMainnetUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `{
                    tokens(where: {isSuperToken: true}) {
                        superTokenAddress: id
                        name
                        symbol
                        underlyingAddress
                        isListed
                        isNativeAssetSuperToken
                        isSuperToken
                    }
                }`
      })
    })
    const data = await response.json()
    return data.data.tokens
  },

  getBaseMainnetTokenMetrics: async (
    address: string
  ): Promise<ITokenMetrics> => {
    const response = await fetch(`${baseMainnetUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `{
                        tokenStatistics(where: {token: "${address}"}) {
                            totalNumberOfActiveStreams
                            totalNumberOfHolders
                            totalOutflowRate
                        }
                    }`
      })
    })
    const data = await response.json()
    return data.data.tokenStatistics
  }
}
