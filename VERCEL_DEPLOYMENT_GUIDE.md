# 🚀 Vercel Deployment Guide for 3S Tech Website

## 📋 Overview
This guide will help you deploy your 3S Tech website to Vercel with a custom domain and environment variables for email functionality.

---

## ✅ Prerequisites Checklist

Before deploying, make sure you have:
- [x] GitHub repository with latest code pushed ✅
- [ ] Vercel account (free)
- [ ] Environment variables ready (SMTP credentials)
- [ ] Domain name (optional but recommended)

---

## 🎯 Step 1: Create Vercel Account & Deploy

### 1.1 Sign Up for Vercel
1. Go to **https://vercel.com**
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (recommended)
4. Authorize Vercel to access your GitHub account

### 1.2 Import Your Project
1. On Vercel dashboard, click **"Add New..."** → **"Project"**
2. Find your repository: **`SamuelIOT/3s-tech-website`**
3. Click **"Import"**

### 1.3 Configure Project Settings
Vercel will auto-detect your settings, but verify:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### 1.4 Add Environment Variables (IMPORTANT!)
Before clicking "Deploy", add these environment variables:

Click **"Environment Variables"** and add:

```
LEAD_SMTP_HOST=smtp.gmail.com
LEAD_SMTP_PORT=587
LEAD_SMTP_USER=3stech.inc@gmail.com
LEAD_SMTP_PASS=your_app_password_here
LEAD_SMTP_SECURE=false
LEAD_SMTP_REQUIRE_TLS=true
LEAD_NOTIFY_EMAIL=3stech.inc@gmail.com
```

⚠️ **Important:** 
- Use your Gmail **App Password**, not your regular password
- To get App Password: Google Account → Security → 2-Step Verification → App passwords

### 1.5 Deploy!
1. Click **"Deploy"**
2. Wait 1-2 minutes while Vercel builds your site
3. You'll get a URL like: **`https://3s-tech-website-xxx.vercel.app`**

🎉 **Congratulations!** Your site is now live!

---

## 🌐 Step 2: Get a Custom Domain

### Option A: Buy a Domain Through Vercel
1. In your Vercel project dashboard, go to **"Settings"** → **"Domains"**
2. Click **"Buy"**
3. Search for your desired domain (e.g., `3stech.com`, `3stechinc.com`)
4. Complete purchase (~$15-20/year)
5. Domain is automatically configured! ✅

**Pros:**
- ✅ Automatic DNS configuration
- ✅ Instant HTTPS
- ✅ No technical setup required

### Option B: Use Existing Domain or Buy from Another Registrar

Popular domain registrars:
- **Namecheap** - Affordable, easy to use
- **Google Domains** - Simple, reliable
- **GoDaddy** - Well-known, lots of support
- **Cloudflare** - Cheapest, great features

#### Steps to Connect External Domain:

1. **In Vercel:**
   - Go to your project → **"Settings"** → **"Domains"**
   - Click **"Add"**
   - Enter your domain (e.g., `3stech.com`)
   - Vercel will show you DNS records to add

2. **In Your Domain Registrar:**
   - Go to DNS settings
   - Add the records Vercel provides:
   
   **For root domain (3stech.com):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **For www subdomain (www.3stech.com):**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for DNS propagation** (5 minutes - 48 hours, usually ~15 minutes)

4. **Verify in Vercel** - You'll see a green checkmark when ready

---

## 🔄 Step 3: Set Up Automatic Deployments

Vercel automatically deploys when you push to GitHub!

### How it works:
- **Push to `master` branch** → Deploys to production
- **Push to other branches** → Creates preview deployment
- **Pull requests** → Automatic preview URLs

### Test it:
```bash
# Make a small change
echo "Updated!" >> README.md

# Commit and push
git add .
git commit -m "Test deployment"
git push origin master
```

Vercel will automatically build and deploy! 🚀

---

## 📧 Step 4: Verify Email Functionality

After deployment, test your contact form:

1. Go to your live site: `https://your-domain.com`
2. Fill out the contact form
3. Submit

You should see:
- ✅ Success message on screen
- ✅ Notification email to `3stech.inc@gmail.com`
- ✅ Confirmation email to the customer

### If emails don't work:

1. **Check Vercel Function Logs:**
   - Vercel dashboard → **"Functions"** tab
   - Look for errors in `/api/lead` function

