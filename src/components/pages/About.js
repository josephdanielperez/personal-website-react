import React from 'react'

import '../../App.css'
import img from '../../assets/images/profile.jpg'

function About() {
    
    return (
        <>
            <h1 className='about'>About</h1>

            <div className='about-block'>
                <h1 className='title'>Joseph Perez</h1>
                <div className='content'>
                    <img src={img} alt='profile' className='image' />

                    <p>Joseph is an aspiring full-time software engineer based just outside of Seattle, Washington. He has worked as an online content creator partnering up with brands such as Twitch, Astro Gaming, Logitech, Blue Microphones, AMD, and more. Having an interest in all things tech, his curiosity brought him to software engineering. His passion for coding was solidified throughout his time at Flatiron School where he sought to expand his abilities to make a career change after being self-taught as a hobbyist for a couple of years.</p>
                </div>
            </div>
        </>
    )
}

export default About