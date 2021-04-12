import * as React from "react";

/* Next */
import Head from "next/head";

/* Components */
import {
  About,
  BackendTechnologies,
  Contact,
  FrontendTechnologies,
  Header,
  Hero,
  Main,
} from "components";

/* Contexts */
import DarkModeContext from "context/darkMode/context";

export default function Home() {
  const { theme } = React.useContext(DarkModeContext);
  return (
    <React.Fragment>
      <Head>
        <title>Portfolio - Angelo Zambrano</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div data-theme={`${theme}-theme`}>
        <Header />
        <Main>
          <Hero />
          <About />
          <Contact />
          <FrontendTechnologies />
          <BackendTechnologies />
        </Main>
      </div>
    </React.Fragment>
  );
}
