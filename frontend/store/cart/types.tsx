/**************************************************************/
export interface cartState {
  items: any[]
  isSidebarOpen: boolean
  isFlyoutOpen: boolean
  flyoutTimeout: number | undefined
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

export const SET_FLYOUT_TIMEOUT = 'SET_FLYOUT_TIMEOUT'
export const CLEAR_FLYOUT_TIMEOUT = 'CLEAR_FLYOUT_TIMEOUT'
export interface SetFlyoutTimeout {
  type: typeof SET_FLYOUT_TIMEOUT
  timeout: number
}
export interface ClearFlyoutTimeout {
  type: typeof CLEAR_FLYOUT_TIMEOUT
}

export const REMOVE_ITEM = 'REMOVE_ITEM'
export const SET_QUANTITY = 'SET_QUANTITY'
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY'
export interface SetQuantityAction {
  type: typeof SET_QUANTITY
  itemID: string
  quantity: number
}
export interface UpdateQuantity {
  type: typeof UPDATE_QUANTITY
  itemID: string
  delta: number
}

/**************************************************************/
export type cartActionTypes =
  | ToggleSidebarAction
  | ToggleFlyoutAction
  | OpenFlyoutAction
  | CloseFlyoutAction
  | SetQuantityAction
  | UpdateQuantity
  | SetFlyoutTimeout
  | ClearFlyoutTimeout
