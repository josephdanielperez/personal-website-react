import React from 'react'

function Project(props) {
  return (
    <div className='post-block'>
      <div className='header'>
        <h1 className='title'>{props.title}</h1>
        
        <div className='links'>
          <a href={props.github} target='_blank' rel='noreferrer'>Github</a>
            
          {props.demo !== '' &&
          <>
            | <a href={props.demo} target='_blank' rel='noreferrer'>Demo</a>
          </>
          }
        </div>
      </div>

      <div className='content'>
          <p className='text'>{props.text}</p>
      </div>
    </div>
  )
}

export default Project