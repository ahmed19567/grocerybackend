const joi = require('joi')

function validateProduce(body){
   const produceSchema = joi.object({
       name : joi.string().required(),
       category : joi.string().min(3).required(),
       image : joi.string().min(3).required(),
       price : joi.string().required(),
   })
const schema = produceSchema.validate(body)
return schema
}

module.exports = validateProduce