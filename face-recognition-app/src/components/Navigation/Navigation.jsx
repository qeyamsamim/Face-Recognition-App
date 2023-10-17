import React from 'react'
import Logo from '../Logo/Logo'
import { MdExitToApp } from 'react-icons/md'

import './Navigation.css'

const Navigation = ({ route, setRoute, setImgUrl }) => {
  const onChangeRoute = () => {
    setRoute('signin')
    setImgUrl('')
  }
  return (
    <header>
      <nav>
        <Logo />
        {route === 'home' && <p onClick={onChangeRoute}>Sign Out <MdExitToApp className='signout-icon' /></p>}
      </nav>
    </header>
  )
}

export default Navigation