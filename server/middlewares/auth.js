const jwt = require('jsonwebtoken')
require("dotenv").config()

const validToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]
    const verifyToken = jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if(err) return res.status(400).json({msg: "Invalid token"})
        return decoded
    })
    if(verifyToken) {
        req._id = verifyToken._id
        next()
    }
}

const validUser = (req, res, next) => {
    const userId = req.params.id
    const _id = req._id
    console.log(userId, _id)
    if(!(userId === _id)) return res.status(400).json({msg: 'You are not authorized!'})
    next()
}

module.exports = {
    validToken,
    validUser
}