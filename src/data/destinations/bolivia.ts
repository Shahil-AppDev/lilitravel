import { Destination } from '../../types/content';

export const boliviaDestinations: Destination[] = [
  {
    id: 'salar-de-uyuni',
    slug: 'salar-de-uyuni',
    name: 'Salar de Uyuni',
    region: 'Americas',
    heroImage: 'https://images.unsplash.com/photo-1518182170546-07661fd94144?q=80&w=1200&auto=format&fit=crop',
    heroDescription: 'The world\'s largest salt flat, a surreal landscape where the earth meets the sky.',
    whyVisit: ['Perspective Photos', 'Mirror Effect (Rainy Season)', 'Colored Lagoons', 'Stargazing'],
    bestCities: ['Uyuni'],
    bestSeasons: ['Rainy (Dec-Apr) for mirror, Dry (May-Nov) for access'],
    travelTips: ['Bring sunglasses (the white is blinding)', 'Layers are essential', 'Book a reputable tour'],
    cultureOverview: 'A remote region where nature dominates and local communities live in harmony with the harsh environment.',
    blogArticles: [
      {
        slug: 'uyuni-mirror-effect',
        title: 'Chasing the Mirror Effect',
        intro: 'When the salt flat turns into the world\'s largest mirror.',
        sections: [
          { title: 'When to Go', content: 'January to March is best.' },
          { title: 'What to Expect', content: 'Water boots and wet feet.' },
          { title: 'Photography', content: 'How to capture the reflection.' }
        ],
        tips: ['Don\'t go if it\'s storming', 'Protect your electronics'],
        conclusion: 'A bucket list moment you have to see to believe.'
      },
      {
        slug: 'uyuni-3-day-tour',
        title: 'The 3-Day Jeep Tour Explained',
        intro: 'It\'s not just about the salt. The lagoons are the real star.',
        sections: [
          { title: 'Day 1', content: 'Train graveyard and salt flats.' },
          { title: 'Day 2', content: 'Flamingos and red lagoon.' },
          { title: 'Day 3', content: 'Geysers and hot springs.' }
        ],
        tips: ['Bring extra water', 'Sleeping bags are a must'],
        conclusion: 'A rough but rewarding road trip.'
      },
      {
        slug: 'train-graveyard',
        title: 'The Train Graveyard',
        intro: 'A photographer\'s playground of rusting steam engines.',
        sections: [
          { title: 'History', content: 'Abandoned British trains from the mining boom.' },
          { title: 'Climbing', content: 'Yes, you can climb on them.' },
          { title: 'Best Time', content: 'Sunset for dramatic shadows.' }
        ],
        tips: ['Watch out for sharp metal', 'Go early to avoid crowds'],
        conclusion: 'A post-apocalyptic scene in the desert.'
      }
    ],
    excursions: [
      {
        id: 'uyuni-full-day',
        title: 'Full Day Salt Flat Tour',
        description: 'Visit the train graveyard, salt hotel, and Incahuasi island.',
        location: 'Uyuni',
        price: '$50 USD',
        bestTime: '10:00 AM',
        affiliateLink: '#'
      },
      {
        id: 'uyuni-stargazing',
        title: 'Stargazing Tour',
        description: 'See the Milky Way reflected on the salt.',
        location: 'Salar de Uyuni',
        price: '$30 USD',
        bestTime: 'Night',
        affiliateLink: '#'
      },
      {
        id: 'sunset-salt-flats',
        title: 'Sunset on the Salt Flats',
        description: 'Watch the sun dip below the white horizon.',
        location: 'Salar de Uyuni',
        price: '$25 USD',
        bestTime: 'Late Afternoon',
        affiliateLink: '#'
      },
      {
        id: 'tunupa-volcano',
        title: 'Tunupa Volcano Hike',
        description: 'Hike to the viewpoint of the multi-colored volcano.',
        location: 'Coqueza',
        price: '$60 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'galaxy-caves',
        title: 'Galaxy Caves Tour',
        description: 'Ancient underwater caves with unique formations.',
        location: 'Salar de Uyuni',
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
        location: 'Colchani',
        priceRange: '$$$$',
        description: 'The world\'s first hotel made 100% of salt.',
        affiliateLink: '#'
      },
      {
        id: 'luna-salada',
        name: 'Luna Salada Hotel',
        type: 'luxury',
        location: 'Colchani',
        priceRange: '$$$$',
        description: 'Salt hotel with panoramic views of the flats.',
        affiliateLink: '#'
      },
      {
        id: 'hotel-jardines-uyuni',
        name: 'Hotel Jardines de Uyuni',
        type: 'mid-range',
        location: 'Uyuni Town',
        priceRange: '$$',
        description: 'Rustic comfort with a central courtyard.',
        affiliateLink: '#'
      },
      {
        id: 'piedra-blanca',
        name: 'Piedra Blanca Backpackers',
        type: 'hostel',
        location: 'Uyuni Town',
        priceRange: '$',
        description: 'Clean, modern hostel with a good breakfast.',
        affiliateLink: '#'
      },
      {
        id: 'kachi-lodge',
        name: 'Kachi Lodge',
        type: 'luxury',
        location: 'Salar de Uyuni (On the flats)',
        priceRange: '$$$$$',
        description: 'Ultra-luxury geodesic domes right on the salt.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Boliviano (BOB)',
      dailyBudget: '$40 - $100 USD',
      visaInfo: 'Visa on arrival for US citizens ($160).',
      internetSpeed: 'Very poor on the flats.',
      transportation: '4x4 Jeeps are the only way.',
      safety: 'Choose a driver who doesn\'t drink.'
    },
    digitalNomadInfo: {
      bestCities: ['Uyuni (only for a few days)'],
      costOfLiving: 'Low',
      coworkingAreas: ['None'],
      visaOptions: 'Tourist visa.',
      longTermStay: 'Not recommended.'
    },
    localFood: [
      { name: 'Llama Steak', description: 'Lean meat often served with quinoa.' },
      { name: 'Quinoa Soup', description: 'Local staple.' },
      { name: 'Charque', description: 'Dried llama meat.' },
      { name: 'Pique Macho', description: 'Spicy mix of beef and fries.' },
      { name: 'Singani', description: 'Bolivian brandy spirit.' }
    ],
    photoSuggestions: {
      hero: 'Reflection of sky on water over salt',
      city: ['Train graveyard silhouettes'],
      nature: ['Hexagonal salt patterns'],
      culture: ['Salt hotel interior']
    }
  },
  {
    id: 'la-paz',
    slug: 'la-paz',
    name: 'La Paz',
    region: 'Americas',
    heroImage: 'https://images.unsplash.com/photo-1534234828563-025c93f3a88b?q=80&w=1200&auto=format&fit=crop',
    heroDescription: 'The highest administrative capital in the world, a dizzying bowl of red brick buildings and cable cars.',
    whyVisit: ['Mi Teleférico', 'Witches Market', 'Cholita Wrestling', 'Moon Valley'],
    bestCities: ['Sopocachi', 'Zona Sur'],
    bestSeasons: ['Dry Season (May-Oct)'],
    travelTips: ['Take it slow (3,640m altitude)', 'Dress in layers', 'Use the cable cars to get around'],
    cultureOverview: 'A vibrant mix of indigenous Aymara culture and modern city life.',
    blogArticles: [
      {
        slug: 'la-paz-cable-cars',
        title: 'Riding the Sky: Mi Teleférico Guide',
        intro: 'The best public transport system in the world?',
        sections: [
          { title: 'Red Line', content: 'Best views of the city center.' },
          { title: 'Yellow Line', content: 'Connects to the wealthy south.' },
          { title: 'Silver Line', content: 'Views of El Alto.' }
        ],
        tips: ['Cost is only 3 BOB', 'Avoid rush hour'],
        conclusion: 'A sightseeing tour for the price of a bus ticket.'
      },
      {
        slug: 'witches-market',
        title: 'Spells and Potions at the Witches Market',
        intro: 'Dried llama fetuses and love potions.',
        sections: [
          { title: 'Offerings', content: 'Pachamama rituals.' },
          { title: 'Souvenirs', content: 'Alpaca sweaters and textiles.' },
          { title: 'Fortune Telling', content: 'Read your coca leaves.' }
        ],
        tips: ['Ask before taking photos', 'Respect the beliefs'],
        conclusion: 'A glimpse into Andean mysticism.'
      },
      {
        slug: 'cholita-wrestling',
        title: 'Cholita Wrestling: A Sunday Spectacle',
        intro: 'Indigenous women flying from the top ropes.',
        sections: [
          { title: 'The Show', content: 'Theatrical wrestling matches.' },
          { title: 'The Costumes', content: 'Traditional polleras and bowler hats.' },
          { title: 'The Crowd', content: 'Locals and tourists cheering together.' }
        ],
        tips: ['Go on Sunday afternoon', 'Bring a warm jacket'],
        conclusion: 'Bizarre, entertaining, and empowering.'
      }
    ],
    excursions: [
      {
        id: 'death-road-bike',
        title: 'Death Road Mountain Biking',
        description: 'Adrenaline pumping descent from snow to jungle.',
        location: 'La Paz to Coroico',
        price: '$80 USD',
        bestTime: 'Full Day',
        affiliateLink: '#'
      },
      {
        id: 'moon-valley-tour',
        title: 'Moon Valley Tour',
        description: 'Explore the clay spires and canyons.',
        location: 'Mallasa',
        price: '$15 USD',
        bestTime: 'Afternoon',
        affiliateLink: '#'
      },
      {
        id: 'la-paz-walking-tour',
        title: 'Red Cap Walking Tour',
        description: 'City center, San Pedro prison, and markets.',
        location: 'La Paz Center',
        price: '$3 USD (Tip based)',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'cholita-wrestling',
        title: 'Cholita Wrestling Ticket',
        description: 'Entrance and transport to the show.',
        location: 'El Alto',
        price: '$15 USD',
        bestTime: 'Sunday Afternoon',
        affiliateLink: '#'
      },
      {
        id: 'tiwanaku-ruins',
        title: 'Tiwanaku Ruins Day Trip',
        description: 'Visit the pre-Inca archaeological site.',
        location: 'Tiwanaku',
        price: '$30 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'atix-hotel',
        name: 'Atix Hotel',
        type: 'luxury',
        location: 'Zona Sur',
        priceRange: '$$$$',
        description: 'Modern design hotel with a cool facade.',
        affiliateLink: '#'
      },
      {
        id: 'selina-la-paz',
        name: 'Selina La Paz',
        type: 'mid-range',
        location: 'Sopocachi',
        priceRange: '$$',
        description: 'Digital nomad hub in a trendy neighborhood.',
        affiliateLink: '#'
      },
      {
        id: 'wild-rover-la-paz',
        name: 'Wild Rover La Paz',
        type: 'hostel',
        location: 'Center',
        priceRange: '$',
        description: 'Party hostel with an Irish bar.',
        affiliateLink: '#'
      },
      {
        id: 'stannum-boutique',
        name: 'Stannum Boutique Hotel',
        type: 'luxury',
        location: 'Center',
        priceRange: '$$$',
        description: 'Located in a mall with great city views.',
        affiliateLink: '#'
      },
      {
        id: 'loki-hostel',
        name: 'Loki Hostel',
        type: 'hostel',
        location: 'Center',
        priceRange: '$',
        description: 'Another famous party hostel with a view.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Boliviano (BOB)',
      dailyBudget: '$30 - $70 USD',
      visaInfo: 'Visa on arrival for US.',
      internetSpeed: 'Decent in Sopocachi/Zona Sur.',
      transportation: 'Cable cars are best; minibuses are chaotic.',
      safety: 'Watch for pickpockets in the center and El Alto.'
    },
    digitalNomadInfo: {
      bestCities: ['Sopocachi', 'Calacoto'],
      costOfLiving: 'Very Low ($600 - $1,000/month)',
      coworkingAreas: ['Selina', 'CoWork La Paz'],
      visaOptions: 'Tourist visa extensions.',
      longTermStay: 'Apartments are very cheap.'
    },
    localFood: [
      { name: 'Salteñas', description: 'Sweet/savory soup-filled empanada (breakfast only).' },
      { name: 'Sandwich de Chola', description: 'Roast pork sandwich with crackling.' },
      { name: 'Anticucho', description: 'Grilled beef heart with peanut sauce.' },
      { name: 'Api con Pastel', description: 'Purple corn drink with fried cheese pastry.' },
      { name: 'Fricase', description: 'Spicy pork soup.' }
    ],
    photoSuggestions: {
      hero: 'Illimani mountain overlooking the city',
      city: ['Cable car lines crossing the sky'],
      nature: ['Moon Valley spires'],
      culture: ['Cholitas in traditional dress']
    }
  },
  {
    id: 'sucre',
    slug: 'sucre',
    name: 'Sucre',
    region: 'Americas',
    heroImage: 'https://images.unsplash.com/photo-1584066065582-74d39c025342?q=80&w=1200&auto=format&fit=crop',
    heroDescription: 'The White City of the Americas, known for its colonial architecture, chocolate, and eternal spring climate.',
    whyVisit: ['Colonial Architecture', 'Dinosaur Footprints', 'Chocolate', 'Relaxed Vibe'],
    bestCities: ['Sucre Center'],
    bestSeasons: ['Year-round'],
    travelTips: ['Visit the Recoleta for the view', 'Eat all the chocolate', 'Great place to learn Spanish'],
    cultureOverview: 'The constitutional capital of Bolivia, full of history and students.',
    blogArticles: [
      {
        slug: 'sucre-chocolate',
        title: 'A Chocolate Lover\'s Guide to Sucre',
        intro: 'Why Sucre is the chocolate capital of Bolivia.',
        sections: [
          { title: 'Para Ti', content: 'The most famous chocolate shop.' },
          { title: 'Chocolates Taboada', content: 'Traditional flavors.' },
          { title: 'Museum', content: 'Learn the history of cacao.' }
        ],
        tips: ['Try the spicy chocolate', 'Great gifts'],
        conclusion: 'Sweet tooth satisfaction guaranteed.'
      },
      {
        slug: 'cal-orko-dinos',
        title: 'Walking with Dinosaurs at Cal Orck\'o',
        intro: 'The largest collection of dinosaur footprints in the world.',
        sections: [
          { title: 'The Wall', content: 'A vertical wall covered in tracks.' },
          { title: 'The Tour', content: 'Get close to the footprints.' },
          { title: 'The Park', content: 'Life-size dinosaur models.' }
        ],
        tips: ['Go at noon for the best light on tracks', 'Take the Dino Truck'],
        conclusion: 'Jurassic Park is real.'
      },
      {
        slug: 'sucre-viewpoints',
        title: 'Best Views in Sucre',
        intro: 'Where to see the sea of white rooftops.',
        sections: [
          { title: 'La Recoleta', content: 'The classic postcard shot.' },
          { title: 'San Felipe Neri', content: 'Rooftop of an old convent.' },
          { title: 'Bell Tower', content: 'San Francisco church views.' }
        ],
        tips: ['Go for sunset', 'Bring a wide lens'],
        conclusion: 'A photogenic city from every angle.'
      }
    ],
    excursions: [
      {
        id: 'cal-orko-tour',
        title: 'Dino Truck to Cal Orck\'o',
        description: 'Transport and entry to the dinosaur park.',
        location: 'Sucre Outskirts',
        price: '$5 USD',
        bestTime: '11:00 AM',
        affiliateLink: '#'
      },
      {
        id: 'maragua-crater',
        title: 'Maragua Crater Trek',
        description: 'Hike through a colorful crater and dinosaur tracks.',
        location: 'Maragua',
        price: '$40 USD',
        bestTime: 'Full Day',
        affiliateLink: '#'
      },
      {
        id: 'sucre-city-tour',
        title: 'Colonial City Walking Tour',
        description: 'Explore the history and white buildings.',
        location: 'Sucre Center',
        price: '$15 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'tarabuco-market',
        title: 'Tarabuco Sunday Market',
        description: 'Traditional indigenous market (Sundays only).',
        location: 'Tarabuco',
        price: '$20 USD',
        bestTime: 'Sunday Morning',
        affiliateLink: '#'
      },
      {
        id: 'seven-waterfalls',
        title: 'Seven Waterfalls Hike',
        description: 'Adventure hike with swimming spots.',
        location: 'Sucre Outskirts',
        price: '$25 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'parador-santa-maria',
        name: 'Parador Santa Maria la Real',
        type: 'luxury',
        location: 'Center',
        priceRange: '$$$',
        description: 'Stunning colonial mansion with underground spa.',
        affiliateLink: '#'
      },
      {
        id: 'mi-pueblo-samary',
        name: 'Mi Pueblo Samary',
        type: 'mid-range',
        location: 'Center',
        priceRange: '$$$',
        description: 'Boutique hotel with traditional decor.',
        affiliateLink: '#'
      },
      {
        id: 'kultur-berlin',
        name: 'KulturBerlin',
        type: 'hostel',
        location: 'Center',
        priceRange: '$',
        description: 'Party hostel with a garden and nightclub.',
        affiliateLink: '#'
      },
      {
        id: 'villa-antigua',
        name: 'Hotel Villa Antigua',
        type: 'mid-range',
        location: 'Center',
        priceRange: '$$',
        description: 'Restored mansion with a beautiful garden.',
        affiliateLink: '#'
      },
      {
        id: 'colors-house',
        name: 'Colors House',
        type: 'hostel',
        location: 'Center',
        priceRange: '$',
        description: 'Budget friendly and relaxed.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Boliviano (BOB)',
      dailyBudget: '$25 - $60 USD',
      visaInfo: 'Same as Bolivia.',
      internetSpeed: 'Good.',
      transportation: 'Walkable center; taxis are cheap.',
      safety: 'One of the safest cities in Bolivia.'
    },
    digitalNomadInfo: {
      bestCities: ['Sucre'],
      costOfLiving: 'Very Low',
      coworkingAreas: ['CoWork Cafe', 'Joy Ride Cafe'],
      visaOptions: 'Tourist visa.',
      longTermStay: 'Popular for long stays to learn Spanish.'
    },
    localFood: [
      { name: 'Mondongo', description: 'Spicy pork with corn and turmeric sauce.' },
      { name: 'Chorizo Chuquisaqueño', description: 'Local spicy sausage.' },
      { name: 'Chocolates', description: 'Artisanal chocolates.' },
      { name: 'Sopa de Maní', description: 'Peanut soup (best in the market).' },
      { name: 'Refresco de Tumbo', description: 'Passion fruit relative drink.' }
    ],
    photoSuggestions: {
      hero: 'White rooftops from La Recoleta',
      city: ['San Felipe Neri courtyard'],
      nature: ['Maragua Crater colors'],
      culture: ['Tarabuco market textiles']
    }
  },
  {
    id: 'copacabana',
    slug: 'copacabana',
    name: 'Copacabana',
    region: 'Americas',
    heroImage: 'https://images.unsplash.com/photo-1596501046903-8255b3879943?q=80&w=1200&auto=format&fit=crop',
    heroDescription: 'The Bolivian gateway to Lake Titicaca, a spiritual town with stunning sunsets.',
    whyVisit: ['Lake Titicaca', 'Isla del Sol', 'Calvary Hill', 'Trout'],
    bestCities: ['Copacabana Town'],
    bestSeasons: ['Dry Season (May-Oct)'],
    travelTips: ['Hike Calvary Hill for sunset', 'Take a boat to Isla del Sol', 'Eat fresh trout'],
    cultureOverview: 'A mix of Catholic pilgrimage site and ancient Andean beliefs.',
    blogArticles: [
      {
        slug: 'isla-del-sol-hike',
        title: 'Hiking Isla del Sol',
        intro: 'Walking in the footsteps of the Incas.',
        sections: [
          { title: 'North vs South', content: 'Access disputes and best routes.' },
          { title: 'Inca Steps', content: 'Climbing the Yumani stairs.' },
          { title: 'Views', content: 'The Andes across the blue lake.' }
        ],
        tips: ['Stay overnight for the best experience', 'Carry water'],
        conclusion: 'A peaceful escape from the world.'
      },
      {
        slug: 'copacabana-calvary',
        title: 'Sunset at Cerro Calvario',
        intro: 'The best view in town.',
        sections: [
          { title: 'The Climb', content: 'Passing the stations of the cross.' },
          { title: 'The Summit', content: 'Candle rituals and panoramic views.' },
          { title: 'Sunset', content: 'Watching the sun sink into the lake.' }
        ],
        tips: ['Go slow, it is steep', 'Bring a flashlight for the way down'],
        conclusion: 'Worth every breathless step.'
      },
      {
        slug: 'blessing-of-cars',
        title: 'The Blessing of the Cars',
        intro: 'A unique Copacabana tradition.',
        sections: [
          { title: 'The Ritual', content: 'Decorating cars with flowers and beer.' },
          { title: 'The Basilica', content: 'The Moorish-style church.' },
          { title: 'The Vibe', content: 'Celebratory and chaotic.' }
        ],
        tips: ['Happens every day, but busiest on weekends', 'Watch from the side'],
        conclusion: 'Religion meets road safety.'
      }
    ],
    excursions: [
      {
        id: 'isla-del-sol-boat',
        title: 'Isla del Sol Boat Trip',
        description: 'Ferry to the island of the sun.',
        location: 'Copacabana Harbor',
        price: '$10 USD',
        bestTime: '8:30 AM',
        affiliateLink: '#'
      },
      {
        id: 'isla-de-la-luna',
        title: 'Isla de la Luna Tour',
        description: 'Visit the smaller, quieter Moon Island.',
        location: 'Copacabana Harbor',
        price: '$15 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'sampaya-trek',
        title: 'Sampaya Trek',
        description: 'Hike to a preserved stone village.',
        location: 'Sampaya',
        price: '$20 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'floating-islands-bolivia',
        title: 'Bolivian Floating Islands',
        description: 'Visit the smaller reed islands on the Bolivian side.',
        location: 'Copacabana',
        price: '$10 USD',
        bestTime: 'Afternoon',
        affiliateLink: '#'
      },
      {
        id: 'horca-del-inca',
        title: 'Horca del Inca',
        description: 'Pre-Inca astronomical observatory.',
        location: 'Copacabana',
        price: '$3 USD',
        bestTime: 'Morning',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'ecolodge-la-estancia',
        name: 'Ecolodge La Estancia',
        type: 'unique',
        location: 'Isla del Sol',
        priceRange: '$$$',
        description: 'Eco-friendly cottages with incredible views.',
        affiliateLink: '#'
      },
      {
        id: 'hotel-rosario-lago',
        name: 'Hotel Rosario Lago Titicaca',
        type: 'mid-range',
        location: 'Copacabana',
        priceRange: '$$$',
        description: 'Colonial style with lake views.',
        affiliateLink: '#'
      },
      {
        id: 'las-olas',
        name: 'Las Olas',
        type: 'unique',
        location: 'Copacabana',
        priceRange: '$$',
        description: 'Quirky, artistic suites shaped like shells and turtles.',
        affiliateLink: '#'
      },
      {
        id: 'selina-copacabana',
        name: 'Selina Copacabana',
        type: 'mid-range',
        location: 'Copacabana',
        priceRange: '$$',
        description: 'Reliable comfort and coworking.',
        affiliateLink: '#'
      },
      {
        id: 'hostal-la-cupula',
        name: 'Hostal La Cupula',
        type: 'mid-range',
        location: 'Copacabana',
        priceRange: '$$',
        description: 'Cozy rooms with great gardens and views.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Boliviano (BOB)',
      dailyBudget: '$30 - $60 USD',
      visaInfo: 'Same as Bolivia.',
      internetSpeed: 'Slow.',
      transportation: 'Walk everywhere.',
      safety: 'Safe.'
    },
    digitalNomadInfo: {
      bestCities: ['Copacabana'],
      costOfLiving: 'Low',
      coworkingAreas: ['Selina'],
      visaOptions: 'Tourist visa.',
      longTermStay: 'Good for a quiet retreat.'
    },
    localFood: [
      { name: 'Trucha al Ajillo', description: 'Garlic trout.' },
      { name: 'Trucha a la Mantequilla', description: 'Butter trout.' },
      { name: 'Sopa de Quinoa', description: 'Quinoa soup.' },
      { name: 'Pasankalla', description: 'Giant puffed corn snack.' },
      { name: 'Mate de Coca', description: 'Coca tea.' }
    ],
    photoSuggestions: {
      hero: 'Sunset over the lake from Calvary',
      city: ['White Basilica'],
      nature: ['Isla del Sol trails'],
      culture: ['Car blessing ceremony']
    }
  }
];
