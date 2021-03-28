import React from 'react'

function ProjectItem(props) {
    return (
        <>
            <h2 className='title'>{props.title}</h2>
            <p className='text'>{props.text}</p>
        </>
    )
}

export default ProjectItem