import React, { FC, ReactNode, useState } from 'react'

import DetailsDialog from '../../../components/Details/DetailsDialog'
import { Network } from '../../../redux/networks'
import { IndexPageContent } from './IndexPageContent'

// TODO: This is used for both GDA and IDA?

export const IndexPublicationDetailsDialog: FC<{
  network: Network
  indexId: string
  children: (onClick: () => void) => ReactNode
}> = ({ children, ...props }) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      {children(handleClickOpen)}
      <DetailsDialog open={open} handleClose={handleClose}>
        <IndexPageContent {...props} />
      </DetailsDialog>
    </>
  )
}
