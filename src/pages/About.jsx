export default function About() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-header">
          <h1>About Me</h1>
          <p className="page-subtitle">My Background & Interests</p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <h2>Who I Am</h2>
            <p>
              I'm a passionate Computer Engineering student at Vishwakarma Institute of Technology, 
              currently in my third year. I'm fascinated by systems that work cleanly and correctly—
              where performance, security, and reliability aren't afterthoughts.
            </p>
          </div>

          <div className="about-card">
            <h2>What I Do</h2>
            <p>
              I build production-grade backends, cryptographic systems, and high-performance AI pipelines. 
              My focus is on solving real problems with elegant, maintainable solutions that scale well 
              and handle edge cases thoughtfully.
            </p>
          </div>

          <div className="about-card">
            <h2>My Interests</h2>
            <p>
              Backend security and cryptography, operating system design, retrieval-augmented generation (RAG), 
              and system optimization. I enjoy working close to the hardware and understanding how modern 
              systems actually work under the hood.
            </p>
          </div>

          <div className="about-card">
            <h2>Beyond Coding</h2>
            <p>
              I'm passionate about problem-solving and technical documentation. I love debugging complex systems, 
              contributing to meaningful projects, and mentoring others. When I'm not coding, you'll find me 
              exploring new technologies or working on side projects.
            </p>
          </div>
        </div>

        <div className="about-highlight">
          <h2>Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <span className="value-icon">⚡</span>
              <h3>Correctness</h3>
              <p>Code that works, reliably and predictably</p>
            </div>
            <div className="value-item">
              <span className="value-icon">🔒</span>
              <h3>Security</h3>
              <p>Building systems that protect user data</p>
            </div>
            <div className="value-item">
              <span className="value-icon">📈</span>
              <h3>Performance</h3>
              <p>Optimized solutions that scale efficiently</p>
            </div>
            <div className="value-item">
              <span className="value-icon">🎯</span>
              <h3>Clarity</h3>
              <p>Code and documentation that's easy to understand</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
