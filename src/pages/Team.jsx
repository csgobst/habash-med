import { Link } from 'react-router-dom'
import './Page.css'

const Team = () => {
  const teamMembers = [
    {
      name: 'Eng. Anas Habash',
      role: 'CEO',
      description: '7+ years of experience in medical equipment distribution. Leading Habash Med with vision and dedication to excellence.',
      image: 'https://via.placeholder.com/300x300/3b82f6/ffffff?text=Anas+Habash'
    },
    {
      name: 'Eng. Samih Enaya',
      role: 'Operations Manager',
      description: 'Expert in project execution and healthcare supply chains. Ensures smooth operations and efficient service delivery.',
      image: 'https://via.placeholder.com/300x300/8b5cf6/ffffff?text=Samih+Enaya'
    },
    {
      name: 'Eng. Mohammed Kherdaji',
      role: 'Sales Manager',
      description: 'Driving sales growth and building strong customer relationships across Syria.',
      image: 'https://via.placeholder.com/300x300/06b6d4/ffffff?text=Mohammed+Kherdaji'
    },
    {
      name: 'Zaher Zaitoni',
      role: 'Sales Representative',
      description: 'Dedicated to understanding customer needs and providing tailored solutions.',
      image: 'https://via.placeholder.com/300x300/3b82f6/ffffff?text=Zaher+Zaitoni'
    },
    {
      name: 'Zaher Lababedi',
      role: 'Sales Representative',
      description: 'Committed to delivering exceptional service and support to healthcare providers.',
      image: 'https://via.placeholder.com/300x300/8b5cf6/ffffff?text=Zaher+Lababedi'
    },
    {
      name: 'Eng. Yahya Issa',
      role: 'Service Engineer',
      description: 'Expert technical support ensuring equipment reliability and optimal performance.',
      image: 'https://via.placeholder.com/300x300/06b6d4/ffffff?text=Yahya+Issa'
    }
  ]

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title fade-in">Our Team</h1>
          <p className="page-subtitle fade-in">Meet the Experts Behind Habash Med</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="intro-text">
            <p className="text-large">
              Our team combines years of experience in medical equipment distribution, technical 
              support, and healthcare services. We're committed to providing exceptional service 
              and building lasting relationships with our partners.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Leadership Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="team-card card float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-glow"></div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="team-stats">
            <div className="stat-card card glow-secondary">
              <h3>7+</h3>
              <p>Years Combined Experience</p>
            </div>
            <div className="stat-card card glow-secondary">
              <h3>6</h3>
              <p>Team Members</p>
            </div>
            <div className="stat-card card glow-secondary">
              <h3>100%</h3>
              <p>Dedicated Support</p>
            </div>
            <div className="stat-card card glow-secondary">
              <h3>24/7</h3>
              <p>Available Assistance</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt contact-section">
        <div className="container">
          <div className="cta-box card glow">
            <h2>Get in Touch</h2>
            <p>Contact our team to discuss your needs, request a consultation, or schedule a technical visit.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">Contact Sales</Link>
              <Link to="/contact" className="btn-secondary">Book a Technical Visit</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team

