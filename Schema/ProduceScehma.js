const mongoose = require('mongoose')


const ProduceScehma = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image :{
        type:String,
        required:true
    },
    price :{
        type:Number,
        required:true
    }
    
})

module.exports = mongoose.model('Produce', ProduceScehma)