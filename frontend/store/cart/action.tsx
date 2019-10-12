import {
  TOGGLE_SIDEBAR,
  TOGGLE_FLYOUT,
  OPEN_FLYOUT,
  CLOSE_FLYOUT,
  ADD_ITEM,
  REMOVE_ITEM
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
  console.log('open flyout')
  return {
    type: OPEN_FLYOUT
  }
}
export function closeFlyout() {
  console.log('close flyout')
  return {
    type: CLOSE_FLYOUT
  }
}
export function addItem(item: string) {
  return {
    type: ADD_ITEM,
    item: item
  }
}
export function removeItem(item: string) {
  return {
    type: REMOVE_ITEM,
    item: item
  }
}
