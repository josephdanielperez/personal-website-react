import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaMedium, FaTwitter, FaInstagram, FaYoutube, FaTwitch } from 'react-icons/fa'
import './Contact.css'

function Contact() {
  return (
    <div className='contact-container'>
      <h1 className='contact-header'>Contact</h1>
      <div className='contact-content'>
        <section className='email'>
          <h2>Email Address</h2>
          <p><a href='mailto: joseph@p14.dev'>joseph@p14.dev</a></p>
        </section>
        <section className='social-media'>
          <h2>Social Media</h2>
            <Link className='social-icon-link' to='/linkedin' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </Link>
            <Link className='social-icon-link' to='/github' target='_blank' aria-label='Github'>
              <FaGithub />
            </Link>
            <Link className='social-icon-link' to='/medium' target='_blank' aria-label='Medium'>
              <FaMedium />
            </Link>
            <Link className='social-icon-link' to='/twitter' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </Link>
            <Link className='social-icon-link' to='/instagram' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </Link>
            <Link className='social-icon-link' to='/youtube' target='_blank' aria-label='YouTube'>
              <FaYoutube />
            </Link>
            <Link className='social-icon-link' to='/twitch' target='_blank' aria-label='Twitch'>
              <FaTwitch />
            </Link>
        </section>
      </div>
    </div>
  )
}

export default Contact