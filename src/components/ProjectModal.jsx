import { useState, useEffect } from 'react'

function ProjectModal({ project, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isClosing, setIsClosing] = useState(false)

  // Reset image index when project changes (prevents index mismatch)
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [project?.id])

  // Handle closing animation
  useEffect(() => {
    if (!isOpen && isClosing) {
      // Reset closing state when modal is fully closed
      setIsClosing(false)
    }
  }, [isOpen, isClosing])

  // Return null if project doesn't exist (handles when parent sets selectedProject to null)
  if (!project) return null

  // Only render if modal should be visible (opening or closing)
  if (!isOpen && !isClosing) return null

  // Create safe images array with fallback to coverImage
  const imagesArray = project.images && project.images.length > 0 
    ? project.images 
    : project.coverImage 
      ? [project.coverImage] 
      : []

  const handleClose = () => {
    setIsClosing(true)
    // Wait for animation to complete before calling onClose
    setTimeout(() => {
      onClose()
    }, 300) // Match the CSS animation duration
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === imagesArray.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? imagesArray.length - 1 : prev - 1
    )
  }

  const hasVideo = project.videoUrl && project.videoUrl.trim() !== ''

  return (
    <div className={`modal-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
      <div className={`modal-content ${isClosing ? 'closing' : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>&times;</button>

        {/* Video section - shows at top if it exists */}
        {hasVideo && (
          <div className="modal-video-container">
            <video controls className="modal-video">
              <source src={project.videoUrl} />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {/* Image carousel - shows below video or alone if no video */}
        <div className="modal-image-container">
          {imagesArray.length > 0 ? (
            <>
              <img
                src={imagesArray[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="modal-image"
              />

              {imagesArray.length > 1 && (
                <>
                  <button className="modal-nav modal-prev" onClick={prevImage}>
                    &#8249;
                  </button>
                  <button className="modal-nav modal-next" onClick={nextImage}>
                    &#8250;
                  </button>
                  <div className="modal-indicators">
                    {imagesArray.map((_, index) => (
                      <span
                        key={index}
                        className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div style={{ 
              width: '100%', 
              height: '300px', 
              backgroundColor: 'var(--bg-light-purple)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'var(--secondary)'
            }}>
              No images available
            </div>
          )}
        </div>

        <div className="modal-details">
          <h2>{project.title}</h2>
          <p className="modal-description">{project.fullDescription || project.description}</p>
          <p className="modal-tech">Tech stack: {project.techStack}</p>

          <div className="modal-links">
            {project.githubUrl && project.githubUrl.trim() !== '' && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {project.liveDemoUrl && project.liveDemoUrl.trim() !== '' && (
              <a href={project.liveDemoUrl} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal