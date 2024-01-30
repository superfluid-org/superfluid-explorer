import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { Link, ListItem, ListItemText, Stack, Tooltip } from '@mui/material'
import { FC } from 'react'

import CopyClipboard from '../../components/Copy/CopyClipboard'
import { Network } from '../../redux/networks'

export interface AddressListItemProps {
  title: string
  network: Network
  address?: string
  dataCy?: string
}

export const AddressListItem: FC<AddressListItemProps> = ({
  network,
  title,
  address,
  dataCy
}) => (
  <ListItem>
    <ListItemText
      data-cy={dataCy}
      primary={title}
      secondary={
        <Stack
          component="span"
          direction="row"
          alignItems="center"
          sx={{ fontFamily: 'Roboto Mono' }}
        >
          {address || '-'}
          {address && (
            <Stack component="span" direction="row" alignItems="center" gap={1}>
              <CopyClipboard
                copyText={address}
                IconProps={{ sx: { fontSize: '16px' } }}
              />
              <Tooltip title="View on blockchain Explorer">
                <Link
                  href={network.getLinkForAddress(address)}
                  target="_blank"
                  sx={{ color: 'inherit' }}
                >
                  <OpenInNewIcon
                    sx={{
                      fontSize: '16px',
                      display: 'block'
                    }}
                  />
                </Link>
              </Tooltip>
            </Stack>
          )}
        </Stack>
      }
    />
  </ListItem>
)
