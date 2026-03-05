interface PlannerInput {
  destination: string;
  duration: number;
  budget: string;
  travelStyle: string;
  departureCity?: string;
}

interface DailyItinerary {
  day: number;
  title: string;
  morning: {
    activity: string;
    description: string;
    cost: string;
  };
  afternoon: {
    activity: string;
    description: string;
    cost: string;
  };
  evening: {
    activity: string;
    description: string;
    cost: string;
  };
}

interface Excursion {
  title: string;
  description: string;
  duration: string;
  price: string;
  category: string;
  affiliateLink?: string;
}

interface Stay {
  name: string;
  type: string;
  priceRange: string;
  category: 'budget' | 'midrange' | 'luxury';
  location: string;
  amenities: string[];
}

interface FoodRecommendation {
  name: string;
  type: string;
  dish: string;
  priceRange: string;
  description: string;
}

interface PracticalInfo {
  currency: string;
  exchangeRate: string;
  visa: string;
  sim: string;
  transport: string;
  bestTimeToVisit: string;
  language: string;
}

interface MapPoint {
  name: string;
  lat: number;
  lng: number;
  type: 'attraction' | 'restaurant' | 'hotel' | 'activity';
  day?: number;
}

export interface TravelPlan {
  overview: {
    destination: string;
    duration: number;
    budget: string;
    travelStyle: string;
    departureCity?: string;
    summary: string;
    estimatedCost: string;
  };
  itinerary: DailyItinerary[];
  excursions: Excursion[];
  stays: Stay[];
  food: FoodRecommendation[];
  practical: PracticalInfo;
  mapPoints: MapPoint[];
}

const budgetMultipliers = {
  low: 0.7,
  medium: 1.0,
  high: 1.5,
};

const styleDescriptions = {
  budget: 'backpacker-friendly with hostels and street food',
  couple: 'romantic with intimate experiences and nice dining',
  solo: 'social with group activities and solo-friendly spots',
  luxury: 'premium with 5-star hotels and exclusive experiences',
  'digital nomad': 'work-friendly with coworking spaces and reliable WiFi',
};

export async function generateTravelPlan(input: PlannerInput): Promise<TravelPlan> {
  const { destination, duration, budget, travelStyle, departureCity } = input;
  
  const budgetMult = budgetMultipliers[budget.toLowerCase() as keyof typeof budgetMultipliers] || 1.0;
  const styleDesc = styleDescriptions[travelStyle.toLowerCase() as keyof typeof styleDescriptions] || 'comfortable';

  const overview = {
    destination,
    duration,
    budget,
    travelStyle,
    departureCity,
    summary: `A ${duration}-day ${travelStyle.toLowerCase()} adventure in ${destination}, ${styleDesc}. Perfect for travelers seeking authentic experiences while ${budget === 'low' ? 'staying budget-conscious' : budget === 'high' ? 'enjoying premium comfort' : 'balancing quality and value'}.`,
    estimatedCost: calculateEstimatedCost(duration, budget),
  };

  const itinerary = generateItinerary(destination, duration, travelStyle, budget);
  const excursions = generateExcursions(destination, budget, travelStyle);
  const stays = generateStays(destination, budget);
  const food = generateFoodRecommendations(destination, budget);
  const practical = generatePracticalInfo(destination);
  const mapPoints = generateMapPoints(destination, itinerary);

  return {
    overview,
    itinerary,
    excursions,
    stays,
    food,
    practical,
    mapPoints,
  };
}

function calculateEstimatedCost(duration: number, budget: string): string {
  const baseCosts = {
    low: 50,
    medium: 120,
    high: 300,
  };
  
  const dailyCost = baseCosts[budget.toLowerCase() as keyof typeof baseCosts] || 120;
  const total = dailyCost * duration;
  
  return `$${total} - $${Math.round(total * 1.3)}`;
}

