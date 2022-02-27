import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {HYDRATE} from "next-redux-wrapper";

export interface IAppPreferences {
  themePreference: 'system' | 'light' | 'dark';
  streamGranularity: keyof typeof streamGranularityInSeconds;
}

export const streamGranularityInSeconds = {
  second: 1,
  minute: 60,
  hour: 3600,
  day: 86400,
  week: 86400 * 7,
  month: 86400 * 30
}

const initialState: IAppPreferences = {
  themePreference: 'system',
  streamGranularity: 'day'
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
  },
  extraReducers: {
    [HYDRATE]: (state, {payload}) => ({
      ...state,
      ...payload[sliceName],
    }),
  },
});

export const { changeThemePreference, changeStreamGranularity } = themePreferenceSlice.actions;
