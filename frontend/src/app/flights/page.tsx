import SearchForm from '@/components/SearchForm'
import { Plane, Globe, TrendingDown } from 'lucide-react'

export const metadata = {
  title: 'Search Flights - TripRT',
  description: 'Find the cheapest flights by searching in 15 languages across global travel sites',
}

export default function FlightsPage() {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Search Flights
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We search Japanese, Korean, Chinese & global sites to find you the best flight deals
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-5xl mx-auto mb-16">
          <SearchForm />
        </div>

        {/* Benefits */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Why Search Flights with TripRT?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Globe className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">15 Languages</h3>
              <p className="text-gray-600 text-sm">
                We search sites in Japanese, Korean, Chinese, and 12 other languages
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <TrendingDown className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">30% Cheaper</h3>
              <p className="text-gray-600 text-sm">
                Asian travel sites often have significantly lower prices than Western platforms
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <Plane className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">All Airlines</h3>
              <p className="text-gray-600 text-sm">
                We compare prices from budget carriers to premium airlines
              </p>
            </div>
          </div>
        </div>

        {/* Popular Routes */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Popular Flight Routes
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { from: 'New York', to: 'Tokyo', price: '$450' },
              { from: 'London', to: 'Seoul', price: '$520' },
              { from: 'Los Angeles', to: 'Bangkok', price: '$380' },
              { from: 'Paris', to: 'Singapore', price: '$490' },
              { from: 'Sydney', to: 'Osaka', price: '$320' },
              { from: 'Toronto', to: 'Hong Kong', price: '$550' },
            ].map((route, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md flex justify-between items-center">
                <div>
                  <p className="font-semibold">{route.from} → {route.to}</p>
                  <p className="text-sm text-gray-500">Round trip</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary-600">{route.price}</p>
                  <p className="text-xs text-gray-500">from</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
