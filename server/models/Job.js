const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["applied", "interview", "rejected"],
        default: "applied"
    },
    notes: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Job", jobSchema)