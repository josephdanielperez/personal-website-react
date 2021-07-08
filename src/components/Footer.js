import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaMedium, FaTwitter, FaInstagram, FaYoutube, FaTwitch } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className='footer'>
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
      </div>
    </footer>
  )
}

export default Footer