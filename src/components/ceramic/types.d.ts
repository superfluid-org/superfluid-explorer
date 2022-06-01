export interface ICeramicBook {
  total_cnt: number;
  contacts: IContacts[];
}

export interface IQuickInfo {
  ceramicWalletsCnt: number;
  unlinkedWalletsCnt: number;
}

export interface IContacts {
  name: string;
  wallets: IWallet[];
  avatar: string;
  tags: string[];
  data: {};
}

export interface IWallet {
  walletAddress: string;
  network: string;
}

