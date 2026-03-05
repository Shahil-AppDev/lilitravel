interface TripInput {
  destination: string;
  travelStyle: string;
  duration: string;
  budget: string;
}

interface TripContent {
  hook: string;
  script: string;
  caption: string;
  hashtags: string;
  itinerary: Array<{
    day: number;
    title: string;
    morning: string;
    afternoon: string;
    evening: string;
  }>;
  excursions: Array<{
    title: string;
    description: string;
    price: string;
  }>;
  stays: Array<{
    title: string;
    type: string;
    priceRange: string;
  }>;
  liliTip: string;
}

const hooks = {
  budget: [
    "I thought {destination} was expensive until I discovered this...",
    "Visiting {destination} on a budget? Here's the secret...",
    "You won't believe how cheap {destination} can be!",
  ],
  luxury: [
    "This is how you experience {destination} like royalty...",
    "The ultimate luxury guide to {destination}...",
    "Living my best life in {destination}...",
  ],
  couple: [
    "The most romantic spots in {destination}...",
    "Our perfect {duration} in {destination}...",
    "Couple goals in {destination}...",
  ],
  solo: [
    "Solo traveling {destination} was life-changing...",
    "Why {destination} is perfect for solo travelers...",
    "My solo adventure in {destination}...",
  ],
  'digital nomad': [
    "Working remotely from {destination}? Here's what you need to know...",
    "The digital nomad's guide to {destination}...",
    "Why {destination} is the perfect remote work destination...",
  ],
};

const budgetTips = {
  low: "Pro tip: Eat where the locals eat and save 70% on food costs!",
  medium: "Balance is key: splurge on experiences, save on accommodation.",
  high: "Invest in unique experiences you can't get anywhere else.",
};

export async function generateTripContent(input: TripInput): Promise<TripContent> {
  const { destination, travelStyle, duration, budget } = input;
  
  const styleKey = travelStyle.toLowerCase() as keyof typeof hooks;
  const hookTemplates = hooks[styleKey] || hooks.budget;
  const hook = hookTemplates[Math.floor(Math.random() * hookTemplates.length)]
    .replace('{destination}', destination)
    .replace('{duration}', duration);

  const durationDays = duration === '24 hours' ? 1 : duration === '3 days' ? 3 : 7;

  const script = generateScript(destination, travelStyle, duration, budget, hook);
  const caption = generateCaption(destination, travelStyle, budget);
  const hashtags = generateHashtags(destination, travelStyle, budget);
  const itinerary = generateItinerary(destination, durationDays, travelStyle);
  const excursions = generateExcursions(destination, budget);
  const stays = generateStays(destination, budget);
  const liliTip = generateLiliTip(destination, travelStyle);

  return {
    hook,
    script,
    caption,
    hashtags,
    itinerary,
    excursions,
    stays,
    liliTip,
  };
}

function generateScript(destination: string, style: string, duration: string, budget: string, hook: string): string {
  const budgetTip = budgetTips[budget.toLowerCase() as keyof typeof budgetTips] || budgetTips.medium;
  
  return `[0-3s] ${hook}

[3-8s] ${destination} is absolutely stunning, and here's how to experience it perfectly.

[8-18s] First, explore the historic old town at sunrise - zero crowds, pure magic. Then, hit up the local market for authentic street food (trust me on this). Finally, catch sunset at the viewpoint - it's completely free and absolutely breathtaking.

[18-25s] ${budgetTip}

[25-30s] Save this for your ${destination} trip! Follow for more travel hacks. What destination should I cover next?`;
}

function generateCaption(destination: string, style: string, budget: string): string {
  const captions = [
    `Your ultimate ${destination} guide is here! 🌍✨ ${budget} budget, maximum vibes. Who's ready to book?`,
    `POV: You're planning the perfect ${destination} trip 🗺️ Saved you hours of research - you're welcome 😉`,
    `${destination} hits different when you know the secrets 🔥 Drop a 📍 if you're going!`,
  ];
  return captions[Math.floor(Math.random() * captions.length)];
}

function generateHashtags(destination: string, style: string, budget: string): string {
  const base = ['#TravelTok', '#TravelGuide', '#TravelTips', '#Wanderlust', '#TravelCreator'];
  const destTag = `#${destination.replace(/\s+/g, '')}Travel`;
  const styleTag = style === 'budget' ? '#BudgetTravel' : style === 'luxury' ? '#LuxuryTravel' : `#${style.replace(/\s+/g, '')}Travel`;
  const extra = ['#HiddenGems', '#TravelInspo', '#ExploreMore', '#TravelReels'];
  
  return [...base, destTag, styleTag, ...extra.slice(0, 2)].join(' ');
}

