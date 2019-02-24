import React from 'react'
import './projectcard.css'

export default class ProjectCard extends React.Component {
  render() {
    return (
      <div className="project-card">
        <h1>cool, {this.props.project.title}</h1>
      </div>
    )
  }
}