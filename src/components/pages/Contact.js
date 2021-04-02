import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

function Contact() {
    
    return (
        <>
            <h1 className='contact'>Contact</h1>

            <div className='contact-block'>
                <h2>All Inquiries</h2>
                <p><a href='mailto: joseph@p14.dev'>joseph@p14.dev</a></p>

                <section className='social-media'>
                    <div className='social-media-wrap'>
                        <div className='social-icons'>
                            
                            <Link className='social-icon-link' to='/linkedin' target='_blank' aria-label='LinkedIn'>
                                <i className='fab fa-linkedin'></i>
                            </Link>

                            <Link className='social-icon-link' to='/github' target='_blank' aria-label='Github'>
                                <i className='fab fa-github'></i>
                            </Link>

                            <Link className='social-icon-link' to='/medium' target='_blank' aria-label='Medium'>
                                <i className='fab fa-medium'></i>
                            </Link>

                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Contact