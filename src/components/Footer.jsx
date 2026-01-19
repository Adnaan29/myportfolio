import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Adnaan Momin</h3>
            <p>Computer Engineering Student • Backend Systems • Security & AI</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Connect</h3>
            <ul>
              <li>
                <a href="mailto:adnaan.momin23@vit.edu">Email</a>
              </li>
              <li>
                <a href="https://github.com/Adnaan29" target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/adnaan-momin-20715924a" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Adnaan Momin. All rights reserved.</p>
          <p>Built with React, Vite, and ❤️</p>
        </div>
      </div>
    </footer>
  );
}
