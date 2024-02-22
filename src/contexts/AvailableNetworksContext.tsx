import { memoize } from 'lodash'
import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo
} from 'react'

import { useAppSelector } from '../redux/hooks'
import { Network, networks } from '../redux/networks'

interface AvailableNetworksContextValue {
  availableNetworks: ReadonlyArray<Network>
  visibleNetworks: ReadonlyArray<Network>
  isNetworkVisible: (chainId: number) => boolean
}

const AvailableNetworksContext = createContext<AvailableNetworksContextValue>(
  null!
)

export const AvailableNetworksProvider: FC<PropsWithChildren<{}>> = ({
  children
}) => {
  const displayedTestnetChainIds = useAppSelector(
    (state) => state.appPreferences.displayedTestNets
  )
  const availableNetworks = networks

  const visibleNetworks = useMemo(() => {
    return availableNetworks.filter((network) => {
      if (network.isTestnet) {
        // Check explicitly for false, as undefined means it's a new network added to the app, and we want to show it then.
        if (displayedTestnetChainIds[network.chainId] === false) {
          return false
        }
      }
      return true
    })
  }, [displayedTestnetChainIds])

  const isNetworkVisible = useCallback(
    memoize((chainId: number) =>
      visibleNetworks.some((network) => network.chainId === chainId)
    ),
    [visibleNetworks]
  )

  const contextValue = useMemo<AvailableNetworksContextValue>(
    () => ({
      availableNetworks,
      visibleNetworks,
      isNetworkVisible
    }),
    [availableNetworks, visibleNetworks, isNetworkVisible]
  )

  return (
    <AvailableNetworksContext.Provider
      value={contextValue}
      key={availableNetworks.length}
    >
      {children}
    </AvailableNetworksContext.Provider>
  )
}

export const useAvailableNetworks = () => useContext(AvailableNetworksContext)
