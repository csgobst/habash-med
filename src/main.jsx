import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Global error handler
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error)
})

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason)
})

// Ensure DOM is ready
const root = document.getElementById('root')
if (!root) {
  console.error('Root element not found!')
  document.body.innerHTML = '<div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;"><h1>Error: Could not find root element</h1><p>Please refresh the page.</p></div>'
} else {
  try {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  } catch (error) {
    console.error('Failed to render React app:', error)
    root.innerHTML = '<div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;"><h1>Failed to load application</h1><p>Please refresh the page. If the problem persists, contact support.</p><button onclick="window.location.reload()" style="padding: 10px 20px; margin-top: 10px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer;">Reload Page</button></div>'
  }
}

