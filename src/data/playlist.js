// FICTIONAL DEMO: All names, venues, addresses and dates are sample content.
// Contact and map links are intentionally empty; replace before publishing.

import haldiImg from '../assets/images/haldi.jpg'
import landingCoverImg from '../assets/images/landing page.jpg'
import mehendiImg from '../assets/images/mehandi.jpg'
import sangeetImg from '../assets/images/sangeet.jpg'
import weddingImg from '../assets/images/wedding.jpg'

// Newly added authentic couple photos of Shubham & Kajal
import coupleFloralMandap from '../assets/images/couple/couple-floral-mandap.jpeg'
import coupleRooftopGoldenHour from '../assets/images/couple/couple-rooftop-golden-hour.jpeg'
import coupleLaughingOutdoors from '../assets/images/couple/couple-laughing-outdoors.jpeg'
import coupleSelfieMoments from '../assets/images/couple/couple-selfie-moments.jpeg'
import coupleTraditionalEthnic from '../assets/images/couple/couple-traditional-ethnic.jpeg'
import coupleFairytalePink from '../assets/images/couple/couple-fairytale-pink.jpeg'

// Event illustrations & user added ceremony photos
import ganeshSthapnaImg from '../assets/images/events/ganesh-sthapna.avif'
import mandapMuhuratImg from '../assets/images/events/mandap-muhurat.jpeg'
import mameruEventImg from '../assets/images/events/mameru.jpeg'
import dinnerImg from '../assets/images/events/dinner.jpg'
import garbaEventImg from '../assets/images/events/garba.avif'
import familyPhotoImg from '../assets/images/family-photo.jpeg'

import dinShagnaDa from '../assets/songs/din_shagna_da.mp3'
import song1 from '../assets/songs/song1.mp3'
import song2 from '../assets/songs/song2.mp3'
import song3 from '../assets/songs/song3.mp3'

// =========================================================================
//  WEDDING_CONFIG — SINGLE SOURCE OF TRUTH FOR ALL WEDDING DATA
//  Update couple names, dates, events, RSVP, and calendar details here.
// =========================================================================

