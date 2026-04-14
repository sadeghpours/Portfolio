function Skills() {
  const skillsData = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', icon: '⚛️' },
        { name: 'Angular', icon: '🅰️' },
        { name: 'JavaScript', icon: '✨' },
        { name: 'TypeScript', icon: '🔷' },
        { name: 'HTML5', icon: '📄' },
        { name: 'CSS', icon: '🎨' }
      ]
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', icon: '🔧' },
        { name: 'VS Code', icon: '💻' },
        { name: 'Figma', icon: '🎨' },
        { name: 'Terminal', icon: '🖥️' }
      ]
    }
  ]

  return (
    <section id="skills">
      <h2>Skills</h2>
      {skillsData.map((category) => (
        <div key={category.category} className="skills-category">
          <h3>{category.category}</h3>
          <div className="skills-grid">
            {category.skills.map((skill) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Skills
