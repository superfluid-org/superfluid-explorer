import {useMemo} from "react";
import {ethers} from "ethers";
import {networks} from "../redux/networks";
import {useAppSelector} from "../redux/hooks";
import {ensApi} from "../redux/slices/ensResolver.slice";

const ensQuery = ensApi.useResolveNameQuery(
  searchTermDebounced ? searchTermDebounced : skipToken
);
