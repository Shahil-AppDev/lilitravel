
import React from 'react';
import { MapDestination } from '../data/mapDestinations';
import { X, MapPin, ArrowRight, Compass, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

interface BottomSheetProps {
  destination: MapDestination | null;
  onClose: () => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ destination, onClose }) => {
  if (!destination) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-[0_-8px_30px_rgba(0,0,0,0.12)] z-50 md:hidden max-h-[85vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-white z-10 pt-3 pb-2 px-4 rounded-t-3xl">
          <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-4" />
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900">{destination.title}</h2>
            <button 
              onClick={onClose}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <X size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        <div className="px-4 pb-8">
          <div className="relative h-48 rounded-2xl overflow-hidden mb-6 shadow-md">
            <img 
              src={destination.coverImage} 
              alt={destination.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 uppercase tracking-wide shadow-sm">
              {destination.type}
            </div>
          </div>

          <div className="flex items-center text-gray-500 mb-4">
            <MapPin size={18} className="mr-2 text-blue-500" />
            <span className="text-lg">{destination.country}</span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-green-600 font-bold">{destination.priceTier}</span>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            {destination.shortDescription}
          </p>

          <div className="grid grid-cols-1 gap-3">
            <Link 
              to={`/destinations/${destination.slug}`}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-blue-200"
            >
              Explore Destination
              <ArrowRight size={18} />
            </Link>
            
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium rounded-xl transition-colors">
                <Compass size={18} className="text-orange-500" />
                See Excursions
              </button>
              <button className="flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium rounded-xl transition-colors">
                <Home size={18} className="text-purple-500" />
                See Stays
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BottomSheet;
