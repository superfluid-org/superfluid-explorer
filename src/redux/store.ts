import { providers } from "@0xsequence/multicall";
import { configureStore } from "@reduxjs/toolkit";
import { Framework } from "@superfluid-finance/sdk-core";
import {
  allSubgraphEndpoints,
  createApiWithReactHooks,
  initializeRpcApiSlice,
  initializeSubgraphApiSlice,
  setFrameworkForSdkRedux,
} from "@superfluid-finance/sdk-redux";
import { ethers } from "ethers";
import {
  nextReduxCookieMiddleware,
  SERVE_COOKIES,
  wrapMakeStore,
} from "next-redux-cookie-wrapper";
import { createWrapper } from "next-redux-wrapper";
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
import storageLocal from "redux-persist/lib/storage";
import { addDays } from "../utils/dateTime";
import { isServer } from "../utils/isServer";
import { balanceRpcApiEndpoints } from "./balanceRpcApiEndpoints";
import { networks } from "./networks";
import { addressBookSlice } from "./slices/addressBook.slice";
import { themePreferenceSlice } from "./slices/appPreferences.slice";
import { ensApi } from "./slices/ensResolver.slice";
import { flagsSlice } from "./slices/flags.slice";

export const rpcApi = initializeRpcApiSlice(
  createApiWithReactHooks
).injectEndpoints(balanceRpcApiEndpoints);

export const sfSubgraph = initializeSubgraphApiSlice(
  createApiWithReactHooks
).injectEndpoints(allSubgraphEndpoints);

const infuraProviders = networks.map((network) => ({
  chainId: network.chainId,
  frameworkGetter: () =>
    Framework.create({
      chainId: network.chainId,
      provider: new providers.MulticallProvider(
        new ethers.providers.StaticJsonRpcProvider(network.rpcUrl)
      ),
      customSubgraphQueriesEndpoint: network.subgraphUrl,
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

  const flagsPersistedReducer = persistReducer(
    { key: "flags", version: 1, storage: storageLocal },
    flagsSlice.reducer
  );

  const store = configureStore({
    reducer: {
      [rpcApi.reducerPath]: rpcApi.reducer,
      [sfSubgraph.reducerPath]: sfSubgraph.reducer,
      [themePreferenceSlice.name]: themePreferenceSlice.reducer,
      [addressBookSlice.name]: addressBookReducer,
      [ensApi.reducerPath]: ensApi.reducer,
      [flagsSlice.name]: flagsPersistedReducer,
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
            expires: addDays(new Date(), 14),
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
