import { Link } from 'react-router-dom'
import './Page.css'

const Products = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title fade-in">Our Products</h1>
          <p className="page-subtitle fade-in">Comprehensive Ophthalmic Product Range</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="intro-text">
            <p className="text-large">
              We offer a comprehensive range of ophthalmic products designed to meet the diverse 
              needs of healthcare providers. All our products are sourced from trusted manufacturers 
              and meet the highest quality standards.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="product-categories">
            <div className="product-category card glow">
              <div className="category-image">
                <img src="https://via.placeholder.com/500x350/3b82f6/ffffff?text=Intraocular+Lenses" alt="IOLs" />
              </div>
              <div className="category-content">
                <h2>Intraocular Lenses (IOLs)</h2>
                <p className="text-large">
                  High-quality monofocal and hydrophobic acrylic intraocular lenses designed for 
                  superior optical performance and long-term biocompatibility.
                </p>
                <ul className="feature-list">
                  <li>✓ Monofocal IOLs for clear vision correction</li>
                  <li>✓ Hydrophobic acrylic material for durability</li>
                  <li>✓ Superior quality and compatibility</li>
                  <li>✓ Certified and tested for safety</li>
                </ul>
                <p>
                  Our IOLs are carefully selected to ensure optimal outcomes for cataract surgery 
                  and other ophthalmic procedures, providing patients with improved vision quality.
                </p>
              </div>
            </div>

            <div className="product-category card glow-secondary">
              <div className="category-image">
                <img src="https://via.placeholder.com/500x350/8b5cf6/ffffff?text=Viscoelastic+Solutions" alt="Viscoelastic" />
              </div>
              <div className="category-content">
                <h2>Viscoelastic Solutions</h2>
                <p className="text-large">
                  Sterile viscoelastic solutions including HPMC (Hydroxypropyl Methylcellulose) and 
                  Sodium Hyaluronate for safe and effective ophthalmic surgery.
                </p>
                <ul className="feature-list">
                  <li>✓ HPMC-based solutions</li>
                  <li>✓ Sodium Hyaluronate formulations</li>
                  <li>✓ Sterile and dependable quality</li>
                  <li>✓ Essential for surgical protection</li>
                </ul>
                <p>
                  These solutions are critical for maintaining anterior chamber stability during 
                  surgery and protecting delicate ocular tissues, ensuring safer procedures and 
                  better patient outcomes.
                </p>
              </div>
            </div>

            <div className="product-category card glow">
              <div className="category-image">
                <img src="https://via.placeholder.com/500x350/06b6d4/ffffff?text=Surgical+Instruments" alt="Surgical Instruments" />
              </div>
              <div className="category-content">
                <h2>Surgical Instruments & Supplies</h2>
                <p className="text-large">
                  Complete range of microsurgical instruments and disposable supplies for ophthalmic 
                  procedures, ensuring precision and safety.
                </p>
                <ul className="feature-list">
                  <li>✓ Microsurgical knives and blades</li>
                  <li>✓ Sterile surgical drapes</li>
                  <li>✓ Precision cannulas and needles</li>
                  <li>✓ Safety and precision engineered</li>
                </ul>
                <p>
                  Our surgical instruments and supplies are designed for precision and reliability, 
                  meeting the exacting standards required for modern ophthalmic surgery. Every 
                  product is carefully selected to ensure optimal performance and patient safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="cta-box card glow">
            <h2>Interested in Our Products?</h2>
            <p>Request a detailed product list or get a customized quote for your needs</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">Request Product List</Link>
              <Link to="/contact" className="btn-secondary">Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products

