const express = require('express')
var bodyParser = require('body-parser')
require('./models')
var userCtrl = require('./controllers/userController')
const app = express()

app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/add', userCtrl.addUser)

app.listen(3000,()=>{
    console.log('App will run on: http://127.0.0.1:3000')
})