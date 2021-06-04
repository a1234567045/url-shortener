const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost/url-shortener', { useNewUrlParser: true, useUnifiedTopology: true })

const port = 3000

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error')
})
db.once('open', () => {
  console.log('mongodb connected!')
})


app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine','hbs')


app.get('/', (req, res) => {
  res.render('index')
})





app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}`)
})