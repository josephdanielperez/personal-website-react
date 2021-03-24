import React from 'react'

import CardItem from './CardItem'
import './Cards.css'

import img1 from '../assets/images/img-9.jpeg'
import img2 from '../assets/images/img-2.jpeg'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these awesome destinations!</h1>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src={img1} text='Explore the hidden waterfall deep inside the Amazon Jungle' label='Adventure' path='/projects' />
                        <CardItem src={img2} text='a beach wow look there are probably sharks in there wowow' label='Adventure' path='/projects' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards