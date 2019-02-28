import React from 'react'

function ProjectShow() {
  const {
    image,
    title,
    longdesc: longDesc,
    class: madeFor,
    tech,
    live,
    repo
  } = this.props.project

  return (
    <div id="project-show-container">
      <img src={image} alt={title} id="project-show-image"></img>>
      <h1 id="project-show-title">{title}</h1>
      <p id="project-show-madeFor">{madeFor}</p>
      <p id="project-show-long-description">{longDesc}</p>
      <p id="project-show-tech-label">Technologies Used</p>
      <p id="project-show-tech">{tech}</p>
      <a href={live} target="_blank">Live</a>
      <a href={repo} target="_blank">Code</a>
    </div>
  )
}

export default ProjectShow