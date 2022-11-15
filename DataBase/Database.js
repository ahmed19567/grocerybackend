const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

if(process.env.NODE_ENV==='development')
{mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true });}
else if(process.env.NODE_ENV ===  'production')
 {mongoose.connect(process.env.MONGODB_DATABASE, {useNewUrlParser: true, useUnifiedTopology: true });
}
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', ()=>{
   console.log('connected')
})

  module.exports =db