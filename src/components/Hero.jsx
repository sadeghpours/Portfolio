function Hero() {
  return (
    <section id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Hi, I'm Sepideh Sadeghpour</h1>
          <h2>Front-End Developer & Creative Builder</h2>
          <p>Creating fast, scalable, and elegant solutions.
            </p>
            <p>Clean code, clever solutions, and a love for building things that work beautifully.</p>
          <div className="btn-group">
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn">Contact Me</a>
          </div>
        </div>
        <div className="hero-photo">
          <img src="/images/photo.png" alt="Sepideh Sadeghpour" className="profile-photo" />
        </div>
      </div>
    </section>
  )
}

export default Hero
