import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact-container'>
      <h1 className='contact-header'>Contact</h1>
      <div className='contact-content'>
        <section className='email'>
          <h2>All Inquiries</h2>
          <p><a href='mailto: joseph@p14.dev'>joseph@p14.dev</a></p>
        </section>
      </div>
    </div>
  )
}

export default Contact