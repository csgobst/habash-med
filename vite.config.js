import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/habash-med/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  },
  server: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/habash-med\/.*$/, to: '/habash-med/index.html' }
      ]
    }
  }
})

