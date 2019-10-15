import * as admin from 'firebase-admin'

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://petalleafweb.firebaseio.com'
})

export const db = admin.firestore()
export const auth = admin.auth()
