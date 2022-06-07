import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { processCSS } from '@utils/css'
import { __DEV__ } from '@utils/assertions'
import { getCssText } from '@theme'

// types
import type { DocumentContext, DocumentInitialProps } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const { styles, ...initialProps } = await Document.getInitialProps(ctx)
    const cssTextFromStitches = getCssText()
    const css = await Promise.resolve(
      __DEV__ ? cssTextFromStitches : processCSS(cssTextFromStitches)
    )

    return {
      ...initialProps,
      styles: [
        <React.Fragment key="stitches">
          <style id="stitches" dangerouslySetInnerHTML={{ __html: css }} />
          {styles}
        </React.Fragment>
      ]
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="My website where you can find my most important projects, some details about me and my social networks."
          />

          <meta name="author" content="Angelo Zambrano" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
