import { useEffect, useState } from 'react'

const LoadingScreen = () => {
  const [dots, setDots] = useState('')

  useEffect(() => {
    let isComponentMounted = true

    const interval = setInterval(() => {
      if (isComponentMounted) {
        setDots((prev) => (prev.length >= 3 ? '' : prev + '.'))
      }
    }, 500)

    // Auto-reload if loading takes too long (prevent infinite loading)
    const timeoutId = setTimeout(() => {
      if (isComponentMounted) {
        console.warn('Loading timeout reached, reloading page')
        window.location.reload()
      }
    }, 15000) // 15 seconds timeout

    return () => {
      isComponentMounted = false
      clearInterval(interval)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#0a0a0f',
        color: '#f9fafb',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          width: '60px',
          height: '60px',
          border: '3px solid #1f2937',
          borderTop: '3px solid #6366f1',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          marginBottom: '20px',
        }}
      ></div>
      <h2 style={{ marginBottom: '10px', color: '#6366f1' }}>Loading Habash Med{dots}</h2>
      <p style={{ color: '#9ca3af', textAlign: 'center', maxWidth: '300px' }}>
        If this takes too long, try refreshing the page
      </p>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `,
        }}
      />
    </div>
  )
}

export default LoadingScreen
