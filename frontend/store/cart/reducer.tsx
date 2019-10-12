import {
  TOGGLE_FLYOUT,
  TOGGLE_SIDEBAR,
  cartState,
  cartActionTypes,
  OPEN_FLYOUT,
  CLOSE_FLYOUT,
  REMOVE_ITEM,
  SET_FLYOUT_TIMEOUT,
  CLEAR_FLYOUT_TIMEOUT,
  UPDATE_QUANTITY
} from './types'

const initial: cartState = {
  isFlyoutOpen: false,
  isSidebarOpen: true,
  flyoutTimeout: undefined,
  items: [
    {
      sku: 'rc30',
      name: 'Rose cake',
      size: '30g, 6 counts',
      quantity: 2,
      price: 15
    },
    {
      sku: 'rc50',
      name: 'Rose cake',
      size: '50g, 6 counts',
      quantity: 1,
      price: 18
    },
    {
      sku: 'rc30',
      name: 'Rose cake',
      size: '30g, 6 counts',
      quantity: 2,
      price: 15
    },
    {
      sku: 'rc50',
      name: 'Rose cake',
      size: '50g, 6 counts',
      quantity: 1,
      price: 18
    },
    {
      sku: 'rc30',
      name: 'Rose cake',
      size: '30g, 6 counts',
      quantity: 2,
      price: 15
    },
    {
      sku: 'rc50',
      name: 'Rose cake',
      size: '50g, 6 counts',
      quantity: 1,
      price: 18
    },
    {
      sku: 'rc30',
      name: 'Rose cake',
      size: '30g, 6 counts',
      quantity: 2,
      price: 15
    },
    {
      sku: 'rc50',
      name: 'Rose cake',
      size: '50g, 6 counts',
      quantity: 1,
      price: 18
    },
    {
      sku: 'rc30',
      name: 'Rose cake',
      size: '30g, 6 counts',
      quantity: 2,
      price: 15
    },
    {
      sku: 'rc50',
      name: 'Rose cake',
      size: '50g, 6 counts',
      quantity: 1,
      price: 18
    }
  ]
}

//TODO: replace with real data
const productData: { [s: string]: any } = {
  rc30: {
    name: 'Rose cake',
    size: '30g, 6 counts',
    price: 15
  },
  rc50: {
    name: 'Rose cake',
    size: '50g, 6 counts',
    price: 18
  }
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
    case SET_FLYOUT_TIMEOUT: {
      return {
        ...state,
        flyoutTimeout: action.timeout
      }
    }
    case CLEAR_FLYOUT_TIMEOUT: {
      if (state.flyoutTimeout !== undefined) {
        clearTimeout(state.flyoutTimeout)
      }
      return {
        ...state,
        flyoutTimeout: undefined
      }
    }

    case REMOVE_ITEM: {
      const removeItem = action.itemID
      const items = state.items
      const result = items.slice()
      items.forEach((item, i) => {
        if (item.sku === removeItem) {
          result.splice(i, 1)
          return
        }
      })

      return {
        ...state,
        items: result
      }
    }
    case UPDATE_QUANTITY: {
      const itemID = action.itemID
      const delta = action.delta
      const items = state.items
      const result = items.slice()

      let index = -1
      items.forEach((item, i) => {
        if (item.sku === itemID) {
          index = i
          if (delta + item.quantity <= 0) {
            result.splice(i, 1)
          } else {
            const updatedItem = { ...item, quantity: item.quantity + delta }
            result[i] = updatedItem
          }
          return
        }
      })
      if (index === -1 && delta > 0) {
        const item = {
          ...productData[itemID],
          sku: itemID,
          quantity: delta
        }
        result.unshift(item)
      }
      return {
        ...state,
        items: result
      }
    }
    default:
      return state
  }
}
