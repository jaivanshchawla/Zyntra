# 🚀 Zyntra - Complete Deployment Guide

## ✅ Pre-Deployment Status

Your Zyntra project has been successfully prepared for deployment to Vercel. Here's what has been completed:

### ✓ Project Preparation
- [x] Renamed project from `jsm-saas` to `zyntra`
- [x] Updated `package.json` with new project name
- [x] Created comprehensive `README.md`
- [x] Created `DEPLOYMENT.md` guide
- [x] Created `vercel.json` configuration
- [x] Created `.env.example` template
- [x] Added GitHub Actions CI/CD workflow
- [x] Created deployment automation scripts (Windows & Unix)
- [x] Pushed all changes to GitHub repository

### 📦 Project Information
- **Repository**: https://github.com/jaivanshchawla/Zyntra
- **Branch**: main
- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Node Version**: 20.x

---

## 🌐 How to Deploy to Vercel

### Option 1: Deploy via Vercel CLI (Recommended for Advanced Users)

#### Prerequisites
- Node.js 20+ installed
- Vercel account (https://vercel.com)
- Git configured

#### Steps

1. **Open PowerShell/Terminal in project directory**
   ```powershell
   cd "C:\Users\Jaivansh Chawla\Documents\projects\newproject\conversojc"
   ```

2. **Install Vercel CLI (if not already installed)**
   ```bash
   npm install -g vercel
   ```

3. **Login to Vercel**
   ```bash
   vercel login
   ```
   This will open a browser window for authentication.

4. **Deploy the project**
   ```bash
   vercel --prod
   ```
   
   When prompted:
   - Set project name: `zyntra` (or leave default)
   - Confirm framework: Next.js (auto-detected)
   - Build command: `npm run build` (default)
   - Output directory: `.next` (default)

5. **Add Environment Variables**
   After deployment starts, go to: https://vercel.com/dashboard
   - Select your project
   - Go to **Settings → Environment Variables**
   - Add these variables:
     ```
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = [your value]
     CLERK_SECRET_KEY = [your value]
     NEXT_PUBLIC_SUPABASE_URL = [your value]
     NEXT_PUBLIC_SUPABASE_ANON_KEY = [your value]
     NEXT_PUBLIC_VAPI_WEB_TOKEN = [your value]
     ```

---

### Option 2: Deploy via Vercel Dashboard (Easiest)

1. **Open Vercel Dashboard**
   - Go to https://vercel.com/dashboard

2. **Click "Add New" → "Project"**

3. **Import Git Repository**
   - Select GitHub
   - Find and select `jaivanshchawla/Zyntra`

4. **Configure Project**
   - **Framework**: Next.js (auto-detected)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Root Directory**: `.` (default)

5. **Add Environment Variables**
   - Click "Environment Variables"
   - Add all required variables from your credentials:
     ```
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = ***
     CLERK_SECRET_KEY = ***
     NEXT_PUBLIC_SUPABASE_URL = ***
     NEXT_PUBLIC_SUPABASE_ANON_KEY = ***
     NEXT_PUBLIC_VAPI_WEB_TOKEN = ***
     ```

6. **Deploy**
   - Click "Deploy"
   - Wait for build and deployment to complete
   - Vercel will provide your live URL

---

### Option 3: Use Automated Deployment Script (Windows)

We've provided a convenient batch script for Windows:

1. **Open PowerShell as Administrator**

2. **Navigate to project directory**
   ```powershell
   cd "C:\Users\Jaivansh Chawla\Documents\projects\newproject\conversojc"
   ```

3. **Run the deployment script**
   ```powershell
   .\deploy.bat
   ```

The script will:
- Check for Vercel CLI
- Build the project
- Authenticate with Vercel (if needed)
- Deploy to production
- Show you your live URL

---

## 📋 Required Environment Variables

Before deployment, gather these credentials:

### 1. **Clerk** (Authentication)
- Go to: https://dashboard.clerk.com
- Project Settings → API Keys
- Copy these values:
  ```
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = pk_live_xxxxx
  CLERK_SECRET_KEY = sk_live_xxxxx
  ```

### 2. **Supabase** (Database)
- Go to: https://supabase.com/dashboard
- Select your project
- Settings → API
- Copy these values:
  ```
  NEXT_PUBLIC_SUPABASE_URL = https://xxxxx.supabase.co
  NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJxxx
  ```

### 3. **Vapi.ai** (Voice AI)
- Go to: https://dashboard.vapi.ai
- Account → API Keys
- Copy Web Token:
  ```
  NEXT_PUBLIC_VAPI_WEB_TOKEN = xxxxx-xxxxx
  ```

---

## 🔗 Post-Deployment Configuration

After deployment, complete these setup steps:

### 1. Configure Clerk
In Clerk Dashboard:
- Go to **Settings → URLs**
- Add your Vercel domain to:
  - **Allowed Origins**: `https://zyntra-xxxxx.vercel.app`
  - **Redirect URLs**: `https://zyntra-xxxxx.vercel.app`

### 2. Test the Deployment
- Visit your deployment URL
- Click "Sign In"
- Create a test companion
- Test voice functionality

### 3. Set Up Custom Domain (Optional)
In Vercel Project Settings:
- Go to **Domains**
- Add your custom domain
- Follow DNS configuration steps

---

## 🐛 Troubleshooting

### Build Fails
**Error**: "Cannot find module"
- **Solution**: Ensure all environment variables are set correctly

**Error**: "TypeScript errors"
- **Solution**: Run `npm run lint` locally to see errors

### Runtime Errors
**Error**: "Unauthorized" or "403"
- **Solution**: Check that all API keys are correct in environment variables

**Error**: "Cannot read properties of undefined"
- **Solution**: Verify Supabase database tables exist with correct schema

### Authentication Issues
**Error**: "Clerk authentication failed"
- **Solution**: Verify Vercel domain is added to Clerk allowed origins

**Error**: "Rate limiting"
- **Solution**: Check Clerk API limits in dashboard

---

## 📊 Monitoring After Deployment

### 1. **Vercel Analytics**
- View real-time metrics at https://vercel.com/dashboard
- Monitor: Edge Functions, Serverless Functions, Database

### 2. **Error Tracking**
- View deployment logs: Project → Deployments
- View runtime errors: Project → Monitoring

### 3. **Performance**
- Vercel provides automatic performance optimization
- Check Web Vitals in project settings

---

## 🔄 Continuous Deployment

GitHub Actions workflow is configured to:
1. Build project on every push to `main`
2. Run linting checks
3. Auto-deploy to Vercel on successful builds

**To enable automated deployments:**
1. Go to Vercel Project → Settings
2. Copy your Project ID and Organization ID
3. Go to GitHub → Zyntra Repository → Settings → Secrets
4. Add these secrets:
   ```
   VERCEL_TOKEN = [from Vercel]
   VERCEL_PROJECT_ID = [from Vercel]
   VERCEL_ORG_ID = [from Vercel]
   ```

---

## 📱 Features to Test After Deployment

- [ ] Homepage loads correctly
- [ ] Sign-in with Clerk works
- [ ] Can create a new companion
- [ ] Voice session can be initiated
- [ ] Microphone access is requested
- [ ] Real-time transcription works
- [ ] AI responses are generated
- [ ] Session can be ended
- [ ] Companions library displays correctly
- [ ] Companions are loaded from the `zyntra-prod` Supabase project in production
- [ ] Search and filter work

---

## 🆘 Support Links

| Service | Documentation | Dashboard |
|---------|---------------|-----------|
| Clerk | https://clerk.com/docs | https://dashboard.clerk.com |
| Supabase | https://supabase.com/docs | https://supabase.com/dashboard |
| Vapi.ai | https://docs.vapi.ai | https://dashboard.vapi.ai |
| Vercel | https://vercel.com/docs | https://vercel.com/dashboard |
| Next.js | https://nextjs.org/docs | N/A |

---

## ✨ You're All Set!

Your Zyntra application is ready for production deployment. Follow one of the deployment options above to get your site live.

**Once deployed, you'll have:**
- ✅ Live AI teaching platform
- ✅ Real-time voice conversations
- ✅ User authentication
- ✅ Data persistence
- ✅ Scalable infrastructure
- ✅ Automatic deployments

---

**Repository**: https://github.com/jaivanshchawla/Zyntra
**Status**: 🟢 Ready for Production
**Last Updated**: 2026-01-26
