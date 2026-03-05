import { motion } from 'motion/react';
import { Globe, Heart, Compass, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="pb-24">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img 
          src="https://picsum.photos/seed/travel/1920/1080" 
          alt="Travel Adventure" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Meet Lili Travel</h1>
            <p className="text-xl md:text-2xl font-light tracking-wide">Exploring the world, one story at a time.</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">
        
        {/* Intro Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3"
          >
            <div className="aspect-square rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="https://picsum.photos/seed/lili/800/800" 
                alt="Lili" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3 space-y-6"
          >
            <h2 className="text-3xl font-bold text-slate-800">Hi, I'm Lili!</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Welcome to my corner of the world. My journey began with a simple curiosity—a desire to see beyond the postcards and truly connect with the places I visit. From the misty peaks of Machu Picchu to the vibrant street markets of Bangkok, travel isn't just about the destination for me; it's about the stories we gather along the way.
            </p>
          </motion.div>
        </div>

        {/* Philosophy & Experience */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 p-8 md:p-12 rounded-3xl space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">A World of Experience</h3>
              <p className="text-slate-600">
                Over the years, I’ve wandered through the ancient streets of Rome, chased sunsets in the Atacama Desert, and found peace in the rice terraces of Bali. Whether navigating the bustling energy of New York City or sipping coffee in a quiet café in Ljubljana, I believe that adventure is everywhere if you know where to look.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Authentic Connections</h3>
              <p className="text-slate-600">
                My travels across South America, Europe, Asia, and beyond have taught me that the most memorable experiences often come from unexpected moments and genuine connections. It's not just about seeing a place, but feeling it.
              </p>
            </div>
          </div>
        </motion.div>

        {/* What to Expect */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl font-bold text-slate-800">What You'll Find Here</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Lili Travel is more than just a blog—it’s a resource designed to help you explore the world authentically and affordably. Here, you’ll find practical guides, budget-friendly tips, and honest insights into cultures near and far. Whether you're planning a solo trip to Vietnam or a weekend getaway to London, my goal is to empower you to travel with confidence and curiosity.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            {['Peru', 'Bolivia', 'Chile', 'Vietnam', 'Indonesia', 'Italy', 'USA', 'UK'].map((country) => (
              <div key={country} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-slate-600 font-medium flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                {country}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Invitation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-indigo-600 text-white p-12 rounded-3xl text-center space-y-6"
        >
          <Compass className="w-12 h-12 mx-auto text-indigo-200" />
          <h2 className="text-3xl font-bold">Ready for your next adventure?</h2>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            So pack your bags and bring your sense of wonder. Let’s discover this beautiful world together, one adventure at a time.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
