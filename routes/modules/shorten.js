const express = require('express')
const router = express.Router()
const UrlShort = require('../../models/shortenweb')
const getShortUrl = require('./getshorturl')


router.get('/', (req, res) => {
  res.render('show')

})

/// READ
router.post('/show', (req, res) => {

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
      }


      let name_short = getShortLink()
      newshortenURL = mainURL + name_short

      while (userURL.some((existed) => existed.name_short === name_short)) { name_short = getShortLink() }
      //用while來比對所有的資料，有重複就再新增一個短網址

      return UrlShort.create({
        getlink: name,
        shortlink: name_short
      })
        .then(() => res.render('show', { newshortenURL, name }))
        .catch(error => console.log('error'))
    }
    )
})

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





