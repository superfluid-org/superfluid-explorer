import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { SvgIcon, SvgIconProps, Tooltip, TooltipProps } from '@mui/material'
import _ from 'lodash'
import { FC, useState } from 'react'

import copyTextToClipboard from '../../utils/copyTextToClipboard'

interface CopyClipboardProps {
  copyText: string
  description?: string
  TooltipProps?: Partial<TooltipProps>
  IconProps?: Partial<SvgIconProps>
}
/**
 * Inspired by: https://blog.logrocket.com/implementing-copy-to-clipboard-in-react-with-clipboard-api/
 */
const CopyClipboard: FC<CopyClipboardProps> = ({
  copyText,
  description = 'Copy to clipboard',
  TooltipProps,
  IconProps
}) => {
  const [isCopied, setIsCopied] = useState(false)

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 1500)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Tooltip title={isCopied ? 'Copied!' : description} {...TooltipProps}>
      <SvgIcon
        component={ContentCopyIcon}
        onClick={handleCopyClick}
        {..._.merge(
          {
            sx: {
              fontSize: 'inherit',
              cursor: 'pointer',
              ml: 1,
              verticalAlign: 'middle'
            }
          },
          IconProps
        )}
      />
    </Tooltip>
  )
}

export default CopyClipboard
