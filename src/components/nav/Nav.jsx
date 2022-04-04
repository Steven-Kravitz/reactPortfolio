import React from 'react'
import './nav.css'
import {MdHome} from 'react-icons/md'
import {FcAbout} from 'react-icons/fc'
import {CgWorkAlt} from 'react-icons/cg'
import {GrContact} from 'react-icons/gr'


const Nav = () => {
  return (
    <nav>
      <a href="#"><MdHome /></a>
      <a href="#about"><FcAbout /></a>
      <a href="#portfolio"><CgWorkAlt /></a>
      <a href="#contact"><GrContact /></a>
    </nav>
  )
}

export default Nav