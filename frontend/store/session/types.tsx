// Describing the shape of the system's slice of state
export interface sessionState {
  loggedIn: boolean
  session: string
  userName: string
}

// Describing the different ACTION NAMES available
export const UPDATE_SESSION = 'UPDATE_SESSION'

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION
  payload: sessionState
}

export type sessionActionTypes = UpdateSessionAction
