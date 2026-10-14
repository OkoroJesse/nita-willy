import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ShieldCheck, MapPin } from 'lucide-react';
import { BOOKING_PLATFORMS, type BookingPlatform } from '../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoomName?: string | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedRoomName,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  // Filter only verified platforms
  const verifiedPlatforms = BOOKING_PLATFORMS.filter((p) => p.verified);

  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
        if (previouslyFocusedElement.current) {
          previouslyFocusedElement.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Compact Dialog Container (approx 340-360px on desktop) */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-[360px] overflow-hidden rounded-xl bg-[#FAF8F5] border border-[#E6E0D6] shadow-2xl z-10"
          >
            {/* Header */}
            <div className="relative px-5 pt-5 pb-3 border-b border-[#ECE6DC] bg-[#F5F1EB]">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-[#9E7D48]">
                    Reservation Portal
                  </span>
                  <h3
                    id="booking-modal-title"
                    className="font-serif text-xl font-bold tracking-tight text-[#1B1D1F] mt-0.5"
                  >
                    Choose Where to Book
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close booking modal"
                  className="rounded-full p-1.5 text-[#6D7175] hover:text-[#1B1D1F] hover:bg-[#EBE5DC] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#9E7D48]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {selectedRoomName && (
                <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-sm bg-white/80 px-2 py-0.5 text-xs text-[#52565C] border border-[#E0D9CD]">
                  <span className="font-medium text-[#1B1D1F]">Selected:</span>
                  <span>{selectedRoomName}</span>
                </div>
              )}

              <p className="mt-2 text-xs text-[#686D73] leading-relaxed">
                Continue to your preferred verified booking channel to view live rates and date availability.
              </p>
            </div>

            {/* Platform Rows */}
            <div className="p-3 divide-y divide-[#F0EBE3] max-h-[60vh] overflow-y-auto">
              {verifiedPlatforms.map((platform: BookingPlatform) => (
                <a
                  key={platform.id}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 rounded-lg hover:bg-white transition-all duration-150 border border-transparent hover:border-[#E8E2D8] hover:shadow-xs"
                >
                  <div className="pr-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm text-[#1E2022] group-hover:text-[#9E7D48] transition-colors">
                        {platform.name}
                      </span>
                      {platform.badge && (
                        <span
                          className={`text-[9px] font-medium px-1.5 py-0.5 rounded border ${platform.badgeColor || 'bg-stone-100 text-stone-700'}`}
                        >
                          {platform.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#71767C] line-clamp-1 mt-0.5">
                      {platform.notes}
                    </p>
                  </div>
                  <div className="shrink-0 p-1.5 rounded-full bg-[#F5F2EC] group-hover:bg-[#9E7D48] group-hover:text-white text-[#71767C] transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </a>
              ))}
            </div>

            {/* Compact Footer Note */}
            <div className="px-5 py-3 bg-[#F4EFEB] border-t border-[#ECE6DC] flex items-center justify-between text-[11px] text-[#787D83]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9E7D48]" />
                Direct verified listings
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#787D83]" />
                Kubwa, Abuja
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
