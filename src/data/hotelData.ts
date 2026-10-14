export interface BookingPlatform {
  id: string;
  name: string;
  url: string;
  verified: boolean;
  notes: string;
  badge?: string;
  badgeColor?: string;
}

export const BOOKING_PLATFORMS: BookingPlatform[] = [
  {
    id: 'crystalbeds',
    name: 'Crystalbeds Africa',
    url: 'https://www.crystalbeds.com.ng/hotels/nitawilly-hotel/KQemyYm',
    verified: true,
    notes: 'Live listing confirmed in Kubwa, Abuja with active reservation flow and regional coverage.',
    badge: 'Popular in Nigeria',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  {
    id: 'boseats',
    name: 'Boseats Africa',
    url: 'https://boseatsafrica.com/hotel/nitawilly-hotel-federal-capital-territory',
    verified: true,
    notes: 'Direct hotel profile displaying live room tiers (Standards, Classic, Executive, Deluxe, Superior).',
    badge: 'Active Profile',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
  },
  {
    id: 'easemytrip',
    name: 'EaseMyTrip',
    url: 'https://www.easemytrip.com/hotels/nitawilly-hotel-10740003/',
    verified: true,
    notes: 'Global travel OTA catalog listing for Nitawilly Hotel Abuja.',
    badge: 'Global OTA',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  {
    id: 'laterooms',
    name: 'LateRooms',
    url: 'https://www.laterooms.com/hotel/abuja/nitawilly-hotel/',
    verified: true,
    notes: 'Verified listing page referencing Nitawilly Hotel Abuja.',
    badge: 'Verified OTA',
    badgeColor: 'bg-stone-50 text-stone-700 border-stone-200'
  },
  {
    id: 'hotels-com',
    name: 'Hotels.com',
    url: 'https://www.hotels.com/ho4006422336/',
    verified: false,
    notes: 'Expedia Group listing, rate-limited or regional restrictions.',
  },
  {
    id: 'expedia',
    name: 'Expedia',
    url: 'https://www.expedia.co.uk/Abuja-Hotels-NITAWILLY-HOTEL.h125169448.Hotel-Information',
    verified: false,
    notes: 'Expedia UK destination entry.',
  },
  {
    id: 'travelocity',
    name: 'Travelocity',
    url: 'https://www.travelocity.com/Abuja-Hotels-NITAWILLY-HOTEL.h125169448.Hotel-Information',
    verified: false,
    notes: 'Travelocity partner inventory entry.',
  },
  {
    id: 'agoda',
    name: 'Agoda',
    url: 'https://www.agoda.com/en-ie/nitawilly-hotel/hotel/abuja-ng.html',
    verified: false,
    notes: 'Redirects to general Abuja city listing.',
  }
];

export interface RoomItem {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  image: string;
  gallery: string[];
  description: string;
  confirmedFeatures: string[];
  unverifiedNotes?: string;
  capacity: string;
}

export const ROOMS_DATA: RoomItem[] = [
  {
    id: 'executive',
    name: 'Executive Suite',
    subtitle: 'Warm Ochre Palette & King Luxury Bedding',
    category: 'Executive',
    image: '/images/rooms/crop_executive_bed.jpg',
    gallery: ['/images/rooms/room_bed_suite.jpg', '/images/rooms/room_deluxe_wide.png', '/images/rooms/room_tv_lounge.jpg'],
    description: 'Featuring an expansive king bed with recessed ceiling illumination, custom wall art, ochre feature wall, and polished marble flooring.',
    confirmedFeatures: ['En-suite Bathroom', 'Air Conditioning', 'Recessed Ceiling Lighting', 'Custom Bedside Sconces', '24/7 Power'],
    capacity: '2 Guests'
  },
  {
    id: 'deluxe',
    name: 'Deluxe Living & Work Suite',
    subtitle: 'Spacious Multi-Functional Living Space',
    category: 'Deluxe',
    image: '/images/rooms/crop_deluxe_suite.jpg',
    gallery: ['/images/rooms/room_deluxe_wide.png', '/images/rooms/room_bed_suite.jpg', '/images/rooms/room_tv_lounge.jpg'],
    description: 'Generously proportioned suite equipped with vanity dressing desk, full wardrobe storage, refrigerator, tea station, and mounted flat-screen TV.',
    confirmedFeatures: ['Vanity Dressing Desk & Mirror', 'In-room Mini Refrigerator', 'Full Wardrobe Storage', 'Electric Kettle & Tea Station', 'Wall-Mounted Flat Screen'],
    capacity: '2 Guests'
  },
  {
    id: 'classic',
    name: 'Classic Room',
    subtitle: 'Warm Sophistication & Media Comfort',
    category: 'Classic',
    image: '/images/boseats_4.webp',
    gallery: ['/images/boseats_4.webp', '/images/rooms/room_tv_lounge.jpg', '/images/rooms/room_bed_suite.jpg'],
    description: 'Authentic Nitawilly boutique guest room designed for quiet relaxation, featuring a comfortable double bed, en-suite bathroom, and climate control.',
    confirmedFeatures: ['En-suite Bathroom', 'Air Conditioning', 'Flat-screen TV', 'Dedicated Workspace', 'Room Service Access'],
    capacity: '1–2 Guests'
  },
  {
    id: 'standard',
    name: 'Standard Room',
    subtitle: 'Cozy and Practical Boutique Comfort',
    category: 'Standard',
    image: '/images/rooms/crop_classic_lounge.jpg',
    gallery: ['/images/rooms/room_tv_lounge.jpg', '/images/boseats_4.webp', '/images/rooms/room_bed_suite.jpg'],
    description: 'An inviting boutique room offering all essential amenities with climate control, lounge armchair, media console, and en-suite facilities.',
    confirmedFeatures: ['En-suite Bathroom', 'Air Conditioning', 'Daily Housekeeping', '24/7 Power Backup', 'Room Service Access'],
    capacity: '1–2 Guests'
  },
  {
    id: 'superior',
    name: 'Superior Room',
    subtitle: 'Expansive Layout & Quiet Garden Ambience',
    category: 'Superior',
    image: '/images/rooms/superior_pending.jpg',
    gallery: ['/images/rooms/superior_pending.jpg', '/images/rooms/room_deluxe_wide.png', '/images/rooms/room_bed_suite.jpg'],
    description: 'Enhanced square footage with spacious dressing area, quiet courtyard orientation, and dedicated room amenities. Photo verification in progress.',
    confirmedFeatures: ['En-suite Bathroom', 'Air Conditioning', 'Dressing / Work Station', 'Flat-screen TV', 'Mini Refrigerator'],
    unverifiedNotes: 'Authentic bedroom photograph for Superior category pending official supply from hotel management.',
    capacity: '2 Guests'
  }
];

export interface AmenityItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  confirmed: boolean;
}

export const AMENITIES_DATA: AmenityItem[] = [
  {
    id: 'pool',
    name: 'Outdoor Swimming Pool',
    category: 'Relaxation',
    tagline: 'Cool Waters Beneath the Abuja Sky',
    description: 'Unwind by our outdoor swimming pool, whether for morning refreshment or serene evening poolside relaxation.',
    image: '/images/boseats_1.webp',
    confirmed: true
  },
  {
    id: 'lounge-bar',
    name: 'Nitawilly Lounge & Bar',
    category: 'Social & Dining',
    tagline: 'Signature Cocktails & Fine Spirits',
    description: 'An intimate, sophisticated social setting serving handcrafted beverages, chilled selections, and light bites in Kubwa.',
    image: '/images/rooms/room_tv_lounge.jpg',
    confirmed: true
  },
  {
    id: 'restaurant',
    name: 'Hotel Restaurant & Dining',
    category: 'Culinary',
    tagline: 'Fresh Flavours & Authentic Hospitality',
    description: 'Enjoy delicious local and continental specialties prepared daily, available in our restaurant or via direct room service.',
    image: '/images/rooms/room_deluxe_wide.png',
    confirmed: true
  },
  {
    id: 'service',
    name: '24-Hour Front Desk & Security',
    category: 'Peace of Mind',
    tagline: 'Uncompromising Care Around the Clock',
    description: 'Dedicated front-desk support, secure on-premise parking, continuous power backup, and personal attention for every guest.',
    image: '/images/boseats_1.webp',
    confirmed: true
  }
];

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'exterior' | 'rooms' | 'lounge' | 'amenities';
  src: string;
  alt: string;
  verified: boolean;
}

