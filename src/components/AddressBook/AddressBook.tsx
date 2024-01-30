import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { Avatar, IconButton, SvgIconProps, Tooltip } from '@mui/material'
import { FC, useState } from 'react'

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

  const avatarUrl = ensApi.useLookupAvatarQuery(address)

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
      {avatarUrl.currentData ? (
        <Avatar alt={address} src={avatarUrl.currentData?.avatar} />
      ) : (
        ''
      )}
    </>
  )
}
