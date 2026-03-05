import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApi } from '../lib/api';
import { Destination } from '../types/content';
import ExcursionCard from '../components/ExcursionCard';
import StayCard from '../components/StayCard';
import { motion } from 'motion/react';
import { MapPin, Calendar, Info, Utensils, Camera, BookOpen } from 'lucide-react';

export default function DestinationDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [destination, setDestination] = useState<Destination | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApi(`/api/destinations/${slug}`)
      .then(setDestination)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (!destination) return <div className="p-8 text-center">Destination not found</div>;

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img 
          src={destination.heroImage} 
          alt={destination.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/40 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 md:p-16 text-white max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            {destination.name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 leading-relaxed"
          >
            {destination.heroDescription}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        
        {/* Quick Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="flex items-center gap-2 font-bold text-lg mb-4 text-ocean">
              <MapPin className="w-5 h-5" /> Best Cities
            </h3>
            <div className="flex flex-wrap gap-2">
              {destination.bestCities.map(city => (
                <span key={city} className="bg-slate-100 px-3 py-1 rounded-full text-sm text-slate-700">{city}</span>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="flex items-center gap-2 font-bold text-lg mb-4 text-ocean">
              <Calendar className="w-5 h-5" /> Best Time to Visit
            </h3>
            <div className="flex flex-wrap gap-2">
              {destination.bestSeasons.map(season => (
                <span key={season} className="bg-slate-100 px-3 py-1 rounded-full text-sm text-slate-700">{season}</span>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="flex items-center gap-2 font-bold text-lg mb-4 text-ocean">
              <Info className="w-5 h-5" /> Quick Facts
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><strong>Currency:</strong> {destination.practicalInfo.currency}</li>
              <li><strong>Budget:</strong> {destination.practicalInfo.dailyBudget}</li>
              <li><strong>Visa:</strong> {destination.practicalInfo.visaInfo}</li>
            </ul>
          </div>
        </div>

        {/* Why Visit & Culture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-night">Why Visit {destination.name}?</h2>
            <ul className="space-y-4">
              {destination.whyVisit.map((reason, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-turquoise/20 text-turquoise flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <span className="text-lg text-slate-700">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-sand/30 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold text-night mb-4">Culture Overview</h2>
            <p className="text-slate-700 leading-relaxed">{destination.cultureOverview}</p>
            
            <div className="mt-8">
              <h3 className="font-bold mb-3 flex items-center gap-2"><Utensils className="w-4 h-4" /> Must-Try Food</h3>
              <div className="flex flex-wrap gap-2">
                {destination.localFood.map(food => (
                  <span key={food.name} className="bg-white px-3 py-1 rounded-full text-sm shadow-sm border border-sand">{food.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Blog Articles */}
        <section>
          <h2 className="text-3xl font-bold text-night mb-8 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-ocean" /> Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destination.blogArticles.map((article) => (
              <div key={article.slug} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow group cursor-pointer">
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-night group-hover:text-ocean transition-colors">{article.title}</h3>
                  <p className="text-slate-500 line-clamp-3">{article.intro}</p>
                  <div className="pt-4 text-ocean font-semibold text-sm">Read Article →</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Excursions */}
        <section>
          <h2 className="text-3xl font-bold text-night mb-8">Top Excursions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destination.excursions.map((excursion) => (
              <ExcursionCard key={excursion.id} excursion={excursion} />
            ))}
          </div>
        </section>

        {/* Stays */}
        <section>
          <h2 className="text-3xl font-bold text-night mb-8">Where to Stay</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destination.stays.map((stay) => (
              <StayCard key={stay.id} stay={stay} />
            ))}
          </div>
        </section>

        {/* Photo Spots */}
        <section className="bg-night text-white p-8 md:p-12 rounded-[32px]">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Camera className="w-8 h-8 text-turquoise" /> Best Photo Spots
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-turquoise mb-4">City Vibes</h3>
              <ul className="space-y-2 text-slate-300">
                {destination.photoSuggestions.city.map(spot => <li key={spot}>• {spot}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-turquoise mb-4">Nature & Landscapes</h3>
              <ul className="space-y-2 text-slate-300">
                {destination.photoSuggestions.nature.map(spot => <li key={spot}>• {spot}</li>)}
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
