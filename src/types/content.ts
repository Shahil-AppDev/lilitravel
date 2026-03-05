export interface BlogArticle {
  slug: string;
  title: string;
  intro: string;
  sections: {
    title: string;
    content: string;
  }[];
  tips: string[];
  conclusion: string;
  image?: string;
}

export interface Excursion {
  id: string;
  title: string;
  description: string;
  location: string;
  price: string;
  bestTime: string;
  affiliateLink?: string;
  image?: string;
}

export interface Stay {
  id: string;
  name: string;
  type: 'budget' | 'mid-range' | 'luxury' | 'hostel' | 'unique';
  location: string;
  priceRange: string;
  description: string;
  affiliateLink?: string;
  image?: string;
}

export interface PracticalInfo {
  currency: string;
  dailyBudget: string;
  visaInfo: string;
  internetSpeed: string;
  transportation: string;
  safety: string;
}

export interface DigitalNomadInfo {
  bestCities: string[];
  costOfLiving: string;
  coworkingAreas: string[];
  visaOptions: string;
  longTermStay: string;
}

export interface LocalFood {
  name: string;
  description: string;
  image?: string;
}

export interface PhotoSuggestions {
  hero: string;
  city: string[];
  nature: string[];
  culture: string[];
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  region: 'Americas' | 'Europe' | 'Asia' | 'Africa' | 'Oceania';
  heroImage: string;
  heroDescription: string;
  whyVisit: string[];
  bestCities: string[];
  bestSeasons: string[];
  travelTips: string[];
  cultureOverview: string;
  blogArticles: BlogArticle[];
  excursions: Excursion[];
  stays: Stay[];
  practicalInfo: PracticalInfo;
  digitalNomadInfo: DigitalNomadInfo;
  localFood: LocalFood[];
  photoSuggestions: PhotoSuggestions;
}
