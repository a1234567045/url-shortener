const express = require('express')
const router = express.Router()
const UrlShort = require('../models/shortenweb')

const home = require('./modules/home')
router.use('/', home)

const shorten = require('./modules/shorten')
router.use('/shorten', shorten)

//redirect 
router.get('/:shorten', (req, res) => {

  const shortenName = req.params.shorten
  console.log(shortenName)
  UrlShort.findOne({ shortlink: shortenName })
    .lean()
    .then((web) => {
      if (web) {
        res.status(302).redirect(web.name)
      }
    })
    .catch(error => console.log('error'))
})


module.exports = router