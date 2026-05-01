const pdf = require('pdf-parse-new')
const path = require('path')
const fs = require('fs')

const parse = async(filename) => {
    const filePath = path.join(__dirname, "../", "uploads", filename)
    const dataBuffer = fs.readFileSync(filePath)
    const data = await pdf(dataBuffer)
    return data.text
}

module.exports = parse