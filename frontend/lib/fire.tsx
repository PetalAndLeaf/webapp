import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.FB_KEY,
  authDomain: process.env.FB_AUTHDOMAIN,
  databaseURL: process.env.FB_DBURL,
  projectId: process.env.FB_PROJID,
  storageBucket: process.env.FB_STORAGE,
  messagingSenderId: process.env.FB_MSGID,
  appId: process.env.FB_APPID
}

try {
  firebase.initializeApp(firebaseConfig)
} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

const fieldDelete = firebase.firestore.FieldValue.delete()
const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth, fieldDelete }
