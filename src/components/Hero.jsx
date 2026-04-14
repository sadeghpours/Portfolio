function Hero() {
  return (
    <section id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Hi, I'm Sepideh Sadeghpour</h1>
          <h2>Front-End Developer</h2>
          <p>
            Front-End Developer with a passion for building responsive, user-friendly web applications using HTML, CSS, JavaScript, Angular, and React. I hold a master's degree in Computer Science and professional certificates in Meta Front-End Development, Google UX Design, Prompt Engineering from Vanderbilt University, and Google Prompting Essentials.
          </p>
          <div className="btn-group">
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn">Contact Me</a>
          </div>
        </div>
        <div className="hero-photo">
          <img src="/images/photo.jpg" alt="Sepideh Sadeghpour" className="profile-photo" />
        </div>
      </div>
    </section>
  )
}

export default Hero
