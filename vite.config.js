import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/habash-med/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  server: {
    historyApiFallback: {
      rewrites: [{ from: /^\/habash-med\/.*$/, to: '/habash-med/index.html' }],
    },
  },
})
