import  { useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function MarketWatch() {
  const [activeTab, setActiveTab] = useState('equity');

  const stockData = {
    equity: [
      { name: 'NIFTY 50', value: '25,235.40', change: '+1.24%', positive: true, volume: '₹42,120 Cr' },
      { name: 'BANK NIFTY', value: '51,840.10', change: '+0.85%', positive: true, volume: '₹31,450 Cr' },
      { name: 'RELIANCE', value: '₹2,980.50', change: '-0.32%', positive: false, volume: '₹4,890 Cr' },
      { name: 'TCS', value: '₹4,120.00', change: '+1.65%', positive: true, volume: '₹3,210 Cr' },
    ],
    commodities: [
      { name: 'GOLD (10g)', value: '₹75,400', change: '+0.45%', positive: true, volume: '₹12,400 Cr' },
      { name: 'SILVER (1kg)', value: '₹89,200', change: '-1.10%', positive: false, volume: '₹8,900 Cr' },
      { name: 'CRUDE OIL', value: '₹6,150', change: '+2.10%', positive: true, volume: '₹6,430 Cr' },
    ]
  };

  return (
    <section id="markets" className="py-24 bg-gradient-to-b from-[#030712] via-[#060b18] to-[#030712] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase mb-3">
              <span>Real-Time Quotations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Stock & Commodity Watch</h2>
            <p className="text-slate-400 mt-2">Live price feeds monitored by Shasank Traders analysts.</p>
          </div>
          
          <div className="mt-6 md:mt-0 flex space-x-2 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 shadow-lg">
            <button 
              onClick={() => setActiveTab('equity')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === 'equity' ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              Equities
            </button>
            <button 
              onClick={() => setActiveTab('commodities')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === 'commodities' ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              Commodities
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stockData[activeTab].map((item, idx) => (
            <div key={idx} className="bg-slate-900/80 border border-slate-800/80 rounded-3xl p-6 hover:border-cyan-500/60 transition-all duration-300 shadow-xl hover:-translate-y-2 group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-extrabold text-lg text-white group-hover:text-cyan-400 transition-colors">{item.name}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Vol: {item.volume}</p>
                </div>
                <span className={`p-2.5 rounded-2xl ${item.positive ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>
                  {item.positive ? <TrendingUp className="h-5 w-5" /> : <TrendingDown className="h-5 w-5" />}
                </span>
              </div>

              <div className="flex items-baseline justify-between mt-6 pt-4 border-t border-slate-800/80">
                <span className="text-2xl font-black font-mono text-white">{item.value}</span>
                <span className={`text-sm font-extrabold px-3 py-1 rounded-xl font-mono ${item.positive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                  {item.change}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}