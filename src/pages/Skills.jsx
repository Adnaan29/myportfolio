const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "C++", "Java", "Python", "JavaScript", "HTML", "CSS"]
  },
  {
    title: "Backend & Web",
    skills: ["Django", "Flask", "Node.js", "REST APIs", "MySQL", "MongoDB", "FastAPI"]
  },
  {
    title: "AI & Machine Learning",
    skills: ["Machine Learning", "RAG Systems", "Generative AI", "Deep Learning", "LangChain"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Git", "GitHub", "Deployment"]
  },
  {
    title: "Systems & Security",
    skills: ["Operating Systems", "Computer Networks", "Cryptography", "Information Security", "Microcontrollers"]
  },
  {
    title: "Methodologies",
    skills: ["System Design", "Debugging", "Technical Documentation", "Agile", "Problem Solving"]
  }
];

const proficiencyLevels = [
  {
    level: "Expert",
    skills: "C, C++, Python, System Design, OS Concepts"
  },
  {
    level: "Advanced",
    skills: "Web Development, Backend Systems, Cryptography, Cybersecurity, Game Dev"
  },
  {
    level: "Intermediate",
    skills: "AI/ML, Cloud Services, DevOps, Databases"
  }
];

export default function Skills() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-header">
          <h1>Skills & Expertise</h1>
          <p className="page-subtitle">Technologies, tools, and methodologies I work with</p>
        </div>

        <div className="skills-container">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category-card">
              <h2>{category.title}</h2>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="proficiency-section">
          <h2>Proficiency Levels</h2>
          <div className="proficiency-grid">
            {proficiencyLevels.map((prof, idx) => (
              <div key={idx} className="proficiency-item">
                <h3>{prof.level}</h3>
                <p>{prof.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
