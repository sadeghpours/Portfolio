function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Sepideh Sadeghpour</h3>
        <p>Front-End Developer</p>
        <p className="copyright">&copy; {currentYear} Sepideh Sadeghpour. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
