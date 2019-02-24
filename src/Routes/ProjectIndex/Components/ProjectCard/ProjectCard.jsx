import React from 'react'
import './projectcard.css'

export default class ProjectCard extends React.Component {
  render() {
    const {
      image,
      title,
      shortDesc,
      class: madeFor,
      tech,
      live,
      repo
    } = this.props.project
    return (
      <div className="project-card">
        <h1>{title}</h1>
        <p>{shortDesc}</p>
        <p>Made for {madeFor}</p>
        <p>Tech: {tech}</p>
        <a href={live} target="_blank">View Live</a>
        <a href={repo} target="_blank">View Code</a>
      </div>
    )
  }
}