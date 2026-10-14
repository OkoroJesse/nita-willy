import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RoomsSection } from './components/RoomsSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoomName, setSelectedRoomName] = useState<string | null>(null);

  const handleOpenBooking = (roomName?: string) => {
    setSelectedRoomName(roomName || null);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setSelectedRoomName(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#22252A] flex flex-col font-sans selection:bg-[#C2A374]/30">
      {/* Top Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Cinematic Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Room Showcase */}
        <RoomsSection onOpenBooking={handleOpenBooking} />

        {/* 3. Facilities and Experiences */}
        <FacilitiesSection />

        {/* 4. Hotel Gallery */}
        <GallerySection />

        {/* 5. About the Hotel */}
        <AboutSection />

        {/* 6. Location and Contact */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Shared Compact Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        selectedRoomName={selectedRoomName}
      />
    </div>
  );
}

export default App;
