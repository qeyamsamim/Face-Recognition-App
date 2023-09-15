import React from 'react'

import './RecognitionResult.css'

const RecognitionResult = ({imgUrl, box}) => {
  return (
    <section className='recognition-result'>
      {!imgUrl ? <h2>Please Enter Image URL</h2> :
        <div className="resultImg-container">
            <img id='recognitionResult' src={imgUrl} />
            <div 
              className='bouding-box' style={
                {
                  top: box.topRow,
                  right: box.rightCol,
                  bottom: box.bottomRow,
                  left: box.leftCol}}>
            </div>
        </div>
      }
    </section>
  )
}

export default RecognitionResult