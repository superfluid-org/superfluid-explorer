import React, { FC, ReactNode, useState } from 'react'

import DetailsDialog from '../../../components/Details/DetailsDialog'
import { Network } from '../../../redux/networks'
import { PoolPageContent } from './PoolPageContent'

export const PoolPublicationDetailsDialog: FC<{
  network: Network
  id: string
  children: (onClick: () => void) => ReactNode
}> = ({ children, ...props }) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      {children(handleClickOpen)}
      <DetailsDialog open={open} handleClose={handleClose}>
        <PoolPageContent {...props} />
      </DetailsDialog>
    </>
  )
}
