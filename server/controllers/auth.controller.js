const register = (req, res) => {
    res.send('you are in register')
}

const login = (req, res) => {
     res.send('you are in login')
}

module.exports = {
    register, 
    login
}