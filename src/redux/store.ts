import { configureStore } from "@reduxjs/toolkit";
import {
  allSubgraphEndpoints,
  createApiWithReactHooks,
  setFrameworkForSdkRedux,
  initializeSubgraphApiSlice,
  initializeRpcApiSlice
} from "@superfluid-finance/sdk-redux";
import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";
import { createWrapper } from "next-redux-wrapper";
import {
  nextReduxCookieMiddleware,
  SERVE_COOKIES,
  wrapMakeStore,
} from "next-redux-cookie-wrapper";
import { themePreferenceSlice } from "./slices/appPreferences.slice";
import { addressBookSlice } from "./slices/addressBook.slice";
import { networks } from "./networks";
import storageLocal from "redux-persist/lib/storage";
import { ensApi } from "./slices/ensResolver.slice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { isServer } from "../utils/isServer";
import { addDays } from "../utils/dateTime";
import { newRpcApiEndpoints } from "./newRpcApiEndpoints";

export const rpcApi = initializeRpcApiSlice(createApiWithReactHooks).injectEndpoints(newRpcApiEndpoints);
export const sfSubgraph = initializeSubgraphApiSlice(
  createApiWithReactHooks
).injectEndpoints(allSubgraphEndpoints);

const infuraProviders = networks.map((network) => ({
  chainId: network.chainId,
  frameworkGetter: () =>
    Framework.create({
      chainId: network.chainId,
      provider: new ethers.providers.JsonRpcProvider(network.rpcUrl),
    }),
}));

export const makeStore = wrapMakeStore(() => {
  infuraProviders.map((x) =>
    setFrameworkForSdkRedux(x.chainId, x.frameworkGetter)
  );

  const addressBookReducer = persistReducer(
    { key: "address-book", version: 1, storage: storageLocal },
    addressBookSlice.reducer
  );

  const store = configureStore({
    reducer: {
      [rpcApi.reducerPath]: rpcApi.reducer,
      [sfSubgraph.reducerPath]: sfSubgraph.reducer,
      [themePreferenceSlice.name]: themePreferenceSlice.reducer,
      [addressBookSlice.name]: addressBookReducer,
      [ensApi.reducerPath]: ensApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [
            FLUSH,
            REHYDRATE,
            PAUSE,
            PERSIST,
            PURGE,
            REGISTER,
            SERVE_COOKIES,
          ], // Ignore redux-persist actions: https://stackoverflow.com/a/62610422
        },
      })
        .prepend(
          nextReduxCookieMiddleware({
            compress: true,
            subtrees: ["appPreferences"],
            expires: addDays(new Date(), 14)
          })
        )
        .concat(rpcApi.middleware)
        .concat(sfSubgraph.middleware)
        .concat(ensApi.middleware),
  });

  if (!isServer()) {
    persistStore(store);
  }

  return store;
});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: true,
  serializeState: (state) => JSON.stringify(state),
  deserializeState: (state) => JSON.parse(state),
});
