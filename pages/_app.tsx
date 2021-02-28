import * as React from "react";

/* Next */
import Head from "next/head";

/* Styles */
import "normalize.css";
import { globals, theme } from "styles";

import { Global, ThemeProvider } from "@emotion/react";

function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = React.useState<boolean>(true);

  return (
    <React.Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ThemeProvider
        theme={{ colors: isDark ? theme.colorsDark : theme.colors }}
      >
        <Global styles={globals} />

        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
