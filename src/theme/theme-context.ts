import React from 'react'
import { darkTheme, lightTheme } from './stitches.config'

export type ThemeType = 'light' | 'dark'
export type IThemeContext = {
  theme: typeof lightTheme | typeof darkTheme
  toggleTheme: () => void
  type: ThemeType
}

const ThemeContext = React.createContext<IThemeContext | null>(null)

export default ThemeContext
