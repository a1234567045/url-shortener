const express = require('express')
const router = express.Router()
const UrlShort = require('../../models/shortenweb')


router.get('/', (req, res) => {
  return UrlShort.find()
    .lean()
    .then(shorten => res.render('index', { shorten }))
    .catch(error => console.log('error'))

})

module.exports = router










