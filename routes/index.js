const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const shortlink = require('./modules/shows')
const UrlShort = require('../models/shortenweb')



router.use('/', home)
router.use('/shortlink', shortlink)




module.exports = router