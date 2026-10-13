
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarketWatch from './components/Marketwatch';
import Analytics from './components/Analytics';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden relative">
      
      {/* Background Glow Blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Navbar Component */}
      <Navbar />

      {/* Hero Component */}
      <Hero />

      {/* Live Market Watch Component */}
      <MarketWatch />

      {/* Analytics & About Component */}
      <Analytics />

      {/* Footer Component */}
      <Footer />

    </div>
  );
}