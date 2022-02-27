import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {HYDRATE} from "next-redux-wrapper";

export interface IAppPreferences {
  themePreference: 'system' | 'light' | 'dark';
  streamGranularity: keyof typeof streamGranularityInSeconds;
  etherDecimalPlaces: etherDecimalPlaces;
}

export const streamGranularityInSeconds = {
  second: 1,
  minute: 60,
  hour: 3600,
  day: 86400,
  week: 86400 * 7,
  month: 86400 * 30
}

type etherDecimalPlaces = 18 | 9 | 5; 

const initialState: IAppPreferences = {
  themePreference: 'system',
  streamGranularity: 'day',
  etherDecimalPlaces: 18
};

const sliceName = 'appPreferences'

export const themePreferenceSlice = createSlice({
  name: sliceName,
  initialState: initialState,
  reducers: {
    changeThemePreference(state, action: PayloadAction<IAppPreferences['themePreference']>) {
      state.themePreference = action.payload;
    },
    changeStreamGranularity(state, action: PayloadAction<IAppPreferences['streamGranularity']>) {
      state.streamGranularity = action.payload;
    },
    changeEtherDecimalPlaces(state, action: PayloadAction<etherDecimalPlaces>) {
      state.etherDecimalPlaces = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, {payload}) => ({
      ...state,
      ...payload[sliceName],
    }),
  },
});

export const { changeThemePreference, changeStreamGranularity, changeEtherDecimalPlaces } = themePreferenceSlice.actions;
