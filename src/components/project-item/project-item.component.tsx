import React from 'react'
import {
  ProjectItemContainer,
  ProjectFooterContainer,
  ViewProject,
  BackgroundImage,
  NameContainer,
} from './project-item.styles'

interface ProjectItemProps {
  project: {
    name: string
    imageUrl: string
    url: string
  }
}
const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const { name, imageUrl, url } = project
  return (
    <ProjectItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <ProjectFooterContainer>
        <NameContainer>{name}</NameContainer>
      </ProjectFooterContainer>
      <ViewProject onClick={() => window.open(url)} inverted>
        View Project
      </ViewProject>
    </ProjectItemContainer>
  )
}

export default ProjectItem
