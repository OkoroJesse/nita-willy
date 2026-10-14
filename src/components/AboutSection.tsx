import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#F4EFEB] border-t border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-[#9E7D48]">
              About the Property
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1B1D1F] mt-2 mb-6 leading-tight">
              A Quiet Sanctuary in Kubwa’s Vibrant Landscape
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#50545A] leading-relaxed">
              <p>
                Situated at Plot 115 in the Chikakore Layout of Kubwa, Abuja, <strong>NITAWILLY HOTEL & LOUNGE</strong> offers a serene haven away from city bustle while remaining closely connected to the capital’s arterial hubs.
              </p>
              <p>
                Designed for discerning guests, corporate visitors, and leisure travelers alike, our establishment pairs genuine Nigerian warmth with modern boutique convenience—featuring an outdoor pool, social lounge, on-premise dining, and climate-controlled en-suite guest rooms.
              </p>
              <p>
                Whether you are visiting for an extended Abuja project, attending events in Kubwa, or seeking a restful weekend retreat, Nitawilly provides attentive hospitality tailored around your pace.
              </p>
            </div>

            {/* Core Values / Features */}
            <div className="mt-8 grid grid-cols-2 gap-4 pt-6 border-t border-[#E2DBD0]">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-white border border-[#E0D8CB] text-[#9E7D48]">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#1B1D1F]">Strategic Location</h4>
                  <p className="text-[11px] text-[#696E75] mt-0.5">Adjacent to Chikakore Primary Health Center</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-white border border-[#E0D8CB] text-[#9E7D48]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#1B1D1F]">Secure & Tranquil</h4>
                  <p className="text-[11px] text-[#696E75] mt-0.5">Dedicated security and guarded premises</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Layered Visual Composition */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md sm:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E0D8CC] aspect-4/3">
                <img
                  src="/images/boseats_1.webp"
                  alt="Nitawilly Hotel Chikakore Kubwa"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Inset Secondary Image Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 w-3/5 rounded-xl overflow-hidden shadow-2xl border-2 border-white aspect-4/3 hidden sm:block">
                <img
                  src="/images/boseats_4.webp"
                  alt="Nitawilly Hotel Lounge and Room"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Pill */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-xs py-2 px-4 rounded-lg shadow-md border border-[#E6DFD4] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C2A374]" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-[#9E7D48]">Chikakore Layout</p>
                  <p className="text-xs font-semibold text-[#1B1D1F]">Kubwa, Abuja</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
