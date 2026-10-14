import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight, Users, Sparkles, Eye } from 'lucide-react';
import { ROOMS_DATA, type RoomItem } from '../data/hotelData';

interface RoomsSectionProps {
  onOpenBooking: (roomName?: string) => void;
  onPreviewRoom?: (room: RoomItem) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedRoomPreview, setSelectedRoomPreview] = useState<RoomItem | null>(null);

  const categories = ['All', 'Classic', 'Executive', 'Deluxe', 'Standard', 'Superior'];

  const filteredRooms = activeFilter === 'All'
    ? ROOMS_DATA
    : ROOMS_DATA.filter((r) => r.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="rooms" className="py-20 bg-[#FAF8F5] border-t border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#ECE6DC]">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#9E7D48]">
              Accommodations & Living
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1B1D1F] mt-1.5">
              Guest Rooms & Suites
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex flex-wrap gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`text-xs px-3 py-1.5 rounded transition-all duration-150 font-medium ${
                  activeFilter === cat
                    ? 'bg-[#1B1D1F] text-white shadow-xs'
                    : 'bg-[#F2ECE3] text-[#555A61] hover:bg-[#E8E0D4] hover:text-[#1B1D1F]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Room Cards Grid (Balanced 3-column layout on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredRooms.map((room: RoomItem, index: number) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group bg-white rounded-xl overflow-hidden border border-[#E6E0D6] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Room Image Container */}
              <div>
                <div className="relative aspect-4/3 overflow-hidden bg-[#EFE9DF]">
                  <img
                    src={room.image}
                    alt={`${room.name} at Nitawilly Hotel Kubwa`}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                    <span className="inline-block bg-[#1B1D1F]/90 backdrop-blur-xs text-white text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded shadow-xs">
                      {room.category}
                    </span>
                    {room.unverifiedNotes && (
                      <span className="inline-block bg-amber-900/90 backdrop-blur-xs text-amber-200 text-[9px] font-medium tracking-wide uppercase px-1.5 py-0.5 rounded shadow-xs">
                        Photo Pending
                      </span>
                    )}
                  </div>

                  {/* Quick preview button */}
                  <button
                    type="button"
                    onClick={() => setSelectedRoomPreview(room)}
                    className="absolute bottom-2.5 right-2.5 p-1.5 rounded-full bg-white/95 hover:bg-white text-[#1B1D1F] shadow-sm opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200"
                    title="Quick View Details"
                    aria-label={`Quick view details for ${room.name}`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-serif text-lg font-bold text-[#1B1D1F] group-hover:text-[#9E7D48] transition-colors leading-snug">
                      {room.name}
                    </h3>
                    <span className="shrink-0 flex items-center gap-1 text-[10px] text-[#71767C] font-semibold bg-[#F6F3EE] px-1.5 py-0.5 rounded border border-[#ECE5D9]">
                      <Users className="w-3 h-3 text-[#9E7D48]" />
                      {room.capacity}
                    </span>
                  </div>

                  <p className="text-[11px] text-[#9E7D48] font-medium mb-2">
                    {room.subtitle}
                  </p>

                  <p className="text-xs text-[#63686F] leading-relaxed mb-3 line-clamp-2">
                    {room.description}
                  </p>

                  {/* Confirmed Amenities List */}
                  <div className="pt-2.5 border-t border-[#F2ECE3]">
                    <div className="grid grid-cols-2 gap-1 text-[11px] text-[#555A61]">
                      {room.confirmedFeatures.slice(0, 4).map((feat, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-1">
                          <Check className="w-3 h-3 text-[#9E7D48] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Actions (Compact aligned 36-38px buttons) */}
              <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
                <div className="flex items-center gap-2 pt-2 border-t border-[#F5F0E8]">
                  <button
                    type="button"
                    onClick={() => setSelectedRoomPreview(room)}
                    className="flex-1 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold text-[#3A3D42] bg-[#F7F4F0] hover:bg-[#EDE7DE] rounded transition-colors text-center border border-[#ECE6DC]"
                  >
                    View Details
                  </button>
                  <button
                    type="button"
                    onClick={() => onOpenBooking(room.name)}
                    className="flex-1 inline-flex items-center justify-center gap-1 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold text-white bg-[#1B1D1F] hover:bg-[#9E7D48] rounded transition-colors shadow-xs"
                  >
                    <span>Check Rates</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Room Detail Modal Preview */}
        {selectedRoomPreview && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative w-full max-w-lg bg-[#FAF8F5] rounded-xl overflow-hidden border border-[#E2DBD0] shadow-2xl animate-in zoom-in-95 duration-200">
              <div className="relative aspect-16/9 bg-stone-200">
                <img
                  src={selectedRoomPreview.image}
                  alt={selectedRoomPreview.name}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setSelectedRoomPreview(null)}
                  className="absolute top-3 right-3 bg-black/60 text-white rounded-full p-1.5 hover:bg-black transition-colors"
                >
                  ✕
                </button>
                <div className="absolute bottom-3 left-3 bg-[#1B1D1F]/80 text-white px-2.5 py-1 rounded text-xs">
                  {selectedRoomPreview.category} Category
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-[#1B1D1F]">
                  {selectedRoomPreview.name}
                </h3>
                <p className="text-xs text-[#9E7D48] font-medium mb-3">
                  {selectedRoomPreview.subtitle}
                </p>
                <p className="text-xs text-[#52565C] leading-relaxed mb-4">
                  {selectedRoomPreview.description}
                </p>

                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1B1D1F] mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#9E7D48]" />
                  Verified Room Features
                </h4>
                <ul className="grid grid-cols-2 gap-2 text-xs text-[#4F5359] mb-6">
                  {selectedRoomPreview.confirmedFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#9E7D48]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const name = selectedRoomPreview.name;
                      setSelectedRoomPreview(null);
                      onOpenBooking(name);
                    }}
                    className="flex-1 bg-[#1B1D1F] hover:bg-[#9E7D48] text-white py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Choose Where to Book</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedRoomPreview(null)}
                    className="px-4 py-2.5 border border-[#DCD5C9] text-xs font-medium text-[#52565C] hover:bg-[#EFE9DF] rounded transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
