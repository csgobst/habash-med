#!/bin/bash
# Deployment script for GitHub Pages

echo "🚀 Starting deployment to GitHub Pages..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Copy index.html to 404.html for SPA routing
echo "📋 Setting up SPA routing..."
cp dist/index.html dist/404.html

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed! dist directory not created."
    exit 1
fi

echo "✅ Build completed successfully!"

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy

echo "🎉 Deployment completed!"
echo "Your site should be available at: https://csgobst.github.io/habash-med"