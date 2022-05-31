import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { FC, useCallback } from "react";
import { EthereumAuthProvider, useViewerConnection } from "@self.id/framework";

interface CeramicAccountButtonProps {}

const CeramicAccountButton: FC<CeramicAccountButtonProps> = () => {
  const [connection, connect, disconnect] = useViewerConnection();

  const onClickConnect = useCallback(async () => {
    // @ts-ignore
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    // @ts-ignore
    await connect(new EthereumAuthProvider(window.ethereum, accounts[0]));
  }, [connect]);

  if (connection.status === "connected") {
    return (
      <Button variant="outlined" onClick={disconnect}>
        Disconnect
      </Button>
    );
  }

  return (
    <LoadingButton
      variant="outlined"
      onClick={onClickConnect}
      loading={connection.status === "connecting"}
      loadingIndicator="Loading..."
    >
      Connect
    </LoadingButton>
  );
};

export default CeramicAccountButton;
