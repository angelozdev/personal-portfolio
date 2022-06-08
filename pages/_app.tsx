import 'modern-normalize/modern-normalize.css'
import { SSRProvider } from '@react-aria/ssr'

// components
import { Layout } from '@features/ui'

// utils
import { globalStyles, setThemeInHTML } from '@theme'
import { withThemeProvider } from '@hocs'

// types
import type { AppProps } from 'next/app'

setThemeInHTML('light')
function App({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  )
}

export default withThemeProvider(App)