export const WEDDING_CONFIG = {
  // Couple Information
  groom: 'Shubham',
  groomFull: 'Chi. Shubham',
  bride: 'Kajal',
  brideFull: 'Chi. Kajal',
  displayOrder: 'groom-bride',
  initials: 'S ♥ K',
  coupleTitle: 'Shubham & Kajal',

  // Divine Invocations & Auspicious Titles from Card
  invocations: [
    'Shree Ganeshay Namah',
    'Shree Vishwakarma Namah',
    'Shree Chamunda Matay Namah',
  ],
  invocationsGu: '|| શ્રી ગણેશાય નમઃ || શ્રી વિશ્વકર્માય નમઃ || શ્રી ચામુંડા માતાય નમઃ ||',
  ceremonyTitle: 'MANGAL PARINAY',
  ceremonySub: 'HOLY MATRIMONY',

  // Parents and Residence
  divineBlessing:
    'With the boundless blessings of Shree Chamunda Mataji and Shree Vishwakarma Dada',
  
  // Groom Side (Vadodara)
  groomResidence: '50, Shreeji Darshan Bungalows, besides Galaxy Hospital, Sunpharma Road, Vadodara, Gujarat',
  groomParents: 'Mrs. Jyotiben & Shri Shaileshbhai Ratilal Gajjar (Dunavadiya)',
  groomFamilyTitle: 'Dunavadiya Parivar',
  
  // Bride Side (Ahmedabad)
  brideResidence: 'Ahmedabad, Gujarat',
  brideParents: 'Mrs. Komalben & Shri Pradipbhai Kantibhai Mistry (Mahidhariya)',
  brideFamilyTitle: 'Mistry (Mahidhariya) Parivar',

  // Traditional Calendar Details
  hinduDate: 'Vikram Samvat 2083, Kartak Sud 12, Saturday',
  mainWeddingDate: 'Saturday, 21 November 2026 · 8:00 AM IST',
  isoWeddingDate: '2026-11-21T08:00:00+05:30',
  timezone: 'Asia/Kolkata',

  // Venue from Card (Vadodara)
  venueName: 'Shreeji Darshan Bungalows',
  venueLocation: '50, Shreeji Darshan Bungalows, besides Galaxy Hospital, Sunpharma Road, Vadodara, Gujarat',
  venueFull: '50, Shreeji Darshan Bungalows, besides Galaxy Hospital, Sunpharma Road, Vadodara, Gujarat',
  mapsUrl: 'https://maps.google.com/?q=50+Shreeji+darshan+bunglows+besides+galaxy+hospital+sunpharma+road+Vadodara',

  // Socials & Hashtag
  hashtag: '#ShubhamWedsKajal',
  year: '2026',

  // Invitation Message (Translated faithfully into English from the Gujarati card)
  invitationNote:
    'On this auspicious occasion, you are cordially invited along with your family to grace the celebrations, bless the newlywed couple, and enhance the beauty of this joyous milestone.',

  // Family Sections from Card
  // 1. Darshanabhilashi (Well-Wishers) - Hunavadiya Parivar
  wellWishers: [
    'Shri Ratilal Kantilal Dunavadiya',
    'A.Sau. Kantaben Ratilal Dunavadiya',
    'Shri Narendrabhai Ratilal Dunavadiya',
    'Chi. Disha Shaileshbhai Dunavadiya',
    'Shri Keyur Narendrabhai Dunavadiya',
    'Chi. Riya Narendrabhai Dunavadiya',
  ],
  familyCollective: 'Entire Dunavadiya Family',

  // 2. Mameru Shobhavshe (Maternal Visavadiya Parivar)
  maternalFamily: [
    'Late Laljibhai Nagjibhai Visavadiya',
    'Late Kusumben Laljibhai Visavadiya',
    'G.Sau. Vanitaben Laljibhai Visavadiya',
    'G.Sau. Ashaben Laljibhai Solgama',
    'A.Sau. Ashwinaben & Shri Vasudev Kaloliya',
    'A.Sau. Kirtiben & Shri Jagdishkumar Panchasara',
    'A.Sau. Chhayaben & Shri Hasmukhbhai Bhaderiya',
    'Late Alpaben & Shri Bhagwanjibhai Adiyecha',
    'A.Sau. Manishaben & Shri Hareshkumar Panchasara',
  ],
  maternalCollective: 'Entire Visavadiya Family',

  // 3. Sisters (Baheno)
  sisters: [
    'Late Bhavnaben Dineshkumar Ughroja',
    'A.Sau. Nenaben Dineshkumar Ughroja',
    'A.Sau. Gayatriben Niteshkumar Sonigara',
  ],

  // 4. Nieces & Nephews (Bhanej)
  niecesNephews: [
    'Nikunj Dineshkumar Ughroja',
    'Savan Dineshkumar Ughroja',
    'Yash Niteshkumar Sonigara',
    'Isha Niteshkumar Sonigara',
  ],

  // 5. Tahuko (Special Rhyme from Disha & Sagar)
  tahuko: {
    gujarati:
      'સાચી દિશા અને સાગરની ગહેરાઈ જેવી લાગણીઓ સાથે મારા ભાઈ શુભમના લગ્નમાં વહેલા વહેલા જરૂરથી પધારજો..... દિશા, સાગર',
    english:
      'With true guidance ("Disha") and affection as deep as the ocean ("Sagar"), please come early and be part of our dear brother Shubham\'s wedding celebrations! — Disha, Sagar',
  },

  // Cover image for the postcard & hero
  landingCoverUrl: coupleFloralMandap,

  // Google Calendar Event Details
  calendar: {
    eventTitle: 'Shubham weds Kajal — Mangal Parinay & Hasta Melap 💍',
    description:
      'Wedding of Shubham & Kajal. With blessings of Shree Chamunda Mataji & Shree Vishwakarma Dada. Hasta Melap at 11:00 AM on Sunday, 22 November 2026.',
    location:
      'Vishwakarma Baug, Gor No Kuvo, Next to Gayatri Mandir, Jasodanagar, Ahmedabad, Gujarat',
    durationHours: 6,
  },

  // RSVP & WhatsApp Configuration
  rsvp: {
    deadline: '15 November 2026',
    contactName: 'Gajjar & Dunavadiya Family Coordinator',
    contactPhone: '+91 98765 43210',
    whatsappNumber: '+919876543210',
    title: 'Wedding RSVP',
    subtitle: 'Will you join us in our celebrations?',
    mealOptions: ['Pure Vegetarian 🌿', 'Jain Food 🕊️', 'Swruchi Bhojan 🍽️'],
    confirmationTitle: 'RSVP Received with Gratitude! 💐',
    confirmationYes: "We can't wait to welcome you and celebrate together in Ahmedabad!",
    confirmationNo: 'We will miss your presence — your blessings mean the world to us.',
  },

  // Family Photo
  familyPhoto: familyPhotoImg,

  // Gallery Photos — Real photos of Shubham & Kajal
  photos: [
    {
      id: 'photo-family',
      url: familyPhotoImg,
      title: 'Our Loving Family',
      caption: 'Surrounded by the infinite love and blessings of our family at home.',
      tag: 'Family Blessings',
    },
    {
      id: 'photo-1',
      url: coupleFloralMandap,
      title: 'Under the Floral Mandap',
      caption: 'Shubham & Kajal adorned in auspicious royal attire, ready for their forever.',
      tag: 'Royal Couple',
    },
    {
      id: 'photo-2',
      url: coupleRooftopGoldenHour,
      title: 'Golden Hour Romance',
      caption: 'Two souls, one sacred promise under the sunset skies.',
      tag: 'Sacred Bond',
    },
    {
      id: 'photo-3',
      url: coupleFairytalePink,
      title: 'Traditional Grace & Fairytale Romance',
      caption: 'Wrapped in festive hues, stepping together into our new forever.',
      tag: 'Fairytale Look',
    },
    {
      id: 'photo-4',
      url: coupleLaughingOutdoors,
      title: 'Joyful Laughter & Smiles',
      caption: 'Candid smiles and sweet shared giggles in nature.',
      tag: 'Candid Joy',
    },
    {
      id: 'photo-5',
      url: coupleSelfieMoments,
      title: 'Everyday Happiness',
      caption: 'Two hearts beating as one — simple moments that become lifelong treasures.',
      tag: 'Sweet Moments',
    },
  ],

  accommodation:
    'Family stay arrangements are coordinated at Ahmedabad for our outstation guests.',
  travel:
    'Jasodanagar is easily accessible from Ahmedabad Railway Station (Kalupur) and Sardar Vallabhbhai Patel International Airport.',
}

