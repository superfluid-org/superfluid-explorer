import { LoadingButton } from "@mui/lab";
import { FC, useCallback } from "react";
import { EthereumAuthProvider, useViewerConnection } from "@self.id/framework";
import { useAppSelector } from "../redux/hooks";

interface CeramicAccountButtonProps {}

const CeramicAccountButton: FC<CeramicAccountButtonProps> = () => {
  const [connection, connect, disconnect] = useViewerConnection();

  const isUploading = useAppSelector((state) => state.addressBook.isUploading);

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
      <LoadingButton
        loading={isUploading}
        loadingIndicator="Uploading"
        variant="outlined"
        onClick={disconnect}
      >
        Disconnect
      </LoadingButton>
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
