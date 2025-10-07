# 3S Tech Inc. Website

Modern, professional website for 3S Tech Inc. - Your bridge from Cognos to Power BI.

## 🚀 Features

- **Modern Design**: Clean, professional UI with vibrant cyan/purple color scheme
- **Responsive**: Mobile-first design that works seamlessly across all devices
- **Animated**: Smooth animations powered by Framer Motion
- **AI-Focused**: Highlights AI-assisted migration capabilities
- **Interactive**: Expandable service cards, carousel case studies, and dynamic forms

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **Lucide React** - Beautiful, consistent icons
- **OpenAI API** *(optional)* - Powers the AI assistant chatbot

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### 🧠 AI Assistant Setup

The floating AI assistant uses the OpenAI API to answer visitor questions about 3S Tech services. The chat component is optional—if you do not provide an API key, the assistant gracefully informs users that it is temporarily unavailable.

1. **Create `.env` File (local development):**
   ```bash
   # .env (do not commit)
   VITE_API_BASE=/api
   OPENAI_API_KEY=sk-your-openai-key
   ```

2. **Run locally:**
   ```bash
   # Option A: Vite + Express proxy (recommended for development)
   npm run dev:ai

   # Option B: Vercel serverless emulation (requires Vercel CLI)
   npm run dev:vercel
   ```

3. **Deploy on Vercel:**
   - Go to Project Settings → Environment Variables
   - Add `OPENAI_API_KEY`
   - Deploy or redeploy the site

> ⚠️ Never expose your OpenAI key on the client. The serverless function in `api/chat.js` keeps requests secure.

## 📂 Project Structure

```
3s-tech-website/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx          # Top navigation bar
│   │   ├── Hero.jsx                # Hero section with CTAs
│   │   ├── DataFlowVisualization.jsx  # Animated data flow
│   │   ├── TrustBar.jsx            # Stats and trust indicators
│   │   ├── ProblemSolution.jsx     # Problem/solution comparison
│   │   ├── MigrationJourney.jsx    # 6-phase interactive roadmap
│   │   ├── AIFeature.jsx           # AI capabilities highlight
│   │   ├── CaseStudies.jsx         # Client testimonials carousel
│   │   ├── CTASection.jsx          # Contact form
│   │   └── Footer.jsx              # Footer with links
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # App entry point
│   └── index.css                   # Global styles
├── api/
│   └── chat.js                     # Vercel serverless function for AI assistant
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Design System

### Colors
- **Navy Blue** (#0A2463) - Primary brand color
- **Cyan** (#00D9FF) - Accent, Power BI alignment
- **Purple** (#6E3AFF) - AI features, innovation
- **Coral** (#FF6B6B) - Cognos legacy references
- **Yellow** (#FFD93D) - CTAs, highlights
- **Cool Gray** (#F4F6F9) - Backgrounds

### Typography
- **Display**: Poppins Bold
- **Body**: Inter Regular
- **Code**: JetBrains Mono

### Key Components

#### Navigation
- Sticky header with scroll effects
- Mobile-responsive hamburger menu
- Smooth scroll to sections

#### Hero Section
- Animated gradient background
- Floating data particles
- Data flow visualization (Cognos → 3S Tech → Power BI)
- Dual CTAs with hover effects

#### Migration Journey
- 6-phase interactive timeline
- Expandable cards with detailed deliverables
- Desktop timeline, mobile accordion
- Animated connection lines

#### AI Feature Section
- Purple gradient background
- Pulsing AI icon
- Particle animation effects
- 4 key benefits with icons

#### Case Studies
- Carousel with navigation
- Industry-specific testimonials
- Key metrics and stats
- Quote-style testimonials

## 🔧 Customization

### Update Company Information

Edit `src/components/Footer.jsx` to update:
- Contact email
- Phone number
- Address
- Social media links

### Modify Case Studies

Edit `src/components/CaseStudies.jsx` to add/modify client testimonials.

### Update Services

Edit `src/components/MigrationJourney.jsx` to customize the 6-phase migration journey.

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎯 Performance Optimizations

- Lazy loading with Intersection Observer
- Optimized animations (GPU-accelerated)
- Minimal bundle size with Vite
- CSS purging with Tailwind

## 📄 License

© 2024 3S Tech Inc. All rights reserved.

## 🤝 Support

For questions or support, contact info@3stech.com

---

**Built with ❤️ by 3S Tech Inc.**

