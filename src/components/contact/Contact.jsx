import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Reach Out Anytime</h5>
      <h2>Contact Me</h2>
      
      <div className="container contactContainer">
        <div className="contactMethods">
          <article className="contactMethod">
            <HiOutlineMail className='contactIcon'/>
            <h4>Email</h4>
            <h4>Steven.Kravitz95@gmail.com</h4>
            <a href="mailto:Steven.Kravitz95@gmail.com" target='_blank'>Send an Email</a>
          </article>
        </div>
        {/* Research form to email sending services */}
        <form action="">
          <input type="text" name='name' placeholder='Your Name...' required />
          <input type="email" name='email' placeholder='Your Email...' required />
          <textarea name="message" rows="8" placeholder='Your Message...' required></textarea>
          <button type='submit' className='btn primaryBtn'>Send Message</button>
        </form>
      </div>
      
    </section>
  )
}

export default Contact