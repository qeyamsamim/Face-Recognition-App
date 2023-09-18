import React, { useState } from 'react'
import axios from 'axios'

import './ImageLinkForm.css'

const ImageLinkForm = ({ setImgUrl, setBox, userId, setEntries, fullName, count }) => {
  const [input, setInput] = useState('')

  const PAT = '91997f06430d445aab4025ee38e2678e'
  const USER_ID = 'clarifai'
  const APP_ID = 'main'
  const MODEL_ID = 'face-detection'
  const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';   
  const IMAGE_URL = input;

  const raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": IMAGE_URL
                }
            }
        }
    ]
  })

  const requestOptions = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Authorization': 'Key ' + PAT
      },
      body: raw
  }

  const onInputChange = (event) => {
    setInput(event.target.value)
  }

  const setFaceLocation = (data) => {
    const image = document.getElementById('recognitionResult')
    const width = Number(image.width)
    const height = Number(image.height)
    return {
      leftCol: data.left_col * width,
      topRow: data.top_row * height,
      rightCol: width - (data.right_col * width),
      bottomRow: height - (data.bottom_row * height)
    }
  }

  const displayResult = (box) => {
    setBox(box)
  }

  const onSubmit = () => {
    setImgUrl(input)
    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
    .then(response => response.json())
    .then(result => {
      try{
        if(result) {
          axios.put('http://localhost:3001/image', { userId })
          .then(count => setEntries(count.data))
        }
      }
      catch(e) {
        console.log(e)
      }
      displayResult(setFaceLocation(result.outputs[0].data.regions[0].region_info.bounding_box))
    })
    .catch(error => console.log('error', error))
  }

  return (
    <section className='imageLink-container'>
        <h1>Face Detection</h1>
        <p>Hey {fullName}, your current entity count is {count}.</p>
        <div className='form-container'>
            <input type="text" placeholder='Image URL' onChange={onInputChange} />
            <button onClick={onSubmit}>Detect</button>
        </div>
    </section>
  )
}

export default ImageLinkForm