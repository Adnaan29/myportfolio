const educationData = [
  {
    degree: "B.Tech Computer Engineering",
    school: "Vishwakarma Institute Of Technology",
    location: "Pune, India",
    graduation: "2027",
    details: "Focused on systems, security, and applied AI"
  },
  {
    degree: "Higher Secondary Certificate",
    school: "Trinity International School",
    location: "Pune, India",
    graduation: "2023",
    details: "Strong foundation in mathematics and sciences"
  },
  {
    degree: "Senior Secondary Certificate",
    school: "International Indian School",
    location: "Al Jubail, Saudi Arabia",
    graduation: "2021",
    details: "Comprehensive CBSE curriculum"
  }
];

const certifications = [
  { name: "Google Cybersecurity Professional", year: "2025" },
  { name: "AWS Cloud Technology Consultant", year: "2025" },
  { name: "Google AI Essentials", year: "2025" },
  { name: "Fundamentals of Deep Learning", year: "2024" },
  { name: "Go Green Initiative (NSS Unit)", year: "2024" },
  { name: "BrainPy Workshop", year: "2024" }
];

export default function Education() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-header">
          <h1>Education & Certifications</h1>
          <p className="page-subtitle">Academic achievements and continuous learning</p>
        </div>

        <div className="education-section">
          <h2>Education</h2>
          <div className="education-timeline">
            {educationData.map((edu, idx) => (
              <div key={idx} className="education-card">
                <div className="timeline-marker"></div>
                <div className="education-content">
                  <h3>{edu.degree}</h3>
                  <p className="school-name">{edu.school}</p>
                  <p className="school-location">{edu.location}</p>
                  <p className="education-details">{edu.details}</p>
                  <div className="education-meta">
                    <span>Graduation: {edu.graduation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="certifications-section">
          <h2>Certifications</h2>
          <div className="certifications-grid">
            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-item">
                <span className="cert-badge">✓</span>
                <h3>{cert.name}</h3>
                <p>{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
