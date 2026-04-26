const Job = require('../models/Job')
const User = require('../models/User')

const allJobs = async (req, res) => {
    try {
        const jobs = await Job.find({ user: req._id })
        return res.status(200).json({ jobs })
    } catch (error) {
        console.log("error in all jobs", error)
    }
}

const createJob = async (req, res) => {
    try {
        const { company, role, status, notes } = req.body
        if (!company || !role) return res.status(400).json({ msg: "Please provide all fields!" })
        const user = await User.findOne({ _id: req._id })
        const newJob = new Job({
            company, role, status, notes, user: req._id
        })
        await newJob.save()
        user.jobs = [...user.jobs, newJob._id]
        await user.save()
        return res.status(200).json({ msg: "Job Created", job: newJob })
    } catch (error) {
        console.log("error in creating job", error)
    }
}

module.exports = {
    allJobs,
    createJob
}