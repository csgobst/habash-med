import { useEffect, useState } from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import Footer from './components/Footer'
import Header from './components/Header'
import LoadingScreen from './components/LoadingScreen'
import ScrollToTop from './components/ScrollToTop'
import TestComponent from './components/TestComponent'
import { ThemeProvider } from './contexts/ThemeContext'
import About from './pages/About'
import Contact from './pages/Contact'
import Coverage from './pages/Coverage'
import Home from './pages/Home'
import Partners from './pages/Partners'
import Products from './pages/Products'
import Services from './pages/Services'
import SimpleHome from './pages/SimpleHome'
import Strategy from './pages/Strategy'
import Team from './pages/Team'
import performanceMonitor from './utils/performanceMonitor'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadError, setLoadError] = useState(null)

  useEffect(() => {
    console.log('App component mounting...')
    let isComponentMounted = true

    // Simulate initial load and check for critical resources
    const initializeApp = async () => {
      try {
        // Add a minimum loading time for UX
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Check if we're on GitHub Pages and handle routing
        if (window.location.hostname.includes('github.io')) {
          console.log('GitHub Pages detected, ensuring proper routing...')
        }

        // Verify critical DOM elements exist
        if (!document.getElementById('root')) {
          throw new Error('Root element not found')
        }

        if (isComponentMounted) {
          setIsLoading(false)
        }
      } catch (error) {
        console.error('App initialization failed:', error)
        if (isComponentMounted) {
          setLoadError(error)
          setIsLoading(false)
        }
      }
    }

    // Add error recovery mechanism
    const errorHandler = (event) => {
      console.error('Unhandled error in App:', event.error)
      performanceMonitor.reportError(event.error)
      if (isComponentMounted && !loadError) {
        setLoadError(event.error)
      }
    }

    const rejectionHandler = (event) => {
      console.error('Unhandled promise rejection in App:', event.reason)
      performanceMonitor.reportError(new Error(event.reason))
      if (isComponentMounted && !loadError) {
        setLoadError(new Error(event.reason))
      }
    }

    window.addEventListener('error', errorHandler)
    window.addEventListener('unhandledrejection', rejectionHandler)

    // Start performance monitoring in production
    if (process.env.NODE_ENV === 'production') {
      performanceMonitor.start()
    }

    initializeApp()

    return () => {
      isComponentMounted = false
      window.removeEventListener('error', errorHandler)
      window.removeEventListener('unhandledrejection', rejectionHandler)
      
      // Stop performance monitoring
      if (process.env.NODE_ENV === 'production') {
        performanceMonitor.stop()
      }
    }
  }, [])

  if (loadError) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#0a0a0f',
          color: '#f9fafb',
          fontFamily: 'Arial, sans-serif',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <h1 style={{ color: '#ef4444', marginBottom: '20px' }}>Failed to Load</h1>
        <p style={{ marginBottom: '20px', color: '#9ca3af' }}>
          There was an error loading the application.
        </p>
        <button
          onClick={() => window.location.reload()}
          style={{
            padding: '10px 20px',
            backgroundColor: '#6366f1',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Reload Page
        </button>
      </div>
    )
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/test" element={<TestComponent />} />
              <Route path="/simple" element={<SimpleHome />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/services" element={<Services />} />
              <Route path="/coverage" element={<Coverage />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/team" element={<Team />} />
              <Route path="/strategy" element={<Strategy />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
