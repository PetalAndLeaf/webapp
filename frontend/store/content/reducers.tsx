import {
  SET_CONFIG,
  SET_FOOTER,
  contentActionTypes,
  contentState,
  GET_PRODUCTLIST,
  GET_PRODCUT,
  GET_PRODUCTSTORY
} from './types'

const initial: contentState = {
  siteConfig: {},
  footer: {},
  productList: null,
  product: null,
  story: null
}

export function contentReducer(
  state = initial,
  action: contentActionTypes
): contentState {
  switch (action.type) {
    case SET_CONFIG: {
      return {
        ...state,
        siteConfig: action.data
      }
    }
    case SET_FOOTER: {
      return {
        ...state,
        footer: action.data
      }
    }
    case GET_PRODUCTLIST: {
      return {
        ...state,
        productList: action.data
      }
    }
    case GET_PRODCUT: {
      return {
        ...state,
        product: action.data
      }
    }
    case GET_PRODUCTSTORY: {
      return {
        ...state,
        story: action.data
      }
    }
    default:
      return state
  }
}
