import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Page.css'
import './Products.css'

const Products = () => {
  const [activeCategory, setActiveCategory] = useState(0)
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const productsRef = useRef(null)

  const products = [
    {
      id: 1,
      name: 'Intraocular Lenses (IOLs)',
      shortName: 'IOLs',
      description: 'High-quality monofocal and hydrophobic acrylic intraocular lenses designed for superior optical performance and long-term biocompatibility.',
      image: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=Intraocular+Lenses',
      features: [
        'Monofocal IOLs for clear vision correction',
        'Hydrophobic acrylic material for durability',
        'Superior quality and compatibility',
        'Certified and tested for safety'
      ],
      details: 'Our IOLs are carefully selected to ensure optimal outcomes for cataract surgery and other ophthalmic procedures, providing patients with improved vision quality.',
      color: 'var(--primary)'
    },
    {
      id: 2,
      name: 'Viscoelastic Solutions',
      shortName: 'Viscoelastic',
      description: 'Sterile viscoelastic solutions including HPMC (Hydroxypropyl Methylcellulose) and Sodium Hyaluronate for safe and effective ophthalmic surgery.',
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Viscoelastic+Solutions',
      features: [
        'HPMC-based solutions',
        'Sodium Hyaluronate formulations',
        'Sterile and dependable quality',
        'Essential for surgical protection'
      ],
      details: 'These solutions are critical for maintaining anterior chamber stability during surgery and protecting delicate ocular tissues, ensuring safer procedures and better patient outcomes.',
      color: 'var(--secondary)'
    },
    {
      id: 3,
      name: 'Surgical Instruments & Supplies',
      shortName: 'Instruments',
      description: 'Complete range of microsurgical instruments and disposable supplies for ophthalmic procedures, ensuring precision and safety.',
      image: 'https://via.placeholder.com/600x400/06b6d4/ffffff?text=Surgical+Instruments',
      features: [
        'Microsurgical knives and blades',
        'Sterile surgical drapes',
        'Precision cannulas and needles',
        'Safety and precision engineered'
      ],
      details: 'Our surgical instruments and supplies are designed for precision and reliability, meeting the exacting standards required for modern ophthalmic surgery. Every product is carefully selected to ensure optimal performance and patient safety.',
      color: 'var(--accent)'
    }
  ]

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (productsRef.current) {
        const rect = productsRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    if (productsRef.current) {
      productsRef.current.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (productsRef.current) {
        productsRef.current.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <div className="page products-page">
      <section className="page-hero products-hero">
        <div className="container">
          <h1 className="page-title fade-in">Our Products</h1>
          <p className="page-subtitle fade-in">Comprehensive Ophthalmic Product Range</p>
          <div className="products-stats">
            <div className="product-stat">
              <div className="stat-icon">📦</div>
              <div className="stat-content">
                <div className="stat-number">50+</div>
                <div className="stat-label">Product Varieties</div>
              </div>
            </div>
            <div className="product-stat">
              <div className="stat-icon">✅</div>
              <div className="stat-content">
                <div className="stat-number">100%</div>
                <div className="stat-label">Certified Quality</div>
              </div>
            </div>
            <div className="product-stat">
              <div className="stat-icon">🌍</div>
              <div className="stat-content">
                <div className="stat-number">15+</div>
                <div className="stat-label">Clinics Served</div>
              </div>
            </div>
          </div>
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

      <section className="section section-alt products-section" ref={productsRef}>
        <div className="container">
          <div className="products-grid">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`product-card-interactive ${hoveredProduct === product.id ? 'active' : ''}`}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="product-image-wrapper">
                  <div 
                    className="product-image-glow"
                    style={{
                      background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${product.color}40, transparent)`
                    }}
                  ></div>
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    <div className="product-overlay">
                      <div className="product-badge">Featured</div>
                    </div>
                  </div>
                  <div className="product-hover-effect"></div>
                </div>
                
                <div className="product-content">
                  <div className="product-header">
                    <h2 className="product-name">{product.name}</h2>
                    <div className="product-short-name">{product.shortName}</div>
                  </div>
                  
                  <p className="product-description">{product.description}</p>
                  
                  <div className="product-features">
                    <h3>Key Features:</h3>
                    <ul className="feature-list-interactive">
                      {product.features.map((feature, idx) => (
                        <li key={idx}>
                          <span className="feature-icon">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="product-details-expand">
                    <p className="product-details">{product.details}</p>
                  </div>
                  
                  <div className="product-actions">
                    <Link to="/contact" className="btn-primary product-btn">
                      <span>Request Info</span>
                      <svg className="btn-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                    <Link to="/contact" className="btn-secondary product-btn">
                      Get Quote
                    </Link>
                  </div>
                </div>
                
                <div className="product-decoration">
                  <div className="decoration-circle" style={{ '--color': product.color }}></div>
                  <div className="decoration-circle" style={{ '--color': product.color }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section product-showcase">
        <div className="container">
          <h2 className="section-title">Why Choose Our Products?</h2>
          <div className="showcase-grid">
            <div className="showcase-item card glow float">
              <div className="showcase-icon">🏆</div>
              <h3>Premium Quality</h3>
              <p>All products meet international quality standards and are certified for medical use.</p>
            </div>
            <div className="showcase-item card glow-secondary float" style={{ animationDelay: '0.2s' }}>
              <div className="showcase-icon">🔬</div>
              <h3>Extensively Tested</h3>
              <p>Rigorous testing and quality control ensure safety and reliability.</p>
            </div>
            <div className="showcase-item card glow float" style={{ animationDelay: '0.4s' }}>
              <div className="showcase-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Efficient supply chain ensures timely delivery to your facility.</p>
            </div>
            <div className="showcase-item card glow-secondary float" style={{ animationDelay: '0.6s' }}>
              <div className="showcase-icon">💼</div>
              <h3>Expert Support</h3>
              <p>Our team provides comprehensive technical support and guidance.</p>
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
              <Link to="/contact" className="btn-primary">
                <span>Request Product List</span>
                <svg className="btn-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
