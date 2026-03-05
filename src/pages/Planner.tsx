import { Calendar, DollarSign, Loader2, MapPin, Plane, Users } from 'lucide-react';
import { useState } from 'react';
import PlannerResult from '../components/planner/PlannerResult';

interface PlannerFormData {
  destination: string;
  duration: number;
  budget: string;
  travelStyle: string;
  departureCity: string;
}

export default function Planner() {
  const [formData, setFormData] = useState<PlannerFormData>({
    destination: '',
    duration: 7,
    budget: 'medium',
    travelStyle: 'solo',
    departureCity: '',
  });
  const [generatedPlan, setGeneratedPlan] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/planner/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const plan = await response.json();
      setGeneratedPlan(plan);
    } catch (error) {
      console.error('Failed to generate plan:', error);
    } finally {
      setLoading(false);
    }
  };

  const travelStyles = [
    { value: 'budget', label: 'Budget', icon: '💰', desc: 'Backpacker friendly' },
    { value: 'couple', label: 'Couple', icon: '💑', desc: 'Romantic experiences' },
    { value: 'solo', label: 'Solo', icon: '🎒', desc: 'Independent travel' },
    { value: 'luxury', label: 'Luxury', icon: '✨', desc: 'Premium comfort' },
    { value: 'digital nomad', label: 'Digital Nomad', icon: '💻', desc: 'Work & travel' },
  ];

  const budgets = [
    { value: 'low', label: 'Low Budget', range: '$50-80/day' },
    { value: 'medium', label: 'Medium', range: '$100-150/day' },
    { value: 'high', label: 'High Budget', range: '$250+/day' },
  ];

  if (generatedPlan) {
    return <PlannerResult plan={generatedPlan} onBack={() => setGeneratedPlan(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            <Plane className="w-4 h-4" />
            AI Travel Planner
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent mb-4">
            Plan Your Perfect Trip
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get a complete travel itinerary with daily plans, accommodations, food recommendations, and practical tips.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-slate-700">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                Destination
              </label>
              <input
                type="text"
                required
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                placeholder="e.g., Bali, Paris, Tokyo..."
                className="w-full px-6 py-4 text-lg border-2 border-gray-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition-all"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                <Calendar className="w-5 h-5 text-cyan-600" />
                Trip Duration (days)
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
                  aria-label="Trip duration in days"
                  className="flex-1 h-2 bg-gray-200 dark:bg-slate-600 rounded-lg appearance-none cursor-pointer"
                />
                <div className="w-20 text-center">
                  <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">{formData.duration}</span>
                  <p className="text-xs text-gray-500 dark:text-gray-400">days</p>
                </div>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                <Users className="w-5 h-5 text-purple-600" />
                Travel Style
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {travelStyles.map((style) => (
                  <button
                    key={style.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, travelStyle: style.value })}
                    className={`p-4 rounded-2xl border-2 transition-all ${
                      formData.travelStyle === style.value
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 shadow-md'
                        : 'border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500'
                    }`}
                  >
                    <div className="text-3xl mb-2">{style.icon}</div>
                    <div className="font-semibold text-sm text-gray-900 dark:text-gray-100">{style.label}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{style.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
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
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/30 shadow-md'
                        : 'border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500'
                    }`}
                  >
                    <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{budget.label}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{budget.range}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                <Plane className="w-5 h-5 text-orange-600" />
                Departure City (Optional)
              </label>
              <input
                type="text"
                value={formData.departureCity}
                onChange={(e) => setFormData({ ...formData, departureCity: e.target.value })}
                placeholder="e.g., New York, London..."
                className="w-full px-6 py-4 text-lg border-2 border-gray-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !formData.destination}
              className="w-full bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white py-6 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Generating Your Plan...
                </>
              ) : (
                <>
                  <Plane className="w-6 h-6" />
                  Generate Travel Plan
                </>
              )}
            </button>
          </form>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>✨ Powered by AI • Complete itinerary in seconds • Fully customizable</p>
        </div>
      </div>
    </div>
  );
}
