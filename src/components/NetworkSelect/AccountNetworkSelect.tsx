import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Menu, Stack } from '@mui/material'
import { skipToken } from '@reduxjs/toolkit/dist/query'
import sortBy from 'lodash/fp/sortBy'
import { memo, useMemo, useRef, useState } from 'react'

import { useAvailableNetworks } from '../../contexts/AvailableNetworksContext'
import { Network, networks } from '../../redux/networks'
import { sfSubgraph } from '../../redux/store'
import NetworkSelectItem from './NetworkSelectItem'

interface AccountNetworkSelectProps {
  activeNetwork: Network
  address: string
}

export default memo<AccountNetworkSelectProps>(function AccountNetworkSelect({
  activeNetwork,
  address
}) {
  const { availableNetworks, isNetworkVisible } = useAvailableNetworks()

  const availableNetworksOrdered = useMemo(() => sortBy(
    [(x) => x.isTestnet, (x) => x.slugName],
    networks
  ), [availableNetworks]);

  const ref = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu = () => setMenuOpen(true)
  const closeMenu = () => setMenuOpen(false)

  const mappedNetworkAccounts = availableNetworksOrdered
    .map((n) => ({
      network: n,
      account: sfSubgraph.useAccountQuery(
        isNetworkVisible(n.chainId)
          ? {
            chainId: n.chainId,
            id: address
          }
          : skipToken
      )
    }))
    .filter(
      ({ account, network }) =>
        (account.isLoading || !!account.data)
    )

  return (
    <>
      <Stack
        onClick={openMenu}
        direction="row"
        columnGap={1}
        alignItems="center"
        ref={ref}
        sx={{ display: 'inline-flex', cursor: 'pointer' }}
      >
        <span>{activeNetwork.displayName}</span>
        <ExpandMoreIcon />
      </Stack>
      <Menu open={menuOpen} anchorEl={ref.current} onClose={closeMenu}>
        {mappedNetworkAccounts.map(({ network, account }) => (
          <NetworkSelectItem
            key={network.chainId}
            network={network}
            address={address}
            active={network.chainId === activeNetwork.chainId}
            loading={account.isLoading}
            onClick={closeMenu}
          />
        ))}
      </Menu>
    </>
  )
})
