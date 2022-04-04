import React from 'react'
import './about.css'
import headShot from '../../assets/headShot.jpg'

const About = () => {
  return (
    <section id='about'> 
    <h5>My Biography</h5>
    <h2>About Me</h2>
    
    <div className="aboutContainer">
      <div className="aboutMe">
        <div className="aboutMeImg">
          <img src={headShot} alt="personal head shot" />
        </div>
      </div>
      
      <div className="aboutContent">
        <div className="aboutCards">
          <article className="aboutCard">
            <h5>Interests</h5>
            <small>Coding, Coffee, Cooking, Tennis</small>
          </article>
          
          <article className="aboutCard">
            <h5>Projects</h5>
            <small>3 Group Projects</small>
          </article>
          
          <article className="aboutCard">
            <h5>Experience</h5>
            <small>University of Columbia's Fullstack Coding Bootcamp</small>
          </article>
        </div>
        {/* Write about yourself in the p tag later */}
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam alias molestias, tempora deserunt hic repellat? Adipisci quod accusantium, quia vero cumque nisi, nihil magnam ad labore, iusto est nemo vitae!</p>
      
        <a href="#contact" className='btn primaryBtn'>Reach Out to Me</a>
      </div>
      
    </div>
    </section>
  )
}

export default About