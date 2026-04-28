const { allJobs, createJob, updateJobStatus, deleteJob, summary } = require('../controllers/job.controller')
const { validToken, validUser } = require('../middlewares/auth')

const router = require('express').Router()

router.get('/all/:id', validToken, validUser, allJobs)
router.get('/summary/:id', validToken, validUser, summary)
router.put('/update/:id/:jobId', validToken, validUser, updateJobStatus)
router.delete('/delete/:id/:jobId', validToken, validUser, deleteJob)
router.post('/create', validToken, createJob)

module.exports = router