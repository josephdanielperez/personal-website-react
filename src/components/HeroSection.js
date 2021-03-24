import React from 'react'
import { Button } from './Button'

import '../App.css'
import './HeroSection.css'

import background from '../assets/videos/video-2.mp4'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={background} autoPlay loop muted />
            <h1>Joseph Perez</h1>
            <p>Software Engineer</p>

            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Let's Connect
                </Button>

                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log('hey')} >
                    Projects <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection