const UrlShort = require('../shortenweb')
const urlList = require('./url.json')
const db = require('../../config/mongoose')

db.once('open', () => {
  for (let i = 0; i < urlList.length; i++) {
    UrlShort.create({
      getlink: urlList[i].getlink,
      shortlink: urlList[i].shortlink
    })
  }
  console.log('done')
})


