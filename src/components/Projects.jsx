import { useState } from 'react'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => openModal(project)}
          />
        ))}
      </div>
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}

export default Projects
