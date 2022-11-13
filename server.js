// Imports
const express = require('express')
const path = require('path')
const app = express()
const port = 8080

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))
app.set('views', path.join(__dirname, 'public/views'))
app.set('view engine', 'ejs');

// Routes
app.get('/', (res) => {
  res.render('index')
})
app.get('/projects', (res) => {
  res.render('frontend-bootcamp')
})
app.post('/sendmsg', (res) => {
  res.render('frontend-bootcamp')
})
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})