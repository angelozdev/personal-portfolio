import { ThemeProvider } from '@theme'

// types
import { ComponentType } from 'react'

function withThemeProvider<T>(Component: ComponentType<T>): ComponentType<T> {
  return function WithThemeProvider(props: T) {
    return (
      <ThemeProvider>
        <Component {...props} />
      </ThemeProvider>
    )
  }
}

export default withThemeProvider
