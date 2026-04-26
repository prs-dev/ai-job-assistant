const Job = require('../models/Job')
const User = require('../models/User')

const allJobs = (req, res) => {
    res.send("you are in all jobs")
}

const createJob = async(req, res) => {
    const {company, role, status, notes} = req.body
    if(!company || !role) return res.status(400).json({msg: "Please provide all fields!"})
    const newJob = new Job({
        company, role, status, notes, user: req._id
    })
    await newJob.save()
    return res.status(200).json({msg: "Job Created", job: newJob})
}

module.exports = {
    allJobs, 
    createJob
}