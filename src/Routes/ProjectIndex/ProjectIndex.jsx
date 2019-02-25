import React from 'react'
import './projectindex.css'

import ProjectCard from './Components/ProjectCard/ProjectCard.jsx'

// eslint-disable-next-line
export default class ProjectIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  renderProjectCards() {
    const { projects } = this.props

    // Loop through `projects` and create a ProjectCard for each
    return projects.map((project) => {
      return (
        <ProjectCard
          project={project}
          key={project._id}
        />
      )
    })
  }

  render() {
    return (
      <div id="project-index-container">
        <h1 id="project-index-h1">Projects</h1>
        
        <div id="projects-container">
          {this.renderProjectCards()}
        </div>
      </div>
    )
  }
}