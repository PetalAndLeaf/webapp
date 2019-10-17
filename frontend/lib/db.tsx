import { db, fieldDelete } from './fire'
import { SingUpForm, ProfileStructure } from '../utils/types'
// import { toPureObjectArray } from '../utils/helper'

/********* *******    NOTICE ON AUTH ******* *************/
/* ALL  read and write operation assumes that user is signed in
 ** this check is done in 1) action createors at client
 ** and 2) firestore rule in database */

/************************ READ *****************************/
const fetchDoc = async (path: string) => {
  const docRef = await db.doc(path).get()
  const doc = docRef.data()
  return doc
}

const fetchDocs = async (collection: string, orderBy: string = '') => {
  const docsQuerySnapshot = await db
    .collection(collection)
    .orderBy(orderBy)
    .get()

  const docs: any[] = []
  docsQuerySnapshot.forEach((doc: any) => {
    docs.push({ ...doc.data(), id: doc.id })
  })
  return docs
}

// Home page data
export const fetchProductList = async () => {
  return await fetchDocs('products', 'order')
}

// Product detail page data
export const fetchProduct = async (id: string) => {
  return await fetchDoc(`products/${id}`)
}
export const fetchProductStory = async (id: string) => {
  return await fetchDoc(`products/${id}/stories/2019EN`)
}

export const getUserProfile = async (uid: string) => {
  return await fetchDoc(`users/${uid}`)
}

// Listener for User Profile Data
// return unsubscriobe function
// pass as return in useEffect hook to
// unsubscriobe when component unmount
// For Account/Address USE
export function onUserProfileChange(
  uid: string,
  onNext: (snapshot: any) => void,
  onError: (error: any) => void
) {
  return db.doc(`users/${uid}`).onSnapshot(onNext, onError)
}

// const getAddress = (snapshot: any) => {
//   const addressList = snapshot.data().addressList
//   addressList && setAddresses(addressList)
// }
// const getAddrErr = (err: any) => {
//   console.log(err)
// }
// export const userAddressListener = (uid: string, getUserAddr: Function) => {
//   onUserProfileChange(uid, getAddress, getAddrErr)
// }

/*********************** WRITE  BASIC OPERATIONS*******************/
const writeDoc = async (
  type: string,
  col: string,
  docID: string,
  data: any
) => {
  const path = `${col}/${docID}`
  try {
    // const docRef = db.doc(`${col}/${docID}`)
    switch (type) {
      case 'set':
        return await db.doc(path).set(data)
      case 'update':
        return await db.doc(path).update(data)
      case 'delete': //delete ENTIRE DOC, NOT A FIELD
        return await db.doc(path).delete()
      case 'deleteField': //see firebase reference
        const removeSytax = {
          [data]: fieldDelete
        }
        return await db.doc(path).update(removeSytax)
      default:
        console.log('Incorrect firebase write opertion type')
    }
  } catch (err) {
    console.log('Firebase Write to Doc Err ', err)
  }
}
/******************************************************************/

export const deleteUserField = async (uid: string, fieldToRemove: string) => {
  try {
    await writeDoc('deleteField', 'users', uid, fieldToRemove)
  } catch (err) {
    console.log('err delete field ', err)
  }
}

export const createUserProfile = async (userinfo: SingUpForm) => {
  const { uid, email } = userinfo
  const profile = new ProfileStructure({ email: email })
  try {
    await writeDoc('set', 'users', uid, profile.toObject())
  } catch (err) {
    console.log('Firebase Create Doc Err ', err)
  }
}

const updateUserProfileField = async (
  uid: string,
  field: string,
  data: any
) => {
  // demonstrate how to user var as key of object in ES6
  console.log(`update: {${JSON.stringify(field)} : ${JSON.stringify(data)} }`)
  const newFieldData = {
    [field]: data
  }
  try {
    await writeDoc('update', 'users', uid, newFieldData)
  } catch (err) {
    console.log(err)
  }
}

//including update already exist and delete from the list.
export const updateUserAddress = async (uid: string, addressList: any[]) => {
  try {
    return await updateUserProfileField(uid, 'addressList', addressList)
  } catch (err) {
    console.log('err updateUserAddress', err)
  }
}

export const deleteUserAddress = async (uid: string) => {
  return uid
}
