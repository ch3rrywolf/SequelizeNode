const express = require('express')
var bodyParser = require('body-parser')
const User = require('./models/user')
const app = express()

app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('Hello World')
})

User.sync({ force: true });

app.listen(3000,()=>{
    console.log('App will run on: http://127.0.0.1:3000')
})