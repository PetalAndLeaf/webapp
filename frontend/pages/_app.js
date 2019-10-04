import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../styles/theme'
import AppContext from '../context/AppContext'
import { AnimatePresence } from 'framer-motion'

export default class MyApp extends App {
  state = {
    siteConfig: {}
  }

  setSiteConfig = config => {
    this.setState({
      ...this.state,
      siteConfig: config
    })
  }
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
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
              setSiteConfig: this.setSiteConfig
            }}
          >
            <AnimatePresence>
              <Component {...pageProps} />
            </AnimatePresence>
          </AppContext.Provider>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}
