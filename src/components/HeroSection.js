import React from 'react'
import { Button } from './Button'
import '../App.css'

import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Joseph Perez</h1>
      <p>Software Engineer</p>

      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          Let's Connect
        </Button>
      </div>
    </div>
  )
}

export default HeroSection