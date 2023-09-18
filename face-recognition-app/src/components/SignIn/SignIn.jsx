import React, { useState } from 'react'
import axios from 'axios'

import './SignIn.css'

const SignIn = ({route, setRoute, loadUser}) => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ fullName, setFullName ] = useState('')
    const [ retypePassword, setRetypePassword ] = useState('')

    const onChangeRoute = async (e) => {
        e.preventDefault()
        try{
            if (route === 'signin') {
                await axios.post('http://localhost:3001/signin', { email, password })
                .then(user => {
                    if (user.data.id) {
                        loadUser(user)
                        setRoute('home')
                    }
                })
            } else {
                await axios.post('http://localhost:3001/register', { fullName, email, password, retypePassword })
                .then(user => {
                    if (user) {
                        loadUser(user)
                        setRoute('home')
                    }
                })
            }
        }
        catch(e) {
            console.log(e)
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
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" id='fullName' onChange={(event) => setFullName(event.target.value)} />
                    </div>}
                    <div className='input-container'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    {route === 'register' && <div className='input-container'>
                        <label htmlFor="retypePassword">Re-type Password</label>
                        <input type="password" id='retypePassword' onChange={(event) => setRetypePassword(event.target.value)} />
                    </div>}
                    <button className='button' onClick={onChangeRoute} type='submit'>{route === 'signin' ? 'Sign in' : 'Register'}</button>
                    <p onClick={onRegister}>{route === 'signin' ? 'Register' : 'Sign In'}</p>
                </form>
            </div>
        </section>
  )
}

export default SignIn