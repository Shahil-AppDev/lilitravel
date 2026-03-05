
import React from 'react';
import { MapDestination } from '../data/mapDestinations';
import { X, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DestinationPopupProps {
  destination: MapDestination;
  onClose: () => void;
}

const DestinationPopup: React.FC<DestinationPopupProps> = ({ destination, onClose }) => {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-80 bg-white rounded-2xl shadow-xl overflow-hidden z-20 md:bottom-auto md:top-1/2 md:left-1/2 md:-translate-y-1/2 md:w-96">
      <div className="relative h-48">
        <img 
          src={destination.coverImage} 
          alt={destination.title} 
          className="w-full h-full object-cover"
        />
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 bg-black/40 hover:bg-black/60 rounded-full text-white transition-colors"
        >
          <X size={16} />
        </button>
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-gray-800 uppercase tracking-wide shadow-sm">
          {destination.type}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-gray-900 leading-tight">{destination.title}</h3>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <MapPin size={14} className="mr-1" />
              {destination.country}
            </div>
          </div>
          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-lg border border-yellow-100">
            <span className="text-yellow-600 font-bold text-sm">{destination.priceTier}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {destination.shortDescription}
        </p>
        
        <Link 
          to={`/destinations/${destination.slug}`}
          className="block w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-center font-medium rounded-xl transition-colors shadow-md hover:shadow-lg transform active:scale-95 duration-200"
        >
          Explore Destination
        </Link>
      </div>
    </div>
  );
};

export default DestinationPopup;
