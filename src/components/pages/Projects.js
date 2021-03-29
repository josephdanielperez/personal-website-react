import React from 'react'

import '../../App.css'
import ProjectItem from '../ProjectItem'

import img from '../../assets/images/Untitled-1.png'

function Projects() {
    
    return (
        <>
            <h1 className='projects'>Projects</h1>
            
            <ProjectItem
                title='MyFitnessApp'
                text='A React/Redux application that uses a React JS frontend and Ruby on Rails backend. This is a demonatration of a generator application to help provide structure to workouts. A user is able to create an account to access the application, then use the generator to state what type of workout they are interested in and how long they want their workout to be. The database of workouts also enables users to learn more about each individual exercise through an instructional video sourced online.'
                src={img}
                label='React'
                github='https://github.com/josephdanielperez/myfitnessapp-client'
                demo=''
            />

            <ProjectItem
                title='TodoList'
                text='A React application that does not utilize a backend library. This simple todo list application allows users to utilize CRUD capabilities on objectives and mark them for completition. This also comes in a stylish package to make for an easy UX.'
                src={img}
                label='React'
                github='https://github.com/josephdanielperez/todolist'
                demo=''
            />

            <ProjectItem
                title='Coaching Manager'
                text='An appointment scheduling application that utilizes RESTful conventions and authentication. Athletes are able to schedule 30 minute training sessions with coaches in database during a specific hours of operation. These sessions are have CRUD functionality and can be changed or canceled after scheduling.'
                src={img}
                label='Ruby on Rails'
                github='https://github.com/josephdanielperez/CoachingManager'
                demo=''
            />
            
            <ProjectItem
                title='PokeTeams'
                text='Social website with authentication programmed using Ruby. Pokemon fans are able to share their favorite Pokemon teams with an online community.'
                src={img}
                label='Ruby'
                github='https://github.com/josephdanielperez/PokeTeams'
                demo=''
            />

            <ProjectItem
                title='Gaming News CLI'
                text='My very first project that I have ever created. This command line interface scrapes data from PC Gamer and allows you to read 10 latest PC Gamer news articles (updated in realtime).'
                src={img}
                label='Ruby'
                github='https://github.com/josephdanielperez/Gaming-News-CLI'
                demo=''
            />
        </>
    )
}

export default Projects