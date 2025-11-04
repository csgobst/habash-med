@echo off
echo 🚀 Starting deployment to GitHub Pages...

REM Check if we're in the right directory
if not exist package.json (
    echo ❌ Error: package.json not found. Please run this script from the project root.
    pause
    exit /b 1
)

REM Clean previous build
echo 🧹 Cleaning previous build...
if exist dist rmdir /s /q dist

REM Install dependencies
echo 📦 Installing dependencies...
npm install

REM Build the project
echo 🔨 Building project...
npm run build

REM Copy index.html to 404.html for SPA routing
echo 📋 Setting up SPA routing...
copy "dist\index.html" "dist\404.html"

REM Check if build was successful
if not exist dist (
    echo ❌ Build failed! dist directory not created.
    pause
    exit /b 1
)

echo ✅ Build completed successfully!

REM Deploy to GitHub Pages
echo 🌐 Deploying to GitHub Pages...
npm run deploy

echo 🎉 Deployment completed!
echo Your site should be available at: https://csgobst.github.io/habash-med
pause