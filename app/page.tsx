export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop')] bg-cover bg-center py-32 lg:py-48 border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-blue-900/80 bg-blend-multiply"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
          <span className="px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-bold tracking-[0.2em] uppercase mb-6 text-xs backdrop-blur-md animate-fade-in-down">
            Build, Manage & Scale Healthcare
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight drop-shadow-2xl">
            Complete Healthcare <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              Solutions.
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl font-medium drop-shadow-md leading-relaxed">
            From Diagnostics to Infrastructure. We provide end-to-end
            healthcare, compliance, and infrastructure solutions through a
            single integrated, intelligent platform.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.5)] border border-emerald-400/50"
            >
              Book Consultation
            </a>
            <a
              href="#smart-entry"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* 2. SMART ENTRY SECTION */}
      <section id="smart-entry" className="py-24 bg-white relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-emerald-500/10 blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              What are you looking for today?
            </h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Improve Employee Health",
                desc: "Corporate wellness & screenings",
                icon: "🏢",
              },
              {
                title: "Start a Diagnostic Lab",
                desc: "End-to-end setup & compliance",
                icon: "🔬",
              },
              {
                title: "Setup a Hospital",
                desc: "Infrastructure & planning",
                icon: "🏥",
              },
              {
                title: "Book Health Tests",
                desc: "Advanced diagnostics & panels",
                icon: "🩸",
              },
            ].map((item, idx) => (
              <a
                href="#contact"
                key={idx}
                className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:-translate-y-2 hover:bg-white transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.3)] hover:border-emerald-200 text-center cursor-pointer block relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-5xl mb-6 transform group-hover:scale-125 group-hover:-rotate-3 transition-transform duration-500 relative z-10">
                  {item.icon}
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-2 relative z-10">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm relative z-10">
                  {item.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HIGH-TICKET OFFER */}
      <section
        id="high-ticket"
        className="py-24 bg-slate-900 text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-2/3">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-emerald-500"></span>
              <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">
                Turnkey Healthcare Projects
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              Start Your Lab or Hospital in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                30–90 Days.
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-10 font-light border-l-4 border-emerald-500 pl-6 italic">
              "You Dream It, We Build It." We handle the Project Report, Setup,
              Equipment, Compliance (NABL/NABH), and Operations.
            </p>
            <ul className="flex flex-wrap gap-4 text-sm font-semibold">
              {[
                "Feasibility Reports",
                "Architecture & Interiors",
                "NABL/NABH Approvals",
              ].map((tag, i) => (
                <li
                  key={i}
                  className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 px-5 py-2.5 rounded-full flex items-center gap-2 hover:border-emerald-500/50 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>{" "}
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/3 w-full flex justify-center lg:justify-end">
            <a
              href="#contact"
              className="w-full sm:w-auto px-10 py-6 bg-emerald-500 text-slate-900 rounded-2xl font-extrabold text-lg uppercase tracking-widest hover:bg-emerald-400 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] text-center relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Detailed Plan{" "}
                <span className="text-2xl leading-none">&rarr;</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. PROOF SECTION & 4.5. ADVANCED REPORT DASHBOARD */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-200 mb-20">
            {[
              { num: "1,000+", label: "Health Screenings" },
              { num: "50+", label: "Corporate Camps" },
              { num: "30+", label: "Labs Setup" },
              { num: "100%", label: "Compliance Success" },
            ].map((stat, idx) => (
              <div key={idx} className="group cursor-default">
                <p className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 group-hover:text-emerald-500 transition-colors duration-300 group-hover:scale-110 inline-block transform">
                  {stat.num}
                </p>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* NEW: ADVANCED LIVE DASHBOARD GRAPHIC */}
          <div className="bg-slate-900 rounded-3xl p-1 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="bg-slate-900 rounded-[23px] p-8 md:p-12 relative z-10 border border-slate-700/50">
              {/* Dashboard Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-slate-800 pb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-emerald-400 font-bold tracking-widest uppercase text-xs">
                      Live Demo
                    </span>
                  </div>
                  <h3 className="text-3xl font-extrabold text-white tracking-tight">
                    Organization Health Summary
                  </h3>
                  <p className="text-slate-400 mt-2">
                    Example Corporate Wellness Dashboard Report
                  </p>
                </div>
                <div className="mt-6 md:mt-0 bg-slate-800 px-6 py-3 rounded-xl border border-slate-700 flex gap-8">
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">
                      Total Screened
                    </p>
                    <p className="text-2xl font-bold text-white">
                      600{" "}
                      <span className="text-sm text-emerald-400 font-normal">
                        (95%)
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">
                      Critical Alerts
                    </p>
                    <p className="text-2xl font-bold text-rose-400">18</p>
                  </div>
                </div>
              </div>

              {/* Interactive Graph Data Area */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Side: Risk Distribution Bars */}
                <div>
                  <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                    <span className="text-emerald-500">📊</span> Risk
                    Distribution
                  </h4>
                  <div className="space-y-6">
                    {[
                      {
                        label: "Low Risk",
                        pct: "54%",
                        color: "bg-emerald-500",
                        hover: "group-hover:w-[54%]",
                      },
                      {
                        label: "Moderate Risk",
                        pct: "30%",
                        color: "bg-amber-500",
                        hover: "group-hover:w-[30%]",
                      },
                      {
                        label: "High Risk",
                        pct: "16%",
                        color: "bg-rose-500",
                        hover: "group-hover:w-[16%]",
                      },
                    ].map((bar, i) => (
                      <div key={i} className="group/bar cursor-default">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-slate-300 font-medium">
                            {bar.label}
                          </span>
                          <span className="text-white font-bold">
                            {bar.pct}
                          </span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                          <div
                            className={`${bar.color} h-3 rounded-full w-0 ${bar.hover} transition-all duration-1000 ease-out`}
                            style={{ width: bar.pct }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Lifestyle Risks Mini-Tags */}
                  <div className="mt-10">
                    <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-4">
                      Top Lifestyle Risks Detected
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs font-semibold text-slate-300">
                        Sedentary: 42%
                      </span>
                      <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs font-semibold text-slate-300">
                        Obesity: 36%
                      </span>
                      <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs font-semibold text-slate-300">
                        Vision: 29%
                      </span>
                      <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs font-semibold text-slate-300">
                        Smokers: 18%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Clinical Insights Grid */}
                <div>
                  <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                    <span className="text-cyan-500">🔬</span> Key Health
                    Insights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: "Diabetes Risk",
                        normal: "62% Normal",
                        warn: "25% Pre",
                        critical: "13% High",
                      },
                      {
                        title: "Cholesterol Levels",
                        normal: "58% Normal",
                        warn: "27% Borderline",
                        critical: "15% High",
                      },
                      {
                        title: "Blood Pressure",
                        normal: "64% Normal",
                        warn: "21% Elevated",
                        critical: "15% High",
                      },
                      {
                        title: "Liver Function",
                        normal: "72% Normal",
                        warn: "",
                        critical: "28% Abnormal",
                      },
                    ].map((insight, i) => (
                      <div
                        key={i}
                        className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl hover:bg-slate-800 transition-colors cursor-default group/card"
                      >
                        <p className="text-sm font-bold text-white mb-3">
                          {insight.title}
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-emerald-400 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>{" "}
                              {insight.normal}
                            </span>
                          </div>
                          {insight.warn && (
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-amber-400 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>{" "}
                                {insight.warn}
                              </span>
                            </div>
                          )}
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-rose-400 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 group-hover/card:animate-pulse"></span>{" "}
                              {insight.critical}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR PROCESS */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-20">
            Our End-to-End Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[10%] w-[80%] h-0.5 bg-slate-200 z-0">
              <div className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 w-full opacity-50"></div>
            </div>

            {[
              {
                step: "01",
                title: "Consultation",
                desc: "We deeply understand your health or business setup needs.",
              },
              {
                step: "02",
                title: "Custom Plan",
                desc: "We design a tailored, data-driven solution and project timeline.",
              },
              {
                step: "03",
                title: "Execution",
                desc: "Our expert team implements the solution end-to-end.",
              },
              {
                step: "04",
                title: "Support",
                desc: "Continuous tracking, compliance monitoring, and improvement.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative z-10 flex flex-col items-center group"
              >
                <div className="w-20 h-20 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center text-xl font-extrabold text-slate-400 mb-6 shadow-md group-hover:border-emerald-500 group-hover:text-emerald-500 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-500 transform group-hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-emerald-50/50 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  <span className="relative z-10">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm px-4 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DIAGNOSTIC KART */}
      <section
        id="diagnostic-kart"
        className="py-32 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center relative bg-fixed"
      >
        <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block relative mb-8">
            <span className="absolute inset-0 bg-cyan-400 blur-md opacity-40 rounded-full"></span>
            <span className="relative bg-slate-900 border border-cyan-500/50 text-cyan-400 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              Platform Coming Soon
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-8 drop-shadow-lg">
            Diagnostic <span className="font-light text-cyan-400">Kart</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
            A smart digital platform designed to simplify diagnostics. Book
            tests online, compare prices, schedule home sample collection, and
            access digital reports instantly via our AI-driven portal.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: "📱", label: "Book Online" },
              { icon: "🏠", label: "Home Collect" },
              { icon: "📊", label: "Digital Reports" },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center w-48 hover:bg-white/10 hover:border-cyan-500/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
              >
                <span className="block text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
                  {feature.icon}
                </span>
                <span className="text-sm font-bold text-white uppercase tracking-widest">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA & CONTACT FORM */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Ready to Start Your Project?
            </h2>
            <div className="w-16 h-1.5 bg-emerald-500 mx-auto mt-6 mb-6 rounded-full"></div>
            <p className="text-slate-500 text-lg">
              Book a consultation, schedule a health camp, or request a detailed
              project report.
            </p>
          </div>

          <form
            action="YOUR_FORMSPREE_LINK_HERE"
            method="POST"
            className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all duration-300 text-slate-900 font-medium"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all duration-300 text-slate-900 font-medium"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all duration-300 text-slate-900 font-medium"
                  placeholder="+91 XXXX XXXXX"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                  Service Required
                </label>
                <div className="relative">
                  <select
                    name="service"
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all duration-300 text-slate-900 font-medium appearance-none cursor-pointer"
                  >
                    <option>Corporate Health Camp</option>
                    <option>Start a Diagnostic Lab</option>
                    <option>Hospital Setup / Compliance</option>
                    <option>Book Health Tests</option>
                    <option>Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-slate-400">
                    ▼
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                Your Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all duration-300 text-slate-900 font-medium resize-none"
                placeholder="Tell us about your requirements..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-slate-900 text-white font-bold py-5 rounded-xl hover:bg-emerald-500 hover:shadow-[0_10px_25px_rgba(16,185,129,0.4)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 text-sm uppercase tracking-widest relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Submit Inquiry{" "}
                <span className="text-emerald-400 group-hover:text-white transition-colors">
                  &rarr;
                </span>
              </span>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
