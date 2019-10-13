import {
  userState,
  userActionTypes,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  SIGN_OUT,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL
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
    /*****************   LOGIN    ***********************/
    case LOGIN_REQUEST:
      console.log('request login request')
      return {
        ...state,
        logging: true
      }
    case LOGIN_SUCCESS:
      console.log('login succuess')
      return {
        ...state,
        logging: false,
        isLoggedin: true,
        currentUser: action.user
      }
    case LOGIN_FAIL:
      console.log('login fail')
      return {
        ...state,
        isLoggedin: false,
        logging: false,
        err: action.err
      }
    /*****************   SIGN UP    ***********************/
    case SIGN_UP_REQUEST:
      console.log('request create new user')
      return {
        ...state,
        signingup: true
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
        signingup: false
      }
    /*****************   SIGN OUT   ***********************/
    case SIGN_OUT:
      console.log('request login request')
      return {
        ...state,
        isLoggedin: false,
        currentUser: null
      }
    default:
      return state
  }
}
