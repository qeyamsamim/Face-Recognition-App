const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const cors = require('cors')
const knex = require('knex')

const dbConnection = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        port : 5432,
        user : 'postgres',
        password : 'Nf20####',
        database : 'face-recognition'
    }
})

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    // res.send(db.users)
})

app.post('/signin', (req, res) => {
    const { email, password } = req.body
    dbConnection.select('email', 'hash').from('login')
    .where('email', '=', email)
    .then(data => {
        const passCheck = bcrypt.compareSync(password, data[0].hash)
        if (passCheck) {
            return dbConnection.select('*').from('users')
            .where('email', '=', email)
            .then(user => {
                res.json(user[0])
            })
            .catch(error => res.status(400).json('Unable to get user.'))
        } else {
            res.status(400).json('Wrong credentials')
        }
    })
    .catch(error => res.status(400).json('Wrong credentials'))
})

app.post('/register', (req, res) => {
    const { email, name, password } = req.body
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
})

app.get('/profile/:id', (req, res) => {
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
})

app.put('/image', (req,res) => {
    const { userId } = req.body
    dbConnection('users')
    .where('id', '=', userId )
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
        res.json(entries[0])
    })
    .catch(err => res.status(400).json('unable to get entries'))
})

app.listen(3001, () => {
    console.log('app is running on port 3001')
})