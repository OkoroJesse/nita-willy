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
            ? 'bg-[#FAF8F5]/98 backdrop-blur-md shadow-xs py-2.5 border-b border-[#ECE6DC]'
            : 'bg-gradient-to-b from-black/60 via-black/25 to-transparent py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Brand */}
            <a
              href="#"
              className="flex items-center gap-2.5 group focus:outline-hidden focus:ring-2 focus:ring-[#9E7D48] rounded-sm"
            >
              <img
                src="/images/logo.png"
                alt="NITAWILLY Logo"
                className="w-8 h-8 object-contain rounded shadow-xs"
              />
              <div className="flex flex-col text-left">
                <span
                  className={`font-serif tracking-widest uppercase font-semibold text-sm sm:text-base leading-none transition-colors ${
                    scrolled ? 'text-[#1E2022]' : 'text-white drop-shadow-sm'
                  }`}
                >
                  NITAWILLY
                </span>
                <span
                  className={`text-[9px] tracking-wider uppercase font-medium mt-0.5 transition-colors ${
                    scrolled ? 'text-[#9E7D48]' : 'text-[#E5D7BF]'
                  }`}
                >
                  Hotel & Lounge
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] tracking-wider uppercase font-semibold transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C2A374] hover:after:w-full after:transition-all ${
                    scrolled
                      ? 'text-[#484C52] hover:text-[#9E7D48]'
                      : 'text-white/90 hover:text-white drop-shadow-xs'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className={`inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded transition-colors ${
                  scrolled
                    ? 'text-[#52565C] hover:text-[#1E2022]'
                    : 'text-white/85 hover:text-white drop-shadow-xs'
                }`}
                title="Direct front desk line (confirm upon arrival)"
              >
                <Phone className="w-3.5 h-3.5 text-[#C2A374]" />
                <span className="font-medium">{HOTEL_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenBooking()}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow focus:outline-hidden focus:ring-2 focus:ring-[#9E7D48] ${
                  scrolled
                    ? 'bg-[#1B1D1F] hover:bg-[#9E7D48] text-white'
                    : 'bg-[#C2A374] hover:bg-[#B39362] text-[#141517]'
                }`}
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
                className={`text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded transition-colors ${
                  scrolled ? 'bg-[#1B1D1F] text-white' : 'bg-[#C2A374] text-[#141517]'
                }`}
              >
                Book
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className={`p-1.5 rounded transition-colors ${
                  scrolled ? 'text-[#222] hover:bg-black/5' : 'text-white hover:bg-white/10'
                }`}
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
