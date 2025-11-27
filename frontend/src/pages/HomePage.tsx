import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Hotel, Sparkles, Globe, TrendingDown, Shield } from 'lucide-react';
import SearchForm from '../components/SearchForm';

const HomePage: React.FC = () => {
  const handleSearch = (data: any) => {
    console.log('Search data:', data);
    // Navigate to results page
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <Sparkles className="inline h-12 w-12 mb-2" />
              <br />
              World's First AI-Powered Travel Search
            </h1>
            <p className="text-xl md:text-2xl mb-4">
              Find Flights & Hotels <span className="font-bold text-yellow-300">30% Cheaper</span> Than Anywhere Else
            </p>
            <p className="text-lg opacity-90">
              We search in 15 languages across Japanese, Korean, Chinese & global travel sites
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <SearchForm type="flight" onSearch={handleSearch} />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why TripRT is Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <Globe className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Multi-Language Search</h3>
              <p className="text-gray-600">
                We search travel sites in 15 languages, finding deals others miss
              </p>
            </div>
            <div className="card text-center">
              <TrendingDown className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">30% Cheaper Prices</h3>
              <p className="text-gray-600">
                Japanese & Korean sites often have prices 30% lower than Skyscanner
              </p>
            </div>
            <div className="card text-center">
              <Sparkles className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
              <p className="text-gray-600">
                Get smart recommendations on best time to book & flexible dates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stop Overpaying for Travel
          </h2>
          <p className="text-xl mb-8">
            Join thousands of travelers saving money with TripRT
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/flights" className="btn-secondary bg-white text-primary-600">
              Search Flights
            </Link>
            <Link to="/hotels" className="btn-secondary bg-white text-primary-600">
              Search Hotels
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;