import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TripRT - AI-Powered Travel Search | Find Flights & Hotels 30% Cheaper',
  description: 'Search travel sites in 15 languages across Japanese, Korean, Chinese & global platforms. Find flights and hotels 30% cheaper than anywhere else with AI-powered insights.',
  keywords: 'cheap flights, hotel deals, travel search, multi-language search, AI travel, TripRT',
  authors: [{ name: 'TripRT' }],
  openGraph: {
    title: 'TripRT - AI-Powered Travel Search',
    description: 'Find flights & hotels 30% cheaper by searching in 15 languages',
    url: 'https://triprt.vercel.app',
    siteName: 'TripRT',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TripRT - AI-Powered Travel Search',
    description: 'Find flights & hotels 30% cheaper',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
