
import React from 'react';
import { MapDestination } from '../data/mapDestinations';
import { SlidersHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MapFiltersProps {
  destinations: MapDestination[];
  filters: {
    country: string | null;
    type: string | null;
    budget: string | null;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    country: string | null;
    type: string | null;
    budget: string | null;
  }>>;
}

const MapFilters: React.FC<MapFiltersProps> = ({ destinations, filters, setFilters }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const countries = Array.from(new Set(destinations.map(d => d.country))).sort();
  const types = ['destination', 'excursion', 'stay'];
  const budgets = ['€', '€€', '€€€'];

  const activeFilterCount = Object.values(filters).filter(Boolean).length;

  const clearFilters = () => {
    setFilters({ country: null, type: null, budget: null });
  };

  return (
    <div className="absolute top-4 left-4 z-10">
      <div className="flex gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-lg transition-colors ${
            isOpen || activeFilterCount > 0 
              ? 'bg-blue-600 text-white' 
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          <SlidersHorizontal size={18} />
          <span className="font-medium">Filters</span>
          {activeFilterCount > 0 && (
            <span className="bg-white text-blue-600 text-xs font-bold px-1.5 py-0.5 rounded-full">
              {activeFilterCount}
            </span>
          )}
        </button>

        {activeFilterCount > 0 && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 px-3 py-2 bg-white text-gray-600 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <X size={16} />
            <span className="text-sm">Clear</span>
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 bg-white rounded-2xl shadow-xl p-4 w-72 border border-gray-100"
          >
            <div className="space-y-4">
              {/* Country Filter */}
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
                  Country
                </label>
                <select
                  value={filters.country || ''}
                  onChange={(e) => setFilters(prev => ({ ...prev, country: e.target.value || null }))}
                  className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Countries</option>
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              {/* Type Filter */}
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
                  Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {types.map(type => (
                    <button
                      key={type}
                      onClick={() => setFilters(prev => ({ 
                        ...prev, 
                        type: prev.type === type ? null : type 
                      }))}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${
                        filters.type === type
                          ? 'bg-blue-100 text-blue-700 border border-blue-200'
                          : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Filter */}
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
                  Budget
                </label>
                <div className="flex gap-2">
                  {budgets.map(budget => (
                    <button
                      key={budget}
                      onClick={() => setFilters(prev => ({ 
                        ...prev, 
                        budget: prev.budget === budget ? null : budget 
                      }))}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        filters.budget === budget
                          ? 'bg-green-100 text-green-700 border border-green-200'
                          : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MapFilters;
