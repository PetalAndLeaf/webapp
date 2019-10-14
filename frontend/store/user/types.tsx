// Describing the shape of the chat's slice of state
export interface userState {
  logging: boolean
  isLoggedin: boolean
  signingup: boolean
  currentUser: any
  err: any
}

/********* ********   LOGIN   TYPES ***********************/
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export interface LoginRequstAction {
  type: typeof LOGIN_REQUEST
  email: string
  password: string
}
export interface LoginSuccuessAaction {
  type: typeof LOGIN_SUCCESS
  user: any
}
export interface LoginFailAction {
  type: typeof LOGIN_FAIL
  err: string
}
/**********************************************************/

/********* ********   SIGN OUT   TYPES ***********************/
export const SIGN_OUT = 'SIGN_OUT'
export interface SignOutAction {
  type: typeof SIGN_OUT
}

/********* ********   SIGN UP   TYPES ***********************/
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAIL = 'SIGN_UP_FAIL'
export interface SignUpReuestAction {
  type: typeof SIGN_UP_REQUEST
}
export interface SignUpSuccessAction {
  type: typeof SIGN_UP_SUCCESS
  user: any
}
export interface SignUpFailAction {
  type: typeof SIGN_UP_FAIL
  err: string
}
/**********************************************************/

export type LogInTypes =
  | LoginRequstAction
  | LoginSuccuessAaction
  | LoginFailAction
export type SignUpTypes =
  | SignUpReuestAction
  | SignUpSuccessAction
  | SignUpFailAction

export type userActionTypes = LogInTypes | SignUpTypes | SignOutAction
