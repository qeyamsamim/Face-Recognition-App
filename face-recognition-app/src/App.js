import React, { useState } from 'react'
import Navigation from './components/Navigation/Navigation'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import ParticlesComponent from './components/Particles/ParticlesComponent'
import RecognitionResult from './components/RecognitionResult/RecognitionResult'
import SignIn from './components/SignIn/SignIn'

const App = () => {
  const [imgUrl, setImgUrl] = useState('')
  const [box, setBox] = useState({})
  const [route, setRoute] = useState('signin')

  return (
    <>
    <ParticlesComponent />
      <div className='container'>
        <Navigation route={route} setRoute={setRoute} setImgUrl={setImgUrl} />
        { route === 'signin' || route === 'register' ? <SignIn route={route} setRoute={setRoute}/> :
        <>
          <ImageLinkForm setImgUrl={setImgUrl} setBox={setBox} />
          <RecognitionResult imgUrl={imgUrl} box={box} />
        </>
        }
      </div>
    </>
  )
}

export default App