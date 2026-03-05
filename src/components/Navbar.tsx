import { clsx } from 'clsx';
import { Bed, BookOpen, Compass, Globe, Home, Map, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const { user } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', icon: Home, label: t('welcome') },
    { path: '/map', icon: Globe, label: t('map') },
    { path: '/destinations', icon: Map, label: t('explore') },
    { path: '/guides', icon: BookOpen, label: t('guides') },
    { path: '/excursions', icon: Compass, label: t('excursions') },
    { path: '/stays', icon: Bed, label: t('stays') },
    { path: '/about', icon: User, label: t('about') },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex items-center justify-between px-8 py-5 bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Lili Travel" className="h-12 w-auto object-contain" />
        </Link>
        
        <div className="flex items-center space-x-8">
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={clsx(
                  "flex items-center space-x-2 text-sm font-medium transition-all hover:text-ocean",
                  isActive(item.path) ? "text-ocean" : "text-slate-500"
                )}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="h-6 w-px bg-slate-200 mx-2" />

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <LanguageSwitcher />
            {user ? (
              <Link to="/dashboard" className="flex items-center space-x-2 pl-2">
                <div className="w-8 h-8 bg-ocean/10 rounded-full flex items-center justify-center text-ocean font-bold text-sm">
                  {user.name.charAt(0)}
                </div>
              </Link>
            ) : (
              <Link to="/login" className="text-sm font-bold text-ocean hover:text-ocean-dark">
                {t('login')}
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-slate-200 z-50 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="flex justify-around items-center h-20 px-2">
          {navItems.slice(0, 5).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={clsx(
                "flex flex-col items-center justify-center w-full h-full space-y-1.5 transition-colors",
                isActive(item.path) ? "text-ocean" : "text-slate-400"
              )}
            >
              <div className={clsx(
                "p-1.5 rounded-xl transition-all",
                isActive(item.path) ? "bg-ocean/10" : "bg-transparent"
              )}>
                <item.icon className={clsx("w-6 h-6", isActive(item.path) && "fill-current")} />
              </div>
              <span className="text-[10px] font-medium truncate max-w-[60px]">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
