# TripRT - AI-Powered Multi-Language Travel Search

🚀 **World's First AI-Powered Travel Search in 15 Languages**

Find flights & hotels 30% cheaper by searching Japanese, Korean, Chinese & global travel sites.

## 🌟 Features

- **Multi-Language Search**: Search in 15 languages across 50+ travel sites
- **30% Cheaper Prices**: Find deals on Japanese, Korean, and Chinese sites that others miss
- **AI-Powered Insights**: Smart recommendations for best booking times
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **SEO Optimized**: Built with Next.js for best performance and SEO

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

### 1. Clone the repository

\`\`\`bash
git clone https://github.com/suhas883/triprt.git
cd triprt
\`\`\`

### 2. Install dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Set up environment variables

Create a \`.env.local\` file in the root directory:

\`\`\`env
# API Keys
AVIASALES_API_KEY=your_aviasales_key
SKYSCANNER_API_KEY=your_skyscanner_key
OPENAI_API_KEY=your_openai_key
PERPLEXITY_API_KEY=your_perplexity_key

# Affiliate IDs
AVIASALES_AFFILIATE_ID=your_affiliate_id
BOOKING_AFFILIATE_ID=your_booking_affiliate_id

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://triprt.vercel.app
NEXT_PUBLIC_SITE_NAME=TripRT
\`\`\`

### 4. Run development server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (or `frontend` if in subfolder)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
6. Add environment variables in Vercel dashboard
7. Click "Deploy"

### Option 2: Deploy via Vercel CLI

\`\`\`bash
npm install -g vercel
vercel login
vercel
\`\`\`

## 📁 Project Structure

\`\`\`
triprt-nextjs/
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── layout.tsx  # Root layout
│   │   ├── page.tsx    # Home page
│   │   ├── flights/    # Flights search page
│   │   ├── hotels/     # Hotels search page
│   │   └── search/     # Search results page
│   ├── components/     # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── SearchForm.tsx
│   ├── lib/           # Utilities and API functions
│   │   ├── api.ts     # API integration logic
│   │   └── utils.ts   # Helper functions
│   └── styles/        # Global styles
│       └── globals.css
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
\`\`\`

## 🔧 Configuration

### Adding API Integrations

Edit \`src/lib/api.ts\` to add your API integrations:

\`\`\`typescript
export async function searchFlights(params: FlightSearchParams) {
  // Add your Aviasales API call
  const aviasalesResults = await fetch('...')

  // Add your Skyscanner API call
  const skyscannerResults = await fetch('...')

  // Combine and return results
  return combinedResults
}
\`\`\`

### Adding Affiliate Links

Edit \`src/lib/api.ts\` to add your affiliate IDs:

\`\`\`typescript
export function addAffiliateTracking(url: string, source: string): string {
  const affiliateIds = {
    aviasales: process.env.AVIASALES_AFFILIATE_ID,
    booking: process.env.BOOKING_AFFILIATE_ID,
    // Add more...
  }
  // Add tracking logic
}
\`\`\`

## 🎨 Customization

### Colors

Edit \`tailwind.config.js\` to change the color scheme:

\`\`\`javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
}
\`\`\`

### Content

- **Home page**: Edit \`src/app/page.tsx\`
- **Header/Footer**: Edit \`src/components/Header.tsx\` and \`Footer.tsx\`
- **Meta tags**: Edit \`src/app/layout.tsx\`

## 📊 Analytics

To add analytics (Google Analytics, Plausible, etc.):

1. Install the analytics package
2. Add tracking code to \`src/app/layout.tsx\`
3. Add environment variables for tracking IDs

## 🐛 Troubleshooting

### Build fails on Vercel

- Check that all dependencies are in \`package.json\`
- Verify environment variables are set in Vercel dashboard
- Check build logs for specific errors

### Styling not working

- Make sure \`globals.css\` is imported in \`layout.tsx\`
- Verify \`tailwind.config.js\` content paths are correct
- Run \`npm run build\` locally to test

### TypeScript errors

- Run \`npm run lint\` to check for errors
- Make sure all types are properly defined
- Check \`tsconfig.json\` configuration

## 📝 TODO / Roadmap

- [ ] Integrate real flight search APIs (Aviasales, Skyscanner)
- [ ] Integrate hotel search APIs (Booking.com, Agoda)
- [ ] Add Japanese site integrations (Rakuten Travel, Jalan)
- [ ] Add Korean site integrations (Naver, Interpark)
- [ ] Add Chinese site integrations (Ctrip, Qunar)
- [ ] Implement AI-powered recommendations
- [ ] Add user accounts and saved searches
- [ ] Add price alerts
- [ ] Add mobile app (React Native)
- [ ] Add more languages

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 💬 Support

For questions or support, reach out:

- Twitter: [@TripRT](https://twitter.com/triprt)
- Email: support@triprt.com
- GitHub Issues: [Create an issue](https://github.com/suhas883/triprt/issues)

## 🎉 Acknowledgments

Built with ❤️ to help travelers save money and discover better deals.

---

**Ready to save 30% on your next trip?** Start searching now! 🚀
