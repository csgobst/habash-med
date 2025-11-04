import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  console.log('Home component rendering...')
  
  return (
    <div className="home">
      <section className="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container" style={{ textAlign: 'center', padding: '2rem' }}>
          <div className="hero-content">
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#6366f1' }}>
              Habash Med
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#d1d5db' }}>
              Ophthalmic Products & Technical Services in Syria
            </p>
            <p style={{ marginBottom: '2rem', color: '#9ca3af' }}>
              Founded in 2018 in Damascus, Habash Med supplies ophthalmic equipment, 
              disposables, and on-site technical support to clinics and hospitals across Syria.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link 
                to="/products" 
                style={{
                  padding: '1rem 2rem',
                  backgroundColor: '#6366f1',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '0.5rem',
                  fontWeight: '600'
                }}
              >
                View Products
              </Link>
              <Link 
                to="/contact"
                style={{
                  padding: '1rem 2rem',
                  backgroundColor: 'transparent',
                  color: '#6366f1',
                  textDecoration: 'none',
                  borderRadius: '0.5rem',
                  border: '2px solid #6366f1',
                  fontWeight: '600'
                }}
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#f9fafb' }}>Our Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ padding: '2rem', backgroundColor: '#1f2937', borderRadius: '0.5rem' }}>
              <h3 style={{ color: '#f9fafb', marginBottom: '1rem' }}>Sales & Distribution</h3>
              <p style={{ color: '#d1d5db' }}>Comprehensive product range with reliable distribution channels</p>
            </div>
            <div style={{ padding: '2rem', backgroundColor: '#1f2937', borderRadius: '0.5rem' }}>
              <h3 style={{ color: '#f9fafb', marginBottom: '1rem' }}>Technical Support</h3>
              <p style={{ color: '#d1d5db' }}>On-site repair, calibration, and preventive maintenance services</p>
            </div>
            <div style={{ padding: '2rem', backgroundColor: '#1f2937', borderRadius: '0.5rem' }}>
              <h3 style={{ color: '#f9fafb', marginBottom: '1rem' }}>Customer Care</h3>
              <p style={{ color: '#d1d5db' }}>24/7 support hotline and comprehensive staff training programs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home