const handleImage = (dbConnection) => (req, res) => {
    const { userId } = req.body
    dbConnection('users')
    .where('id', '=', userId )
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
        res.json(entries[0])
    })
    .catch(err => res.status(400).json('unable to get entries'))
}

module.exports = {
    handleImage: handleImage
}