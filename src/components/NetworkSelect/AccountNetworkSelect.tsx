import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Menu, Stack } from '@mui/material'
import { skipToken } from '@reduxjs/toolkit/dist/query'
import sortBy from 'lodash/fp/sortBy'
import { memo, useCallback, useRef, useState } from 'react'

import { useAvailableNetworks } from '../../contexts/AvailableNetworksContext'
import { useAppSelector } from '../../redux/hooks'
import { Network, networks } from '../../redux/networks'
import { sfSubgraph } from '../../redux/store'
import NetworkSelectItem from './NetworkSelectItem'

const networksOrdered = sortBy(
  [(x) => x.isTestnet, (x) => x.slugName],
  networks
)

interface AccountNetworkSelectProps {
  activeNetwork: Network
  address: string
}

export default memo<AccountNetworkSelectProps>(function AccountNetworkSelect({
  activeNetwork,
  address
}) {
  const { availableNetworks } = useAvailableNetworks()

  const displayedTestnetChainIds = useAppSelector(
    (state) => state.appPreferences.displayedTestNets
  )

  const ref = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu = () => setMenuOpen(true)
  const closeMenu = () => setMenuOpen(false)

  const isNetworkAvailable = useCallback(
    (chainId: number) =>
      availableNetworks.some((network) => network.chainId === chainId),
    [availableNetworks]
  )

  const mappedNetworkAccounts = networksOrdered
    .map((n) => ({
      network: n,
      account: sfSubgraph.useAccountQuery(
        isNetworkAvailable(n.chainId)
          ? {
              chainId: n.chainId,
              id: address
            }
          : skipToken
      )
    }))
    .filter(
      ({ account, network }) =>
        (account.isLoading || !!account.data) &&
        (!network.isTestnet || displayedTestnetChainIds[network.chainId])
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
