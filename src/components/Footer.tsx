import React from 'react';
import { ArrowUpRight, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#18191B] text-[#D8D5CF] border-t border-[#2A2B2E] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.png"
                alt="Nitawilly Logo"
                className="w-9 h-9 object-contain rounded bg-white/5 p-0.5"
              />
              <div>
                <span className="font-serif tracking-widest uppercase font-semibold text-white text-base block">
                  NITAWILLY
                </span>
                <span className="text-[10px] tracking-wider uppercase text-[#C2A374]">
                  Hotel & Lounge · Kubwa, Abuja
                </span>
              </div>
            </div>

            <p className="text-xs text-[#9FA4AB] leading-relaxed max-w-sm mb-5">
              A distinctive boutique hotel experience in Chikakore Layout, Kubwa. Providing serene accommodations, curated dining, poolside leisure, and dedicated hospitality in Nigeria’s capital territory.
            </p>

            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-[#C2A374] hover:bg-[#B39362] text-[#141517] font-semibold text-xs tracking-wider uppercase px-4 py-2.5 rounded transition-all shadow-xs"
            >
              <span>Choose Where to Book</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
              Explore Property
            </h4>
            <ul className="space-y-2 text-xs text-[#9FA4AB]">
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">
                  Guest Rooms & Suites
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">
                  Swimming Pool & Amenities
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">
                  Lounge & Bar Experience
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Authentic Hotel Gallery
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Nitawilly Hotel
                </a>
              </li>
            </ul>
          </div>

          {/* Verified Contacts */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
              Address & Reservations
            </h4>
            <div className="space-y-3 text-xs text-[#9FA4AB]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C2A374] shrink-0 mt-0.5" />
                <span className="leading-snug">{HOTEL_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C2A374] shrink-0" />
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="hover:text-white transition-colors font-medium text-white/90"
                >
                  {HOTEL_INFO.phone}
                </a>
              </div>

              <div className="pt-2 flex items-center gap-1.5 text-[11px] text-[#7E848D]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C2A374]" />
                <span>Verified third-party inventory and bookings</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#71767C] gap-3">
          <p>© {new Date().getFullYear()} NITAWILLY HOTEL & LOUNGE. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Chikakore Layout · Kubwa · Abuja, FCT</span>
            <span>•</span>
            <button
              type="button"
              onClick={onOpenBooking}
              className="text-[#C2A374] hover:underline"
            >
              Reservation Channels
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
