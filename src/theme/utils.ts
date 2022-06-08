import { isBrowser } from '@utils/assertions'
import { lightTheme, darkTheme } from './stitches.config'

// types
import type { ThemeType } from './theme-context'

export function getThemeByType(type: ThemeType) {
  return type === 'light' ? lightTheme : darkTheme
}

export function setThemeInHTML(themeType: ThemeType) {
  if (!isBrowser()) return
  const theme = getThemeByType(themeType)
  const html = document.documentElement
  html.dataset.theme = themeType
  html.style.colorScheme = themeType
  html.className = theme
}
