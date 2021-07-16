import React from 'react'
import './Projects.css'

import ProjectItem from './Project'

function Projects() {    
  return (
    <div className='projects-container'>
      <h1 className='projects-header'>Projects</h1>

      <ProjectItem
        title='Twitch Stream Team'
        text='Built with ReactJS, this website utilizes an API provided by Twitch to showcase a stream team (Astro Gaming). This application renders out a team on Twitch, then renders out every streamer on the team, allowing the user to easily view and navigate through all the streamers. This projects was built to expand my knowledge and futher my skills with API calls.'
        label='React'
        github='https://github.com/p14/twitch-stream-team'
        demo='https://p14.github.io/twitch-stream-team'
      />

      <hr />

      <ProjectItem
        title='Workout Generator'
        text='Built with ReactJS, this web application is a simplied version of a workout generator I previously built. This application generatres a randomized array of eight HIIT exercise objects. The exercises are shown in cards, which the user can go forward or backward to navigate as they complete each exercise. This project is intended for personal use and also showcases the generator concept in a simplified format.'
        label='React'
        github='https://github.com/p14/workout-generator'
        demo='https://p14.github.io/workout-generator'
      />

      <hr />
      
      <ProjectItem
        title='MyFitnessApp'
        text='A React/Redux application that uses a React JS frontend and Ruby on Rails backend. This is a demonatration of a generator application to help provide structure to workouts. A user is able to create an account to access the application, then use the generator to state what type of workout they are interested in and how long they want their workout to be. The database of workouts also enables users to learn more about each individual exercise through an instructional video sourced online.'
        label='React/Redux'
        github='https://github.com/p14/myfitnessapp-client'
        demo='https://youtu.be/vUDn1b-x7PU'
      />

      <hr />

      <ProjectItem
        title='TodoList'
        text='A React application that does not utilize a backend library. This simple todo list application allows users to utilize CRUD capabilities on objectives and mark them for completition. This also comes in a stylish package to make for an easy UX.'
        label='React'
        github='https://github.com/p14/todolist'
        demo='https://youtu.be/-3TwqAO2Lkg'
      />

      <hr />

      <ProjectItem
        title='Coaching Manager'
        text='An appointment scheduling application that utilizes RESTful conventions and authentication. Athletes are able to schedule 30 minute training sessions with coaches in database during a specific hours of operation. These sessions are have CRUD functionality and can be changed or canceled after scheduling.'
        label='Ruby on Rails'
        github='https://github.com/p14/CoachingManager'
        demo='https://youtu.be/JmFN83i0ajI'
      />

      <hr />
      
      <ProjectItem
        title='PokeTeams'
        text='Social website with authentication programmed using Ruby. Pokemon fans are able to share their favorite Pokemon teams with an online community.'
        label='Ruby'
        github='https://github.com/p14/PokeTeams'
        demo=''
      />

      <hr />

      <ProjectItem
        title='Gaming News CLI'
        text='My very first project that I have ever created. This command line interface scrapes data from PC Gamer and allows you to read 10 latest PC Gamer news articles (updated in realtime).'
        label='Ruby'
        github='https://github.com/p14/Gaming-News-CLI'
        demo='https://youtu.be/QUj00KNIsi0'
      />
    </div>
  )
}

export default Projects