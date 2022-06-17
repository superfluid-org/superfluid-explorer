export function shortenHex(address: string, chars = 6) {
  return address.slice(0, chars + 2) + "..." + address.slice(address.length - chars, address.length)
}
