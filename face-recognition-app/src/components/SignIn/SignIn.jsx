import React from 'react'

import './SignIn.css'

const SignIn = ({route, setRoute}) => {
    const onChangeRoute = () => {
        setRoute('home')
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
                        <label htmlFor="">Full Name</label>
                        <input type="text" />
                    </div>}
                    <div className='input-container'>
                        <label htmlFor="">Email</label>
                        <input type="email" />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="">Password</label>
                        <input type="password" />
                    </div>
                    {route === 'register' && <div className='input-container'>
                        <label htmlFor="">Re-type Password</label>
                        <input type="password" />
                    </div>}
                    <button className='button' onClick={onChangeRoute} type='submit'>{route === 'signin' ? 'Sign in' : 'Register'}</button>
                    <p onClick={onRegister}>{route === 'signin' ? 'Register' : 'Sign In'}</p>
                </form>
            </div>
        </section>
  )
}

export default SignIn