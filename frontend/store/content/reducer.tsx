import {
  contentActionTypes,
  contentState,
  GET_PRODUCTLIST,
  GET_PRODCUT,
  GET_PRODUCTSTORY
} from './type'

export const initial: contentState = {
  productList: null,
  product: null,
  story: null,
  language: 'EN'
}

export function contentReducer(
  state = initial,
  action: contentActionTypes
): contentState {
  switch (action.type) {
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
