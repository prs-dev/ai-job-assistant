const jwt = require('jsonwebtoken')
require("dotenv").config()

const validToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]
    const verifyToken = jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if(err) return res.status(400).json({msg: "Invalid token"})
        return decoded
    })
    if(verifyToken) next()
}

module.exports = {
    validToken
}