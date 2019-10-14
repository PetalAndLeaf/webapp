import { Dispatch } from 'redux'
import { ThunkAction } from '../../utils/types'
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  SIGN_OUT,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  AUTH_STATUS_CHANGE
} from './types'
import {
  signInWithEmailAndPassword,
  signOut,
  signUpWithEmailAndPassword
} from '../../lib/auth'
import { auth } from '../../lib/fire'

export function LogInAction(email: string, password: string): ThunkAction {
  return async (dispatch: Dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    try {
      await signInWithEmailAndPassword(email, password)
      dispatch({
        type: LOGIN_SUCCESS
        // user: res.user
      })
    } catch (err) {
      console.log('login fail: ', err.code)
      dispatch({ type: LOGIN_FAIL, err: err.code })
    }
  }
}

export function SignOutAction(): ThunkAction {
  return async (dispatch: Dispatch) => {
    try {
      signOut()
      dispatch({ type: SIGN_OUT })
    } catch (err) {
      console.log('singout fail: ', err.code)
    }
  }
}

// export const SignOutAction = (): ThunkAction => signOut()

export function SignUpAction(email: string, password: string): ThunkAction {
  return async (dispatch: Dispatch) => {
    dispatch({ type: SIGN_UP_REQUEST })
    try {
      await signUpWithEmailAndPassword(email, password)
      dispatch({
        type: SIGN_UP_SUCCESS
      })
    } catch (err) {
      console.log('sign up fail: ', err.code)
      dispatch({ type: SIGN_UP_FAIL, err: err.code })
    }
  }
}

// Auth Status Tracking
export function onAuthStatusChange(store: any) {
  auth.onAuthStateChanged((user: any) => {
    console.log('auth status: ', user)
    store.dispatch({
      type: AUTH_STATUS_CHANGE,
      status: user
    })
  })
}
