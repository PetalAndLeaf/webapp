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
import { Dispatch, Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AppState } from '../store'

export function setConfig(): ThunkAction<void, AppState, null, Action<string>> {
  return async (dispatch: Dispatch) => {
    try {
      const siteConfig = await fetchSiteConfig()
      console.log('fetch config ' + siteConfig)
      return dispatch({
        type: SET_CONFIG,
        data: siteConfig
      })
    } catch (error) {
      console.log('Error fetch global config' + error)
      // dispatch({
      //   type: 'AN_ACTION' // or, better, 'FAILED_ACTION' or something like that
      // });
    }
  }
}

export function setFooter(): ActionCreator<any> {
  return async (dispatch: Dispatch) => {
    try {
      const footer = await fetchFooter()
      console.log('fetch footer: ' + footer)
      return dispatch({
        type: SET_FOOTER,
        data: footer
      })
    } catch (error) {
      console.log('Error fetch footer' + error)
    }
  }
}

export const getFooterActionCreator: ActionCreator<any> = () => {
  return async (dispatch: Dispatch) => {
    const gettingFooterAction: any = {
      type: 'GettingFooter'
    }
    dispatch(gettingFooterAction)
    const footer = await fetchFooter()
    const gotFooterAction: any = {
      data: footer,
      type: 'GotFooter'
    }
    return dispatch(gotFooterAction)
  }
}

export function getProductList(): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> {
  return async (dispatch: Dispatch) => {
    console.log('fetch prodcutlist')
    try {
      return dispatch({
        type: GET_PRODUCTLIST,
        data: await fetchProductList()
      })
    } catch (error) {
      console.log('Error fetch footer' + error)
    }
  }
}

export function getProduct(
  id: any
): ThunkAction<void, AppState, null, Action<string>> {
  return async (dispatch: Dispatch) => {
    console.log('fetch product ' + id)
    try {
      return dispatch({
        type: GET_PRODCUT,
        data: await fetchProduct(id)
      })
    } catch (error) {
      console.log('Error fetch footer' + error)
    }
  }
}

export function getProductStory(
  id: any
): ThunkAction<void, AppState, null, Action<string>> {
  return async (dispatch: Dispatch) => {
    try {
      console.log('fetch story ' + id)
      return dispatch({
        type: GET_PRODUCTSTORY,
        data: await fetchProductStory(id)
      })
    } catch (error) {
      console.log('Error fetch footer' + error)
    }
  }
}
