const express = require('express')
const router = express.Router()
const controll = require('./Controll')


//user related routes
router.post('/send', controll.send)

module.exports = router