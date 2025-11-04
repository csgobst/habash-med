import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import Footer from './components/Footer'
import Header from './components/Header'
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

function App() {
  console.log('App component rendering...')

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<SimpleHome />} />
              <Route path="/test" element={<TestComponent />} />
              <Route path="/home" element={<Home />} />
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
