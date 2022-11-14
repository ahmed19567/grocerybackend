const jwt = require('jsonwebtoken')

function authorize(req,res,next){
    const token = req.header('authentication')
    if(!token)
    res.status(401).send("access denied")

    try {
        const verifyToken = jwt.verify(token, process.env.JWTKEY)
       req.user = verifyToken
         
    } catch (error) {
        res.status(400).send(error)
    }
    next()

}
module.exports = authorize