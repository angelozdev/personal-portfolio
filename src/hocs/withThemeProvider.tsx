import React from 'react'
import { ThemeProvider } from '@theme'

function withThemeProvider<T>(Component: React.ComponentType<T>) {
  return function WithThemeProvider(props: T) {
    return (
      <ThemeProvider>
        <Component {...props} />
      </ThemeProvider>
    )
  }
}

export default withThemeProvider
