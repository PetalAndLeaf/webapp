import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { AppState } from './store'

export type ThunkAction = ThunkAction<void, AppState, null, Action<string>>
