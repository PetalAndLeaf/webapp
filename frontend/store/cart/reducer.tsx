import {
  TOGGLE_FLYOUT,
  TOGGLE_SIDEBAR,
  cartState,
  cartActionTypes,
  OPEN_FLYOUT,
  CLOSE_FLYOUT
} from './types'

const initial: cartState = {
  isFlyoutOpen: false,
  isSidebarOpen: false,
  items: [
    {
      name: 'Rose cake',
      sku: '30g, 6 counts',
      quantity: 1,
      price: 15
    }
  ]
}

export function cartReducer(
  state = initial,
  action: cartActionTypes
): cartState {
  switch (action.type) {
    case TOGGLE_FLYOUT: {
      return {
        ...state,
        isFlyoutOpen: !state.isFlyoutOpen
      }
    }
    case TOGGLE_SIDEBAR: {
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen
      }
    }
    case OPEN_FLYOUT: {
      return {
        ...state,
        isFlyoutOpen: true
      }
    }
    case CLOSE_FLYOUT: {
      return {
        ...state,
        isFlyoutOpen: false
      }
    }
    default:
      return state
  }
}
