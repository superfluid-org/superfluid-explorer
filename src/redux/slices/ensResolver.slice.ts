import { ethers } from "ethers";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { providers } from "@0xsequence/multicall";

export const ensApi = createApi({
  reducerPath: "ens",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => {
    const mainnetProvider = new providers.MulticallProvider(
      new ethers.providers.StaticJsonRpcProvider(
        "https://rpc-endpoints.superfluid.dev/eth-mainnet",
        "mainnet"
      )
    );
    return {
      resolveName: builder.query<
        { address: string; name: string } | null,
        string
      >({
        queryFn: async (name) => {
          if (!name.includes(".")) {
            return { data: null };
          }

          const address = await mainnetProvider.resolveName(name);
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
          const name = await mainnetProvider.lookupAddress(address);
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
      lookupAvatar: builder.query<
        { address: string; avatar: string } | null,
        string
      >({
        queryFn: async (address) => {
          const avatar = await mainnetProvider.getAvatar(address);
          return {
            data: avatar
              ? {
                  address,
                  avatar: avatar,
                }
              : null,
          };
        },
      }),
    };
  },
});
