import Box from '@mui/material/Box'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import * as React from 'react'

export default function Copyright() {
  return (
    <Box
      sx={{
        mt: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'right',
        alignItems: 'center'
      }}
    >
      <Typography
        sx={{
          position: 'absolute',
          bottom: 0
        }}
        variant="body2"
        color="text.secondary"
        align="center"
      >
        {'Copyright © '}
        <MuiLink color="inherit" href="https://superfluid.finance/">
          Superfluid Finance
        </MuiLink>{' '}
        {new Date().getFullYear()}.
      </Typography>
    </Box>
  )
}
