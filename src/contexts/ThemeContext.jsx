import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

const themes = {
  blue: {
    name: 'Ocean Blue',
    primary: '#6366f1',
    primaryDark: '#4f46e5',
    primaryLight: '#818cf8',
    secondary: '#8b5cf6',
    accent: '#06b6d4',
    accent2: '#ec4899',
  },
  purple: {
    name: 'Royal Purple',
    primary: '#9333ea',
    primaryDark: '#7e22ce',
    primaryLight: '#a855f7',
    secondary: '#c026d3',
    accent: '#d946ef',
    accent2: '#f472b6',
  },
  green: {
    name: 'Emerald Green',
    primary: '#10b981',
    primaryDark: '#059669',
    primaryLight: '#34d399',
    secondary: '#06b6d4',
    accent: '#22c55e',
    accent2: '#84cc16',
  },
  orange: {
    name: 'Sunset Orange',
    primary: '#f97316',
    primaryDark: '#ea580c',
    primaryLight: '#fb923c',
    secondary: '#f59e0b',
    accent: '#ef4444',
    accent2: '#f97316',
  },
  teal: {
    name: 'Cyan Teal',
    primary: '#14b8a6',
    primaryDark: '#0d9488',
    primaryLight: '#2dd4bf',
    secondary: '#06b6d4',
    accent: '#22d3ee',
    accent2: '#06b6d4',
  },
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Safely access localStorage with fallback
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        return localStorage.getItem('theme') || 'blue'
      } catch (error) {
        console.warn('Failed to read theme from localStorage:', error)
        return 'blue'
      }
    }
    return 'blue'
  })

  useEffect(() => {
    // Safely access localStorage with error handling
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        localStorage.setItem('theme', theme)
      } catch (error) {
        console.warn('Failed to save theme to localStorage:', error)
      }
    }
    
    const themeColors = themes[theme]
    if (!themeColors) {
      console.warn('Invalid theme:', theme)
      return
    }

    try {
      // Update CSS variables with error handling
      const docElement = document.documentElement
      if (!docElement) return
      
      docElement.style.setProperty('--primary', themeColors.primary)
      docElement.style.setProperty('--primary-dark', themeColors.primaryDark)
      docElement.style.setProperty('--primary-light', themeColors.primaryLight)
      docElement.style.setProperty('--secondary', themeColors.secondary)
      docElement.style.setProperty('--accent', themeColors.accent)
      docElement.style.setProperty('--accent-2', themeColors.accent2)
      docElement.style.setProperty('--glow-primary', `${themeColors.primary}66`)
      docElement.style.setProperty('--glow-secondary', `${themeColors.secondary}66`)
      docElement.style.setProperty('--glow-accent', `${themeColors.accent}66`)
      docElement.style.setProperty('--border-glow', `${themeColors.primary}4d`)
    } catch (error) {
      console.warn('Failed to update CSS variables:', error)
    }
  }, [theme])

  const changeTheme = (newTheme) => {
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, themes, changeTheme }}>{children}</ThemeContext.Provider>
  )
}
