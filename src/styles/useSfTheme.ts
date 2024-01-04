import { Theme } from '@mui/material'
import { useEffect, useState } from 'react'

import { getRenderedThemeMode } from '../pages/_app.page'
import { useAppSelector } from '../redux/hooks'
import { isClient } from '../utils/isServer'
import { createSfTheme } from './theme'
import useSystemTheme from './useSystemTheme'

const useSfTheme = (): Theme => {
  const isSystemDarkTheme = useSystemTheme()

  const { themePreference } = useAppSelector((state) => state.appPreferences)

  let initialTheme =
    themePreference === 'system'
      ? createSfTheme('light')
      : createSfTheme(themePreference)

  if (isClient()) {
    if (getRenderedThemeMode() !== initialTheme.palette.mode) {
      // We're running into a theme mismatch which is caused by rehydration. Best to fall back to the one that got rendered first and then change it in `useEffect`. This will cause a flicker but is the safest option.
      initialTheme = createSfTheme(getRenderedThemeMode())
    }
  }

  const [muiTheme, setMuiTheme] = useState<Theme>(initialTheme)

  // System theme we'll handle client-side because server has no knowledge of system preferences.
  // NOTE: UseEffect runs only on client-side.
  useEffect(() => {
    const currentTheme = getRenderedThemeMode()
    const actualThemePreference =
      themePreference === 'system'
        ? isSystemDarkTheme
          ? 'dark'
          : 'light'
        : themePreference
    if (currentTheme !== actualThemePreference) {
      setMuiTheme(createSfTheme(actualThemePreference))
    }
  }, [themePreference])

  return muiTheme
}

export default useSfTheme
