const joi = require('joi')


function validateRegister(body){
    const registerSchema = joi.object({
        email : joi.string().email().required(),
        password : joi.string().min(8).max(1000).required() 
    })
    const schema = registerSchema.validate(body)
    return schema
}

module.exports = validateRegister