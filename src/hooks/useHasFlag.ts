import { find } from "lodash/fp";
import { useMemo } from "react";
import { useAppSelector } from "../redux/hooks";
import { Flag, flagsSelectors } from "../redux/slices/flags.slice";

interface FlagSearch {
  type: Flag;
  [any: string]: any;
}

export const useHasFlag = (search?: FlagSearch) => {
  const accountFlags = useAppSelector((state) =>
    flagsSelectors.selectAll(state)
  );

  // Searching for match only if there is a search param.
  // Undefined search just skips the searching and returns false
  return useMemo(
    () => (search ? Boolean(find(search, accountFlags)) : false),
    [accountFlags, search]
  );
};
