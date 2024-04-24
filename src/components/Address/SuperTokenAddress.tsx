import VerifiedIcon from '@mui/icons-material/Verified'
import { Grid, Tooltip, Typography } from '@mui/material'
import { Token } from '@superfluid-finance/sdk-core'
import { ethers } from 'ethers'
import { FC } from 'react'

import { Network } from '../../redux/networks'
import { sfSubgraph } from '../../redux/store'
import AppLink from '../AppLink/AppLink'

const SuperTokenAddress: FC<{
  network: Network
  address: string
  format?: (token: Token) => string
  formatLoading?: () => string
}> = ({
  network,
  address,
  format = (token) => `${token.name} (${token.symbol})`,
  formatLoading = () => ethers.utils.getAddress(address)
}) => {
  const tokenQuery = sfSubgraph.useTokenQuery({
    chainId: network.chainId,
    id: address
  })

  return (
    <AppLink
      data-cy={'token-address'}
      className="address"
      href={`/${network.slugName}/supertokens/${address}`}
    >
      {tokenQuery.data ? format(tokenQuery.data) : formatLoading()}
    </AppLink>
  )
}

export const SuperTokenFormatted: FC<{
  address: string
  name: string
  symbol: string
  isListed: boolean
}> = ({ address, name, symbol, isListed }) => {
  return (
    <Grid container>
      <Grid item xs={12} data-cy={'token-name-and-symbol'}>
        {name} ({symbol}){' '}
        {isListed && (
          <Tooltip title="Is listed">
            <VerifiedIcon sx={{ fontSize: 'inherit' }} />
          </Tooltip>
        )}
      </Grid>
      <Grid item xs={12}>
        <Typography
          data-cy={'token-address'}
          variant="caption"
          component="span"
        >
          {ethers.utils.getAddress(address)}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default SuperTokenAddress
