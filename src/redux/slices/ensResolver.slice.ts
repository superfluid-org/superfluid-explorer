import { ethers } from "ethers";
import { createApi,  fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const ensApi = createApi({
  reducerPath: "ens",
  baseQuery: fakeBaseQuery(),
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
      resolveName: builder.query<
        { address: string; name: string } | null,
        string
      >({
        queryFn: async (name) => {

          if (!name.endsWith('.eth')) {
            return { data: null };
          }

          const address =  await mainnetProvider.resolveName(name)
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
          const name = await mainnetProvider.lookupAddress(address)
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
      string>({
        queryFn: async (address) => {
          const avatar = await mainnetProvider.getAvatar(address)
          return {
            data: avatar ? {
              address,
              avatar: avatar
            }
            : null,
          }
        }
      })
    };
  },
});
