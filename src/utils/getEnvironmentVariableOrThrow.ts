/**
 * Gets the environment variable or throws an exception.
 * NOTE: The user of this code has to call `process.env.KEY` themselves because of smart compilation by Next.js which scans code for direct `process.env` calls.
 * @param value The string returned from the environment variable.
 * @param key Name of the environment variable for better error message.
 */
export function ensureEnvironmentVariable(
  value: string | undefined,
  key: string
): string {
  if (!value) throw Error(`Environment variable ${key} has to be defined.`)
  return value
}
