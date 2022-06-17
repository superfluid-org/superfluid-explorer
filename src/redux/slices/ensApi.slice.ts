import { fakeBaseQuery } from "@reduxjs/toolkit/dist/query";
import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { ethers } from "ethers";

export interface ResolveNameResult {
  address: string;
  name: string;
}

export const ensApi = createApi({
  reducerPath: "ens",
  baseQuery: fakeBaseQuery(),
  keepUnusedDataFor: 600, // Agressively cache the ENS queries
  endpoints: (builder) => {
    const mainnetProvider = new ethers.providers.FallbackProvider(
      [
        {
          provider: new ethers.providers.JsonRpcBatchProvider(
            "https://eth-mainnet.public.blastapi.io",
            "mainnet"
          ),
          priority: 1,
        },
        {
          provider: new ethers.providers.JsonRpcBatchProvider(
            "https://eth-rpc.gateway.pokt.network",
            "mainnet"
          ),
          priority: 1,
        },
        {
          provider: new ethers.providers.JsonRpcBatchProvider(
            "https://cloudflare-eth.com",
            "mainnet"
          ),
          priority: 1,
        },
      ],
      1
    );
    return {
      resolveName: builder.query<ResolveNameResult | null, string>({
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
      getAvatar: builder.query<any, string>({
        queryFn: async (address) => {
          const avatarUrl = await mainnetProvider.getAvatar(address);
          return {
            data: avatarUrl,
          };
        },
      }),
    };
  },
});
