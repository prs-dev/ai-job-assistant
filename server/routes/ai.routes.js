const router = require('express').Router()
const {analyseDescription, coverGenerate} = require('../controllers/ai.controller')
const { validToken } = require('../middlewares/auth')

router.post('/analyse', validToken, analyseDescription)
router.post('/cover', validToken, coverGenerate)

module.exports = router