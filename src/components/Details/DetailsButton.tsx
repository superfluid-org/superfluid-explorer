import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { IconButton, styled, Tooltip } from '@mui/material'
import { FC } from 'react'

const StyledButton = styled(IconButton)(({ theme }) => ({
  background:
    theme.palette.mode === 'light'
      ? 'rgba(0, 0, 0, 0.03)'
      : 'rgba(255, 255, 255, 0.05)'
}))

interface DetailsButtonProps {
  onClick: () => void
}

const DetailsButton: FC<DetailsButtonProps> = ({ onClick }) => (
  <Tooltip
    title="Details"
    placement="right"
    enterDelay={500}
    enterNextDelay={500}
  >
    <StyledButton onClick={onClick}>
      <ArrowForwardIcon fontSize="small" />
    </StyledButton>
  </Tooltip>
)

export default DetailsButton
