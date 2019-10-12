import { UPDATE_SESSION, sessionState, sessionActionTypes } from './types'

const initialState: sessionState = {
  loggedIn: false,
  session: '',
  userName: ''
}

export function sessionReducer(
  state = initialState,
  action: sessionActionTypes
): sessionState {
  switch (action.type) {
    case UPDATE_SESSION: {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state
  }
}
