import 'modern-normalize/modern-normalize.css'
import React from 'react'
import { SSRProvider } from '@react-aria/ssr'
import { Layout } from '@features/ui'
import { globalStyles } from '@theme'

// types
import type { AppProps } from 'next/app'
import { useTheme } from '@hooks'
import { withThemeProvider } from '@hocs'

function App({ Component, pageProps }: AppProps) {
  globalStyles()
  const { type, theme } = useTheme()

  React.useEffect(() => {
    const html = document.documentElement
    html.dataset.theme = type
    html.style.colorScheme = type
    html.className = theme
  }, [type, theme])

  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  )
}

export default withThemeProvider(App)
