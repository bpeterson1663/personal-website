import React from 'react'
import ProjectItem from '../components/project-item/project-item.component'
const PROJECTS = [
  {
    id: 1,
    name: 'Crown Clothing',
    imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
    url: 'https://bpeterson1663-crown-clothing.herokuapp.com/',
  },
  {
    id: 2,
    name: 'Scheduling App',
    imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
    url: 'https://when-i-work-challenge.herokuapp.com/',
  },
]
const Projects = () => (
  <div className="page">
    <h1>Projects</h1>
    {PROJECTS.map((project) => (
      <ProjectItem project={project} key={project.id} />
    ))}
  </div>
)

export default Projects
