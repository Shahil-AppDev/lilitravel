import { useEffect, useState } from 'react';
import { fetchApi } from '../lib/api';
import DestinationCard from '../components/DestinationCard';
import { motion } from 'motion/react';

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetchApi('/api/destinations').then(setDestinations).catch(console.error);
  }, []);

  return (
    <div className="space-y-8 pb-24">
      <div className="px-2">
        <h1 className="text-4xl font-bold text-night tracking-tight">Explore Destinations</h1>
        <p className="text-slate-500 mt-2 text-lg">Find your next adventure among these hand-picked locations.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {destinations.map((dest: any, index) => (
          <motion.div
            key={dest.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <DestinationCard destination={dest} />
          </motion.div>
        ))}
        {destinations.length === 0 && (
          <div className="col-span-full py-20 text-center">
            <p className="text-slate-400 text-lg">No destinations found yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
