import { Destination } from '../../types/content';

export const chileDestinations: Destination[] = [
  {
    id: 'san-pedro-de-atacama',
    slug: 'san-pedro-de-atacama',
    name: 'San Pedro de Atacama',
    region: 'Americas',
    heroImage: 'https://images.unsplash.com/photo-1518182170546-07661fd94144?q=80&w=1200&auto=format&fit=crop',
    heroDescription: 'An oasis in the driest desert on Earth, gateway to lunar landscapes and the clearest skies.',
    whyVisit: ['Stargazing', 'Geysers', 'Salt Flats', 'Moon Valley'],
    bestCities: ['San Pedro Town'],
    bestSeasons: ['Year-round (Nights are cold)'],
    travelTips: ['Drink lots of water', 'Book tours in advance', 'Bring warm clothes for night'],
    cultureOverview: 'A blend of indigenous Atacameño culture and backpacker vibes.',
    blogArticles: [
      {
        slug: 'atacama-stargazing',
        title: 'Why Atacama has the Best Stargazing',
        intro: 'Zero light pollution and high altitude make for a perfect view.',
        sections: [
          { title: 'The Tours', content: 'Telescopes and laser pointers.' },
          { title: 'Astrophotography', content: 'How to capture the Milky Way.' },
          { title: 'ALMA Observatory', content: 'Visit the world\'s largest radio telescope.' }
        ],
        tips: ['Go during a new moon', 'Dress warmly'],
        conclusion: 'A humbling look at the universe.'
      },
      {
        slug: 'moon-valley-sunset',
        title: 'Sunset at Valle de la Luna',
        intro: 'Watching the desert turn purple and gold.',
        sections: [
          { title: 'The Dune', content: 'Climbing the Great Dune.' },
          { title: 'The Amphitheater', content: 'Natural rock formations.' },
          { title: 'The Colors', content: 'Why the landscape changes color.' }
        ],
        tips: ['Bring a windbreaker', 'Don\'t miss the Three Marys'],
        conclusion: 'Like walking on Mars.'
      },
      {
        slug: 'el-tatio-geysers',
        title: 'Breakfast at El Tatio Geysers',
        intro: 'Waking up at 4 AM for steam and eggs.',
        sections: [
          { title: 'The Drive', content: 'Bumpy road in the dark.' },
          { title: 'The Eruption', content: 'Steam columns at sunrise.' },
          { title: 'Thermal Pool', content: 'Swimming in hot water at 4,300m.' }
        ],
        tips: ['Dress in layers (it\'s freezing)', 'Walk slowly'],
        conclusion: 'A powerful display of geothermal energy.'
      }
    ],
    excursions: [
      {
        id: 'atacama-astronomy-tour',
        title: 'Deep Space Astronomy Tour',
        description: 'Professional stargazing with high-end telescopes.',
        location: 'San Pedro Outskirts',
        price: '$40 USD',
        bestTime: '9:00 PM',
        affiliateLink: '#'
      },
      {
        id: 'moon-valley-tour',
        title: 'Valle de la Luna Sunset',
        description: 'Explore the lunar landscape and watch the sunset.',
        location: 'Moon Valley',
        price: '$25 USD',
        bestTime: '3:00 PM',
        affiliateLink: '#'
      },
      {
        id: 'el-tatio-geysers',
        title: 'El Tatio Geysers & Machuca',
        description: 'Sunrise at the geyser field and visit a local village.',
        location: 'El Tatio',
        price: '$50 USD',
        bestTime: '4:30 AM',
        affiliateLink: '#'
      },
      {
        id: 'laguna-cejar',
        title: 'Laguna Cejar Floating Tour',
        description: 'Float in salt water denser than the Dead Sea.',
        location: 'Salar de Atacama',
        price: '$35 USD',
        bestTime: 'Afternoon',
        affiliateLink: '#'
      },
      {
        id: 'puritama-hot-springs',
        title: 'Puritama Hot Springs',
        description: 'Relax in natural thermal pools in a canyon.',
        location: 'Puritama',
        price: '$40 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'explora-atacama',
        name: 'Explora Atacama',
        type: 'luxury',
        location: 'San Pedro',
        priceRange: '$$$$$',
        description: 'All-inclusive luxury lodge with its own observatory.',
        affiliateLink: '#'
      },
      {
        id: 'tierra-atacama',
        name: 'Tierra Atacama',
        type: 'luxury',
        location: 'San Pedro',
        priceRange: '$$$$$',
        description: 'Boutique hotel with stunning volcano views.',
        affiliateLink: '#'
      },
      {
        id: 'hotel-altiplano',
        name: 'Hotel Altiplanico',
        type: 'mid-range',
        location: 'San Pedro',
        priceRange: '$$',
        description: 'Adobe-style hotel blending with the desert.',
        affiliateLink: '#'
      },
      {
        id: 'casa-voyage',
        name: 'Casa Voyage Hostel',
        type: 'hostel',
        location: 'San Pedro',
        priceRange: '$',
        description: 'Social hostel with a pool and bonfires.',
        affiliateLink: '#'
      },
      {
        id: 'nayara-alto-atacama',
        name: 'Nayara Alto Atacama',
        type: 'luxury',
        location: 'Catarpe Valley',
        priceRange: '$$$$$',
        description: 'Secluded luxury retreat in a red rock canyon.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Chilean Peso (CLP)',
      dailyBudget: '$60 - $150 USD',
      visaInfo: 'Visa-free for most.',
      internetSpeed: 'Okay in town, none in desert.',
      transportation: 'Rent a bike or take tours.',
      safety: 'Very safe.'
    },
    digitalNomadInfo: {
      bestCities: ['San Pedro (Short stays)'],
      costOfLiving: 'High (Tourist prices)',
      coworkingAreas: ['Cafes'],
      visaOptions: 'Tourist visa.',
      longTermStay: 'Expensive and dusty for long term.'
    },
    localFood: [
      { name: 'Patasca', description: 'Spicy stew with corn, potatoes, and meat.' },
      { name: 'Rica Rica Ice Cream', description: 'Made from a local desert herb.' },
      { name: 'Llama Skewers', description: 'Grilled meat sold on the street.' },
      { name: 'Quinoa Risotto', description: 'Creamy quinoa dish.' },
      { name: 'Pisco Sour', description: 'Chilean style (sweeter than Peruvian).' }
    ],
    photoSuggestions: {
      hero: 'Licancabur Volcano reflection',
      city: ['Adobe church in town square'],
      nature: ['Valle de la Luna sunset', 'Flamingos in salt flats'],
      culture: ['Stargazing silhouettes']
    }
  },
  {
    id: 'santiago',
    slug: 'santiago',
    name: 'Santiago',
    region: 'Americas',
    heroImage: 'https://images.unsplash.com/photo-1529963183134-618ad061e131?q=80&w=1200&auto=format&fit=crop',
    heroDescription: 'A modern metropolis framed by the majestic Andes mountains.',
    whyVisit: ['Andes Views', 'Wine Tasting', 'History', 'Food Scene'],
    bestCities: ['Providencia', 'Lastarria', 'Bellavista'],
    bestSeasons: ['Spring (Sep-Nov)', 'Autumn (Mar-May)'],
    travelTips: ['Get a Bip! card for the metro', 'Visit the Sky Costanera', 'Drink the tap water (it\'s safe)'],
    cultureOverview: 'A sophisticated capital with a mix of European influence and Latin soul.',
    blogArticles: [
      {
        slug: 'santiago-neighborhoods',
        title: 'Best Neighborhoods in Santiago',
        intro: 'Where to stay and play.',
        sections: [
          { title: 'Lastarria', content: 'Bohemian, artsy, and historic.' },
          { title: 'Bellavista', content: 'Nightlife and street art.' },
          { title: 'Providencia', content: 'Modern, safe, and green.' }
        ],
        tips: ['Stay in Lastarria for charm', 'Providencia for convenience'],
        conclusion: 'Each barrio has its own personality.'
      },
      {
        slug: 'santiago-wine-tasting',
        title: 'Wine Tasting in the City',
        intro: 'You don\'t have to go far to taste world-class wine.',
        sections: [
          { title: 'Cousiño Macul', content: 'Historic winery reachable by metro.' },
          { title: 'Concha y Toro', content: 'The most famous brand in Chile.' },
          { title: 'Wine Bars', content: 'Bocanariz in Lastarria.' }
        ],
        tips: ['Book tours in advance', 'Try the Carmenere'],
        conclusion: 'Cheers to Chilean wine.'
      },
      {
        slug: 'sky-costanera-view',
        title: 'Sunset from the Top of South America',
        intro: 'Views from the Sky Costanera observatory.',
        sections: [
          { title: 'The Tower', content: 'Tallest building in South America.' },
          { title: 'The View', content: '360 degrees of city and mountains.' },
          { title: 'Best Time', content: 'Golden hour.' }
        ],
        tips: ['Check visibility before going up', 'Buy tickets online'],
        conclusion: 'See the scale of the Andes.'
      }
    ],
    excursions: [
      {
        id: 'cajon-del-maipo',
        title: 'Cajón del Maipo & Embalse El Yeso',
        description: 'Day trip to the Andes mountains and reservoir.',
        location: 'Andes Mountains',
        price: '$50 USD',
        bestTime: 'Full Day',
        affiliateLink: '#'
      },
      {
        id: 'santiago-city-tour',
        title: 'Santiago City Highlights',
        description: 'Visit Plaza de Armas, La Moneda, and Santa Lucia.',
        location: 'Santiago Center',
        price: '$25 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'concha-y-toro-tour',
        title: 'Concha y Toro Winery Tour',
        description: 'Wine tasting at the legendary vineyard.',
        location: 'Pirque',
        price: '$30 USD',
        bestTime: 'Afternoon',
        affiliateLink: '#'
      },
      {
        id: 'valparaiso-day-trip',
        title: 'Valparaíso & Viña del Mar Day Trip',
        description: 'Visit the coast from Santiago.',
        location: 'Valparaíso',
        price: '$40 USD',
        bestTime: 'Full Day',
        affiliateLink: '#'
      },
      {
        id: 'human-rights-museum',
        title: 'Museum of Memory',
        description: 'Moving museum about the Pinochet dictatorship.',
        location: 'Quinta Normal',
        price: 'Free',
        bestTime: 'Afternoon',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'singular-santiago',
        name: 'The Singular Santiago',
        type: 'luxury',
        location: 'Lastarria',
        priceRange: '$$$$',
        description: 'Elegant luxury in the heart of the arts district.',
        affiliateLink: '#'
      },
      {
        id: 'hotel-magnolia',
        name: 'Hotel Magnolia',
        type: 'luxury',
        location: 'Center',
        priceRange: '$$$$',
        description: 'Design hotel in a restored 1929 mansion.',
        affiliateLink: '#'
      },
      {
        id: 'hostal-providencia',
        name: 'Hostal Providencia',
        type: 'hostel',
        location: 'Providencia',
        priceRange: '$',
        description: 'Lively, colorful hostel with great social vibes.',
        affiliateLink: '#'
      },
      {
        id: 'luciano-k',
        name: 'Luciano K Hotel',
        type: 'mid-range',
        location: 'Lastarria',
        priceRange: '$$$',
        description: 'Art deco boutique hotel with a rooftop bar.',
        affiliateLink: '#'
      },
      {
        id: 'eco-hostel-chile',
        name: 'Eco Hostel Chile',
        type: 'hostel',
        location: 'Center',
        priceRange: '$',
        description: 'Budget friendly and eco-conscious.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Chilean Peso (CLP)',
      dailyBudget: '$50 - $100 USD',
      visaInfo: 'Visa-free for most.',
      internetSpeed: 'Excellent (Fiber everywhere).',
      transportation: 'Metro is clean and efficient; Uber is great.',
      safety: 'Watch for pickpockets in the center; otherwise safe.'
    },
    digitalNomadInfo: {
      bestCities: ['Providencia', 'Lastarria'],
      costOfLiving: 'Moderate ($1,200 - $2,000/month)',
      coworkingAreas: ['WeWork', 'Launch Coworking'],
      visaOptions: 'Tourist visa.',
      longTermStay: 'Modern apartments available.'
    },
    localFood: [
      { name: 'Completo Italiano', description: 'Hot dog with avocado, tomato, and mayo.' },
      { name: 'Empanada de Pino', description: 'Baked pastry with beef, onion, olive, and egg.' },
      { name: 'Pastel de Choclo', description: 'Corn pie with beef filling.' },
      { name: 'Mote con Huesillo', description: 'Sweet peach drink with wheat berries.' },
      { name: 'Terremoto', description: 'Potent cocktail with pipeño wine and pineapple ice cream.' }
    ],
    photoSuggestions: {
      hero: 'Santiago skyline with snowy Andes',
      city: ['Sky Costanera view', 'Lastarria streets'],
      nature: ['Cajón del Maipo reservoir'],
      culture: ['La Moneda Palace']
    }
  },
  {
    id: 'valparaiso',
    slug: 'valparaiso',
    name: 'Valparaíso',
    region: 'Americas',
    heroImage: 'https://images.unsplash.com/photo-1518182170546-07661fd94144?q=80&w=1200&auto=format&fit=crop',
    heroDescription: 'A colorful, chaotic port city famous for its street art, funiculars, and bohemian spirit.',
    whyVisit: ['Street Art', 'Funiculars', 'Pablo Neruda\'s House', 'Bohemian Vibe'],
    bestCities: ['Cerro Alegre', 'Cerro Concepción'],
    bestSeasons: ['Summer (Dec-Mar)'],
    travelTips: ['Wear comfortable shoes for the hills', 'Take the funiculars', 'Watch your camera'],
    cultureOverview: 'The cultural capital of Chile, inspiring poets and artists for decades.',
    blogArticles: [
      {
        slug: 'valparaiso-street-art',
        title: 'Open Air Museum: Valpo\'s Street Art',
        intro: 'Every wall is a canvas in this city.',
        sections: [
          { title: 'Cerro Alegre', content: 'Famous murals and staircases.' },
          { title: 'Cerro Concepción', content: 'Hip cafes and art galleries.' },
          { title: 'Open Air Museum', content: 'Dedicated street art zone.' }
        ],
        tips: ['Take a graffiti tour', 'Don\'t forget the piano stairs'],
        conclusion: 'A visual feast for art lovers.'
      },
      {
        slug: 'neruda-house-sebastiana',
        title: 'Visiting La Sebastiana',
        intro: 'Inside the quirky home of Pablo Neruda.',
        sections: [
          { title: 'The Architecture', content: 'Built to look like a ship.' },
          { title: 'The Collection', content: 'Eclectic objects from around the world.' },
          { title: 'The View', content: 'Overlooking the entire bay.' }
        ],
        tips: ['Get the audio guide', 'Go early to beat the crowds'],
        conclusion: 'Insight into the mind of a genius.'
      },
      {
        slug: 'valparaiso-funiculars',
        title: 'Riding the Elevators of Valparaíso',
        intro: 'The historic transport system of the hills.',
        sections: [
          { title: 'El Peral', content: 'Connects the port to Cerro Alegre.' },
          { title: 'Reina Victoria', content: 'Steep ride to a great view.' },
          { title: 'Artillería', content: 'Best view of the port.' }
        ],
        tips: ['They are cheap (under $1)', 'Some are creaky but safe'],
        conclusion: 'A fun way to save your legs.'
      }
    ],
    excursions: [
      {
        id: 'valpo-graffiti-tour',
        title: 'Valparaíso Graffiti Tour',
        description: 'Guided walk through the best street art.',
        location: 'Cerro Alegre',
        price: 'Free (Tip based)',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'la-sebastiana-tour',
        title: 'La Sebastiana Museum',
        description: 'Entry to Pablo Neruda\'s house.',
        location: 'Cerro Florida',
        price: '$10 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'vina-del-mar-tour',
        title: 'Viña del Mar Coastal Tour',
        description: 'Visit the neighboring garden city and beaches.',
        location: 'Viña del Mar',
        price: '$20 USD',
        bestTime: 'Afternoon',
        affiliateLink: '#'
      },
      {
        id: 'casablanca-wine-tour',
        title: 'Casablanca Valley Wine Tour',
        description: 'Stop for wine tasting on the way to/from Santiago.',
        location: 'Casablanca Valley',
        price: '$40 USD',
        bestTime: 'Afternoon',
        affiliateLink: '#'
      },
      {
        id: 'boat-tour-bay',
        title: 'Valparaíso Bay Boat Tour',
        description: 'See the colorful hills from the water.',
        location: 'Muelle Prat',
        price: '$5 USD',
        bestTime: 'Sunset',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'winebox-valparaiso',
        name: 'WineBox Valparaíso',
        type: 'unique',
        location: 'Cerro Mariposas',
        priceRange: '$$$',
        description: 'Hotel made from recycled shipping containers with its own winery.',
        affiliateLink: '#'
      },
      {
        id: 'casa-higueras',
        name: 'Casa Higueras',
        type: 'luxury',
        location: 'Cerro Alegre',
        priceRange: '$$$$',
        description: 'Sophisticated boutique hotel with an infinity pool.',
        affiliateLink: '#'
      },
      {
        id: 'fauna-hotel',
        name: 'Fauna Hotel',
        type: 'mid-range',
        location: 'Cerro Alegre',
        priceRange: '$$$',
        description: 'Design hotel with a fantastic restaurant and view.',
        affiliateLink: '#'
      },
      {
        id: 'nomada-eco-hostel',
        name: 'Nómada Eco Hostel',
        type: 'hostel',
        location: 'Valparaíso',
        priceRange: '$',
        description: 'Cozy, artistic hostel with a community vibe.',
        affiliateLink: '#'
      },
      {
        id: 'palacio-astoreca',
        name: 'Palacio Astoreca',
        type: 'luxury',
        location: 'Cerro Alegre',
        priceRange: '$$$$',
        description: 'Restored palace with a spa and piano bar.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Chilean Peso (CLP)',
      dailyBudget: '$40 - $80 USD',
      visaInfo: 'Same as Chile.',
      internetSpeed: 'Good.',
      transportation: 'Funiculars and walking.',
      safety: 'Be careful with valuables; avoid port area at night.'
    },
    digitalNomadInfo: {
      bestCities: ['Cerro Alegre', 'Cerro Concepción'],
      costOfLiving: 'Moderate',
      coworkingAreas: ['Cafes with Wi-Fi'],
      visaOptions: 'Tourist visa.',
      longTermStay: 'Inspiring for artists and writers.'
    },
    localFood: [
      { name: 'Chorrillana', description: 'Mountain of fries, onions, egg, and beef (share it!).' },
      { name: 'Caldillo de Congrio', description: 'Conger eel soup (Neruda\'s favorite).' },
      { name: 'Machas a la Parmesana', description: 'Razor clams with parmesan cheese.' },
      { name: 'Empanada de Mariscos', description: 'Fried seafood empanada.' },
      { name: 'Alfajores', description: 'Cookie sandwich with manjar (dulce de leche).' }
    ],
    photoSuggestions: {
      hero: 'Colorful houses on the hills',
      city: ['Piano stairs', 'Funicular tracks'],
      nature: ['Pacific Ocean sunset'],
      culture: ['Street art murals']
    }
  }
];
