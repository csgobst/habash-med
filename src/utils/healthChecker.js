// Health check utility to verify app state
export class HealthChecker {
  constructor() {
    this.checks = []
    this.isHealthy = true
    this.lastCheck = null
  }

  // Register a health check
  addCheck(name, checkFn) {
    this.checks.push({ name, checkFn })
  }

  // Run all health checks
  async runChecks() {
    const results = []
    this.isHealthy = true

    for (const check of this.checks) {
      try {
        const result = await check.checkFn()
        results.push({
          name: check.name,
          status: result ? 'pass' : 'fail',
          result,
        })
        if (!result) {
          this.isHealthy = false
        }
      } catch (error) {
        results.push({
          name: check.name,
          status: 'error',
          error: error.message,
        })
        this.isHealthy = false
      }
    }

    this.lastCheck = {
      timestamp: Date.now(),
      results,
      healthy: this.isHealthy,
    }

    return this.lastCheck
  }

  // Get health status
  getHealth() {
    return {
      healthy: this.isHealthy,
      lastCheck: this.lastCheck,
    }
  }
}

// Create default health checker with common checks
const healthChecker = new HealthChecker()

// Basic DOM health check
healthChecker.addCheck('dom', () => {
  return document.getElementById('root') !== null
})

// Memory health check
healthChecker.addCheck('memory', () => {
  if (!performance.memory) return true

  const used = performance.memory.usedJSHeapSize
  const limit = performance.memory.jsHeapSizeLimit
  const percentage = (used / limit) * 100

  return percentage < 90 // Healthy if under 90% memory usage
})

// React health check
healthChecker.addCheck('react', () => {
  return (
    typeof React !== 'undefined' && document.querySelector('[data-reactroot], #root > *') !== null
  )
})

// Network health check
healthChecker.addCheck('network', async () => {
  try {
    await fetch(window.location.origin, { method: 'HEAD', cache: 'no-cache' })
    return true
  } catch {
    return false
  }
})

export default healthChecker
