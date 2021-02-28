import * as React from "react";

/* Next */
import Head from "next/head";

/* Components */
import { Header, Hero, Main } from "components";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Portfolio - Angelo Zambrano</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main>
        <Hero />
        <div
          id="about"
          style={{ backgroundColor: "#1a1a1a", minHeight: "100vh" }}
        />
      </Main>
    </React.Fragment>
  );
}
