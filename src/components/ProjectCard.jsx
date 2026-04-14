function ProjectCard({ project, onClick }) {
  // Check if there are any valid project links
  const hasGithubUrl = project.githubUrl && project.githubUrl.trim() !== '';
  const hasLiveDemoUrl = project.liveDemoUrl && project.liveDemoUrl.trim() !== '';
  const hasAnyLinks = hasGithubUrl || hasLiveDemoUrl;
  const hasVideo = project.videoUrl && project.videoUrl.trim() !== '';

  return (
    <article className="project-card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="project-image-wrapper">
        <img src={project.coverImage} alt={project.title} />
        {hasVideo && (
          <div className="project-video-badge">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" fill="white" />
            </svg>
          </div>
        )}
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p className="project-description">{project.shortDescription}</p>
        <p className="project-tech">Tech stack: {project.techStack}</p>
        {hasAnyLinks && (
          <div className="project-links">
            {hasGithubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {hasLiveDemoUrl && (
              <a href={project.liveDemoUrl} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
