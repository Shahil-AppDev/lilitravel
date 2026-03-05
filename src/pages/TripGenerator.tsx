import { useState } from 'react';
import { Sparkles, MapPin, Calendar, DollarSign, Loader2 } from 'lucide-react';
import TripResult from '../components/TripResult';
import TrendingTrips from '../components/TrendingTrips';

interface TripFormData {
  destination: string;
  travelStyle: string;
  duration: string;
  budget: string;
}

export default function TripGenerator() {
  const [formData, setFormData] = useState<TripFormData>({
    destination: '',
    travelStyle: 'budget',
    duration: '3 days',
    budget: 'medium',
  });
  const [generatedTrip, setGeneratedTrip] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/trips/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const trip = await response.json();
      setGeneratedTrip(trip);
    } catch (error) {
      console.error('Failed to generate trip:', error);
    } finally {
      setLoading(false);
    }
  };

  const travelStyles = [
    { value: 'budget', label: 'Budget', icon: '💰' },
    { value: 'couple', label: 'Couple', icon: '💑' },
    { value: 'solo', label: 'Solo', icon: '🎒' },
    { value: 'luxury', label: 'Luxury', icon: '✨' },
    { value: 'digital nomad', label: 'Digital Nomad', icon: '💻' },
  ];

  const durations = [
    { value: '24 hours', label: '24 Hours' },
    { value: '3 days', label: '3 Days' },
    { value: '7 days', label: '7 Days' },
  ];

  const budgets = [
    { value: 'low', label: 'Low Budget', range: '$-$$' },
    { value: 'medium', label: 'Medium', range: '$$-$$$' },
    { value: 'high', label: 'High Budget', range: '$$$-$$$$' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            TikTok Creator Tool
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Trip in 30 Seconds
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Generate viral TikTok travel content instantly. Script, itinerary, and shareable page in seconds.
          </p>
        </div>

        {!generatedTrip ? (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      Destination
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      placeholder="e.g., Bali, Paris, Tokyo..."
                      className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
                      <Sparkles className="w-5 h-5 text-cyan-600" />
                      Travel Style
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {travelStyles.map((style) => (
                        <button
                          key={style.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, travelStyle: style.value })}
                          className={`p-4 rounded-2xl border-2 transition-all ${
                            formData.travelStyle === style.value
                              ? 'border-blue-500 bg-blue-50 shadow-md'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="text-3xl mb-2">{style.icon}</div>
                          <div className="font-semibold text-sm">{style.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
                      <Calendar className="w-5 h-5 text-pink-600" />
                      Trip Duration
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {durations.map((duration) => (
                        <button
                          key={duration.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, duration: duration.value })}
                          className={`py-4 px-6 rounded-2xl border-2 font-semibold transition-all ${
                            formData.duration === duration.value
                              ? 'border-pink-500 bg-pink-50 shadow-md'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {duration.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      Budget Range
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {budgets.map((budget) => (
                        <button
                          key={budget.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: budget.value })}
                          className={`p-4 rounded-2xl border-2 transition-all ${
                            formData.budget === budget.value
                              ? 'border-green-500 bg-green-50 shadow-md'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="font-semibold mb-1">{budget.label}</div>
                          <div className="text-sm text-gray-600">{budget.range}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !formData.destination}
                    className="w-full bg-gradient-to-r from-blue-600 via-cyan-600 to-pink-600 text-white py-6 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        Generating Your Trip...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-6 h-6" />
                        Generate My Trip
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-1">
              <TrendingTrips />
            </div>
          </div>
        ) : (
          <TripResult trip={generatedTrip} onBack={() => setGeneratedTrip(null)} />
        )}
      </div>
    </div>
  );
}
