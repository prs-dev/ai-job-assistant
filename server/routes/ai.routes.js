const router = require('express').Router()
const {analyseDescription, coverGenerate, compareResumeWithJob} = require('../controllers/ai.controller')
const { validToken } = require('../middlewares/auth')

router.post('/analyse', validToken, analyseDescription)
router.post('/cover', validToken, coverGenerate)
router.post('/compare', validToken, compareResumeWithJob)

module.exports = router