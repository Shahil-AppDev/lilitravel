import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-8 bg-white rounded-[32px] shadow-xl border border-slate-100"
      >
        <div className="text-center mb-8">
          <img src="/logo.png" alt="Lili Travel" className="h-24 w-auto mx-auto mb-6 object-contain" />
          <h2 className="text-3xl font-bold text-night tracking-tight">Welcome Back</h2>
          <p className="text-slate-500 mt-2">Sign in to manage your travel content</p>
        </div>

        {error && <div className="p-3 bg-red-50 text-red-600 rounded-xl text-sm text-center mb-6">{error}</div>}
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-night mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-ocean/20 focus:border-ocean outline-none transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-night mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-ocean/20 focus:border-ocean outline-none transition-all"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-night text-white font-bold rounded-xl hover:bg-night/90 transition-all shadow-lg hover:shadow-xl mt-2"
          >
            Sign In
          </button>
        </form>
        <p className="mt-8 text-center text-sm text-slate-500">
          Demo account: <span className="font-mono bg-slate-100 px-1 py-0.5 rounded">demo@lilitravel.com</span> / <span className="font-mono bg-slate-100 px-1 py-0.5 rounded">password123</span>
        </p>
      </motion.div>
    </div>
  );
}
