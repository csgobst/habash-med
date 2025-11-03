import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Page.css'
import './About.css'

const About = () => {
  const [activeValue, setActiveValue] = useState(null)
  const [visibleTimeline, setVisibleTimeline] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const aboutRef = useRef(null)
  const timelineRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        setVisibleTimeline(isVisible)
      }
    }

    if (aboutRef.current) {
      aboutRef.current.addEventListener('mousemove', handleMouseMove)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount

    return () => {
      if (aboutRef.current) {
        aboutRef.current.removeEventListener('mousemove', handleMouseMove)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const values = [
    {
      id: 1,
      title: 'Quality',
      description: 'We source and deliver only certified, high-quality products from trusted manufacturers, ensuring safety and efficacy in every transaction.',
      icon: '✨',
      color: 'var(--primary)'
    },
    {
      id: 2,
      title: 'Reliability',
      description: 'Our consistent supply chain and dependable service delivery ensure that healthcare providers can count on us when they need us most.',
      icon: '🔒',
      color: 'var(--secondary)'
    },
    {
      id: 3,
      title: 'Integrity',
      description: 'We conduct business with transparency, honesty, and ethical standards, building lasting relationships based on trust.',
      icon: '🤝',
      color: 'var(--accent)'
    },
    {
      id: 4,
      title: 'Customer Focus',
      description: 'Every decision we make is guided by our commitment to understanding and meeting the unique needs of our customers.',
      icon: '❤️',
      color: 'var(--primary)'
    }
  ]

  const timelineItems = [
    {
      year: '2018',
      title: 'Foundation',
      description: 'Habash Med was founded in Damascus with a vision to provide quality ophthalmic solutions to healthcare providers across Syria.',
      icon: '🚀'
    },
    {
      year: '2019',
      title: 'Service Department',
      description: 'Established our in-house maintenance and technical support department to provide comprehensive on-site services.',
      icon: '🔧'
    },
    {
      year: '2020-2024',
      title: 'Expansion & Growth',
      description: 'Continued expansion of our product range, partnerships, and service coverage across major cities in Syria.',
      icon: '📈'
    },
    {
      year: '2025',
      title: 'Ongoing Excellence',
      description: 'Committed to serving over 15 major clinics and hospitals with plans for further expansion to Northern Syria.',
      icon: '⭐',
      isActive: true
    }
  ]

  return (
    <div className="page about-page" ref={aboutRef}>
      <section className="page-hero about-hero">
        <div className="container">
          <div className="hero-content-wrapper">
            <h1 className="page-title fade-in">About Us</h1>
            <p className="page-subtitle fade-in">Delivering Excellence Since 2018</p>
            <div className="about-stats">
              <div className="about-stat card glow float">
                <div className="stat-icon">📅</div>
                <div className="stat-number">2018</div>
                <div className="stat-label">Founded</div>
              </div>
              <div className="about-stat card glow-secondary float" style={{ animationDelay: '0.2s' }}>
                <div className="stat-icon">🏥</div>
                <div className="stat-number">15+</div>
                <div className="stat-label">Clinics Served</div>
              </div>
              <div className="about-stat card glow float" style={{ animationDelay: '0.4s' }}>
                <div className="stat-icon">👥</div>
                <div className="stat-number">6</div>
                <div className="stat-label">Team Members</div>
              </div>
              <div className="about-stat card glow-secondary float" style={{ animationDelay: '0.6s' }}>
                <div className="stat-icon">🌍</div>
                <div className="stat-number">2+</div>
                <div className="stat-label">Active Regions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-grid about-intro">
            <div className="content-text">
              <h2 className="section-heading">Who We Are</h2>
              <p className="text-large">
                Founded in 2018 and based in Damascus, Habash Med is a leading provider of 
                ophthalmic products and technical services in Syria. We serve ophthalmologists, 
                clinics, and hospitals nationwide with a commitment to quality, reliability, and 
                exceptional customer service.
              </p>
              <p>
                Our mission is to make advanced ophthalmic solutions accessible to healthcare 
                providers across Syria, ensuring that every patient receives the best possible care 
                through cutting-edge equipment and reliable support.
              </p>
              <div className="intro-cta">
                <Link to="/contact" className="btn-primary">
                  <span>Get in Touch</span>
                  <svg className="btn-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="content-image interactive-image">
              <div 
                className="image-glow"
                style={{
                  background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.4), transparent)`
                }}
              ></div>
              <img src="https://via.placeholder.com/600x400/6366f1/ffffff?text=About+Habash+Med" alt="About" />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h3>Excellence in Every Detail</h3>
                  <p>7+ Years of Dedicated Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt mission-vision-section">
        <div className="container">
          <div className="mission-vision">
            <div className="mv-card card glow interactive-card">
              <div className="card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To provide healthcare providers in Syria with the highest quality ophthalmic products 
                and technical services, ensuring reliable access to advanced medical solutions that 
                improve patient outcomes and support the growth of ophthalmic care across the region.
              </p>
            </div>
            <div className="mv-card card glow-secondary interactive-card">
              <div className="card-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                To become the leading trusted partner for ophthalmic solutions in Syria, recognized 
                for our commitment to excellence, innovation, and comprehensive support that enables 
                healthcare providers to deliver exceptional patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div
                key={value.id}
                className={`value-card card float interactive-value ${activeValue === value.id ? 'active' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
                onMouseEnter={() => setActiveValue(value.id)}
                onMouseLeave={() => setActiveValue(null)}
              >
                <div className="value-icon-wrapper">
                  <div className="value-icon" style={{ '--color': value.color }}>
                    {value.icon}
                  </div>
                  <div className="value-glow" style={{ '--color': value.color }}></div>
                </div>
                <div className="value-number">0{value.id}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt timeline-section" ref={timelineRef}>
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <div className={`timeline ${visibleTimeline ? 'visible' : ''}`}>
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`timeline-item ${item.isActive ? 'active' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content card interactive-timeline">
                  <div className="timeline-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-box card glow">
            <h2>Join Us on Our Journey</h2>
            <p>Become a part of our growing network of healthcare providers</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">
                <span>Partner With Us</span>
                <svg className="btn-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/team" className="btn-secondary">
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
