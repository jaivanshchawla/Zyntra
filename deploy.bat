@echo off
REM Zyntra Deployment Script for Vercel (Windows)
REM This script automates the deployment of Zyntra to Vercel

setlocal enabledelayedexpansion

echo.
echo ==================================================
echo 🚀 Zyntra Deployment Script (Windows)
echo ==================================================
echo.

REM Check if Vercel CLI is installed
vercel --version >nul 2>&1
if errorlevel 1 (
    echo ⚠️  Vercel CLI not found. Installing...
    npm install -g vercel
)

echo.
echo 1️⃣  Building project locally...
echo.
call npm run build

if errorlevel 1 (
    echo.
    echo ❌ Build failed!
    pause
    exit /b 1
)

echo.
echo ✓ Build successful!
echo.

REM Check if user is logged in to Vercel
vercel whoami >nul 2>&1
if errorlevel 1 (
    echo Please log in to Vercel:
    echo.
    call vercel login
)

echo.
echo 2️⃣  Deploying to Vercel...
echo.

REM Deploy to production
call vercel --prod

if errorlevel 1 (
    echo.
    echo ❌ Deployment failed!
    pause
    exit /b 1
)

echo.
echo ==================================================
echo ✓ Deployment complete!
echo ==================================================
echo.
echo 🌍 Your site is live!
echo 📊 Check your Vercel dashboard for the URL
echo 🔗 https://vercel.com/dashboard
echo.
pause
