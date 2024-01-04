import { Stack } from '@mui/material'
import { BigNumberish } from 'ethers'
import { FC } from 'react'

import TokenChip, { TokenChipProps } from '../TokenChip/TokenChip'
import EtherFormatted from './EtherFormatted'

interface BalanceWithTokenProps extends TokenChipProps {
  wei: BigNumberish
}

const BalanceWithToken: FC<BalanceWithTokenProps> = ({ wei, ...chipProps }) => (
  <Stack direction="row" alignItems="center" gap={1}>
    <TokenChip {...chipProps} />
    <EtherFormatted wei={wei} />
  </Stack>
)

export default BalanceWithToken