// =========================================================================
//  WEDDING_PLAYLIST — EXACT CEREMONIES SCHEDULE (MANGALIK PRASANGO)
//  Extracted directly from Page 2 of the physical invitation card:
//  Saturday 21-11-2026 & Sunday 22-11-2026
// =========================================================================

export const WEDDING_PLAYLIST = [
  // --- SATURDAY, 21 NOVEMBER 2026: VADODARA RESIDENCE ---
  {
    id: 'ganesh-sthapna',
    title: 'Ganesh Sthapna',
    gujaratiTitle: 'ગણેશ સ્થાપના',
    dayNumber: 'Day 1',
    date: 'Saturday, 21 November 2026',
    dateShort: '21 Nov 2026',
    time: '8:00 AM IST',
    timeGujarati: 'સવારે ૮:૦૦ કલાકે',
    hinduDate: 'Samvat 2083 Kartak Sud 12',
    venue: '50, Shreeji Darshan Bungalows, besides Galaxy Hospital, Sunpharma Road, Vadodara',
    city: 'Vadodara',
    mapsUrl: 'https://maps.google.com/?q=50+Shreeji+darshan+bunglows+besides+galaxy+hospital+sunpharma+road+Vadodara',
    icon: '🏛️',
    description:
      'Invocations of Lord Ganesha to begin the auspicious wedding rites with divine blessings and harmony.',
    lyrics:
      'Ganesh Sthapna · Saturday, 21 November 2026 · 8:00 AM IST',
    coverUrl: ganeshSthapnaImg,
    audioUrl: dinShagnaDa,
    accent: '#EAB308',
  },
  {
    id: 'mandap-muhurat',
    title: 'Mandap Muhurat',
    gujaratiTitle: 'મંડપ મુહૂર્ત',
    dayNumber: 'Day 1',
    date: 'Saturday, 21 November 2026',
    dateShort: '21 Nov 2026',
    time: '8:00 AM IST',
    timeGujarati: 'સવારે ૮:૦૦ કલાકે',
    hinduDate: 'Samvat 2083 Kartak Sud 12',
    venue: '50, Shreeji Darshan Bungalows, besides Galaxy Hospital, Sunpharma Road, Vadodara',
    city: 'Vadodara',
    mapsUrl: 'https://maps.google.com/?q=50+Shreeji+darshan+bunglows+besides+galaxy+hospital+sunpharma+road+Vadodara',
    icon: '🌸',
    description:
      'Sanctification of the sacred wedding mandap to invite divine blessings, harmony, and joy.',
    lyrics:
      'Mandap Muhurat · Saturday, 21 November 2026 · 8:00 AM IST',
    coverUrl: mandapMuhuratImg,
    audioUrl: song1,
    accent: '#B45309',
  },
  {
    id: 'mameru',
    title: 'Mameru',
    gujaratiTitle: 'મામેરું',
    dayNumber: 'Day 1',
    date: 'Saturday, 21 November 2026',
    dateShort: '21 Nov 2026',
    time: '2:30 PM IST',
    timeGujarati: 'બપોરે ૨:૩૦ કલાકે',
    hinduDate: 'Samvat 2083 Kartak Sud 12',
    venue: '50, Shreeji Darshan Bungalows, besides Galaxy Hospital, Sunpharma Road, Vadodara',
    city: 'Vadodara',
    mapsUrl: 'https://maps.google.com/?q=50+Shreeji+darshan+bunglows+besides+galaxy+hospital+sunpharma+road+Vadodara',
    icon: '🎁',
    description:
      'Welcoming our beloved maternal family (Visavadiya Parivar) bearing auspicious gifts, traditional attire, and cherished blessings.',
    lyrics:
      'Mameru Ceremony · Saturday, 21 November 2026 · 2:30 PM IST',
    coverUrl: mameruEventImg,
    audioUrl: song2,
    accent: '#BE185D',
  },
  {
    id: 'dinner',
    title: 'Dinner',
    gujaratiTitle: 'રાત્રિ ભોજન',
    dayNumber: 'Day 1',
    date: 'Saturday, 21 November 2026',
    dateShort: '21 Nov 2026',
    time: '7:00 PM IST',
    timeGujarati: 'સાંજે ૭:૦૦ કલાકે',
    hinduDate: 'Samvat 2083 Kartak Sud 12',
    venue: '50, Shreeji Darshan Bungalows, besides Galaxy Hospital, Sunpharma Road, Vadodara',
    city: 'Vadodara',
    mapsUrl: 'https://maps.google.com/?q=50+Shreeji+darshan+bunglows+besides+galaxy+hospital+sunpharma+road+Vadodara',
    icon: '🍽️',
    description:
      'An exquisite evening banquet with authentic flavors, laughter, and warm celebrations under the lights.',
    lyrics:
      'Wedding Dinner Banquet · Saturday, 21 November 2026 · 7:00 PM IST',
    coverUrl: dinnerImg,
    audioUrl: dinShagnaDa,
    accent: '#2F4F0B',
  },
  {
    id: 'garba',
    title: 'Garba',
    gujaratiTitle: 'રાસ ની રમઝટ',
    dayNumber: 'Day 1',
    date: 'Saturday, 21 November 2026',
    dateShort: '21 Nov 2026',
    time: '8:00 PM IST',
    timeGujarati: 'રાત્રે ૮:૦૦ કલાકે',
    hinduDate: 'Samvat 2083 Kartak Sud 12',
    venue: '50, Shreeji Darshan Bungalows, besides Galaxy Hospital, Sunpharma Road, Vadodara',
    city: 'Vadodara',
    mapsUrl: 'https://maps.google.com/?q=50+Shreeji+darshan+bunglows+besides+galaxy+hospital+sunpharma+road+Vadodara',
    icon: '🪩',
    description:
      'Raas Ni Ramzat: Rhythmic dhol beats, vibrant twirls, and high-energy Dandiya Raas dancing together until midnight.',
    lyrics:
      'Raas Ni Ramzat (Garba) · Saturday, 21 November 2026 · 8:00 PM IST',
    coverUrl: garbaEventImg,
    audioUrl: song3,
    accent: '#A855F7',
  },
]


