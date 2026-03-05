import { Compass, Clock, DollarSign, ExternalLink } from 'lucide-react';

interface ExcursionsListProps {
  excursions: any[];
}

export default function ExcursionsList({ excursions }: ExcursionsListProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-slate-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
          <Compass className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Recommended Excursions</h2>
      </div>

      <div className="grid gap-4">
        {excursions.map((excursion, index) => (
          <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-100 dark:border-purple-800">
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-200 text-xs font-semibold rounded-full mb-2">
                  {excursion.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{excursion.title}</h3>
              </div>
              <div className="text-right">
                <div className="text-purple-600 dark:text-purple-400 font-bold text-lg">{excursion.price}</div>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{excursion.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Clock className="w-4 h-4" />
                <span>{excursion.duration}</span>
              </div>
              
              {excursion.affiliateLink && (
                <a
                  href={excursion.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-sm font-semibold transition-colors"
                >
                  Book Now
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
