import 'modern-normalize/modern-normalize.css'
import { SSRProvider } from '@react-aria/ssr'
import { Layout } from '@features/ui'
import { globalStyles } from '@theme'

// types
import type { AppProps } from 'next/app'

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

export default App
