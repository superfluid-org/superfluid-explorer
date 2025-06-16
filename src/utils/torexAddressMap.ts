import { Address } from "@superfluid-finance/sdk-core";

export interface TOREXInfo {
  address: Address;
  name: string;
}

export const TOREX_ADDRESS_MAP: Record<number, TOREXInfo[]> = {
  // Base Chain
  8453: [
    {
      address: '0x267264cfb67b015ea23c97c07d609fbfc06adc17' as Address,
      name: 'ETHx → USDCx TOREX'
    },
    {
      address: '0x269f9ef6868f70fb20ddf7cfdf69fe1dbfd307de' as Address,
      name: 'USDCx → ETHx TOREX',
    },
    {
      address: '0x0700d3bdbc8fd357b28c209dac74c23242b343c7' as Address,
      name: 'ETHx → DEGENx TOREX',
    },
    {
      address: '0x68e5e539374353445b03ec87d2abfe2c791deebc' as Address,
      name: 'DEGENx → ETHx TOREX',
    },
    {
      address: '0x27aee792433e4c8faa55396f91ee4119d282a83a' as Address,
      name: 'ETHx → AEROx TOREX',
    },
    {
      address: '0x76ba7a8a4d8320c6e9d4542255fb05268f1b48be' as Address,
      name: 'AEROx → ETHx TOREX',
    },
    {
      address: '0x6a19ee195d996b70667894e2dae9d10ee4d3d969' as Address,
      name: 'BUILDx → ETHx TOREX',
    },
    {
      address: '0x6e0c1424108963425fb1cca1829a7cb610eecdb5' as Address,
      name: 'ETHx → BUILDx TOREX',
    },
    {
      address: '0x9b3e9d6af3fec387abc9733c33a113fbb5ed21ee' as Address,
      name: 'ETHx → HIGHERx TOREX',
    },
    {
      address: '0x598af5742b4a6abd7b66b2aedd3da17690ab72f2' as Address,
      name: 'HIGHERx → ETHx TOREX',
    },
    {
      address: '0x16df7d980198861ba701c47c7d5e9cb2d6bf7f8f' as Address,
      name: 'ETHx → TN100Xx TOREX',
    },
    {
      address: '0x43dc12ca897e6533e78b33b43e6993597d09dd73' as Address,
      name: 'TN100Xx → ETHx TOREX',
    },
    {
      address: '0xd21549892bf317ccfe7fb220dcf14ab15dfe5428' as Address,
      name: 'ETHx → wstETHx TOREX',
    },
    {
      address: '0x78efcd2bc1175d69863b1c9aac9996b766c07a3a' as Address,
      name: 'wstETHx → ETHx TOREX',
    },
    {
      address: '0xfb0284827ec0a732a96f8a842c762fd96efda3fa' as Address,
      name: 'weETHx → ETHx TOREX',
    },
    {
      address: '0xe259f72f9141ef25bf47da61e5dae9f7014990a3' as Address,
      name: 'ETHx → weETHx TOREX',
    },
    {
      address: '0x0df29dd43652ebc81db4ca66f92d8352497d21d6' as Address,
      name: 'USDCx → weETHx TOREX',
    },
    {
      address: '0xf756d4d0eb6c24d4b00eb9ae4da5330b559ded6d' as Address,
      name: 'weETHx → USDCx TOREX',
    },
    {
      address: '0x03201799b1083ce1410f468339aa75db74cfb0b5' as Address,
      name: 'USDCx → weETHx TOREX',
    },
    {
      address: '0xe3d9a5897d207465eb0d1c44f275167e1e0c535e' as Address,
      name: 'weETHx → USDCx TOREX',
    },
    {
      address: '0x313cb2cc1d21487bf98b8caa2fb0ec163e6092be' as Address,
      name: 'USDCx → DEGENx TOREX',
    },
    {
      address: '0x25a4d4bf2732a824d87bedbe4668671461e5a04a' as Address,
      name: 'DEGENx → USDCx TOREX',
    },
    {
      address: '0xa8e5f011f72088e3113e2f4f8c3fb119fc2e226c' as Address,
      name: 'USDCx → cbBTCx TOREX',
    },
    {
      address: '0x9777e77e7813dc44ec9da7bfca69042641eb56d9' as Address,
      name: 'cbBTCx → USDCx TOREX',
    },
    {
      address: '0xd4a304d5b6082b19ad8228286aeaf0959b23fcca' as Address,
      name: 'ETHx → SPACEx TOREX',
    },
    {
      address: '0xbc24cad9e23a4a97e65ab41df03dbdf4769ee813' as Address,
      name: 'SPACEx → ETHx TOREX',
    },
    {
      address: '0x159b4251b06ae80ce78f96d1041cdc4d741221a8' as Address,
      name: 'ETHx → MFERx TOREX',
    },
    {
      address: '0x4767685fc455f9314d8f62510ef75ef8e0a3d8de' as Address,
      name: 'MFERx → ETHx TOREX',
    },
    {
      address: '0xe17cebc25d8e274a7611024b4f072302b138f6b3' as Address,
      name: 'ETHx → STREME TOREX',
    }
  ],
  // Celo Chain
  42220: [
    {
      address: '0x96d2a59bb9ec295e1286d77f58d23a2198cca49b' as Address,
      name: 'CELOx → cUSDx TOREX',
    },
    {
      address: '0x1c8173f53db4dba0c22f390730f9ce8fd9cfe3f5' as Address,
      name: 'cUSDx → CELOx TOREX',
    },
    {
      address: '0xa2091b3acd0086bd12205d7e1e33332e40c29147' as Address,
      name: 'CELOx → WETHx TOREX',
    },
    {
      address: '0xfe115b6dea417620f99ea9941cc51887a4b5d012' as Address,
      name: 'WETHx → CELOx TOREX',
    },
    {
      address: '0x44f559efe3ad2df22a92dbd4c9f626fbf668c2e1' as Address,
      name: 'cUSDx → CELOWETHx TOREX',
    },
    {
      address: '0x22b1e51c0f07aae47c53adf9b7d50552d393139c' as Address,
      name: 'CELOWETHx → cUSDx TOREX',
    }
  ],
  // Optimism Chain
  10: [
    {
      address: '0x9c8b4be718489634a38999108c43381e55cf1e25' as Address,
      name: 'ETHx → OPx TOREX',
    },
    {
      address: '0xd9568d493d2ce3f8e5d1c1d5aa377a789b7e3f28' as Address,
      name: 'OPx → ETHx TOREX',
    },
    {
      address: '0x04ff3a9d970cc57f1ef041aa7508f0893178e514' as Address,
      name: 'ETHx → USDCx TOREX',
    },
    {
      address: '0xda09bfa42eb482858f54c92d083e79a44191327b' as Address,
      name: 'USDCx → ETHx TOREX',

    }
  ]
};

export const TOREX_LOOKUP_MAP: Record<string, TOREXInfo> = Object.values(TOREX_ADDRESS_MAP)
  .flat()
  .reduce((acc, TOREX) => {
    acc[TOREX.address.toLowerCase()] = TOREX;
    return acc;
  }, {} as Record<string, TOREXInfo>);

export function getTOREXInfo(address: string): TOREXInfo | undefined {
  return TOREX_LOOKUP_MAP[address.toLowerCase()];
}

export function isTOREXAddress(address: string): boolean {
  return address.toLowerCase() in TOREX_LOOKUP_MAP;
} 