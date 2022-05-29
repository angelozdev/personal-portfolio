import React from 'react'

// uitls
import { __DEV__ } from '@utils/assetions'
import { darkTheme, lightTheme } from './stitches.config'
import ThemeContext, { IThemeContext, ThemeType } from './theme-context'

interface Props {
  children: React.ReactNode
}

function ThemeProvider({ children }: Props) {
  const [themeType, setThemeType] = React.useState<ThemeType>('light')

  const toggleTheme = React.useCallback(() => {
    setThemeType((currentTheme) => {
      return currentTheme === 'light' ? 'dark' : 'light'
    })
  }, [])

  const value: IThemeContext = React.useMemo(
    () => ({
      theme: themeType === 'light' ? lightTheme : darkTheme,
      toggleTheme,
      type: themeType
    }),
    [themeType, toggleTheme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

if (__DEV__) {
  ThemeProvider.displayName = 'ThemeProvider'
}

export default ThemeProvider
