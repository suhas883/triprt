import Link from 'next/link'
import { Plane, Twitter, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
              <Plane className="w-8 h-8" />
              <span>TripRT</span>
            </Link>
            <p className="text-sm">
              AI-powered travel search finding you the best deals in 15 languages.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/flights" className="hover:text-white transition-colors">
                  Search Flights
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="hover:text-white transition-colors">
                  Search Hotels
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-white transition-colors">
                  Advanced Search
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/triprt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/company/triprt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/suhas883/triprt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} TripRT. All rights reserved.</p>
          <p className="mt-2 text-gray-500">
            Built with ❤️ to help travelers save money
          </p>
        </div>
      </div>
    </footer>
  )
}
