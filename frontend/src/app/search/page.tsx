"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { searchFlights, FlightResult } from '@/lib/api';
import AdBanner from '@/components/AdBanner';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [results, setResults] = useState<FlightResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      const params = {
        from: searchParams.get('from') || '',
        to: searchParams.get('to') || '',
        departDate: searchParams.get('departDate') || '',
        returnDate: searchParams.get('returnDate') || '',
        passengers: parseInt(searchParams.get('passengers') || '1'),
      };

      const data = await searchFlights(params);
      setResults(data);
      setLoading(false);
    };

    fetchResults();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Searching across 50+ sites...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <a href="/" className="text-2xl font-bold text-primary-600">TripRT</a>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Ad Banner */}
        <div className="mb-6">
          <AdBanner slot="search-top" />
        </div>

        <h1 className="text-3xl font-bold mb-6">
          {searchParams.get('from')} → {searchParams.get('to')}
        </h1>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar Ad */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <AdBanner slot="search-sidebar" />
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3 space-y-4">
            {results.map((flight) => (
              <div key={flight.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="font-semibold text-lg">{flight.airline}</span>
                      <span className="text-sm text-gray-500">{flight.duration}</span>
                      <span className="text-sm text-gray-500">
                        {flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop(s)`}
                      </span>
                    </div>
                    <div className="text-gray-600">
                      {flight.departure} → {flight.arrival}
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      Source: {flight.source}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary-600">
                      {flight.currency} {flight.price.toLocaleString()}
                    </div>
                    <a
                      href={flight.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition"
                    >
                      Book Now
                    </a>
                    {!flight.isAffiliate && (
                      <p className="text-xs text-gray-500 mt-2">
                        External site
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom Ad Banner */}
            <div className="mt-6">
              <AdBanner slot="search-bottom" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
