import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { StripeProvider } from 'react-stripe-elements'
import theme from '../styles/theme'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store/store'

interface AppProps {
  store: any
}

class MyApp extends App<AppProps> {
  state = {
    stripe: null
  }

  setCartOpen = (cartState: boolean) => {
    this.setState({
      cartOpen: cartState
    })
  }
  setCartItems = (items: any[]) => {
    this.setState({
      cartItem: items
    })
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles !== null && jssStyles.parentNode !== null) {
      jssStyles.parentNode.removeChild(jssStyles)
    }

    this.setState({
      siteConfig: this.props.pageProps.siteConfig,
      footer: this.props.pageProps.footer,
      stripe: (window as any).Stripe(
        'pk_test_QfQzDbJELK5gRsHplgEPSiCC00N6OZr9fZ'
      )
    })
  }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <React.Fragment>
        <Head>
          <title>Petal and Leaf</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Provider store={store}>
            <StripeProvider stripe={this.state.stripe}>
              <Component {...pageProps} />
            </StripeProvider>
          </Provider>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default withRedux(initStore)(MyApp)
