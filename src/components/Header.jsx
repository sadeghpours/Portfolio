import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((open) => !open)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header>
      <div className="header-content">
        <div className="logo">Sepideh Sadeghpour</div>

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={toggleMenu}
        >
          <span className="menu-icon" />
        </button>

        <nav className={menuOpen ? 'open' : ''}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
