const express = require('express')
const router = express.Router()
const UrlShort = require('../../models/shortenweb')
const getShortLink = require('./getshorturl')


router.get('/shows', (req, res) => {
  res.render('show')

})

/// READ
router.post('/', (req, res) => {

  const mainURL = 'https://url-shortener.herokuapp.com/'
  // const shortlink = getShortLink()
  let newshortenURL = ''

  const name = req.body.name

  UrlShort.find()
    .lean()
    .then((userURL) => {
      newshortenURL = userURL.find((existed) => existed.getlink === name)
      //確認有沒有存在的原網址
      if (newshortenURL) {
        newshortenURL = mainURL + newshortenURL.name_short
        return res.render('show', { newshortenURL, name })
      } else {
        let name_short = getShortLink()
        newshortenURL = mainURL + name_short

        while (userURL.some((existed) => existed.shortlink === name_short)) { name_short = getShortLink() }
        //用while來比對所有的資料，有重複就再新增一個短網址

        return UrlShort.create({
          getlink: name,
          shortlink: name_short
        })
          .then((right) => res.render('show', { right, newshortenURL, name }))
          .catch(error => console.log('error'))
      }
    })
})

// //redirect 
// router.get('/:show', (req, res) => {

//   const shortenName = req.params.show
//   console.log(shortenName)
//   UrlShort.findOne({ shortlink: shortenName })
//     .lean()
//     .then()
//     .catch(error => console.log('error'))
// })
module.exports = router





