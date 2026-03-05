import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <Search className="w-5 h-5 text-slate-400" />
      </div>
      <input 
        type="text" 
        placeholder="Where to next?" 
        className="w-full py-4 pl-12 pr-4 bg-white rounded-full shadow-sm border border-slate-100 focus:ring-2 focus:ring-ocean/20 focus:border-ocean outline-none text-slate-700 placeholder:text-slate-400 transition-all"
      />
      <button className="absolute inset-y-1.5 right-1.5 px-6 bg-ocean text-white rounded-full font-medium text-sm hover:bg-ocean-dark transition-colors shadow-sm">
        Search
      </button>
    </div>
  );
}
