import { Layout } from '@features/ui'
import 'modern-normalize/modern-normalize.css'

// types
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
