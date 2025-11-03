import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeSwitcher from './ThemeSwitcher'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 50)
      
      // Calculate scroll progress (0 to 1)
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const maxScroll = documentHeight - windowHeight
      const progress = Math.min(scrollY / maxScroll, 1)
      setScrollProgress(progress)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/services', label: 'Services' },
    { path: '/coverage', label: 'Coverage' },
    { path: '/partners', label: 'Partners' },
    { path: '/team', label: 'Team' },
    { path: '/strategy', label: 'Strategy' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-background"></div>
      <div 
        className="header-progress" 
        style={{ transform: `scaleX(${scrollProgress})` }}
      ></div>
      <div className="header-gradient"></div>
      <div className="container">
        <div className="header-content">
          <Link 
            to="/" 
            className="logo"
            onMouseEnter={() => setHoveredLink('logo')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <span className="logo-text">Habash Med</span>
            <span className="logo-glow"></span>
            {hoveredLink === 'logo' && <span className="logo-ripple"></span>}
          </Link>
          
          <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseEnter={() => setHoveredLink(link.path)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{ 
                  '--i': index,
                  animationDelay: `${index * 0.05}s` 
                }}
              >
                <span className="nav-link-text">{link.label}</span>
                <span className="nav-link-underline"></span>
                {hoveredLink === link.path && (
                  <span className="nav-link-glow"></span>
                )}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <ThemeSwitcher />
            <Link 
              to="/contact" 
              className="header-cta-btn"
              onMouseEnter={() => setHoveredLink('cta')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <span>Get Quote</span>
              <svg className="btn-arrow" width="14" height="14" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <button
              className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
