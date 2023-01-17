import { useRouter } from "next/router";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { useHasFlag } from "../hooks/useHasFlag";
import { useAppDispatch } from "../redux/hooks";
import { enableMainnetFeature, Flag } from "../redux/slices/flags.slice";

const FeatureFlagContext = createContext<FeatureFlagContextValue>(null!);

interface FeatureFlagContextValue {
  isMainnetEnabled: boolean;
}

const MAINNET_FEATURE_CODE = "724ZX_ENS";

export const FeatureFlagProvider: FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const isMainnetEnabled = useHasFlag({
    type: Flag.MainnetFeature,
  });

  useEffect(() => {
    if (router.isReady) {
      const { code, ...query } = router.query;

      const enableMainnet = code === MAINNET_FEATURE_CODE && !isMainnetEnabled;

      if (enableMainnet) {
        dispatch(enableMainnetFeature());

        router.replace(
          {
            query,
          },
          undefined,
          {
            shallow: false,
          }
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  const contextValue = useMemo<FeatureFlagContextValue>(
    () => ({
      isMainnetEnabled,
    }),
    [isMainnetEnabled]
  );

  return (
    <FeatureFlagContext.Provider value={contextValue}>
      {children}
    </FeatureFlagContext.Provider>
  );
};

export const useFeatureFlags = () => useContext(FeatureFlagContext);
