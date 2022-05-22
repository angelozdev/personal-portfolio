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
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
