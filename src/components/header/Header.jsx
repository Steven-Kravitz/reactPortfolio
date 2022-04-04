import React from 'react'
import './header.css'
import IntroBtns from './IntroBtns'
import selfPhoto from '../../assets/selfPhoto.jpg'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
      <div className="container headerContainer">
        <h5>Hello I'm</h5>
        <h1>Steven Kravitz</h1>
        <h5 className="textLight">Fullstack Developer</h5>
        
        <IntroBtns />
        <Socials className='socialBtns'/>
        
        <div className="selfPhoto photoContainer">
          <img src={selfPhoto} alt="Photo of myself" />
        </div>
        
      </div>
    </header>
  )
}

export default Header