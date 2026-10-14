import React, { useState } from 'react';
import { MapPin, Phone, Copy, Check, Navigation, AlertCircle, Compass } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(HOTEL_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Plot 115 Chikakore Layout Kubwa Abuja Nigeria'
  )}`;

  return (
    <section id="location" className="py-20 bg-[#FAF8F5] border-t border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Location Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#9E7D48]">
                Coordinates & Access
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1B1D1F] mt-1.5 mb-4">
                Location & Contacts
              </h2>
              <p className="text-xs sm:text-sm text-[#555A61] leading-relaxed mb-6">
                Situated in Chikakore Layout, Kubwa, Nitawilly Hotel offers convenient connectivity to Kubwa Train Station, NYSC Camp, and the Kubwa expressway into central Abuja.
              </p>

              {/* Verified Address Box */}
              <div className="p-4 rounded-xl bg-white border border-[#E4DDD2] shadow-xs mb-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-[#FAF7F2] text-[#9E7D48] border border-[#ECE5DB] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-[#9E7D48]">
                      Verified Property Address
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-[#1B1D1F] mt-0.5 leading-snug">
                      {HOTEL_INFO.address}
                    </p>
                    <button
                      type="button"
                      onClick={copyAddress}
                      className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-[#52565C] hover:text-[#1B1D1F] font-medium transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-semibold">Address copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy exact address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Telephone Contact Box */}
              <div className="p-4 rounded-xl bg-white border border-[#E4DDD2] shadow-xs mb-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-[#FAF7F2] text-[#9E7D48] border border-[#ECE5DB] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-[#9E7D48]">
                      Front Desk Telephone
                    </span>
                    <div className="mt-0.5">
                      <a
                        href={`tel:${HOTEL_INFO.phone}`}
                        className="text-sm font-bold text-[#1B1D1F] hover:text-[#9E7D48] transition-colors"
                      >
                        {HOTEL_INFO.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-1 mt-1 text-[11px] text-[#787D83]">
                      <AlertCircle className="w-3 h-3 text-amber-600 shrink-0 mt-0.5" />
                      <span>{HOTEL_INFO.phoneConfirmationNote}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Landmarks */}
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-wider uppercase text-[#1B1D1F] block mb-2">
                  Key Surrounding Landmarks
                </span>
                <div className="space-y-1.5">
                  {HOTEL_INFO.landmarks.map((lm, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-xs py-1.5 px-3 rounded bg-[#F5F0E8] border border-[#ECE5D9]"
                    >
                      <span className="text-[#3A3D42] font-medium">{lm.name}</span>
                      <span className="text-[11px] text-[#71767C]">{lm.distance}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1B1D1F] hover:bg-[#9E7D48] text-white py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 rounded-xl overflow-hidden border border-[#E2DBD0] shadow-md min-h-[380px] bg-[#EFE9DF] relative flex flex-col">
            <iframe
              title="Nitawilly Hotel and Lounge Location Map"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[380px] border-0"
              loading="lazy"
              src="https://maps.google.com/maps?q=Chikakore+Layout+Kubwa+Abuja+Nigeria&t=&z=14&ie=UTF8&iwloc=&output=embed"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-md shadow-sm border border-[#E6DFD4] text-xs font-medium text-[#1B1D1F] flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#9E7D48]" />
              <span>Chikakore Layout, Kubwa FCT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
