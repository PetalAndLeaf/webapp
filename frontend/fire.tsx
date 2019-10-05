import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyA_ZHNg93gYd8usmaanHBbYv3tz0O1BOzc',
  authDomain: 'petalleafweb.firebaseapp.com',
  databaseURL: 'https://petalleafweb.firebaseio.com',
  projectId: 'petalleafweb',
  storageBucket: 'petalleafweb.appspot.com',
  messagingSenderId: '361247471331',
  appId: '1:361247471331:web:9abe95b69c7e28df0177d6'
}
export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()
