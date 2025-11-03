import { Link } from 'react-router-dom'
import './Page.css'

const Coverage = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title fade-in">Coverage in Syria</h1>
          <p className="page-subtitle fade-in">Serving Healthcare Providers Nationwide</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="coverage-statement card glow">
            <h2 className="section-heading">Our Operational Footprint</h2>
            <p className="text-large">
              Habash Med is actively serving clinics and hospitals across Syria, with a strong 
              presence in major cities and ongoing expansion plans to reach even more healthcare 
              providers.
            </p>
            <div className="coverage-details">
              <div className="coverage-region">
                <h3>Current Coverage</h3>
                <ul>
                  <li>✓ <strong>Damascus</strong> - Head office and primary service area</li>
                  <li>✓ <strong>Homs</strong> - Active service and distribution</li>
                </ul>
              </div>
              <div className="coverage-region">
                <h3>Planned Expansion</h3>
                <ul>
                  <li>→ <strong>Northern Syria</strong> - Expansion underway</li>
                  <li>→ Additional regions to be announced</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="map-section">
            <h2 className="section-title">Service Map</h2>
            <div className="map-container card">
              <img src="https://via.placeholder.com/1000x600/1e293b/3b82f6?text=Syria+Coverage+Map" alt="Syria Coverage Map" />
              <div className="map-overlay">
                <div className="map-marker" style={{ top: '40%', left: '30%' }}>
                  <div className="marker-pin"></div>
                  <div className="marker-label">Damascus</div>
                </div>
                <div className="map-marker" style={{ top: '50%', left: '45%' }}>
                  <div className="marker-pin"></div>
                  <div className="marker-label">Homs</div>
                </div>
                <div className="map-marker planned" style={{ top: '25%', left: '50%' }}>
                  <div className="marker-pin"></div>
                  <div className="marker-label">Northern Syria (Planned)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="coverage-stats">
            <div className="stat-card card glow-secondary">
              <h3>15+</h3>
              <p>Major Clinics Served</p>
            </div>
            <div className="stat-card card glow-secondary">
              <h3>2</h3>
              <p>Active Regions</p>
            </div>
            <div className="stat-card card glow-secondary">
              <h3>100%</h3>
              <p>Service Coverage</p>
            </div>
            <div className="stat-card card glow-secondary">
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt contact-section">
        <div className="container">
          <div className="cta-box card glow">
            <h2>Become a Partner Clinic</h2>
            <p>Interested in partnering with us? We're always looking to expand our network and serve more healthcare providers.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">Schedule a Visit</Link>
              <Link to="/contact" className="btn-secondary">Become a Partner</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Coverage

