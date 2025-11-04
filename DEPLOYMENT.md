# Habash Med Website - GitHub Pages Deployment Guide

## 🚀 Quick Deploy

### Automated Deployment (Recommended)
1. Commit and push changes to `main` branch
2. GitHub Actions will automatically deploy to GitHub Pages
3. Site will be available at: https://csgobst.github.io/habash-med

### Manual Deployment
```bash
# Windows
./deploy.bat

# Linux/Mac
./deploy.sh

# Or manually
npm install
npm run build
npm run deploy
```

## 🛠️ Troubleshooting White/Blank Page Issues

### Common Causes & Solutions

#### 1. **Routing Issues**
- ✅ **Fixed**: Using `HashRouter` with proper `basename="/habash-med"`
- ✅ **Fixed**: Added GitHub Pages SPA redirect scripts

#### 2. **JavaScript Errors**
- ✅ **Fixed**: Added `ErrorBoundary` component to catch React errors
- ✅ **Fixed**: Global error handlers in `main.jsx`
- ✅ **Fixed**: Graceful error handling and user feedback

#### 3. **Asset Loading Problems**
- ✅ **Fixed**: Proper base path configuration in `vite.config.js`
- ✅ **Fixed**: Correct asset paths in HTML files
- ✅ **Fixed**: GitHub Pages SPA redirect handling

#### 4. **Build Configuration**
- ✅ **Fixed**: Proper GitHub Actions workflow with permissions
- ✅ **Fixed**: Chunk splitting for better loading performance

## 🔍 Debugging Steps

If you still encounter issues:

1. **Check Browser Console**
   - Open browser DevTools (F12)
   - Look for JavaScript errors in Console tab
   - Check Network tab for failed asset loads

2. **Verify GitHub Pages Settings**
   - Go to repository Settings → Pages
   - Ensure Source is set to "GitHub Actions"
   - Check if deployment was successful in Actions tab

3. **Clear Browser Cache**
   - Hard refresh with Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
   - Or open in private/incognito mode

4. **Check Deployment Status**
   - Visit GitHub repository Actions tab
   - Ensure latest deployment completed successfully
   - Check deployment logs for errors

## 🏗️ Architecture Overview

### Key Components
- **HashRouter**: Handles client-side routing compatible with GitHub Pages
- **ErrorBoundary**: Catches and displays React errors gracefully  
- **SPA Redirects**: Handles direct URL access on GitHub Pages
- **Asset Management**: Proper base path configuration for GitHub Pages

### File Structure
```
src/
├── components/
│   ├── ErrorBoundary.jsx    # Error handling
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── ...
├── pages/                   # Route components
├── contexts/               # React contexts
└── App.jsx                 # Main app with routing

public/
├── 404.html                # GitHub Pages SPA support
└── vite.svg               # Favicon

.github/workflows/
└── deploy.yml             # Automated deployment
```

## 🔧 Configuration Files

### `vite.config.js`
- Sets base path for GitHub Pages
- Configures build optimization
- Handles SPA routing in development

### `package.json`
- Defines homepage URL
- Includes deployment scripts
- Lists all dependencies

### `.github/workflows/deploy.yml`
- Automated deployment on push to main
- Proper permissions for GitHub Pages
- Build and deploy pipeline

## 📱 Browser Compatibility

Tested and working on:
- ✅ Chrome (latest)
- ✅ Firefox (latest)  
- ✅ Safari (latest)
- ✅ Edge (latest)

## 🆘 Getting Help

If issues persist:

1. **Check this repository's Issues tab**
2. **Verify all files are committed and pushed**
3. **Ensure GitHub Pages is enabled in repository settings**
4. **Contact the development team**

## 🔗 Useful Links

- **Live Site**: https://csgobst.github.io/habash-med
- **Repository**: https://github.com/csgobst/habash-med
- **GitHub Pages Settings**: https://github.com/csgobst/habash-med/settings/pages

---

*Last updated: November 2024*