export const GALLERY_DATA: GalleryPhoto[] = [
  { id: 'g1', title: 'Main Property Facade & Arrival', category: 'exterior', src: '/images/boseats_1.webp', alt: 'Nitawilly Hotel and Lounge exterior facade and entrance gate', verified: true },
  { id: 'g2', title: 'Executive Suite Master Bed', category: 'rooms', src: '/images/rooms/room_bed_suite.jpg', alt: 'Executive suite plush bed with ochre accent wall and lighting', verified: true },
  { id: 'g3', title: 'Private Media Lounge & TV', category: 'rooms', src: '/images/rooms/room_tv_lounge.jpg', alt: 'In-room TV media console and armchair seating', verified: true },
  { id: 'g4', title: 'Deluxe Vanity & Wardrobe Space', category: 'rooms', src: '/images/rooms/room_deluxe_wide.png', alt: 'Spacious deluxe room with wardrobe, vanity desk and refrigerator', verified: true },
  { id: 'g5', title: 'Boutique Room Suite View', category: 'rooms', src: '/images/boseats_4.webp', alt: 'Authentic Nitawilly Hotel room interior', verified: true },
  { id: 'g6', title: 'Room Comfort Details', category: 'rooms', src: '/images/rooms/room_bed_suite.jpg', alt: 'Crisp white linens, amber throw and bedside lighting', verified: true },
  { id: 'g7', title: 'Lounge Setting & Drapes', category: 'lounge', src: '/images/rooms/room_tv_lounge.jpg', alt: 'Gold satin curtains and intimate seating corner', verified: true },
  { id: 'g8', title: 'Full Room Interior Layout', category: 'rooms', src: '/images/rooms/room_deluxe_wide.png', alt: 'Wide angle showing amenities, AC, mirror and hospitality bar', verified: true }
];

export const HOTEL_INFO = {
  name: 'NITAWILLY HOTEL & LOUNGE',
  tagline: 'Boutique Calm in Chikakore, Kubwa',
  address: 'Plot 115, adjacent to Primary Health Center, Chikakore Layout, Kubwa, Abuja, FCT, Nigeria, 901101',
  phone: '+234 816 672 3161',
  phoneConfirmationNote: 'Phone number listed on third-party channels. Please confirm directly with front desk management upon arrival.',
  landmarks: [
    { name: 'Chikakore Primary Health Center', distance: 'Adjacent (1 min walk)' },
    { name: 'Kubwa Train Station (Idu-Kaduna Rail)', distance: 'Short drive' },
    { name: 'NYSC Orientation Camp Kubwa', distance: 'Approx. 10 mins' },
    { name: 'Kubwa Central Market', distance: 'Approx. 8 mins' },
    { name: 'General Hospital Kubwa', distance: 'Approx. 12 mins' }
  ]
};
