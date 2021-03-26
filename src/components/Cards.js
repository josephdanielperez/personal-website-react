import React from 'react'

import CardItem from './CardItem'
import './Cards.css'

import img1 from '../assets/images/img-17.png'
import img2 from '../assets/images/img-18.png'

import img3 from '../assets/images/img-19.png'
import img4 from '../assets/images/img-20.png'
import img5 from '../assets/images/img-4.jpeg'

function Cards() {
    return (
        <div className='cards'>
            <h1>My Latest Projects</h1>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src={img1} text='MyFitnessApp - Answering the question "Where do I start?" when you step into the gym' label='React' path='/projects' />
                        <CardItem src={img2} text='TodoList - Simple todo list application with CRUD capabilities and a stylish look' label='React' path='/projects' />
                    </ul>

                    <ul className='cards__items'>
                        <CardItem src={img3} text='Coaching Manager - An appointment scheduling application' label='Ruby on Rails' path='/projects' />
                        <CardItem src={img4} text='PokeTeams - Social website where you an share your favorite teams' label='Ruby' path='/projects' />
                        <CardItem src={img5} text='Gaming News CLI - Read 10 latest PC Gamer news articles' label='Ruby' path='/projects' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards