import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DestinationCard({ destination }: { destination: any }) {
  return (
    <Link to={`/destinations/${destination.slug}`}>
      <motion.div 
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.98 }}
        className="group relative w-full aspect-[4/5] rounded-[32px] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
      >
        <img 
          src={destination.cover_image_url || `https://picsum.photos/seed/${destination.id}/800/1000`} 
          alt={destination.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-1 tracking-tight">{destination.title}</h3>
          <div className="flex items-center text-white/90 text-sm font-medium">
            <MapPin className="w-4 h-4 mr-1" />
            {destination.location}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
