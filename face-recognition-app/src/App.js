import React, { useState } from 'react'
import Navigation from './components/Navigation/Navigation'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import ParticlesComponent from './components/Particles/ParticlesComponent'
import RecognitionResult from './components/RecognitionResult/RecognitionResult'
import SignIn from './components/SignIn/SignIn'
import Footer from './components/Footer/Footer'

const App = () => {
  const [imgUrl, setImgUrl] = useState('')
  const [box, setBox] = useState({})
  const [route, setRoute] = useState('signin')
  const [userId, setUserId] = useState('')
  const [fullName, setFullName] = useState('')
  const [entries, setEntries] = useState(0)

  const loadUser = (data) => {
    setUserId(data.data.id)
    setFullName(data.data.name)
    setEntries(data.data.entries)
  }

  return (
    <>
    <ParticlesComponent />
      <div className='container'>
        <Navigation route={route} setRoute={setRoute} setImgUrl={setImgUrl} />
        { route === 'signin' || route === 'register' ? <SignIn route={route} setRoute={setRoute} loadUser={loadUser}/> :
        <main>
          <ImageLinkForm 
            setImgUrl={setImgUrl} 
            setBox={setBox} 
            userId={userId} 
            setEntries={setEntries}
            fullName={fullName} 
            count={entries} />
          <RecognitionResult imgUrl={imgUrl} box={box} />
          <Footer imgUrl={imgUrl} />
        </main>
        }
      </div>
    </>
  )
}

export default App