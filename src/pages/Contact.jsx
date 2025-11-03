import { useState } from 'react'
import './Page.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // For static site, we'll use mailto link
    const subject = encodeURIComponent('Contact Form Submission')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:sales@habashmed.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title fade-in">Contact Us</h1>
          <p className="page-subtitle fade-in">Get in Touch - We're Here to Help</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-card card glow">
                <h2>Head Office</h2>
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <div>
                    <p>Mazraa, Osama bin Zaid St</p>
                    <p>Damascus, Syria</p>
                  </div>
                </div>
              </div>

              <div className="info-card card glow-secondary">
                <h2>Contact Details</h2>
                <div className="info-item">
                  <span className="info-icon">📞</span>
                  <div>
                    <p>Tel: <a href="tel:+963114413651">+963 11 44 13651</a></p>
                    <p>Mobile: <a href="tel:+963939413333">+963 93 941 3333</a></p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">✉️</span>
                  <div>
                    <p><a href="mailto:sales@habashmed.com">sales@habashmed.com</a></p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">🌐</span>
                  <div>
                    <p><a href="http://www.habashmed.com" target="_blank" rel="noopener noreferrer">www.habashmed.com</a></p>
                  </div>
                </div>
              </div>

              <div className="info-card card glow">
                <h2>Business Hours</h2>
                <div className="info-item">
                  <p>Sunday - Thursday: 9:00 AM - 5:00 PM</p>
                  <p>Friday: Closed</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="emergency-note">24/7 Emergency Support Available</p>
                </div>
              </div>

              <div className="map-card card">
                <img src="https://via.placeholder.com/600x400/1e293b/3b82f6?text=Location+Map" alt="Location Map" />
              </div>
            </div>

            <div className="contact-form-wrapper">
              <div className="form-card card glow">
                <h2>Send Us a Message</h2>
                <p className="form-subtitle">Fill out the form below and we'll get back to you as soon as possible.</p>
                
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="organization">Organization</label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Your organization or clinic"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+963 XX XXX XXXX"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="quick-contact">
            <h2 className="section-title">Quick Contact Options</h2>
            <div className="quick-buttons">
              <a href="tel:+963114413651" className="quick-btn card glow">
                <span className="quick-icon">📞</span>
                <span>Call Us</span>
              </a>
              <a href="mailto:sales@habashmed.com" className="quick-btn card glow-secondary">
                <span className="quick-icon">✉️</span>
                <span>Email Us</span>
              </a>
              <a href="https://wa.me/963939413333" target="_blank" rel="noopener noreferrer" className="quick-btn card glow">
                <span className="quick-icon">💬</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

