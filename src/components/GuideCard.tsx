import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export default function GuideCard({ guide }: { guide: any }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-[24px] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={guide.cover_image_url || `https://picsum.photos/seed/guide-${guide.id}/600/800`} 
          alt={guide.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-bold text-night shadow-sm">
          ${guide.price}
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-bold text-lg text-night line-clamp-1 mb-2">{guide.title}</h3>
        <p className="text-sm text-slate-500 line-clamp-2 mb-4 flex-1">{guide.description}</p>
        <button className="w-full flex items-center justify-center space-x-2 bg-night text-white py-3 rounded-xl hover:bg-night/90 transition-colors text-sm font-semibold">
          <Download className="w-4 h-4" />
          <span>Get Guide</span>
        </button>
      </div>
    </motion.div>
  );
}
