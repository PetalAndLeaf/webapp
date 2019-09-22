var createError = require('http-errors')
var express = require('express')
// [END import]

// [START middleware]
app = express()
const cors = require('cors')({ origin: true })
app.use(cors)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// [END middleware]

app.use('/', require('./routes'))

module.exports = app
