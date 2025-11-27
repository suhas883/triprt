# TripRT Frontend

AI-powered travel search platform built with Next.js 14.

## Features

✅ Multi-language flight search (15 languages)
✅ AI-powered price comparison (Perplexity + OpenAI)
✅ Affiliate link integration (Aviasales, Trip.com, etc.)
✅ Ad banner placements (Google AdSense ready)
✅ Price alert system (SMS + Email)
✅ Responsive design with Tailwind CSS

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Environment Variables

Create `.env.local`:

```bash
NEXT_PUBLIC_API_URL=https://your-backend-url.vercel.app
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Set environment variables
5. Deploy

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_API_URL` | Backend API URL | Yes |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | Google AdSense ID | No |

## Project Structure

```
frontend/
├── src/
│   ├── app/              # Next.js 14 App Router
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   ├── search/       # Search results
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── SearchForm.tsx
│   │   └── AdBanner.tsx
│   └── lib/              # Utilities
│       └── api.ts        # API client
├── public/               # Static files
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Ad Integration

Replace placeholder in `src/components/AdBanner.tsx` with your Google AdSense code:

```tsx
<ins className="adsbygoogle"
     style={{display:'block'}}
     data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
     data-ad-slot="1234567890"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
```

## API Integration

The frontend calls the backend API for:
- Flight search
- Hotel search
- Price alerts

See `src/lib/api.ts` for implementation.

## Support

For issues, contact: support@triprt.com

## License

Proprietary - All rights reserved
