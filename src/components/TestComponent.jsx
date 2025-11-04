import React from 'react'

const TestComponent = () => {
  console.log('TestComponent rendering')
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8f9fa',
      color: '#333'
    }}>
      <h1>🎉 React App is Working!</h1>
      <p>If you can see this, React is loading correctly.</p>
      <p>Current URL: {window.location.href}</p>
      <p>Current Hash: {window.location.hash || 'No hash'}</p>
      <p>Current Pathname: {window.location.pathname}</p>
      <button 
        onClick={() => window.location.hash = '#test'}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        Test Hash Navigation
      </button>
    </div>
  )
}

export default TestComponent