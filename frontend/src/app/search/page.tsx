'use client'

import { useSearchParams } from 'next/navigation'
import { Plane, Clock, DollarSign, TrendingUp, Loader2 } from 'lucide-react'
import { Suspense } from 'react'

function SearchResults() {
  const searchParams = useSearchParams()
  const from = searchParams.get('from')
  const to = searchParams.get('to')
  const departure = searchParams.get('departure')
  const returnDate = searchParams.get('return')
  const passengers = searchParams.get('passengers')

  // Mock search results (in production, this would call your API)
  const results = [
    {
      id: 1,
      airline: 'ANA (All Nippon Airways)',
      price: 450,
      duration: '13h 30m',
      stops: 'Direct',
      departure: '10:30 AM',
      arrival: '2:00 PM (+1)',
      source: 'Rakuten Travel (Japanese)',
      savings: 120,
    },
    {
      id: 2,
      airline: 'Korean Air',
      price: 485,
      duration: '14h 15m',
      stops: '1 stop',
      departure: '8:45 AM',
      arrival: '11:00 PM',
      source: 'Naver Travel (Korean)',
      savings: 95,
    },
    {
      id: 3,
      airline: 'Japan Airlines',
      price: 520,
      duration: '13h 45m',
      stops: 'Direct',
      departure: '2:15 PM',
      arrival: '5:45 PM (+1)',
      source: 'Jalan (Japanese)',
      savings: 80,
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Search Summary */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-2xl font-bold mb-4">
            {from} → {to}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div>
              <span className="font-medium">Departure:</span> {departure}
            </div>
            {returnDate && (
              <div>
                <span className="font-medium">Return:</span> {returnDate}
              </div>
            )}
            <div>
              <span className="font-medium">Passengers:</span> {passengers}
            </div>
          </div>

          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium">
              ✓ Searching in 15 languages across 50+ travel sites
            </p>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold mb-4">
            {results.length} Flights Found
          </h2>

          {results.map((result) => (
            <div key={result.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Plane className="w-6 h-6 text-primary-600" />
                    <h3 className="text-lg font-bold">{result.airline}</h3>
                    {result.savings > 0 && (
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                        Save ${result.savings}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Departure</p>
                      <p className="font-semibold">{result.departure}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Duration</p>
                      <p className="font-semibold">{result.duration}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Arrival</p>
                      <p className="font-semibold">{result.arrival}</p>
                    </div>
                  </div>

                  <div className="mt-3 text-xs text-gray-500">
                    Found on: <span className="font-medium">{result.source}</span>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-600">
                    ${result.price}
                  </p>
                  <button className="btn-primary mt-3">View Deal</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin" />
      </div>
    }>
      <SearchResults />
    </Suspense>
  )
}
