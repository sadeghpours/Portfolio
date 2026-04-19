import { useState } from 'react'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="projects-carousel-item"
              data-active={index === currentIndex ? 'true' : 'false'}
            >
              <ProjectCard
                project={project}
                onClick={() => openModal(project)}
              />
            </div>
          ))}
        </div>
        <button className="carousel-arrow carousel-prev" onClick={goToPrevious} aria-label="Previous project">
          ‹
        </button>
        <button className="carousel-arrow carousel-next" onClick={goToNext} aria-label="Next project">
          ›
        </button>
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
