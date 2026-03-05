import { Destination } from '../../types/content';

export const peruDestinations: Destination[] = [
  {
    id: 'cusco',
    slug: 'cusco',
    name: 'Cusco',
    region: 'Americas',
    heroImage: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1200&auto=format&fit=crop',
    heroDescription: 'The historic capital of the Inca Empire, a city where ancient stone walls line the streets.',
    whyVisit: ['Inca History', 'Gateway to Machu Picchu', 'Vibrant Culture', 'San Pedro Market'],
    bestCities: ['San Blas', 'Plaza de Armas', 'Sacsayhuamán'],
    bestSeasons: ['Dry Season (May-Oct)'],
    travelTips: ['Take it easy on the first day for altitude', 'Drink Coca tea', 'Buy the Boleto Turístico'],
    cultureOverview: 'A fascinating blend of Inca and Spanish colonial architecture, with a deep spiritual connection to the Andes.',
    blogArticles: [
      {
        slug: 'cusco-altitude-guide',
        title: 'How to Beat Altitude Sickness in Cusco',
        intro: 'Don\'t let the thin air ruin your trip. Here are my top tips.',
        sections: [
          { title: 'Acclimatize', content: 'Spend a day resting upon arrival.' },
          { title: 'Hydrate', content: 'Drink more water than you think you need.' },
          { title: 'Coca Leaves', content: 'Chew them or drink the tea like a local.' }
        ],
        tips: ['Avoid alcohol on night one', 'Eat light meals'],
        conclusion: 'With a little care, you\'ll be exploring the Inca walls in no time.'
      },
      {
        slug: 'best-cafes-cusco',
        title: 'Best Cafés for Digital Nomads in Cusco',
        intro: 'Where to find good Wi-Fi and great coffee in the Imperial City.',
        sections: [
          { title: 'San Blas Neighborhood', content: 'Arts, crafts, and cozy coffee shops.' },
          { title: 'Laggart Cafe', content: 'Great views and strong internet.' },
          { title: 'Cappuccino Cafe', content: 'Right on the Plaza de Armas.' }
        ],
        tips: ['Come early for the best seats', 'Try the Peruvian coffee'],
        conclusion: 'Cusco is becoming a hotspot for remote workers.'
      },
      {
        slug: 'cusco-markets',
        title: 'Exploring San Pedro Market',
        intro: 'A sensory overload of colors, smells, and tastes.',
        sections: [
          { title: 'Fruit Section', content: 'Try exotic fruits like chirimoya and lucuma.' },
          { title: 'Juice Ladies', content: 'Freshly squeezed juices for pennies.' },
          { title: 'Soup Alley', content: 'Hearty chicken soup for breakfast.' }
        ],
        tips: ['Watch your pockets', 'Bargain politely'],
        conclusion: 'The heart of local life in Cusco.'
      }
    ],
    excursions: [
      {
        id: 'sacsayhuaman-tour',
        title: 'Sacsayhuamán Ruins Tour',
        description: 'Marvel at the massive stone fortress overlooking the city.',
        location: 'Cusco Outskirts',
        price: '$30 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'rainbow-mountain-day-trip',
        title: 'Rainbow Mountain Day Trip',
        description: 'Hike to the colorful Vinicunca mountain at 5,200m.',
        location: 'Cusco Region',
        price: '$40 USD',
        bestTime: 'Very Early Morning',
        affiliateLink: '#'
      },
      {
        id: 'sacred-valley-tour',
        title: 'Sacred Valley Full Day',
        description: 'Visit Pisac market, Ollantaytambo fortress, and Chinchero.',
        location: 'Sacred Valley',
        price: '$50 USD',
        bestTime: 'All Day',
        affiliateLink: '#'
      },
      {
        id: 'humantay-lake',
        title: 'Humantay Lake Hike',
        description: 'Trek to a stunning turquoise lake at the base of a glacier.',
        location: 'Cusco Region',
        price: '$35 USD',
        bestTime: 'Early Morning',
        affiliateLink: '#'
      },
      {
        id: 'cusco-cooking-class',
        title: 'Peruvian Cooking Class',
        description: 'Shop at the market and cook a 3-course meal.',
        location: 'Cusco Center',
        price: '$60 USD',
        bestTime: 'Afternoon',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'jw-marriott-cusco',
        name: 'JW Marriott El Convento',
        type: 'luxury',
        location: 'Cusco Center',
        priceRange: '$$$$$',
        description: 'Luxury hotel built on top of ancient Inca ruins.',
        affiliateLink: '#'
      },
      {
        id: 'selina-saphi',
        name: 'Selina Saphi Cusco',
        type: 'mid-range',
        location: 'Cusco Center',
        priceRange: '$$',
        description: 'Stylish co-living space perfect for digital nomads.',
        affiliateLink: '#'
      },
      {
        id: 'wild-rover-cusco',
        name: 'Wild Rover Cusco',
        type: 'hostel',
        location: 'Cusco Center',
        priceRange: '$',
        description: 'Legendary party hostel with a great view.',
        affiliateLink: '#'
      },
      {
        id: 'tierra-viva-san-blas',
        name: 'Tierra Viva Cusco San Blas',
        type: 'mid-range',
        location: 'San Blas',
        priceRange: '$$$',
        description: 'Quiet and comfortable hotel in the artisan quarter.',
        affiliateLink: '#'
      },
      {
        id: 'star-dome-peru',
        name: 'StarDome Peru',
        type: 'unique',
        location: 'Sacred Valley',
        priceRange: '$$$$',
        description: 'Geodesic dome for stargazing in the Sacred Valley.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Peruvian Sol (PEN)',
      dailyBudget: '$40 - $100 USD',
      visaInfo: 'Visa-free for most Western countries.',
      internetSpeed: 'Good in cafes and co-working spaces (20-50 Mbps).',
      transportation: 'Uber works well; taxis are cheap but agree on price first.',
      safety: 'Generally safe, but be careful at night and in crowded markets.'
    },
    digitalNomadInfo: {
      bestCities: ['San Blas', 'Lucrepata'],
      costOfLiving: 'Affordable ($1,000 - $1,500/month)',
      coworkingAreas: ['Selina', 'Genova Cafe', 'Laggart Cafe'],
      visaOptions: 'Tourist visa (up to 183 days).',
      longTermStay: 'Many guesthouses offer monthly rates.'
    },
    localFood: [
      { name: 'Cuy Chactado', description: 'Fried guinea pig, a traditional Andean dish.' },
      { name: 'Alpaca Steak', description: 'Lean, healthy meat often served with quinoa.' },
      { name: 'Chiriuchu', description: 'Cold platter with guinea pig, chicken, sausage, and cheese.' },
      { name: 'Quinoa Soup', description: 'Hearty vegetable soup with the supergrain.' },
      { name: 'Chicha Morada', description: 'Sweet drink made from purple corn.' }
    ],
    photoSuggestions: {
      hero: 'Plaza de Armas with cathedral',
      city: ['San Blas narrow streets', '12-angled stone'],
      nature: ['Sacsayhuamán ruins', 'View from Cristo Blanco'],
      culture: ['Local women with baby alpacas', 'San Pedro market stalls']
    }
  },
  {
    id: 'machu-picchu',
    slug: 'machu-picchu',
    name: 'Machu Picchu',
    region: 'Americas',
    heroImage: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1200&auto=format&fit=crop',
    heroDescription: 'The Lost City of the Incas, a UNESCO World Heritage site and one of the New Seven Wonders of the World.',
    whyVisit: ['Iconic Ruins', 'Incredible Mountain Scenery', 'Inca Trail', 'Spiritual Energy'],
    bestCities: ['Aguas Calientes'],
    bestSeasons: ['Dry Season (May-Oct)'],
    travelTips: ['Book tickets months in advance', 'Bring your passport to enter', 'Use insect repellent'],
    cultureOverview: 'A testament to the architectural and engineering genius of the Inca civilization.',
    blogArticles: [
      {
        slug: 'machu-picchu-circuits',
        title: 'Understanding Machu Picchu Circuits',
        intro: 'Which ticket should you buy? A breakdown of the new circuit system.',
        sections: [
          { title: 'Circuit 1 & 2', content: 'The classic panoramic views.' },
          { title: 'Circuit 3', content: 'Access to majestic temples.' },
          { title: 'Circuit 4', content: 'Huayna Picchu access.' }
        ],
        tips: ['Circuit 2 is best for first-timers', 'Tickets are non-refundable'],
        conclusion: 'Choose wisely to see what matters most to you.'
      },
      {
        slug: 'aguas-calientes-guide',
        title: 'Guide to Aguas Calientes',
        intro: 'The town at the foot of the ruins.',
        sections: [
          { title: 'Hot Springs', content: 'Relax your muscles after the hike.' },
          { title: 'Artisan Market', content: 'Last-minute souvenirs.' },
          { title: 'Restaurants', content: 'Where to eat before the bus.' }
        ],
        tips: ['Prices are higher here', 'Book train tickets in advance'],
        conclusion: 'A necessary stopover with its own charm.'
      },
      {
        slug: 'huayna-picchu-hike',
        title: 'Is Huayna Picchu Worth It?',
        intro: 'Climbing the peak behind the ruins.',
        sections: [
          { title: 'The Climb', content: 'Steep, narrow stairs of death.' },
          { title: 'The View', content: 'Bird\'s eye view of the citadel.' },
          { title: 'Temple of the Moon', content: 'Hidden cave temple.' }
        ],
        tips: ['Not for those with vertigo', 'Book 3-4 months ahead'],
        conclusion: 'The best view you\'ll ever earn.'
      }
    ],
    excursions: [
      {
        id: 'machu-picchu-guided',
        title: 'Private Machu Picchu Guide',
        description: '2.5 hour tour with an expert historian.',
        location: 'Machu Picchu',
        price: '$70 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'huayna-picchu-hike',
        title: 'Huayna Picchu Hike',
        description: 'Climb the iconic peak for a vertical view.',
        location: 'Machu Picchu',
        price: '$85 USD (inc. entry)',
        bestTime: '10 AM Slot',
        affiliateLink: '#'
      },
      {
        id: 'inca-bridge-hike',
        title: 'Inca Bridge Hike',
        description: 'Short walk to a secret entrance of the citadel.',
        location: 'Machu Picchu',
        price: 'Included in ticket',
        bestTime: 'Afternoon',
        affiliateLink: '#'
      },
      {
        id: 'mandor-waterfall',
        title: 'Mandor Gardens & Waterfall',
        description: 'Nature walk near Aguas Calientes.',
        location: 'Aguas Calientes',
        price: '$10 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'putucusi-trek',
        title: 'Putucusi Trek',
        description: 'Challenging free hike with views of Machu Picchu.',
        location: 'Aguas Calientes',
        price: 'Free',
        bestTime: 'Morning',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'sanctuary-lodge',
        name: 'Belmond Sanctuary Lodge',
        type: 'luxury',
        location: 'Machu Picchu Entrance',
        priceRange: '$$$$$',
        description: 'The only hotel right at the gate. Unbeatable access.',
        affiliateLink: '#'
      },
      {
        id: 'inkaterra-pueblo',
        name: 'Inkaterra Machu Picchu Pueblo',
        type: 'luxury',
        location: 'Aguas Calientes',
        priceRange: '$$$$',
        description: 'Eco-luxury hotel set in a cloud forest garden.',
        affiliateLink: '#'
      },
      {
        id: 'supertramp-hostel',
        name: 'Supertramp Hostel',
        type: 'hostel',
        location: 'Aguas Calientes',
        priceRange: '$',
        description: 'Fun, artistic hostel with a great rooftop bar.',
        affiliateLink: '#'
      },
      {
        id: 'tierra-viva-machu-picchu',
        name: 'Tierra Viva Machu Picchu',
        type: 'mid-range',
        location: 'Aguas Calientes',
        priceRange: '$$$',
        description: 'Modern comfort near the bus station.',
        affiliateLink: '#'
      },
      {
        id: 'gringo-bills',
        name: 'Gringo Bill\'s',
        type: 'unique',
        location: 'Aguas Calientes',
        priceRange: '$$',
        description: 'Quirky, labyrinthine hotel with character.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Peruvian Sol (PEN)',
      dailyBudget: '$150 - $300 USD (Expensive due to tickets/trains)',
      visaInfo: 'Passport required for entry to ruins.',
      internetSpeed: 'Okay in town, non-existent in ruins.',
      transportation: 'Train to Aguas Calientes, then bus to ruins.',
      safety: 'Very safe, strictly controlled tourist site.'
    },
    digitalNomadInfo: {
      bestCities: ['Aguas Calientes (Short stays only)'],
      costOfLiving: 'High',
      coworkingAreas: ['Hotel lobbies'],
      visaOptions: 'Tourist visa.',
      longTermStay: 'Not recommended for long term work.'
    },
    localFood: [
      { name: 'Trout Ceviche', description: 'Fresh river trout prepared ceviche style.' },
      { name: 'Alpaca Burger', description: 'A popular post-hike meal.' },
      { name: 'Choclo con Queso', description: 'Giant Andean corn with cheese.' },
      { name: 'Inca Kola', description: 'The golden soda of Peru.' },
      { name: 'Menu Turistico', description: 'Set lunch menus in town.' }
    ],
    photoSuggestions: {
      hero: 'Classic postcard view from Guardhouse',
      city: ['Aguas Calientes train tracks'],
      nature: ['Llamas grazing on terraces', 'Huayna Picchu peak'],
      culture: ['Inca stonework details']
    }
  },
  {
    id: 'lima',
    slug: 'lima',
    name: 'Lima',
    region: 'Americas',
    heroImage: 'https://images.unsplash.com/photo-1531968455001-fc0f3f266302?q=80&w=1200&auto=format&fit=crop',
    heroDescription: 'The gastronomic capital of the Americas, perched on cliffs overlooking the Pacific Ocean.',
    whyVisit: ['World-Class Food', 'Colonial History', 'Coastal Views', 'Nightlife'],
    bestCities: ['Miraflores', 'Barranco', 'San Isidro'],
    bestSeasons: ['Summer (Dec-Apr)'],
    travelTips: ['Use Uber instead of street taxis', 'Try the street food', 'Visit Barranco for art'],
    cultureOverview: 'A sprawling metropolis mixing pre-Columbian history, colonial grandeur, and modern urban life.',
    blogArticles: [
      {
        slug: 'lima-food-guide',
        title: 'Eating Your Way Through Lima',
        intro: 'From street carts to Michelin stars.',
        sections: [
          { title: 'Ceviche', content: 'La Mar or Punto Azul.' },
          { title: 'Nikkei', content: 'Maido is a must-try experience.' },
          { title: 'Criollo', content: 'Isolina in Barranco.' }
        ],
        tips: ['Lunch is the main meal', 'Book top tables months ahead'],
        conclusion: 'Lima is a paradise for your tastebuds.'
      },
      {
        slug: 'barranco-street-art',
        title: 'Bohemian Barranco: Art & Culture',
        intro: 'Exploring Lima\'s most romantic district.',
        sections: [
          { title: 'Bridge of Sighs', content: 'Make a wish and hold your breath.' },
          { title: 'Murals', content: 'Colorful street art everywhere.' },
          { title: 'Bajada de Baños', content: 'Walk down to the ocean.' }
        ],
        tips: ['Go at sunset', 'Visit Jade Rivera\'s museum'],
        conclusion: 'The soul of Lima\'s artistic scene.'
      },
      {
        slug: 'lima-historic-center',
        title: 'One Day in Historic Lima',
        intro: 'Colonial balconies and catacombs.',
        sections: [
          { title: 'Plaza Mayor', content: 'The birthplace of Lima.' },
          { title: 'San Francisco Monastery', content: 'Spooky catacombs tour.' },
          { title: 'Chinatown', content: 'Capon Street for snacks.' }
        ],
        tips: ['Go during the day', 'Watch your belongings'],
        conclusion: 'A dive into the city\'s complex past.'
      }
    ],
    excursions: [
      {
        id: 'lima-food-tour-night',
        title: 'Lima Night Food Tour',
        description: 'Taste 15+ Peruvian flavors in Barranco.',
        location: 'Barranco',
        price: '$75 USD',
        bestTime: 'Evening',
        affiliateLink: '#'
      },
      {
        id: 'palomino-islands',
        title: 'Swim with Sea Lions',
        description: 'Boat tour to Palomino Islands to swim with wildlife.',
        location: 'Callao',
        price: '$50 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'larco-museum',
        title: 'Larco Museum & Dinner',
        description: 'Pre-Columbian art and a beautiful garden restaurant.',
        location: 'Pueblo Libre',
        price: '$45 USD',
        bestTime: 'Evening',
        affiliateLink: '#'
      },
      {
        id: 'paragliding-miraflores',
        title: 'Paragliding over the Coast',
        description: 'Fly over the cliffs of Miraflores.',
        location: 'Miraflores',
        price: '$80 USD',
        bestTime: 'Afternoon (Wind dependent)',
        affiliateLink: '#'
      },
      {
        id: 'magic-water-circuit',
        title: 'Magic Water Circuit',
        description: 'Light and water show in the park.',
        location: 'Lima Center',
        price: '$5 USD',
        bestTime: 'Night',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'hotel-b-lima',
        name: 'Hotel B',
        type: 'luxury',
        location: 'Barranco',
        priceRange: '$$$$',
        description: 'Relais & Châteaux arts-boutique hotel.',
        affiliateLink: '#'
      },
      {
        id: 'selina-miraflores',
        name: 'Selina Miraflores',
        type: 'mid-range',
        location: 'Miraflores',
        priceRange: '$$',
        description: 'Trendy spot for nomads with coworking.',
        affiliateLink: '#'
      },
      {
        id: 'kokopelli-hostel',
        name: 'Kokopelli Hostel',
        type: 'hostel',
        location: 'Miraflores',
        priceRange: '$',
        description: 'Social hostel with a great bar and pods.',
        affiliateLink: '#'
      },
      {
        id: 'jw-marriott-lima',
        name: 'JW Marriott Lima',
        type: 'luxury',
        location: 'Miraflores',
        priceRange: '$$$$',
        description: 'Oceanfront luxury with stunning views.',
        affiliateLink: '#'
      },
      {
        id: 'second-home-peru',
        name: 'Second Home Peru',
        type: 'unique',
        location: 'Barranco',
        priceRange: '$$$',
        description: 'Guesthouse in the former home of a Peruvian artist.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Peruvian Sol (PEN)',
      dailyBudget: '$50 - $150 USD',
      visaInfo: 'Visa-free for most.',
      internetSpeed: 'Excellent (Fiber available).',
      transportation: 'Metropolitano bus is fast; Uber is safe.',
      safety: 'Stick to tourist districts; avoid downtown at night.'
    },
    digitalNomadInfo: {
      bestCities: ['Miraflores', 'Barranco'],
      costOfLiving: 'Moderate ($1,200 - $1,800/month)',
      coworkingAreas: ['Comunal', 'WeWork', 'Selina'],
      visaOptions: 'Tourist visa.',
      longTermStay: 'Airbnb apartments are high quality.'
    },
    localFood: [
      { name: 'Ceviche', description: 'The national dish, best eaten for lunch.' },
      { name: 'Lomo Saltado', description: 'Stir-fried beef with onions, tomatoes, and fries.' },
      { name: 'Anticuchos', description: 'Grilled beef heart skewers, a street food staple.' },
      { name: 'Picarones', description: 'Sweet potato and squash doughnuts with syrup.' },
      { name: 'Suspiro a la Limeña', description: 'Super sweet caramel meringue dessert.' }
    ],
    photoSuggestions: {
      hero: 'Miraflores cliffs at sunset',
      city: ['Barranco Bridge of Sighs', 'Plaza Mayor balconies'],
      nature: ['Pacific Ocean views', 'Parque del Amor'],
      culture: ['Street food vendors', 'Larco Museum pottery']
    }
  },
  {
    id: 'huacachina',
    slug: 'huacachina',
    name: 'Huacachina',
    region: 'Americas',
    heroImage: 'https://images.unsplash.com/photo-1551195662-756f8a846b45?q=80&w=1200&auto=format&fit=crop',
    heroDescription: 'A tiny desert oasis surrounded by massive sand dunes, perfect for adrenaline junkies.',
    whyVisit: ['Dune Buggies', 'Sandboarding', 'Sunset Views', 'Party Vibes'],
    bestCities: ['Ica'],
    bestSeasons: ['Year-round'],
    travelTips: ['Bring layers for the evening', 'Protect your camera from sand', 'Cash is king'],
    cultureOverview: 'A backpacker hub centered around a legendary lagoon.',
    blogArticles: [
      {
        slug: 'huacachina-guide',
        title: 'Complete Guide to Huacachina Oasis',
        intro: 'Is it a tourist trap or a must-visit?',
        sections: [
          { title: 'The Legend', content: 'The story of the mermaid in the lagoon.' },
          { title: 'Activities', content: 'Buggy rides are the main event.' },
          { title: 'Nightlife', content: 'Partying at Wild Rover.' }
        ],
        tips: ['Stay for one night', 'Book buggy tours in the afternoon'],
        conclusion: 'A fun, surreal stop on the Gringo Trail.'
      },
      {
        slug: 'sandboarding-tips',
        title: 'Sandboarding for Beginners',
        intro: 'How not to eat sand on your way down.',
        sections: [
          { title: 'Stand or Lie Down?', content: 'Lying down is faster and safer.' },
          { title: 'Waxing the Board', content: 'Essential for speed.' },
          { title: 'Safety', content: 'Hold on tight.' }
        ],
        tips: ['Wear closed shoes', 'Empty your pockets'],
        conclusion: 'An adrenaline rush you won\'t forget.'
      },
      {
        slug: 'ica-wineries',
        title: 'Pisco Tasting in Ica',
        intro: 'Visiting the vineyards near the oasis.',
        sections: [
          { title: 'Tacama', content: 'South America\'s oldest vineyard.' },
          { title: 'El Catador', content: 'Traditional artisanal pisco.' },
          { title: 'Tasting', content: 'Learn the difference between varieties.' }
        ],
        tips: ['Take a taxi from Huacachina', 'Buy a bottle to take home'],
        conclusion: 'A delicious break from the sand.'
      }
    ],
    excursions: [
      {
        id: 'dune-buggy-sandboard',
        title: 'Dune Buggy & Sandboarding',
        description: 'Rollercoaster ride on the dunes + boarding.',
        location: 'Huacachina',
        price: '$20 USD',
        bestTime: '4:00 PM (Sunset)',
        affiliateLink: '#'
      },
      {
        id: 'tacama-winery-tour',
        title: 'Tacama Winery Tour',
        description: 'Tour and tasting at the oldest vineyard.',
        location: 'Ica',
        price: '$15 USD',
        bestTime: 'Afternoon',
        affiliateLink: '#'
      },
      {
        id: 'canyon-los-perdidos',
        title: 'Canyon of the Lost',
        description: 'Trek to a hidden desert canyon.',
        location: 'Ica Desert',
        price: '$40 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'nazca-lines-flight',
        title: 'Nazca Lines Flight (from Ica)',
        description: 'Fly over the mysterious geoglyphs.',
        location: 'Ica Airport',
        price: '$150 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'paddle-boat-lagoon',
        title: 'Paddle Boat on Lagoon',
        description: 'Relaxing ride on the oasis waters.',
        location: 'Huacachina Lagoon',
        price: '$5 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'wild-rover-huacachina',
        name: 'Wild Rover Huacachina',
        type: 'hostel',
        location: 'Huacachina',
        priceRange: '$',
        description: 'The biggest party in the desert with a pool.',
        affiliateLink: '#'
      },
      {
        id: 'banana-adventure',
        name: 'Bananas Adventure',
        type: 'hostel',
        location: 'Huacachina',
        priceRange: '$$',
        description: 'Chill hostel with a great vibe and pool.',
        affiliateLink: '#'
      },
      {
        id: 'hotel-mossone',
        name: 'Hotel Mossone',
        type: 'mid-range',
        location: 'Huacachina',
        priceRange: '$$$',
        description: 'Historic hotel with colonial architecture.',
        affiliateLink: '#'
      },
      {
        id: 'desert-nights-ecocamp',
        name: 'Desert Nights Ecocamp',
        type: 'unique',
        location: 'Huacachina',
        priceRange: '$$$',
        description: 'Glamping tents with real beds and pool access.',
        affiliateLink: '#'
      },
      {
        id: 'hotel-las-dunas',
        name: 'Hotel Las Dunas',
        type: 'luxury',
        location: 'Ica (nearby)',
        priceRange: '$$$$',
        description: 'Resort with multiple pools and activities.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Peruvian Sol (PEN)',
      dailyBudget: '$40 - $80 USD',
      visaInfo: 'Same as Peru.',
      internetSpeed: 'Spotty in the oasis.',
      transportation: 'Walk everywhere; taxi to Ica.',
      safety: 'Safe, but watch out for rogue dune buggies.'
    },
    digitalNomadInfo: {
      bestCities: ['Ica (better internet)'],
      costOfLiving: 'Low',
      coworkingAreas: ['Hotel lobbies'],
      visaOptions: 'Tourist visa.',
      longTermStay: 'Not recommended for work; too noisy/sandy.'
    },
    localFood: [
      { name: 'Tejas', description: 'Pecan, caramel, and chocolate treat.' },
      { name: 'Pisco Sour', description: 'The local spirit is made right here.' },
      { name: 'Carapulcra', description: 'Dried potato stew with pork.' },
      { name: 'Sopa Seca', description: 'Spaghetti with pesto/achiote sauce.' },
      { name: 'Pallares', description: 'Giant butter bean salad.' }
    ],
    photoSuggestions: {
      hero: 'Sunset over the dunes looking at oasis',
      city: ['Colorful boats on the lagoon'],
      nature: ['Endless sand dunes'],
      culture: ['Buggy drivers preparing for tour']
    }
  },
  {
    id: 'paracas',
    slug: 'paracas',
    name: 'Paracas',
    region: 'Americas',
    heroImage: 'https://images.unsplash.com/photo-1569388330292-7a6a84176db0?q=80&w=1200&auto=format&fit=crop',
    heroDescription: 'Where the desert meets the sea. Home to the "Poor Man\'s Galapagos" and stunning reserve landscapes.',
    whyVisit: ['Ballestas Islands', 'National Reserve', 'Kitesurfing', 'Marine Wildlife'],
    bestCities: ['El Chaco'],
    bestSeasons: ['Summer (Dec-Mar)'],
    travelTips: ['Take seasickness pills for the boat', 'Bring a windbreaker', 'Sunscreen is mandatory'],
    cultureOverview: 'A sleepy fishing village turned nature tourism hub.',
    blogArticles: [
      {
        slug: 'ballestas-islands-guide',
        title: 'Visiting the Ballestas Islands',
        intro: 'Penguins, sea lions, and thousands of birds.',
        sections: [
          { title: 'The Boat Ride', content: 'Speedboat tour from the pier.' },
          { title: 'Wildlife', content: 'Spotting the Humboldt penguin.' },
          { title: 'The Candelabra', content: 'Mysterious geoglyph on the cliff.' }
        ],
        tips: ['Sit on the left side of the boat', 'Wear a hat (bird poop risk)'],
        conclusion: 'An incredible wildlife spectacle.'
      },
      {
        slug: 'paracas-reserve-bike',
        title: 'Biking the Paracas National Reserve',
        intro: 'Exploring the alien landscapes on two wheels.',
        sections: [
          { title: 'The Route', content: 'Desert roads to Red Beach.' },
          { title: 'Playa Roja', content: 'Stunning contrast of red sand and blue sea.' },
          { title: 'The Cathedral', content: 'Rock formation viewpoints.' }
        ],
        tips: ['Bring plenty of water', 'Start early to beat the wind'],
        conclusion: 'A challenging but rewarding adventure.'
      },
      {
        slug: 'kitesurfing-paracas',
        title: 'Kitesurfing in Paracas',
        intro: 'Why this is one of the best spots in the world to learn.',
        sections: [
          { title: 'The Wind', content: 'Consistent afternoon winds.' },
          { title: 'Schools', content: 'Where to take lessons.' },
          { title: 'Conditions', content: 'Flat water in the bay.' }
        ],
        tips: ['Book lessons in advance', 'Afternoons are windy'],
        conclusion: 'Get your adrenaline fix on the water.'
      }
    ],
    excursions: [
      {
        id: 'ballestas-islands-tour',
        title: 'Ballestas Islands Boat Tour',
        description: '2-hour wildlife watching tour.',
        location: 'Paracas Pier',
        price: '$15 USD',
        bestTime: '8:00 AM',
        affiliateLink: '#'
      },
      {
        id: 'paracas-reserve-tour',
        title: 'National Reserve Bus Tour',
        description: 'Visit the Red Beach and dramatic cliffs.',
        location: 'Paracas Reserve',
        price: '$15 USD',
        bestTime: '11:00 AM',
        affiliateLink: '#'
      },
      {
        id: 'golden-shadows-trek',
        title: 'Golden Shadows Trek',
        description: 'Sunset hike in the reserve for photographers.',
        location: 'Paracas Reserve',
        price: '$25 USD',
        bestTime: 'Sunset',
        affiliateLink: '#'
      },
      {
        id: 'paracas-buggy',
        title: 'Paracas Dune Buggy',
        description: 'Desert adventure in the California dunes.',
        location: 'Paracas Desert',
        price: '$25 USD',
        bestTime: 'Afternoon',
        affiliateLink: '#'
      },
      {
        id: 'kitesurf-lesson',
        title: 'Intro to Kitesurfing',
        description: '2-hour beginner lesson.',
        location: 'Paracas Bay',
        price: '$60 USD',
        bestTime: 'Afternoon',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'hotel-paracas',
        name: 'Hotel Paracas, a Luxury Collection Resort',
        type: 'luxury',
        location: 'Paracas',
        priceRange: '$$$$$',
        description: 'Top-tier luxury with private pools and pier.',
        affiliateLink: '#'
      },
      {
        id: 'kokopelli-paracas',
        name: 'Kokopelli Paracas',
        type: 'hostel',
        location: 'El Chaco',
        priceRange: '$$',
        description: 'Beachfront hostel with a pool and cat.',
        affiliateLink: '#'
      },
      {
        id: 'aranwa-paracas',
        name: 'Aranwa Paracas Resort',
        type: 'luxury',
        location: 'Paracas',
        priceRange: '$$$$',
        description: 'Huge pool and modern facilities.',
        affiliateLink: '#'
      },
      {
        id: 'bamboo-lodge',
        name: 'Bamboo Lodge Paracas',
        type: 'mid-range',
        location: 'El Chaco',
        priceRange: '$$',
        description: 'Cozy, family-run hotel on the boardwalk.',
        affiliateLink: '#'
      },
      {
        id: 'inti-mar',
        name: 'Inti-Mar',
        type: 'unique',
        location: 'Paracas Reserve',
        priceRange: '$$$',
        description: 'Lodge located inside the reserve, very secluded.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Peruvian Sol (PEN)',
      dailyBudget: '$50 - $120 USD',
      visaInfo: 'Same as Peru.',
      internetSpeed: 'Decent in town.',
      transportation: 'Walk in town; tours include transport.',
      safety: 'Safe tourist town.'
    },
    digitalNomadInfo: {
      bestCities: ['Paracas'],
      costOfLiving: 'Moderate',
      coworkingAreas: ['Selina Paracas'],
      visaOptions: 'Tourist visa.',
      longTermStay: 'Relaxing for a week, maybe too quiet for longer.'
    },
    localFood: [
      { name: 'Scallops (Conchas)', description: 'Fresh parmesan scallops are a specialty.' },
      { name: 'Ceviche Mixto', description: 'Mixed seafood ceviche.' },
      { name: 'Jalea', description: 'Fried seafood platter.' },
      { name: 'Arroz con Mariscos', description: 'Peruvian seafood paella.' },
      { name: 'Leche de Tigre', description: 'Concentrated ceviche juice cocktail.' }
    ],
    photoSuggestions: {
      hero: 'Playa Roja contrast',
      city: ['Fishing boats at sunrise'],
      nature: ['Sea lions on rocks', 'The Candelabra geoglyph'],
      culture: ['Pelicans on the pier']
    }
  },
  {
    id: 'puno',
    slug: 'puno',
    name: 'Puno (Lake Titicaca)',
    region: 'Americas',
    heroImage: 'https://images.unsplash.com/photo-1534804865767-f4188cb705e7?q=80&w=1200&auto=format&fit=crop',
    heroDescription: 'The folklore capital of Peru, gateway to the highest navigable lake in the world.',
    whyVisit: ['Lake Titicaca', 'Uros Floating Islands', 'Taquile Island', 'Folklore Festivals'],
    bestCities: ['Puno City'],
    bestSeasons: ['Dry Season (May-Oct)'],
    travelTips: ['It is very cold at night', 'Altitude is extreme (3,800m)', 'Sun is very strong'],
    cultureOverview: 'A region rich in Aymara and Quechua traditions, famous for its colorful dances.',
    blogArticles: [
      {
        slug: 'uros-islands-guide',
        title: 'The Truth About Uros Floating Islands',
        intro: 'A unique way of life built on reeds.',
        sections: [
          { title: 'Construction', content: 'How the islands are made of totora reeds.' },
          { title: 'The People', content: 'Meeting the Uros community.' },
          { title: 'Tourism', content: 'Is it too commercial? My take.' }
        ],
        tips: ['Buy a handicraft to support them', 'Be respectful'],
        conclusion: 'A fascinating cultural experience despite the crowds.'
      },
      {
        slug: 'taquile-island-textiles',
        title: 'Taquile Island: Men Who Knit',
        intro: 'Visiting the island with the best weavers in Peru.',
        sections: [
          { title: 'The Tradition', content: 'Knitting is a male duty here.' },
          { title: 'The Views', content: 'Looking out over the deep blue lake.' },
          { title: 'Lunch', content: 'Fresh trout with a view.' }
        ],
        tips: ['Be prepared for a steep hike', 'No cars on the island'],
        conclusion: 'UNESCO recognized textile art in a stunning setting.'
      },
      {
        slug: 'puno-festivals',
        title: 'Candelaria Festival Guide',
        intro: 'Peru\'s biggest street party.',
        sections: [
          { title: 'The Parade', content: 'Thousands of dancers and musicians.' },
          { title: 'Costumes', content: 'Elaborate masks and outfits.' },
          { title: 'Dates', content: 'Usually in February.' }
        ],
        tips: ['Book accommodation months ahead', 'Prepare for water fights'],
        conclusion: 'An explosion of culture and color.'
      }
    ],
    excursions: [
      {
        id: 'uros-taquile-tour',
        title: 'Uros & Taquile Full Day',
        description: 'Visit floating islands and the weavers island.',
        location: 'Lake Titicaca',
        price: '$25 USD',
        bestTime: '7:00 AM',
        affiliateLink: '#'
      },
      {
        id: 'uros-half-day',
        title: 'Uros Floating Islands Half Day',
        description: 'Short visit to the reed islands.',
        location: 'Lake Titicaca',
        price: '$10 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'sillustani-towers',
        title: 'Sillustani Burial Towers',
        description: 'Pre-Inca funerary towers near a lagoon.',
        location: 'Puno Region',
        price: '$20 USD',
        bestTime: 'Afternoon',
        affiliateLink: '#'
      },
      {
        id: 'kayak-titicaca',
        title: 'Kayaking Lake Titicaca',
        description: 'Paddle through the reeds to Uros.',
        location: 'Puno Bay',
        price: '$35 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'aramu-muru',
        title: 'Aramu Muru Doorway',
        description: 'Mysterious rock portal carved into a cliff.',
        location: 'South of Puno',
        price: '$30 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'titilaka-hotel',
        name: 'Titilaka',
        type: 'luxury',
        location: 'Lake Titicaca (Remote)',
        priceRange: '$$$$$',
        description: 'All-inclusive luxury lodge on a private peninsula.',
        affiliateLink: '#'
      },
      {
        id: 'g-l-puno',
        name: 'GHL Hotel Lago Titicaca',
        type: 'luxury',
        location: 'Puno (Esteves Island)',
        priceRange: '$$$$',
        description: 'Hotel on its own island connected by a bridge.',
        affiliateLink: '#'
      },
      {
        id: 'tierra-viva-puno',
        name: 'Tierra Viva Puno Plaza',
        type: 'mid-range',
        location: 'Puno Center',
        priceRange: '$$$',
        description: 'Comfortable and central, near the pedestrian street.',
        affiliateLink: '#'
      },
      {
        id: 'uros-lodge',
        name: 'Uros Titicaca Lodge',
        type: 'unique',
        location: 'Uros Floating Islands',
        priceRange: '$$$',
        description: 'Sleep on a floating reed island.',
        affiliateLink: '#'
      },
      {
        id: 'bothy-hostel',
        name: 'The Real House / Bothy',
        type: 'hostel',
        location: 'Puno',
        priceRange: '$',
        description: 'Budget friendly with lake views.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Peruvian Sol (PEN)',
      dailyBudget: '$30 - $80 USD',
      visaInfo: 'Same as Peru.',
      internetSpeed: 'Slow.',
      transportation: 'Tricycle taxis are common.',
      safety: 'Safe, but cold at night.'
    },
    digitalNomadInfo: {
      bestCities: ['Puno'],
      costOfLiving: 'Low',
      coworkingAreas: ['Cafes only'],
      visaOptions: 'Tourist visa.',
      longTermStay: 'Not ideal due to cold and altitude.'
    },
    localFood: [
      { name: 'Trucha Frita', description: 'Fried trout from the lake.' },
      { name: 'Quinoa Soup', description: 'Staple warming dish.' },
      { name: 'Chairo', description: 'Thick soup with freeze-dried potatoes (chuño).' },
      { name: 'Queso Frito', description: 'Fried cheese, often served with corn.' },
      { name: 'Muña Tea', description: 'Mint-like herb for digestion and altitude.' }
    ],
    photoSuggestions: {
      hero: 'Reed boat on Lake Titicaca at sunset',
      city: ['Puno Cathedral'],
      nature: ['Deep blue lake water', 'Sillustani towers'],
      culture: ['Uros women in colorful skirts']
    }
  }
];
