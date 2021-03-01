import * as React from "react";

/* Next */
import Head from "next/head";

/* Components */
import { Header, Hero, Main } from "components";

/* Styles */
import { ThemeProvider } from "@emotion/react";
import { theme } from "styles/";

/* Contexts */
import DarkModeContext from "context/darkMode/context";

export default function Home() {
  const { isDark } = React.useContext(DarkModeContext);
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
          <div
            id="about"
            style={{ backgroundColor: "#1a1a1a", minHeight: "100vh" }}
          />
        </Main>
      </ThemeProvider>
    </React.Fragment>
  );
}
