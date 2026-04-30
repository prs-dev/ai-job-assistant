const aiResponse = require('../config/ai')
const analyseDescription = async(req, res) => {
    const {input} = req.body
    // console.log(input)
    const data = await aiResponse(input)
    return res.status(200).json(data)
}

module.exports = {
    analyseDescription
}