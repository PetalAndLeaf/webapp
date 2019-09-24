import * as express from 'express'
import * as admin from 'firebase-admin'

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://petalleafweb.firebaseio.com'
})
const db = admin.firestore()

const router = express()

router.get('/products', async (req, res) => {
  try {
    const QuerySnapshot = await db.collection('products').get()
    const products: any[] = []
    QuerySnapshot.forEach(product => {
      products.push(product.data())
    })
    res.send(products)
  } catch (err) {
    res.send(err)
  }
})

router.get('/stories/:id', async (req, res) => {
  try {
    const storyId = req.params.id

    if (!storyId) throw new Error('Not valid product ID')

    const story = await db
      .collection('stories')
      .doc(storyId)
      .get()

    if (!story.exists) {
      throw new Error('Fight doesnt exist.')
    }

    res.json(story.data())
  } catch (error) {
    res.status(500).send(error)
  }
})

router.post('/signup', async (req, res) => {
  try {
    const { lname, fname, email } = req.body
    const newcustomer = {
      lname,
      fname,
      email
    }
    const customerRef = await db
      .collection('customers')
      .doc(newcustomer.email)
      .set(newcustomer)

    res.send(customerRef.writeTime)
  } catch (error) {
    res.status(500).send(error)
  }
})

export default router
