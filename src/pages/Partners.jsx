import { Link } from 'react-router-dom'
import './Page.css'

const Partners = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title fade-in">Partners & Achievements</h1>
          <p className="page-subtitle fade-in">Building Trust Through Excellence</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="achievements-intro card glow">
            <h2 className="section-heading">Our Achievements</h2>
            <div className="achievements-list">
              <div className="achievement-item">
                <div className="achievement-icon">🏥</div>
                <div>
                  <h3>15+ Major Clinics Supplied</h3>
                  <p>We have successfully supplied ophthalmic products and services to over 15 major clinics and hospitals across Syria.</p>
                </div>
              </div>
              <div className="achievement-item">
                <div className="achievement-icon">🔧</div>
                <div>
                  <h3>In-House Service Department</h3>
                  <p>Our dedicated maintenance and technical support team provides comprehensive on-site services and equipment care.</p>
                </div>
              </div>
              <div className="achievement-item">
                <div className="achievement-icon">🤝</div>
                <div>
                  <h3>Regional Partnerships</h3>
                  <p>Strong relationships with leading regional distributors and manufacturers, ensuring quality and reliability.</p>
                </div>
              </div>
              <div className="achievement-item">
                <div className="achievement-icon">⭐</div>
                <div>
                  <h3>7+ Years of Excellence</h3>
                  <p>Since 2018, we've been committed to delivering exceptional service and building lasting partnerships.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Our Partners</h2>
          <div className="partners-grid">
            <div className="partner-card card float">
              <div className="partner-logo">
                <img src="https://via.placeholder.com/200x120/3b82f6/ffffff?text=Manufacturer+Partner" alt="Manufacturer Partner" />
              </div>
              <h3>Leading Manufacturers</h3>
              <p>Trusted partnerships with international ophthalmic equipment manufacturers</p>
              <span className="partner-category">Manufacturing</span>
            </div>
            <div className="partner-card card float" style={{ animationDelay: '0.2s' }}>
              <div className="partner-logo">
                <img src="https://via.placeholder.com/200x120/8b5cf6/ffffff?text=Distributor+Partner" alt="Distributor Partner" />
              </div>
              <h3>Regional Distributors</h3>
              <p>Collaborative relationships with regional distribution networks</p>
              <span className="partner-category">Distribution</span>
            </div>
            <div className="partner-card card float" style={{ animationDelay: '0.4s' }}>
              <div className="partner-logo">
                <img src="https://via.placeholder.com/200x120/06b6d4/ffffff?text=Clinic+Partner" alt="Clinic Partner" />
              </div>
              <h3>Healthcare Facilities</h3>
              <p>Long-term partnerships with clinics and hospitals across Syria</p>
              <span className="partner-category">Healthcare</span>
            </div>
            <div className="partner-card card float" style={{ animationDelay: '0.6s' }}>
              <div className="partner-logo">
                <img src="https://via.placeholder.com/200x120/3b82f6/ffffff?text=Service+Partner" alt="Service Partner" />
              </div>
              <h3>Service Providers</h3>
              <p>Strategic alliances with technical service and support providers</p>
              <span className="partner-category">Services</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Success Stories</h2>
          <div className="success-stories">
            <div className="story-card card glow-secondary">
              <h3>Major Hospital Partnership</h3>
              <p>
                "Habash Med has been our trusted partner for ophthalmic supplies for over 3 years. 
                Their reliable service and quality products have been essential to our operations. 
                The technical support team is always responsive and professional."
              </p>
              <span className="story-source">— Leading Hospital, Damascus</span>
            </div>
            <div className="story-card card glow-secondary">
              <h3>Clinic Expansion Support</h3>
              <p>
                "When we expanded our clinic operations, Habash Med provided comprehensive support 
                from equipment selection to installation and training. Their expertise made the 
                transition smooth and efficient."
              </p>
              <span className="story-source">— Private Clinic, Homs</span>
            </div>
            <div className="story-card card glow-secondary">
              <h3>Emergency Response Excellence</h3>
              <p>
                "During a critical equipment failure, Habash Med's 24/7 support team responded 
                immediately with on-site technical assistance. Their quick response prevented 
                significant disruption to our patient care."
              </p>
              <span className="story-source">— Ophthalmic Center, Damascus</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt contact-section">
        <div className="container">
          <div className="cta-box card glow">
            <h2>Interested in Partnership?</h2>
            <p>We're always looking to build new relationships with healthcare providers, manufacturers, and service partners.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">Discuss Partnership</Link>
              <Link to="/contact" className="btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Partners

