import { useEffect, useState } from 'react';
import { TrendingUp, Eye, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TrendingTrip {
  id: number;
  slug: string;
  destination: string;
  travel_style: string;
  duration: string;
  shares: number;
  views: number;
}

export default function TrendingTrips() {
  const [trips, setTrips] = useState<TrendingTrip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/trips/trending/list')
      .then((res) => res.json())
      .then((data) => {
        setTrips(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (trips.length === 0) {
    return (
      <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-orange-600" />
          <h3 className="text-lg font-bold text-gray-900">Trending Trips</h3>
        </div>
        <p className="text-gray-600 text-sm">Be the first to generate a trip!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 sticky top-8">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-lg font-bold text-gray-900">Trending This Week</h3>
      </div>

      <div className="space-y-3">
        {trips.slice(0, 5).map((trip, index) => (
          <Link
            key={trip.id}
            to={`/trip/${trip.slug}`}
            className="block p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100 hover:shadow-md transition-all group"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors truncate">
                  {trip.destination}
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  {trip.travel_style} • {trip.duration}
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {trip.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Share2 className="w-3 h-3" />
                    {trip.shares}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
