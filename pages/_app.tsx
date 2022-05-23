import 'modern-normalize/modern-normalize.css'
import { Layout } from '@features/ui'
import { globalStyles } from '@theme'

// types
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
