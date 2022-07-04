import { ethers } from "ethers"

export const ResolveEnsToAddressSearch = async (searchTerm: string) => {
  console.log('step 1 ', searchTerm)

  const provider = await ethers.providers.getDefaultProvider();

  if(provider){
    const name = await provider.resolveName(searchTerm);
    if(name){

      console.log('step 2 ', name)
    }
  }
}

export const ResolveAddressToEnsSearch = async (searchTerm: string) => {
  console.log('step 1 Reverse', searchTerm)

  const provider = await ethers.providers.getDefaultProvider();

  if(provider){
    const name = await provider.lookupAddress(searchTerm);
    if(name){

      console.log('step 2 ', name)
    }
  }
}
