import React from 'react'
import './Project.css'

function Project(props) {
  return (
    <div className='project-container'>
      <div className='project-header'>
        <h1 className='project-title'>{props.title}</h1>
        
        <div className='project-links'>
          <a href={props.github} target='_blank' rel='noreferrer'>Github</a>
            
          {props.demo !== '' &&
          <>
            | <a href={props.demo} target='_blank' rel='noreferrer'>Demo</a>
          </>
          }
        </div>
      </div>

      <div className='project-description'>
          <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Project