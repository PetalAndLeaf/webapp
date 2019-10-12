/**************************************************************/
export interface cartState {
  items: any[]
  isSidebarOpen: boolean
  isFlyoutOpen: boolean
}

/**************************************************************/

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
export interface ToggleSidebarAction {
  type: typeof TOGGLE_SIDEBAR
}

export const TOGGLE_FLYOUT = 'TOGGLE_FLYOUT'
export const OPEN_FLYOUT = 'OPEN_FLYOUT'
export const CLOSE_FLYOUT = 'CLOSE_FLYOUT'
export interface ToggleFlyoutAction {
  type: typeof TOGGLE_FLYOUT
}
export interface OpenFlyoutAction {
  type: typeof OPEN_FLYOUT
}
export interface CloseFlyoutAction {
  type: typeof CLOSE_FLYOUT
}

/**************************************************************/
export type cartActionTypes =
  | ToggleSidebarAction
  | ToggleFlyoutAction
  | OpenFlyoutAction
  | CloseFlyoutAction
