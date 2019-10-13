import { Dispatch } from 'redux'
import { ThunkAction } from '../typeDef'
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  SIGN_OUT,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL
} from './types'
import {
  signInWithEmailAndPassword,
  signOut,
  signUpWithEmailAndPassword
} from '../../lib/auth'

export function LogInAction(email: string, password: string): ThunkAction {
  return async (dispatch: Dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    try {
      const res = await signInWithEmailAndPassword(email, password)
      console.log('loggined')
      dispatch({
        type: LOGIN_SUCCESS,
        user: res.user
      })
    } catch (err) {
      console.log('login fail: ', err.code)
      dispatch({ type: LOGIN_FAIL, err: err })
    }
  }
}

export function SignOutAction(): ThunkAction {
  return async (dispatch: Dispatch) => {
    try {
      const res = signOut()
      console.log('signed out ', res)
      dispatch({ type: SIGN_OUT })
    } catch (err) {
      console.log('singout fail: ', err.code)
    }
  }
}

export function SignUpAction(email: string, password: string): ThunkAction {
  return async (dispatch: Dispatch) => {
    dispatch({ type: SIGN_UP_REQUEST })
    try {
      const res = await signUpWithEmailAndPassword(email, password)
      console.log('sign up', res)
      dispatch({
        type: SIGN_UP_SUCCESS
      })
    } catch (err) {
      console.log('sign up fail: ', err)
      // auth/email-already-in-use
      // auth/invalid-email
      // auth/weak-password
      dispatch({ type: SIGN_UP_FAIL, err: err.code })
    }
  }
}
