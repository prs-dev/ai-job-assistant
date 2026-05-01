const express = require('express')
const {dbConnect} = require('./config/db')
const authRoutes = require('./routes/auth.routes')
const jobRoutes = require('./routes/job.routes')
const aiRoutes = require('./routes/ai.routes')
const upload = require('./config/multer')
const path = require('path')
const parse = require('./config/parsePdf')

const app = express()

app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/job', jobRoutes)
app.use('/api/ai', aiRoutes)

//static serve
app.use("/api/files", express.static(path.join(__dirname, "uploads")))

// console.log(path.join(__dirname, "uploads"))

app.post('/api/upload', upload.single('resume'), (req, res) => {
    return res.status(200).json({msg: 'file uploaded', filename: req.file.filename})
    // console.log(req, res)
})

app.get('/', (req, res) => {
    res.send('hello from server')
})

parse().then(data => console.log(data)).catch(err => console.log(err))

dbConnect()

app.listen(5000, () => {
    console.log("server running on port 5000")
})
