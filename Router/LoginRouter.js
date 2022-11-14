const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const RegisterSchema = require('../Schema/RegisterSchema')
const loginValidation = require('../Validation/LoginValidation')
const bycrypt = require('bcrypt')


router.post('/', async(req,res)=>{
   
    const {value, error} = loginValidation(req.body)
    if(error)
    return res.status(400).send(error.message)

    const registerSchema = await RegisterSchema.findOne({email:req.body.email})
    if(!registerSchema)
    return res.status(400).send("Invalid email")
    const {name, email , password} = registerSchema
 
    const hashedPassword =await bycrypt.compare( req.body.password, password)
    if(!hashedPassword)
    return res.status(400).send("Incorrect Password")

    const userAuth = jwt.sign({user:name, userEmail : email}, process.env.JWTKEY)

     res.header('authentication',userAuth).send(userAuth)
    
})
module.exports = router