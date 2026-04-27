const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) return res.status(400).json({ msg: "please provide all fields!" })
        const userExist = await User.findOne({ email })
        if (userExist) return res.status(400).json({ msg: "user already exists, please login" })
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            name, email, password: hashedPassword
        })
        await newUser.save()
        delete newUser._doc.password
        return res.status(201).json({ msg: "user created", user: newUser })
    } catch (error) {
        console.log("error in registering user", error)
    }
}

const login = async(req, res) => {
    try {
        const {email, password} = req.body
        if(!email || !password) return res.status(400).json({msg: "please provide all fields!"})
        const user = await User.findOne({email})
        if(!user) return res.status(400).json({msg: "Invalid credentials"})
        const verifyPassword = await bcrypt.compare(password, user.password)
        if(!verifyPassword) return res.status(400).json({msg: "Invalid credentials"})
        const token = jwt.sign({_id: user._id}, process.env.SECRET)
        return res.status(200).json({msg: "user logged in", token})
    } catch (error) {
        console.log("error in logging in user", error)
    }
}

const userDetails = async(req, res) => {
    try {
        const user = await User.findOne({_id: req._id}).populate('jobs')
        delete user._doc.password
        return res.status(200).json({msg: "user", user})
    } catch (error) {
        console.log("error in fetching use details", error)
    }
}

module.exports = {
    register,
    login,
    userDetails
}