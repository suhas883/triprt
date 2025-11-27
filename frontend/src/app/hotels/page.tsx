import { Hotel, MapPin, Star, DollarSign } from 'lucide-react'

export const metadata = {
  title: 'Search Hotels - TripRT',
  description: 'Find the best hotel deals by searching in 15 languages across global booking sites',
}

export default function HotelsPage() {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Search Hotels
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compare hotel prices across Japanese, Korean, Chinese & global booking platforms
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="card">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Destination
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="City or Hotel Name"
                    className="input-field pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Check-in
                </label>
                <input
                  type="date"
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Check-out
                </label>
                <input
                  type="date"
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Guests
                </label>
                <select className="input-field">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button className="btn-primary w-full mt-6">
              Search Hotels
            </button>
          </div>
        </div>

        {/* Benefits */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Why Book Hotels with TripRT?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <DollarSign className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Best Prices</h3>
              <p className="text-gray-600 text-sm">
                We compare prices from Booking.com, Agoda, Rakuten Travel, and 20+ platforms
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <Star className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Verified Reviews</h3>
              <p className="text-gray-600 text-sm">
                Read reviews in multiple languages to get the full picture
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <Hotel className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">All Types</h3>
              <p className="text-gray-600 text-sm">
                From budget hostels to luxury resorts, we search them all
              </p>
            </div>
          </div>
        </div>

        {/* Popular Destinations */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Popular Hotel Destinations
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { city: 'Tokyo', hotels: '2,500+', from: '$45' },
              { city: 'Seoul', hotels: '1,800+', from: '$35' },
              { city: 'Bangkok', hotels: '3,200+', from: '$25' },
              { city: 'Singapore', hotels: '1,200+', from: '$55' },
              { city: 'Hong Kong', hotels: '1,500+', from: '$50' },
              { city: 'Osaka', hotels: '1,100+', from: '$40' },
            ].map((dest, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                <h3 className="text-xl font-bold mb-2">{dest.city}</h3>
                <p className="text-gray-600 text-sm mb-3">{dest.hotels} hotels</p>
                <p className="text-2xl font-bold text-primary-600">
                  {dest.from}
                  <span className="text-sm text-gray-500 font-normal">/night</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
