import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { Grid, Tooltip } from '@mui/material'
import { FC } from 'react'

import { Network } from '../../redux/networks'
import AppLink from '../AppLink/AppLink'

export const TransactionHash: FC<{
  network: Network
  transactionHash: string
}> = ({ network, transactionHash }) => (
  <Tooltip title="View on blockchain explorer">
    <AppLink
      href={network.getLinkForTransaction(transactionHash)}
      target="_blank"
    >
      <Grid container alignItems="center">
        {transactionHash.substring(0, 6) + '...'}
        <OpenInNewIcon sx={{ ml: 0.5, fontSize: 'inherit' }} />
      </Grid>
    </AppLink>
  </Tooltip>
)
