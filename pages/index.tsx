import Head from 'next/head'
import { Hero } from '@features/ui'

function Home() {
  return (
    <>
      <Head>
        <title>About | Angelo Zambrano</title>
      </Head>
      <Hero
        title="Angelo Zambrano"
        subtitle="Frontend Developer | React.js | TypeScript - JavaScript"
      />
    </>
  )
}

export default Home
