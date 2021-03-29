import React from 'react'

function ProjectItem(props) {
    return (
        <div className='post-block'>
            <div className='header'>
                <h1 className='title'>{props.title}</h1>
                
                <div className='links'>
                    <a href={props.github} target='_blank' rel='noreferrer'>Github</a>
                    |
                    <a href={props.github} target='_blank' rel='noreferrer'>Demo</a>
                </div>
            </div>

            <div className='content'>
                <img src={props.src} alt='project icon' className='image' />
                <p className='text'>{props.text}</p>
            </div>
        </div>
    )
}

export default ProjectItem