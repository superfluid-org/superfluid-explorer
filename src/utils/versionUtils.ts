/**
 * Takes a `pseudoAddress` and returns the `versionString`.
 * @param pseudoAddress format: 0x000000000000000000${major}${minor}${patch}${gitRevision}
 * @returns `versionString` with format: major.minor.patch-rrrrrrrrrrrrrrrr, r: 16-digit git revision (hex)
 */
export function pseudoAddressToVersionString(pseudoAddress: string) {
  const str = pseudoAddress.replace(/^0x/, '').toLowerCase() // remove leading 0x
  const major = parseInt(str.slice(18, 20), 10)
  const minor = parseInt(str.slice(20, 22), 10)
  const patch = parseInt(str.slice(22, 24), 10)
  const revision = str.slice(24)

  if (
    !str.startsWith('000000000000000000') ||
    isNaN(major) ||
    isNaN(minor) ||
    isNaN(patch)
  ) {
    return undefined
  }

  return `${major}.${minor}.${patch}-${revision}`
}
