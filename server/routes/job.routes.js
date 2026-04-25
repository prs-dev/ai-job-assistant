const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('you are inside job routes')
})

module.exports = router