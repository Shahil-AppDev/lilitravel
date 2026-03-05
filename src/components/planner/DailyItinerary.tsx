import { Calendar, Sunrise, Sun, Moon, DollarSign } from 'lucide-react';

interface DailyItineraryProps {
  itinerary: any[];
}

export default function DailyItinerary({ itinerary }: DailyItineraryProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-slate-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
          <Calendar className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Daily Itinerary</h2>
      </div>

      <div className="space-y-6">
        {itinerary.map((day) => (
          <div key={day.day} className="border-l-4 border-blue-500 pl-6 pb-6 last:pb-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                {day.day}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{day.title}</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <Sunrise className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Morning: {day.morning.activity}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{day.morning.description}</p>
                    <div className="flex items-center gap-1 text-sm text-orange-600 dark:text-orange-400">
                      <DollarSign className="w-4 h-4" />
                      <span>{day.morning.cost}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <Sun className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Afternoon: {day.afternoon.activity}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{day.afternoon.description}</p>
                    <div className="flex items-center gap-1 text-sm text-yellow-600 dark:text-yellow-400">
                      <DollarSign className="w-4 h-4" />
                      <span>{day.afternoon.cost}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <Moon className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Evening: {day.evening.activity}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{day.evening.description}</p>
                    <div className="flex items-center gap-1 text-sm text-indigo-600 dark:text-indigo-400">
                      <DollarSign className="w-4 h-4" />
                      <span>{day.evening.cost}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
