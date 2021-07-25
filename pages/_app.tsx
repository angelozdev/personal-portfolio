import { Fragment } from "react";

/* Next */
import Head from "next/head";

/* Styles */
import "modern-normalize/modern-normalize.css";
import { globals } from "styles";
import { Global } from "@emotion/react";

/* Context */
import DarkModeProvider from "context/darkMode/provider";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=optional"
          rel="preload"
          as="style"
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
