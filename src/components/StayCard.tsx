import { motion } from 'motion/react';
import { Star, MapPin, Heart } from 'lucide-react';

export default function StayCard({ stay }: { stay: any }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={stay.image || stay.photo_url || `https://picsum.photos/seed/stay-${stay.id}/800/600`} 
          alt={stay.name || stay.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <button className="absolute top-3 right-3 p-2 bg-white/50 backdrop-blur-md rounded-full hover:bg-white transition-colors">
          <Heart className="w-5 h-5 text-white hover:text-sunset fill-transparent hover:fill-sunset transition-all" />
        </button>
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-night shadow-sm flex items-center">
          <Star className="w-3 h-3 text-yellow-500 mr-1 fill-yellow-500" />
          4.9 (128)
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-night line-clamp-1">{stay.name || stay.title}</h3>
          <div className="text-right">
            <span className="block font-bold text-ocean">{stay.priceRange || stay.price_range}</span>
            <span className="text-xs text-slate-400">/ night</span>
          </div>
        </div>
        <div className="flex items-center text-slate-500 text-sm mb-4">
          <MapPin className="w-4 h-4 mr-1 text-turquoise" />
          {stay.location}
        </div>
        <button className="w-full py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 transition-colors text-sm">
          View Details
        </button>
      </div>
    </motion.div>
  );
}
