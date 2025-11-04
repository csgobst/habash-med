// Performance monitoring utility to detect and prevent issues
class PerformanceMonitor {
  constructor() {
    this.errorCount = 0
    this.memoryWarnings = 0
    this.maxErrors = 5
    this.maxMemoryWarnings = 3
    this.isMonitoring = false
    this.checkInterval = null
  }

  start() {
    if (this.isMonitoring) return

    this.isMonitoring = true
    console.log('Performance monitoring started')

    // Monitor memory usage
    this.checkInterval = setInterval(() => {
      this.checkMemoryUsage()
    }, 30000) // Check every 30 seconds

    // Monitor for memory leaks in timers
    this.monitorTimers()

    // Monitor DOM size
    this.monitorDOMSize()
  }

  stop() {
    if (!this.isMonitoring) return

    this.isMonitoring = false
    if (this.checkInterval) {
      clearInterval(this.checkInterval)
      this.checkInterval = null
    }
    console.log('Performance monitoring stopped')
  }

  checkMemoryUsage() {
    if (!performance.memory) return

    const used = performance.memory.usedJSHeapSize
    const limit = performance.memory.jsHeapSizeLimit
    const percentage = (used / limit) * 100

    if (percentage > 80) {
      this.memoryWarnings++
      console.warn(`High memory usage: ${percentage.toFixed(2)}%`)

      if (this.memoryWarnings >= this.maxMemoryWarnings) {
        console.error('Memory usage critical, triggering reload...')
        this.triggerReload('High memory usage')
      }
    }
  }

  monitorTimers() {
    // Override setTimeout and setInterval to track them
    const originalSetTimeout = window.setTimeout
    const originalSetInterval = window.setInterval
    const originalClearTimeout = window.clearTimeout
    const originalClearInterval = window.clearInterval

    const activeTimers = new Set()
    const activeIntervals = new Set()

    window.setTimeout = function (...args) {
      const id = originalSetTimeout.apply(this, args)
      activeTimers.add(id)
      return id
    }

    window.setInterval = function (...args) {
      const id = originalSetInterval.apply(this, args)
      activeIntervals.add(id)
      return id
    }

    window.clearTimeout = function (id) {
      activeTimers.delete(id)
      return originalClearTimeout.call(this, id)
    }

    window.clearInterval = function (id) {
      activeIntervals.delete(id)
      return originalClearInterval.call(this, id)
    }

    // Check for timer leaks
    setInterval(() => {
      if (activeTimers.size > 100 || activeIntervals.size > 50) {
        console.warn('Potential timer leak detected:', {
          timeouts: activeTimers.size,
          intervals: activeIntervals.size,
        })
      }
    }, 60000) // Check every minute
  }

  monitorDOMSize() {
    setInterval(() => {
      const domSize = document.getElementsByTagName('*').length
      if (domSize > 5000) {
        console.warn('Large DOM detected:', domSize, 'elements')
      }
    }, 60000) // Check every minute
  }

  reportError(error) {
    this.errorCount++
    console.error('Error reported to monitor:', error)

    if (this.errorCount >= this.maxErrors) {
      console.error('Too many errors detected, triggering reload...')
      this.triggerReload('Multiple errors')
    }
  }

  triggerReload(reason) {
    console.warn('Triggering page reload due to:', reason)

    // Give a moment for cleanup
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

  // Clean up resources before page unload
  cleanup() {
    this.stop()

    // Clear all timers (aggressive cleanup)
    const highestTimeoutId = setTimeout(() => {}, 0)
    for (let i = 0; i < highestTimeoutId; i++) {
      clearTimeout(i)
    }

    const highestIntervalId = setInterval(() => {}, 9999999)
    for (let i = 0; i < highestIntervalId; i++) {
      clearInterval(i)
    }
  }
}

// Create global instance
const performanceMonitor = new PerformanceMonitor()

// Auto-start monitoring if we're in production
if (process.env.NODE_ENV === 'production') {
  performanceMonitor.start()
}

// Clean up on page unload
window.addEventListener('beforeunload', () => {
  performanceMonitor.cleanup()
})

// Export for manual control
export default performanceMonitor
