import { Dispatch } from 'redux'
import { ThunkAction } from '../../utils/types'
import { isEmpty } from 'lodash'
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
      // console.log('loggined, user: ', JSON.stringify(res.user))
      dispatch({
        type: LOGIN_SUCCESS,
        user: res.user
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
      const res = signOut()
      if (!isEmpty(res)) dispatch({ type: SIGN_OUT })
      else {
        console.error('err logging out')
      }
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
      // console.log('sign up', JSON.stringify(res.user))
      dispatch({
        type: SIGN_UP_SUCCESS,
        user: res.user
      })
    } catch (err) {
      console.log('sign up fail: ', err.code)
      dispatch({ type: SIGN_UP_FAIL, err: err.code })
    }
  }
}
