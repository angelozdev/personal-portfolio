import * as React from "react";

/* Next */
import Head from "next/head";

/* Components */
import { About, Header, Hero, Main } from "components";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Portfolio - Angelo Zambrano</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider
        theme={{ colors: isDark ? theme.colorsDark : theme.colors }}
      >
        <Header />
        <Main>
          <Hero />
          <About />
        </Main>
      </ThemeProvider>
    </React.Fragment>
  );
}
