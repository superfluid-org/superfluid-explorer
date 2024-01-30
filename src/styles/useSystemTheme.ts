import { useEffect, useState } from 'react'

import { isServer } from '../utils/isServer'

const useSystemTheme = (): boolean => {
  const getCurrentTheme = () =>
    isServer()
      ? false
      : window.matchMedia('(prefers-color-scheme: dark)').matches

  const [isSystemDarkTheme, setIsSystemDarkTheme] = useState(getCurrentTheme())

  const mqListener = (e: {
    matches: boolean | ((prevState: boolean) => boolean)
  }) => {
    setIsSystemDarkTheme(e.matches)
  }

  useEffect(() => {
    if (isServer()) {
      return
    }

    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
    darkThemeMq.addEventListener('change', mqListener)
    return () => darkThemeMq.removeEventListener('change', mqListener)
  }, [])

  return isSystemDarkTheme
}

export default useSystemTheme
