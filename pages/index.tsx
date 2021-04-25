import * as React from "react";

/* Next */
import Head from "next/head";

/* Components */
import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Main,
  Projects,
  Technologies,
} from "components";

/* Contexts */
import DarkModeContext from "context/darkMode/context";

/* Fixtures */
import { backendTechnologies, frontendTechnologies } from "fixtures";

export default function Home() {
  const { theme } = React.useContext(DarkModeContext);
  return (
    <React.Fragment>
      <Head>
        <title>Angelo Zambrano | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div data-theme={`${theme}-theme`}>
        <Header />
        <Main>
          <Hero />
          <About />
          <Contact />
          <Technologies
            id="skills"
            title="Frontend Technologies."
            technologies={frontendTechnologies}
          />
          <Technologies
            title="Backend Technologies."
            technologies={backendTechnologies}
          />

          <Projects id="projects" />
        </Main>

        <Footer />
      </div>
    </React.Fragment>
  );
}
