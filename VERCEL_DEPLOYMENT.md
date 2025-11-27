# 🚀 Vercel Deployment Guide for TripRT

Complete step-by-step guide to deploy TripRT on Vercel.

---

## 📋 Prerequisites

- GitHub account
- Vercel account (free tier works)
- Git installed locally

---

## 🔧 STEP 1: Prepare Your Local Code

### 1.1 Extract the ZIP file

Extract `TripRT_FIXED.zip` to `C:\triprt\`

### 1.2 Navigate to frontend folder

```bash
cd C:\triprt\TripRT_FIXED\frontend
```

### 1.3 Verify files exist

Check that you have:
- ✅ `package.json`
- ✅ `next.config.js`
- ✅ `tailwind.config.js`
- ✅ `src/app/page.tsx`
- ✅ `src/components/SearchForm.tsx`

---

## 📤 STEP 2: Push to GitHub

### 2.1 Initialize Git (if not already done)

```bash
cd C:\triprt
git init
git add .
git commit -m "TripRT frontend - production ready"
```

### 2.2 Create GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `triprt`
3. Keep it **Private** (recommended)
4. Click **Create repository**

### 2.3 Push code

```bash
git remote add origin https://github.com/YOUR_USERNAME/triprt.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## 🌐 STEP 3: Deploy Frontend to Vercel

### 3.1 Go to Vercel

1. Open [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Select your `triprt` repository

### 3.2 Configure Project Settings

| Setting | Value |
|---------|-------|
| **Project Name** | `triprt-frontend` |
| **Framework Preset** | **Next.js** ✅ |
| **Root Directory** | `TripRT_FIXED/frontend` |
| **Build Command** | `npm run build` (default) |
| **Output Directory** | `.next` (default) |
| **Install Command** | `npm install` (default) |

**IMPORTANT:** Set **Root Directory** to `TripRT_FIXED/frontend`

### 3.3 Add Environment Variables

Click **"Environment Variables"** and add:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_API_URL` | `https://api.triprt.com` (or your backend URL) |

For now, you can use a placeholder. We'll update this later when backend is deployed.

### 3.4 Deploy

Click **"Deploy"**

Wait 2-3 minutes for build to complete.

---

## ✅ STEP 4: Verify Deployment

### 4.1 Check Build Logs

Watch the deployment logs. You should see:

```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages
Build Completed ✓
```

### 4.2 Visit Your Site

Vercel will give you a URL like:
```
https://triprt-frontend.vercel.app
```

Click it and verify:
- ✅ Homepage loads
- ✅ Search form is visible
- ✅ No console errors
- ✅ Styling looks correct

---

## 🔧 STEP 5: Deploy Backend (Optional - For Real API)

If you want real search results (not mock data), deploy the backend:

### 5.1 Create New Vercel Project

1. Go to [vercel.com/new](https://vercel.com/new)
2. Select same `triprt` repository
3. Click **"Import"**

### 5.2 Configure Backend Settings

| Setting | Value |
|---------|-------|
| **Project Name** | `triprt-backend` |
| **Framework Preset** | **Other** |
| **Root Directory** | `TripRT_FIXED/backend` |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |

### 5.3 Add Backend Environment Variables

| Name | Value | Where to Get |
|------|-------|--------------|
| `PERPLEXITY_API_KEY` | `pplx-xxxxx` | [perplexity.ai/settings/api](https://www.perplexity.ai/settings/api) |
| `OPENAI_API_KEY` | `sk-xxxxx` | [platform.openai.com/api-keys](https://platform.openai.com/api-keys) |
| `AVIASALES_MARKER` | Your marker | [travelpayouts.com](https://www.travelpayouts.com) |
| `AVIASALES_API_KEY` | Your key | [travelpayouts.com](https://www.travelpayouts.com) |
| `NODE_ENV` | `production` | - |
| `PORT` | `5000` | - |

### 5.4 Deploy Backend

Click **"Deploy"**

You'll get a URL like:
```
https://triprt-backend.vercel.app
```

### 5.5 Update Frontend Environment Variable

1. Go to your **frontend** project in Vercel
2. Settings → Environment Variables
3. Edit `NEXT_PUBLIC_API_URL`
4. Change to: `https://triprt-backend.vercel.app`
5. Click **Save**
6. Go to Deployments → Click **"Redeploy"**

---

## 🎨 STEP 6: Add Google AdSense (Optional)

### 6.1 Get AdSense Account

1. Go to [google.com/adsense](https://www.google.com/adsense)
2. Sign up and verify your site
3. Get your publisher ID (e.g., `ca-pub-1234567890123456`)

### 6.2 Update AdBanner Component

Edit `src/components/AdBanner.tsx`:

```tsx
export default function AdBanner({ slot }: AdBannerProps) {
  return (
    <ins className="adsbygoogle"
         style={{display:'block'}}
         data-ad-client="ca-pub-YOUR_ID_HERE"
         data-ad-slot="1234567890"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
  );
}
```

### 6.3 Push Changes

```bash
git add .
git commit -m "Add Google AdSense"
git push
```

Vercel will auto-deploy.

---

## 🔍 STEP 7: Test Everything

### 7.1 Test Search

1. Go to your live site
2. Enter: From "Mumbai", To "Dubai"
3. Select dates
4. Click "Search Flights"
5. Verify results page loads

### 7.2 Test Ads

- Check that ad placeholders are visible
- If AdSense is configured, ads should show after approval

### 7.3 Test Mobile

- Open site on mobile
- Verify responsive design works

---

## 🐛 Troubleshooting

### Build Error: "Module not found"

**Solution:** Check that `Root Directory` is set to `TripRT_FIXED/frontend`

### Error: "border-border class does not exist"

**Solution:** Already fixed in this version. If you see this, verify you're using the FIXED zip file.

### Site loads but no styling

**Solution:** 
1. Check browser console for errors
2. Verify `tailwind.config.js` exists
3. Redeploy

### API calls failing

**Solution:**
1. Check `NEXT_PUBLIC_API_URL` is set correctly
2. Verify backend is deployed
3. Check backend logs for errors

---

## 📊 Monitor Your Site

### Vercel Analytics

1. Go to your project in Vercel
2. Click **"Analytics"** tab
3. View traffic, performance, etc.

### Check Logs

1. Go to **"Deployments"**
2. Click latest deployment
3. Click **"View Function Logs"**

---

## 🎉 You're Live!

Your TripRT site is now:
✅ Deployed on Vercel
✅ Accessible worldwide
✅ Auto-deploys on git push
✅ Has HTTPS enabled
✅ Ready for users

**Next steps:**
1. Get API keys (Perplexity, OpenAI, Aviasales)
2. Deploy backend
3. Add Google AdSense
4. Launch on social media
5. Start earning! 💰

---

## 📞 Need Help?

If you encounter issues:
1. Check Vercel build logs
2. Check browser console
3. Verify all environment variables
4. Contact support@triprt.com

---

**Good luck with your launch!** 🚀
