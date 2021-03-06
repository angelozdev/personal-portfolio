import * as React from "react";

/* Next */
import Head from "next/head";

/* Components */
import { About, Header, Hero, Main } from "components";

/* Styles */
import { ThemeProvider } from "@emotion/react";
import { themeColors } from "styles/theme";

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

      <ThemeProvider theme={{ colors: themeColors[theme] }}>
        <Header />
        <Main>
          <Hero />
          <About />
        </Main>
      </ThemeProvider>
    </React.Fragment>
  );
}
