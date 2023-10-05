import { Address } from "@superfluid-finance/sdk-core";
import {
  RpcEndpointBuilder,
  getFramework,
} from "@superfluid-finance/sdk-redux";

export const adhocRpcEndpoints = {
  endpoints: (builder: RpcEndpointBuilder) => ({
    minimumDeposit: builder.query<
      string,
      { tokenAddress: Address; chainId: number }
    >({
      queryFn: async ({ tokenAddress, chainId }) => {
        const framework = await getFramework(chainId);

        const minimumDeposit = await framework.governance.getMinimumDeposit({
          token: tokenAddress,
          providerOrSigner: framework.settings.provider,
        });

        return {
          data: minimumDeposit,
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
