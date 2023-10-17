import React, { useState } from 'react'
import axios from 'axios'

import './SignIn.css'

const SignIn = ({route, setRoute, loadUser}) => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ name, setname ] = useState('')
    const [ error, setError ] = useState('')

    const setRoutAndUser = (user) => {
        if (user.data.id) {
            loadUser(user)
            setRoute('home')
        }
    }
    const onChangeRoute = async (e) => {
        e.preventDefault()
        try{
            if (route === 'signin') {
                await axios.post('http://localhost:3001/signin', { email, password })
                .then(user => {
                    setRoutAndUser(user)
                })
            } else {
                await axios.post('http://localhost:3001/register', { email, name, password })
                .then(user => {
                    setRoutAndUser(user)
                }) 
            
            }
        }
        catch(e) {
            console.log(e.response.data)
            setError(e.response.data)
        }
    }

    const onRegister = () => {
        route === 'signin' ? setRoute('register') : setRoute('signin')
    }

    return (
        <section className='regForm-container'>
            <div className='registration-form'>
                <h1>Sign In</h1>
                <form action="">
                    {route === 'register' && <div className='input-container'>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id='name' onChange={(event) => setname(event.target.value)} required autoFocus />
                        <div className="error-container">
                            {(error && !name && route == 'register') && <small>{error}</small>}
                        </div>
                    </div>}
                    <div className='input-container'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' onChange={(event) => setEmail(event.target.value)} required autoFocus />
                        <div className="error-container">
                            {error && <small>{error}</small>}
                        </div>
                    </div>
                    <div className='input-container'>
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={(event) => setPassword(event.target.value)} required />
                        <div className="error-container">
                            {error && <small>{error}</small>}
                        </div>
                    </div>
                    <button className='button' onClick={onChangeRoute} type='submit'>{route === 'signin' ? 'Sign in' : 'Register'}</button>
                    <p onClick={onRegister}>{route === 'signin' ? 'Register' : 'Sign In'}</p>
                </form>
            </div>
        </section>
  )
}

export default SignIn