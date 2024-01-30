import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useMemo
} from 'react'

import { Network, networks } from '../redux/networks'

interface AvailableNetworksContextValue {
  availableNetworks: Network[]
}

const AvailableNetworksContext = createContext<AvailableNetworksContextValue>(
  null!
)

export const AvailableNetworksProvider: FC<PropsWithChildren<{}>> = ({
  children
}) => {
  const contextValue = useMemo<AvailableNetworksContextValue>(
    () => ({
      availableNetworks: networks
    }),
    []
  )

  return (
    <AvailableNetworksContext.Provider value={contextValue}>
      {children}
    </AvailableNetworksContext.Provider>
  )
}

export const useAvailableNetworks = () => useContext(AvailableNetworksContext)
