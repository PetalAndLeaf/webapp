import {
  TOGGLE_SIDEBAR,
  TOGGLE_FLYOUT,
  OPEN_FLYOUT,
  CLOSE_FLYOUT
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
