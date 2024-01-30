import { FC, useState } from 'react'

import { Network } from '../../redux/networks'
import { sfSubgraph } from '../../redux/store'
import AppLink from '../AppLink/AppLink'
import { AccountAddressFormatted } from './AccountAddressFormatted'

const AccountAddress: FC<{
  network: Network
  address: string
  ellipsis?: number
  dataCy?: string
}> = ({ network, address, ellipsis, dataCy }) => {
  const prefetchAccountQuery = sfSubgraph.usePrefetch('account', {
    ifOlderThan: 45
  })

  const [prefetchTimeoutId, setPrefetchTimeoutId] = useState<any | undefined>()

  return (
    <AppLink
      data-cy={dataCy}
      className="address"
      href={`/${network.slugName}/accounts/${address}`}
      sx={{ fontFamily: 'Roboto Mono' }}
      onMouseEnter={() => {
        // It's fine to have duplicate setTimeout's as duplicate _queries_ will not get fired.
        setPrefetchTimeoutId(
          setTimeout(
            () =>
              prefetchAccountQuery({
                chainId: network.chainId,
                id: address
              }),
            100
          )
        )
      }}
      onMouseLeave={() => {
        // The point is that if mouse leaves so quickly that timeout didn't fire then no point to prefetch (user probably just moving mouse over.)
        if (prefetchTimeoutId) {
          clearTimeout(prefetchTimeoutId)
        }
      }}
    >
      <AccountAddressFormatted
        network={network}
        address={address}
        ellipsis={ellipsis}
      />
    </AppLink>
  )
}

export default AccountAddress
