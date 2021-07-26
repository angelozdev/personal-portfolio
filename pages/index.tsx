import { useContext, Fragment } from "react";

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
  const { theme } = useContext(DarkModeContext);
  return (
    <Fragment>
      <Head>
        <title>Angelo Zambrano | Portfolio</title>
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
    </Fragment>
  );
}
