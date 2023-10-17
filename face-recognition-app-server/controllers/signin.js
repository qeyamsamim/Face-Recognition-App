const handleSignin = (dbConnection, bcrypt) => (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json('Inputs Required!')
    }
    dbConnection.select('email', 'hash').from('login')
    .where('email', '=', email)
    .then(data => {
        const passCheck = bcrypt.compareSync(password, data[0].hash)
        if (!passCheck || !email) {
            return res.status(400).json('Wrong credentials')
        }
        return dbConnection.select('*').from('users')
        .where('email', '=', email)
        .then(user => {
            res.json(user[0])
        })
        .catch(error => res.status(400).json('Unable to get user.'))
    })
    .catch(error => res.status(400).json('Enter a Valid Username/Password'))
}

module.exports = {
    handleSignin: handleSignin
}