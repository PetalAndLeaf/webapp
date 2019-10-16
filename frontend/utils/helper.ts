import { AddressFormType } from './types'

export const objectToMap = (sth: object) => {
  return new Map(Object.entries(sth))
}

export const AddressToPureObjectArray = (typedArray: AddressFormType[]) => {
  const result = typedArray.map((addr: AddressFormType) => {
    delete addr.errors
    delete addr.isValid
    return addr
  })
  return result
}

//TODO: why toObject is not a function err
// export const AddressToPureObjectArray = (typedArray: AddressFormType[]) => {
//   const result = typedArray.map((addr: AddressFormType) => {
//     return addr.toObject()
//   })
//   return result
// }
