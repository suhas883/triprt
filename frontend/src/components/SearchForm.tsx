'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Plane, Calendar, Users, Search } from 'lucide-react'

export default function SearchForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departure: '',
    return: '',
    passengers: '1',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Build query string
    const params = new URLSearchParams({
      from: formData.from,
      to: formData.to,
      departure: formData.departure,
      return: formData.return,
      passengers: formData.passengers,
    })

    // Navigate to search results
    router.push(`/search?${params.toString()}`)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* From */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            From
          </label>
          <div className="relative">
            <Plane className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="from"
              value={formData.from}
              onChange={handleChange}
              placeholder="City or Airport"
              className="input-field pl-10"
              required
            />
          </div>
        </div>

        {/* To */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            To
          </label>
          <div className="relative">
            <Plane className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 rotate-90" />
            <input
              type="text"
              name="to"
              value={formData.to}
              onChange={handleChange}
              placeholder="City or Airport"
              className="input-field pl-10"
              required
            />
          </div>
        </div>

        {/* Departure */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Departure
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="date"
              name="departure"
              value={formData.departure}
              onChange={handleChange}
              className="input-field pl-10"
              required
            />
          </div>
        </div>

        {/* Return */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Return
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="date"
              name="return"
              value={formData.return}
              onChange={handleChange}
              className="input-field pl-10"
            />
          </div>
        </div>

        {/* Passengers */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Passengers
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              className="input-field pl-10"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Passenger' : 'Passengers'}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
          <Search className="w-5 h-5" />
          Search Flights
        </button>
      </div>

      {/* Info Text */}
      <p className="text-sm text-gray-500 text-center mt-4">
        We'll search in 15 languages to find you the best deals
      </p>
    </form>
  )
}
