export default function Contact() {
  return (
    <section className="page-section contact-section">
      <div className="container">
        <div className="page-header">
          <h1>Get In Touch</h1>
          <p className="page-subtitle">Let's connect and explore opportunities</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>
              I'm always interested in discussing new projects, opportunities, or just having a chat about 
              technology, systems, and engineering challenges. Feel free to reach out through any of the 
              channels below.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <span className="method-icon">📧</span>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:adnaan.momin23@vit.edu">adnaan.momin23@vit.edu</a>
                </div>
              </div>

              <div className="contact-method">
                <span className="method-icon">💼</span>
                <div>
                  <h3>LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/adnaan-momin-20715924a" target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <span className="method-icon">💻</span>
                <div>
                  <h3>GitHub</h3>
                  <a href="https://github.com/Adnaan29" target="_blank" rel="noopener noreferrer">
                    View My GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="availability-card">
            <h2>Availability</h2>
            <ul className="availability-list">
              <li>
                <strong>Open to opportunities:</strong> Internships, freelance projects, and collaborations
              </li>
              <li>
                <strong>Languages:</strong> English, Hindi, Marathi, Urdu, Arabic
              </li>
              <li>
                <strong>Willing to:</strong> Relocate, work remotely, or take on hybrid roles
              </li>
              <li>
                <strong>Hobbies:</strong> Problem-solving, competitive programming, technical documentation, photography
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
