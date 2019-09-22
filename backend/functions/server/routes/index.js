var express = require('express')
var router = express.Router()
var db = require('../db')

router.get('/:clction/:id', (req, res) => {
  const clction = req.params.clction
  const id = req.params.id

  db.getByClctionID(clction, id)
    .then(doc => {
      if (doc.exists) {
        return res.status(200).json(doc.data())
      } else {
        return res.status(400).json({ message: 'User ID not found.' })
      }
    })
    .catch(error => {
      return res
        .status(400)
        .json({ message: 'Unable to connect to Firestore.' })
    })
})

router.get('/:clction', (req, res) => {
  const clction = req.params.clction

  db.getClctionByOrder(clction)
    .then(function(docs) {
      var all = []
      docs.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        all.push({ ...doc.data(), id: doc.id })
      })
      return res.status(200).json(all)
    })
    .catch(error => {
      return res
        .status(400)
        .json({ message: 'Unable to connect to Firestore.' })
    })
})

router.get('/:clction/:cond1/:cond2', (req, res) => {
  const { clction, cond1, cond2 } = req.params
  if (!isNaN(cond2)) number = Number(cond2)

  db.getByClctionEqual(clction, cond1, number)
    .then(function(docs) {
      var all = []
      docs.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        all.push({ ...doc.data(), id: doc.id })
      })
      return res.status(200).json(all)
    })
    .catch(error => {
      return res
        .status(400)
        .json({ message: 'Unable to connect to Firestore.' })
    })
})

router.post('/create', (req, res) => {
  console.log(req.method)
  var user = req.body

  res.send(user)
  // db.collection('customers')
  //   .doc('ruanjianusa')
  //   .set({
  //     name: 'Ruan'
  //   })
  //   .then(function() {
  //     console.log('Document written!')
  //   })
})

// router.put('/update', (req, res) => {
//   db.collection('customers')
//     .doc('amyyimingpu')
//     .set({ age: 2 }, { merge: true })
//     .then(() => {
//       console.log('Document updated!')
//     })
//   return
// })
// router.delete('/delete', (req, res) => {
//   db.collection('customers')
//     .doc('ruanjianusa')
//     .delete()
//   return
// })

module.exports = router
