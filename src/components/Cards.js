import React from 'react'

import CardItem from './CardItem'
import './Cards.css'

import img1 from '../assets/images/img-9.jpeg'
import img2 from '../assets/images/img-2.jpeg'

import img3 from '../assets/images/img-1.jpeg'
import img4 from '../assets/images/img-3.jpeg'
import img5 from '../assets/images/img-4.jpeg'

function Cards() {
    return (
        <div className='cards'>
            <h1>Latest Projects</h1>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src={img1} text='Explore the hidden waterfall deep inside the Amazon Jungle' label='React' path='/projects' />
                        <CardItem src={img2} text='a beach wow look there are probably sharks in there wowow' label='JavaScript' path='/projects' />
                    </ul>

                    <ul className='cards__items'>
                        <CardItem src={img3} text='look, a neat mountain sunset... or sunrise?!' label='Ruby on Rails' path='/projects' />
                        <CardItem src={img4} text='spoooooooooooooooooooooky' label='Ruby on Rails' path='/projects' />
                        <CardItem src={img5} text='its called soccer, not football' label='Ruby on Rails' path='/projects' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards