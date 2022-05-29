import { useContext } from 'react'
import { ThemeContext } from '@theme'

function useTheme() {
  const themeContext = useContext(ThemeContext)
  if (!themeContext) {
    throw new Error('ThemeContext not found')
  }

  return themeContext
}

export default useTheme
