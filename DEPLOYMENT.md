# Zyntra Deployment Guide

## ✅ Pre-Deployment Checklist

Your Zyntra project has been prepared for deployment to Vercel. Here's what's been completed:

- ✅ Renamed project from `jsm-saas` to `zyntra` in package.json
- ✅ Created `vercel.json` configuration file
- ✅ Created `.env.example` with required environment variables
- ✅ Committed changes to GitHub (https://github.com/jaivanshchawla/Zyntra)

## 🚀 Deployment Steps

### Step 1: Prepare Environment Variables

Before deploying to Vercel, you need to obtain and set up these environment variables:

1. **Clerk** (Authentication)
   - Go to https://dashboard.clerk.com
   - Copy `Publishable Key` → `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - Copy `Secret Key` → `CLERK_SECRET_KEY`

2. **Supabase** (Database)
   - Go to https://supabase.com/dashboard
   - Project Settings → API
   - Copy `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - Copy `anon` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

3. **Vapi** (Voice AI)
   - Go to https://dashboard.vapi.ai
   - Copy your Web Token → `NEXT_PUBLIC_VAPI_WEB_TOKEN`

### Step 2: Deploy to Vercel

#### Option A: Deploy via Vercel CLI (Recommended)

```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Navigate to your project
cd c:\Users\Jaivansh Chawla\Documents\projects\newproject\conversojc

# Login to Vercel (if not already logged in)
vercel login

# Deploy the project
vercel

# Follow the prompts:
# - Confirm project name: zyntra
# - Framework: Next.js
# - Root directory: ./ (default)
# - Build command: npm run build (default)
# - Output directory: .next (default)
```

#### Option B: Deploy via Vercel Dashboard (Easier)

1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Import Git Repository
4. Select `jaivanshchawla/Zyntra`
5. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `npm run build`
   - **Environment Variables**: Add all from your `.env.local`
6. Click "Deploy"

### Step 3: Configure Environment Variables in Vercel

After deployment starts, go to Vercel project settings and add these environment variables:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = [from Clerk Dashboard]
CLERK_SECRET_KEY = [from Clerk Dashboard]
NEXT_PUBLIC_SUPABASE_URL = [from Supabase Dashboard]
NEXT_PUBLIC_SUPABASE_ANON_KEY = [from Supabase Dashboard]
NEXT_PUBLIC_VAPI_WEB_TOKEN = [from Vapi Dashboard]
```

### Step 4: Configure Clerk Allowed URLs

In your Clerk dashboard, add your Vercel deployment URL to:
- **Allowed Origins** (CORS)
- **Redirect URLs**

Example: `https://zyntra.vercel.app`

## 🔧 Project Configuration Files

### vercel.json
Contains build and deployment settings including:
- Next.js framework detection
- Node.js version (20.x)
- Environment variable configuration

### .env.example
Template showing required environment variables. Users can copy this to `.env.local` and fill in their values.

## 📱 Project Structure

```
conversojc/
├── app/                    # Next.js app directory
│   ├── layout.tsx          # Root layout with Clerk provider
│   ├── page.tsx            # Home page
│   ├── companions/         # Companion management
│   ├── sign-in/            # Clerk sign-in page
│   ├── subscription/       # Pricing/subscription page
│   └── my-journey/         # User profile
├── components/             # React components
│   ├── ui/                 # Shadcn UI components
│   ├── Navbar.tsx          # Navigation with auth
│   ├── CompanionForm.tsx   # Create companion form
│   └── CompanionComponent.tsx # Voice session component
├── lib/                    # Utilities and services
│   ├── actions/            # Server actions
│   ├── supabase.ts         # Supabase client
│   ├── vapi.sdk.ts         # Vapi SDK
│   └── utils.ts            # Helper functions
├── constants/              # App constants and voices
├── types/                  # TypeScript definitions
├── public/                 # Static assets (images, icons)
└── package.json            # Dependencies
```

## 🌍 Features

- **Authentication**: Clerk (Email, OAuth)
- **Database**: Supabase PostgreSQL
- **Voice AI**: Vapi.ai for real-time conversations
- **UI**: Shadcn UI + Tailwind CSS + Bricolage Grotesque font
- **Languages**: English and Tamil support for AI assistant
- **Real-time**: Live transcription and voice streaming

## ✨ Next Steps After Deployment

1. Test the deployed site at your Vercel URL
2. Verify authentication works with Clerk
3. Test companion creation and voice sessions
4. Monitor your Vercel analytics dashboard
5. Set up custom domain (optional)

## 🆘 Troubleshooting

### Build Fails
- Check Node.js version compatibility
- Verify all environment variables are set
- Run `npm install` locally to check for dependency issues

### Runtime Errors
- Check browser console for errors
- Verify environment variables are correct
- Check Clerk/Supabase/Vapi dashboards for any alerts

### Authentication Issues
- Verify Clerk allowed URLs include your Vercel domain
- Check that `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` is set
- Check that `CLERK_SECRET_KEY` is set (not exposed to client)

## 📚 Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Vapi Documentation](https://docs.vapi.ai)

---

**Status**: Ready for Vercel Deployment ✅
**Repository**: https://github.com/jaivanshchawla/Zyntra
