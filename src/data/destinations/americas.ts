import { Destination } from '../../types/content';

export const americasDestinations: Destination[] = [
  {
    id: 'chile',
    slug: 'chile',
    name: 'Chile',
    region: 'Americas',
    heroImage: '/images/destinations/chile-hero.jpg',
    heroDescription: 'A land of extremes, from the driest desert in the world to the icy fjords of Patagonia.',
    whyVisit: ['Diverse landscapes', 'World-class wine', 'Stargazing in Atacama', 'Patagonian trekking'],
    bestCities: ['Santiago', 'Valparaíso', 'San Pedro de Atacama', 'Puerto Natales'],
    bestSeasons: ['Spring (Sep-Nov)', 'Autumn (Mar-May)'],
    travelTips: ['Book Patagonia treks months in advance', 'Carry cash in remote areas', 'Layer your clothing'],
    cultureOverview: 'A blend of indigenous Mapuche heritage and European influence, known for warm hospitality and a love for poetry (home of Pablo Neruda).',
    blogArticles: [
      {
        slug: 'best-things-to-do-chile',
        title: 'Best Things to Do in Chile: From Desert to Glaciers',
        intro: 'Chile offers an incredible variety of experiences for every type of traveler.',
        sections: [
          { title: 'Explore the Atacama Desert', content: 'Visit the Moon Valley and geysers.' },
          { title: 'Trek in Torres del Paine', content: 'The W Trek is a must for hikers.' },
          { title: 'Wine Tasting in Maipo Valley', content: 'Sample world-class Carmenere.' }
        ],
        tips: ['Rent a car for flexibility', 'Drink Pisco Sour'],
        conclusion: 'Chile is a destination that will leave you breathless with its natural beauty.'
      },
      {
        slug: 'budget-guide-chile',
        title: 'Budget Travel Guide for Chile',
        intro: 'Traveling Chile on a budget is possible with these tips.',
        sections: [
          { title: 'Use Turbus', content: 'Reliable and cheap bus network.' },
          { title: 'Stay in Hostels', content: 'Great social vibes and affordable beds.' },
          { title: 'Eat Empanadas', content: 'Cheap and filling street food.' }
        ],
        tips: ['Cook your own meals', 'Travel in shoulder season'],
        conclusion: 'You can see the best of Chile without breaking the bank.'
      },
      {
        slug: 'hidden-gems-chile',
        title: 'Hidden Gems in Chile',
        intro: 'Go beyond the guidebooks with these unique spots.',
        sections: [
          { title: 'Chiloé Island', content: 'Wooden churches and mythology.' },
          { title: 'Marble Caves', content: 'Stunning blue caves in Patagonia.' },
          { title: 'Elqui Valley', content: 'Stars and pisco distilleries.' }
        ],
        tips: ['Learn some Spanish', 'Respect local customs'],
        conclusion: 'Chile has many secrets waiting to be discovered.'
      }
    ],
    excursions: [
      {
        id: 'atacama-stargazing',
        title: 'Atacama Stargazing Tour',
        description: 'Observe the clearest skies in the world with professional telescopes.',
        location: 'San Pedro de Atacama',
        price: '$40 USD',
        bestTime: 'Night (New Moon)',
        affiliateLink: '#'
      },
      {
        id: 'torres-del-paine-trek',
        title: 'Torres del Paine Day Hike',
        description: 'Hike to the base of the iconic towers.',
        location: 'Puerto Natales',
        price: '$100 USD',
        bestTime: 'Early Morning',
        affiliateLink: '#'
      },
      {
        id: 'valparaiso-street-art',
        title: 'Valparaíso Street Art Walk',
        description: 'Discover the colorful murals of this bohemian port city.',
        location: 'Valparaíso',
        price: 'Free / Tip-based',
        bestTime: 'Afternoon',
        affiliateLink: '#'
      },
      {
        id: 'maipo-wine-tour',
        title: 'Maipo Valley Wine Tour',
        description: 'Taste the best Chilean wines in historic vineyards.',
        location: 'Santiago',
        price: '$80 USD',
        bestTime: 'Afternoon',
        affiliateLink: '#'
      },
      {
        id: 'marble-caves-boat',
        title: 'Marble Caves Boat Trip',
        description: 'Navigate through the turquoise waters and marble formations.',
        location: 'Puerto Río Tranquilo',
        price: '$50 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'eco-camp-patagonia',
        name: 'EcoCamp Patagonia',
        type: 'unique',
        location: 'Torres del Paine',
        priceRange: '$$$$',
        description: 'Sustainable geodesic domes in the heart of the national park.',
        affiliateLink: '#'
      },
      {
        id: 'singular-patagonia',
        name: 'The Singular Patagonia',
        type: 'luxury',
        location: 'Puerto Bories',
        priceRange: '$$$$',
        description: 'Luxury hotel in a converted cold storage plant.',
        affiliateLink: '#'
      },
      {
        id: 'hostal-providencia',
        name: 'Hostal Providencia',
        type: 'hostel',
        location: 'Santiago',
        priceRange: '$',
        description: 'Lively hostel in a central location.',
        affiliateLink: '#'
      },
      {
        id: 'hotel-altiplano',
        name: 'Hotel Altiplanico',
        type: 'mid-range',
        location: 'San Pedro de Atacama',
        priceRange: '$$',
        description: 'Adobe-style hotel blending with the desert landscape.',
        affiliateLink: '#'
      },
      {
        id: 'winebox-valparaiso',
        name: 'WineBox Valparaíso',
        type: 'unique',
        location: 'Valparaíso',
        priceRange: '$$$',
        description: 'Hotel made from recycled shipping containers with its own winery.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Chilean Peso (CLP)',
      dailyBudget: '$50 - $150 USD',
      visaInfo: 'Visa-free for most Western countries for 90 days.',
      internetSpeed: 'Good in cities, spotty in remote areas.',
      transportation: 'Excellent bus network, domestic flights for long distances.',
      safety: 'Generally safe, watch for pickpockets in Santiago and Valparaíso.'
    },
    digitalNomadInfo: {
      bestCities: ['Santiago', 'Viña del Mar', 'Valparaíso'],
      costOfLiving: 'Moderate ($1,200 - $2,000/month)',
      coworkingAreas: ['Providencia (Santiago)', 'Lastarria (Santiago)'],
      visaOptions: 'Tourist visa mostly used; specific nomad visa in progress.',
      longTermStay: 'Airbnb and monthly rentals are widely available.'
    },
    localFood: [
      { name: 'Empanada de Pino', description: 'Pastry filled with beef, onions, olive, egg, and raisins.' },
      { name: 'Pastel de Choclo', description: 'Corn pie with beef/chicken filling.' },
      { name: 'Completo Italiano', description: 'Hot dog with avocado, tomato, and mayonnaise.' },
      { name: 'Ceviche Chileno', description: 'Fresh fish marinated in lemon with cilantro and onion.' },
      { name: 'Curanto', description: 'Traditional seafood, meat, and potato stew from Chiloé.' }
    ],
    photoSuggestions: {
      hero: 'Torres del Paine peaks at sunrise',
      city: ['Valparaíso colorful houses', 'Santiago skyline with Andes'],
      nature: ['Atacama desert landscapes', 'Grey Glacier'],
      culture: ['Cueca dancers', 'Mapuche textiles']
    }
  },
  {
    id: 'peru',
    slug: 'peru',
    name: 'Peru',
    region: 'Americas',
    heroImage: '/images/destinations/peru-hero.jpg',
    heroDescription: 'Home to the legendary Machu Picchu and a culinary capital of the world.',
    whyVisit: ['Machu Picchu', 'Gastronomy', 'Amazon Rainforest', 'Inca History'],
    bestCities: ['Cusco', 'Lima', 'Arequipa', 'Iquitos'],
    bestSeasons: ['Dry Season (May-Oct)'],
    travelTips: ['Acclimatize to altitude in Cusco', 'Book Inca Trail months ahead', 'Try the food in Lima'],
    cultureOverview: 'A rich tapestry of Inca heritage and Spanish colonial influence, with a vibrant living culture in the Andes.',
    blogArticles: [
      {
        slug: 'machu-picchu-guide',
        title: 'Ultimate Guide to Visiting Machu Picchu',
        intro: 'Everything you need to know about the Lost City of the Incas.',
        sections: [
          { title: 'Getting There', content: 'Train vs Trek options.' },
          { title: 'Tickets', content: 'Buy in advance!' },
          { title: 'Best Views', content: 'Sun Gate and Huayna Picchu.' }
        ],
        tips: ['Bring passport', 'Go early morning'],
        conclusion: 'A bucket list experience that lives up to the hype.'
      },
      {
        slug: 'foodie-guide-lima',
        title: 'A Foodie\'s Guide to Lima',
        intro: 'Why Lima is the gastronomic capital of South America.',
        sections: [
          { title: 'Ceviche', content: 'Where to find the freshest catch.' },
          { title: 'Nikkei Cuisine', content: 'Fusion of Peruvian and Japanese flavors.' },
          { title: 'Fine Dining', content: 'Central and Maido experiences.' }
        ],
        tips: ['Make reservations', 'Try street picarones'],
        conclusion: 'Come hungry, leave happy.'
      },
      {
        slug: 'amazon-adventure',
        title: 'Exploring the Peruvian Amazon',
        intro: 'Into the wild: Puerto Maldonado vs Iquitos.',
        sections: [
          { title: 'Wildlife', content: 'Macaws, monkeys, and caimans.' },
          { title: 'Lodges', content: 'Eco-friendly stays in the jungle.' },
          { title: 'Activities', content: 'Night walks and canopy towers.' }
        ],
        tips: ['Bring bug spray', 'Pack light'],
        conclusion: 'An immersive nature experience like no other.'
      }
    ],
    excursions: [
      {
        id: 'machu-picchu-tour',
        title: 'Machu Picchu Guided Tour',
        description: 'Expert-led tour of the citadel.',
        location: 'Machu Picchu',
        price: '$60 USD (excluding entry)',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'rainbow-mountain',
        title: 'Rainbow Mountain Trek',
        description: 'Hike to the colorful Vinicunca mountain.',
        location: 'Cusco',
        price: '$40 USD',
        bestTime: 'Early Morning',
        affiliateLink: '#'
      },
      {
        id: 'lima-food-tour',
        title: 'Lima Gourmet Food Tour',
        description: 'Sample the best of Peruvian cuisine in Barranco and Miraflores.',
        location: 'Lima',
        price: '$70 USD',
        bestTime: 'Lunch',
        affiliateLink: '#'
      },
      {
        id: 'huacachina-dune-buggy',
        title: 'Huacachina Dune Buggy & Sandboarding',
        description: 'Adrenaline rush in the desert oasis.',
        location: 'Ica',
        price: '$25 USD',
        bestTime: 'Sunset',
        affiliateLink: '#'
      },
      {
        id: 'colca-canyon-trek',
        title: 'Colca Canyon 2-Day Trek',
        description: 'Hike one of the world\'s deepest canyons and spot condors.',
        location: 'Arequipa',
        price: '$60 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'belmond-sanctuary',
        name: 'Belmond Sanctuary Lodge',
        type: 'luxury',
        location: 'Machu Picchu',
        priceRange: '$$$$$',
        description: 'The only hotel located right at the entrance of Machu Picchu.',
        affiliateLink: '#'
      },
      {
        id: 'pariwana-hostel',
        name: 'Pariwana Hostel',
        type: 'hostel',
        location: 'Cusco',
        priceRange: '$',
        description: 'Famous party hostel in a colonial building.',
        affiliateLink: '#'
      },
      {
        id: 'hotel-b',
        name: 'Hotel B',
        type: 'luxury',
        location: 'Lima (Barranco)',
        priceRange: '$$$$',
        description: 'Arts-boutique hotel in a restored mansion.',
        affiliateLink: '#'
      },
      {
        id: 'selina-arequipa',
        name: 'Selina Arequipa',
        type: 'mid-range',
        location: 'Arequipa',
        priceRange: '$$',
        description: 'Stylish co-living and hotel space.',
        affiliateLink: '#'
      },
      {
        id: 'skylodge-adventure',
        name: 'Skylodge Adventure Suites',
        type: 'unique',
        location: 'Sacred Valley',
        priceRange: '$$$$',
        description: 'Transparent capsules hanging from a cliff side.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Peruvian Sol (PEN)',
      dailyBudget: '$40 - $120 USD',
      visaInfo: 'Visa-free for most Western countries for up to 183 days.',
      internetSpeed: 'Decent in cities, poor in remote areas.',
      transportation: 'Buses (Cruz del Sur) are excellent; domestic flights save time.',
      safety: 'Exercise caution in Lima; tourist areas generally safe.'
    },
    digitalNomadInfo: {
      bestCities: ['Lima (Miraflores/Barranco)', 'Cusco'],
      costOfLiving: 'Affordable ($1,000 - $1,800/month)',
      coworkingAreas: ['Selina (various locations)', 'Comunal (Lima)'],
      visaOptions: 'Tourist visa used by most; no specific nomad visa yet.',
      longTermStay: 'Apartments in Miraflores are popular.'
    },
    localFood: [
      { name: 'Ceviche', description: 'Raw fish cured in citrus juices with chili.' },
      { name: 'Lomo Saltado', description: 'Stir-fry beef with onions, tomatoes, and fries.' },
      { name: 'Ají de Gallina', description: 'Chicken stew in a spicy, creamy cheese sauce.' },
      { name: 'Cuy Chactado', description: 'Fried guinea pig, an Andean delicacy.' },
      { name: 'Pisco Sour', description: 'National cocktail with pisco, lime, egg white, and bitters.' }
    ],
    photoSuggestions: {
      hero: 'Machu Picchu at sunrise',
      city: ['Cusco Plaza de Armas', 'Barranco street art'],
      nature: ['Rainbow Mountain', 'Amazon river sunset'],
      culture: ['Local women in traditional dress with llamas']
    }
  },
  {
    id: 'bolivia',
    slug: 'bolivia',
    name: 'Bolivia',
    region: 'Americas',
    heroImage: '/images/destinations/bolivia-hero.jpg',
    heroDescription: 'High-altitude adventures and the surreal Salar de Uyuni.',
    whyVisit: ['Salar de Uyuni', 'Lake Titicaca', 'Amazon Pampas', 'Indigenous Culture'],
    bestCities: ['La Paz', 'Sucre', 'Uyuni', 'Copacabana'],
    bestSeasons: ['Dry Season (May-Oct)'],
    travelTips: ['Prepare for high altitude sickness', 'Bring warm clothes', 'Carry cash'],
    cultureOverview: 'Strong indigenous roots (Aymara and Quechua), colorful markets, and traditional festivals.',
    blogArticles: [
      {
        slug: 'salar-de-uyuni-guide',
        title: 'Surviving the Salar de Uyuni Tour',
        intro: 'A 3-day journey across the world\'s largest salt flat.',
        sections: [
          { title: 'The Salt Flats', content: 'Perspective photos and endless white.' },
          { title: 'Red Lagoon', content: 'Flamingos and colored waters.' },
          { title: 'Geysers', content: 'Steam vents at sunrise.' }
        ],
        tips: ['Bring sunglasses', 'Extra batteries for camera'],
        conclusion: 'An otherworldly experience you won\'t forget.'
      },
      {
        slug: 'la-paz-cable-cars',
        title: 'Exploring La Paz by Cable Car',
        intro: 'The best way to see this high-altitude city.',
        sections: [
          { title: 'Mi Teleférico', content: 'The world\'s highest cable car network.' },
          { title: 'El Alto', content: 'Views from the top.' },
          { title: 'Witches Market', content: 'Potions and traditional remedies.' }
        ],
        tips: ['Take the Red Line for views', 'Watch your belongings'],
        conclusion: 'A unique urban transport system with stunning vistas.'
      },
      {
        slug: 'death-road-biking',
        title: 'Biking the Death Road',
        intro: 'Adrenaline junkie? This one is for you.',
        sections: [
          { title: 'The Route', content: 'Descending from snow to jungle.' },
          { title: 'Safety', content: 'Choosing a reputable company.' },
          { title: 'The Thrill', content: 'Narrow paths and waterfalls.' }
        ],
        tips: ['Don\'t look down', 'Trust your guide'],
        conclusion: 'A terrifying but rewarding adventure.'
      }
    ],
    excursions: [
      {
        id: 'uyuni-3-day-tour',
        title: 'Salar de Uyuni 3-Day Tour',
        description: 'Jeep expedition across salt flats and colored lagoons.',
        location: 'Uyuni',
        price: '$150 - $200 USD',
        bestTime: 'Morning departure',
        affiliateLink: '#'
      },
      {
        id: 'death-road-bike',
        title: 'Death Road Mountain Biking',
        description: 'Downhill biking on the World\'s Most Dangerous Road.',
        location: 'La Paz',
        price: '$70 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'pampas-tour',
        title: 'Amazon Pampas Wildlife Tour',
        description: 'Boat tour to see pink dolphins, capybaras, and anacondas.',
        location: 'Rurrenabaque',
        price: '$120 USD',
        bestTime: 'Dry Season',
        affiliateLink: '#'
      },
      {
        id: 'lake-titicaca-boat',
        title: 'Isla del Sol Boat Trip',
        description: 'Visit the birthplace of the Inca sun god.',
        location: 'Copacabana',
        price: '$15 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'sucre-city-tour',
        title: 'Sucre Colonial City Tour',
        description: 'Explore the white city and its history.',
        location: 'Sucre',
        price: '$20 USD',
        bestTime: 'Afternoon',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'palacio-de-sal',
        name: 'Palacio de Sal',
        type: 'unique',
        location: 'Uyuni',
        priceRange: '$$$',
        description: 'Hotel built entirely out of salt blocks.',
        affiliateLink: '#'
      },
      {
        id: 'selina-la-paz',
        name: 'Selina La Paz',
        type: 'mid-range',
        location: 'La Paz',
        priceRange: '$$',
        description: 'Modern stay for nomads in the heart of the city.',
        affiliateLink: '#'
      },
      {
        id: 'wild-rover-la-paz',
        name: 'Wild Rover Hostel',
        type: 'hostel',
        location: 'La Paz',
        priceRange: '$',
        description: 'Notorious party hostel with an Irish bar.',
        affiliateLink: '#'
      },
      {
        id: 'parador-santa-maria',
        name: 'Parador Santa Maria la Real',
        type: 'luxury',
        location: 'Sucre',
        priceRange: '$$$',
        description: 'Colonial mansion turned boutique hotel.',
        affiliateLink: '#'
      },
      {
        id: 'ecolodge-la-estancia',
        name: 'Ecolodge La Estancia',
        type: 'unique',
        location: 'Isla del Sol',
        priceRange: '$$$',
        description: 'Eco-friendly cottages with lake views.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Boliviano (BOB)',
      dailyBudget: '$30 - $80 USD',
      visaInfo: 'Visa on arrival for US citizens ($160), free for many others.',
      internetSpeed: 'Slow and unreliable outside major cities.',
      transportation: 'Buses are cheap but basic; flights recommended for long distances.',
      safety: 'Watch for petty theft; avoid protests.'
    },
    digitalNomadInfo: {
      bestCities: ['La Paz', 'Sucre', 'Santa Cruz'],
      costOfLiving: 'Very Low ($600 - $1,000/month)',
      coworkingAreas: ['Selina La Paz', 'CoWork Cafe (Sucre)'],
      visaOptions: 'Tourist visa extensions available.',
      longTermStay: 'Sucre is popular for Spanish schools and long stays.'
    },
    localFood: [
      { name: 'Salteñas', description: 'Savory baked empanadas with sweet/spicy filling.' },
      { name: 'Pique Macho', description: 'Massive plate of beef, sausage, fries, egg, and onions.' },
      { name: 'Sopa de Maní', description: 'Peanut soup with pasta or rice.' },
      { name: 'Anticucho', description: 'Grilled beef heart skewers.' },
      { name: 'Silpancho', description: 'Breaded meat served over rice and potatoes with egg.' }
    ],
    photoSuggestions: {
      hero: 'Salar de Uyuni reflection',
      city: ['La Paz cable cars over city', 'Sucre white buildings'],
      nature: ['Laguna Colorada with flamingos', 'Isla del Sol'],
      culture: ['Cholitas wrestling', 'Witches market wares']
    }
  },
  {
    id: 'usa',
    slug: 'usa',
    name: 'United States',
    region: 'Americas',
    heroImage: '/images/destinations/usa-hero.jpg',
    heroDescription: 'From national parks to bustling metropolises, a land of endless road trips.',
    whyVisit: ['National Parks', 'Iconic Cities', 'Cultural Diversity', 'Road Trips'],
    bestCities: ['New York City', 'San Francisco', 'Los Angeles', 'Las Vegas', 'Austin'],
    bestSeasons: ['Fall (Sep-Nov)', 'Spring (Mar-May)'],
    travelTips: ['Tipping is mandatory (20%)', 'Rent a car for nature trips', 'Health insurance is essential'],
    cultureOverview: 'A melting pot of cultures, defined by regional differences from the South to the West Coast.',
    blogArticles: [
      {
        slug: 'west-coast-road-trip',
        title: 'Ultimate West Coast Road Trip Itinerary',
        intro: 'Driving Highway 1 from SF to LA.',
        sections: [
          { title: 'Big Sur', content: 'Dramatic cliffs and ocean views.' },
          { title: 'Santa Barbara', content: 'Spanish architecture and beaches.' },
          { title: 'Los Angeles', content: 'Hollywood and Venice Beach.' }
        ],
        tips: ['Book campsites early', 'Fill up gas often'],
        conclusion: 'The classic American road trip experience.'
      },
      {
        slug: 'nyc-budget-guide',
        title: 'New York City on a Budget',
        intro: 'How to survive the Big Apple without going broke.',
        sections: [
          { title: 'Cheap Eats', content: 'Dollar slices and Chinatown dumplings.' },
          { title: 'Free Activities', content: 'Central Park, Staten Island Ferry.' },
          { title: 'Subway', content: 'Mastering the MTA.' }
        ],
        tips: ['Walk everywhere', 'Visit museums on free days'],
        conclusion: 'NYC is expensive, but manageable with smart choices.'
      },
      {
        slug: 'utah-mighty-5',
        title: 'Utah\'s Mighty 5 National Parks',
        intro: 'A journey through the red rock wonderland.',
        sections: [
          { title: 'Zion', content: 'Angels Landing hike.' },
          { title: 'Bryce Canyon', content: 'Hoodoos and amphitheaters.' },
          { title: 'Arches', content: 'Delicate Arch at sunset.' }
        ],
        tips: ['Buy the America the Beautiful Pass', 'Hydrate'],
        conclusion: 'Some of the most unique landscapes on Earth.'
      }
    ],
    excursions: [
      {
        id: 'grand-canyon-helicopter',
        title: 'Grand Canyon Helicopter Tour',
        description: 'Flight over the rim of the canyon.',
        location: 'Las Vegas / Grand Canyon',
        price: '$250+ USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'statue-liberty-cruise',
        title: 'Statue of Liberty & Ellis Island',
        description: 'Ferry to the iconic monuments.',
        location: 'New York City',
        price: '$30 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'alcatraz-tour',
        title: 'Alcatraz Island Tour',
        description: 'Visit the infamous prison.',
        location: 'San Francisco',
        price: '$45 USD',
        bestTime: 'Book months ahead',
        affiliateLink: '#'
      },
      {
        id: 'antelope-canyon',
        title: 'Antelope Canyon Tour',
        description: 'Walk through the slot canyon light beams.',
        location: 'Page, Arizona',
        price: '$80 USD',
        bestTime: 'Mid-day for light beams',
        affiliateLink: '#'
      },
      {
        id: 'everglades-airboat',
        title: 'Everglades Airboat Tour',
        description: 'Spot alligators in the Florida swamps.',
        location: 'Miami',
        price: '$40 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: '1-hotel-brooklyn',
        name: '1 Hotel Brooklyn Bridge',
        type: 'luxury',
        location: 'New York City',
        priceRange: '$$$$$',
        description: 'Eco-luxury with stunning skyline views.',
        affiliateLink: '#'
      },
      {
        id: 'freehand-la',
        name: 'Freehand Los Angeles',
        type: 'hostel',
        location: 'Los Angeles',
        priceRange: '$$',
        description: 'Upscale hostel/hotel with a rooftop pool.',
        affiliateLink: '#'
      },
      {
        id: 'under-canvas-zion',
        name: 'Under Canvas Zion',
        type: 'unique',
        location: 'Zion National Park',
        priceRange: '$$$$',
        description: 'Glamping tents under the stars.',
        affiliateLink: '#'
      },
      {
        id: 'el-cosmico',
        name: 'El Cosmico',
        type: 'unique',
        location: 'Marfa, Texas',
        priceRange: '$$$',
        description: 'Trailers, yurts, and teepees in the desert.',
        affiliateLink: '#'
      },
      {
        id: 'citizenm-seattle',
        name: 'citizenM Seattle',
        type: 'mid-range',
        location: 'Seattle',
        priceRange: '$$$',
        description: 'Tech-forward, compact luxury rooms.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'US Dollar (USD)',
      dailyBudget: '$150 - $300+ USD',
      visaInfo: 'ESTA required for many countries; others need B1/B2 visa.',
      internetSpeed: 'Excellent in cities, variable in rural areas.',
      transportation: 'Car rental essential outside major cities like NYC/SF.',
      safety: 'Varies by neighborhood; generally safe but be aware of surroundings.'
    },
    digitalNomadInfo: {
      bestCities: ['Austin', 'Denver', 'Portland', 'Miami'],
      costOfLiving: 'High ($3,000 - $5,000+/month)',
      coworkingAreas: ['WeWork (everywhere)', 'The Wing', 'Industrious'],
      visaOptions: 'Strict; no digital nomad visa. Tourist stays limited.',
      longTermStay: 'Sublets and extended stay hotels.'
    },
    localFood: [
      { name: 'BBQ Ribs', description: 'Slow-cooked pork or beef ribs (Texas/Kansas style).' },
      { name: 'New York Pizza', description: 'Thin crust, foldable slices.' },
      { name: 'Lobster Roll', description: 'Fresh lobster meat in a buttered bun (New England).' },
      { name: 'Tex-Mex', description: 'Fusion cuisine like fajitas and nachos.' },
      { name: 'Gumbo', description: 'Hearty stew from Louisiana with meat/seafood and okra.' }
    ],
    photoSuggestions: {
      hero: 'Grand Canyon panoramic',
      city: ['Times Square neon', 'Golden Gate Bridge in fog'],
      nature: ['Yosemite Valley', 'Monument Valley'],
      culture: ['Jazz band in New Orleans', 'Rodeo in Texas']
    }
  }
];
