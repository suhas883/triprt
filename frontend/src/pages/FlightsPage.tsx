import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import { Loader, ExternalLink, Sparkles } from 'lucide-react';
import { useCurrency, SUPPORTED_CURRENCIES } from '../contexts/CurrencyContext';

const FlightsPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const { currency, convertPrice } = useCurrency();

  const handleSearch = async (data: any) => {
    setLoading(true);
    try {
      const response = await fetch('/api/search/flights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const searchResults = await response.json();
      setResults(searchResults.flights || []);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Search Flights</h1>

        <SearchForm type="flight" onSearch={handleSearch} />

        {loading && (
          <div className="text-center py-12">
            <Loader className="h-12 w-12 animate-spin text-primary-600 mx-auto mb-4" />
            <p className="text-lg text-gray-600">Searching across 15 languages...</p>
            <p className="text-sm text-gray-500 mt-2">Finding you the cheapest flights</p>
          </div>
        )}

        {!loading && results.length > 0 && (
          <div className="mt-8 space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start space-x-3">
              <Sparkles className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-yellow-900">AI Insight</h3>
                <p className="text-sm text-yellow-800">
                  Prices are typically 15% lower if you book 3 weeks in advance. 
                  Consider flying on Tuesday or Wednesday for better deals.
                </p>
              </div>
            </div>

            {results.map((flight, index) => (
              <div key={index} className="card">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="flex-grow">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-gray-500">{flight.airline}</span>
                      {index === 0 && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          Cheapest
                        </span>
                      )}
                    </div>
                    <div className="text-lg font-semibold mb-1">
                      {flight.departure} → {flight.arrival}
                    </div>
                    <div className="text-sm text-gray-600">
                      {flight.duration} • {flight.stops === 0 ? 'Direct' : `${flight.stops} stop(s)`}
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      Found on: {flight.source}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6 text-right">
                    <div className="text-2xl font-bold text-primary-600 mb-2">
                      {SUPPORTED_CURRENCIES[currency as keyof typeof SUPPORTED_CURRENCIES]?.symbol}
                      {convertPrice(flight.price, flight.currency).toFixed(0)}
                    </div>
                    <a
                      href={flight.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center"
                    >
                      Book Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FlightsPage;