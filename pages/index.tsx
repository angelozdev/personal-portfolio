import * as React from "react";

/* Next */
import Head from "next/head";

/* Components */
import { About, Contact, Header, Hero, Main } from "components";

/* Contexts */
import DarkModeContext from "context/darkMode/context";
import { SectionLayout } from "components/Layouts";

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
          <SectionLayout title="Frontend Technologies.">
            hola mundo
          </SectionLayout>
        </Main>
      </div>
    </React.Fragment>
  );
}
