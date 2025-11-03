import { Link } from 'react-router-dom'
import ThemeSwitcher from './ThemeSwitcher'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Habash Med</h3>
            <p className="footer-description">
              Delivering Excellence in Vision and Ophthalmic Solutions across Syria.
            </p>
            <div className="footer-glow"></div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/coverage">Coverage</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">More</h4>
            <ul className="footer-links">
              <li><Link to="/partners">Partners</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/strategy">Strategy</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="contact-info">
              <p>Mazraa, Osama bin Zaid St</p>
              <p>Damascus, Syria</p>
              <p>Tel: +963 11 44 13651</p>
              <p>Mobile: +963 93 941 3333</p>
              <p>
                <a href="mailto:sales@habashmed.com">sales@habashmed.com</a>
              </p>
              <p>
                <a href="http://www.habashmed.com" target="_blank" rel="noopener noreferrer">
                  www.habashmed.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; Habash Med, 2018–2025. All rights reserved.</p>
          <div className="footer-bottom-right">
            <div className="footer-theme-switcher">
              <ThemeSwitcher />
            </div>
            <div className="language-switch">
              <span className="lang-active">EN</span>
              <span className="lang-divider">|</span>
              <span>AR</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

