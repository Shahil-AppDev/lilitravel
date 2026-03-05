import { Calendar, Sunrise, Sun, Moon } from 'lucide-react';

interface ItineraryDay {
  day: number;
  title: string;
  morning: string;
  afternoon: string;
  evening: string;
}

interface TripItineraryProps {
  itinerary: ItineraryDay[];
}

export default function TripItinerary({ itinerary }: TripItineraryProps) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
          <Calendar className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Day-by-Day Itinerary</h3>
      </div>

      <div className="space-y-6">
        {itinerary.map((day) => (
          <div key={day.day} className="border-l-4 border-cyan-500 pl-6 pb-6 last:pb-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                {day.day}
              </div>
              <h4 className="text-xl font-bold text-gray-900">{day.title}</h4>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sunrise className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Morning</h5>
                  <p className="text-gray-600 text-sm">{day.morning}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sun className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Afternoon</h5>
                  <p className="text-gray-600 text-sm">{day.afternoon}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Moon className="w-4 h-4 text-indigo-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Evening</h5>
                  <p className="text-gray-600 text-sm">{day.evening}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
