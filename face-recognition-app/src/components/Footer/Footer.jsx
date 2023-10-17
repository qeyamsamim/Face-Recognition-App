import React from 'react'
import { BsGithub } from 'react-icons/bs'
import './Footer.css'

const Footer = ({imgUrl}) => {
    const currentYear = new Date().getFullYear()
  return (
    <footer className={imgUrl !== '' ? 'position' : ''}>
        <p>Improve Your Fitness Business - Copyright&#169; { currentYear }</p>
        <h6>Ahmad Samim Qeyam <a href='https://github.com/qeyamsamim' target='_blank'><BsGithub /></a></h6>
    </footer>
  )
}

export default Footer