import { Link } from 'react-router-dom'
import './Page.css'

const Services = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title fade-in">Our Services</h1>
          <p className="page-subtitle fade-in">Comprehensive Support Beyond Products</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="intro-text">
            <p className="text-large">
              At Habash Med, we go beyond just supplying products. We provide comprehensive services 
              designed to ensure your ophthalmic practice operates smoothly and efficiently, with 
              the support you need when you need it.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="services-grid">
            <div className="service-card card glow float">
              <div className="service-icon">📦</div>
              <h2>Sales & Distribution</h2>
              <p className="text-large">
                We offer a comprehensive range of ophthalmic products through reliable distribution 
                channels, ensuring timely delivery and availability.
              </p>
              <ul className="service-features">
                <li>Wide product range</li>
                <li>Efficient distribution network</li>
                <li>Multiple ordering channels</li>
                <li>Flexible delivery options</li>
              </ul>
            </div>

            <div className="service-card card glow-secondary float" style={{ animationDelay: '0.2s' }}>
              <div className="service-icon">🚚</div>
              <h2>Supply Management</h2>
              <p className="text-large">
                Reliable supply chain management ensuring consistent deliveries to hospitals, clinics, 
                and private practices across Syria.
              </p>
              <ul className="service-features">
                <li>Regular scheduled deliveries</li>
                <li>Emergency supply availability</li>
                <li>Inventory management support</li>
                <li>Customized supply plans</li>
              </ul>
            </div>

            <div className="service-card card glow float" style={{ animationDelay: '0.4s' }}>
              <div className="service-icon">🔬</div>
              <h2>Surgical Disposables</h2>
              <p className="text-large">
                Sterile, single-use surgical supplies essential for maintaining the highest standards 
                of infection control and patient safety.
              </p>
              <ul className="service-features">
                <li>Sterile packaging</li>
                <li>Single-use design</li>
                <li>Quality certified</li>
                <li>Comprehensive range</li>
              </ul>
            </div>

            <div className="service-card card glow-secondary float" style={{ animationDelay: '0.6s' }}>
              <div className="service-icon">🔧</div>
              <h2>Maintenance & Technical Support</h2>
              <p className="text-large">
                On-site repair, calibration, and preventive maintenance services to keep your equipment 
                operating at peak performance.
              </p>
              <ul className="service-features">
                <li>On-site repair services</li>
                <li>Equipment calibration</li>
                <li>Preventive maintenance</li>
                <li>Technical troubleshooting</li>
              </ul>
            </div>

            <div className="service-card card glow float" style={{ animationDelay: '0.8s' }}>
              <div className="service-icon">📞</div>
              <h2>On-Call Care</h2>
              <p className="text-large">
                24/7 support hotline and comprehensive staff training programs to ensure your team 
                is always prepared.
              </p>
              <ul className="service-features">
                <li>24/7 support hotline</li>
                <li>Emergency response</li>
                <li>Staff training programs</li>
                <li>Technical consultation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="cta-box card glow">
            <h2>Need Support?</h2>
            <p>Contact us to schedule maintenance, request support, or learn more about our services</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">Request Support</Link>
              <Link to="/contact" className="btn-secondary">Book Maintenance Visit</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

