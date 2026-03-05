import { motion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';

export default function ExcursionCard({ excursion }: { excursion: any }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-[24px] p-4 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-5 border border-slate-100"
    >
      <div className="w-full sm:w-40 aspect-square sm:aspect-auto sm:h-40 flex-shrink-0 rounded-[16px] overflow-hidden relative">
        <img 
          src={excursion.image || excursion.image_url || `https://picsum.photos/seed/exc-${excursion.id}/400/400`} 
          alt={excursion.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold text-night shadow-sm sm:hidden">
          {typeof excursion.price === 'number' ? `$${excursion.price}` : excursion.price}
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between py-1">
        <div>
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-lg font-bold text-night line-clamp-1">{excursion.title}</h3>
            <span className="text-lg font-bold text-ocean hidden sm:block">
              {typeof excursion.price === 'number' ? `$${excursion.price}` : excursion.price}
            </span>
          </div>
          <div className="flex items-center text-slate-500 text-sm mb-2">
            <MapPin className="w-4 h-4 mr-1 text-turquoise" />
            {excursion.location}
          </div>
          <p className="text-slate-600 text-sm line-clamp-2">{excursion.description}</p>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="flex items-center justify-center space-x-2 bg-ocean/10 text-ocean px-5 py-2.5 rounded-xl font-semibold hover:bg-ocean hover:text-white transition-colors text-sm w-full sm:w-auto">
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
