import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Ambience Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.08, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.25, 1, 0.5, 1] }}
          className="relative w-full h-full"
        >
          {/* Authentic property imagery with warm tone gradient */}
          <img
            src="/images/boseats_1.webp"
            alt="Nitawilly Hotel and Lounge Kubwa Abuja"
            className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.04]"
          />
          {/* Subtle cinematic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#1E2022]/40 to-black/60" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#101214]/30 to-black/70" />
        </motion.div>
      </div>

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white pt-8 sm:pt-12">
        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[#E5D7BF] text-[11px] sm:text-xs font-semibold tracking-widest uppercase mb-6"
        >
          <MapPin className="w-3.5 h-3.5 text-[#C2A374]" />
          <span>CHIKAKORE · KUBWA · ABUJA</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-[1.12] mb-5 drop-shadow-sm"
        >
          A Refined Boutique Escape <br className="hidden sm:inline" />
          <span className="italic font-light text-[#EFE7DA]">in the Heart of Kubwa</span>
        </motion.h1>

        {/* Concise Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl mx-auto text-sm sm:text-base text-white/85 font-normal leading-relaxed mb-8 drop-shadow-xs"
        >
          Discover understated comfort, a tranquil lounge atmosphere, and attentive hospitality in Chikakore Layout. Designed for restful getaways and seamless Abuja journeys.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C2A374] hover:bg-[#B39362] text-[#141517] font-semibold text-xs sm:text-sm tracking-wider uppercase px-6 py-3 rounded shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <span>Book Your Stay</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="#rooms"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-medium text-xs sm:text-sm tracking-wider uppercase px-6 py-3 rounded border border-white/25 transition-all duration-200"
          >
            <span>Explore Our Rooms</span>
          </a>
        </motion.div>

        {/* Small property feature pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-white/70 text-[11px] sm:text-xs tracking-wider uppercase font-medium"
        >
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C2A374]" />
            Outdoor Pool
          </span>
          <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:inline" />
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C2A374]" />
            Lounge & Bar
          </span>
          <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:inline" />
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C2A374]" />
            All Rooms En-suite
          </span>
          <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:inline" />
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C2A374]" />
            24/7 Power & Front Desk
          </span>
        </motion.div>
      </div>

      {/* Gentle Scroll Indicator */}
      <a
        href="#intro"
        aria-label="Scroll to hotel overview"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white transition-colors animate-bounce p-2"
      >
        <ArrowDown className="w-4 h-4" />
      </a>
    </section>
  );
};
