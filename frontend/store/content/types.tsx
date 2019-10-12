/**************************************************************/
export interface contentState {
  siteConfig: any
  footer: any
  productList: any
  product: any
  story: any
  loading: boolean
}

/**************************************************************/

export interface Config {}
export const SET_CONFIG = 'SET_CONFIG'
export interface SetConfigAction {
  type: typeof SET_CONFIG
  data: Config
}

export interface Footer {}
export const SET_FOOTER = 'SET_FOOTER'
export const GETTING_FOOTER = 'GettingFooter'
export const GOT_FOOTER = 'GotFooter'
export interface SetFooterAction {
  type: typeof SET_FOOTER
  data: Footer
}
export interface GettingFooterAction {
  type: typeof GETTING_FOOTER
}
export interface GotFooterAction {
  type: typeof GOT_FOOTER
  data: Footer
}

export interface ProductList {}
export const GET_PRODUCTLIST = 'GET_PRODUCTLIST'
export interface GetProductlistAction {
  type: typeof GET_PRODUCTLIST
  data: ProductList
}

export interface Prodcut {}
export const GET_PRODCUT = 'GET_PRODCUT'
export interface getProductAction {
  type: typeof GET_PRODCUT
  data: Prodcut
}

export interface Story {}
export const GET_PRODUCTSTORY = 'GET_PRODUCTSTORY'
export interface getProductStoryAction {
  type: typeof GET_PRODUCTSTORY
  data: Story
}

/**************************************************************/
export type SysActionTypes =
  | SetConfigAction
  | SetFooterAction
  | GettingFooterAction
  | GotFooterAction
export type ProductActionTypes =
  | GetProductlistAction
  | getProductAction
  | getProductStoryAction

export type contentActionTypes = SysActionTypes | ProductActionTypes
