export default async function loadDB() {
  const firebase = require('firebase/app')
  require('firebase/firestore')

  const firebaseConfig = {
    apiKey: 'AIzaSyA_ZHNg93gYd8usmaanHBbYv3tz0O1BOzc',
    authDomain: 'petalleafweb.firebaseapp.com',
    databaseURL: 'https://petalleafweb.firebaseio.com',
    projectId: 'petalleafweb',
    storageBucket: 'petalleafweb.appspot.com',
    messagingSenderId: '361247471331',
    appId: '1:361247471331:web:9abe95b69c7e28df0177d6'
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

  return firebase.firestore()
}
