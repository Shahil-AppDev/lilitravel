import { Destination } from '../../types/content';

export const asiaDestinations: Destination[] = [
  {
    id: 'thailand',
    slug: 'thailand',
    name: 'Thailand',
    region: 'Asia',
    heroImage: '/images/destinations/thailand-hero.jpg',
    heroDescription: 'The Land of Smiles, offering golden temples, turquoise waters, and world-famous street food.',
    whyVisit: ['Street Food', 'Tropical Beaches', 'Buddhist Temples', 'Affordable Luxury'],
    bestCities: ['Bangkok', 'Chiang Mai', 'Phuket', 'Pai'],
    bestSeasons: ['Cool Season (Nov-Feb)', 'Shoulder Season (Mar-Apr)'],
    travelTips: ['Dress modestly in temples (cover shoulders/knees)', 'Use Grab instead of unmetered taxis', 'Respect the Royal Family'],
    cultureOverview: 'Deeply Buddhist, known for "Sanuk" (fun) and "Mai Pen Rai" (no worries) attitude.',
    blogArticles: [
      {
        slug: 'thailand-island-hopping',
        title: 'Ultimate Guide to Thai Island Hopping',
        intro: 'Andaman Sea vs. Gulf of Thailand: Which side to choose?',
        sections: [
          { title: 'Phuket & Krabi', content: 'Dramatic limestone cliffs.' },
          { title: 'Koh Samui & Tao', content: 'Diving and luxury resorts.' },
          { title: 'Koh Lipe', content: 'The Maldives of Thailand.' }
        ],
        tips: ['Book ferries in advance', 'Pack seasickness pills'],
        conclusion: 'Paradise found on every shore.'
      },
      {
        slug: 'bangkok-street-food',
        title: 'Bangkok Street Food Guide',
        intro: 'Eating your way through the capital, one stall at a time.',
        sections: [
          { title: 'Chinatown (Yaowarat)', content: 'Night market feasts.' },
          { title: 'Jay Fai', content: 'Michelin-starred crab omelet.' },
          { title: 'Desserts', content: 'Mango sticky rice everywhere.' }
        ],
        tips: ['Look for long lines', 'Bring hand sanitizer'],
        conclusion: 'The best food in the world is on the sidewalk.'
      },
      {
        slug: 'chiang-rai-temples',
        title: 'The Colors of Chiang Rai: White, Blue, and Black',
        intro: 'Exploring the artistic temples of the north.',
        sections: [
          { title: 'White Temple', content: 'Heaven and hell reimagined.' },
          { title: 'Blue Temple', content: 'Vibrant and intricate.' },
          { title: 'Black House', content: 'Dark art museum.' }
        ],
        tips: ['Go early for photos', 'Dress appropriately'],
        conclusion: 'Modern masterpieces of Buddhist art.'
      }
    ],
    excursions: [
      {
        id: 'elephant-sanctuary',
        title: 'Ethical Elephant Sanctuary',
        description: 'Feed and bathe rescued elephants (no riding).',
        location: 'Chiang Mai',
        price: '$60 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'phi-phi-island-tour',
        title: 'Phi Phi Islands Speedboat Tour',
        description: 'Visit Maya Bay and Monkey Beach.',
        location: 'Phuket/Krabi',
        price: '$50 USD',
        bestTime: 'Early Morning',
        affiliateLink: '#'
      },
      {
        id: 'thai-cooking-class',
        title: 'Authentic Thai Cooking Class',
        description: 'Market tour and cooking 4 dishes.',
        location: 'Bangkok',
        price: '$35 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'floating-market',
        title: 'Damnoen Saduak Floating Market',
        description: 'Boat ride through the iconic market canals.',
        location: 'Bangkok (outskirts)',
        price: '$25 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'muay-thai-fight',
        title: 'Muay Thai Boxing Match',
        description: 'Watch the national sport live.',
        location: 'Bangkok (Rajadamnern)',
        price: '$40 USD',
        bestTime: 'Evening',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'sri-panwa',
        name: 'Sri Panwa Phuket',
        type: 'luxury',
        location: 'Phuket',
        priceRange: '$$$$$',
        description: 'Luxury pool villas with panoramic ocean views.',
        affiliateLink: '#'
      },
      {
        id: 'lub-d-siam',
        name: 'Lub d Bangkok Siam',
        type: 'hostel',
        location: 'Bangkok',
        priceRange: '$',
        description: 'Modern, social hostel right by the skytrain.',
        affiliateLink: '#'
      },
      {
        id: 'the-inside-house',
        name: 'The Inside House',
        type: 'luxury',
        location: 'Chiang Mai',
        priceRange: '$$$$',
        description: 'Stunning white colonial-style boutique hotel.',
        affiliateLink: '#'
      },
      {
        id: 'pai-village',
        name: 'Pai Village Boutique Resort',
        type: 'mid-range',
        location: 'Pai',
        priceRange: '$$$',
        description: 'Bamboo cottages in a lush garden setting.',
        affiliateLink: '#'
      },
      {
        id: 'keemala',
        name: 'Keemala',
        type: 'unique',
        location: 'Phuket',
        priceRange: '$$$$$',
        description: 'Bird\'s nest and treehouse villas in the rainforest.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Thai Baht (THB)',
      dailyBudget: '$30 - $100 USD',
      visaInfo: 'Visa exemption for 30-60 days for many countries.',
      internetSpeed: 'Fast and reliable (5G widely available).',
      transportation: 'Grab app, BTS/MRT in Bangkok, Songthaews locally.',
      safety: 'Safe, but beware of tuk-tuk scams in Bangkok.'
    },
    digitalNomadInfo: {
      bestCities: ['Chiang Mai', 'Bangkok', 'Koh Phangan'],
      costOfLiving: 'Low ($800 - $1,500/month)',
      coworkingAreas: ['Punspace (Chiang Mai)', 'The Hive (Bangkok)'],
      visaOptions: 'Destination Thailand Visa (DTV) for nomads (5 years).',
      longTermStay: 'Condos are easy to rent monthly.'
    },
    localFood: [
      { name: 'Pad Thai', description: 'Stir-fried rice noodles with egg, peanuts, and shrimp.' },
      { name: 'Tom Yum Goong', description: 'Spicy and sour shrimp soup.' },
      { name: 'Som Tum', description: 'Spicy green papaya salad.' },
      { name: 'Khao Soi', description: 'Coconut curry noodle soup (Northern specialty).' },
      { name: 'Mango Sticky Rice', description: 'Sweet sticky rice with fresh mango and coconut milk.' }
    ],
    photoSuggestions: {
      hero: 'Railay Beach limestone cliffs',
      city: ['Wat Arun at sunset', 'Chinatown neon lights'],
      nature: ['Erawan Waterfalls', 'Similan Islands underwater'],
      culture: ['Monks collecting alms', 'Floating lantern festival']
    }
  },
  {
    id: 'vietnam',
    slug: 'vietnam',
    name: 'Vietnam',
    region: 'Asia',
    heroImage: '/images/destinations/vietnam-hero.jpg',
    heroDescription: 'A dragon-shaped land of staggering natural beauty, coffee culture, and complex history.',
    whyVisit: ['Ha Long Bay', 'Coffee Culture', 'Diverse Landscapes', 'Street Food'],
    bestCities: ['Hanoi', 'Ho Chi Minh City', 'Hoi An', 'Da Nang'],
    bestSeasons: ['Spring (Feb-Apr)', 'Autumn (Aug-Oct)'],
    travelTips: ['Cross the street with confidence (don\'t stop)', 'Rent a motorbike only if experienced', 'Haggle in markets'],
    cultureOverview: 'Resilient and energetic, with a strong Confucian influence and French colonial legacy.',
    blogArticles: [
      {
        slug: 'ha-giang-loop',
        title: 'Conquering the Ha Giang Loop',
        intro: 'Vietnam\'s most spectacular motorbike road trip.',
        sections: [
          { title: 'The Route', content: '3-4 days through mountain passes.' },
          { title: 'Ma Pi Leng Pass', content: 'Views down to the Nho Que River.' },
          { title: 'Homestays', content: 'Staying with ethnic minority families.' }
        ],
        tips: ['Get an IDP (International Driving Permit)', 'Wear protective gear'],
        conclusion: 'An adventure of a lifetime.'
      },
      {
        slug: 'hoi-an-tailors',
        title: 'Getting Custom Clothes in Hoi An',
        intro: 'How to get a bespoke suit or dress in 24 hours.',
        sections: [
          { title: 'Choosing a Tailor', content: 'Research and reviews matter.' },
          { title: 'The Process', content: 'Measuring, fitting, and adjusting.' },
          { title: 'Fabrics', content: 'Silk, linen, and wool options.' }
        ],
        tips: ['Bring photos of what you want', 'Negotiate the price'],
        conclusion: 'Affordable luxury fashion.'
      },
      {
        slug: 'vietnam-coffee-guide',
        title: 'A Caffeinated Guide to Vietnam',
        intro: 'It\'s not just a drink, it\'s a culture.',
        sections: [
          { title: 'Ca Phe Sua Da', content: 'Iced coffee with condensed milk.' },
          { title: 'Egg Coffee', content: 'Hanoi\'s creamy specialty.' },
          { title: 'Coconut Coffee', content: 'Like a slushie.' }
        ],
        tips: ['Try the salt coffee in Hue', 'Sit on low plastic stools'],
        conclusion: 'Strong, sweet, and addictive.'
      }
    ],
    excursions: [
      {
        id: 'ha-long-bay-cruise',
        title: 'Ha Long Bay Overnight Cruise',
        description: 'Sail through thousands of limestone islands.',
        location: 'Ha Long Bay',
        price: '$150 - $300 USD',
        bestTime: 'Overnight',
        affiliateLink: '#'
      },
      {
        id: 'cu-chi-tunnels',
        title: 'Cu Chi Tunnels Tour',
        description: 'Crawl through the underground network used in the war.',
        location: 'Ho Chi Minh City',
        price: '$20 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'hoi-an-lantern-making',
        title: 'Lantern Making Class',
        description: 'Craft your own traditional silk lantern.',
        location: 'Hoi An',
        price: '$15 USD',
        bestTime: 'Afternoon',
        affiliateLink: '#'
      },
      {
        id: 'hanoi-street-food',
        title: 'Hanoi Old Quarter Food Tour',
        description: 'Taste the best northern dishes with a local.',
        location: 'Hanoi',
        price: '$25 USD',
        bestTime: 'Evening',
        affiliateLink: '#'
      },
      {
        id: 'mekong-delta-boat',
        title: 'Mekong Delta Boat Trip',
        description: 'Explore the floating markets and fruit orchards.',
        location: 'Can Tho / My Tho',
        price: '$30 USD',
        bestTime: 'Early Morning',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'sofitel-metropole',
        name: 'Sofitel Legend Metropole',
        type: 'luxury',
        location: 'Hanoi',
        priceRange: '$$$$$',
        description: 'Historic colonial hotel with a bomb shelter bar.',
        affiliateLink: '#'
      },
      {
        id: 'topas-ecolodge',
        name: 'Topas Ecolodge',
        type: 'unique',
        location: 'Sapa',
        priceRange: '$$$$',
        description: 'Bungalows overlooking rice terraces.',
        affiliateLink: '#'
      },
      {
        id: 'fuse-hostel',
        name: 'Fuse Hostel',
        type: 'hostel',
        location: 'Hoi An',
        priceRange: '$',
        description: 'Social hostel with a pool and beach shuttle.',
        affiliateLink: '#'
      },
      {
        id: 'intercontinental-danang',
        name: 'InterContinental Danang',
        type: 'luxury',
        location: 'Da Nang',
        priceRange: '$$$$$',
        description: 'Architectural masterpiece on the Son Tra Peninsula.',
        affiliateLink: '#'
      },
      {
        id: 'crazy-house',
        name: 'Crazy House (Hang Nga)',
        type: 'unique',
        location: 'Da Lat',
        priceRange: '$$',
        description: 'Surrealist guesthouse resembling a giant tree.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Vietnamese Dong (VND)',
      dailyBudget: '$30 - $80 USD',
      visaInfo: 'E-visa required for most nationalities (90 days).',
      internetSpeed: 'Good in cities, decent 4G coverage.',
      transportation: 'Sleeper buses for long distances, Grab bikes for cities.',
      safety: 'Safe, but watch for phone snatching in HCMC.'
    },
    digitalNomadInfo: {
      bestCities: ['Da Nang', 'Ho Chi Minh City', 'Hanoi'],
      costOfLiving: 'Low ($700 - $1,200/month)',
      coworkingAreas: ['Enouvo (Da Nang)', 'Toong (Nationwide)'],
      visaOptions: '90-day E-visa is the standard for nomads.',
      longTermStay: 'Da Nang is the favorite for beach + city life.'
    },
    localFood: [
      { name: 'Pho', description: 'Noodle soup with beef (Bo) or chicken (Ga).' },
      { name: 'Banh Mi', description: 'Baguette sandwich with pate, meats, and pickles.' },
      { name: 'Bun Cha', description: 'Grilled pork with noodles and herbs (Obama\'s favorite).' },
      { name: 'Cao Lau', description: 'Pork noodle dish unique to Hoi An.' },
      { name: 'Egg Coffee', description: 'Robusta coffee topped with whisked egg yolk and sugar.' }
    ],
    photoSuggestions: {
      hero: 'Ha Long Bay junks in mist',
      city: ['Hoi An lanterns at night', 'Train street in Hanoi'],
      nature: ['Sapa rice terraces', 'Ban Gioc Waterfall'],
      culture: ['Incense village', 'Water puppet show']
    }
  },
  {
    id: 'indonesia',
    slug: 'indonesia',
    name: 'Indonesia',
    region: 'Asia',
    heroImage: '/images/destinations/indonesia-hero.jpg',
    heroDescription: 'An archipelago of over 17,000 islands, home to volcanoes, dragons, and spiritual retreats.',
    whyVisit: ['Bali Vibes', 'Komodo Dragons', 'Volcano Hiking', 'Marine Life'],
    bestCities: ['Ubud', 'Canggu', 'Yogyakarta', 'Jakarta'],
    bestSeasons: ['Dry Season (Apr-Oct)'],
    travelTips: ['Bali is not the whole country', 'Respect local customs (dress)', 'Traffic can be chaotic'],
    cultureOverview: 'Incredibly diverse, from Hindu Bali to Muslim Java, united by "Bhinneka Tunggal Ika" (Unity in Diversity).',
    blogArticles: [
      {
        slug: 'bali-budget-guide',
        title: 'Bali on a Budget: Paradise for Less',
        intro: 'How to live the villa life without the price tag.',
        sections: [
          { title: 'Warungs', content: 'Eat local for $2.' },
          { title: 'Scooters', content: 'Cheap transport.' },
          { title: 'Guesthouses', content: 'Affordable luxury.' }
        ],
        tips: ['Negotiate at markets', 'Avoid peak season'],
        conclusion: 'Bali is accessible for every budget.'
      },
      {
        slug: 'komodo-boat-trip',
        title: 'Sailing to Komodo Island',
        intro: 'A 3-day adventure from Lombok to Flores.',
        sections: [
          { title: 'Pink Beach', content: 'Surreal sand color.' },
          { title: 'Padar Island', content: 'The iconic viewpoint.' },
          { title: 'The Dragons', content: 'Meeting prehistoric lizards.' }
        ],
        tips: ['Choose a reputable boat', 'Bring seasickness meds'],
        conclusion: 'A rugged and rewarding journey.'
      },
      {
        slug: 'java-volcanoes',
        title: 'Chasing Sunrises: Bromo and Ijen',
        intro: 'Hiking the most active volcanoes in Java.',
        sections: [
          { title: 'Mount Bromo', content: 'Jeep tour and crater rim walk.' },
          { title: 'Kawah Ijen', content: 'Blue fire and sulfur miners.' },
          { title: 'Tumpak Sewu', content: 'The Niagara of Indonesia.' }
        ],
        tips: ['Bring a gas mask for Ijen', 'Pack warm clothes'],
        conclusion: 'Landscapes that look like another planet.'
      }
    ],
    excursions: [
      {
        id: 'mount-batur-hike',
        title: 'Mount Batur Sunrise Trek',
        description: 'Hike an active volcano for breakfast at the summit.',
        location: 'Bali',
        price: '$35 USD',
        bestTime: 'Very Early Morning',
        affiliateLink: '#'
      },
      {
        id: 'nusa-penida-tour',
        title: 'Nusa Penida Day Trip',
        description: 'Visit Kelingking Beach (T-Rex) and Angel\'s Billabong.',
        location: 'From Bali',
        price: '$50 USD',
        bestTime: 'Full Day',
        affiliateLink: '#'
      },
      {
        id: 'borobudur-sunrise',
        title: 'Borobudur Temple Sunrise',
        description: 'Watch the sun rise over the world\'s largest Buddhist temple.',
        location: 'Yogyakarta',
        price: '$40 USD',
        bestTime: 'Sunrise',
        affiliateLink: '#'
      },
      {
        id: 'komodo-dragon-tour',
        title: 'Komodo National Park Tour',
        description: 'See the dragons in their natural habitat.',
        location: 'Labuan Bajo',
        price: '$100 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'bali-surf-lesson',
        title: 'Surf Lesson in Canggu',
        description: 'Learn to catch waves on Batu Bolong beach.',
        location: 'Canggu',
        price: '$25 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'bambu-indah',
        name: 'Bambu Indah',
        type: 'unique',
        location: 'Ubud',
        priceRange: '$$$$',
        description: 'Eco-lifestyle boutique hotel with antique Javanese bridal homes.',
        affiliateLink: '#'
      },
      {
        id: 'the-farm-hostel',
        name: 'The Farm Hostel',
        type: 'hostel',
        location: 'Canggu',
        priceRange: '$',
        description: 'Popular hostel with two pools and rice field views.',
        affiliateLink: '#'
      },
      {
        id: 'ayana-resort',
        name: 'AYANA Resort',
        type: 'luxury',
        location: 'Jimbaran',
        priceRange: '$$$$$',
        description: 'Home to the famous Rock Bar.',
        affiliateLink: '#'
      },
      {
        id: 'amanjiwo',
        name: 'Amanjiwo',
        type: 'luxury',
        location: 'Magelang (Borobudur)',
        priceRange: '$$$$$',
        description: 'Ultra-luxury resort overlooking Borobudur temple.',
        affiliateLink: '#'
      },
      {
        id: 'le-pirate',
        name: 'Le Pirate Island',
        type: 'unique',
        location: 'Labuan Bajo / Nusa Ceningan',
        priceRange: '$$',
        description: 'Beach huts and floating cinema.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Indonesian Rupiah (IDR)',
      dailyBudget: '$30 - $100 USD',
      visaInfo: 'Visa on Arrival (VOA) for 30 days, extendable once.',
      internetSpeed: 'Variable; good in Bali/Jakarta, poor in remote islands.',
      transportation: 'Gojek/Grab apps, scooters are king, domestic flights.',
      safety: 'Generally safe; watch for currents when swimming.'
    },
    digitalNomadInfo: {
      bestCities: ['Canggu (Bali)', 'Ubud (Bali)', 'Uluwatu (Bali)'],
      costOfLiving: 'Moderate ($1,000 - $2,000/month)',
      coworkingAreas: ['Tropical Nomad', 'Outpost', 'Dojo (closed/renovating)'],
      visaOptions: 'B211A Social Visa (60 days + extensions) is popular.',
      longTermStay: 'Villas with pools are the standard accommodation.'
    },
    localFood: [
      { name: 'Nasi Goreng', description: 'Fried rice with sweet soy sauce, egg, and crackers.' },
      { name: 'Rendang', description: 'Slow-cooked beef in coconut milk and spices (Sumatran).' },
      { name: 'Satay', description: 'Grilled meat skewers with peanut sauce.' },
      { name: 'Gado-Gado', description: 'Vegetable salad with peanut sauce dressing.' },
      { name: 'Babi Guling', description: 'Roast suckling pig (Bali specialty).' }
    ],
    photoSuggestions: {
      hero: 'Kelingking Beach T-Rex shape',
      city: ['Ubud Monkey Forest', 'Tanah Lot Temple'],
      nature: ['Mount Bromo crater', 'Tegalalang Rice Terrace'],
      culture: ['Balinese dance performance', 'Canang sari offerings']
    }
  },
  {
    id: 'malaysia',
    slug: 'malaysia',
    name: 'Malaysia',
    region: 'Asia',
    heroImage: '/images/destinations/malaysia-hero.jpg',
    heroDescription: 'Truly Asia: A multicultural melting pot of Malay, Chinese, and Indian cultures with ancient rainforests.',
    whyVisit: ['Food Paradise', 'Cultural Diversity', 'Rainforests', 'Islands'],
    bestCities: ['Kuala Lumpur', 'George Town (Penang)', 'Malacca', 'Ipoh'],
    bestSeasons: ['West Coast (Nov-Mar)', 'East Coast (Mar-Oct)'],
    travelTips: ['Alcohol is expensive due to tax', 'Use Grab to get around', 'Eat at hawker centers'],
    cultureOverview: 'A harmonious blend of ethnicities and religions, reflected in festivals and food.',
    blogArticles: [
      {
        slug: 'penang-street-food',
        title: 'Eating Your Way Through Penang',
        intro: 'Why George Town is the food capital of Malaysia.',
        sections: [
          { title: 'Char Kway Teow', content: 'The smoky noodle king.' },
          { title: 'Assam Laksa', content: 'Sour, spicy fish soup.' },
          { title: 'Cendol', content: 'Icy dessert for hot days.' }
        ],
        tips: ['Follow the locals', 'Don\'t count calories'],
        conclusion: 'A gastronomic pilgrimage.'
      },
      {
        slug: 'cameron-highlands',
        title: 'Cooling Off in the Cameron Highlands',
        intro: 'Tea plantations and strawberry farms.',
        sections: [
          { title: 'BOH Tea Plantation', content: 'Stunning green views.' },
          { title: 'Mossy Forest', content: 'Avatar-like hiking.' },
          { title: 'Steamboat Dinner', content: 'Hot pot in the cool air.' }
        ],
        tips: ['Bring a jacket', 'Rent a scooter'],
        conclusion: 'A refreshing break from the tropical heat.'
      },
      {
        slug: 'kl-city-guide',
        title: 'Kuala Lumpur: Towers and Temples',
        intro: 'A 48-hour itinerary for the capital.',
        sections: [
          { title: 'Petronas Towers', content: 'Iconic twin structures.' },
          { title: 'Batu Caves', content: 'Rainbow stairs and monkeys.' },
          { title: 'Jalan Alor', content: 'Night market food street.' }
        ],
        tips: ['Stay in a hotel with an infinity pool', 'Use the monorail'],
        conclusion: 'A modern city with traditional roots.'
      }
    ],
    excursions: [
      {
        id: 'batu-caves-tour',
        title: 'Batu Caves Half-Day Tour',
        description: 'Climb the 272 colorful steps to the Hindu shrine.',
        location: 'Kuala Lumpur',
        price: '$15 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'petronas-towers-ticket',
        title: 'Petronas Twin Towers Observation Deck',
        description: 'Views from the skybridge and 86th floor.',
        location: 'Kuala Lumpur',
        price: '$20 USD',
        bestTime: 'Sunset',
        affiliateLink: '#'
      },
      {
        id: 'langkawi-mangrove',
        title: 'Langkawi Mangrove Boat Tour',
        description: 'Explore the UNESCO Geopark and eagle feeding.',
        location: 'Langkawi',
        price: '$30 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'penang-street-art',
        title: 'George Town Street Art Walk',
        description: 'Hunt for the famous murals.',
        location: 'Penang',
        price: 'Free',
        bestTime: 'Early Morning',
        affiliateLink: '#'
      },
      {
        id: 'perhentian-snorkeling',
        title: 'Perhentian Islands Snorkeling',
        description: 'Swim with turtles and sharks.',
        location: 'Perhentian Islands',
        price: '$15 USD',
        bestTime: 'Dry Season',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'the-face-suites',
        name: 'The FACE Suites',
        type: 'luxury',
        location: 'Kuala Lumpur',
        priceRange: '$$$',
        description: 'Famous for its infinity pool facing the Petronas Towers.',
        affiliateLink: '#'
      },
      {
        id: 'cheong-fatt-tze',
        name: 'Cheong Fatt Tze (The Blue Mansion)',
        type: 'unique',
        location: 'Penang',
        priceRange: '$$$$',
        description: 'Historic heritage hotel featured in Crazy Rich Asians.',
        affiliateLink: '#'
      },
      {
        id: 'datai-langkawi',
        name: 'The Datai Langkawi',
        type: 'luxury',
        location: 'Langkawi',
        priceRange: '$$$$$',
        description: 'Luxury resort nestled in an ancient rainforest.',
        affiliateLink: '#'
      },
      {
        id: 'pods-the-backpackers',
        name: 'Pods The Backpackers Home',
        type: 'hostel',
        location: 'Kuala Lumpur',
        priceRange: '$',
        description: 'Clean, modern capsule hostel near KL Sentral.',
        affiliateLink: '#'
      },
      {
        id: 'time-capsule-retreat',
        name: 'Time Capsule Retreat',
        type: 'unique',
        location: 'Sungai Lembing',
        priceRange: '$$',
        description: 'Stay in concrete pipes in the jungle.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Malaysian Ringgit (MYR)',
      dailyBudget: '$30 - $80 USD',
      visaInfo: 'Visa-free for 90 days for many nationalities.',
      internetSpeed: 'Excellent and fast.',
      transportation: 'Grab is cheap and efficient; buses are comfortable.',
      safety: 'Safe; KL has some petty crime but generally low risk.'
    },
    digitalNomadInfo: {
      bestCities: ['Kuala Lumpur', 'George Town (Penang)'],
      costOfLiving: 'Low ($800 - $1,500/month)',
      coworkingAreas: ['Common Ground', 'WORQ'],
      visaOptions: 'DE Rantau Nomad Pass available.',
      longTermStay: 'KL offers incredible value for luxury condos.'
    },
    localFood: [
      { name: 'Nasi Lemak', description: 'Coconut rice, sambal, anchovies, peanuts, and egg.' },
      { name: 'Laksa', description: 'Spicy noodle soup (Curry Laksa or Assam Laksa).' },
      { name: 'Roti Canai', description: 'Flaky flatbread served with dhal or curry.' },
      { name: 'Char Kway Teow', description: 'Stir-fried flat rice noodles with prawns and cockles.' },
      { name: 'Teh Tarik', description: 'Pulled milk tea, frothy and sweet.' }
    ],
    photoSuggestions: {
      hero: 'Batu Caves colorful stairs',
      city: ['Petronas Towers at night', 'Penang street art'],
      nature: ['Tea plantations Cameron Highlands', 'Perhentian beaches'],
      culture: ['Chinese temples', 'Ramadan bazaars']
    }
  },
  {
    id: 'philippines',
    slug: 'philippines',
    name: 'Philippines',
    region: 'Asia',
    heroImage: '/images/destinations/philippines-hero.jpg',
    heroDescription: 'Over 7,000 islands featuring the world\'s clearest waters and friendliest smiles.',
    whyVisit: ['Island Hopping', 'Diving', 'Surfing', 'Hospitality'],
    bestCities: ['El Nido', 'Coron', 'Cebu City', 'Siargao'],
    bestSeasons: ['Dry Season (Nov-Apr)'],
    travelTips: ['Ferries can be delayed', 'Bring cash to islands', 'Don\'t skip the lechon'],
    cultureOverview: 'A unique blend of Asian, Spanish, and American influences, known for "Bayanihan" (community spirit).',
    blogArticles: [
      {
        slug: 'el-nido-vs-coron',
        title: 'El Nido vs Coron: Which Palawan Gem?',
        intro: 'The ultimate showdown of limestone paradises.',
        sections: [
          { title: 'El Nido', content: 'Better beaches and luxury resorts.' },
          { title: 'Coron', content: 'Better diving and lakes.' },
          { title: 'Verdict', content: 'Do both if you can.' }
        ],
        tips: ['Take the ferry between them', 'Book tours A and C'],
        conclusion: 'You can\'t go wrong with either.'
      },
      {
        slug: 'siargao-guide',
        title: 'Siargao: More Than Just Surfing',
        intro: 'Why this island is the new traveler favorite.',
        sections: [
          { title: 'Cloud 9', content: 'Watching the pros surf.' },
          { title: 'Magpupungko', content: 'Rock pools at low tide.' },
          { title: 'Sugba Lagoon', content: 'Paddleboarding in turquoise water.' }
        ],
        tips: ['Rent a motorbike', 'Eat at Kermit'],
        conclusion: 'Laid-back island vibes at their best.'
      },
      {
        slug: 'cebu-adventures',
        title: 'Adventures in Cebu: Falls and Sharks',
        intro: 'Action-packed itinerary for Cebu island.',
        sections: [
          { title: 'Kawasan Falls', content: 'Canyoneering down the blue river.' },
          { title: 'Moalboal', content: 'Sardine run snorkeling.' },
          { title: 'Oslob', content: 'The whale shark controversy.' }
        ],
        tips: ['Go early for falls', 'Wear water shoes'],
        conclusion: 'The adventure capital of the Philippines.'
      }
    ],
    excursions: [
      {
        id: 'el-nido-tour-a',
        title: 'El Nido Island Hopping Tour A',
        description: 'Visit the Big Lagoon and Secret Lagoon.',
        location: 'El Nido',
        price: '$25 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'kawasan-canyoneering',
        title: 'Kawasan Falls Canyoneering',
        description: 'Jump off cliffs into turquoise pools.',
        location: 'Badian, Cebu',
        price: '$30 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'coron-super-ultimate',
        title: 'Coron Super Ultimate Tour',
        description: 'Kayangan Lake, Twin Lagoon, and coral gardens.',
        location: 'Coron',
        price: '$30 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'chocolate-hills',
        title: 'Bohol Countryside Tour',
        description: 'See the Chocolate Hills and Tarsier sanctuary.',
        location: 'Bohol',
        price: '$40 USD',
        bestTime: 'Day',
        affiliateLink: '#'
      },
      {
        id: 'underground-river',
        title: 'Puerto Princesa Underground River',
        description: 'Boat ride into a UNESCO cave system.',
        location: 'Puerto Princesa',
        price: '$45 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'elnido-resorts',
        name: 'El Nido Resorts Miniloc',
        type: 'luxury',
        location: 'El Nido',
        priceRange: '$$$$$',
        description: 'Eco-resort in a private lagoon.',
        affiliateLink: '#'
      },
      {
        id: 'mad-monkey-siargao',
        name: 'Mad Monkey Siargao',
        type: 'hostel',
        location: 'Siargao',
        priceRange: '$$',
        description: 'Party hostel famous for its social vibe.',
        affiliateLink: '#'
      },
      {
        id: 'atmosphere-resort',
        name: 'Atmosphere Resorts & Spa',
        type: 'luxury',
        location: 'Dumaguete',
        priceRange: '$$$$',
        description: 'Luxury boutique resort focused on diving and wellness.',
        affiliateLink: '#'
      },
      {
        id: 'birdhouse-el-nido',
        name: 'The Birdhouse',
        type: 'unique',
        location: 'El Nido',
        priceRange: '$$$',
        description: 'Glamping tents with sunset views.',
        affiliateLink: '#'
      },
      {
        id: 'z-hostel',
        name: 'Z Hostel',
        type: 'hostel',
        location: 'Manila (Makati)',
        priceRange: '$$',
        description: 'Upscale hostel with a famous rooftop bar.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Philippine Peso (PHP)',
      dailyBudget: '$35 - $100 USD',
      visaInfo: 'Visa-free for 30 days for most countries.',
      internetSpeed: 'Can be slow and spotty on islands; Starlink is improving things.',
      transportation: 'Ferries, domestic flights, tricycles.',
      safety: 'Generally safe; avoid certain areas in Mindanao.'
    },
    digitalNomadInfo: {
      bestCities: ['Siargao', 'Makati (Manila)', 'Cebu IT Park'],
      costOfLiving: 'Low ($800 - $1,500/month)',
      coworkingAreas: ['Lexez (Siargao)', 'Acceler8 (Manila)'],
      visaOptions: 'Tourist visa extensions are easy (up to 3 years).',
      longTermStay: 'Siargao is the top choice for lifestyle.'
    },
    localFood: [
      { name: 'Adobo', description: 'Meat marinated in vinegar, soy sauce, garlic, and pepper.' },
      { name: 'Lechon', description: 'Whole roasted pig with crispy skin.' },
      { name: 'Sinigang', description: 'Sour soup with tamarind base.' },
      { name: 'Sisig', description: 'Sizzling chopped pork face/belly with onions and chili.' },
      { name: 'Halo-Halo', description: 'Shaved ice dessert with mixed fruits, beans, and ube ice cream.' }
    ],
    photoSuggestions: {
      hero: 'Kayangan Lake Coron',
      city: ['Intramuros Manila', 'Makati skyline'],
      nature: ['Chocolate Hills', 'Kawasan Falls'],
      culture: ['Jeepneys', 'Sinulog Festival']
    }
  },
  {
    id: 'singapore',
    slug: 'singapore',
    name: 'Singapore',
    region: 'Asia',
    heroImage: '/images/destinations/singapore-hero.jpg',
    heroDescription: 'A futuristic garden city where nature meets modern architecture and street food meets Michelin stars.',
    whyVisit: ['Futuristic Architecture', 'Hawker Food', 'Cleanliness', 'Gardens'],
    bestCities: ['Singapore'],
    bestSeasons: ['All year round (Dryer Feb-Apr)'],
    travelTips: ['Chewing gum is banned', 'Alcohol is expensive', 'Public transport is world-class'],
    cultureOverview: 'A highly efficient, multicultural society with Chinese, Malay, and Indian roots.',
    blogArticles: [
      {
        slug: 'gardens-by-the-bay',
        title: 'Guide to Gardens by the Bay',
        intro: 'Avatar in real life.',
        sections: [
          { title: 'Supertrees', content: 'Light show at night.' },
          { title: 'Cloud Forest', content: 'Indoor waterfall.' },
          { title: 'Flower Dome', content: 'Mediterranean climate.' }
        ],
        tips: ['Buy tickets online', 'Stay for the light show (free)'],
        conclusion: 'A vision of the future.'
      },
      {
        slug: 'singapore-hawker-food',
        title: 'Michelin Star for $5: Hawker Centers',
        intro: 'Where to eat the best food in Singapore.',
        sections: [
          { title: 'Maxwell Food Centre', content: 'Chicken Rice.' },
          { title: 'Lau Pa Sat', content: 'Satay street at night.' },
          { title: 'Chinatown Complex', content: 'Soya sauce chicken.' }
        ],
        tips: ['Chope seats with a tissue packet', 'Bring cash'],
        conclusion: 'Culinary heaven.'
      },
      {
        slug: 'changi-airport',
        title: 'Is Changi the World\'s Best Airport?',
        intro: 'Why you might want a long layover.',
        sections: [
          { title: 'The Jewel', content: 'The rain vortex waterfall.' },
          { title: 'Butterfly Garden', content: 'Terminal 3 nature.' },
          { title: 'Slide', content: 'The tallest slide in an airport.' }
        ],
        tips: ['Check in early', 'Visit the Jewel before immigration'],
        conclusion: 'A destination in itself.'
      }
    ],
    excursions: [
      {
        id: 'gardens-by-the-bay-ticket',
        title: 'Gardens by the Bay Entry',
        description: 'Access to Cloud Forest and Flower Dome.',
        location: 'Marina Bay',
        price: '$20 USD',
        bestTime: 'Afternoon',
        affiliateLink: '#'
      },
      {
        id: 'night-safari',
        title: 'Singapore Night Safari',
        description: 'See nocturnal animals in an open tram ride.',
        location: 'Mandai',
        price: '$40 USD',
        bestTime: 'Evening',
        affiliateLink: '#'
      },
      {
        id: 'universal-studios',
        title: 'Universal Studios Singapore',
        description: 'Theme park fun on Sentosa Island.',
        location: 'Sentosa',
        price: '$60 USD',
        bestTime: 'Day',
        affiliateLink: '#'
      },
      {
        id: 'marina-bay-sands-skypark',
        title: 'MBS Skypark Observation Deck',
        description: 'Views from the top of the ship building.',
        location: 'Marina Bay',
        price: '$20 USD',
        bestTime: 'Sunset',
        affiliateLink: '#'
      },
      {
        id: 'singapore-river-cruise',
        title: 'Singapore River Bumboat Cruise',
        description: 'History of the quays from the water.',
        location: 'Clarke Quay',
        price: '$18 USD',
        bestTime: 'Evening',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'marina-bay-sands',
        name: 'Marina Bay Sands',
        type: 'luxury',
        location: 'Marina Bay',
        priceRange: '$$$$$',
        description: 'The world\'s most famous infinity pool.',
        affiliateLink: '#'
      },
      {
        id: 'raffles-singapore',
        name: 'Raffles Singapore',
        type: 'luxury',
        location: 'City Hall',
        priceRange: '$$$$$',
        description: 'Colonial luxury, birthplace of the Singapore Sling.',
        affiliateLink: '#'
      },
      {
        id: 'pod-boutique-capsule',
        name: 'The Pod Boutique Capsule Hotel',
        type: 'hostel',
        location: 'Kampong Glam',
        priceRange: '$$',
        description: 'Stylish and private capsule stay.',
        affiliateLink: '#'
      },
      {
        id: 'warehouse-hotel',
        name: 'The Warehouse Hotel',
        type: 'unique',
        location: 'Robertson Quay',
        priceRange: '$$$$',
        description: 'Industrial-chic hotel in a former spice warehouse.',
        affiliateLink: '#'
      },
      {
        id: 'lyf-funan',
        name: 'lyf Funan Singapore',
        type: 'mid-range',
        location: 'City Hall',
        priceRange: '$$$',
        description: 'Co-living concept hotel in a mall.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Singapore Dollar (SGD)',
      dailyBudget: '$80 - $200 USD',
      visaInfo: 'Visa-free for most nationalities.',
      internetSpeed: 'One of the fastest in the world.',
      transportation: 'MRT is efficient, clean, and cheap.',
      safety: 'Extremely safe; low crime rate.'
    },
    digitalNomadInfo: {
      bestCities: ['Singapore'],
      costOfLiving: 'Very High ($3,000+/month)',
      coworkingAreas: ['The Great Room', 'WeWork', 'JustCo'],
      visaOptions: 'Strict; no nomad visa. Employment pass required for long term.',
      longTermStay: 'Co-living spaces like Hmlet are popular.'
    },
    localFood: [
      { name: 'Chili Crab', description: 'Mud crab stir-fried in a semi-thick, sweet and savory tomato and chili based sauce.' },
      { name: 'Hainanese Chicken Rice', description: 'Poached chicken and seasoned rice, served with chili sauce.' },
      { name: 'Laksa', description: 'Spicy coconut milk-based noodle soup with shrimp and cockles.' },
      { name: 'Kaya Toast', description: 'Toast with coconut jam and butter, served with soft-boiled eggs.' },
      { name: 'Roti Prata', description: 'Fried flour-based pancake served with curry.' }
    ],
    photoSuggestions: {
      hero: 'Gardens by the Bay Supertrees at night',
      city: ['Marina Bay Sands skyline', 'Peranakan houses in Katong'],
      nature: ['Cloud Forest waterfall', 'MacRitchie Reservoir'],
      culture: ['Buddha Tooth Relic Temple', 'Sultan Mosque']
    }
  }
];
