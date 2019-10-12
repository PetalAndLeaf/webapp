import {
  userState,
  SEND_MESSAGE,
  DELETE_MESSAGE,
  userActionTypes
} from './types'

const initialState: userState = {
  messages: []
}

export function userReducer(
  state = initialState,
  action: userActionTypes
): userState {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        messages: [...state.messages, action.payload]
      }
    case DELETE_MESSAGE:
      return {
        messages: state.messages.filter(
          message => message.timestamp !== action.meta.timestamp
        )
      }
    default:
      return state
  }
}
