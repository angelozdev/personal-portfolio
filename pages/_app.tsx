import { Fragment } from "react";

/* Next */
import Head from "next/head";

/* Styles */
import "normalize.css";
import { globals } from "styles";
import { Global } from "@emotion/react";

/* Context */
import DarkModeProvider from "context/darkMode/provider";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <DarkModeProvider>
        <Global styles={globals} />
        <Component {...pageProps} />
      </DarkModeProvider>
    </Fragment>
  );
}

export default MyApp;
