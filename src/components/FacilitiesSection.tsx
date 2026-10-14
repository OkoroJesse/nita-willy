import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Wine, UtensilsCrossed, Shield, Clock, Wifi, Car, Sparkles } from 'lucide-react';
import { AMENITIES_DATA } from '../data/hotelData';

export const FacilitiesSection: React.FC = () => {
  const facilityIcons: Record<string, React.ReactNode> = {
    pool: <Waves className="w-5 h-5 text-[#9E7D48]" />,
    'lounge-bar': <Wine className="w-5 h-5 text-[#9E7D48]" />,
    restaurant: <UtensilsCrossed className="w-5 h-5 text-[#9E7D48]" />,
    service: <Shield className="w-5 h-5 text-[#9E7D48]" />,
  };

  const quickFeatures = [
    { icon: <Wifi className="w-4 h-4 text-[#9E7D48]" />, label: 'Complimentary Wi-Fi' },
    { icon: <Car className="w-4 h-4 text-[#9E7D48]" />, label: 'Secure On-site Parking' },
    { icon: <Clock className="w-4 h-4 text-[#9E7D48]" />, label: '24/7 Front Desk Attendance' },
    { icon: <Sparkles className="w-4 h-4 text-[#9E7D48]" />, label: 'Continuous Backup Power' },
  ];

  return (
    <section id="facilities" className="py-20 bg-[#F5F1EB] border-t border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#9E7D48]">
            Lifestyle & Leisure
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1B1D1F] mt-1.5 mb-3">
            Hotel Facilities & Experiences
          </h2>
          <p className="text-xs sm:text-sm text-[#5C6167] leading-relaxed">
            Thoughtfully curated spaces for relaxation, social connection, and effortless ease in Chikakore, Kubwa.
          </p>
        </div>

        {/* Feature Cards Grid (2x2 Balanced Editorial Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {AMENITIES_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden border border-[#E4DDD2] shadow-xs flex flex-col sm:flex-row group"
            >
              {/* Image side */}
              <div className="sm:w-2/5 aspect-4/3 sm:aspect-auto overflow-hidden bg-[#E7E0D4] relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#1B1D1F]/80 backdrop-blur-xs text-white text-[10px] font-semibold uppercase px-2 py-0.5 rounded">
                  {item.category}
                </div>
              </div>

              {/* Text side */}
              <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <div className="p-2 rounded-lg bg-[#FAF7F2] w-fit mb-3 border border-[#EDE6DC]">
                    {facilityIcons[item.id] || <Sparkles className="w-5 h-5 text-[#9E7D48]" />}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1B1D1F] mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs font-medium text-[#9E7D48] mb-2">
                    {item.tagline}
                  </p>
                  <p className="text-xs text-[#636870] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F2ECE3] flex items-center justify-between text-[11px] text-[#787D83]">
                  <span>Verified Hotel Amenity</span>
                  <span className="font-medium text-[#1B1D1F]">Chikakore, Abuja</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Essential Services Bar */}
        <div className="bg-white rounded-xl p-6 border border-[#E6DFD4] shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickFeatures.map((feat, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="p-2 rounded-md bg-[#FAF7F2] shrink-0 border border-[#ECE5DB]">
                  {feat.icon}
                </div>
                <span className="text-xs font-medium text-[#3A3D42]">
                  {feat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