function generateItinerary(destination: string, duration: number, style: string, budget: string): DailyItinerary[] {
  const itinerary: DailyItinerary[] = [];
  
  const activities = {
    cultural: ['Visit historic temples', 'Explore old town', 'Museum tour', 'Local market visit', 'Traditional ceremony'],
    adventure: ['Hiking expedition', 'Water sports', 'Bike tour', 'Rock climbing', 'Zip-lining'],
    relaxation: ['Beach time', 'Spa treatment', 'Yoga session', 'Sunset viewing', 'Leisurely walk'],
    food: ['Street food tour', 'Cooking class', 'Wine tasting', 'Local restaurant', 'Food market'],
    social: ['Walking tour', 'Pub crawl', 'Group activity', 'Meetup event', 'Social gathering'],
  };

  for (let i = 1; i <= duration; i++) {
    const isFirstDay = i === 1;
    const isLastDay = i === duration;
    
    itinerary.push({
      day: i,
      title: isFirstDay ? 'Arrival & Orientation' : isLastDay ? 'Final Day & Departure' : `Day ${i} - Exploration`,
      morning: {
        activity: isFirstDay ? 'Arrival & Check-in' : activities.cultural[i % activities.cultural.length],
        description: isFirstDay 
          ? `Arrive in ${destination}, check into accommodation, and get oriented with the neighborhood.`
          : `Start your day exploring the cultural heart of ${destination}. Take your time to soak in the atmosphere.`,
        cost: budget === 'low' ? '$0-10' : budget === 'high' ? '$20-50' : '$10-25',
      },
      afternoon: {
        activity: isLastDay ? 'Last-minute shopping' : activities.adventure[(i + 1) % activities.adventure.length],
        description: isLastDay
          ? 'Pick up souvenirs and enjoy final moments in the city before departure.'
          : `Experience the adventurous side of ${destination}. Book in advance for best rates.`,
        cost: budget === 'low' ? '$15-30' : budget === 'high' ? '$80-150' : '$40-70',
      },
      evening: {
        activity: activities.food[i % activities.food.length],
        description: `Savor the local cuisine at ${budget === 'low' ? 'street food stalls' : budget === 'high' ? 'a fine dining restaurant' : 'a popular local eatery'}.`,
        cost: budget === 'low' ? '$5-15' : budget === 'high' ? '$50-100' : '$20-40',
      },
    });
  }
  
  return itinerary;
}

function generateExcursions(destination: string, budget: string, style: string): Excursion[] {
  const priceRanges = {
    low: ['$25-40', '$30-50', '$40-60', '$50-80'],
    medium: ['$60-100', '$80-120', '$100-150', '$120-180'],
    high: ['$200-300', '$250-400', '$300-500', '$400-600'],
  };

  const prices = priceRanges[budget.toLowerCase() as keyof typeof priceRanges] || priceRanges.medium;

  return [
    {
      title: `${destination} City Walking Tour`,
      description: 'Comprehensive guided tour through historic districts, hidden gems, and local markets with expert commentary.',
      duration: '3-4 hours',
      price: prices[0],
      category: 'Cultural',
      affiliateLink: 'https://example.com/book-walking-tour',
    },
    {
      title: 'Adventure Day Trip',
      description: 'Full-day excursion to nearby natural attractions. Includes transportation, guide, and equipment.',
      duration: 'Full day',
      price: prices[1],
      category: 'Adventure',
      affiliateLink: 'https://example.com/book-adventure',
    },
    {
      title: 'Culinary Experience',
      description: 'Hands-on cooking class with market visit. Learn to prepare authentic local dishes.',
      duration: '4-5 hours',
      price: prices[2],
      category: 'Food & Culture',
      affiliateLink: 'https://example.com/book-cooking',
    },
    {
      title: 'Sunset & Evening Tour',
      description: 'Scenic sunset viewing followed by evening entertainment and dinner at a local hotspot.',
      duration: '4 hours',
      price: prices[3],
      category: 'Entertainment',
      affiliateLink: 'https://example.com/book-sunset',
    },
  ];
}

