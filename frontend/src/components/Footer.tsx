import React from 'react';
import { Link } from 'react-router-dom';
import { Plane } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Plane className="h-8 w-8 text-primary-500" />
              <span className="text-2xl font-bold text-white">TripRT</span>
            </div>
            <p className="text-sm">
              World's first AI-powered travel search. Find flights and hotels 30% cheaper than anywhere else.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/flights" className="hover:text-white">Search Flights</Link></li>
              <li><Link to="/hotels" className="hover:text-white">Search Hotels</Link></li>
              <li><Link to="/alerts" className="hover:text-white">Price Alerts</Link></li>
              <li><Link to="/blog" className="hover:text-white">Travel Blog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog/how-to-find-cheapest-flights-2025" className="hover:text-white">Find Cheap Flights</Link></li>
              <li><Link to="/blog/best-time-to-book-flights-2025" className="hover:text-white">Best Time to Book</Link></li>
              <li><Link to="/blog/hidden-city-ticketing-guide" className="hover:text-white">Hidden City Tickets</Link></li>
              <li><Link to="/blog/travel-hacking-guide-2025" className="hover:text-white">Travel Hacking</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} TripRT.com - All rights reserved.</p>
          <p className="mt-2">Built with AI. Powered by innovation. Made for travelers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;