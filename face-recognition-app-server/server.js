const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const cors = require('cors')
const knex = require('knex')

const register = require('./controllers/register')
const signin = require('./controllers/signin')
const profile = require('./controllers/profile')
const image = require('./controllers/image')

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
    res.send('It is working.')
})

app.post('/signin', signin.handleSignin(dbConnection, bcrypt))
app.post('/register', register.handleRegister(dbConnection, bcrypt))
app.get('/profile/:id', profile.getProfile(dbConnection))
app.put('/image', image.handleImage(dbConnection))
app.listen(process.env.PORT || 3001, () => {
    console.log(`app is running on port ${process.env.PORT}`)
})