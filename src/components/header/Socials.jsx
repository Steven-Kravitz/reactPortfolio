import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import{FaGithub} from 'react-icons/fa'

const Socials = () => {
  return (
    <div className='socials'>
        <a href="https://linkedin.com" target='#'><FaLinkedin /></a>
        <a href="https://github.com" target='#'> <FaGithub /></a>
    </div>
  )
}

export default Socials