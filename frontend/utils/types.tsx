import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { AppState } from '../store'

/*****************   Redux thunk    ***********************/
export type ThunkAction = ThunkAction<void, AppState, null, Action<string>>

/*****************   General    ***********************/
export type Dictionary = { [index: string]: any }
