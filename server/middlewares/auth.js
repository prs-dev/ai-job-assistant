const validToken = (req, res, next) => {
    console.log("valid token")
    next()
}

module.exports = {
    validToken
}