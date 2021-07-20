import React from 'react'
import './About.css'

import img from '../assets/images/profile.jpg'

function About() {
    
  return (
    <div className='about-container'>
      <h1 className='about-header'>About</h1>

      <div className='about-content'>
        <div className='about-text'>
          <h1 className='about-title'>Joseph Perez</h1>
          <p>I am an aspiring full-time software engineer based just outside of Seattle, Washington. I have worked as an online content creator partnering up with brands such as Twitch, Astro Gaming, Logitech, Blue Microphones, AMD, and more. Having an interest in all things tech, my curiosity brought me to software engineering. My passion for coding was solidified throughout my time at Flatiron School where I sought to expand his abilities to make a career change after being self-taught as a hobbyist for a couple of years.
          </p>

          <p>Currently, I have been expanding my knowledge in full stack development through building out projects, contributing to open source projects, and taking on algorithm challenges. I am open for new opportunities to contribute towards an awesome team.
          </p>
        </div>

        <img className='about-image' src={img} alt='profile' />
      </div>
    </div>
  )
}

export default About