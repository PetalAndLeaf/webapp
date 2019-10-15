import { db } from './fire'
import { SingUpForm, ProfileStructure } from '../utils/types'

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

/************************ WRITE *****************************/
const createDoc = async (col: string, docID: string, data: any) => {
  return await db.doc(`${col}/${docID}`).set(data)
}

export const createUserProfile = async (userinfo: SingUpForm) => {
  const { uid, email } = userinfo
  const profileStructure: ProfileStructure = {
    email: email,
    shipping: {},
    orders: {},
    payment: {}
  }
  return await createDoc('users', uid, profileStructure)
}
