import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../styles/theme'
import AppContext from '../context/AppContext'

export default class MyApp extends App {
  state = {
    siteConfig: {
      isCheckoutAvailable: false,
      language: 'EN'
    },
    footer: {
      links: []
    }
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

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles !== null && jssStyles.parentNode !== null) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
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
          <AppContext.Provider
            value={{
              siteConfig: this.state.siteConfig,
              setSiteConfig: this.setSiteConfig,
              footer: this.state.footer,
              setFooter: this.setFooter
            }}
          >
            <Component {...pageProps} />
          </AppContext.Provider>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}
