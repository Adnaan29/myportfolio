import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link to="/" className="nav-logo">
          <span>AM</span>
        </Link>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            to="/skills" 
            className={`nav-link ${isActive('/skills') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Skills
          </Link>
          <Link 
            to="/experience" 
            className={`nav-link ${isActive('/experience') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Experience
          </Link>
          <Link 
            to="/projects" 
            className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link 
            to="/education" 
            className={`nav-link ${isActive('/education') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Education
          </Link>
          <Link 
            to="/publications" 
            className={`nav-link ${isActive('/publications') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Research
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link nav-link-cta ${isActive('/contact') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
