import React from 'react'
import './projectcard.css'

export default class ProjectCard extends React.Component {
  render() {
    const {
      image,
      title,
      shortdesc: shortDesc,
      class: madeFor,
      tech,
      live,
      repo
    } = this.props.project
    return (
      <div className="project-card-container shadow">
        <img src={image} alt={title} className="project-card-image"></img>
        <h1 className="project-card-title">{title}</h1>
        <p className="project-card-desc">{shortDesc}</p>
        <p className="project-card-class"><span class="bold">Made for</span> {madeFor}</p>
        <p className="project-card-tech"><span class="bold">Tech:</span> {tech}</p>
        <div className="project-card-view-links">
          <a href={live} target="_blank" rel="noopener noreferrer" className="project-card-live-link">View Live</a>
          <a href={repo} target="_blank" rel="noopener noreferrer" className="project-card-repo-link">View Code</a>
        </div>
      </div>
    )
  }
}