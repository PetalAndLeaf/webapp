import {
  userState,
  userActionTypes,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  SIGN_OUT,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  AUTH_STATUS_CHANGE
} from './types'

const initialState: userState = {
  logging: false,
  isLoggedin: false,
  signingup: false,
  currentUser: null,
  err: null
}

export function userReducer(
  state = initialState,
  action: userActionTypes
): userState {
  switch (action.type) {
    case AUTH_STATUS_CHANGE:
      return {
        ...state,
        currentUser: action.user,
        isLoggedin: action.isLoggedin
      }
    /*****************   LOGIN    ***********************/
    case LOGIN_REQUEST:
      console.log('login request')
      return {
        ...state,
        logging: true,
        err: null
      }
    case LOGIN_SUCCESS:
      console.log('login succuess')
      return {
        ...state,
        logging: false
      }
    case LOGIN_FAIL:
      console.log('login fail')
      return {
        ...state,
        logging: false,
        err: action.err
      }
    /*****************   SIGN UP    ***********************/
    case SIGN_UP_REQUEST:
      console.log('request create new user')
      return {
        ...state,
        signingup: true,
        err: null
      }
    case SIGN_UP_SUCCESS:
      console.log('user created')
      return {
        ...state,
        signingup: false
      }
    case SIGN_UP_FAIL:
      console.log('creat user fail')
      return {
        ...state,
        signingup: false,
        err: action.err
      }
    /*****************   SIGN OUT   ***********************/
    case SIGN_OUT:
      console.info('signed out')
      return {
        ...state,
        err: null
      }
    default:
      return state
  }
}
