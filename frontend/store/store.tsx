import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { loadState } from './localStorage'

import { sessionReducer } from './session/reducers'
import { userReducer } from './user/reducers'
import { contentReducer } from './content/reducers'
import { cartReducer } from './cart/reducer'
import { isEmpty } from 'lodash'

const rootReducer = combineReducers({
  session: sessionReducer,
  user: userReducer,
  content: contentReducer,
  cart: cartReducer
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
