import React from 'react'
import { Button } from './Button'
import './Home.css'

function Home () {
  return (
    <div className='home-container'>
      <h1>Joseph Perez</h1>
      <p>Software Engineer</p>

      <div className='contact-button'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          Let's Connect
        </Button>
      </div>
    </div>
  )
}

export default Home