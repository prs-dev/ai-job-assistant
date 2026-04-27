const router = require('express').Router()
const {register, login, userDetails} = require('../controllers/auth.controller')
const {validToken} = require('../middlewares/auth')

router.post('/register', register)

router.post('/login', login)

router.get('/user', validToken, userDetails)

module.exports = router