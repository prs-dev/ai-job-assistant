const {aiResponse, aiCover, aiCompare} = require('../config/ai')
const parse = require('../config/parsePdf')
const analyseDescription = async(req, res) => {
    const {input} = req.body
    // console.log(input)
    const data = await aiResponse(input)
    return res.status(200).json(data)
}

const coverGenerate = async(req, res) => {
    const {input} = req.body
    const data = await aiCover(input)
    return res.status(200).json(data)
}

const compareResumeWithJob = async(req, res) => {
    const {input, filename} = req.body
    const resumeData = await parse(filename)
    // console.log(resumeData)
    const data = await aiCompare(input, resumeData)
    const parsedData = JSON.parse(data)
    return res.status(200).json({data: parsedData})
    // console.log(data)
}

module.exports = {
    analyseDescription,
    coverGenerate, 
    compareResumeWithJob
}