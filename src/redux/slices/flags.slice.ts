import {
  createEntityAdapter,
  createSlice,
  EntityState,
  isAnyOf,
  nanoid,
} from "@reduxjs/toolkit";
import { RootState } from "../store";

export enum Flag {
  MainnetFeature = "mainnet-feature",
}

interface BaseFlag<T> {
  id: string;
  type: T;
}

interface MainnetFeatureFlag extends BaseFlag<Flag.MainnetFeature> {}

type FlagType = MainnetFeatureFlag;

/**
 * Account flags are used to store simple boolean type account data.
 * Optionally a flag can be turned to true/false in a specific network.
 * For example faucet funds received, onboarding steps done etc.
 */

const adapter = createEntityAdapter<FlagType>({
  selectId: ({ id }) => id,
});

export const flagsSlice = createSlice({
  name: "flags",
  initialState: adapter.getInitialState(),
  reducers: {
    enableMainnetFeature: {
      reducer: adapter.upsertOne,
      prepare: () => ({
        payload: {
          id: nanoid(),
          type: Flag.MainnetFeature,
        } as MainnetFeatureFlag,
      }),
    },
  },
});

export const { enableMainnetFeature } = flagsSlice.actions;

const selectSelf = (state: RootState): EntityState<FlagType> => state.flags;

const adapterSelectors = adapter.getSelectors<RootState>(selectSelf);

export const flagsSelectors = {
  ...adapterSelectors,
};
