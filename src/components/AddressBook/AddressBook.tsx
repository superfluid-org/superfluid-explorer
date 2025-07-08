import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { Avatar, IconButton, SvgIconProps, Tooltip } from '@mui/material'
import { FC, useState } from 'react'

import { useAddressDisplay } from '../../hooks/useAddressDisplay'
import { useAppSelector } from '../../redux/hooks'
import { Network } from '../../redux/networks'
import {
  addressBookSelectors,
  createEntryId
} from '../../redux/slices/addressBook.slice'
import { ensApi } from '../../redux/slices/ensResolver.slice'
import { AddressBookDialog } from './AddressBookDialog'

export const AddressBookButton: FC<{
  network: Network
  address: string
  iconProps?: SvgIconProps
}> = ({ network, address, iconProps }) => {
  const entry = useAppSelector((state) =>
    addressBookSelectors.selectById(state, createEntryId(network, address))
  )
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const addressDisplay = useAddressDisplay(address)

  const avatarUrl = addressDisplay.recommendedAvatar 
  
  return (
    <>
      <Tooltip
        title={entry ? 'Edit address book entry' : 'Add to address book'}
      >
        <IconButton onClick={() => setIsDialogOpen(!isDialogOpen)}>
          {entry ? (
            <StarIcon {...iconProps} />
          ) : (
            <StarBorderIcon {...iconProps} />
          )}
        </IconButton>
      </Tooltip>
      <AddressBookDialog
        network={network}
        address={address}
        open={isDialogOpen}
        handleClose={() => setIsDialogOpen(false)}
      />
      {avatarUrl && (
        <Avatar 
          alt={addressDisplay.recommendedName || address} 
          src={avatarUrl} 
          sx={{ width: 32, height: 32 }}
        />
      )}
    </>
  )
}
