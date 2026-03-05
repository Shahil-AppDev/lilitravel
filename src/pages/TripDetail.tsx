import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Loader2, Sparkles, Lightbulb } from 'lucide-react';
import TikTokScriptCard from '../components/TikTokScriptCard';
import TripItinerary from '../components/TripItinerary';
import ShareButtons from '../components/ShareButtons';

export default function TripDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [trip, setTrip] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;

    fetch(`/api/trips/${slug}`)
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading trip...</p>
        </div>
      </div>
    );
  }

  if (error || !trip) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Trip Not Found</h2>
          <Link
            to="/trip-generator"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Generate a Trip
          </Link>
        </div>
      </div>
    );
  }

  const itinerary = typeof trip.itinerary === 'string' ? JSON.parse(trip.itinerary) : trip.itinerary;
  const excursions = typeof trip.excursions === 'string' ? JSON.parse(trip.excursions) : trip.excursions;
  const stays = typeof trip.stays === 'string' ? JSON.parse(trip.stays) : trip.stays;
  const liliTip = trip.lili_tip || excursions?.[0]?.description || "Book early for the best deals!";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-pink-50">
      <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Link
          to="/trip-generator"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-semibold transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Generate Your Own Trip
        </Link>

        <div className="bg-gradient-to-br from-blue-600 via-cyan-600 to-pink-600 rounded-3xl shadow-2xl p-8 text-white mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8" />
            <h1 className="text-4xl font-bold">{trip.destination}</h1>
          </div>
          <p className="text-xl opacity-90 mb-6">
            {trip.travel_style} • {trip.duration} • {trip.budget} budget
          </p>
          <div className="flex items-center gap-4 text-sm opacity-75">
            <span>{trip.views || 0} views</span>
            <span>•</span>
            <span>{trip.shares || 0} shares</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-50 to-orange-50 border-2 border-pink-200 rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-pink-900 mb-2">Lili's Tip</h3>
              <p className="text-pink-800">{liliTip}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Share This Trip</h2>
          <ShareButtons slug={trip.slug} />
        </div>

        <TikTokScriptCard
          hook={trip.hook}
          script={trip.script}
          caption={trip.caption}
          hashtags={trip.hashtags}
        />

        <div className="mt-6">
          <TripItinerary itinerary={itinerary} />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Recommended Excursions</h3>
            <div className="space-y-4">
              {excursions?.map((excursion: any, index: number) => (
                <div key={index} className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900">{excursion.title}</h4>
                    <span className="text-blue-600 font-semibold text-sm">{excursion.price}</span>
                  </div>
                  <p className="text-sm text-gray-600">{excursion.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Where to Stay</h3>
            <div className="space-y-4">
              {stays?.map((stay: any, index: number) => (
                <div key={index} className="p-4 bg-green-50 rounded-2xl border border-green-100">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-gray-900">{stay.title}</h4>
                      <p className="text-sm text-gray-600">{stay.type}</p>
                    </div>
                    <span className="text-green-600 font-semibold text-sm">{stay.priceRange}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/trip-generator"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-pink-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            <Sparkles className="w-6 h-6" />
            Create Your Own Trip
          </Link>
        </div>
      </div>
    </div>
  );
}
