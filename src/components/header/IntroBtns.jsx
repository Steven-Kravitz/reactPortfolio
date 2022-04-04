import React from 'react'
import Resume from '../../assets/Steven-Kravitz-Resume.pdf'

const IntroBtns = () => {
  return (
    <div className='introBtn'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn primaryBtn'>Contact Me</a>
    </div>
  )
}
export default IntroBtns