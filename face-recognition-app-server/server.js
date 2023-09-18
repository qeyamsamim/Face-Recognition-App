const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors())

const db = {
    users: [
        {
            id: '1',
            fullName: 'David',
            email: 'david@gmail.com',
            password: '123',
            entries: 0,
            joined: new Date()
        },
        {
            id: '2',
            fullName: 'Mari',
            email: 'mari@gmail.com',
            password: '123',
            entries: 0,
            joined: new Date()
        }
    ]
}

// const checkUser = (idVar) => {
//     const { id } = idVar
//     let found = false
//     db.users.forEach(user => {
//         if (user.id === id) {
//             found = true
//             return res.json(user)
//         }
//     })
//     !found && res.status(404).json('User not found')
// }

app.get('/', (req, res) => {
    res.send(db.users)
})

app.post('/signin', (req, res) => {
    if (req.body.email === db.users[0].email &&
        req.body.password === db.users[0].password) {
        res.json(db.users[0])
    } else {
        res.status(400).json('error signing in')
    }
})

app.post('/register', (req, res) => {
    const { email, name, password } = req.body
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            console.log(hash)
        })
    })
    db.users.push({
        id: '3',
        fullName: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()
    })
    res.json(db.users[db.users.length - 1])
})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params
    let found = false
    db.users.forEach(user => {
        if (user.id === id) {
            found = true
            return res.json(user)
        }
    })
    !found && res.status(404).json('User not found')
})

app.put('/image', (req,res) => {
    const { userId } = req.body
    let found = false
    db.users.forEach(user => {
        if (user.id === userId) {
            found = true
            user.entries++
            return res.json(user.entries)
        }
    })
    !found && res.status(404).json('User not found')
})

app.listen(3001, () => {
    console.log('app is running on port 3000')
})