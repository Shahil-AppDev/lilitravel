import { ArrowLeft, Sparkles, Lightbulb } from 'lucide-react';
import TikTokScriptCard from './TikTokScriptCard';
import TripItinerary from './TripItinerary';
import ShareButtons from './ShareButtons';

interface TripResultProps {
  trip: any;
  onBack: () => void;
}

export default function TripResult({ trip, onBack }: TripResultProps) {
  const itinerary = typeof trip.itinerary === 'string' ? JSON.parse(trip.itinerary) : trip.itinerary;
  const excursions = typeof trip.excursions === 'string' ? JSON.parse(trip.excursions) : trip.excursions;
  const stays = typeof trip.stays === 'string' ? JSON.parse(trip.stays) : trip.stays;
  const liliTip = trip.lili_tip || excursions?.[0]?.description || "Book early for the best deals!";

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-semibold transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Create Another Trip
      </button>

      <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-pink-500 rounded-2xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">{trip.destination}</h2>
            <p className="text-gray-600">
              {trip.travel_style} • {trip.duration} • {trip.budget} budget
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-50 to-orange-50 border-2 border-pink-200 rounded-2xl p-6 mb-8">
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

        <ShareButtons slug={trip.slug} />
      </div>

      <TikTokScriptCard
        hook={trip.hook}
        script={trip.script}
        caption={trip.caption}
        hashtags={trip.hashtags}
      />

      <TripItinerary itinerary={itinerary} />

      <div className="grid md:grid-cols-2 gap-6">
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
    </div>
  );
}
