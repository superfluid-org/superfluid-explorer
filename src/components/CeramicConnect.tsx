import { useAppDispatch } from "../redux/hooks";
import useAddressBook from "../hooks/useAddressBook";
import { EthereumAuthProvider, useViewerConnection } from '@self.id/framework'
import { addressBookSlice } from "../redux/slices/addressBook.slice";
import { Button, styled, Tooltip } from "@mui/material";



export function CeramicConnectButton() {

  const [connection, connect, disconnect] = useViewerConnection()
  const dispatch = useAppDispatch();
  const { populateAddressBook } = useAddressBook();

  const connectToCeramic = async () => {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      await connect(new EthereumAuthProvider(window.ethereum, accounts[0]))
      populateAddressBook() 
  }

  const disconnectFromCeramic = async () => {
    console.log('disconnect')
    disconnect();
    dispatch(addressBookSlice.actions.entryRemoveAll());

  }
  
  return connection.status === 'connected' ? (
    <Button
      sx={{
        fontWeight: 500,
        fontSize: "16px",
        color: "white",
        textTransform: "none",
      }}
    variant="contained"
      onClick={disconnectFromCeramic}>
       {connection.selfID.id.substr(6,7)}...
    </Button>
  ) :  typeof window !== undefined  ? (
    <Button
      variant="contained"
      disabled={connection.status === 'connecting'}
      onClick={connectToCeramic}>
      Connect
    </Button>
  ) : (
    <p>
      An injected Ethereum provider such as{' '}
      <a href="https://metamask.io/">MetaMask</a> is needed to authenticate.
    </p>
  )
}



