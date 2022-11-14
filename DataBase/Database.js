const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', ()=>{
   console.log('connected')
})

module.exports =db