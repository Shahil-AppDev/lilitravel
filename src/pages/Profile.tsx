import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { Settings, LogOut, User, Shield } from 'lucide-react';

export default function Profile() {
  const { user, loading, logout } = useAuth();

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (!user) return <Navigate to="/login" />;

  return (
    <div className="max-w-3xl mx-auto pb-24">
      <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-ocean to-turquoise"></div>
        <div className="px-8 pb-8">
          <div className="relative -mt-16 mb-6 flex justify-between items-end">
            <div className="w-32 h-32 bg-white p-1 rounded-full shadow-md">
              <div className="w-full h-full bg-slate-100 rounded-full flex items-center justify-center text-5xl font-bold text-ocean">
                {user.name.charAt(0)}
              </div>
            </div>
            <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl font-medium text-sm hover:bg-slate-200 transition-colors">
              Edit Profile
            </button>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-night">{user.name}</h1>
            <p className="text-slate-500">{user.email}</p>
            <div className="flex items-center mt-3 space-x-2">
              <span className="inline-flex items-center px-3 py-1 bg-ocean/10 text-ocean text-xs font-bold rounded-full uppercase tracking-wider">
                <Shield className="w-3 h-3 mr-1" />
                {user.role}
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-night mb-2">Bio</h3>
              <p className="text-slate-600 leading-relaxed">
                Travel enthusiast and creator sharing the best destinations and tips for digital nomads. 
                Exploring the world one city at a time.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-night px-2">Settings</h3>
              <button className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50 rounded-2xl border border-slate-100 transition-colors group">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-slate-100 rounded-lg text-slate-600 group-hover:text-ocean group-hover:bg-ocean/10 transition-colors">
                    <User className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-slate-700">Account Details</span>
                </div>
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50 rounded-2xl border border-slate-100 transition-colors group">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-slate-100 rounded-lg text-slate-600 group-hover:text-ocean group-hover:bg-ocean/10 transition-colors">
                    <Settings className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-slate-700">Preferences</span>
                </div>
              </button>
              <button 
                onClick={logout}
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-red-50 rounded-2xl border border-slate-100 transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-red-50 rounded-lg text-red-500 group-hover:bg-red-100 transition-colors">
                    <LogOut className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-red-600">Log Out</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
