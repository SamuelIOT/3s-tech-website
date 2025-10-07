# 🚀 3S Tech Website - Complete Setup Guide

## Prerequisites

Before you begin, you'll need to install Node.js and npm (Node Package Manager).

### Installing Node.js on Windows

1. **Download Node.js:**
   - Visit [https://nodejs.org/](https://nodejs.org/)
   - Download the LTS (Long Term Support) version for Windows
   - Recommended: Version 18.x or higher

2. **Run the Installer:**
   - Double-click the downloaded `.msi` file
   - Follow the installation wizard
   - Make sure to check "Automatically install necessary tools" option
   - The installer will automatically add Node.js and npm to your PATH

3. **Verify Installation:**
   Open PowerShell or Command Prompt and run:
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers for both.

## 🏁 Quick Start

Once Node.js is installed, follow these steps:

### Step 1: Install Dependencies

Open PowerShell or Command Prompt in the `C:\3S` directory and run:

```bash
npm install
```

This will install all required packages:
- React & React DOM
- Vite (build tool)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Lucide React (icons)
- And development dependencies

**Installation time:** ~1-2 minutes depending on internet speed

### Step 2: Start Development Server

```bash
npm run dev

# Or, to run with Vercel's serverless functions locally (recommended when using the AI assistant)
npm run dev:vercel
```

The development server will start, and you'll see output like:

```
VITE v5.0.8  ready in 523 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h to show help
```

### Step 3: View the Website

Open your browser and navigate to:
```
http://localhost:5173
```

The website will automatically reload when you make changes to the code!

## 🎨 What You'll See

The website includes:

1. **Navigation Bar** - Sticky header with smooth scroll
2. **Hero Section** - Animated gradient with data flow visualization
3. **Trust Bar** - Key statistics
4. **Problem/Solution** - Why migrate from Cognos
5. **Migration Journey** - Interactive 6-phase roadmap (click to expand each phase!)
6. **AI Feature** - Purple gradient section with benefits
7. **Case Studies** - Carousel with client testimonials (use arrows to navigate)
8. **Contact Form** - Lead generation form
9. **Footer** - Contact info and links

## 🛠️ Development Tips

### Hot Reload
Vite provides instant hot module replacement. Make changes to any `.jsx` or `.css` file and see them instantly in the browser!

### Recommended VS Code Extensions
- ESLint - Code quality
- Tailwind CSS IntelliSense - Autocomplete for Tailwind classes
- Prettier - Code formatting
- Thunder Client or REST Client - Test API routes quickly

### Useful Commands

```bash
# Start development server
npm run dev

# Start development server with Vercel functions (AI assistant)
npm run dev:vercel

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Customization Guide

### Changing Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  navy: '#0A2463',      // Change to your brand color
  cyan: '#00D9FF',      // Accent color
  purple: '#6E3AFF',    // AI/innovation color
  // ... add more colors
}
```

### Updating Content

1. **Company Info**: Edit `src/components/Footer.jsx`
2. **Hero Text**: Edit `src/components/Hero.jsx`
3. **Services**: Edit `src/components/MigrationJourney.jsx`
4. **Case Studies**: Edit `src/components/CaseStudies.jsx`
5. **AI Assistant Responses**: Update the system prompt in `api/chat.js`
6. **Quick Chat Prompts**: Edit the `quickQuestions` array in `src/components/AIChatbot.jsx`

### Adding New Sections

1. Create new component in `src/components/`
2. Import it in `src/App.jsx`
3. Add it to the component tree

## 🚀 Building for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Production Files

After building, you'll have:
- Minified JavaScript
- Optimized CSS
- Compressed assets
- Ready to deploy to any static hosting (Vercel, Netlify, AWS S3, etc.)

## 📦 Deployment Options

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite and deploys

### Option 2: Netlify
1. Run `npm run build`
2. Drag the `dist/` folder to [netlify.com/drop](https://app.netlify.com/drop)

### Option 3: Traditional Hosting
1. Run `npm run build`
2. Upload contents of `dist/` folder to your web server

## 🔧 Troubleshooting

### Port Already in Use
If port 5173 is taken:
```bash
npm run dev -- --port 3000
```

### Node Modules Issues
If you encounter errors:
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
Make sure you're using Node.js 16.x or higher:
```bash
node --version
```

## 📱 Testing Responsiveness

The site is mobile-first and responsive. Test at:
- **Mobile**: 375px width (iPhone SE)
- **Tablet**: 768px width (iPad)
- **Desktop**: 1920px width (Full HD)

Use Chrome DevTools (F12) → Toggle device toolbar (Ctrl+Shift+M)

## 🎯 Performance

The website is optimized for:
- **Fast loading**: < 1s initial load
- **Smooth animations**: 60fps GPU-accelerated
- **Small bundle**: ~200KB gzipped
- **SEO-friendly**: Meta tags and semantic HTML

## 📊 Browser Support

- Chrome/Edge: Latest
- Firefox: Latest
- Safari: Latest
- Mobile browsers: iOS Safari 12+, Chrome Android

## 🆘 Need Help?

Common issues:

1. **Blank white screen**: Check browser console (F12) for errors
2. **Styles not loading**: Clear cache, restart dev server
3. **Animations laggy**: Close other browser tabs, check GPU acceleration

## ✅ Checklist Before Launch

- [ ] Update all placeholder text
- [ ] Replace mock case studies with real data
- [ ] Add your contact information
- [ ] Test contact form
- [ ] Verify all links work
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit (aim for 90+ score)
- [ ] Add Google Analytics (if needed)
- [ ] Set up SSL certificate
- [ ] Test in all major browsers

## 🤖 Enabling the AI Assistant Chatbot

The floating chat assistant uses the OpenAI API. It's optional, but highly recommended to showcase your AI-assisted services.

### Step 1: Get Your OpenAI API Key
- Sign in to https://platform.openai.com
- Go to API Keys → "Create new secret key"
- Copy the key (starts with `sk-...`). Keep it private!

### Step 2: Local Development Setup
Create a `.env.local` file at the project root:

```
OPENAI_API_KEY=sk-your-openai-api-key
```

> ⚠️ Do **not** commit `.env.local` to Git. It's already in `.gitignore`.

Run local development with Vercel dev (to simulate serverless functions):

```bash
npm run dev:vercel
```

### Step 3: Production Setup (Vercel)
1. Deploy the project to Vercel (see `DEPLOYMENT_GUIDE.md`)
2. In Vercel dashboard → Project → Settings → Environment Variables
3. Add a new variable:
   - Name: `OPENAI_API_KEY`
   - Value: `sk-your-openai-api-key`
   - Environment: Production (and Preview if desired)
4. Click **Save** and redeploy

That's it! Your AI assistant is now active in production.

### Troubleshooting
- If the assistant says the API key is missing, double-check environment variables
- Ensure you're not exposing the key in client-side code
- Monitor usage in the OpenAI dashboard
- Consider setting usage limits on your OpenAI account

### Customization
- Update the system prompt in `api/chat.js` to refine tone or add FAQs
- Adjust the `quickQuestions` array in `src/components/AIChatbot.jsx`
- Customize chat UI styling to match future branding tweaks

---

**Happy coding! 🎉**

Built for 3S Tech Inc. - From Cognos to Clarity

