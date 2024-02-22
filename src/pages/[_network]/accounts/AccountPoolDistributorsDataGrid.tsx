import { Stack, Toolbar, Typography } from '@mui/material'
import { FC } from 'react'

import { Network } from '../../../redux/networks'
import { PoolDistributorsDataGridManager } from './PoolDistributorsDataGridManager'

type Props = {
  network: Network
  accountAddress: string
}

export const AccountPoolDistributorsDataGrid: FC<Props> = ({
  network,
  accountAddress
}) => {
  return (
    <Stack>
      <Toolbar sx={{ mt: 3, px: 1 }} variant="dense" disableGutters>
        <Typography sx={{ flex: '1 1 100%' }} variant="h6" component="h2">
          Pool Distributors
        </Typography>
      </Toolbar>
      <PoolDistributorsDataGridManager
        network={network}
        accountAddress={accountAddress}
      />
    </Stack>
  )
}
