import {
  SET_CONFIG,
  SET_FOOTER,
  contentActionTypes,
  contentState,
  GET_PRODUCTLIST,
  GET_PRODCUT,
  GET_PRODUCTSTORY,
  GETTING_FOOTER,
  GOT_FOOTER
} from './types'

const initial: contentState = {
  siteConfig: {},
  footer: {},
  productList: null,
  product: null,
  story: null,
  loading: true
}

export function contentReducer(
  state = initial,
  action: contentActionTypes
): contentState {
  switch (action.type) {
    case GETTING_FOOTER: {
      return {
        ...state,
        loading: true
      }
    }
    case GOT_FOOTER: {
      return {
        ...state,
        loading: false,
        footer: action.data
      }
    }
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
