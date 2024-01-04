import sfMeta from '@superfluid-finance/metadata'
import { isString } from 'lodash'

import { Network } from '../redux/networks'

/**
 * Tries to find a network by parsing the value as slug/chain-id/canonical-name/etc.
 */
export const tryFindNetwork = (
  networks: Network[],
  value: unknown
): Network | undefined => {
  const asNumber = Number(value)
  if (isFinite(asNumber)) {
    return networks.find((x) => x.chainId === asNumber)
  }

  if (isString(value)) {
    const valueAsLowerCase = value.toLowerCase()

    const bySlug = networks.find((x) => x.slugName === valueAsLowerCase)
    if (bySlug) {
      return bySlug
    }

    const byMetadata_chainId =
      sfMeta.getNetworkByName(valueAsLowerCase)?.chainId ??
      sfMeta.getNetworkByShortName(valueAsLowerCase)?.chainId
    if (byMetadata_chainId) {
      return networks.find((x) => x.chainId === byMetadata_chainId)
    }
  }

  return undefined
}

export const findNetworkOrThrow = (
  networks: Network[],
  value: unknown
): Network => {
  const network = tryFindNetwork(networks, value)
  if (!network) {
    throw new Error(`Network ${value} not found. This should never happen.`)
  }
  return network
}
