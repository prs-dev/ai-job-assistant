const router = require('express').Router()
const {analyseDescription} = require('../controllers/ai.controller')
const { validToken } = require('../middlewares/auth')

router.post('/analyse', validToken, analyseDescription)

module.exports = router