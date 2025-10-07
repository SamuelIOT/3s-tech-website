# ⚡ Quick Deploy to Vercel - 5 Minute Guide

## 🚀 Deploy in 3 Steps

### Step 1: Go to Vercel (2 minutes)
1. Visit: **https://vercel.com**
2. Click **"Sign Up"** → **"Continue with GitHub"**
3. Authorize Vercel

### Step 2: Import & Deploy (2 minutes)
1. Click **"Add New..."** → **"Project"**
2. Select: **`SamuelIOT/3s-tech-website`**
3. Click **"Import"**
4. **Add Environment Variables** (click expand below):

```env
LEAD_SMTP_HOST=smtp.gmail.com
LEAD_SMTP_PORT=587
LEAD_SMTP_USER=3stech.inc@gmail.com
LEAD_SMTP_PASS=your_gmail_app_password
LEAD_SMTP_SECURE=false
LEAD_SMTP_REQUIRE_TLS=true
LEAD_NOTIFY_EMAIL=3stech.inc@gmail.com
```

5. Click **"Deploy"**

### Step 3: Get Your Domain (1 minute)
Your site is live at: `https://3s-tech-website-xxx.vercel.app`

**Want custom domain?**
- In Vercel: Settings → Domains → Add your domain
- Or buy one directly in Vercel

---

## 🔑 Gmail App Password Setup

If you need to create a Gmail App Password:

1. Go to: **https://myaccount.google.com/security**
2. Enable **2-Step Verification** (if not already)
3. Search for **"App passwords"**
4. Generate a new app password for "Mail"
5. Copy the 16-character password
6. Use this in your `LEAD_SMTP_PASS` environment variable

---

## ✅ After Deployment

**Test your site:**
1. Visit your Vercel URL
2. Fill out the contact form
3. Check if you receive:
   - ✓ Notification email (to 3stech.inc@gmail.com)
   - ✓ Confirmation email (to customer)

**All working?** 🎉 You're done!

**Not working?**
- Check Vercel → Functions → Logs
- Verify environment variables are set
- See full guide: `VERCEL_DEPLOYMENT_GUIDE.md`

---

## 🌐 Custom Domain (Optional)

### Option A: Buy Through Vercel
Settings → Domains → **Buy** → Search for domain → Purchase

### Option B: Connect Existing Domain
Settings → Domains → **Add** → Enter domain → Follow DNS instructions

---

## 🔄 Updates & Redeployment

Every time you push to GitHub, Vercel automatically redeploys!

```bash
git add .
git commit -m "Update site"
git push origin master
```

Vercel builds and deploys automatically in ~1 minute! 🚀

---

**Need detailed help?** See: `VERCEL_DEPLOYMENT_GUIDE.md`