function generateStays(destination: string, budget: string): Stay[] {
  return [
    {
      name: `${destination} Backpackers Hostel`,
      type: 'Hostel',
      priceRange: '$15-30/night',
      category: 'budget',
      location: 'City Center',
      amenities: ['Free WiFi', 'Common Kitchen', 'Social Events', 'Lockers', '24/7 Reception'],
    },
    {
      name: `${destination} Boutique Hotel`,
      type: 'Hotel',
      priceRange: '$80-150/night',
      category: 'midrange',
      location: 'Historic District',
      amenities: ['Free WiFi', 'Breakfast Included', 'Rooftop Terrace', 'Concierge', 'Airport Transfer'],
    },
    {
      name: `${destination} Luxury Resort`,
      type: 'Resort',
      priceRange: '$300-600/night',
      category: 'luxury',
      location: 'Beachfront',
      amenities: ['Spa', 'Pool', 'Fine Dining', 'Butler Service', 'Private Beach', 'Gym'],
    },
  ];
}

function generateFoodRecommendations(destination: string, budget: string): FoodRecommendation[] {
  return [
    {
      name: 'Local Street Food Market',
      type: 'Street Food',
      dish: 'Traditional street snacks and local specialties',
      priceRange: '$2-8',
      description: 'Experience authentic flavors at the bustling night market. Try the local favorites!',
    },
    {
      name: 'Family-Run Restaurant',
      type: 'Local Restaurant',
      dish: 'Regional signature dishes',
      priceRange: '$10-25',
      description: 'Home-style cooking passed down through generations. Ask for daily specials.',
    },
    {
      name: 'Trendy Fusion Bistro',
      type: 'Modern Dining',
      dish: 'Contemporary fusion cuisine',
      priceRange: '$25-50',
      description: 'Modern takes on traditional recipes with international influences.',
    },
    {
      name: 'Fine Dining Experience',
      type: 'Upscale Restaurant',
      dish: 'Tasting menu with wine pairing',
      priceRange: '$80-150',
      description: 'Michelin-recommended restaurant showcasing the best of local gastronomy.',
    },
  ];
}

function generatePracticalInfo(destination: string): PracticalInfo {
  const currencies: Record<string, any> = {
    'Bali': { currency: 'Indonesian Rupiah (IDR)', rate: '1 USD = 15,500 IDR' },
    'Paris': { currency: 'Euro (EUR)', rate: '1 USD = 0.92 EUR' },
    'Tokyo': { currency: 'Japanese Yen (JPY)', rate: '1 USD = 150 JPY' },
    'default': { currency: 'Local Currency', rate: 'Check current rates' },
  };

  const info = currencies[destination] || currencies.default;

  return {
    currency: info.currency,
    exchangeRate: info.rate,
    visa: 'Check visa requirements for your nationality. Many countries offer visa-on-arrival or e-visa options.',
    sim: 'Airport SIM cards available ($10-30 for tourist plans). Alternatively, use eSIM services like Airalo.',
    transport: 'Mix of public transport, ride-sharing apps, and walking. Consider getting a transport card for savings.',
    bestTimeToVisit: 'Shoulder seasons (spring/fall) offer best weather and fewer crowds.',
    language: 'English widely spoken in tourist areas. Learning basic local phrases is appreciated.',
  };
}

function generateMapPoints(destination: string, itinerary: DailyItinerary[]): MapPoint[] {
  const baseCoordinates: Record<string, { lat: number; lng: number }> = {
    'Bali': { lat: -8.3405, lng: 115.0920 },
    'Paris': { lat: 48.8566, lng: 2.3522 },
    'Tokyo': { lat: 35.6762, lng: 139.6503 },
    'default': { lat: 0, lng: 0 },
  };

  const base = baseCoordinates[destination] || baseCoordinates.default;
  const points: MapPoint[] = [];

  points.push({
    name: `${destination} City Center`,
    lat: base.lat,
    lng: base.lng,
    type: 'attraction',
  });

  for (let i = 0; i < Math.min(itinerary.length, 5); i++) {
    points.push({
      name: itinerary[i].morning.activity,
      lat: base.lat + (Math.random() - 0.5) * 0.1,
      lng: base.lng + (Math.random() - 0.5) * 0.1,
      type: 'attraction',
      day: i + 1,
    });
  }

  points.push({
    name: 'Recommended Hotel Area',
    lat: base.lat + 0.02,
    lng: base.lng + 0.02,
    type: 'hotel',
  });

  points.push({
    name: 'Popular Restaurant District',
    lat: base.lat - 0.02,
    lng: base.lng + 0.02,
    type: 'restaurant',
  });

  return points;
}
