import { Hero } from '@features/ui'
import Head from 'next/head'

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
