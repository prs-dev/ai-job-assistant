const express = require('express')
const {dbConnect} = require('./config/db')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello from server')
})

dbConnect()

app.listen(5000, () => {
    console.log("server running on port 5000")
})
