const { allJobs } = require('../controllers/job.controller')
const { validToken } = require('../middlewares/auth')

const router = require('express').Router()

router.get('/all', validToken, allJobs)

module.exports = router