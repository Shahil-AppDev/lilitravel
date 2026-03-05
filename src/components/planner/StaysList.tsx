import { Hotel, Wifi, Coffee, Star } from 'lucide-react';

interface StaysListProps {
  stays: any[];
}

export default function StaysList({ stays }: StaysListProps) {
  const categoryColors = {
    budget: 'from-green-500 to-emerald-500',
    midrange: 'from-blue-500 to-cyan-500',
    luxury: 'from-purple-500 to-pink-500',
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-slate-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
          <Hotel className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Where to Stay</h2>
      </div>

      <div className="space-y-4">
        {stays.map((stay, index) => (
          <div key={index} className="bg-gray-50 dark:bg-slate-700 rounded-2xl p-5 border border-gray-100 dark:border-slate-600">
            <div className={`inline-block px-3 py-1 bg-gradient-to-r ${categoryColors[stay.category as keyof typeof categoryColors]} text-white text-xs font-semibold rounded-full mb-3`}>
              {stay.category.toUpperCase()}
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">{stay.name}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
              <span>{stay.type}</span>
              <span>•</span>
              <span>{stay.location}</span>
            </div>
            
            <div className="text-blue-600 dark:text-blue-400 font-bold mb-3">{stay.priceRange}</div>
            
            <div className="flex flex-wrap gap-2">
              {stay.amenities.slice(0, 4).map((amenity: string, i: number) => (
                <span key={i} className="px-2 py-1 bg-white dark:bg-slate-600 text-gray-700 dark:text-gray-300 text-xs rounded-lg border border-gray-200 dark:border-slate-500">
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
