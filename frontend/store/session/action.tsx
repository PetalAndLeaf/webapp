import { sessionState, UPDATE_SESSION } from './types'

export function updateSession(newSession: sessionState) {
  return {
    type: UPDATE_SESSION,
    payload: newSession
  }
}
