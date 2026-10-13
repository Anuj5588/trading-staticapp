import {
  BarChart3,
  ShieldCheck,
  Users,
  Globe,

  Mail,
} from "lucide-react";

export default function Analytics() {
  return (
    <>
      {/* ANALYTICS SECTION */}
      <section id="analytics" className="py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-black text-white">
                    Stock Analytics Suite
                  </h3>
                  <p className="text-xs text-slate-400">
                    Technical indicators & momentum tracking
                  </p>
                </div>
                <div className="bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-xl text-xs font-mono text-cyan-400 font-bold">
                  MACD / RSI Active
                </div>
              </div>

              <div className="bg-[#010409] p-6 rounded-2xl border border-slate-800/80 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="space-y-1">
                    <span className="text-xs text-slate-400 uppercase">
                      Index Performance
                    </span>
                    <h4 className="text-xl font-black font-mono text-white">
                      ₹ 2,45,890.00
                    </h4>
                  </div>
                  <span className="text-xs font-extrabold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                    +14.2%
                  </span>
                </div>

                <div className="h-52 w-full">
                  <svg viewBox="0 0 500 200" className="w-full h-full">
                    <path
                      d="M 0 140 Q 80 90, 170 120 T 340 50 T 500 25"
                      fill="none"
                      stroke="#06b6d4"
                      strokeWidth="3.5"
                    />
                    <path
                      d="M 0 170 Q 80 130, 170 150 T 340 90 T 500 70"
                      fill="none"
                      stroke="#34d399"
                      strokeWidth="2.5"
                      strokeDasharray="5"
                    />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                  <span className="text-xs text-slate-400 font-medium">
                    Support Level
                  </span>
                  <p className="text-lg font-black font-mono text-cyan-400 mt-1">
                    24,950 pts
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                  <span className="text-xs text-slate-400 font-medium">
                    Resistance Level
                  </span>
                  <p className="text-lg font-black font-mono text-indigo-400 mt-1">
                    25,500 pts
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase">
                <span>Advanced Methodology</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                About the Stock & Analytical Depth
              </h2>
              <p className="text-slate-400 leading-relaxed text-base">
                At Shasank Traders, we believe that informed trading stems from
                rigorous quantitative analysis. Our proprietary graphing models
                map historical volatility, volume distributions, and sector
                correlations to provide crystal-clear insights.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800/60">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">
                      Multi-Timeframe Charts
                    </h4>
                    <p className="text-sm text-slate-400 mt-1">
                      Inspect daily, weekly, and monthly trend cycles with zero
                      lag and high-fidelity resolution.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800/60">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">
                      Risk Management Metrics
                    </h4>
                    <p className="text-sm text-slate-400 mt-1">
                      Automated stop-loss calculations and live volatility index
                      tracking built directly into your workstation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section
        id="about"
        className="py-28 bg-[#050b16] border-t border-slate-800/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Built for Traders, Backed by Years of Expertise
              </h2>
              <p className="text-slate-400 leading-relaxed text-base">
                Shasank Traders has grown into a trusted destination for modern
                retail and institutional traders looking for reliable market
                execution, clean data visualizations, and robust portfolio
                management frameworks.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800/80 shadow-lg">
                  <Users className="h-7 w-7 text-cyan-400 mb-3" />
                  <h4 className="font-bold text-white text-base">
                    Expert Advisory
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Seasoned analysts guiding your market strategies daily.
                  </p>
                </div>
                <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800/80 shadow-lg">
                  <Globe className="h-7 w-7 text-indigo-400 mb-3" />
                  <h4 className="font-bold text-white text-base">
                    Pan-India Reach
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Seamless connectivity across major financial hubs.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=900&q=80"
                  alt="Trading Desk"
                  className="relative rounded-3xl object-cover w-full h-[400px] border border-slate-800 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA SECTION */}
      <section id="contact" className="py-28 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-blue-900/40 via-[#060b18] to-cyan-950/40 border border-slate-800/80 rounded-3xl p-8 sm:p-14 text-center shadow-2xl backdrop-blur-xl">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
              Ready to Upgrade Your Trading Journey?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto mb-8 text-base">
              Connect with Shasank Traders today to access advanced graphs, live
              stock analytics, and dedicated desks.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="mailto:Shashankr40555@gmail.com?subject=Inquiry%20Regarding%20Trading%20Desk"
                className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold transition-all shadow-xl shadow-cyan-500/25 hover:scale-105 active:scale-95 duration-300"
              >
                <Mail className="mr-2 h-5 w-5" /> Contact Our Trading Desk
              </a>
              <a
                href="#markets"
                className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-2xl bg-slate-950 text-slate-200 font-bold border border-slate-800"
              >
                View Live Watchlist
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
