import ScienceIcon from '@mui/icons-material/Science'
import { Badge, Box } from '@mui/material'
import { FC } from 'react'

import { Network } from '../../redux/networks'

const NetworkDisplay: FC<{ network: Network }> = ({ network }) => {
  return network.isTestnet ? (
    <Badge
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      badgeContent={<ScienceIcon sx={{ fontSize: '1.2em' }} />}
      sx={{
        '& .MuiBadge-badge': {
          bottom: '4px',
          paddingLeft: '20px'
        }
      }}
    >
      {network.displayName}
    </Badge>
  ) : (
    <Box
      component="span"
      sx={{ fontSize: 'inherit' }}
    >{`${network.displayName}`}</Box>
  )
}

export default NetworkDisplay
