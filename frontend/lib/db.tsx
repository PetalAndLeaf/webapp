import { db } from './fire'
import { SingUpForm, ProfileStructure, AddressFormType } from '../utils/types'

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

// Common data shared
export const fetchSiteConfig = async () => {
  return await fetchDoc('configs/site')
}
export const fetchFooter = async () => {
  return await fetchDoc('footer/EN')
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

/************************ WRITE *****************************/
const writeDoc = async (
  type: string,
  col: string,
  docID: string,
  data: any
) => {
  if (type === 'set') return await db.doc(`${col}/${docID}`).set(data)
  else return await db.doc(`${col}/${docID}`).update(data)
}

export const createUserProfile = async (userinfo: SingUpForm) => {
  const { uid, email } = userinfo
  const profile = new ProfileStructure({ email: email })
  return await writeDoc('set', 'users', uid, profile)
}

const updateUserProfileField = async (
  uid: string,
  field: string,
  data: any
) => {
  // demonstrate how to user var as key of object in ES6
  const newFieldData = {
    [field]: data
  }
  return await writeDoc('update', 'users', uid, newFieldData)
}

export const updateUserAddress = async (
  addrType: string,
  uid: string,
  address: AddressFormType
) => {
  if (!(addrType === 'shipping' || addrType === 'billing')) {
    return undefined
  }
  return await updateUserProfileField(uid, 'address', { [addrType]: address })
}
