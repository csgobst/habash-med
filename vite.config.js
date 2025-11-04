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
    // Enable source maps for debugging in development only
    sourcemap: false,
    // Optimize for better loading
    minify: 'esbuild',
    target: 'es2015',
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Optimize CSS
    cssCodeSplit: true,
    // Preload module directives
    modulePreload: {
      polyfill: true,
    },
  },
  server: {
    historyApiFallback: {
      rewrites: [{ from: /^\/habash-med\/.*$/, to: '/habash-med/index.html' }],
    },
  },
  // Add optimizations for production builds
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  },
  // Improve dependency optimization
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@vite/client', '@vite/env'],
  },
})
