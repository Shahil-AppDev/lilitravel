import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DestinationCard from '../components/DestinationCard';
import GuideCard from '../components/GuideCard';
import SearchBar from '../components/SearchBar';
import Skeleton from '../components/Skeleton';
import { fetchApi } from '../lib/api';

export default function Home() {
  const [destinations, setDestinations] = useState([]);
  const [guides, setGuides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [destData, guideData] = await Promise.all([
          fetchApi('/api/destinations'),
          fetchApi('/api/guides')
        ]);
        setDestinations(destData.slice(0, 4));
        setGuides(guideData.slice(0, 4));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <div className="space-y-16 pb-24">
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 px-4 text-center space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-ocean/10 text-ocean font-bold text-sm tracking-wide uppercase">
            Explore the Unseen
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-night tracking-tight leading-[1.1]">
            Curated Travel <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean to-turquoise">Experiences</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto leading-relaxed">
            Discover hidden gems, expert guides, and unforgettable stays curated by top travel creators.
          </p>
          
          <div className="pt-8">
            <SearchBar />
          </div>
        </motion.div>
      </section>

      {/* Featured Destinations */}
      <section className="space-y-8">
        <div className="flex justify-between items-end px-2">
          <div>
            <h2 className="text-3xl font-bold text-night">Trending Destinations</h2>
            <p className="text-slate-500 mt-1">Places travelers are loving right now</p>
          </div>
          <Link to="/destinations" className="text-ocean font-semibold flex items-center hover:underline">
            View all <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="aspect-[4/5] rounded-[32px] overflow-hidden">
                <Skeleton className="w-full h-full" />
              </div>
            ))
          ) : (
            destinations.map((dest: any, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <DestinationCard destination={dest} />
              </motion.div>
            ))
          )}
          {!loading && destinations.length === 0 && (
            <div className="col-span-full py-12 text-center bg-white rounded-[32px] border border-dashed border-slate-200">
              <p className="text-slate-400">No destinations found. Start exploring!</p>
            </div>
          )}
        </div>
      </section>

      {/* Top Guides */}
      <section className="space-y-8">
        <div className="flex justify-between items-end px-2">
          <div>
            <h2 className="text-3xl font-bold text-night">Expert Guides</h2>
            <p className="text-slate-500 mt-1">Curated itineraries by locals</p>
          </div>
          <Link to="/guides" className="text-ocean font-semibold flex items-center hover:underline">
            View all <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="aspect-[3/4] rounded-[24px] overflow-hidden">
                <Skeleton className="w-full h-full" />
              </div>
            ))
          ) : (
            guides.map((guide: any, index) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GuideCard guide={guide} />
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* TikTok Carousel */}
      <TikTokCarousel />
    </div>
  );
}
