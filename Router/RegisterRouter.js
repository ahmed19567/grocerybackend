const express = require('express')
const router = express.Router()
const bcyrpt = require('bcrypt')
const RegisterSchema = require('../Schema/RegisterSchema')
const registerValidation = require('../Validation/RegisterValidation')

router.post('/', async (req,res)=>{
      const {value, error} = registerValidation(req.body)
        try {
          if(error)
          return res.status(400).send(error.message)
    
          const register = await RegisterSchema.findOne({email:req.body.email})
          if(register)
          return res.status(400).send("User already exist")

          const hash = await bcyrpt.genSalt(10);
      
          const hashPassword = await bcyrpt.hash(req.body.password, hash);
          const hashPasswordConfirm = await bcyrpt.hash(req.body.passwordconfirm, hash);
    
          const registerUser= new RegisterSchema({
            name : req.body.name,
            email : req.body.email,
            password : hashPassword,
            passwordconfirm : hashPasswordConfirm
          })

          registerUser.save()

          res.json({
            confirm:true
          })
          
        } catch (error) {
          res.json({
            confirm:false
          })      
        }

    
})





module.exports = router