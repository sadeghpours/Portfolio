import { useState, useEffect } from 'react'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      type="button"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 8.5l5.5 5.5-1.1 1.1L13 11.6V19h-2v-7.4L7.6 15.1 6.5 14l5.5-5.5z" />
      </svg>
    </button>
  )
}

export default BackToTop
