import { RpcEndpointBuilder } from "@superfluid-finance/sdk-redux";
import {
  balanceFetcher,
  BalanceQueryParams,
  RealtimeBalance,
} from "./balanceFetcher";

export const newRpcApiEndpoints = {
  endpoints: (builder: RpcEndpointBuilder) => ({
    realtimeBalance: builder.query<RealtimeBalance, BalanceQueryParams>({
      queryFn: async (arg) => {
        return {
          data: await balanceFetcher.getRealtimeBalance(arg),
        };
      },
      providesTags: (_result, _error, arg) => [
        {
          type: "GENERAL",
          id: arg.chainId, // TODO(KK): Could be made more specific.
        },
      ],
    }),
  }),
};
