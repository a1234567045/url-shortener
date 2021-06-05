const express = require('express')
const router = express.Router()
const UrlShort = require('../../models/shortenweb')


router.get('/', (req, res) => {
  return UrlShort.find()
    .lean()
    .then(shorten => res.render('index', { shorten }))
    .catch(error => console.log('error'))

})

//redirect 
// router.get('/:shorten', (req, res) => {

//   const shortenName = req.params.shorten
//   console.log(shortenName)
//   UrlShort.findOne({ shortlink: shortenName })
//     .lean()
//     .then((web) => {
//       if (web) {
//         res.status(302).redirect(web.name)
//       }
//     })
//     .catch(error => console.log('error'))
// })
module.exports = router










