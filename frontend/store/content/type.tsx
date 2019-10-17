/**************************************************************/
export interface contentState {
  productList: any
  product: any
  story: any
  language: string
}

/**************************************************************/

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
export type ProductActionTypes =
  | GetProductlistAction
  | getProductAction
  | getProductStoryAction

export type contentActionTypes = ProductActionTypes
