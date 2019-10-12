import {
  TOGGLE_SIDEBAR,
  TOGGLE_FLYOUT,
  OPEN_FLYOUT,
  CLOSE_FLYOUT,
  REMOVE_ITEM,
  SET_FLYOUT_TIMEOUT,
  CLEAR_FLYOUT_TIMEOUT,
  UPDATE_QUANTITY,
  SET_QUANTITY
} from './types'

export function toggleSidebar() {
  return {
    type: TOGGLE_SIDEBAR
  }
}
export function toggleFlyout() {
  return {
    type: TOGGLE_FLYOUT
  }
}
export function openFlyout() {
  return {
    type: OPEN_FLYOUT
  }
}
export function closeFlyout() {
  return {
    type: CLOSE_FLYOUT
  }
}
export function setFlyoutTimeout(timeout: number) {
  return {
    type: SET_FLYOUT_TIMEOUT,
    timeout: timeout
  }
}
export function clearFlyoutTimeout() {
  return {
    type: CLEAR_FLYOUT_TIMEOUT
  }
}

/**************************************************************/
/** Manipulation cart items                                   */

/**************************************************************/

// Add an item to cart
// or increase the quantity of an existing item by 1
export function increaseQuantity(itemID: string) {
  return {
    type: UPDATE_QUANTITY,
    itemID: itemID,
    delta: 1
  }
}
// Decrease the quantity of an existing item by 1
export function decreaseQuantity(itemID: string) {
  return {
    type: UPDATE_QUANTITY,
    itemID: itemID,
    delta: -1
  }
}
// Remove an item from cart
export function removeItem(itemID: string) {
  return {
    type: REMOVE_ITEM,
    itemID: itemID
  }
}

// Set the quantity of an existing item
export function setQuantity(itemID: string, quantity: number) {
  return {
    type: SET_QUANTITY,
    itemID: itemID,
    quantity: quantity
  }
}
