import { ArrowLeft, MapPin, Calendar, DollarSign, Utensils, Info, Map as MapIcon, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import DailyItinerary from './DailyItinerary';
import ExcursionsList from './ExcursionsList';
import StaysList from './StaysList';
import FoodRecommendations from './FoodRecommendations';
import PracticalInfo from './PracticalInfo';
import TripMap from './TripMap';

interface PlannerResultProps {
  plan: any;
  onBack: () => void;
}

export default function PlannerResult({ plan, onBack }: PlannerResultProps) {
  const parsedPlan = typeof plan.generated_plan === 'string' 
    ? JSON.parse(plan.generated_plan) 
    : plan.generated_plan;

  const mapPoints = typeof plan.map_points === 'string'
    ? JSON.parse(plan.map_points)
    : plan.map_points;

  const shareUrl = `${window.location.origin}/trips/${plan.slug}`;

  const handleShare = async () => {
    await fetch(`/api/planner/${plan.slug}/share`, { method: 'POST' });
    
    if (navigator.share) {
      navigator.share({
        title: `My ${parsedPlan.overview.destination} Trip Plan`,
        text: parsedPlan.overview.summary,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Plan Another Trip
        </button>

        <div className="bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 rounded-3xl shadow-2xl p-8 text-white mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">{parsedPlan.overview.destination}</h1>
              <p className="text-xl opacity-90">{parsedPlan.overview.summary}</p>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-2xl font-semibold transition-all"
            >
              <Share2 className="w-5 h-5" />
              Share Trip
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/10 rounded-2xl p-4">
              <Calendar className="w-6 h-6 mb-2" />
              <div className="text-sm opacity-75">Duration</div>
              <div className="text-2xl font-bold">{parsedPlan.overview.duration} days</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <DollarSign className="w-6 h-6 mb-2" />
              <div className="text-sm opacity-75">Budget</div>
              <div className="text-2xl font-bold capitalize">{parsedPlan.overview.budget}</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <MapPin className="w-6 h-6 mb-2" />
              <div className="text-sm opacity-75">Style</div>
              <div className="text-lg font-bold capitalize">{parsedPlan.overview.travelStyle}</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <DollarSign className="w-6 h-6 mb-2" />
              <div className="text-sm opacity-75">Est. Cost</div>
              <div className="text-lg font-bold">{parsedPlan.overview.estimatedCost}</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 space-y-6">
            <DailyItinerary itinerary={parsedPlan.itinerary} />
            <ExcursionsList excursions={parsedPlan.excursions} />
          </div>
          
          <div className="space-y-6">
            <StaysList stays={parsedPlan.stays} />
            <FoodRecommendations food={parsedPlan.food} />
            <PracticalInfo info={parsedPlan.practical} />
          </div>
        </div>

        <TripMap points={mapPoints} destination={parsedPlan.overview.destination} />

        <div className="mt-8 text-center">
          <Link
            to={`/trips/${plan.slug}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            <MapIcon className="w-6 h-6" />
            View Full Trip Page
          </Link>
        </div>
      </div>
    </div>
  );
}
