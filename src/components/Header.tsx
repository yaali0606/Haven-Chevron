import { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Car Service', href: '#service-scheduler' },
    { name: 'Propane Portal', href: '#services' },
    { name: 'Snack Shop', href: '#services' },
    { name: 'Location & Hours', href: '#location-hours' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-chevron-blue leading-tight">
                Haven Chevron
              </span>
              <span className="text-sm md:text-md font-semibold text-chevron-red flex items-center gap-1">
                &amp; NAPA AutoCare
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-chevron-blue font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=6411+Haven+Ave,+Rancho+Cucamonga,+CA+91737"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-chevron-blue hover:text-blue-800 font-medium transition-colors"
            >
              <MapPin className="w-5 h-5" />
              <span>Directions</span>
            </a>
            <a
              href="tel:9099480102"
              className="flex items-center gap-2 bg-chevron-red hover:bg-red-700 text-white px-5 py-2.5 rounded-md font-semibold transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden gap-4">
            <a
              href="tel:9099480102"
              className="bg-chevron-red text-white p-2 rounded-md"
              aria-label="Call Now"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-4 text-base font-medium text-gray-800 border-b border-gray-50 hover:bg-gray-50 hover:text-chevron-blue"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3 px-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=6411+Haven+Ave,+Rancho+Cucamonga,+CA+91737"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full border-2 border-chevron-blue text-chevron-blue px-4 py-3 rounded-md font-semibold"
              >
                <MapPin className="w-5 h-5" />
                <span>Get Directions</span>
              </a>
              <a
                href="tel:9099480102"
                className="flex items-center justify-center gap-2 w-full bg-chevron-red text-white px-4 py-3 rounded-md font-semibold"
              >
                <Phone className="w-5 h-5" />
                <span>Call (909) 948-0102</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
