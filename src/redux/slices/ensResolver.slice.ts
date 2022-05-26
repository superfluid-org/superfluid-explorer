import urlcat from 'urlcat'
import { ethers } from "ethers";
import { createApi,  fakeBaseQuery } from "@reduxjs/toolkit/query/react";



export const ensApi = createApi({
  reducerPath: "ens",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => {

    const mainnetProvider = new ethers.providers.InfuraProvider(
      "mainnet",
      "c44fac7726a64d5bbbb3a1c51f02d75b"
    );

    return {
      resolveName: builder.query<
        { address: string; name: string } | null,
        string
      >({
        queryFn: async (name) => {
          if (ethers.utils.isAddress(name)) {
            return { data: null };
          }

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
