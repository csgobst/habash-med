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
        // Add hash to filenames for cache busting
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
    // Enable source maps for debugging
    sourcemap: false,
    // Optimize for better loading
    minify: 'esbuild',
    target: 'es2015',
  },
  server: {
    historyApiFallback: {
      rewrites: [{ from: /^\/habash-med\/.*$/, to: '/habash-med/index.html' }],
    },
  },
})
