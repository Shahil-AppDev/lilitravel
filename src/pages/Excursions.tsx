import { useEffect, useState } from 'react';
import { fetchApi } from '../lib/api';
import ExcursionCard from '../components/ExcursionCard';
import { motion } from 'motion/react';

export default function Excursions() {
  const [excursions, setExcursions] = useState([]);

  useEffect(() => {
    fetchApi('/api/excursions').then(setExcursions).catch(console.error);
  }, []);

  return (
    <div className="space-y-8 pb-24">
      <div className="px-2">
        <h1 className="text-4xl font-bold text-night tracking-tight">Unforgettable Excursions</h1>
        <p className="text-slate-500 mt-2 text-lg">Book unique experiences hosted by locals.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {excursions.map((exc: any, index) => (
          <motion.div
            key={exc.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <ExcursionCard excursion={exc} />
          </motion.div>
        ))}
        {excursions.length === 0 && (
          <div className="col-span-full py-20 text-center">
            <p className="text-slate-400 text-lg">No excursions found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
