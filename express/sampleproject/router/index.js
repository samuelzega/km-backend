const express = require('express')
const app = express()
const controller = require('../controller/penjumlahan')
const middleware = require('../middleware/addValue')

app.post('/sumdata', middleware.sumValue, controller.sumValue)

module.exports = app
