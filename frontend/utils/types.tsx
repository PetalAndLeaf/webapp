import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { AppState } from '../store/store'

/*****************   Redux thunk    ***********************/
export type ThunkAction = ThunkAction<void, AppState, null, Action<string>>

/*****************   General    ***********************/
export type Dictionary = { [index: string]: any }

export type SingUpForm = {
  uid: string
  email: string
  name?: string
}

export type ProfileStructure = {
  email: string
  shipping: any
  orders: any
  payment: any
}
