const express = require('express')
const dotenv = require('dotenv').config()
const router  = express.Router()
const stripe = require('stripe')(process.env.SECRETKEY)

function amountTotal(body){
    return body *100
}

router.post('/', async (req,res)=>{
    let {amount, id} = req.body

    try {
        const payment = await stripe.paymentIntents.create({
            amount : amountTotal(amount),
            currency: 'USD',
            payment_method: id,
           confirm :true
        })
        res.json({
            message : "Payment Successful",
            success : true
        })
    } catch (error) {
        res.json({
            message : "Payment Failed",
            success : false
        })
    }


    

})

module.exports  = router