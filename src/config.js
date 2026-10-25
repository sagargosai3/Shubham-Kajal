import dinShagnaDa from './assets/songs/din_shagna_da.mp3'
import coupleFloralMandap from './assets/images/couple/couple-floral-mandap.jpeg'
import coupleRooftopGoldenHour from './assets/images/couple/couple-rooftop-golden-hour.jpeg'
import coupleLaughingOutdoors from './assets/images/couple/couple-laughing-outdoors.jpeg'
import coupleSelfieMoments from './assets/images/couple/couple-selfie-moments.jpeg'
import coupleTraditionalEthnic from './assets/images/couple/couple-traditional-ethnic.jpeg'

// Event illustrations & user added ceremony photos
import ganeshSthapnaImg from './assets/images/events/ganesh-sthapna.avif'
import haldiEventImg from './assets/images/events/haldi.jpg'
import mameruEventImg from './assets/images/events/mameru.jpeg'
import garbaEventImg from './assets/images/events/garba.avif'
import weddingMandapImg from './assets/images/wedding.jpg'
import familyPhotoImg from './assets/images/family-photo.jpeg'

export const WEDDING_CONFIG = {
  // Couple Information
  brideName: 'Kajal',
  groomName: 'Shubham',
  coupleTitle: 'Shubham & Kajal',
  initials: 'S & K',
  hashtag: '#ShubhamWedsKajal',

  // Parents
  parents: {
    bride: 'Daughter of Mrs. Komalben & Shri Pradipbhai Mistry',
    groom: 'Son of Mrs. Jyotiben & Shri Shaileshbhai Gajjar',
  },

  // Auspicious Invocation
  shloka: '॥ श्री गणेशाय नमः ॥',
  shlokaSubtext: 'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥',
  inviteOpening:
    'With the blessings of Shri Ganesh and our beloved families, we joyfully invite you to celebrate the union of',

  // Save the Date Scratch Card values
  saveTheDate: {
    month: 'NOV',
    day: '22',
    year: '2026',
    fullDateText: 'Sunday, 22 November 2026',
    subtext: 'Scratch below to reveal our wedding date',
    revealQuote: 'A lifetime of togetherness begins with one single step',
  },

  // Venue Information (Ahmedabad for Hasta Melap, Vadodara for Pre-Wedding events)
  venues: {
    wedding: {
      id: 'wedding',
      label: 'Wedding & Hasta Melap',
      eventNames: 'Hasta Melap & Sacred Pheras',
      day: 'Sunday, 22 November 2026',
      name: 'Vishwakarma Baug',
      tagline: 'Main Wedding Arena (Ahmedabad)',
      address: 'Gor No Kuvo, Next to Gayatri Mandir, Jasodanagar, Ahmedabad, Gujarat 382445',
      city: 'Ahmedabad, Gujarat',
      mapsUrl: 'https://maps.google.com/?q=Vishwakarma+Baug+Jasodanagar+Ahmedabad',
      image: weddingMandapImg,
      parkingNote: 'Valet parking available at venue',
      gateNote: 'Mandap open from 10:00 AM',
    },
    preWedding: {
      id: 'pre-wedding',
      label: 'Pre-Wedding Festivities',
      eventNames: 'Ganesh Sthapna · Haldi · Mameru · Garba Night',
      day: 'Saturday, 21 November 2026',
      name: 'Shreeji Darshan Bungalows',
      tagline: 'Pre-Wedding Celebrations (Vadodara)',
      address: '50, Shreeji Darshan Bungalows, besides Galaxy Hospital, Sunpharma Road, Vadodara, Gujarat',
      city: 'Vadodara, Gujarat',
      mapsUrl: 'https://maps.google.com/?q=50+Shreeji+darshan+bunglows+besides+galaxy+hospital+sunpharma+road+Vadodara',
      image: familyPhotoImg,
      objectPosition: 'center 15%',
      parkingNote: 'Designated parking available',
      gateNote: 'Celebrations commence 8:00 AM',
    },
  },

  // Primary Wedding Venue
  venue: {
    name: 'Vishwakarma Baug',
    tagline: 'Main Wedding Arena (Hasta Melap)',
    address: 'Gor No Kuvo, Next to Gayatri Mandir, Jasodanagar, Ahmedabad, Gujarat 382445',
    city: 'Ahmedabad, Gujarat',
    mapsUrl: 'https://maps.google.com/?q=Vishwakarma+Baug+Jasodanagar+Ahmedabad',
    image: weddingMandapImg,
  },

  // Audio configuration
  audio: {
    src: dinShagnaDa,
    title: 'Din Shagna Da (Royal Wedding Instrumental)',
  },

  // Our Story Polaroids
  story: [
    {
      id: 'photo-1',
      title: 'Memories together',
      date: 'The Beginning',
      caption: 'Where two worlds collided and a timeless adventure began.',
      image: coupleLaughingOutdoors,
      rotation: -2,
      style: 'polaroid',
      objectPosition: 'center 25%',
    },
    {
      id: 'photo-2',
      title: 'Joy and laughter',
      date: 'Endless Smiles',
      caption: 'In your laughter, I found the melody to my life.',
      image: coupleFloralMandap,
      rotation: 2.5,
      style: 'arch',
      objectPosition: 'center 20%',
    },
    {
      id: 'photo-3',
      title: 'Traditional Grace',
      date: 'Rooted in Love',
      caption: 'Wrapped in festive hues, stepping together into our new forever.',
      image: coupleTraditionalEthnic,
      rotation: -1.5,
      style: 'polaroid',
      objectPosition: 'center 0%',
    },
    {
      id: 'photo-4',
      title: 'Sunset Whispers',
      date: 'Golden Hour Dreams',
      caption: 'Every sunset promises a brighter tomorrow with you.',
      image: coupleRooftopGoldenHour,
      rotation: 1.8,
      style: 'polaroid',
      objectPosition: 'center 12%',
    },
  ],

  // 5 Authentic Ceremonies / Events (Mangalik Prasango)
  events: [
    {
      id: 'ganesh-sthapna',
      title: 'Ganesh Sthapna',
      weekday: 'Saturday',
      day: '21',
      month: 'Nov',
      year: '2026',
      time: '8:00 AM onwards',
      dateTimeDisplay: 'Saturday | 21 | Nov 2026',
      illustrationUrl: ganeshSthapnaImg,
      quote: 'Invoking the auspicious blessings of Lord Ganesha and Mandap Muhurat to begin our sacred wedding rites.',
      dressCodeColors: [
        { name: 'Sacred Yellow', hex: '#F59E0B' },
        { name: 'Sindoor Red', hex: '#DC2626' },
        { name: 'Heritage Gold', hex: '#D4AF37' },
      ],
      dressCodeText: 'TRADITIONAL ETHNIC & KURTA PAJAMA',
      venue: '50, Shreeji Darshan Bungalows, besides Galaxy Hospital, Sunpharma Road, Vadodara',
      cityTag: 'Vadodara',
      mapsUrl: 'https://maps.google.com/?q=50+Shreeji+darshan+bunglows+besides+galaxy+hospital+sunpharma+road+Vadodara',
      theme: {
        bgGradient: 'from-[#380511] via-[#580C1D] to-[#25030B]',
        accent: '#D4AF37',
        badge: 'bg-[#580C1D] text-amber-200 border-amber-400/30',
      },
      objectPosition: 'center center',
    },
    {
      id: 'haldi',
      title: 'Haldi Ceremony',
      weekday: 'Saturday',
      day: '21',
      month: 'Nov',
      year: '2026',
      time: '10:00 AM onwards',
      dateTimeDisplay: 'Saturday | 21 | Nov 2026',
      illustrationUrl: haldiEventImg,
      quote: 'Splashes of golden turmeric, playful laughter, and heartfelt blessings for the radiant bride and groom.',
      dressCodeColors: [
        { name: 'Sunshine Yellow', hex: '#FBBF24' },
        { name: 'Mustard Gold', hex: '#D97706' },
        { name: 'Floral Coral', hex: '#FB7185' },
      ],
      dressCodeText: 'YELLOW ATTIRE & FLORAL ACCENTS',
      venue: '50, Shreeji Darshan Bungalows, besides Galaxy Hospital, Sunpharma Road, Vadodara',
      cityTag: 'Vadodara',
      mapsUrl: 'https://maps.google.com/?q=50+Shreeji+darshan+bunglows+besides+galaxy+hospital+sunpharma+road+Vadodara',
      theme: {
        bgGradient: 'from-[#FFF7ED] via-[#FEF3C7] to-[#FEE2E2]',
        accent: '#B45309',
        badge: 'bg-amber-100 text-amber-900 border-amber-300',
      },
      objectPosition: 'center center',
    },
    {
      id: 'mameru',
      title: 'Mameru Ceremony',
      weekday: 'Saturday',
      day: '21',
      month: 'Nov',
      year: '2026',
      time: '2:30 PM onwards',
      dateTimeDisplay: 'Saturday | 21 | Nov 2026',
      illustrationUrl: mameruEventImg,
      quote: 'Welcoming our beloved maternal family (Visavadiya Parivar) bearing auspicious gifts, traditional attire, and cherished blessings.',
      dressCodeColors: [
        { name: 'Royal Magenta', hex: '#BE185D' },
        { name: 'Emerald Green', hex: '#047857' },
        { name: 'Antique Gold', hex: '#B45309' },
      ],
      dressCodeText: 'TRADITIONAL GUJARATI ETHNIC',
      venue: '50, Shreeji Darshan Bungalows, besides Galaxy Hospital, Sunpharma Road, Vadodara',
      cityTag: 'Vadodara',
      mapsUrl: 'https://maps.google.com/?q=50+Shreeji+darshan+bunglows+besides+galaxy+hospital+sunpharma+road+Vadodara',
      theme: {
        bgGradient: 'from-[#4A0E2E] via-[#63133D] to-[#2B0418]',
        accent: '#F5E6BE',
        badge: 'bg-[#63133D] text-pink-200 border-pink-400/30',
      },
      objectPosition: 'center center',
    },
    {
      id: 'garba',
      title: 'Garba Night',
      weekday: 'Saturday',
      day: '21',
      month: 'Nov',
      year: '2026',
      time: '8:00 PM onwards',
      dateTimeDisplay: 'Saturday | 21 | Nov 2026',
      illustrationUrl: garbaEventImg,
      quote: 'Raas Ni Ramzat: Rhythmic dhol beats, vibrant twirls, and high-energy Dandiya Raas dancing together until midnight.',
      dressCodeColors: [
        { name: 'Midnight Navy', hex: '#1E1B4B' },
        { name: 'Mirror Pink', hex: '#DB2777' },
        { name: 'Bright Gold', hex: '#F59E0B' },
      ],
      dressCodeText: 'CHANIYA CHOLI, KEDIYA & INDO-WESTERN',
      venue: '50, Shreeji Darshan Bungalows, besides Galaxy Hospital, Sunpharma Road, Vadodara',
      cityTag: 'Vadodara',
      mapsUrl: 'https://maps.google.com/?q=50+Shreeji+darshan+bunglows+besides+galaxy+hospital+sunpharma+road+Vadodara',
      theme: {
        bgGradient: 'from-[#1E1B4B] via-[#2E1065] to-[#0F172A]',
        accent: '#FBBF24',
        badge: 'bg-[#2E1065] text-amber-200 border-amber-400/30',
      },
      objectPosition: 'center center',
    },
    {
      id: 'hasta-melap',
      title: 'Hasta Melap & Sacred Pheras',
      weekday: 'Sunday',
      day: '22',
      month: 'Nov',
      year: '2026',
      time: '11:00 AM Auspicious Hour',
      dateTimeDisplay: 'Sunday | 22 | Nov 2026',
      illustrationUrl: weddingMandapImg,
      quote: 'The sacred union of hands, Kanyadaan, and the eternal seven pheras around the holy fire uniting Shubham & Kajal as one.',
      dressCodeColors: [
        { name: 'Heritage Maroon', hex: '#8E2A2A' },
        { name: 'Vermilion Red', hex: '#B8302E' },
        { name: 'Temple Gold', hex: '#C9A24B' },
      ],
      dressCodeText: 'ROYAL GUJARATI WEDDING ATTIRE',
      venue: 'Vishwakarma Baug, Gor No Kuvo, Next to Gayatri Mandir, Jasodanagar, Ahmedabad',
      cityTag: 'Ahmedabad',
      mapsUrl: 'https://maps.google.com/?q=Vishwakarma+Baug+Jasodanagar+Ahmedabad',
      theme: {
        bgGradient: 'from-[#4A0404] via-[#6B0A1E] to-[#2B0202]',
        accent: '#F5E6BE',
        badge: 'bg-[#8E2A2A] text-amber-200 border-amber-400/40',
      },
      objectPosition: 'center center',
    },
  ],

  // Popular dance floor tracks for RSVP autocomplete
  danceFloorSongs: [
    { title: 'Kala Chashma', artist: 'Baadshah, Neha Kakkar', movie: 'Baar Baar Dekho', cover: '🕶️' },
    { title: 'London Thumakda', artist: 'Labh Janjua, Sonu Kakkar', movie: 'Queen', cover: '💃' },
    { title: 'Gallan Goodiyaan', artist: 'Yashita Sharma, Sukhwinder Singh', movie: 'Dil Dhadakne Do', cover: '✨' },
    { title: 'Sauda Khara Khara', artist: 'Diljit Dosanjh, Sukhbir', movie: 'Good Newwz', cover: '🕺' },
    { title: 'Balle Balle', artist: 'Mika Singh', movie: 'Bride & Prejudice', cover: '🥁' },
    { title: 'Mauja Hi Mauja', artist: 'Mika Singh', movie: 'Jab We Met', cover: '🔥' },
    { title: 'Chogada Tara', artist: 'Darshan Raval', movie: 'Loveyatri', cover: '💫' },
    { title: 'Dholida', artist: 'Jahnvi Shrimankar', movie: 'Gangubai Kathiawadi', cover: '🪘' },
    { title: 'Kesariya', artist: 'Arijit Singh', movie: 'Brahmastra', cover: '🧡' },
    { title: 'Nachde Ne Saare', artist: 'Jasleen Royal', movie: 'Baar Baar Dekho', cover: '🎉' },
  ],

  // Footer message
  footerMessage:
    'Your presence will turn this real-life moment into a blockbuster we will never forget. Come, dance, laugh, and celebrate with us in style.',

  // WhatsApp Host Number for RSVP
  hostWhatsApp: '919876543210',
}
