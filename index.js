const express = require('express')
const app = express()
const dotenv = require('dotenv').config() 
const db = require('./DataBase/Database')
const cors = require('cors')
const port = process.env.PORT
 
// router imported
const produceRouter = require('./Router/ProduceRouter')
const registerRouter = require('./Router/RegisterRouter')
const loginRouter = require('./Router/LoginRouter')
const paymentRouter = require('./Router/PaymentRouter')
// authorization
const authorize = require('./Authorization/autorize')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.get('/',authorize ,(req,res)=>{
    res.send("hello")
})
 
app.use('/produce', produceRouter)
app.use('/register', registerRouter)
app.use('/login', loginRouter)
app.use('/payment', authorize,paymentRouter)

 


app.listen(port, ()=>{
    console.log(`i am listening on ${port}`)
})
 


