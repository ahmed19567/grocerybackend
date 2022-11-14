const express = require('express')
const router = express.Router()
const ProduceSchema = require('../Schema/ProduceScehma')
const produceValidation = require('../Validation/ProduceValidation')


router.get('/', async(req,res)=>{
    const produceSchema = await ProduceSchema.find()
    res.send(produceSchema)
})

router.post('/', async(req,res)=>{
    const {value, error} = produceValidation(req.body)
    if(error)
    return res.status(400).send(error.message)

    const schema = await ProduceSchema.findOne({name:req.body.name})
    if(schema)
    return res.status(400).send("Already exist")
    const produceSchema = new ProduceSchema({
        name : req.body.name,
        category : req.body.category,
        image : req.body.image,
        price : req.body.price,
    })

    produceSchema.save()
    res.send(produceSchema)
})


module.exports = router;