function generateItinerary(destination: string, days: number, style: string): TripContent['itinerary'] {
  const itinerary: TripContent['itinerary'] = [];
  
  for (let i = 1; i <= days; i++) {
    if (i === 1) {
      itinerary.push({
        day: 1,
        title: 'Arrival & First Impressions',
        morning: 'Arrive and check into your accommodation. Grab a local breakfast.',
        afternoon: 'Explore the main historic district. Visit key landmarks and get oriented.',
        evening: 'Sunset at the best viewpoint. Dinner at a highly-rated local restaurant.',
      });
    } else if (i === days && days > 1) {
      itinerary.push({
        day: i,
        title: 'Final Day & Departure',
        morning: 'Last-minute souvenir shopping. Visit a local café for breakfast.',
        afternoon: 'Relax at a park or beach. Final photos and memories.',
        evening: 'Departure or farewell dinner with new friends.',
      });
    } else {
      itinerary.push({
        day: i,
        title: `Day ${i} - Deep Dive`,
        morning: 'Early morning adventure - hike, bike tour, or cultural experience.',
        afternoon: 'Main attraction visit. Lunch at a hidden gem restaurant.',
        evening: 'Local experience - cooking class, night market, or live music.',
      });
    }
  }
  
  return itinerary;
}

function generateExcursions(destination: string, budget: string): TripContent['excursions'] {
  const priceRanges = {
    low: ['$15-30', '$20-40', '$25-50'],
    medium: ['$40-80', '$60-100', '$80-120'],
    high: ['$150-250', '$200-350', '$300-500'],
  };
  
  const prices = priceRanges[budget.toLowerCase() as keyof typeof priceRanges] || priceRanges.medium;
  
  return [
    {
      title: `${destination} City Walking Tour`,
      description: 'Guided tour through historic streets with a local expert. Includes tastings and hidden spots.',
      price: prices[0],
    },
    {
      title: 'Sunset Adventure Experience',
      description: 'Kayaking, hiking, or boat tour to the best sunset spot. Small group, unforgettable views.',
      price: prices[1],
    },
    {
      title: 'Cultural Immersion Day',
      description: 'Cooking class, village visit, or artisan workshop. Authentic local experience.',
      price: prices[2],
    },
  ];
}

function generateStays(destination: string, budget: string): TripContent['stays'] {
  const stays = {
    low: [
      { title: 'Cozy Hostel Downtown', type: 'Hostel', priceRange: '$10-25/night' },
      { title: 'Budget Guesthouse', type: 'Guesthouse', priceRange: '$20-35/night' },
      { title: 'Airbnb Private Room', type: 'Airbnb', priceRange: '$25-45/night' },
    ],
    medium: [
      { title: 'Boutique Hotel Central', type: 'Hotel', priceRange: '$60-100/night' },
      { title: 'Modern Airbnb Apartment', type: 'Airbnb', priceRange: '$70-120/night' },
      { title: 'Charming B&B', type: 'B&B', priceRange: '$80-130/night' },
    ],
    high: [
      { title: '5-Star Luxury Resort', type: 'Resort', priceRange: '$250-500/night' },
      { title: 'Premium Boutique Hotel', type: 'Hotel', priceRange: '$300-600/night' },
      { title: 'Exclusive Villa Rental', type: 'Villa', priceRange: '$400-800/night' },
    ],
  };
  
  return stays[budget.toLowerCase() as keyof typeof stays] || stays.medium;
}

function generateLiliTip(destination: string, style: string): string {
  const tips = [
    `Visit ${destination}'s main attractions early morning (before 8am) to avoid crowds and get the best photos!`,
    `The best local food in ${destination} isn't in tourist areas - ask your hotel staff where they eat.`,
    `Download offline maps before you go - WiFi can be spotty in some areas of ${destination}.`,
    `Book accommodations in the old town area for the most authentic ${destination} experience.`,
    `Learn a few basic phrases in the local language - locals really appreciate the effort!`,
  ];
  
  return tips[Math.floor(Math.random() * tips.length)];
}
