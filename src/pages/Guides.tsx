import { useEffect, useState } from 'react';
import { fetchApi } from '../lib/api';
import GuideCard from '../components/GuideCard';
import { motion } from 'motion/react';

export default function Guides() {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    fetchApi('/api/guides').then(setGuides).catch(console.error);
  }, []);

  return (
    <div className="space-y-8 pb-24">
      <div className="px-2">
        <h1 className="text-4xl font-bold text-night tracking-tight">Travel Guides</h1>
        <p className="text-slate-500 mt-2 text-lg">Curated itineraries and tips from local experts.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {guides.map((guide: any, index) => (
          <motion.div
            key={guide.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <GuideCard guide={guide} />
          </motion.div>
        ))}
        {guides.length === 0 && (
          <div className="col-span-full py-20 text-center">
            <p className="text-slate-400 text-lg">No guides available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
