import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Adnaan Momin</h1>
          <p className="hero-subtitle">Computer Engineering Student</p>
          <p className="hero-subtext">Backend Systems • Security • Applied AI</p>
          <p className="hero-description">
            Third-year Computer Engineering student at Vishwakarma Institute of Technology. 
            I design, implement, and refine solutions that prioritize correctness, security, and real-world impact.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="button primary">View My Work</Link>
            <Link to="/contact" className="button secondary">Get In Touch</Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>4+</h3>
              <p>Featured Projects</p>
            </div>
            <div className="stat">
              <h3>2+</h3>
              <p>Internships</p>
            </div>
            <div className="stat">
              <h3>3</h3>
              <p>Publications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
