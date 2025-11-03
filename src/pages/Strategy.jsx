import { Link } from 'react-router-dom'
import './Page.css'

const Strategy = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title fade-in">Strategic Goals & Advantages</h1>
          <p className="page-subtitle fade-in">Why Choose Habash Med</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="intro-text">
            <p className="text-large">
              Our strategic vision guides everything we do, from product selection to customer 
              service. We're committed to being the leading provider of ophthalmic solutions in 
              Syria, and our competitive advantages make us the ideal partner for your healthcare needs.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Strategic Goals</h2>
          <div className="goals-grid">
            <div className="goal-card card glow float">
              <div className="goal-icon">🎯</div>
              <h3>Regional Leadership</h3>
              <p>Establish Habash Med as the leading ophthalmic solutions provider in Syria, recognized for excellence and innovation.</p>
            </div>
            <div className="goal-card card glow-secondary float" style={{ animationDelay: '0.2s' }}>
              <div className="goal-icon">🌍</div>
              <h3>Accessibility</h3>
              <p>Make advanced ophthalmic products and services accessible to healthcare providers across all regions of Syria.</p>
            </div>
            <div className="goal-card card glow float" style={{ animationDelay: '0.4s' }}>
              <div className="goal-icon">💰</div>
              <h3>Affordability</h3>
              <p>Provide competitive pricing and flexible packages that make quality healthcare solutions financially viable.</p>
            </div>
            <div className="goal-card card glow-secondary float" style={{ animationDelay: '0.6s' }}>
              <div className="goal-icon">⭐</div>
              <h3>Service Excellence</h3>
              <p>Maintain the highest standards of customer service, technical support, and after-sales care.</p>
            </div>
            <div className="goal-card card glow float" style={{ animationDelay: '0.8s' }}>
              <div className="goal-icon">🤝</div>
              <h3>Partnership Growth</h3>
              <p>Build and strengthen relationships with healthcare providers, manufacturers, and regional distributors.</p>
            </div>
            <div className="goal-card card glow-secondary float" style={{ animationDelay: '1s' }}>
              <div className="goal-icon">📈</div>
              <h3>Continuous Expansion</h3>
              <p>Expand our coverage to Northern Syria and beyond, reaching more healthcare providers nationwide.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Competitive Advantages</h2>
          <div className="advantages-list">
            <div className="advantage-item card glow">
              <div className="advantage-content">
                <div className="advantage-icon">✓</div>
                <div>
                  <h3>Certified High-Quality Products</h3>
                  <p>All our products are sourced from trusted manufacturers and meet international quality standards. We ensure every product is certified, tested, and safe for clinical use.</p>
                </div>
              </div>
            </div>
            <div className="advantage-item card glow-secondary">
              <div className="advantage-content">
                <div className="advantage-icon">✓</div>
                <div>
                  <h3>Comprehensive Product Range</h3>
                  <p>From IOLs to surgical instruments, we offer a complete range of ophthalmic products, reducing the need for multiple suppliers and simplifying your procurement process.</p>
                </div>
              </div>
            </div>
            <div className="advantage-item card glow">
              <div className="advantage-content">
                <div className="advantage-icon">✓</div>
                <div>
                  <h3>Competitive Pricing & Flexible Packages</h3>
                  <p>We understand budget constraints and offer competitive pricing with flexible payment and package options tailored to your specific needs and financial situation.</p>
                </div>
              </div>
            </div>
            <div className="advantage-item card glow-secondary">
              <div className="advantage-content">
                <div className="advantage-icon">✓</div>
                <div>
                  <h3>Proven Service Excellence</h3>
                  <p>Our track record speaks for itself - over 15 major clinics trust us, and our 24/7 support, on-site maintenance, and technical assistance ensure you're never left without help.</p>
                </div>
              </div>
            </div>
            <div className="advantage-item card glow">
              <div className="advantage-content">
                <div className="advantage-icon">✓</div>
                <div>
                  <h3>Experienced Team</h3>
                  <p>Our team brings together years of experience in medical equipment distribution, technical support, and healthcare services, ensuring you receive expert guidance and support.</p>
                </div>
              </div>
            </div>
            <div className="advantage-item card glow-secondary">
              <div className="advantage-content">
                <div className="advantage-icon">✓</div>
                <div>
                  <h3>In-House Service Department</h3>
                  <p>Unlike many suppliers, we have our own dedicated maintenance and technical support team, providing faster response times and more personalized service.</p>
                </div>
              </div>
            </div>
            <div className="advantage-item card glow">
              <div className="advantage-content">
                <div className="advantage-icon">✓</div>
                <div>
                  <h3>Nationwide Coverage</h3>
                  <p>With active operations in Damascus and Homs, and expansion plans to Northern Syria, we're committed to serving healthcare providers wherever they are located.</p>
                </div>
              </div>
            </div>
            <div className="advantage-item card glow-secondary">
              <div className="advantage-content">
                <div className="advantage-icon">✓</div>
                <div>
                  <h3>Strong Regional Partnerships</h3>
                  <p>Our relationships with leading regional distributors and manufacturers ensure we can access the latest products and maintain consistent supply chains.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt contact-section">
        <div className="container">
          <div className="cta-box card glow">
            <h2>Experience the Difference</h2>
            <p>Discover why healthcare providers across Syria choose Habash Med for their ophthalmic solutions.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">Contact Us Today</Link>
              <Link to="/products" className="btn-secondary">View Products</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Strategy

