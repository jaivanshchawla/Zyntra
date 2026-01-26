# Zyntra - Real-time AI Teaching Platform

A sophisticated AI-powered learning platform that enables students to interact with personalized AI tutors through real-time voice conversations.

## 🌟 Features

- **🗣️ Voice-Powered Learning**: Real-time voice conversations with AI tutors using Vapi.ai
- **🎯 Personalized Companions**: Create custom AI learning companions with specific subjects, topics, and teaching styles
- **🌍 Multi-Language Support**: English and Tamil language support for transcription and AI responses
- **👤 User Authentication**: Secure authentication via Clerk
- **📊 Data Persistence**: Supabase PostgreSQL for storing companions and session data
- **🎨 Beautiful UI**: Modern, responsive design with Shadcn UI and Tailwind CSS
- **📱 Mobile Responsive**: Fully responsive design for all devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Authentication**: Clerk
- **Database**: Supabase (PostgreSQL)
- **AI/Voice**: Vapi.ai, Gemini 2.5 Pro, 11Labs TTS
- **UI Components**: Shadcn UI, Radix UI
- **Styling**: Tailwind CSS 4, Bricolage Grotesque Font
- **Deployment**: Vercel

## 📋 Project Structure

```
zyntra/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Home page
│   ├── companions/
│   │   ├── page.tsx              # Companions library
│   │   ├── new/page.tsx          # Create companion form
│   │   └── [id]/page.tsx         # Companion session
│   ├── sign-in/                  # Authentication
│   ├── subscription/             # Pricing page
│   └── my-journey/               # User profile (in development)
├── components/
│   ├── ui/                       # Shadcn UI components
│   ├── Navbar.tsx                # Navigation
│   ├── CompanionForm.tsx         # Create companion form
│   ├── CompanionComponent.tsx    # Voice session interface
│   ├── CompanionCard.tsx         # Companion preview card
│   └── ...                       # Other components
├── lib/
│   ├── actions/                  # Server actions
│   ├── supabase.ts               # Supabase client
│   ├── vapi.sdk.ts               # Vapi.ai SDK
│   └── utils.ts                  # Helper utilities
├── types/
│   ├── index.d.ts                # Type definitions
│   └── vapi.d.ts                 # Vapi types
├── constants/                    # App constants, voices, subjects
├── public/                       # Static assets
├── .github/workflows/            # CI/CD workflows
├── vercel.json                   # Vercel deployment config
├── DEPLOYMENT.md                 # Deployment guide
└── package.json                  # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/jaivanshchawla/Zyntra.git
   cd Zyntra
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your credentials:
   - Clerk API keys
   - Supabase credentials
   - Vapi.ai token

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📦 Environment Variables

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Supabase Database
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Vapi Voice AI
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

**Quick Deploy Button:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jaivanshchawla/Zyntra&env=NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,CLERK_SECRET_KEY,NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY,NEXT_PUBLIC_VAPI_WEB_TOKEN&project-name=zyntra)

**Manual Deployment:**

1. Push to GitHub
2. Go to https://vercel.com
3. Import the Zyntra repository
4. Add environment variables
5. Deploy!

## 🎓 How It Works

1. **Create a Companion**
   - Choose a subject (Maths, Science, Language, etc.)
   - Define the topic to learn
   - Select voice (male/female) and teaching style (formal/casual)
   - Set session duration

2. **Start a Voice Session**
   - Click "Launch Lesson"
   - Allow microphone access
   - Start speaking to your AI tutor
   - The AI transcribes your speech and responds naturally

3. **Learn in Real-Time**
   - Receive immediate feedback
   - Ask follow-up questions
   - See live transcripts of conversations
   - Complete sessions and track progress

## 🎨 Supported Subjects

- Mathematics
- Science
- Language/Literature
- Coding
- History
- Economics

## 🗣️ Languages

- **English**: Full support with Deepgram transcription
- **Tamil**: Native support with 11Labs Tamil voices

## 📊 Available Voices

### Male
- **Casual**: Muthu (lively, conversational)
- **Formal**: Chakravarti (warm, engaging, academic)

### Female
- **Casual**: Nila (smooth, expressive)
- **Formal**: Vani (storytelling, articulate)

## 🔐 Security

- All authentication handled by Clerk
- Database queries use Supabase RLS (Row Level Security)
- Environment variables properly secured
- No sensitive data exposed to client

## 📈 Analytics & Monitoring

- Vercel Analytics integration
- Error tracking and logging
- User session tracking

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is private and owned by Jaivansh Chawla.

## 📧 Contact

For questions or support, please contact the development team.

## 🔗 Useful Links

- [Clerk Documentation](https://clerk.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Vapi.ai Documentation](https://docs.vapi.ai)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)

---

**Status**: ✅ Ready for Production Deployment
**Repository**: https://github.com/jaivanshchawla/Zyntra
