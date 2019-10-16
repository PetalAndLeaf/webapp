import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { isEmpty } from 'lodash'

import { loadState } from '../utils/localStorage'
import { userReducer } from './user/reducer'
import { contentReducer } from './content/reducer'
import { cartReducer } from './cart/reducer'
import { transactionReducer } from './transaction/reducer'

const rootReducer = combineReducers({
  user: userReducer,
  content: contentReducer,
  cart: cartReducer,
  transaction: transactionReducer
})

export type AppState = ReturnType<typeof rootReducer>

export function initStore(initialState: any) {
  const middlewares = [thunkMiddleware]
  const middleWareEnhancer = applyMiddleware(...middlewares)

  //load state from local Storage if exists
  const persistedState = loadState()
  if (!isEmpty(persistedState)) {
    initialState = persistedState.state
  }

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(middleWareEnhancer)
  )

  return store
}
