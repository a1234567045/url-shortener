const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlshortSchema = new Schema({
  getlink:{
    type: String,
    require:true
  },
  shortlink: {
    type: String,
    require: true
  },
})

module.exports = mongoose.model('UrlShort', urlshortSchema)