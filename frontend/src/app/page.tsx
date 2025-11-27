import Link from 'next/link'
import { Plane, Hotel, Globe, Zap, TrendingDown, Brain } from 'lucide-react'
import SearchForm from '@/components/SearchForm'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            World's First AI-Powered
            <span className="text-primary-600"> Multi-Language</span> Travel Search
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Find Flights & Hotels 30% Cheaper Than Anywhere Else
          </p>
          <p className="text-lg text-gray-500">
            We search in 15 languages across Japanese, Korean, Chinese & global travel sites
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-5xl mx-auto">
          <SearchForm />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why TripRT is Different
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="card text-center">
            <div className="flex justify-center mb-4">
              <Globe className="w-16 h-16 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Multi-Language Search</h3>
            <p className="text-gray-600">
              We search travel sites in 15 languages, finding deals others miss. Japanese and Korean sites often have exclusive prices.
            </p>
          </div>

          <div className="card text-center">
            <div className="flex justify-center mb-4">
              <TrendingDown className="w-16 h-16 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">30% Cheaper Prices</h3>
            <p className="text-gray-600">
              Japanese & Korean sites often have prices 30% lower than Skyscanner. We find them automatically.
            </p>
          </div>

          <div className="card text-center">
            <div className="flex justify-center mb-4">
              <Brain className="w-16 h-16 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">AI-Powered Insights</h3>
            <p className="text-gray-600">
              Get smart recommendations on best time to book, flexible dates, and alternative airports.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
              1
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Enter Your Trip Details</h3>
              <p className="text-gray-600">
                Tell us where you want to go, when, and how many travelers. Our AI understands flexible dates and alternative airports.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">We Search in 15 Languages</h3>
              <p className="text-gray-600">
                Our AI searches Japanese sites (Rakuten Travel, Jalan), Korean sites (Naver, Interpark), Chinese sites (Ctrip, Qunar), and global platforms simultaneously.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Get the Best Deals</h3>
              <p className="text-gray-600">
                We show you the cheapest options with transparent pricing. No hidden fees, no tricks. Just honest savings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Stop Overpaying for Travel
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of travelers saving money with TripRT. Start your search now.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/flights" className="btn-primary inline-flex items-center gap-2">
            <Plane className="w-5 h-5" />
            Search Flights
          </Link>
          <Link href="/hotels" className="btn-secondary inline-flex items-center gap-2">
            <Hotel className="w-5 h-5" />
            Search Hotels
          </Link>
        </div>
      </section>
    </div>
  )
}
