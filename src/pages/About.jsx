import './Page.css'

const About = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title fade-in">About Us</h1>
          <p className="page-subtitle fade-in">Delivering Excellence Since 2018</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-grid">
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
            </div>
            <div className="content-image">
              <img src="https://via.placeholder.com/600x400/3b82f6/ffffff?text=About+Habash+Med" alt="About" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="mission-vision">
            <div className="mv-card card glow">
              <h3>Our Mission</h3>
              <p>
                To provide healthcare providers in Syria with the highest quality ophthalmic products 
                and technical services, ensuring reliable access to advanced medical solutions that 
                improve patient outcomes and support the growth of ophthalmic care across the region.
              </p>
            </div>
            <div className="mv-card card glow-secondary">
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

      <section className="section">
        <div className="container">
          <h2 className="section-title">Core Values</h2>
          <div className="values-grid">
            <div className="value-card card float">
              <div className="value-number">01</div>
              <h3>Quality</h3>
              <p>We source and deliver only certified, high-quality products from trusted manufacturers, ensuring safety and efficacy in every transaction.</p>
            </div>
            <div className="value-card card float" style={{ animationDelay: '0.2s' }}>
              <div className="value-number">02</div>
              <h3>Reliability</h3>
              <p>Our consistent supply chain and dependable service delivery ensure that healthcare providers can count on us when they need us most.</p>
            </div>
            <div className="value-card card float" style={{ animationDelay: '0.4s' }}>
              <div className="value-number">03</div>
              <h3>Integrity</h3>
              <p>We conduct business with transparency, honesty, and ethical standards, building lasting relationships based on trust.</p>
            </div>
            <div className="value-card card float" style={{ animationDelay: '0.6s' }}>
              <div className="value-number">04</div>
              <h3>Customer Focus</h3>
              <p>Every decision we make is guided by our commitment to understanding and meeting the unique needs of our customers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2018</div>
              <div className="timeline-content card">
                <h3>Foundation</h3>
                <p>Habash Med was founded in Damascus with a vision to provide quality ophthalmic solutions to healthcare providers across Syria.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2019</div>
              <div className="timeline-content card">
                <h3>Service Department</h3>
                <p>Established our in-house maintenance and technical support department to provide comprehensive on-site services.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020-2024</div>
              <div className="timeline-content card">
                <h3>Expansion & Growth</h3>
                <p>Continued expansion of our product range, partnerships, and service coverage across major cities in Syria.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <div className="timeline-content card glow">
                <h3>Ongoing Excellence</h3>
                <p>Committed to serving over 15 major clinics and hospitals with plans for further expansion to Northern Syria.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

