import  { useState } from 'react';
import { Menu, X, Activity } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#030712]/70 backdrop-blur-2xl border-b border-slate-800/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-2.5 rounded-2xl shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
            <Activity className="h-6 w-6 text-white animate-pulse" />
          </div>
          <div>
            <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent">
              Shasank Traders
            </span>
            <p className="text-[10px] tracking-widest uppercase text-cyan-400/80 font-bold">Institutional Analytics</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-300">
          {['Home', 'Markets', 'Analytics', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="relative hover:text-cyan-400 transition-colors py-2 group"
            >
              {item === 'Markets' ? 'Live Markets' : item === 'Analytics' ? 'Analytics Suite' : item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="#contact" 
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm transition-all shadow-lg shadow-cyan-500/20 hover:scale-105"
          >
            Client Portal
          </a>
        </div>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#060b19] border-b border-slate-800 px-6 pt-4 pb-6 space-y-3">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-cyan-400 font-medium">Home</a>
          <a href="#markets" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-cyan-400 font-medium">Live Markets</a>
          <a href="#analytics" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-cyan-400 font-medium">Analytics Suite</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-cyan-400 font-medium">About Us</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-cyan-400 font-medium">Contact</a>
          <div className="pt-3">
            <a href="#contact" className="block text-center w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-lg">Client Portal</a>
          </div>
        </div>
      )}
    </header>
  );
}