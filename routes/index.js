const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const right = require('./modules/shows')
const UrlShort = require('../models/shortenweb')



router.use('/', home)
router.use('/right', right)



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