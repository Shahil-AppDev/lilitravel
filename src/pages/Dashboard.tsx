import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { fetchApi } from '../lib/api';
import { Plus, Map, BookOpen, Compass, Bed, BarChart, TrendingUp, MousePointer, DollarSign, Link as LinkIcon } from 'lucide-react';
import { clsx } from 'clsx';
import { motion } from 'motion/react';

export default function Dashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('stats');
  const [stats, setStats] = useState({ total_links: 0, total_clicks: 0, total_conversions: 0, total_revenue: 0 });
  const [formData, setFormData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (activeTab === 'stats') {
      fetchApi('/api/affiliate/stats').then(setStats).catch(console.error);
    }
  }, [activeTab]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    let endpoint = '';
    if (activeTab === 'destinations') endpoint = '/api/destinations';
    if (activeTab === 'guides') endpoint = '/api/guides';
    if (activeTab === 'excursions') endpoint = '/api/excursions';
    if (activeTab === 'stays') endpoint = '/api/stays';

    try {
      await fetchApi(endpoint, {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      setMessage('Item created successfully!');
      setFormData({});
    } catch (err) {
      setMessage('Error creating item.');
    } finally {
      setLoading(false);
    }
  };

  if (!user) return <div className="text-center py-12">Please log in to access the dashboard.</div>;

  const tabs = [
    { id: 'stats', label: 'Overview', icon: BarChart },
    { id: 'destinations', label: 'Destinations', icon: Map },
    { id: 'guides', label: 'Guides', icon: BookOpen },
    { id: 'excursions', label: 'Excursions', icon: Compass },
    { id: 'stays', label: 'Stays', icon: Bed },
  ];

  return (
    <div className="space-y-8 pb-24">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-night tracking-tight">Creator Dashboard</h1>
          <p className="text-slate-500">Manage your content and track your earnings.</p>
        </div>
      </div>

      <div className="flex space-x-2 overflow-x-auto pb-2 hide-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={clsx(
              "flex items-center space-x-2 px-5 py-2.5 rounded-full whitespace-nowrap transition-all font-medium text-sm",
              activeTab === tab.id 
                ? "bg-night text-white shadow-md transform scale-105" 
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            )}
          >
            <tab.icon className="w-4 h-4" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {activeTab === 'stats' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-6 rounded-[24px] shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-500 text-sm font-medium">Total Revenue</h3>
              <div className="p-2 bg-green-50 text-green-600 rounded-lg"><DollarSign className="w-5 h-5" /></div>
            </div>
            <p className="text-3xl font-bold text-night tracking-tight">${stats.total_revenue.toFixed(2)}</p>
            <p className="text-xs text-green-600 mt-2 font-medium flex items-center"><TrendingUp className="w-3 h-3 mr-1" /> +12.5% this month</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-6 rounded-[24px] shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-500 text-sm font-medium">Total Clicks</h3>
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><MousePointer className="w-5 h-5" /></div>
            </div>
            <p className="text-3xl font-bold text-night tracking-tight">{stats.total_clicks}</p>
            <p className="text-xs text-slate-400 mt-2">Across all links</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white p-6 rounded-[24px] shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-500 text-sm font-medium">Conversions</h3>
              <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><TrendingUp className="w-5 h-5" /></div>
            </div>
            <p className="text-3xl font-bold text-night tracking-tight">{stats.total_conversions}</p>
            <p className="text-xs text-slate-400 mt-2">Bookings & Sales</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white p-6 rounded-[24px] shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-500 text-sm font-medium">Active Links</h3>
              <div className="p-2 bg-orange-50 text-orange-600 rounded-lg"><LinkIcon className="w-5 h-5" /></div>
            </div>
            <p className="text-3xl font-bold text-night tracking-tight">{stats.total_links}</p>
            <p className="text-xs text-slate-400 mt-2">Affiliate links</p>
          </motion.div>
        </div>
      )}

      {activeTab !== 'stats' && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 max-w-2xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center text-night">
            <div className="p-2 bg-ocean/10 rounded-xl mr-3 text-ocean">
              <Plus className="w-6 h-6" />
            </div>
            Add New {tabs.find(t => t.id === activeTab)?.label.slice(0, -1)}
          </h2>
          
          {message && (
            <div className={clsx("p-4 rounded-xl mb-6 text-sm font-medium", message.includes("Error") ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600")}>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-night mb-2">Title</label>
              <input name="title" value={formData.title || ''} onChange={handleInputChange} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-ocean/20 focus:border-ocean outline-none transition-all" placeholder="e.g. Hidden Gems of Bali" required />
            </div>

            {(activeTab === 'destinations' || activeTab === 'guides' || activeTab === 'excursions') && (
              <div>
                <label className="block text-sm font-bold text-night mb-2">Description</label>
                <textarea name="description" value={formData.description || ''} onChange={handleInputChange} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-ocean/20 focus:border-ocean outline-none h-32 resize-none" placeholder="Tell us about this..." required />
              </div>
            )}

            {(activeTab === 'destinations' || activeTab === 'excursions' || activeTab === 'stays') && (
              <div>
                <label className="block text-sm font-bold text-night mb-2">Location</label>
                <div className="relative">
                  <Map className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                  <input name="location" value={formData.location || ''} onChange={handleInputChange} className="w-full pl-12 pr-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-ocean/20 focus:border-ocean outline-none transition-all" placeholder="City, Country" required />
                </div>
              </div>
            )}

            {activeTab === 'destinations' && (
              <div>
                <label className="block text-sm font-bold text-night mb-2">Travel Tips</label>
                <textarea name="tips" value={formData.tips || ''} onChange={handleInputChange} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-ocean/20 focus:border-ocean outline-none h-24 resize-none" placeholder="Best time to visit, local customs..." />
              </div>
            )}

            {(activeTab === 'guides' || activeTab === 'excursions') && (
              <div>
                <label className="block text-sm font-bold text-night mb-2">Price ($)</label>
                <input type="number" step="0.01" name="price" value={formData.price || ''} onChange={handleInputChange} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-ocean/20 focus:border-ocean outline-none transition-all" placeholder="0.00" required />
              </div>
            )}

            {activeTab === 'stays' && (
              <div>
                <label className="block text-sm font-bold text-night mb-2">Price Range</label>
                <input name="price_range" placeholder="e.g. $100 - $200" value={formData.price_range || ''} onChange={handleInputChange} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-ocean/20 focus:border-ocean outline-none transition-all" required />
              </div>
            )}

            {(activeTab === 'excursions' || activeTab === 'stays') && (
              <div>
                <label className="block text-sm font-bold text-night mb-2">Affiliate Link</label>
                <input type="url" name="affiliate_link" value={formData.affiliate_link || ''} onChange={handleInputChange} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-ocean/20 focus:border-ocean outline-none transition-all" placeholder="https://..." />
              </div>
            )}

            <div>
              <label className="block text-sm font-bold text-night mb-2">Image URL</label>
              <input type="url" name={activeTab === 'stays' ? 'photo_url' : activeTab === 'excursions' ? 'image_url' : 'cover_image_url'} value={formData.cover_image_url || formData.image_url || formData.photo_url || ''} onChange={handleInputChange} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-ocean/20 focus:border-ocean outline-none transition-all" placeholder="https://..." />
            </div>

            <button type="submit" disabled={loading} className="w-full py-4 bg-night text-white font-bold rounded-xl hover:bg-night/90 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 mt-4">
              {loading ? 'Creating...' : 'Create Item'}
            </button>
          </form>
        </motion.div>
      )}
    </div>
  );
}
