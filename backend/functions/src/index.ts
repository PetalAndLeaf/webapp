import * as functions from 'firebase-functions'
import * as express from 'express'
import router from './routes'

const app = express()
app.use(router)
app.use(express.json())

export const api = functions.https.onRequest(app)
