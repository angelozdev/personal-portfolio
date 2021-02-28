import * as React from "react";

/* Next */
import Head from "next/head";

/* Components */
import { Header, Main } from "components";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Portfolio - Angelo Zambrano</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main>
        <div style={{ minHeight: "120vh" }}>Lorem</div>
      </Main>
    </React.Fragment>
  );
}
