const express = require('express')
const {dbConnect} = require('./config/db')
const authRoutes = require('./routes/auth.routes')
const jobRoutes = require('./routes/job.routes')
const aiRoutes = require('./routes/ai.routes')

const app = express()

app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/job', jobRoutes)
app.use('/api/ai', aiRoutes)

app.get('/', (req, res) => {
    res.send('hello from server')
})

dbConnect()

app.listen(5000, () => {
    console.log("server running on port 5000")
})
