import React from 'react'
import './SingleProject.css';

const SingleProject = ({tag, projectImage, projectTitle, chanelName}) => {
  return (
    <div className='single-project'>
        <div className='single-project-image'>
            <span className='single-project-tag'><p>{tag}</p></span>
            <img src={projectImage} alt='project' />
        </div>
        <p className='chanel-name'>{chanelName}</p>
        <h3 className='project-title'>{projectTitle}</h3>
    </div>
  )
}

export default SingleProject
