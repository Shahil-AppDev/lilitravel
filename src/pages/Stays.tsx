import { useEffect, useState } from 'react';
import { fetchApi } from '../lib/api';
import StayCard from '../components/StayCard';
import { motion } from 'motion/react';

export default function Stays() {
  const [stays, setStays] = useState([]);

  useEffect(() => {
    fetchApi('/api/stays').then(setStays).catch(console.error);
  }, []);

  return (
    <div className="space-y-8 pb-24">
      <div className="px-2">
        <h1 className="text-4xl font-bold text-night tracking-tight">Top Stays</h1>
        <p className="text-slate-500 mt-2 text-lg">Hand-picked accommodations for your perfect trip.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stays.map((stay: any, index) => (
          <motion.div
            key={stay.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <StayCard stay={stay} />
          </motion.div>
        ))}
        {stays.length === 0 && (
          <div className="col-span-full py-20 text-center">
            <p className="text-slate-400 text-lg">No stays listed yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
