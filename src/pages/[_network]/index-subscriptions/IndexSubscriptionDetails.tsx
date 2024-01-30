import React, { FC, ReactNode, useState } from 'react'

import DetailsDialog from '../../../components/Details/DetailsDialog'
import { Network } from '../../../redux/networks'
import { IndexSubscriptionPageContent } from './IndexSubscriptionPageContent'

export const IndexSubscriptionDetailsDialog: FC<{
  indexSubscriptionId: string
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
        <IndexSubscriptionPageContent {...props} />
      </DetailsDialog>
    </>
  )
}
