import React from 'react'

// uitls
import { __DEV__ } from '@utils/assertions'
import ThemeContext, { IThemeContext, ThemeType } from './theme-context'
import { getThemeByType, setThemeInHTML } from './utils'

interface Props {
  children: React.ReactNode
}

function ThemeProvider({ children }: Props) {
  const [themeType, setThemeType] = React.useState<ThemeType>('light')

  const toggleTheme = React.useCallback(() => {
    setThemeType((currentThemeType) => {
      const nextTheme = currentThemeType === 'light' ? 'dark' : 'light'
      setThemeInHTML(nextTheme)
      return nextTheme
    })
  }, [])

  const value: IThemeContext = React.useMemo(
    () => ({
      theme: getThemeByType(themeType),
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
