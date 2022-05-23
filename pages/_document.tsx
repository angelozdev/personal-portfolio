import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps
} from 'next/document'
import React from 'react'
import { transformCSS } from '@utils/css'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const { styles, ...initialProps } = await Document.getInitialProps(ctx)
    const css = await transformCSS()
    return {
      ...initialProps,
      styles: [
        <React.Fragment key="styles">
          <style id="stitches" dangerouslySetInnerHTML={{ __html: css }} />
          {styles}
        </React.Fragment>
      ]
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700&display=swap"
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
