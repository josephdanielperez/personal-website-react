import React from 'react'

function ProjectItem(props) {
    return (
        <>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </>
    )
}

export default ProjectItem