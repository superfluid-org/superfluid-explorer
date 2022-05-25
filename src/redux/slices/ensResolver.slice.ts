import urlcat from 'urlcat'
import { fakeBaseQuery } from "@reduxjs/toolkit/dist/query";
import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { ethers } from "ethers";

export interface NameInfo {
  rnsName: string
  ensName: string | null
  address: string
}


export const getNameById = async (id: string ) => {
  if (!id) return ''
    const url = urlcat('https://rss3.domains/address/:id', { id })
    const rsp = (await (await fetch(url)).json()) as NameInfo
    return rsp.ensName
}

export const getAddressByName = async (id: string) => {
  if (!id) return ''
  const url = urlcat('https://rss3.domains/name/:id', { id })
  const rsp = (await (await fetch(url)).json()) as NameInfo
  return rsp.address
}

// export const createEntryNameId = (ensName: string | null, address: string) => (`${ensName}_${address.toLowerCase()}`);

// export const getEntryNameId  = (nameInfo: NameInfo) => {

//   return `${nameInfo.ensName}_${nameInfo.address.toLowerCase()}`;
// }

// export const ensAdapter = createEntityAdapter({
//   selectId: (entry: NameInfo) => getEntryNameId(entry),
// })

// const sliceName = 'ensAddress';

// export const ensResolverSlice = createSlice({
//   name: sliceName,
//   initialState: ensAdapter.getInitialState(),
//   reducers: {
//     entryUpserted: ensAdapter.upsertOne,
//     entryRemoved: ensAdapter.removeOne
//   },
//   extraReducers: {
//     [REHYDRATE]: (state, {payload}) => ({
//       ...state,
//       ...(payload ? payload[sliceName] : {}),
//     }),
//   },
// })


export const ensApi = createApi({
  reducerPath: "ens",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => {
    return {
      resolveName: builder.query<
        { address: string; name: string } | null,
        string
      >({
        queryFn: async (name) => {
          if (ethers.utils.isAddress(name)) {
            return { data: null };
          }

          const address = await getAddressByName(name);
          return {
            data: address
              ? {
                  name,
                  address: address,
                }
              : null,
          };
        },
      }),
      lookupAddress: builder.query<
        { address: string; name: string } | null,
        string
      >({
        queryFn: async (address) => {
          const name = await getNameById(address);
          return {
            data: name
              ? {
                  name,
                  address: ethers.utils.getAddress(address),
                }
              : null,
          };
        },
      }),
    };
  },
});

// export const ensResolveApi = ensAdapter.getSelectors((state: RootState) => state.ensAdapter)

