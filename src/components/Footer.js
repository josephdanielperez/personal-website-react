import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'

import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to receive our best vacation deals
                </p>

                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>

                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input' />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>

            <section className='social-media'>
                <div className='social-media-wrap'>
                    {/* <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            P14 <i className='fas fa-code' />
                        </Link>
                    </div>

                    <small className='website-rights'>P14 © 2021</small> */}

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
