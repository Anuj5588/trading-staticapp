
import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase">
              <Zap className="h-3.5 w-3.5 animate-bounce" />
              <span>Next-Gen Stock Intelligence & Execution</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl  text-slate-100 "><span className='text-slate-100'>  Master the Market with </span>
            <span className="bg-gradient-to-r from-white-400 via-indigo-200 to-cyan-400 bg-clip-text text-transparent">Absolute Precision</span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Shasank Traders combines institutional-grade financial indicators, multi-timeframe charting models, and lightning-fast execution tools to optimize your portfolio.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#markets" 
                className="inline-flex justify-center items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold transition-all shadow-xl shadow-cyan-500/25 hover:scale-105"
              >
                Explore Stock Watch <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#analytics" 
                className="inline-flex justify-center items-center px-8 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold transition-all hover:text-white backdrop-blur-md"
              >
                View Analytics Suite
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800/80">
              <div className="p-4 rounded-2xl bg-slate-900/30 border border-slate-800/50">
                <h4 className="text-2xl sm:text-3xl font-black text-white font-mono">₹1,200Cr+</h4>
                <p className="text-xs text-slate-400 mt-1 font-medium">Monthly Turnover</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/30 border border-slate-800/50">
                <h4 className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">99.4%</h4>
                <p className="text-xs text-slate-400 mt-1 font-medium">Order Precision</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/30 border border-slate-800/50">
                <h4 className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">15,000+</h4>
                <p className="text-xs text-slate-400 mt-1 font-medium">Active Traders</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative bg-slate-900/90 border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <img 
                      src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=140&q=80" 
                      alt="Trading Screen" 
                      className="w-12 h-12 rounded-2xl object-cover border border-slate-700 shadow-md"
                    />
                    <div>
                      <h4 className="font-bold text-white text-base">Live Terminal</h4>
                      <p className="text-xs text-emerald-400 flex items-center font-medium">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 mr-1.5 animate-ping"></span> NSE/BSE Feed Connected
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-3 py-1 rounded-xl">SEC-A</span>
                </div>

                <div className="mb-6 bg-[#010409] p-5 rounded-2xl border border-slate-800/80">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold text-slate-400 uppercase">Bullish Momentum Index</span>
                    <span className="text-xs font-extrabold text-emerald-400 font-mono bg-emerald-500/10 px-2.5 py-1 rounded-lg">+24.8% YTD</span>
                  </div>
                  <div className="h-36 w-full relative">
                    <svg viewBox="0 0 400 150" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path d="M 0 110 Q 70 70, 150 85 T 300 30 T 400 15" fill="none" stroke="#06b6d4" strokeWidth="3.5" />
                      <path d="M 0 110 Q 70 70, 150 85 T 300 30 T 400 15 L 400 150 L 0 150 Z" fill="url(#heroGrad)" />
                    </svg>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <span className="text-sm font-semibold text-slate-200">NIFTY 50 Index</span>
                  <span className="text-sm font-bold font-mono text-emerald-400">25,235.40 (+1.24%)</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}