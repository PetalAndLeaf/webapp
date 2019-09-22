var admin = require('firebase-admin')

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://petalleafweb.firebaseio.com'
})

// const firestore = admin.firestore()

// module.exports = firestore
const db = admin.firestore()

//Docs on query Data
//https://firebase.google.com/docs/firestore/query-data/get-data

const getByClctionID = (clction, id) => {
  return db
    .collection(clction)
    .doc(id)
    .get()
}

const getClction = clction => db.collection(clction).get()

const getClctionByOrder = (clction, orderBy = 'order') => {
  return db
    .collection(clction)
    .orderBy(orderBy)
    .get()
}

const getByClctionFilter = (clction, cond1, cond2, op) => {
  return db
    .collection(clction)
    .where(cond1, op, cond2)
    .get()
}

const getByClctionEqual = (clction, cond1, cond2) =>
  getByClctionFilter(clction, cond1, cond2, '==')

module.exports = {
  getClction,
  getClctionByOrder,
  getByClctionID,
  getByClctionFilter,
  getByClctionEqual
}
