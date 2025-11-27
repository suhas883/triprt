# 🚀 TripRT Deployment Guide

## Quick Deploy to Vercel (5 minutes)

### Step 1: Push to GitHub

If you haven't already:

\`\`\`bash
cd triprt-nextjs
git init
git add .
git commit -m "Initial commit - TripRT Next.js"
git branch -M main
git remote add origin https://github.com/suhas883/triprt.git
git push -u origin main
\`\`\`

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository: `suhas883/triprt`
4. Configure project:
   - **Framework Preset**: Next.js ✅ (auto-detected)
   - **Root Directory**: `./` (or `triprt-nextjs` if in subfolder)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

5. Click "Deploy"

### Step 3: Add Environment Variables (Optional for now)

After deployment, go to:
- Project Settings → Environment Variables
- Add these (when you have the API keys):

\`\`\`
AVIASALES_API_KEY=your_key_here
SKYSCANNER_API_KEY=your_key_here
OPENAI_API_KEY=your_key_here
AVIASALES_AFFILIATE_ID=your_id_here
BOOKING_AFFILIATE_ID=your_id_here
\`\`\`

**Note**: The site will work without these for now (shows mock data).

### Step 4: Done! 🎉

Your site will be live at:
- `https://triprt.vercel.app` (if domain is available)
- or `https://triprt-xxxxx.vercel.app`

## Vercel Settings Checklist

✅ Framework: **Next.js**
✅ Root Directory: `./` or `triprt-nextjs`
✅ Build Command: `npm run build`
✅ Output Directory: `.next`
✅ Node Version: 18.x or higher (auto)

## Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `triprt.com`)
3. Follow Vercel's DNS instructions
4. Wait for DNS propagation (5-60 minutes)

## Troubleshooting

### Build Error: "Module not found"
- Make sure all files are committed and pushed to GitHub
- Check that `package.json` has all dependencies

### Build Error: "TypeScript errors"
- Run `npm run build` locally first
- Fix any TypeScript errors before pushing

### Styling not showing
- Verify `globals.css` is imported in `layout.tsx`
- Check `tailwind.config.js` content paths

### Environment variables not working
- Make sure they're added in Vercel dashboard (not just `.env.local`)
- Redeploy after adding env vars

## Updating Your Site

Every time you push to GitHub, Vercel automatically rebuilds and deploys:

\`\`\`bash
git add .
git commit -m "Update: description of changes"
git push
\`\`\`

Vercel will:
1. Detect the push
2. Build your site
3. Deploy automatically
4. Give you a preview URL

## Performance Tips

- Images: Use Next.js `<Image>` component for optimization
- Fonts: Already using `next/font` for optimal loading
- Analytics: Add Vercel Analytics (free) in project settings
- Caching: Vercel handles this automatically

## Next Steps After Deployment

1. ✅ Site is live
2. 🐦 Create social media accounts (Twitter, LinkedIn)
3. 📢 Post launch announcement
4. 🔗 Share the live URL
5. 📊 Add analytics (Google Analytics, Plausible, etc.)
6. 🔌 Integrate real APIs (Aviasales, Skyscanner, etc.)
7. 💰 Add affiliate tracking
8. 📈 Start getting users and feedback

---

**You're about to go LIVE! 🚀**
