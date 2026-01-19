const experiences = [
  {
    title: "Green Intern",
    company: "1M1B Organization",
    period: "Aug 2025 – Oct 2025",
    location: "Buffalo, Wyoming, United States · Hybrid",
    highlights: [
      "Built a carbon footprint tracking application to quantify and visualize CO₂ emissions from user activities.",
      "Enabled activity-level emission analysis and reduction exploration, helping users understand how behavioral changes reduce carbon impact.",
      "Implemented data visualization features for actionable insights"
    ]
  },
  {
    title: "Circuits and Sensor Fusion Coordinator",
    company: "ISA VIT Pune, Student Section",
    period: "Nov 2024 – Jun 2025",
    location: "Pune, India",
    highlights: [
      "Hands-on experience with microcontrollers (ESP32, Raspberry Pi Pico, NodeMCU), electronic modules, and communication protocols.",
      "Conducted ROS (Robot Operating System) workshops, guiding participants through setup and hands-on project implementation.",
      "Led technical sessions on embedded systems and sensor integration"
    ]
  }
];

export default function Experience() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-header">
          <h1>Experience</h1>
          <p className="page-subtitle">My professional journey and roles</p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-card">
              <div className="timeline-marker"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h2>{exp.title}</h2>
                    <p className="company-name">{exp.company}</p>
                  </div>
                  <p className="period">{exp.period}</p>
                </div>
                <p className="location">{exp.location}</p>
                <ul className="highlights">
                  {exp.highlights.map((highlight, hidx) => (
                    <li key={hidx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
