import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
} from "react";
import { Network, networks } from "../redux/networks";
import { useFeatureFlags } from "./FeatureFlagContext";

interface AvailableNetworksContextValue {
  availableNetworks: Network[];
}

const AvailableNetworksContext = createContext<AvailableNetworksContextValue>(
  null!
);

export const AvailableNetworksProvider: FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const { isMainnetEnabled } = useFeatureFlags();

  const contextValue = useMemo<AvailableNetworksContextValue>(
    () => ({
      availableNetworks: networks.filter(
        (network) => !(network.chainId === 1 && !isMainnetEnabled)
      ),
    }),
    [isMainnetEnabled]
  );

  return (
    <AvailableNetworksContext.Provider value={contextValue}>
      {children}
    </AvailableNetworksContext.Provider>
  );
};

export const useAvailableNetworks = () => useContext(AvailableNetworksContext);
