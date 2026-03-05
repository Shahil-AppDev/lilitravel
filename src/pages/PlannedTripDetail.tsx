import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Loader2, Share2, MapPin, Calendar, DollarSign } from 'lucide-react';
import DailyItinerary from '../components/planner/DailyItinerary';
import ExcursionsList from '../components/planner/ExcursionsList';
import StaysList from '../components/planner/StaysList';
import FoodRecommendations from '../components/planner/FoodRecommendations';
import PracticalInfo from '../components/planner/PracticalInfo';
import TripMap from '../components/planner/TripMap';

export default function PlannedTripDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [trip, setTrip] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;

    fetch(`/api/planner/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error('Trip not found');
        return res.json();
      })
      .then((data) => {
        setTrip(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  const handleShare = async () => {
    if (!trip) return;
    
    await fetch(`/api/planner/${trip.slug}/share`, { method: 'POST' });
    
    const shareUrl = window.location.href;
    const parsedPlan = typeof trip.generated_plan === 'string' 
      ? JSON.parse(trip.generated_plan) 
      : trip.generated_plan;
    
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-300">Loading trip...</p>
        </div>
      </div>
    );
  }

  if (error || !trip) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Trip Not Found</h2>
          <Link
            to="/planner"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Plan a Trip
          </Link>
        </div>
      </div>
    );
  }

  const parsedPlan = typeof trip.generated_plan === 'string' 
    ? JSON.parse(trip.generated_plan) 
    : trip.generated_plan;

  const mapPoints = typeof trip.map_points === 'string'
    ? JSON.parse(trip.map_points)
    : trip.map_points;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Link
          to="/planner"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Plan Another Trip
        </Link>

        <div className="bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 rounded-3xl shadow-2xl p-8 text-white mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
          
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{parsedPlan.overview.destination}</h1>
                <p className="text-xl opacity-90 max-w-3xl">{parsedPlan.overview.summary}</p>
              </div>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-2xl font-semibold transition-all backdrop-blur-sm"
              >
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <Calendar className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-75">Duration</div>
                <div className="text-2xl font-bold">{parsedPlan.overview.duration} days</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <DollarSign className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-75">Budget</div>
                <div className="text-2xl font-bold capitalize">{parsedPlan.overview.budget}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <MapPin className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-75">Style</div>
                <div className="text-lg font-bold capitalize">{parsedPlan.overview.travelStyle}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <DollarSign className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-75">Est. Cost</div>
                <div className="text-lg font-bold">{parsedPlan.overview.estimatedCost}</div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm opacity-75">
              <span>{trip.views || 0} views</span>
              <span>•</span>
              <span>{trip.shares || 0} shares</span>
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
            to="/planner"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Plan Your Own Trip
          </Link>
        </div>
      </div>
    </div>
  );
}