2. **Verify Environment Variables:**
   - Vercel dashboard → **"Settings"** → **"Environment Variables"**
   - Make sure all SMTP variables are set

3. **Check Gmail Settings:**
   - Ensure "Less secure app access" is enabled (for older accounts)
   - Or use an App Password (for 2FA accounts)

---

## 🎨 Step 5: Custom Domain Setup (Advanced)

### Setting up www redirect:
Most businesses want both `3stech.com` and `www.3stech.com` to work:

1. In Vercel → **"Domains"**
2. Add both domains:
   - `3stech.com`
   - `www.3stech.com`
3. Set one as primary (usually non-www)
4. Vercel automatically redirects the other

### Professional Email Setup:
Want emails from `contact@3stech.com`?

**Option 1: Google Workspace** ($6/user/month)
- Professional email with your domain
- 30GB storage, Calendar, Drive

**Option 2: Zoho Mail** (Free for 5 users)
- Professional email
- 5GB storage per user

**Option 3: Forward to Gmail** (Free)
- Set up email forwarding in your domain registrar
- All emails forwarded to your Gmail

---

## 🔍 Step 6: Monitor & Optimize

### Vercel Analytics
1. In Vercel dashboard → **"Analytics"**
2. Enable analytics (free tier available)
3. See visitor stats, page views, performance

### Performance Monitoring
1. Run Lighthouse audit:
   - Open site in Chrome
   - F12 → "Lighthouse" tab
   - Generate report

2. Aim for scores:
   - Performance: 90+
   - Accessibility: 90+
   - Best Practices: 90+
   - SEO: 90+

---

## 🆘 Troubleshooting

### Deployment fails
- Check build logs in Vercel dashboard
- Verify `package.json` dependencies
- Make sure `npm run build` works locally

### API routes not working
- Ensure `api/` folder is in repository root
- Check environment variables are set
- View function logs in Vercel

### Domain not connecting
- Wait 24-48 hours for DNS propagation
- Verify DNS records match Vercel's instructions
- Use `nslookup yourdomain.com` to check DNS

### Emails not sending
- Verify all SMTP environment variables
- Check Vercel function logs for errors
- Test SMTP credentials locally first

---

## 📊 Production Checklist

Before announcing your site:

- [ ] Custom domain connected and working
- [ ] HTTPS enabled (automatic with Vercel)
- [ ] Contact form tested and working
- [ ] All email notifications arriving
- [ ] Mobile responsive design verified
- [ ] All links working
- [ ] Analytics set up
- [ ] Lighthouse score above 90
- [ ] Favicon updated
- [ ] Social media meta tags added
- [ ] Privacy policy created (if collecting data)
- [ ] 404 page customized

---

## 🎯 Next Steps After Deployment

1. **Test everything thoroughly**
   - Submit test forms
   - Check all pages on mobile
   - Verify email notifications

2. **Set up monitoring**
   - Enable Vercel Analytics
   - Add Google Analytics (optional)
   - Set up uptime monitoring (e.g., UptimeRobot)

3. **Marketing & SEO**
   - Submit to Google Search Console
   - Create XML sitemap
   - Add structured data markup
   - Share on social media

4. **Maintenance**
   - Keep dependencies updated
   - Monitor performance
   - Check function logs regularly
   - Respond to form submissions promptly

---

## 💰 Costs Summary

**Vercel (Hosting):** FREE
- Unlimited bandwidth
- Automatic HTTPS
- Global CDN
- 100GB bandwidth/month free

**Domain:** $10-20/year
- .com domains typically $12-15/year
- Premium domains more expensive

**Email:**
- Gmail SMTP: FREE (using existing Gmail)
- Professional email: $0-6/month (optional)

**Total:** ~$1-2/month average 💰

---

## 🎉 Conclusion

Your 3S Tech website is now:
- ✅ Deployed to production
- ✅ Accessible worldwide via Vercel's CDN
- ✅ Automatically deploying on git push
- ✅ Sending email notifications
- ✅ Secured with HTTPS
- ✅ Ready for customers!

**Your live URL:** Get this from Vercel dashboard after deployment

Need help? Check:
- **Vercel Docs:** https://vercel.com/docs
- **Vercel Support:** https://vercel.com/support
- **Or contact me for assistance!**

---

**Last Updated:** October 2025

