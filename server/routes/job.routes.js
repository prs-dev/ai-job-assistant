const { allJobs, createJob } = require('../controllers/job.controller')
const { validToken, validUser } = require('../middlewares/auth')

const router = require('express').Router()

router.get('/all/:id', validToken, validUser, allJobs)
router.post('/create', validToken, createJob)

module.exports = router