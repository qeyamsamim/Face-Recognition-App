const handleRegister = (dbConnection, bcrypt) => (req, res) => {
    const { email, name, password } = req.body
    if (!email || !name || !password ) {
        return res.status(400).json('Inputs Required!')
    }
    const hash = bcrypt.hashSync(password, 10)
    dbConnection.transaction(trx => {
        trx.insert({hash, email})
        .into('login')
        .returning('email')
        .then(loginEmail => {
            return trx('users')
            .returning('*')    
            .insert({
                name: name,
                email: loginEmail[0].email,
                joined: new Date()
            })
            .then(user => {
                res.json(user[0])
            })
        })
        .then(trx.commit)
        .catch(trx.rollback)
    })
    .catch(error => res.status(400).json('Unable to register.'))
}

module.exports = {
    handleRegister: handleRegister
}