import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { AppState } from '../store/store'

//Solve problems related to property does not exist in window
// 1) import this. 2) "declare let window: CustomWindow" below import
export interface CustomWindow extends Window {
  Stripe: any
}

/*****************   Redux thunk    ***********************/
export type ThunkAction = ThunkAction<void, AppState, null, Action<string>>

/*****************   General    ***********************/
export type SingUpForm = {
  uid: string
  email: string
}

export class ProfileStructure {
  email: string = ''
  addressList: AddressFormType[] = []
  orders: any = []
  payment: any = {}
  constructor(init?: Partial<ProfileStructure>) {
    Object.assign(this, init)
  }
  toObject(): object {
    return {
      email: this.email,
      orders: this.orders,
      payment: this.payment,
      addressList: this.addressList
    }
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
  isDefault?: boolean = false
  isValid: boolean = false
  constructor(init?: Partial<AddressFormType>) {
    Object.assign(this, init)
  }
  toObject(): object {
    return {
      fullname: this.fullname,
      line1: this.line1,
      line2: this.line2,
      city: this.city,
      state: this.state,
      zipcode: this.zipcode,
      phone: this.phone,
      isDefault: this.isDefault
    }
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
