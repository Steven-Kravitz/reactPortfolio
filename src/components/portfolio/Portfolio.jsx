import React from 'react'
import './portfolio.css'
import CCPhoto from '../../assets/CCPhoto.png'
import eCommPhoto from '../../assets/eCommPhoto.png'
import comingSoon from '../../assets/comingSoon.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolioContainer">
        <article className='portfolioItem'>
          <div className="portfolioItemImg">
            <img src={CCPhoto} alt="" />
          </div>
          <h3>Crypto Cards</h3>
          <div className='portfolioItemBtns'>
          <a href="https://github.com/Steven-Kravitz/crypto-cards" className='btn'>Github Repo</a>
          <a href="https://steven-kravitz.github.io/crypto-cards/" className='btn primaryBtn'>Deployed App</a>
          </div>
        </article>
        
        <article className='portfolioItem'>
          <div className="portfolioItemImg">
            <img src={eCommPhoto} alt="" />
          </div>
          <h3>eCommerce Backend Build</h3>
          <div className='portfolioItemBtns'>
          <a href="https://github.com/Steven-Kravitz/eCommerceBackendBuild" className='btn'>Github Repo</a>
          </div>
        </article>
        
        <article className='portfolioItem'>
          <div className="portfolioItemImg">
            <img src={comingSoon} alt="" />
          </div>
          <h3>Project 3</h3>
          <div className='portfolioItemBtns'>
          <a href="#portfolio" className='btn'>Github Repo</a>
          <a href="#portfolio" className='btn primaryBtn'>Deployed App</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio