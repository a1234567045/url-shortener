const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const UrlShort = require('./models/shortenweb')
const bodyParser = require('body-parser')
const routes = require('./routes')
const methodOverride = require('method-override')

require('./config/mongoose')


const PORT = process.env.PORT || 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)
app.use(methodOverride('_method'))  


app.listen(PORT, () => {
  console.log(`app is running on http://localhost:${PORT}`)
})