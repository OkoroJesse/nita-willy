import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface NavbarProps {
  onOpenBooking: (roomName?: string) => void;
  currentSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Rooms', href: '#rooms' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs py-3 border-b border-[#ECE6DC]'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Brand */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-hidden focus:ring-2 focus:ring-[#9E7D48] rounded-sm"
            >
              <img
                src="/images/logo.png"
                alt="NITAWILLY Logo"
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain rounded shadow-xs"
              />
              <div className="flex flex-col text-left">
                <span
                  className={`font-serif tracking-widest uppercase font-semibold text-sm sm:text-base transition-colors ${
                    scrolled ? 'text-[#1E2022]' : 'text-[#1E2022] drop-shadow-xs'
                  }`}
                >
                  NITAWILLY
                </span>
                <span className="text-[9px] tracking-wider uppercase text-[#9E7D48] font-medium -mt-0.5">
                  Hotel & Lounge
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs tracking-wider uppercase font-medium text-[#484C52] hover:text-[#9E7D48] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#9E7D48] hover:after:w-full after:transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="inline-flex items-center gap-1.5 text-xs text-[#52565C] hover:text-[#1E2022] px-2.5 py-1.5 transition-colors"
                title="Direct front desk line (confirm upon arrival)"
              >
                <Phone className="w-3.5 h-3.5 text-[#9E7D48]" />
                <span className="font-medium">{HOTEL_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-1.5 bg-[#1B1D1F] hover:bg-[#9E7D48] text-white px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow focus:outline-hidden focus:ring-2 focus:ring-[#9E7D48]"
              >
                <span>Book Your Stay</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="bg-[#1B1D1F] text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded"
              >
                Book
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="p-1.5 rounded text-[#222] hover:bg-black/5"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-black/40 backdrop-blur-xs pt-16">
          <div className="bg-[#FAF8F5] border-b border-[#E6E0D6] px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold tracking-wide uppercase text-[#2B2E33] hover:text-[#9E7D48] py-1 border-b border-[#F0EBE3]"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="inline-flex items-center gap-2 text-xs text-[#52565C]"
                >
                  <Phone className="w-4 h-4 text-[#9E7D48]" />
                  <span>Call: {HOTEL_INFO.phone}</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full bg-[#1B1D1F] hover:bg-[#9E7D48] text-white py-2.5 rounded text-xs font-semibold uppercase tracking-wider"
                >
                  Choose Where to Book
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
