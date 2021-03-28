import React from 'react'

function ProjectItem(props) {
    return (
        <div className='post-block'>
            <h2 className='title'>{props.title}</h2>
            <img src={props.src} alt='project icon' className='image' />
            <p className='text'>{props.text}</p>
        </div>
    )
}

export default ProjectItem