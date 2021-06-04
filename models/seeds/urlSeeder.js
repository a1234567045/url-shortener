const mongoose = require('mongoose')
const UrlShort = require('../urlshort')
const urlList = require('./url.json')
mongoose.connect('mongodb://localhost/url-shortener', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console('mongodb error!')
})
db.once('open', () => {
  for (let i = 0; i < urlList.length; i++) {
    UrlShort.create({
      getlink: urlList[i].getlink,
      shortlink: urlList[i].shortlink
    })
  }
  console.log('done')
})


