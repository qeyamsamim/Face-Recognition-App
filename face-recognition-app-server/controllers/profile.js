const getProfile = (dbConnection) => (req, res) => {
    const { id } = req.params
    dbConnection.select('*').from('users')
        .where({id})
        .then(user => {
            if (user.length) {
                res.json(user[0])
            } else {
                res.status(404).json('User not found')
            }
    })
    .catch(err => res.status(404).json('User not found'))
}

module.exports = {
    getProfile: getProfile
}