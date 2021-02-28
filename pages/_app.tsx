import * as React from "react";

/* Styles */
import "normalize.css";
import { globals } from "styles";
import { Global } from "@emotion/react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Global styles={globals} />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
