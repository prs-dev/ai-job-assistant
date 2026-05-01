const pdf = require('pdf-parse-new')
const path = require('path')
const fs = require('fs')

const filePath = path.join(__dirname, "../", "uploads", "1777626828315.pdf")

const dataBuffer = fs.readFileSync(filePath)

const parse = () => pdf(dataBuffer)

module.exports = parse