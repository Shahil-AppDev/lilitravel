
export interface MapDestination {
  id: string;
  slug: string;
  title: string;
  country: string;
  latitude: number;
  longitude: number;
  coverImage: string;
  type: 'destination' | 'excursion' | 'stay';
  priceTier: '€' | '€€' | '€€€';
  shortDescription: string;
}

export const mapDestinations: MapDestination[] = [
  // PERU
  {
    id: 'peru-cusco',
    slug: 'cusco',
    title: 'Cusco',
    country: 'Peru',
    latitude: -13.5319,
    longitude: -71.9675,
    coverImage: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€€',
    shortDescription: 'Historic capital of the Inca Empire.'
  },
  {
    id: 'peru-machu-picchu',
    slug: 'machu-picchu',
    title: 'Machu Picchu',
    country: 'Peru',
    latitude: -13.1631,
    longitude: -72.5450,
    coverImage: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1000&auto=format&fit=crop',
    type: 'excursion',
    priceTier: '€€€',
    shortDescription: 'The Lost City of the Incas.'
  },
  {
    id: 'peru-lima',
    slug: 'lima',
    title: 'Lima',
    country: 'Peru',
    latitude: -12.0464,
    longitude: -77.0428,
    coverImage: 'https://images.unsplash.com/photo-1531968455001-5c5272a41129?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€€',
    shortDescription: 'Gastronomic capital of the Americas.'
  },
  {
    id: 'peru-huacachina',
    slug: 'huacachina',
    title: 'Huacachina',
    country: 'Peru',
    latitude: -14.0875,
    longitude: -75.7626,
    coverImage: 'https://images.unsplash.com/photo-1588612509806-c7b419445124?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€',
    shortDescription: 'Desert oasis with sand dunes.'
  },
  {
    id: 'peru-paracas',
    slug: 'paracas',
    title: 'Paracas',
    country: 'Peru',
    latitude: -13.8370,
    longitude: -76.2500,
    coverImage: 'https://images.unsplash.com/photo-1569388330292-7a6a84165c6c?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€€',
    shortDescription: 'Where the desert meets the ocean.'
  },
  {
    id: 'peru-puno',
    slug: 'puno',
    title: 'Puno',
    country: 'Peru',
    latitude: -15.8402,
    longitude: -70.0219,
    coverImage: 'https://images.unsplash.com/photo-1534803369686-353569947915?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€',
    shortDescription: 'Gateway to Lake Titicaca.'
  },

  // BOLIVIA
  {
    id: 'bolivia-uyuni',
    slug: 'salar-de-uyuni',
    title: 'Salar de Uyuni',
    country: 'Bolivia',
    latitude: -20.1338,
    longitude: -67.4891,
    coverImage: 'https://images.unsplash.com/photo-1518182170546-07661fd94144?q=80&w=1000&auto=format&fit=crop',
    type: 'excursion',
    priceTier: '€€',
    shortDescription: 'The world\'s largest salt flat.'
  },
  {
    id: 'bolivia-la-paz',
    slug: 'la-paz',
    title: 'La Paz',
    country: 'Bolivia',
    latitude: -16.5000,
    longitude: -68.1500,
    coverImage: 'https://images.unsplash.com/photo-1534234828563-02511c75672d?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€',
    shortDescription: 'Highest administrative capital in the world.'
  },
  {
    id: 'bolivia-sucre',
    slug: 'sucre',
    title: 'Sucre',
    country: 'Bolivia',
    latitude: -19.0333,
    longitude: -65.2627,
    coverImage: 'https://images.unsplash.com/photo-1596423736528-912253330543?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€',
    shortDescription: 'The White City of the Americas.'
  },
  {
    id: 'bolivia-copacabana',
    slug: 'copacabana',
    title: 'Copacabana',
    country: 'Bolivia',
    latitude: -16.1667,
    longitude: -69.0833,
    coverImage: 'https://images.unsplash.com/photo-1591733606346-608027727143?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€',
    shortDescription: 'Lakeside town on Titicaca.'
  },

  // CHILE
  {
    id: 'chile-atacama',
    slug: 'san-pedro-de-atacama',
    title: 'San Pedro de Atacama',
    country: 'Chile',
    latitude: -22.9087,
    longitude: -68.1997,
    coverImage: 'https://images.unsplash.com/photo-1518182383220-72973f536a65?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€€€',
    shortDescription: 'Driest desert in the world.'
  },
  {
    id: 'chile-santiago',
    slug: 'santiago',
    title: 'Santiago',
    country: 'Chile',
    latitude: -33.4489,
    longitude: -70.6693,
    coverImage: 'https://images.unsplash.com/photo-1525184990599-5fccf92f563d?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€€',
    shortDescription: 'Cosmopolitan capital with mountain views.'
  },
  {
    id: 'chile-valparaiso',
    slug: 'valparaiso',
    title: 'Valparaíso',
    country: 'Chile',
    latitude: -33.0472,
    longitude: -71.6127,
    coverImage: 'https://images.unsplash.com/photo-1518182383220-72973f536a65?q=80&w=1000&auto=format&fit=crop', 
    type: 'destination',
    priceTier: '€€',
    shortDescription: 'Colorful bohemian port city.'
  },

  // UNITED STATES
  {
    id: 'usa-nyc',
    slug: 'nyc',
    title: 'New York',
    country: 'United States',
    latitude: 40.7128,
    longitude: -74.0060,
    coverImage: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€€€',
    shortDescription: 'The city that never sleeps.'
  },
  {
    id: 'usa-miami',
    slug: 'miami',
    title: 'Miami',
    country: 'United States',
    latitude: 25.7617,
    longitude: -80.1918,
    coverImage: 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€€€',
    shortDescription: 'Art deco and beaches.'
  },
  {
    id: 'usa-chicago',
    slug: 'chicago',
    title: 'Chicago',
    country: 'United States',
    latitude: 41.8781,
    longitude: -87.6298,
    coverImage: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€€€',
    shortDescription: 'Windy City architecture.'
  },
  {
    id: 'usa-lacrosse',
    slug: 'lacrosse',
    title: 'La Crosse',
    country: 'United States',
    latitude: 43.8014,
    longitude: -91.2396,
    coverImage: 'https://images.unsplash.com/photo-1623169826396-857503463328?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€€',
    shortDescription: 'Riverside charm in Wisconsin.'
  },

  // UNITED KINGDOM
  {
    id: 'uk-london',
    slug: 'london',
    title: 'London',
    country: 'United Kingdom',
    latitude: 51.5074,
    longitude: -0.1278,
    coverImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€€€',
    shortDescription: 'Historic and modern metropolis.'
  },
  {
    id: 'uk-liverpool',
    slug: 'liverpool',
    title: 'Liverpool',
    country: 'United Kingdom',
    latitude: 53.4084,
    longitude: -2.9916,
    coverImage: 'https://images.unsplash.com/photo-1590666687295-654848318e8a?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€€',
    shortDescription: 'Home of The Beatles.'
  },

  // CZECH REPUBLIC
  {
    id: 'cz-prague',
    slug: 'prague',
    title: 'Prague',
    country: 'Czech Republic',
    latitude: 50.0755,
    longitude: 14.4378,
    coverImage: 'https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€€',
    shortDescription: 'City of a Hundred Spires.'
  },

  // SLOVENIA
  {
    id: 'si-ljubljana',
    slug: 'ljubljana',
    title: 'Ljubljana',
    country: 'Slovenia',
    latitude: 46.0569,
    longitude: 14.5058,
    coverImage: 'https://images.unsplash.com/photo-1588537548704-541940989425?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€€',
    shortDescription: 'Green capital of Europe.'
  },

  // ITALY
  {
    id: 'it-rome',
    slug: 'rome',
    title: 'Rome',
    country: 'Italy',
    latitude: 41.9028,
    longitude: 12.4964,
    coverImage: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€€€',
    shortDescription: 'The Eternal City.'
  },
  {
    id: 'it-milan',
    slug: 'milan',
    title: 'Milan',
    country: 'Italy',
    latitude: 45.4642,
    longitude: 9.1900,
    coverImage: 'https://images.unsplash.com/photo-1516149893016-813d9a01d521?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€€€',
    shortDescription: 'Fashion and design capital.'
  },

  // NETHERLANDS
  {
    id: 'nl-amsterdam',
    slug: 'amsterdam',
    title: 'Amsterdam',
    country: 'Netherlands',
    latitude: 52.3676,
    longitude: 4.9041,
    coverImage: 'https://images.unsplash.com/photo-1512470876302-687da745313d?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€€€',
    shortDescription: 'Canals and bicycles.'
  },

  // THAILAND
  {
    id: 'th-bangkok',
    slug: 'bangkok',
    title: 'Bangkok',
    country: 'Thailand',
    latitude: 13.7563,
    longitude: 100.5018,
    coverImage: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€€',
    shortDescription: 'Vibrant street life and shrines.'
  },
  {
    id: 'th-koh-samui',
    slug: 'koh-samui',
    title: 'Koh Samui',
    country: 'Thailand',
    latitude: 9.5120,
    longitude: 100.0136,
    coverImage: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€€',
    shortDescription: 'Tropical paradise island.'
  },

  // VIETNAM
  {
    id: 'vn-hanoi',
    slug: 'hanoi',
    title: 'Hanoi',
    country: 'Vietnam',
    latitude: 21.0285,
    longitude: 105.8542,
    coverImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€',
    shortDescription: 'Centuries-old architecture.'
  },
  {
    id: 'vn-sapa',
    slug: 'sapa',
    title: 'Sapa',
    country: 'Vietnam',
    latitude: 22.3364,
    longitude: 103.8438,
    coverImage: 'https://images.unsplash.com/photo-1523592121529-f6dde35f079e?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€',
    shortDescription: 'Misty mountains and rice terraces.'
  },
  {
    id: 'vn-halong',
    slug: 'halong-bay',
    title: 'Ha Long Bay',
    country: 'Vietnam',
    latitude: 20.9061,
    longitude: 107.0734,
    coverImage: 'https://images.unsplash.com/photo-1504457047772-27faf1c00561?q=80&w=1000&auto=format&fit=crop',
    type: 'excursion',
    priceTier: '€€',
    shortDescription: 'Emerald waters and limestone islands.'
  },
  {
    id: 'vn-hagiang',
    slug: 'ha-giang',
    title: 'Ha Giang',
    country: 'Vietnam',
    latitude: 22.8233,
    longitude: 104.9839,
    coverImage: 'https://images.unsplash.com/photo-1555054363-23d9d3002940?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€',
    shortDescription: 'Dramatic mountain loops.'
  },

  // INDONESIA (BALI)
  {
    id: 'id-uluwatu',
    slug: 'uluwatu',
    title: 'Uluwatu',
    country: 'Indonesia',
    latitude: -8.8149,
    longitude: 115.0884,
    coverImage: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€€',
    shortDescription: 'Cliffside temples and surf.'
  },
  {
    id: 'id-canggu',
    slug: 'canggu',
    title: 'Canggu',
    country: 'Indonesia',
    latitude: -8.6478,
    longitude: 115.1385,
    coverImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€€',
    shortDescription: 'Digital nomad hub.'
  },
  {
    id: 'id-ubud',
    slug: 'ubud',
    title: 'Ubud',
    country: 'Indonesia',
    latitude: -8.5069,
    longitude: 115.2625,
    coverImage: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€€',
    shortDescription: 'Cultural heart of Bali.'
  },
  {
    id: 'id-amed',
    slug: 'amed',
    title: 'Amed',
    country: 'Indonesia',
    latitude: -8.3342,
    longitude: 115.6667,
    coverImage: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€',
    shortDescription: 'Black sand beaches and diving.'
  },

  // MALAYSIA
  {
    id: 'my-kl',
    slug: 'kuala-lumpur',
    title: 'Kuala Lumpur',
    country: 'Malaysia',
    latitude: 3.1390,
    longitude: 101.6869,
    coverImage: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€€',
    shortDescription: 'Petronas Towers and street food.'
  },

  // PHILIPPINES
  {
    id: 'ph-siargao',
    slug: 'siargao',
    title: 'Siargao',
    country: 'Philippines',
    latitude: 9.8940,
    longitude: 126.0458,
    coverImage: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€',
    shortDescription: 'Surfing capital of the Philippines.'
  },
  {
    id: 'ph-davao',
    slug: 'davao',
    title: 'Davao',
    country: 'Philippines',
    latitude: 7.1907,
    longitude: 125.4553,
    coverImage: 'https://images.unsplash.com/photo-1622101666687-9759d643666b?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€',
    shortDescription: 'Durian capital and Mount Apo.'
  },

  // SINGAPORE
  {
    id: 'sg-singapore',
    slug: 'singapore',
    title: 'Singapore',
    country: 'Singapore',
    latitude: 1.3521,
    longitude: 103.8198,
    coverImage: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=1000&auto=format&fit=crop',
    type: 'destination',
    priceTier: '€€€',
    shortDescription: 'Garden city of the future.'
  }
];
