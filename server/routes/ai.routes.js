const router = require('express').Router()
const {hello} = require('../controllers/ai.controller')

router.get('/', hello)

module.exports = router