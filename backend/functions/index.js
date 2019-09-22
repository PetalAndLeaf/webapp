'use strict'

// [START import]
const functions = require('firebase-functions')
const app = require('./server/server')

// [START export]
// Export the express app as an HTTP Cloud Functions
exports.api = functions.https.onRequest(app)
// [END export]
