import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-glow glow"></div>
        </div>
        <div className="container">
          <div className="hero-content fade-in">
            <h1 className="hero-title">
              Delivering Excellence in
              <span className="text-gradient"> Vision and Ophthalmic Solutions</span>
            </h1>
            <p className="hero-subtitle">
              Founded in 2018 in Damascus, Habash Med supplies ophthalmic equipment, 
              disposables, and on-site technical support to clinics and hospitals across Syria.
            </p>
            <div className="hero-cta">
              <Link to="/products" className="btn-primary">View Products</Link>
              <Link to="/contact" className="btn-secondary">Contact Sales</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Tiles */}
      <section className="section">
        <div className="container">
          <div className="value-tiles">
            <div className="value-tile card float">
              <div className="tile-icon">✨</div>
              <h3>Quality</h3>
              <p>Certified high-quality products from trusted manufacturers</p>
            </div>
            <div className="value-tile card float" style={{ animationDelay: '0.2s' }}>
              <div className="tile-icon">🔒</div>
              <h3>Reliability</h3>
              <p>Consistent supply chain and dependable service delivery</p>
            </div>
            <div className="value-tile card float" style={{ animationDelay: '0.4s' }}>
              <div className="tile-icon">🤝</div>
              <h3>Integrity</h3>
              <p>Transparent business practices and ethical standards</p>
            </div>
            <div className="value-tile card float" style={{ animationDelay: '0.6s' }}>
              <div className="tile-icon">❤️</div>
              <h3>Customer Focus</h3>
              <p>Dedicated support tailored to your needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Preview */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Our Product Range</h2>
          <div className="product-preview">
            <div className="product-card card">
              <div className="product-image">
                <img src="https://via.placeholder.com/400x300/3b82f6/ffffff?text=IOLs" alt="IOLs" />
              </div>
              <h3>Intraocular Lenses (IOLs)</h3>
              <p>Monofocal & hydrophobic acrylic lenses with superior quality and compatibility</p>
              <Link to="/products" className="btn-secondary">Learn More</Link>
            </div>
            <div className="product-card card">
              <div className="product-image">
                <img src="https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Viscoelastic" alt="Viscoelastic" />
              </div>
              <h3>Viscoelastic Solutions</h3>
              <p>HPMC and Sodium Hyaluronate solutions - sterile and dependable</p>
              <Link to="/products" className="btn-secondary">Learn More</Link>
            </div>
            <div className="product-card card">
              <div className="product-image">
                <img src="https://via.placeholder.com/400x300/06b6d4/ffffff?text=Surgical+Instruments" alt="Surgical Instruments" />
              </div>
              <h3>Surgical Instruments & Supplies</h3>
              <p>Microsurgical knives, drapes, blades, and cannulas for precision surgery</p>
              <Link to="/products" className="btn-secondary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-preview">
            <div className="service-item card">
              <h3>Sales & Distribution</h3>
              <p>Comprehensive product range with reliable distribution channels</p>
            </div>
            <div className="service-item card">
              <h3>Supply Management</h3>
              <p>Reliable deliveries to hospitals, clinics, and private practices</p>
            </div>
            <div className="service-item card">
              <h3>Surgical Disposables</h3>
              <p>Sterile, single-use surgical supplies for optimal patient safety</p>
            </div>
            <div className="service-item card">
              <h3>Maintenance & Support</h3>
              <p>On-site repair, calibration, and preventive maintenance services</p>
            </div>
            <div className="service-item card">
              <h3>On-Call Care</h3>
              <p>24/7 support hotline and comprehensive staff training programs</p>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/services" className="btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Coverage Strip */}
      <section className="coverage-strip section">
        <div className="container">
          <div className="coverage-content">
            <div className="coverage-text">
              <h2>Serving Clinics & Hospitals Across Syria</h2>
              <p>Active in Damascus and Homs, with plans to expand to Northern Syria</p>
              <Link to="/coverage" className="btn-primary">View Coverage Map</Link>
            </div>
            <div className="coverage-image">
              <img src="https://via.placeholder.com/600x400/1e293b/3b82f6?text=Syria+Coverage+Map" alt="Coverage Map" />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Trusted by Leading Healthcare Providers</h2>
          <div className="achievements">
            <div className="achievement-card card glow-secondary">
              <h3>15+</h3>
              <p>Major Clinics Supplied</p>
            </div>
            <div className="achievement-card card glow-secondary">
              <h3>100%</h3>
              <p>In-House Service Department</p>
            </div>
            <div className="achievement-card card glow-secondary">
              <h3>7+</h3>
              <p>Years of Excellence</p>
            </div>
          </div>
          <div className="partners-logos">
            <div className="partner-logo">
              <img src="https://via.placeholder.com/200x100/3b82f6/ffffff?text=Partner+1" alt="Partner" />
            </div>
            <div className="partner-logo">
              <img src="https://via.placeholder.com/200x100/8b5cf6/ffffff?text=Partner+2" alt="Partner" />
            </div>
            <div className="partner-logo">
              <img src="https://via.placeholder.com/200x100/06b6d4/ffffff?text=Partner+3" alt="Partner" />
            </div>
            <div className="partner-logo">
              <img src="https://via.placeholder.com/200x100/3b82f6/ffffff?text=Partner+4" alt="Partner" />
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/partners" className="btn-secondary">View Partners & Achievements</Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta section">
        <div className="container">
          <div className="cta-content card glow">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today for a quote or to schedule a consultation</p>
            <div className="cta-info">
              <div className="cta-item">
                <span className="cta-icon">📞</span>
                <div>
                  <p>Phone</p>
                  <a href="tel:+963114413651">+963 11 44 13651</a>
                </div>
              </div>
              <div className="cta-item">
                <span className="cta-icon">✉️</span>
                <div>
                  <p>Email</p>
                  <a href="mailto:sales@habashmed.com">sales@habashmed.com</a>
                </div>
              </div>
            </div>
            <Link to="/contact" className="btn-primary">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

