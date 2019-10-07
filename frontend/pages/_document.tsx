import React from 'react'
import Document, {
  DocumentContext,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { ServerStyleSheets } from '@material-ui/styles'
import theme from '../styles/theme'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const styledComponentsSheet = new ServerStyleSheet()
    const materialSheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            styledComponentsSheet.collectStyles(
              materialSheets.collect(<App {...props} />)
            )
        })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <React.Fragment>
            {initialProps.styles}
            {materialSheets.getStyleElement()}
            {styledComponentsSheet.getStyleElement()}
          </React.Fragment>
        )
      }
    } finally {
      styledComponentsSheet.seal()
    }
  }

  render() {
    return (
      <html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
          />
          {/* PWA primary color */}
          <meta name='theme-color' content={theme.palette.primary.main} />
          <link
            href='https://fonts.googleapis.com/css?family=Lato:400,700|Quicksand:400,600&display=swap'
            rel='stylesheet'
          ></link>
          <script src='https://js.stripe.com/v3/' async></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <style jsx global>{`
            * {
              box-sizing: border-box;
            }
            html {
              scroll-behavior: smooth;
            }
            a {
              text-decoration: none;
            }
            .icon {
              width: 20px;
              height: 20px;
            }
          `}</style>
        </body>
      </html>
    )
  }
}

export default MyDocument

// Resolution order
//
// On the server:
// 1. app.getInitialProps
// 2. page.getInitialProps
// 3. document.getInitialProps
// 4. app.render
// 5. page.render
// 6. document.render
//
// On the server with error:
// 1. document.getInitialProps
// 2. app.render
// 3. page.render
// 4. document.render
//
// On the client
// 1. app.getInitialProps
// 2. page.getInitialProps
// 3. app.render
// 4. page.render
