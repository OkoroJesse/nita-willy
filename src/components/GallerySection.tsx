import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_DATA, type GalleryPhoto } from '../data/hotelData';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filteredPhotos = filter === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((p) => p.category === filter);

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
    document.body.style.overflow = '';
  };

  const nextPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex]);

  return (
    <section id="gallery" className="py-20 bg-[#FAF8F5] border-t border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-[#ECE6DC]">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#9E7D48]">
              Visual Tour
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1B1D1F] mt-1">
              Authentic Hotel Gallery
            </h2>
          </div>

          <div className="mt-4 sm:mt-0 flex gap-2">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'rooms', label: 'Rooms' },
              { id: 'exterior', label: 'Property' },
              { id: 'amenities', label: 'Amenities' },
            ].map((btn) => (
              <button
                key={btn.id}
                type="button"
                onClick={() => setFilter(btn.id)}
                className={`text-xs px-3 py-1.5 rounded transition-all font-medium ${
                  filter === btn.id
                    ? 'bg-[#1B1D1F] text-white shadow-xs'
                    : 'bg-[#F2ECE3] text-[#555A61] hover:bg-[#E8E0D4]'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {filteredPhotos.map((photo: GalleryPhoto, idx: number) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => openLightbox(idx)}
              className="group relative aspect-4/3 rounded-lg overflow-hidden bg-[#ECE6DC] cursor-pointer shadow-xs border border-[#E4DDD2]"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] uppercase font-semibold text-[#E2C799] tracking-wider">
                  {photo.category}
                </span>
                <p className="text-xs sm:text-sm font-serif font-medium">{photo.title}</p>
              </div>

              <div className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activePhotoIndex !== null && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
              role="dialog"
              aria-modal="true"
            >
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close Lightbox"
                className="absolute top-5 right-5 z-20 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={prevPhoto}
                aria-label="Previous photo"
                className="absolute left-4 z-20 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={nextPhoto}
                aria-label="Next photo"
                className="absolute right-4 z-20 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <motion.div
                key={activePhotoIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="max-w-4xl max-h-[85vh] flex flex-col items-center"
              >
                <img
                  src={filteredPhotos[activePhotoIndex].src}
                  alt={filteredPhotos[activePhotoIndex].alt}
                  className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                />
                <div className="mt-4 text-center text-white">
                  <h4 className="font-serif text-lg font-medium">
                    {filteredPhotos[activePhotoIndex].title}
                  </h4>
                  <p className="text-xs text-white/70 mt-0.5">
                    {activePhotoIndex + 1} of {filteredPhotos.length} · Authentic Property Photo
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
