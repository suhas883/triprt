'use client'

import Link from 'next/link'
import { Plane, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary-600">
            <Plane className="w-8 h-8" />
            <span>TripRT</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/flights" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Flights
            </Link>
            <Link href="/hotels" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Hotels
            </Link>
            <Link href="/search" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Search
            </Link>
            <Link href="/flights" className="btn-primary">
              Start Searching
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              href="/flights"
              className="block text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Flights
            </Link>
            <Link
              href="/hotels"
              className="block text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hotels
            </Link>
            <Link
              href="/search"
              className="block text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Search
            </Link>
            <Link
              href="/flights"
              className="block btn-primary text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Searching
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
