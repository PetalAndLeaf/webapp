import React from 'react'
import App, { AppContext } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../styles/theme'
import GlobalContext from '../context/GlobalContext'
import { fetchSiteConfig, fetchFooter } from '../lib/dataFetch'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps: any
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    if (typeof window === 'undefined') {
      try {
        const siteConfig = await fetchSiteConfig()
        console.log('_app: fetching siteConfig from db')
        const footer = await fetchFooter()
        pageProps.siteConfig = siteConfig
        pageProps.footer = footer
      } catch (error) {
        console.log('Error fetch global config' + error)
      }
    }

    return { pageProps }
  }
  state = {
    siteConfig: {},
    footer: {}
  }

  setSiteConfig = (config: object) => {
    this.setState({
      siteConfig: config
    })
  }

  setFooter = (footer: object) => {
    this.setState({
      footer: footer
    })
  }

  async componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles !== null && jssStyles.parentNode !== null) {
      jssStyles.parentNode.removeChild(jssStyles)
    }

    console.log(`_app`)

    this.setState({
      siteConfig: this.props.pageProps.siteConfig,
      footer: this.props.pageProps.footer
    })
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <Head>
          <title>Petal and Leaf</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <GlobalContext.Provider
            value={{
              siteConfig: this.state.siteConfig,
              setSiteConfig: this.setSiteConfig,
              footer: this.state.footer,
              setFooter: this.setFooter
            }}
          >
            <Component {...pageProps} />
          </GlobalContext.Provider>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}
