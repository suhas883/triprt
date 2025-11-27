import SearchForm from '@/components/SearchForm';
import AdBanner from '@/components/AdBanner';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary-600">TripRT</h1>
            <nav className="space-x-6">
              <a href="/" className="text-gray-700 hover:text-primary-600">Home</a>
              <a href="/flights" className="text-gray-700 hover:text-primary-600">Flights</a>
              <a href="/hotels" className="text-gray-700 hover:text-primary-600">Hotels</a>
              <a href="/alerts" className="text-gray-700 hover:text-primary-600">Price Alerts</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-4">
            Find Flights 30% Cheaper
          </h2>
          <p className="text-xl mb-8">
            AI-powered search across 50+ sites in 15 languages
          </p>
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
            <SearchForm />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Why TripRT?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">🌍</div>
              <h4 className="text-xl font-bold mb-2">Multi-Language Search</h4>
              <p className="text-gray-600">
                Search Japanese, Korean, Chinese travel sites for hidden deals
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="text-xl font-bold mb-2">AI-Powered</h4>
              <p className="text-gray-600">
                Perplexity AI finds the absolute cheapest prices
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">🔔</div>
              <h4 className="text-xl font-bold mb-2">Price Alerts</h4>
              <p className="text-gray-600">
                Get notified via SMS/Email when prices drop
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdBanner slot="home-bottom" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h5 className="font-bold text-lg mb-4">TripRT</h5>
              <p className="text-gray-400">
                Find the cheapest flights and hotels with AI
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Product</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/flights">Flights</a></li>
                <li><a href="/hotels">Hotels</a></li>
                <li><a href="/alerts">Price Alerts</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Company</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Legal</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy">Privacy</a></li>
                <li><a href="/terms">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TripRT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
