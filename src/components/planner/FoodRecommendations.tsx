import { Utensils, DollarSign } from 'lucide-react';

interface FoodRecommendationsProps {
  food: any[];
}

export default function FoodRecommendations({ food }: FoodRecommendationsProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-slate-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
          <Utensils className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Food Spots</h2>
      </div>

      <div className="space-y-4">
        {food.map((item, index) => (
          <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-4 border border-orange-100 dark:border-orange-800">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100">{item.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.type}</p>
              </div>
              <div className="text-orange-600 dark:text-orange-400 font-semibold text-sm">{item.priceRange}</div>
            </div>
            
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 font-medium">{item.dish}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
