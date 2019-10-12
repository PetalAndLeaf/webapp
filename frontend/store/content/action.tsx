import {
  SET_CONFIG,
  SET_FOOTER,
  GET_PRODUCTLIST,
  GET_PRODCUT,
  GET_PRODUCTSTORY
} from './types'
import {
  fetchSiteConfig,
  fetchFooter,
  fetchProductList,
  fetchProduct,
  fetchProductStory
} from '../../lib/db'
import { Dispatch, Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AppState } from '../store'

export function setConfig(): ThunkAction<void, AppState, null, Action<string>> {
  return async (dispatch: Dispatch) => {
    try {
      return dispatch({
        type: SET_CONFIG,
        data: await fetchSiteConfig()
      })
    } catch (error) {
      console.error('Error fetch global config' + error)
      // dispatch({
      //   type: 'AN_ACTION' // or, better, 'FAILED_ACTION' or something like that
      // });
    }
  }
}

export function setFooter(): ThunkAction<void, AppState, null, Action<string>> {
  return async (dispatch: Dispatch) => {
    try {
      return dispatch({
        type: SET_FOOTER,
        data: await fetchFooter()
      })
    } catch (error) {
      console.error('Error fetch footer' + error)
    }
  }
}

export function getProductList(): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> {
  return async (dispatch: Dispatch) => {
    try {
      return dispatch({
        type: GET_PRODUCTLIST,
        data: await fetchProductList()
      })
    } catch (error) {
      console.error('Error fetch footer' + error)
    }
  }
}

export function getProduct(
  id: any
): ThunkAction<void, AppState, null, Action<string>> {
  return async (dispatch: Dispatch) => {
    try {
      return dispatch({
        type: GET_PRODCUT,
        data: await fetchProduct(id)
      })
    } catch (error) {
      console.error('Error fetch footer' + error)
    }
  }
}

export function getProductStory(
  id: any
): ThunkAction<void, AppState, null, Action<string>> {
  return async (dispatch: Dispatch) => {
    try {
      return dispatch({
        type: GET_PRODUCTSTORY,
        data: await fetchProductStory(id)
      })
    } catch (error) {
      console.error('Error fetch footer' + error)
    }
  }
}
