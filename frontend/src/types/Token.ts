export interface IToken {
  superTokenAddress: string
  name: string
  symbol: string
  underlyingAddress: string
  isListed: boolean
  isNativeAssetSuperToken: boolean
  isSuperToken: boolean
}

export interface ITokenMetrics extends IToken {
  totalNumberOfActiveStreams: number
  totalNumberOfHolders: number
  totalOutflowRate: number
}
