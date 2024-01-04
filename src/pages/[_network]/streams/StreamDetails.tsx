import React, { FC, ReactNode, useState } from 'react'

import DetailsDialog from '../../../components/Details/DetailsDialog'
import { Network } from '../../../redux/networks'
import { StreamPageContent } from './StreamPageContent'

export const StreamDetailsDialog: FC<{
  streamId: string
  network: Network
  children: (onClick: () => void) => ReactNode
}> = ({ children, ...props }) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      {children(handleClickOpen)}
      <DetailsDialog open={open} handleClose={handleClose}>
        <StreamPageContent {...props} />
      </DetailsDialog>
    </>
  )
}
