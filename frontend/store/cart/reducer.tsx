import {
  TOGGLE_FLYOUT,
  TOGGLE_SIDEBAR,
  cartState,
  cartActionTypes,
  OPEN_FLYOUT,
  CLOSE_FLYOUT,
  ADD_ITEM,
  REMOVE_ITEM
} from './types'

const initial: cartState = {
  isFlyoutOpen: false,
  isSidebarOpen: false,
  items: [
    // {
    //   sku: 'rc30',
    //   name: 'Rose cake',
    //   size: '30g, 6 counts',
    //   quantity: 2,
    //   price: 15
    // },
    // {
    //   sku: 'rc50',
    //   name: 'Rose cake',
    //   size: '50g, 6 counts',
    //   quantity: 1,
    //   price: 18
    // }
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
    case ADD_ITEM: {
      const newItem = action.item
      const items = state.items
      const result = items.slice()
      let index = -1
      items.forEach((item, i) => {
        if (item.sku === newItem) {
          index = i
          const updatedItem = { ...item, quantity: item.quantity + 1 }
          result[i] = updatedItem
          return
        }
      })
      if (index === -1) {
        const item = {
          ...productData[newItem],
          sku: newItem,
          quantity: 1
        }
        result.unshift(item)
      }
      return {
        ...state,
        items: result
      }
    }
    case REMOVE_ITEM: {
      const removeItem = action.item
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
    default:
      return state
  }
}
