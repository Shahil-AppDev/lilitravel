import { Destination } from '../../types/content';

export const europeDestinations: Destination[] = [
  {
    id: 'uk',
    slug: 'uk',
    name: 'United Kingdom',
    region: 'Europe',
    heroImage: '/images/destinations/uk-hero.jpg',
    heroDescription: 'A blend of ancient history, royal heritage, and modern culture across four nations.',
    whyVisit: ['London Museums', 'Scottish Highlands', 'Pub Culture', 'Castles'],
    bestCities: ['London', 'Edinburgh', 'Bath', 'Manchester'],
    bestSeasons: ['Summer (Jun-Aug)', 'Spring (Apr-May)'],
    travelTips: ['Book trains in advance for cheaper fares', 'Carry an umbrella', 'Tipping is optional but appreciated'],
    cultureOverview: 'Known for politeness, queuing, and a love for tea and football.',
    blogArticles: [
      {
        slug: 'london-budget-guide',
        title: 'London on a Budget: Free Museums & More',
        intro: 'How to enjoy one of the world\'s most expensive cities for less.',
        sections: [
          { title: 'Free Museums', content: 'British Museum, Tate Modern, V&A.' },
          { title: 'Parks', content: 'Hyde Park, Regents Park.' },
          { title: 'Markets', content: 'Borough Market for samples.' }
        ],
        tips: ['Use Oyster card', 'Walk the South Bank'],
        conclusion: 'London offers incredible value if you know where to look.'
      },
      {
        slug: 'scotland-road-trip',
        title: 'Driving the North Coast 500',
        intro: 'Scotland\'s answer to Route 66.',
        sections: [
          { title: 'Inverness', content: 'Start and end point.' },
          { title: 'Applecross', content: 'Dramatic mountain pass.' },
          { title: 'Castles', content: 'Dunrobin and Eilean Donan.' }
        ],
        tips: ['Watch out for sheep', 'Book accommodation early'],
        conclusion: 'One of the most scenic drives in the world.'
      },
      {
        slug: 'cotswolds-villages',
        title: 'Prettiest Villages in the Cotswolds',
        intro: 'Honey-colored stone and rolling hills.',
        sections: [
          { title: 'Bibury', content: 'Arlington Row cottages.' },
          { title: 'Bourton-on-the-Water', content: 'Venice of the Cotswolds.' },
          { title: 'Castle Combe', content: 'Movie set perfection.' }
        ],
        tips: ['Rent a car', 'Visit mid-week'],
        conclusion: 'Quintessential English countryside charm.'
      }
    ],
    excursions: [
      {
        id: 'tower-london',
        title: 'Tower of London Tour',
        description: 'See the Crown Jewels and meet the Yeoman Warders.',
        location: 'London',
        price: '£30 GBP',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'stonehenge-bath',
        title: 'Stonehenge & Bath Day Trip',
        description: 'Ancient stones and Roman baths.',
        location: 'From London',
        price: '£80 GBP',
        bestTime: 'Full Day',
        affiliateLink: '#'
      },
      {
        id: 'edinburgh-castle',
        title: 'Edinburgh Castle Skip-the-Line',
        description: 'Explore the fortress dominating the skyline.',
        location: 'Edinburgh',
        price: '£20 GBP',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'harry-potter-studio',
        title: 'Harry Potter Studio Tour',
        description: 'Behind the scenes of the movies.',
        location: 'Watford',
        price: '£50 GBP',
        bestTime: 'Book months ahead',
        affiliateLink: '#'
      },
      {
        id: 'lake-district-cruise',
        title: 'Lake Windermere Cruise',
        description: 'Scenic boat ride in the Lake District.',
        location: 'Windermere',
        price: '£15 GBP',
        bestTime: 'Summer',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'savoy-london',
        name: 'The Savoy',
        type: 'luxury',
        location: 'London',
        priceRange: '$$$$$',
        description: 'Iconic luxury hotel on the Strand.',
        affiliateLink: '#'
      },
      {
        id: 'wombats-london',
        name: 'Wombat\'s City Hostel',
        type: 'hostel',
        location: 'London',
        priceRange: '$$',
        description: 'Modern, clean hostel near Tower Bridge.',
        affiliateLink: '#'
      },
      {
        id: 'gleneagles',
        name: 'Gleneagles Hotel',
        type: 'luxury',
        location: 'Auchterarder, Scotland',
        priceRange: '$$$$$',
        description: 'Famous golf resort and spa.',
        affiliateLink: '#'
      },
      {
        id: 'yotel-edinburgh',
        name: 'YOTEL Edinburgh',
        type: 'mid-range',
        location: 'Edinburgh',
        priceRange: '$$$',
        description: 'Smart, compact cabins in the city center.',
        affiliateLink: '#'
      },
      {
        id: 'treehouse-hotel',
        name: 'Treehouse Hotel',
        type: 'unique',
        location: 'London',
        priceRange: '$$$$',
        description: 'Whimsical, nature-inspired hotel with great views.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Pound Sterling (GBP)',
      dailyBudget: '£80 - £200+ GBP',
      visaInfo: 'Visa-free for 6 months for many Western countries.',
      internetSpeed: 'Excellent (5G widely available).',
      transportation: 'London Tube is extensive; trains connect cities well.',
      safety: 'Very safe; standard city precautions apply.'
    },
    digitalNomadInfo: {
      bestCities: ['London', 'Manchester', 'Bristol', 'Edinburgh'],
      costOfLiving: 'High (£2,500+/month in London)',
      coworkingAreas: ['WeWork', 'Second Home', 'Uncommon'],
      visaOptions: 'Standard visitor visa allows remote work for home employer (check rules).',
      longTermStay: 'SpareRoom is good for finding flatshares.'
    },
    localFood: [
      { name: 'Fish and Chips', description: 'Battered cod or haddock with chunky fries.' },
      { name: 'Full English Breakfast', description: 'Eggs, bacon, sausage, beans, toast, mushrooms, tomato.' },
      { name: 'Sunday Roast', description: 'Roast meat, potatoes, Yorkshire pudding, gravy, veg.' },
      { name: 'Chicken Tikka Masala', description: 'Creamy curry, often called the national dish.' },
      { name: 'Afternoon Tea', description: 'Tea, sandwiches, scones with clotted cream and jam.' }
    ],
    photoSuggestions: {
      hero: 'Big Ben and Parliament',
      city: ['Notting Hill colorful houses', 'Edinburgh Royal Mile'],
      nature: ['Scottish Highlands glen', 'White Cliffs of Dover'],
      culture: ['Changing of the Guard', 'Pub interior']
    }
  },
  {
    id: 'czech-republic',
    slug: 'czech-republic',
    name: 'Czech Republic',
    region: 'Europe',
    heroImage: '/images/destinations/czech-hero.jpg',
    heroDescription: 'Fairytale castles, world-class beer, and the stunning architecture of Prague.',
    whyVisit: ['Prague Architecture', 'Beer Culture', 'Bohemian Switzerland', 'Affordable Luxury'],
    bestCities: ['Prague', 'Český Krumlov', 'Brno', 'Karlovy Vary'],
    bestSeasons: ['Spring (Apr-May)', 'Fall (Sep-Oct)'],
    travelTips: ['Validate your tram ticket', 'Avoid taxis on the street (use apps)', 'Beer is cheaper than water'],
    cultureOverview: 'Rich history, love for music and literature, and a relaxed pub culture.',
    blogArticles: [
      {
        slug: 'prague-3-days',
        title: 'The Perfect 3-Day Prague Itinerary',
        intro: 'From the Castle to the Old Town Square.',
        sections: [
          { title: 'Day 1', content: 'Old Town and Charles Bridge.' },
          { title: 'Day 2', content: 'Prague Castle and Mala Strana.' },
          { title: 'Day 3', content: 'Vyšehrad and riverside beer gardens.' }
        ],
        tips: ['Wake up early for the bridge', 'Try Trdelník'],
        conclusion: 'Prague is magical in every season.'
      },
      {
        slug: 'cesky-krumlov-day-trip',
        title: 'Day Trip to Český Krumlov',
        intro: 'A medieval town straight out of a storybook.',
        sections: [
          { title: 'The Castle', content: 'Second largest in the country.' },
          { title: 'Rafting', content: 'Float down the Vltava river.' },
          { title: 'Old Town', content: 'Wander the winding streets.' }
        ],
        tips: ['Stay overnight to avoid crowds', 'Book bus ahead'],
        conclusion: 'Worth the 3-hour journey from Prague.'
      },
      {
        slug: 'czech-beer-guide',
        title: 'A Guide to Czech Beer Culture',
        intro: 'Why Czechs drink the most beer per capita.',
        sections: [
          { title: 'Pilsner Urquell', content: 'The original pilsner.' },
          { title: 'Microbreweries', content: 'Exploring local craft scenes.' },
          { title: 'Pub Etiquette', content: 'Coasters and tally marks.' }
        ],
        tips: ['Na zdraví! (Cheers)', 'Don\'t mix drinks'],
        conclusion: 'Beer is a way of life here.'
      }
    ],
    excursions: [
      {
        id: 'prague-castle-tour',
        title: 'Prague Castle Guided Tour',
        description: 'Explore the largest ancient castle complex.',
        location: 'Prague',
        price: '€20 EUR',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'kutna-hora-bone-church',
        title: 'Kutná Hora & Bone Church',
        description: 'Visit the Sedlec Ossuary decorated with human bones.',
        location: 'From Prague',
        price: '€40 EUR',
        bestTime: 'Afternoon',
        affiliateLink: '#'
      },
      {
        id: 'beer-spa',
        title: 'Original Beer Spa',
        description: 'Bathe in beer ingredients while drinking unlimited beer.',
        location: 'Prague',
        price: '€80 EUR',
        bestTime: 'Evening',
        affiliateLink: '#'
      },
      {
        id: 'bohemian-switzerland-hike',
        title: 'Bohemian Switzerland National Park',
        description: 'Hike to the Pravčická brána sandstone arch.',
        location: 'Hřensko',
        price: '€60 EUR',
        bestTime: 'Summer',
        affiliateLink: '#'
      },
      {
        id: 'terezin-concentration-camp',
        title: 'Terezín Concentration Camp Tour',
        description: 'Sobering history of WWII.',
        location: 'Terezín',
        price: '€35 EUR',
        bestTime: 'Morning',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'aria-hotel-prague',
        name: 'Aria Hotel Prague',
        type: 'luxury',
        location: 'Prague (Mala Strana)',
        priceRange: '$$$$',
        description: 'Music-themed luxury hotel with private garden access.',
        affiliateLink: '#'
      },
      {
        id: 'sophies-hostel',
        name: 'Sophie\'s Hostel',
        type: 'hostel',
        location: 'Prague',
        priceRange: '$',
        description: 'Chic boutique hostel in New Town.',
        affiliateLink: '#'
      },
      {
        id: 'hotel-ruze',
        name: 'Hotel Růže',
        type: 'luxury',
        location: 'Český Krumlov',
        priceRange: '$$$',
        description: 'Historic 16th-century building.',
        affiliateLink: '#'
      },
      {
        id: 'miss-sophies-olomouc',
        name: 'Miss Sophie\'s Olomouc',
        type: 'mid-range',
        location: 'Olomouc',
        priceRange: '$$',
        description: 'Boutique hotel in a historic building.',
        affiliateLink: '#'
      },
      {
        id: 'dancing-house-hotel',
        name: 'Dancing House Hotel',
        type: 'unique',
        location: 'Prague',
        priceRange: '$$$$',
        description: 'Stay inside the iconic Frank Gehry building.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Czech Koruna (CZK)',
      dailyBudget: '€50 - €120 EUR',
      visaInfo: 'Schengen Area visa rules apply.',
      internetSpeed: 'Fast and reliable.',
      transportation: 'Prague public transport is excellent; trains for intercity.',
      safety: 'Safe, but watch for pickpockets in tourist hotspots.'
    },
    digitalNomadInfo: {
      bestCities: ['Prague', 'Brno', 'Ostrava'],
      costOfLiving: 'Moderate (€1,200 - €1,800/month)',
      coworkingAreas: ['Impact Hub', 'WeWork', 'Opero'],
      visaOptions: 'Digital Nomad Visa (Zivno) is available but complex paperwork.',
      longTermStay: 'Flat rentals can be competitive in Prague.'
    },
    localFood: [
      { name: 'Svíčková', description: 'Beef sirloin in cream sauce with dumplings and cranberries.' },
      { name: 'Guláš', description: 'Hearty beef stew served with bread dumplings.' },
      { name: 'Smažený Sýr', description: 'Fried cheese (usually Edam) with tartare sauce and fries.' },
      { name: 'Trdelník', description: 'Chimney cake rolled in sugar and nuts (touristy but tasty).' },
      { name: 'Pilsner Beer', description: 'The world-famous pale lager.' }
    ],
    photoSuggestions: {
      hero: 'Charles Bridge at dawn',
      city: ['Old Town Square astronomical clock', 'Dancing House'],
      nature: ['Bohemian Switzerland arches', 'Moravian vineyards'],
      culture: ['Beer pouring', 'Marionette theater']
    }
  },
  {
    id: 'slovenia',
    slug: 'slovenia',
    name: 'Slovenia',
    region: 'Europe',
    heroImage: '/images/destinations/slovenia-hero.jpg',
    heroDescription: 'Europe\'s green heart, featuring Lake Bled, caves, and mountains.',
    whyVisit: ['Lake Bled', 'Triglav National Park', 'Sustainable Travel', 'Caves'],
    bestCities: ['Ljubljana', 'Bled', 'Piran', 'Maribor'],
    bestSeasons: ['Summer (Jun-Sep)', 'Winter (Skiing)'],
    travelTips: ['Buy a vignette if driving', 'Drink tap water (it\'s excellent)', 'Explore the wine regions'],
    cultureOverview: 'A mix of Alpine and Mediterranean vibes, very eco-conscious and outdoor-loving.',
    blogArticles: [
      {
        slug: 'lake-bled-guide',
        title: 'Visiting Lake Bled: Fairytale Come to Life',
        intro: 'The island church and the castle on the cliff.',
        sections: [
          { title: 'Pletna Boat', content: 'Row to the island.' },
          { title: 'Bled Cream Cake', content: 'A must-try dessert.' },
          { title: 'Vintgar Gorge', content: 'Walk on wooden paths over the river.' }
        ],
        tips: ['Go early to avoid crowds', 'Hike Ojstrica for the view'],
        conclusion: 'As beautiful as the postcards.'
      },
      {
        slug: 'ljubljana-city-guide',
        title: 'Ljubljana: Europe\'s Greenest Capital',
        intro: 'A car-free center full of dragons and bridges.',
        sections: [
          { title: 'Ljubljana Castle', content: 'Funicular ride to the top.' },
          { title: 'Triple Bridge', content: 'Jože Plečnik\'s masterpiece.' },
          { title: 'Metelkova', content: 'Alternative art center.' }
        ],
        tips: ['Rent a bike', 'Take a free walking tour'],
        conclusion: 'Small, charming, and incredibly livable.'
      },
      {
        slug: 'soca-valley-adventure',
        title: 'Adventures in the Soča Valley',
        intro: 'The emerald river and adrenaline sports.',
        sections: [
          { title: 'Rafting', content: 'White water thrills.' },
          { title: 'Hiking', content: 'The Alpe-Adria trail.' },
          { title: 'History', content: 'WWI remnants in the mountains.' }
        ],
        tips: ['Bring water shoes', 'Respect nature'],
        conclusion: 'An outdoor paradise.'
      }
    ],
    excursions: [
      {
        id: 'postojna-cave',
        title: 'Postojna Cave & Predjama Castle',
        description: 'Ride a train into a massive cave system and see a castle in a cliff.',
        location: 'Postojna',
        price: '€40 EUR',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'lake-bled-tour',
        title: 'Lake Bled & Vintgar Gorge',
        description: 'Day trip to the alpine gems.',
        location: 'From Ljubljana',
        price: '€60 EUR',
        bestTime: 'Summer',
        affiliateLink: '#'
      },
      {
        id: 'soca-rafting',
        title: 'White Water Rafting on Soča River',
        description: 'Paddle down the emerald waters.',
        location: 'Bovec',
        price: '€50 EUR',
        bestTime: 'Summer',
        affiliateLink: '#'
      },
      {
        id: 'ljubljana-food-tour',
        title: 'Ljubljana Food & Wine Tour',
        description: 'Taste local specialties and wines.',
        location: 'Ljubljana',
        price: '€50 EUR',
        bestTime: 'Lunch',
        affiliateLink: '#'
      },
      {
        id: 'piran-sunset',
        title: 'Piran Coastal Trip',
        description: 'Visit the Venetian-style seaside town.',
        location: 'Piran',
        price: 'Free (Self-guided)',
        bestTime: 'Sunset',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'garden-village-bled',
        name: 'Garden Village Bled',
        type: 'unique',
        location: 'Bled',
        priceRange: '$$$$',
        description: 'Eco-resort with treehouses and glamping tents.',
        affiliateLink: '#'
      },
      {
        id: 'hotel-cubo',
        name: 'Hotel Cubo',
        type: 'luxury',
        location: 'Ljubljana',
        priceRange: '$$$$',
        description: 'Modern design hotel in the center.',
        affiliateLink: '#'
      },
      {
        id: 'celica-hostel',
        name: 'Hostel Celica',
        type: 'hostel',
        location: 'Ljubljana',
        priceRange: '$',
        description: 'Converted former prison with artist-designed cells.',
        affiliateLink: '#'
      },
      {
        id: 'nebesa-chalets',
        name: 'Nebesa Chalets',
        type: 'luxury',
        location: 'Kobarid',
        priceRange: '$$$$$',
        description: 'Heavenly views over the Soča valley.',
        affiliateLink: '#'
      },
      {
        id: 'chocolate-village',
        name: 'Chocolate Village by the River',
        type: 'unique',
        location: 'Maribor',
        priceRange: '$$$',
        description: 'Glamping resort dedicated to chocolate.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Euro (EUR)',
      dailyBudget: '€60 - €150 EUR',
      visaInfo: 'Schengen Area visa rules apply.',
      internetSpeed: 'Good throughout the country.',
      transportation: 'Rent a car for best access to nature; buses are reliable.',
      safety: 'One of the safest countries in the world.'
    },
    digitalNomadInfo: {
      bestCities: ['Ljubljana'],
      costOfLiving: 'Moderate (€1,500 - €2,000/month)',
      coworkingAreas: ['Poligon', 'ABC Hub'],
      visaOptions: 'No specific nomad visa, standard Schengen rules.',
      longTermStay: 'Ljubljana is very livable but small.'
    },
    localFood: [
      { name: 'Kremšnita', description: 'Bled cream cake with custard and chantilly cream.' },
      { name: 'Kranjska Klobasa', description: 'Carniolan sausage, a protected entity.' },
      { name: 'Potica', description: 'Rolled dough cake with various fillings (walnut is classic).' },
      { name: 'Štruklji', description: 'Rolled dumplings with sweet or savory fillings.' },
      { name: 'Pumpkin Seed Oil', description: 'Used as a dressing on salads and even vanilla ice cream.' }
    ],
    photoSuggestions: {
      hero: 'Lake Bled with island and mountains',
      city: ['Ljubljana Triple Bridge', 'Piran Tartini Square'],
      nature: ['Soča River emerald water', 'Logar Valley'],
      culture: ['Beekeeping panels', 'Dragon Bridge statues']
    }
  },
  {
    id: 'italy',
    slug: 'italy',
    name: 'Italy',
    region: 'Europe',
    heroImage: '/images/destinations/italy-hero.jpg',
    heroDescription: 'The cradle of the Renaissance, home to unbeatable food, art, and landscapes.',
    whyVisit: ['Art & History', 'Cuisine', 'Amalfi Coast', 'Tuscany'],
    bestCities: ['Rome', 'Florence', 'Venice', 'Milan', 'Naples'],
    bestSeasons: ['Spring (Apr-Jun)', 'Fall (Sep-Oct)'],
    travelTips: ['Coperto is a standard cover charge in restaurants', 'Validate train tickets', 'No cappuccino after 11am'],
    cultureOverview: 'Passionate, family-oriented, and deeply proud of their regional heritage and food.',
    blogArticles: [
      {
        slug: 'rome-in-3-days',
        title: 'Rome in 3 Days: The Ultimate Itinerary',
        intro: 'Walking through history in the Eternal City.',
        sections: [
          { title: 'Ancient Rome', content: 'Colosseum and Forum.' },
          { title: 'Vatican City', content: 'St. Peter\'s and Museums.' },
          { title: 'Trastevere', content: 'Food and nightlife.' }
        ],
        tips: ['Buy Colosseum tickets online', 'Drink from nasoni fountains'],
        conclusion: 'Rome wasn\'t built in a day, but you can see a lot in three.'
      },
      {
        slug: 'florence-art-guide',
        title: 'Art Lover\'s Guide to Florence',
        intro: 'Birthplace of the Renaissance.',
        sections: [
          { title: 'Uffizi Gallery', content: 'Botticelli\'s Birth of Venus.' },
          { title: 'The David', content: 'Michelangelo\'s masterpiece at Accademia.' },
          { title: 'Duomo', content: 'Brunelleschi\'s dome.' }
        ],
        tips: ['Climb the dome', 'Eat gelato at Vivoli'],
        conclusion: 'A living museum.'
      },
      {
        slug: 'amalfi-coast-tips',
        title: 'Tips for Visiting the Amalfi Coast',
        intro: 'Driving the winding roads of Positano and Amalfi.',
        sections: [
          { title: 'Transport', content: 'Ferry vs Bus vs Car.' },
          { title: 'Path of the Gods', content: 'Hiking with a view.' },
          { title: 'Ravello', content: 'Music and gardens.' }
        ],
        tips: ['Avoid August crowds', 'Try Limoncello'],
        conclusion: 'La Dolce Vita at its finest.'
      }
    ],
    excursions: [
      {
        id: 'colosseum-underground',
        title: 'Colosseum Underground Tour',
        description: 'Access restricted areas of the ancient arena.',
        location: 'Rome',
        price: '€80 EUR',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'pompeii-vesuvius',
        title: 'Pompeii & Mt. Vesuvius',
        description: 'Walk the ruins and climb the volcano.',
        location: 'Naples',
        price: '€90 EUR',
        bestTime: 'Full Day',
        affiliateLink: '#'
      },
      {
        id: 'venice-gondola',
        title: 'Venice Gondola Ride',
        description: 'Romantic ride through the canals.',
        location: 'Venice',
        price: '€80 EUR (per boat)',
        bestTime: 'Sunset',
        affiliateLink: '#'
      },
      {
        id: 'tuscany-wine',
        title: 'Chianti Wine Tasting',
        description: 'Visit vineyards in the Tuscan hills.',
        location: 'Florence',
        price: '€70 EUR',
        bestTime: 'Afternoon',
        affiliateLink: '#'
      },
      {
        id: 'cinque-terre-hike',
        title: 'Cinque Terre Hiking Pass',
        description: 'Walk between the five colorful villages.',
        location: 'Cinque Terre',
        price: '€7.50 EUR',
        bestTime: 'Spring/Fall',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'hotel-danieli',
        name: 'Hotel Danieli',
        type: 'luxury',
        location: 'Venice',
        priceRange: '$$$$$',
        description: 'Legendary hotel steps from St. Mark\'s Square.',
        affiliateLink: '#'
      },
      {
        id: 'yellowsquare-rome',
        name: 'YellowSquare Rome',
        type: 'hostel',
        location: 'Rome',
        priceRange: '$$',
        description: 'Party hostel with coworking and cooking classes.',
        affiliateLink: '#'
      },
      {
        id: 'le-sirenuse',
        name: 'Le Sirenuse',
        type: 'luxury',
        location: 'Positano',
        priceRange: '$$$$$',
        description: 'Iconic red hotel with the best views in Positano.',
        affiliateLink: '#'
      },
      {
        id: 'sextantio-matera',
        name: 'Sextantio Le Grotte della Civita',
        type: 'unique',
        location: 'Matera',
        priceRange: '$$$$',
        description: 'Luxury rooms inside ancient caves.',
        affiliateLink: '#'
      },
      {
        id: 'ostello-bello-milano',
        name: 'Ostello Bello',
        type: 'hostel',
        location: 'Milan',
        priceRange: '$$',
        description: 'Famous for its free aperitivo and central location.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Euro (EUR)',
      dailyBudget: '€80 - €250+ EUR',
      visaInfo: 'Schengen Area visa rules apply.',
      internetSpeed: 'Good in cities, can be slow in old buildings.',
      transportation: 'High-speed trains (Frecciarossa) are excellent.',
      safety: 'Watch for pickpockets in Rome/Naples; otherwise safe.'
    },
    digitalNomadInfo: {
      bestCities: ['Rome', 'Milan', 'Florence'],
      costOfLiving: 'High in Milan/Rome, lower in South.',
      coworkingAreas: ['Talent Garden', 'Copernico'],
      visaOptions: 'Digital Nomad Visa recently introduced (check requirements).',
      longTermStay: 'Apartments can be expensive in historic centers.'
    },
    localFood: [
      { name: 'Pizza Napoletana', description: 'Soft, chewy crust with San Marzano tomatoes and mozzarella.' },
      { name: 'Carbonara', description: 'Pasta with egg, pecorino cheese, guanciale, and pepper (no cream!).' },
      { name: 'Gelato', description: 'Artisanal Italian ice cream.' },
      { name: 'Fiorentina Steak', description: 'Thick-cut T-bone steak grilled rare.' },
      { name: 'Risotto alla Milanese', description: 'Creamy rice with saffron.' }
    ],
    photoSuggestions: {
      hero: 'Positano cliffside view',
      city: ['Colosseum at sunset', 'Venice canals'],
      nature: ['Dolomites mountains', 'Tuscan rolling hills'],
      culture: ['Vespa on a cobblestone street', 'Espresso bar scene']
    }
  },
  {
    id: 'spain',
    slug: 'spain',
    name: 'Spain',
    region: 'Europe',
    heroImage: '/images/destinations/spain-hero.jpg',
    heroDescription: 'Passionate culture, sunny beaches, and a lifestyle that celebrates leisure.',
    whyVisit: ['Tapas Culture', 'Architecture', 'Beaches', 'Nightlife'],
    bestCities: ['Barcelona', 'Madrid', 'Seville', 'Valencia'],
    bestSeasons: ['Spring (Apr-Jun)', 'Fall (Sep-Oct)'],
    travelTips: ['Lunch is at 2pm, dinner at 9pm or later', 'Siesta is real in smaller towns', 'Learn a bit of local language (Catalan/Basque)'],
    cultureOverview: 'Laid-back but energetic, focused on social life, food, and family.',
    blogArticles: [
      {
        slug: 'barcelona-gaudi',
        title: 'Gaudí\'s Barcelona: A Modernist Tour',
        intro: 'Exploring the whimsical architecture of Antoni Gaudí.',
        sections: [
          { title: 'Sagrada Família', content: 'The unfinished masterpiece.' },
          { title: 'Park Güell', content: 'Mosaic lizards and city views.' },
          { title: 'Casa Batlló', content: 'The house of bones.' }
        ],
        tips: ['Book Sagrada Família weeks ahead', 'Go early'],
        conclusion: 'Architecture unlike anywhere else.'
      },
      {
        slug: 'andalusia-road-trip',
        title: 'Road Trip Through Andalusia',
        intro: 'White villages and Moorish palaces.',
        sections: [
          { title: 'Seville', content: 'Flamenco and the Alcázar.' },
          { title: 'Granada', content: 'The Alhambra at sunset.' },
          { title: 'Ronda', content: 'The bridge over the gorge.' }
        ],
        tips: ['Visit in spring for flowers', 'Avoid summer heat'],
        conclusion: 'The soul of Spain.'
      },
      {
        slug: 'tapas-guide',
        title: 'How to Eat Tapas Like a Local',
        intro: 'It\'s not just small plates, it\'s a way of life.',
        sections: [
          { title: 'The Rules', content: 'Stand at the bar, throw napkins on floor.' },
          { title: 'Pintxos', content: 'Basque style tapas on bread.' },
          { title: 'What to Order', content: 'Patatas bravas, jamón, croquetas.' }
        ],
        tips: ['Go bar hopping', 'Order vermouth'],
        conclusion: 'The best social dining experience.'
      }
    ],
    excursions: [
      {
        id: 'sagrada-familia',
        title: 'Sagrada Família Fast Track',
        description: 'Skip the line to Gaudí\'s basilica.',
        location: 'Barcelona',
        price: '€30 EUR',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'alhambra-tour',
        title: 'Alhambra & Generalife Tour',
        description: 'Explore the Moorish palace complex.',
        location: 'Granada',
        price: '€40 EUR',
        bestTime: 'Book months ahead',
        affiliateLink: '#'
      },
      {
        id: 'caminito-del-rey',
        title: 'Caminito del Rey Hike',
        description: 'Walk the famous walkway pinned to the gorge walls.',
        location: 'Malaga',
        price: '€25 EUR',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'flamenco-show',
        title: 'Authentic Flamenco Show',
        description: 'Experience the passion of Spanish dance.',
        location: 'Seville',
        price: '€35 EUR',
        bestTime: 'Evening',
        affiliateLink: '#'
      },
      {
        id: 'ibiza-boat-party',
        title: 'Ibiza Beach & Boat Party',
        description: 'Sun, sea, and music.',
        location: 'Ibiza',
        price: '€80 EUR',
        bestTime: 'Summer',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'hotel-arts-barcelona',
        name: 'Hotel Arts Barcelona',
        type: 'luxury',
        location: 'Barcelona',
        priceRange: '$$$$$',
        description: 'Skyscraper hotel on the beach with panoramic views.',
        affiliateLink: '#'
      },
      {
        id: 'toc-hostel-madrid',
        name: 'TOC Hostel Madrid',
        type: 'hostel',
        location: 'Madrid',
        priceRange: '$$',
        description: 'Design hostel in the city center.',
        affiliateLink: '#'
      },
      {
        id: 'parador-de-ronda',
        name: 'Parador de Ronda',
        type: 'luxury',
        location: 'Ronda',
        priceRange: '$$$$',
        description: 'Hotel located right on the edge of the famous gorge.',
        affiliateLink: '#'
      },
      {
        id: 'casa-bonay',
        name: 'Casa Bonay',
        type: 'mid-range',
        location: 'Barcelona',
        priceRange: '$$$',
        description: 'Hip boutique hotel in Eixample.',
        affiliateLink: '#'
      },
      {
        id: 'marques-de-riscal',
        name: 'Hotel Marqués de Riscal',
        type: 'unique',
        location: 'Elciego',
        priceRange: '$$$$$',
        description: 'Frank Gehry designed hotel in a vineyard.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Euro (EUR)',
      dailyBudget: '€70 - €200 EUR',
      visaInfo: 'Schengen Area visa rules apply.',
      internetSpeed: 'Excellent fiber coverage.',
      transportation: 'AVE high-speed trains are fast; buses for local travel.',
      safety: 'Watch for pickpockets in Barcelona; otherwise safe.'
    },
    digitalNomadInfo: {
      bestCities: ['Barcelona', 'Valencia', 'Las Palmas (Canary Islands)'],
      costOfLiving: 'Moderate (€1,500 - €2,500/month)',
      coworkingAreas: ['Betahaus', 'Aticco'],
      visaOptions: 'Digital Nomad Visa available.',
      longTermStay: 'Canary Islands are popular for winter sun.'
    },
    localFood: [
      { name: 'Jamón Ibérico', description: 'Cured ham from acorn-fed pigs.' },
      { name: 'Paella', description: 'Rice dish with rabbit, chicken, and beans (Valencia style).' },
      { name: 'Tortilla Española', description: 'Potato and egg omelet.' },
      { name: 'Gazpacho', description: 'Cold tomato soup.' },
      { name: 'Churros con Chocolate', description: 'Fried dough dipped in thick hot chocolate.' }
    ],
    photoSuggestions: {
      hero: 'Plaza de España in Seville',
      city: ['Park Güell mosaics', 'Madrid Gran Vía'],
      nature: ['Teide Volcano', 'Costa Brava beaches'],
      culture: ['Flamenco dancer', 'Tapas spread']
    }
  },
  {
    id: 'luxembourg',
    slug: 'luxembourg',
    name: 'Luxembourg',
    region: 'Europe',
    heroImage: '/images/destinations/luxembourg-hero.jpg',
    heroDescription: 'A small but mighty grand duchy with dramatic fortifications and lush valleys.',
    whyVisit: ['Free Public Transport', 'Castles', 'Hiking', 'Multicultural Vibe'],
    bestCities: ['Luxembourg City', 'Echternach', 'Vianden'],
    bestSeasons: ['Spring (May-Jun)', 'Summer (Jul-Aug)'],
    travelTips: ['All public transport is free nationwide', 'Visit the Casemates', 'Weekend trips are easy'],
    cultureOverview: 'A melting pot of French, German, and Portuguese influences.',
    blogArticles: [
      {
        slug: 'luxembourg-city-guide',
        title: 'One Day in Luxembourg City',
        intro: 'Exploring the multi-level city.',
        sections: [
          { title: 'The Corniche', content: 'Most beautiful balcony in Europe.' },
          { title: 'Grund', content: 'The lower town by the river.' },
          { title: 'Casemates', content: 'Underground tunnels.' }
        ],
        tips: ['Use the elevators', 'Walk the ramparts'],
        conclusion: 'Small enough to walk, big enough to amaze.'
      },
      {
        slug: 'mullerthal-trail',
        title: 'Hiking Little Switzerland',
        intro: 'Rock formations and forests in Mullerthal.',
        sections: [
          { title: 'Schiessentümpel', content: 'Iconic waterfall and bridge.' },
          { title: 'Trails', content: 'Route 1, 2, and 3.' },
          { title: 'Echternach', content: 'Oldest town in Luxembourg.' }
        ],
        tips: ['Wear good boots', 'Bring a map'],
        conclusion: 'Unexpected nature in the heart of Europe.'
      },
      {
        slug: 'vianden-castle',
        title: 'Visiting Vianden Castle',
        intro: 'One of the largest fortified castles west of the Rhine.',
        sections: [
          { title: 'History', content: 'Romanesque and Gothic styles.' },
          { title: 'Chairlift', content: 'Views over the valley.' },
          { title: 'Victor Hugo', content: 'The writer\'s connection.' }
        ],
        tips: ['Take the chairlift up', 'Walk down'],
        conclusion: 'A true fairytale castle.'
      }
    ],
    excursions: [
      {
        id: 'luxembourg-walking-tour',
        title: 'Luxembourg Old Town Walking Tour',
        description: 'Discover the UNESCO World Heritage fortifications.',
        location: 'Luxembourg City',
        price: '€15 EUR',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'vianden-castle-entry',
        title: 'Vianden Castle Ticket',
        description: 'Entry to the stunning hilltop castle.',
        location: 'Vianden',
        price: '€10 EUR',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'moselle-wine-tasting',
        title: 'Moselle Valley Wine Tasting',
        description: 'Sample Crémant and Riesling.',
        location: 'Remich',
        price: '€25 EUR',
        bestTime: 'Afternoon',
        affiliateLink: '#'
      },
      {
        id: 'hop-on-hop-off-lux',
        title: 'Hop-on Hop-off Bus',
        description: 'See the European quarter and old town.',
        location: 'Luxembourg City',
        price: '€18 EUR',
        bestTime: 'Day',
        affiliateLink: '#'
      },
      {
        id: 'mullerthal-hike',
        title: 'Mullerthal Guided Hike',
        description: 'Explore the rocky landscapes.',
        location: 'Echternach',
        price: '€40 EUR',
        bestTime: 'Spring/Summer',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'hotel-le-place-darmes',
        name: 'Hotel Le Place d\'Armes',
        type: 'luxury',
        location: 'Luxembourg City',
        priceRange: '$$$$$',
        description: 'Relais & Châteaux hotel in the city center.',
        affiliateLink: '#'
      },
      {
        id: 'youth-hostel-luxembourg',
        name: 'Youth Hostel Luxembourg City',
        type: 'hostel',
        location: 'Luxembourg City (Pfaffenthal)',
        priceRange: '$',
        description: 'Modern hostel located at the bottom of the valley.',
        affiliateLink: '#'
      },
      {
        id: 'mama-shelter-lux',
        name: 'Mama Shelter',
        type: 'mid-range',
        location: 'Luxembourg City (Kirchberg)',
        priceRange: '$$$',
        description: 'Fun, quirky design hotel near European institutions.',
        affiliateLink: '#'
      },
      {
        id: 'chateau-durso',
        name: 'Chateau d\'Urspelt',
        type: 'luxury',
        location: 'Clervaux',
        priceRange: '$$$$',
        description: 'Stay in a restored 18th-century castle.',
        affiliateLink: '#'
      },
      {
        id: 'camping-martbusch',
        name: 'Camping Martbusch',
        type: 'unique',
        location: 'Mullerthal',
        priceRange: '$$',
        description: 'Pods and camping right on the hiking trails.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Euro (EUR)',
      dailyBudget: '€80 - €200 EUR',
      visaInfo: 'Schengen Area visa rules apply.',
      internetSpeed: 'Excellent.',
      transportation: 'FREE public transport (trains, buses, trams).',
      safety: 'Very safe.'
    },
    digitalNomadInfo: {
      bestCities: ['Luxembourg City'],
      costOfLiving: 'Very High (€2,500+/month)',
      coworkingAreas: ['Silversquare', 'Spaces'],
      visaOptions: 'Standard Schengen; no specific nomad visa.',
      longTermStay: 'Rent is very expensive.'
    },
    localFood: [
      { name: 'Judd mat Gaardebounen', description: 'Smoked pork collar with broad beans.' },
      { name: 'Gromperekichelcher', description: 'Fried potato pancakes (popular at markets).' },
      { name: 'Rieslingspaschtéit', description: 'Meat pie with Riesling jelly.' },
      { name: 'Kniddelen', description: 'Flour dumplings with bacon and cream.' },
      { name: 'Quetschentaart', description: 'Plum tart.' }
    ],
    photoSuggestions: {
      hero: 'Grund district view from Corniche',
      city: ['Philharmonie building', 'Adolphe Bridge'],
      nature: ['Schiessentümpel waterfall', 'Moselle vineyards'],
      culture: ['Grand Ducal Palace guard', 'Christmas market']
    }
  },
  {
    id: 'netherlands',
    slug: 'netherlands',
    name: 'Netherlands',
    region: 'Europe',
    heroImage: '/images/destinations/netherlands-hero.jpg',
    heroDescription: 'Canals, windmills, tulips, and a cycling culture like no other.',
    whyVisit: ['Canals', 'Art Museums', 'Cycling', 'Tulip Fields'],
    bestCities: ['Amsterdam', 'Rotterdam', 'Utrecht', 'The Hague'],
    bestSeasons: ['Spring (Apr-May for tulips)', 'Summer (Jun-Aug)'],
    travelTips: ['Watch out for bikes when walking', 'Book Anne Frank House 6 weeks ahead', 'Explore beyond Amsterdam'],
    cultureOverview: 'Direct, tolerant, efficient, and cozy (Gezellig).',
    blogArticles: [
      {
        slug: 'amsterdam-beyond-red-light',
        title: 'Amsterdam: Beyond the Red Light District',
        intro: 'Discovering the charming neighborhoods of Jordaan and De Pijp.',
        sections: [
          { title: 'Jordaan', content: 'Art galleries and cafes.' },
          { title: 'Vondelpark', content: 'The city\'s backyard.' },
          { title: 'Museumplein', content: 'Van Gogh and Rijksmuseum.' }
        ],
        tips: ['Rent a bike', 'Eat apple pie at Winkel 43'],
        conclusion: 'A city of culture and beauty.'
      },
      {
        slug: 'giethoorn-day-trip',
        title: 'Giethoorn: The Village with No Roads',
        intro: 'Boating through the Dutch Venice.',
        sections: [
          { title: 'Rent a Whisper Boat', content: 'Silent electric boats.' },
          { title: 'Thatched Roofs', content: 'Traditional farmhouses.' },
          { title: 'Canals', content: 'Navigating the waterways.' }
        ],
        tips: ['Go early', 'Respect residents\' privacy'],
        conclusion: 'A peaceful escape from the city.'
      },
      {
        slug: 'rotterdam-architecture',
        title: 'Rotterdam: Modern Architecture Hub',
        intro: 'The cool, industrial contrast to Amsterdam.',
        sections: [
          { title: 'Cube Houses', content: 'Yellow tilted homes.' },
          { title: 'Markthal', content: 'Horseshoe-shaped food market.' },
          { title: 'Erasmus Bridge', content: 'The Swan.' }
        ],
        tips: ['Take the water taxi', 'Visit Depot Boijmans'],
        conclusion: 'Innovation on every corner.'
      }
    ],
    excursions: [
      {
        id: 'amsterdam-canal-cruise',
        title: 'Amsterdam Canal Cruise',
        description: 'See the city from the water.',
        location: 'Amsterdam',
        price: '€20 EUR',
        bestTime: 'Sunset',
        affiliateLink: '#'
      },
      {
        id: 'keukenhof-gardens',
        title: 'Keukenhof Tulip Gardens',
        description: 'Millions of tulips in bloom (Spring only).',
        location: 'Lisse',
        price: '€20 EUR',
        bestTime: 'April',
        affiliateLink: '#'
      },
      {
        id: 'zaanse-schans',
        title: 'Zaanse Schans Windmills',
        description: 'Historic windmills and clog making.',
        location: 'Zaandam',
        price: 'Free (Museums cost extra)',
        bestTime: 'Morning',
        affiliateLink: '#'
      },
      {
        id: 'anne-frank-house',
        title: 'Anne Frank House',
        description: 'The hiding place of the Frank family.',
        location: 'Amsterdam',
        price: '€16 EUR',
        bestTime: 'Book weeks ahead',
        affiliateLink: '#'
      },
      {
        id: 'kinderdijk-bike',
        title: 'Kinderdijk Bike Tour',
        description: 'Cycle past UNESCO windmills.',
        location: 'Kinderdijk',
        price: '€15 EUR (Bike rental)',
        bestTime: 'Summer',
        affiliateLink: '#'
      }
    ],
    stays: [
      {
        id: 'pulitzer-amsterdam',
        name: 'Pulitzer Amsterdam',
        type: 'luxury',
        location: 'Amsterdam',
        priceRange: '$$$$$',
        description: 'Set within 25 restored canal houses.',
        affiliateLink: '#'
      },
      {
        id: 'clinknoord',
        name: 'ClinkNOORD',
        type: 'hostel',
        location: 'Amsterdam',
        priceRange: '$$',
        description: 'Modern hostel in a former lab, just a ferry ride from Central.',
        affiliateLink: '#'
      },
      {
        id: 'hotel-new-york',
        name: 'Hotel New York',
        type: 'unique',
        location: 'Rotterdam',
        priceRange: '$$$',
        description: 'Former head office of Holland America Line.',
        affiliateLink: '#'
      },
      {
        id: 'crane-hotel-faralda',
        name: 'Crane Hotel Faralda',
        type: 'unique',
        location: 'Amsterdam',
        priceRange: '$$$$$',
        description: 'Luxury suites inside a harbor crane.',
        affiliateLink: '#'
      },
      {
        id: 'stayokay-utrecht',
        name: 'Stayokay Utrecht Centrum',
        type: 'hostel',
        location: 'Utrecht',
        priceRange: '$$',
        description: 'Clean, central hostel on the Neude square.',
        affiliateLink: '#'
      }
    ],
    practicalInfo: {
      currency: 'Euro (EUR)',
      dailyBudget: '€80 - €200 EUR',
      visaInfo: 'Schengen Area visa rules apply.',
      internetSpeed: 'Excellent.',
      transportation: 'Trains (NS) are frequent; biking is the best local way.',
      safety: 'Very safe; watch for bike theft.'
    },
    digitalNomadInfo: {
      bestCities: ['Amsterdam', 'Rotterdam', 'Utrecht'],
      costOfLiving: 'High (€2,500+/month)',
      coworkingAreas: ['WeWork', 'B. Amsterdam', 'Spaces'],
      visaOptions: 'DAFT treaty for US citizens allows self-employment.',
      longTermStay: 'Housing crisis makes finding apartments hard.'
    },
    localFood: [
      { name: 'Stroopwafel', description: 'Waffle cookie with caramel syrup filling.' },
      { name: 'Haring', description: 'Raw herring served with onions and pickles.' },
      { name: 'Bitterballen', description: 'Deep-fried ragout balls, perfect with beer.' },
      { name: 'Poffertjes', description: 'Mini fluffy pancakes with butter and powdered sugar.' },
      { name: 'Kaas (Cheese)', description: 'Gouda, Edam, and more.' }
    ],
    photoSuggestions: {
      hero: 'Amsterdam canals with bikes',
      city: ['Rotterdam Cube Houses', 'Utrecht canals'],
      nature: ['Tulip fields in Lisse', 'Hoge Veluwe heathland'],
      culture: ['King\'s Day orange crowds', 'Windmills at Zaanse Schans']
    }
  }
];
