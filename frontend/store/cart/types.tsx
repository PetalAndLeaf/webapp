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

// export interface Item {}
export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const INCREASE_ITEM = 'INCREASE_ITEM'
export const DECREASE_ITEM = 'DECREASE_ITEM'
export interface AddItemAction {
  type: typeof ADD_ITEM
  item: string
}
export interface RemoveItemAction {
  type: typeof REMOVE_ITEM
  item: string
}
export interface IncreaseItemAction {
  type: typeof INCREASE_ITEM
  item: string
}
export interface DecreaseItemAction {
  type: typeof DECREASE_ITEM
  item: string
}

/**************************************************************/
export type cartActionTypes =
  | ToggleSidebarAction
  | ToggleFlyoutAction
  | OpenFlyoutAction
  | CloseFlyoutAction
  | AddItemAction
  | RemoveItemAction
  | IncreaseItemAction
  | DecreaseItemAction
