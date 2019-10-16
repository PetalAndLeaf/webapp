import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { AppState } from '../store/store'

/*****************   Redux thunk    ***********************/
export type ThunkAction = ThunkAction<void, AppState, null, Action<string>>

/*****************   General    ***********************/
export type SingUpForm = {
  uid: string
  email: string
  name?: string
}

export class ProfileStructure {
  email: string = ''
  address: any = {}
  orders: any = {}
  payment: any = {}
  constructor(init?: Partial<ProfileStructure>) {
    Object.assign(this, init)
  }
}

export class AddressFormType {
  fullname: string = ''
  line1: string = ''
  line2: string = ''
  city: string = ''
  state: string = ''
  zipcode: string = ''
  phone: string = ''
  formattedPhone: string = ''
  errors?: any = {}
  isDefault?: boolean
  isValid: boolean = false
  constructor(init?: Partial<AddressFormType>) {
    Object.assign(this, init)
  }
}

export const errorMsgMap = new Map([
  ['auth/user-not-found', 'Your email or password is incorrect. Try again.'],
  ['auth/invalid-email', 'Invalid email'],
  ['auth/wrong-password', 'Your email or password is incorrect. Try again.'],
  [
    'auth/email-already-in-use',
    'Looks like you already have an account. Please log in instead.'
  ],
  ['auth/weak-password', 'Your password has to be at least 6 characters.']
])
