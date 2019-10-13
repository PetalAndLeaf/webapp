import {
  TOGGLE_FLYOUT,
  TOGGLE_SIDEBAR,
  cartState,
  cartActionTypes,
  OPEN_FLYOUT,
  CLOSE_FLYOUT,
  SET_FLYOUT_TIMEOUT,
  CLEAR_FLYOUT_TIMEOUT,
  UPDATE_QUANTITY,
  SET_QUANTITY
} from './types'

const initial: cartState = {
  isFlyoutOpen: false,
  isSidebarOpen: false,
  flyoutTimeout: undefined,
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
    // },
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

    case SET_QUANTITY: {
      const itemID = action.itemID
      const quantity = action.quantity
      const items = state.items
      const result = items.slice()

      items.forEach((item, i) => {
        //find item by id
        if (item.sku === itemID) {
          //if quanity is 0, its REMOVE behavior
          if (quantity === 0) {
            result.splice(i, 1)
          } else if (quantity > 0) {
            //if quanity is posi tive integer, set quantity to the number
            const updatedItem = { ...item, quantity: quantity }
            result[i] = updatedItem
          } else {
            //if quanity is negative, ingnore
          }
          //end looping
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
        //find the item by ID
        if (item.sku === itemID) {
          index = i
          //if quantity will be <0, remove from array
          if (delta + item.quantity <= 0) {
            result.splice(i, 1)
          } else {
            //otherwise, change quantity accordingly
            const updatedItem = { ...item, quantity: item.quantity + delta }
            result[i] = updatedItem
          }
          return
        }
      })
      //if item not exist in array
      //create and move to head of the array
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
