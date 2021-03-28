import React from 'react'

import '../../App.css'
import ProjectItem from '../ProjectItem'

function Projects() {
    
    return (
        <>
            <h1 className='projects'>Projects</h1>
            <ProjectItem title='MyFitnessApp' text='A React/Redux application that uses a React JS frontend and Ruby on Rails backend. This is a demonatration of a generator application to help provide structure to workouts. A user is able to create an account to access the application, then use the generator to state what type of workout they are interested in and how long they want their workout to be. The database of workouts also enables users to learn more about each individual exercise through an instructional video sourced online.' label='React' github='' demo='' />
            <ProjectItem title='TodoList' text='A React application that does not utilize a backend library. This simple todo list application allows users to utilize CRUD capabilities on objectives and mark them for completition. This also comes in a stylish package to make for an easy UX.' label='React' github='' demo='' />

            <ProjectItem title='Coaching Manager' text='An appointment scheduling application that utilizes RESTful conventions and authentication. Athletes are able to schedule 30 minute training sessions with specific coaches within a specific time/operating hours.' label='Ruby on Rails' github='' demo='' />
        </>
    )
}

export default Projects