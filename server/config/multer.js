const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../" ,"uploads"))
    }, 
    filename: (req, file, cb) => {
         const dateStr = new Date().getTime().toString()
        const ext = path.extname(file.originalname)
        cb(null, dateStr + ext)
    }
})

const upload = multer({storage})

module.exports = upload