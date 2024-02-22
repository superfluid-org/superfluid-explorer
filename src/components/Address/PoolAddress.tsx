import { FC } from 'react'

import { Network } from '../../redux/networks'
import AppLink from '../AppLink/AppLink'
import { AccountAddressFormatted } from './AccountAddressFormatted'

export const PoolAddress: FC<{
  network: Network
  address: string
  ellipsis?: number
  dataCy?: string
}> = ({ network, address, ellipsis, dataCy }) => {
  return (
    <AppLink
      data-cy={dataCy}
      className="address"
      href={`/${network.slugName}/pools/${address}`}
      sx={{ fontFamily: 'Roboto Mono' }}
    >
      <AccountAddressFormatted
        network={network}
        address={address}
        ellipsis={ellipsis}
      />
    </AppLink>
  )
}
