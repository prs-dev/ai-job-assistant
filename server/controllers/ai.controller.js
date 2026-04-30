const {aiResponse, aiCover} = require('../config/ai')
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

module.exports = {
    analyseDescription,
    coverGenerate
}