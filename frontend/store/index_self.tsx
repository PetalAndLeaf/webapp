// import React from 'react'
// import { initStore } from './store'
// import { Store } from 'redux'

// let reduxStore: Store
// const getOrCreateStore = () => {
//   // Always make a new store if server, otherwise state is shared between requests
//   if (typeof window === 'undefined') {
//     return initStore()
//   }

//   // Create store if unavailable on the client and set it on the window object
//   if (!reduxStore) {
//     reduxStore = initStore()
//   }

//   return reduxStore
// }

// export default function withRedux(PageComponent: any) {
//   class AppWithRedux extends React.Component {
//     static async getInitialProps(appContext: any) {
//       // Get or Create the store with `undefined` as initialState
//       // This allows you to set a custom default initialState
//       const reduxStore = getOrCreateStore()
//       // Provide the store to getInitialProps of pages
//       appContext.ctx.store = reduxStore

//       let appProps = {}
//       if (typeof PageComponent.getInitialProps === 'function') {
//         appProps = await PageComponent.getInitialProps(appContext)
//       }
//       console.log('redux index: ', reduxStore.getState())
//       return {
//         ...appProps,
//         initialReduxState: reduxStore.getState()
//       }
//     }

//     //TODO: understand why

//     reduxStore: any
//     constructor(props: any) {
//       super(props)
//       this.reduxStore = getOrCreateStore()
//     }

//     render() {
//       return <PageComponent {...this.props} store={this.reduxStore} />
//     }
//   }
//   return AppWithRedux
// }
