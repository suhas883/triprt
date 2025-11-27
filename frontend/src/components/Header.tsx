import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plane, Menu, X, Globe, DollarSign } from 'lucide-react';
import { useLanguage, SUPPORTED_LANGUAGES } from '../contexts/LanguageContext';
import { useCurrency, SUPPORTED_CURRENCIES } from '../contexts/CurrencyContext';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [currMenuOpen, setCurrMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { currency, setCurrency } = useCurrency();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Plane className="h-8 w-8 text-primary-600" />
            <span className="text-2xl font-bold text-primary-600">TripRT</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/flights" className="text-gray-700 hover:text-primary-600 font-medium">
              Flights
            </Link>
            <Link to="/hotels" className="text-gray-700 hover:text-primary-600 font-medium">
              Hotels
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-primary-600 font-medium">
              Travel Tips
            </Link>
            <Link to="/alerts" className="text-gray-700 hover:text-primary-600 font-medium">
              Price Alerts
            </Link>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-600"
              >
                <Globe className="h-5 w-5" />
                <span>{SUPPORTED_LANGUAGES[language as keyof typeof SUPPORTED_LANGUAGES]?.flag}</span>
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 max-h-96 overflow-y-auto">
                  {Object.entries(SUPPORTED_LANGUAGES).map(([code, { name, flag }]) => (
                    <button
                      key={code}
                      onClick={() => {
                        setLanguage(code);
                        setLangMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <span>{flag}</span>
                      <span>{name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Currency Selector */}
            <div className="relative">
              <button
                onClick={() => setCurrMenuOpen(!currMenuOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-600"
              >
                <DollarSign className="h-5 w-5" />
                <span>{currency}</span>
              </button>
              {currMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 max-h-96 overflow-y-auto">
                  {Object.entries(SUPPORTED_CURRENCIES).map(([code, { symbol, name }]) => (
                    <button
                      key={code}
                      onClick={() => {
                        setCurrency(code);
                        setCurrMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      {symbol} {code} - {name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link to="/flights" className="block text-gray-700 hover:text-primary-600">
              Flights
            </Link>
            <Link to="/hotels" className="block text-gray-700 hover:text-primary-600">
              Hotels
            </Link>
            <Link to="/blog" className="block text-gray-700 hover:text-primary-600">
              Travel Tips
            </Link>
            <Link to="/alerts" className="block text-gray-700 hover:text-primary-600">
              Price Alerts
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;