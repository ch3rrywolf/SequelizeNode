const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000,()=>{
    console.log('App will run on: http://127.0.0.1:3000')
})