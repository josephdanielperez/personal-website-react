import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>

            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='social-icons'>

                        <Link className='social-icon-link' to='/github' target='_blank' aria-label='Github'>
                            <i className='fab fa-github'></i>
                        </Link>

                        <Link className='social-icon-link' to='/linkedin' target='_blank' aria-label='LinkedIn'>
                            <i className='fab fa-linkedin'></i>
                        </Link>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Footer
