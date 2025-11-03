import { useState, useRef, useEffect } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import './ThemeSwitcher.css'

const ThemeSwitcher = () => {
  const { theme, themes, changeTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const currentTheme = themes[theme]

  return (
    <div className="theme-switcher" ref={dropdownRef}>
      <button
        className="theme-switcher-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change theme"
        title="Change Theme"
      >
        <div className="theme-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"/>
          </svg>
        </div>
        <span className="theme-indicator" style={{ background: currentTheme.primary }}></span>
      </button>

      {isOpen && (
        <div className="theme-dropdown">
          <div className="theme-dropdown-header">
            <span>Choose Theme</span>
          </div>
          <div className="theme-options">
            {Object.entries(themes).map(([key, themeData]) => (
              <button
                key={key}
                className={`theme-option ${theme === key ? 'active' : ''}`}
                onClick={() => {
                  changeTheme(key)
                  setIsOpen(false)
                }}
              >
                <div className="theme-preview">
                  <div 
                    className="theme-color" 
                    style={{ background: themeData.primary }}
                  ></div>
                  <div 
                    className="theme-color" 
                    style={{ background: themeData.secondary }}
                  ></div>
                  <div 
                    className="theme-color" 
                    style={{ background: themeData.accent }}
                  ></div>
                </div>
                <span className="theme-name">{themeData.name}</span>
                {theme === key && (
                  <svg className="theme-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ThemeSwitcher

