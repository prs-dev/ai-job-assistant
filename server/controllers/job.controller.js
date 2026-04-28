const Job = require('../models/Job')
const User = require('../models/User')
const mongoose = require('mongoose')

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

const updateJobStatus = async (req, res) => {
    try {
        const { status } = req.body
        const jobId = req.params.jobId
        const updatedJob = await Job.findByIdAndUpdate(jobId, { status }, {
            new: true
        })
        return res.status(200).json({ msg: 'job updated', job: updatedJob })
    } catch (error) {
        console.log("error while updating job", error)
    }
}

const deleteJob = async (req, res) => {
    try {
        const jobId = req.params.jobId
        const user = await User.findOne({ _id: req._id })
        // console.log("user", user, req._id)
        const deletedJob = await Job.findOneAndDelete({ _id: jobId })
        user.jobs = user.jobs.filter(item => item._id.toString() !== jobId)
        await user.save()
        return res.status(200).json({ msg: "job deleted", job: deletedJob })
    } catch (error) {
        console.log("error while deleting the job", error)
    }
}

const summary = async (req, res) => {
    try {
        //using aggregate, count no. of jobs
        // const totalJobs = await Job.aggregate([
        //     {
        //         $match: {user: new mongoose.Types.ObjectId(req._id)}
        //     },
        //     // {
        //     //     $count: "totalJobs"
        //     // },
        //     {
        //         $group: {
        //             _id: "$status",
        //             totalJobs: {$sum: 1}
        //         }
        //     }
        // ])
        const totalJobs = await Job.aggregate([
            {
                $match: { user: new mongoose.Types.ObjectId(req._id) }
            },
            {
                $facet: {
                    status: [{
                        $group: {
                            _id: "$status",
                            totalJobs: { $sum: 1 }
                        }
                    }],
                    totalCount: [
                        { $count: "totalJobs" }
                    ]


                }
            }
        ])
        return res.status(200).json({ summary: totalJobs })
    } catch (error) {
        console.log("error in summary", error)
    }
}

module.exports = {
    allJobs,
    createJob,
    updateJobStatus,
    deleteJob,
    summary
}