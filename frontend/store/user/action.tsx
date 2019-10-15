import { Dispatch } from 'redux'
import { ThunkAction, SingUpForm } from '../../utils/types'
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
import { createUserProfile } from '../../lib/db'

export function LogInAction(email: string, password: string): ThunkAction {
  return async (dispatch: Dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    try {
      await signInWithEmailAndPassword(email, password)
      dispatch({
        type: LOGIN_SUCCESS
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

export function SignUpAction(email: string, password: string): ThunkAction {
  return async (dispatch: Dispatch) => {
    dispatch({ type: SIGN_UP_REQUEST })
    try {
      //sign up with email and password
      const res = await signUpWithEmailAndPassword(email, password)
      //extract uid from auth res && also make sure it's success before proceed
      const userInfo: SingUpForm = {
        uid: res.user.uid,
        email: email
      }
      const ref = await createUserProfile(userInfo)
      console.log(ref)
      dispatch({
        type: SIGN_UP_SUCCESS
      })
    } catch (err) {
      console.log(err)
      console.log('sign up fail: ', err.code)
      dispatch({ type: SIGN_UP_FAIL, err: err.code })
    }
  }
}
