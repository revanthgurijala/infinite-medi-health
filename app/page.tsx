"use client";

import {
  Eye,
  Target,
  HeartHandshake,
  ShieldCheck,
  Activity,
  Users,
  Sparkles,
  Stethoscope,
  BriefcaseMedical,
  Route,
  MonitorSmartphone,
  Layers,
  SlidersHorizontal,
  Zap,
  Cpu,
  BarChart3,
  Microscope,
  Laptop,
  Tags,
  Syringe,
  ClipboardType,
  Phone,
  Mail,
  MapPin,
  Building2,
  Hospital,
  Droplet,
  FileCheck,
  ArrowRight,
  TestTube,
  PawPrint,
  Building,
  LineChart,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden w-full">
      {/* 1. HOME (Text -> Full Edge Image -> Buttons) */}
      <section className="pt-20 pb-12 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-slate-100 to-white z-0"></div>

        {/* Full-Width Hero Image Container */}
        <div className="relative z-10 w-full flex flex-col group">
          <img
            src="/Home%201.jpg"
            alt="Complete Healthcare Solutions - From Diagnostics to Infrastructure"
            className="w-full h-auto max-h-[70vh] object-cover"
          />

          {/* Action Bar */}
          <div className="w-full bg-slate-900 flex justify-center border-b border-slate-800">
            <div className="w-full max-w-[1440px] px-6 sm:px-8 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                  Build, Manage & Scale Healthcare
                </h2>
                <p className="text-sm md:text-base font-medium text-emerald-400 tracking-wide">
                  Transforming Health Ecosystems End-to-End.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <a
                  href="#contact"
                  className="px-8 py-3.5 text-center bg-emerald-500 text-slate-900 rounded-full font-semibold text-sm uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-0.5"
                >
                  Book Consultation
                </a>
                <a
                  href="#smart-entry"
                  className="px-8 py-3.5 text-center bg-white/5 text-white rounded-full font-semibold text-sm uppercase tracking-widest hover:bg-white/10 border border-white/20 transition-all hover:-translate-y-0.5"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK HIGHLIGHTS */}
      <section className="py-10 md:py-12 bg-slate-50 w-full border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: "All-in-One Healthcare Platform",
                icon: (
                  <Stethoscope
                    className="w-6 h-6 md:w-8 md:h-8 text-emerald-500"
                    strokeWidth={2}
                  />
                ),
              },
              {
                title: "Corporate & Diagnostic Expertise",
                icon: (
                  <BriefcaseMedical
                    className="w-6 h-6 md:w-8 md:h-8 text-emerald-500"
                    strokeWidth={2}
                  />
                ),
              },
              {
                title: "End-to-End Project Support",
                icon: (
                  <Route
                    className="w-6 h-6 md:w-8 md:h-8 text-emerald-500"
                    strokeWidth={2}
                  />
                ),
              },
              {
                title: "Technology-Driven Solutions",
                icon: (
                  <MonitorSmartphone
                    className="w-6 h-6 md:w-8 md:h-8 text-emerald-500"
                    strokeWidth={2}
                  />
                ),
              },
            ].map((highlight, i) => (
              <div
                key={i}
                className="bg-white border-t-4 border-t-emerald-500 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center gap-4 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                  {highlight.icon}
                </div>
                <span className="text-base font-semibold text-slate-800 relative z-10 leading-snug">
                  {highlight.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT SNAPSHOT */}
      <section className="py-12 md:py-16 bg-white w-full">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-r from-slate-900 to-blue-950 rounded-3xl p-10 md:p-14 text-center shadow-2xl relative overflow-hidden w-full">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px]"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
              About Snapshot
            </h2>
            <p className="text-lg md:text-xl text-slate-300/90 max-w-6xl mx-auto mb-10 relative z-10 leading-relaxed font-light">
              <span className="text-emerald-400 font-semibold">
                Infinite Medi Health
              </span>{" "}
              is a next-generation healthcare solutions company integrating
              Diagnostics, Preventive Care, and Technology to deliver better
              outcomes and long-term wellness.
            </p>
            <a
              href="#who-we-are"
              className="inline-block px-10 py-4 bg-emerald-500 text-slate-900 rounded-full font-semibold text-sm uppercase tracking-widest hover:bg-emerald-400 transition-all relative z-10 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* 4. WHO WE ARE */}
      <section
        id="who-we-are"
        className="py-16 md:py-20 bg-slate-50 w-full border-b border-slate-200"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Who We Are
            </h2>
            <div className="w-16 h-1 bg-emerald-500 mx-auto mt-6 mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-600 max-w-6xl mx-auto leading-relaxed font-normal">
              Infinite Medi Health is a forward-thinking healthcare solutions
              company committed to transforming how individuals and
              organizations access healthcare. <br />
              <br />
              We combine{" "}
              <span className="font-semibold text-slate-900">
                Advanced Diagnostics, Preventive Healthcare, and
                Technology-Driven Programs
              </span>{" "}
              into one seamless ecosystem—ensuring early detection, better
              outcomes, and long-term wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-300 group">
              <div className="text-emerald-500 mb-6 group-hover:scale-110 transition-transform origin-left">
                <Eye className="w-12 h-12" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Our Vision
              </h3>
              <p className="text-slate-600 text-base leading-relaxed font-normal">
                To create a future where healthcare is Predictive, Preventive,
                and Personalized, Accessible through a single intelligent
                platform.
              </p>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-300 group">
              <div className="text-emerald-500 mb-6 group-hover:scale-110 transition-transform origin-left">
                <Target className="w-12 h-12" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Our Mission
              </h3>
              <p className="text-slate-600 text-base leading-relaxed font-normal">
                To empower individuals and organizations with data-driven
                healthcare solutions that enable early intervention and a better
                quality of life.
              </p>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-300 group">
              <div className="text-emerald-500 mb-6 group-hover:scale-110 transition-transform origin-left">
                <HeartHandshake className="w-12 h-12" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Our Commitment
              </h3>
              <ul className="text-slate-600 text-base space-y-3 font-medium">
                <li className="flex items-center gap-3">
                  <ShieldCheck
                    className="w-5 h-5 text-emerald-500 shrink-0"
                    strokeWidth={2.5}
                  />{" "}
                  Trusted & Transparent Healthcare
                </li>
                <li className="flex items-center gap-3">
                  <Activity
                    className="w-5 h-5 text-emerald-500 shrink-0"
                    strokeWidth={2.5}
                  />{" "}
                  Early Diagnosis & Prevention
                </li>
                <li className="flex items-center gap-3">
                  <Users
                    className="w-5 h-5 text-emerald-500 shrink-0"
                    strokeWidth={2.5}
                  />{" "}
                  Healthier Communities & Workplaces
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles
                    className="w-5 h-5 text-emerald-500 shrink-0"
                    strokeWidth={2.5}
                  />{" "}
                  Continuous Innovation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES (OVERVIEW) */}
      <section className="py-16 md:py-20 bg-white w-full">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Comprehensive Healthcare Solutions
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-6 mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-slate-600 max-w-6xl mx-auto leading-relaxed font-normal">
            We provide{" "}
            <span className="font-semibold text-slate-900">
              End-to-End Healthcare, Infrastructure, and Compliance Solutions
            </span>{" "}
            — covering everything from idea stage to execution and ongoing
            operations.
          </p>
        </div>
      </section>

      {/* 6. WHAT WE DO (OUR SERVICES TOTAL 9) */}
      <section className="pb-16 md:pb-24 bg-white w-full border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Activity className="w-5 h-5" strokeWidth={2.5} />,
                title: "Preventive & Monitoring Health Packages",
                desc: "Tailored screening for individuals, corporates, and groups.",
              },
              {
                icon: <TestTube className="w-5 h-5" strokeWidth={2.5} />,
                title: "Advanced Diagnostics & Testing",
                desc: "LC-MS/MS and advanced biomarker testing for personalized healthcare.",
              },
              {
                icon: <PawPrint className="w-5 h-5" strokeWidth={2.5} />,
                title: "Veterinary Diagnostic Services",
                desc: "Livestock health management & companion animal diagnostics.",
              },
              {
                icon: <Microscope className="w-5 h-5" strokeWidth={2.5} />,
                title: "Diagnostic Lab Setup & Consulting",
                desc: "End-to-end support for establishing NABL compliant facilities.",
              },
              {
                icon: <Syringe className="w-5 h-5" strokeWidth={2.5} />,
                title: "Vaccination & Health Camps",
                desc: "Corporate, school, and community-focused health initiatives.",
              },
              {
                icon: (
                  <BriefcaseMedical className="w-5 h-5" strokeWidth={2.5} />
                ),
                title: "Occupational Healthcare Services",
                desc: "Workplace health solutions and industrial health assessments.",
              },
              {
                icon: <Building className="w-5 h-5" strokeWidth={2.5} />,
                title: "Hospital Planning & Construction",
                desc: "Infrastructure development, equipment planning & supervision.",
              },
              {
                icon: <FileCheck className="w-5 h-5" strokeWidth={2.5} />,
                title: "Accreditation & Certification",
                desc: "Complete support for NABH, NABL, ISO, and fire safety.",
              },
              {
                icon: <LineChart className="w-5 h-5" strokeWidth={2.5} />,
                title: "Project Reports & Market Research",
                desc: "Feasibility studies, loans, and market insights for healthcare.",
              },
            ].map((srv, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100/50 text-emerald-600 flex items-center justify-center font-bold text-lg group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    {srv.icon}
                  </span>
                  <h4 className="font-bold text-slate-900 text-lg leading-tight">
                    {srv.title}
                  </h4>
                </div>
                <p className="text-base text-slate-500 pl-14 font-normal leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-900 text-white p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between shadow-xl w-full">
            <div className="text-center md:text-left">
              <h4 className="font-bold text-2xl md:text-3xl mb-2">
                Additional Engineering & Execution Services
              </h4>
              <p className="text-slate-300 text-base font-light">
                Engineering Solutions, Seepage Systems, Interiors, and Complete
                Execution.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 md:mt-0 px-8 py-3.5 bg-emerald-500 rounded-full font-semibold text-sm uppercase tracking-widest hover:bg-emerald-400 text-slate-900 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:-translate-y-0.5 whitespace-nowrap"
            >
              Request Info
            </a>
          </div>
        </div>
      </section>

      {/* SUMMARY REPORT */}
      <section className="py-16 md:py-20 bg-slate-50 w-full border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-200 mb-16">
            {[
              { num: "1,000+", label: "Health Screenings" },
              { num: "50+", label: "Corporate Camps" },
              { num: "30+", label: "Labs Setup" },
              { num: "100%", label: "Compliance Success" },
            ].map((stat, idx) => (
              <div key={idx} className="group cursor-default">
                <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-1 group-hover:text-emerald-500 transition-colors duration-300 inline-block transform">
                  {stat.num}
                </p>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-3xl p-1 shadow-2xl relative overflow-hidden group w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="bg-slate-900 rounded-[23px] p-8 md:p-12 relative z-10 border border-slate-700/50">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-slate-800 pb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-emerald-400 font-semibold tracking-widest uppercase text-xs">
                      Live Demo
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    Organization Health Summary
                  </h3>
                  <p className="text-slate-400 mt-1 text-base font-light">
                    Example Corporate Wellness Dashboard Report
                  </p>
                </div>
                <div className="mt-6 md:mt-0 bg-slate-800/80 px-5 sm:px-6 py-4 rounded-2xl border border-slate-700 flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8">
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-1">
                      Total Screened
                    </p>
                    <p className="text-3xl font-bold text-white">
                      600{" "}
                      <span className="text-sm text-emerald-400 font-normal">
                        (95%)
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-1">
                      Critical Alerts
                    </p>
                    <p className="text-3xl font-bold text-rose-400">18</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                <div>
                  <h4 className="text-white font-semibold text-xl mb-6 flex items-center gap-3">
                    <span className="text-emerald-500">
                      <BarChart3 className="w-6 h-6 inline-block" />
                    </span>{" "}
                    Risk Distribution
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
                        <div className="flex justify-between text-base mb-2">
                          <span className="text-slate-300 font-medium">
                            {bar.label}
                          </span>
                          <span className="text-white font-semibold">
                            {bar.pct}
                          </span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                          <div
                            className={`${bar.color} h-2.5 rounded-full w-0 ${bar.hover} transition-all duration-1000 ease-out`}
                            style={{ width: bar.pct }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-3">
                      Top Lifestyle Risks Detected
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      <span className="px-4 py-1.5 bg-slate-800/80 border border-slate-700 rounded-full text-xs font-medium text-slate-300">
                        Sedentary: 42%
                      </span>
                      <span className="px-4 py-1.5 bg-slate-800/80 border border-slate-700 rounded-full text-xs font-medium text-slate-300">
                        Obesity: 36%
                      </span>
                      <span className="px-4 py-1.5 bg-slate-800/80 border border-slate-700 rounded-full text-xs font-medium text-slate-300">
                        Vision: 29%
                      </span>
                      <span className="px-4 py-1.5 bg-slate-800/80 border border-slate-700 rounded-full text-xs font-medium text-slate-300">
                        Smokers: 18%
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold text-xl mb-6 flex items-center gap-3">
                    <span className="text-cyan-500">
                      <Microscope className="w-6 h-6 inline-block" />
                    </span>{" "}
                    Key Health Insights
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
                        className="bg-slate-800/40 border border-slate-700/50 p-5 rounded-2xl hover:bg-slate-800/80 transition-colors cursor-default group/card"
                      >
                        <p className="text-base font-bold text-white mb-3">
                          {insight.title}
                        </p>
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between text-xs font-medium">
                            <span className="text-emerald-400 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>{" "}
                              {insight.normal}
                            </span>
                          </div>
                          {insight.warn && (
                            <div className="flex items-center justify-between text-xs font-medium">
                              <span className="text-amber-400 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>{" "}
                                {insight.warn}
                              </span>
                            </div>
                          )}
                          <div className="flex items-center justify-between text-xs font-medium">
                            <span className="text-rose-400 flex items-center gap-2">
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

      {/* 7. PRO TIP QUOTATION */}
      <section className="py-16 md:py-24 bg-slate-50 w-full border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative bg-white rounded-3xl p-10 md:p-16 border border-slate-200 shadow-xl shadow-slate-200/40 overflow-hidden w-full flex items-center justify-center">
            {/* Pure CSS Dot Texture */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#cbd5e1 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            ></div>
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-transparent to-cyan-50/40 pointer-events-none"></div>

            <div className="relative z-10 text-center max-w-6xl mx-auto px-4 md:px-8 py-4">
              <span className="text-emerald-200 text-6xl md:text-8xl leading-none font-serif absolute -top-4 md:-top-8 -left-2 md:-left-6 opacity-60 select-none">
                "
              </span>
              <h2 className="text-2xl md:text-4xl font-medium text-slate-700 tracking-tight leading-relaxed">
                We don’t just provide services — we build and scale complete
                Healthcare Ecosystems.
              </h2>
              <span className="text-emerald-200 text-6xl md:text-8xl leading-none font-serif absolute -bottom-8 md:-bottom-12 -right-2 md:-right-6 opacity-60 select-none">
                "
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE US */}
      <section
        id="why-us"
        className="py-16 md:py-20 bg-white w-full border-b border-slate-200"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Why Choose Infinite Medi Health
            </h2>
            <div className="w-16 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "All-in-One Platform",
                desc: "No need to manage multiple vendors—we handle everything.",
                icon: (
                  <Layers
                    className="w-6 h-6 text-emerald-600"
                    strokeWidth={2.5}
                  />
                ),
              },
              {
                title: "Affordable Quality",
                desc: "High-quality services at optimized, cost-effective pricing.",
                icon: (
                  <HeartHandshake
                    className="w-6 h-6 text-emerald-600"
                    strokeWidth={2.5}
                  />
                ),
              },
              {
                title: "Customized Solutions",
                desc: "Tailored services for individuals, corporates, and businesses.",
                icon: (
                  <SlidersHorizontal
                    className="w-6 h-6 text-emerald-600"
                    strokeWidth={2.5}
                  />
                ),
              },
              {
                title: "Fast Execution Team",
                desc: "Quick turnaround with High Accuracy and Reliability.",
                icon: (
                  <Zap className="w-6 h-6 text-emerald-600" strokeWidth={2.5} />
                ),
              },
              {
                title: "Technology-Driven Approach",
                desc: "Smart tools for Monitoring, Reporting, and Scalability.",
                icon: (
                  <Cpu className="w-6 h-6 text-emerald-600" strokeWidth={2.5} />
                ),
              },
              {
                title: "Corporate Health Expertise",
                desc: "Specialized in Employee Wellness, Camps, and Compliance.",
                icon: (
                  <Building2
                    className="w-6 h-6 text-emerald-600"
                    strokeWidth={2.5}
                  />
                ),
              },
            ].map((usp, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-100 p-8 rounded-3xl text-center hover:shadow-lg hover:border-emerald-200 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto bg-emerald-100/50 rounded-full flex items-center justify-center mb-5 text-emerald-600">
                  {usp.icon}
                </div>
                <h4 className="font-bold text-slate-900 text-xl mb-3">
                  {usp.title}
                </h4>
                <p className="text-base text-slate-500 font-normal leading-relaxed">
                  {usp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. OUR PROCESS */}
      <section
        id="process"
        className="py-16 md:py-20 bg-slate-50 w-full border-b border-slate-200"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-14 md:mb-16">
            Our End-to-End Healthcare Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[10%] w-[80%] h-0.5 bg-slate-200 z-0">
              <div className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 w-full opacity-50"></div>
            </div>

            {[
              {
                step: "Step 1",
                title: "Consultation",
                desc: "We Understand Your Needs (Health / Business / Setup)",
              },
              {
                step: "Step 2",
                title: "Customized Plan",
                desc: "We Design A Tailored Solution Based On Your Requirements",
              },
              {
                step: "Step 3",
                title: "Execution",
                desc: "Our Expert Team Implements The Solution End-To-End",
              },
              {
                step: "Step 4",
                title: "Monitoring & Support",
                desc: "Continuous Tracking, Support, And Improvement",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative z-10 flex flex-col items-center group"
              >
                <div className="w-24 h-24 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center text-sm font-bold text-slate-400 mb-5 shadow-sm group-hover:border-emerald-500 group-hover:text-emerald-500 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-500 transform group-hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-emerald-50/50 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  <span className="relative z-10 uppercase tracking-widest">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-base px-2 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. DIAGNOSTIC KART */}
      <section
        id="diagnostic-kart"
        className="py-20 md:py-28 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center relative bg-fixed w-full"
      >
        <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"></div>
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          {/* RESPONSIVE ALIGNMENT FIX FOR "COMING SOON" */}
          <div className="flex justify-center mb-6 w-full">
            <div className="relative inline-flex items-center justify-center max-w-full">
              <span className="absolute inset-0 bg-cyan-400 blur-md opacity-30 rounded-full"></span>
              <span className="relative bg-slate-900 border border-cyan-500/30 text-cyan-400 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-center shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                Coming Soon – Smart Diagnostic Platform
              </span>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 drop-shadow-md">
            Diagnostic <span className="font-light text-cyan-400">Kart</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-5xl mx-auto mb-10 font-light leading-relaxed">
            A digital platform designed to simplify diagnostics.
            <br />
            Goal: Make Diagnostics Fast, Transparent, and Accessible.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              {
                icon: <Laptop className="w-8 h-8 mx-auto" strokeWidth={1.5} />,
                label: "Book Lab Tests Online",
              },
              {
                icon: <Tags className="w-8 h-8 mx-auto" strokeWidth={1.5} />,
                label: "Compare Prices Easily",
              },
              {
                icon: <Syringe className="w-8 h-8 mx-auto" strokeWidth={1.5} />,
                label: "Schedule Home Sample Collection",
              },
              {
                icon: (
                  <ClipboardType
                    className="w-8 h-8 mx-auto"
                    strokeWidth={1.5}
                  />
                ),
                label: "Access Reports Anytime",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl text-center w-56 hover:bg-white/10 hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                <span className="block mb-4 text-white opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  {feature.icon}
                </span>
                <span className="text-xs font-semibold text-white/90 uppercase tracking-widest leading-relaxed">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-cyan-500 text-slate-900 rounded-full font-semibold text-sm uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:-translate-y-0.5"
          >
            Join Early Access / Get Notified
          </a>
        </div>
      </section>

      {/* 11, 12, 13. CONTACT, ENQUIRY FORM, & CALL TO ACTION */}
      <section
        id="contact"
        className="py-16 md:py-20 bg-white w-full border-b border-slate-200"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Side: Contact Details & CTA */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                Get In Touch
              </h2>
              <div className="w-16 h-1 bg-emerald-500 mb-8 rounded-full"></div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-8 shadow-sm">
                <ul className="space-y-6">
                  <li className="flex items-center gap-4 sm:gap-5 text-base sm:text-lg font-medium text-slate-700">
                    <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-100/50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                    <span>+91 73865 14350 / +91 95151 14350</span>
                  </li>
                  <li className="flex items-center gap-4 sm:gap-5 text-base sm:text-lg font-medium text-slate-700">
                    <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-100/50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                    {/* Added break-all here so the long email wraps safely on mobile */}
                    <span className="break-all">
                      info@infinitemedihealth.com
                    </span>
                  </li>
                  <li className="flex items-start gap-4 sm:gap-5 text-base sm:text-lg font-medium text-slate-700">
                    <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-100/50 text-emerald-600 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                    <span className="leading-relaxed mt-0.5 sm:mt-1">
                      Plot No-44, 1st floor, Rainbow Meadows, Road no-3, Kista
                      Reddy Pet, Hyderabad, Telangana - 502319
                    </span>
                  </li>
                </ul>
              </div>

              {/* CALL TO ACTION */}
              <div className="bg-slate-900 p-8 md:p-10 rounded-3xl text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]"></div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 relative z-10 leading-snug">
                  Ready to Improve Healthcare or Start Your Project?
                </h3>
                <div className="flex flex-col gap-4 relative z-10 font-semibold text-xs md:text-sm uppercase tracking-widest text-emerald-400">
                  <span className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                    <ArrowRight className="w-5 h-5 text-emerald-400" /> Book
                    Consultation
                  </span>
                  <span className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                    <ArrowRight className="w-5 h-5 text-emerald-400" /> Schedule
                    Health Camp
                  </span>
                  <span className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                    <ArrowRight className="w-5 h-5 text-emerald-400" /> Get
                    Project Report
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Quick Enquiry Form */}
            <div>
              <form
                action="YOUR_FORMSPREE_LINK_HERE"
                method="POST"
                className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden h-full"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>

                <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">
                  Quick Inquiry Form
                </h3>

                <div className="space-y-5 mb-8">
                  {/* Name Field (Letters Only) */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
                      Name <span className="text-rose-500 text-sm">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      pattern="[A-Za-z\s]+"
                      title="Please enter letters only."
                      onInput={(e) => {
                        e.currentTarget.value = e.currentTarget.value.replace(
                          /[^a-zA-Z\s]/g,
                          "",
                        );
                      }}
                      className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all duration-300 text-slate-800 text-base"
                      placeholder="Your Name"
                    />
                  </div>

                  {/* Phone Field (Numbers Only) */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
                      Phone <span className="text-rose-500 text-sm">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      inputMode="numeric"
                      pattern="[0-9]+"
                      title="Please enter numbers only."
                      onInput={(e) => {
                        e.currentTarget.value = e.currentTarget.value.replace(
                          /[^0-9]/g,
                          "",
                        );
                      }}
                      className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all duration-300 text-slate-800 text-base"
                      placeholder="Your Phone Number"
                    />
                  </div>

                  {/* Service Dropdown (Hidden Placeholder) */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
                      Service Required{" "}
                      <span className="text-rose-500 text-sm">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        required
                        defaultValue=""
                        className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all duration-300 text-slate-800 text-base appearance-none cursor-pointer"
                      >
                        <option value="" disabled hidden>
                          Select a Service
                        </option>
                        <option value="Corporate Health Camp">
                          Corporate Health Camp
                        </option>
                        <option value="Start a Diagnostic Lab">
                          Start a Diagnostic Lab
                        </option>
                        <option value="Hospital Setup / Compliance">
                          Hospital Setup / Compliance
                        </option>
                        <option value="Book Health Tests">
                          Book Health Tests
                        </option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-slate-400">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Message Field (Not Mandatory) */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all duration-300 text-slate-800 text-base resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white font-semibold py-4 rounded-xl hover:bg-emerald-500 hover:shadow-[0_10px_20px_rgba(16,185,129,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-sm uppercase tracking-widest relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Submit Inquiry{" "}
                    <span className="text-emerald-400 group-hover:text-white transition-colors text-lg leading-none">
                      &rarr;
                    </span>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 14. WHAT ARE YOU LOOKING FOR (SMART ENTRY) */}
      <section
        id="smart-entry"
        className="py-16 md:py-20 bg-slate-50 w-full relative"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              What Are You Looking For?
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                title: "Improve Employee Health",
                icon: (
                  <Building2
                    className="w-10 h-10 mx-auto text-emerald-500"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Start A Diagnostic Lab",
                icon: (
                  <Microscope
                    className="w-10 h-10 mx-auto text-emerald-500"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Setup Hospital",
                icon: (
                  <Hospital
                    className="w-10 h-10 mx-auto text-emerald-500"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Book Health Tests",
                icon: (
                  <Droplet
                    className="w-10 h-10 mx-auto text-emerald-500"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Compliance & Accreditation",
                icon: (
                  <FileCheck
                    className="w-10 h-10 mx-auto text-emerald-500"
                    strokeWidth={1.5}
                  />
                ),
              },
            ].map((item, idx) => (
              <a
                href="#contact"
                key={idx}
                className="group bg-white p-8 rounded-3xl border border-slate-100 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_15px_30px_-5px_rgba(16,185,129,0.1)] hover:border-emerald-200 text-center cursor-pointer flex flex-col items-center justify-center"
              >
                <div className="mb-5 transform group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 15. START YOUR LAB (HIGH-TICKET OFFER) */}
      <section
        id="high-ticket"
        className="py-16 md:py-24 bg-slate-900 text-white w-full relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight">
              Start Your Lab / Hospital in{" "}
              <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                30–90 Days.
              </span>
            </h2>
            <ul className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm md:text-base font-semibold mb-10">
              {["Project Report", "Setup", "Compliance", "Operations"].map(
                (tag, i) => (
                  <li
                    key={i}
                    className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 px-3 sm:px-6 py-2.5 rounded-xl sm:rounded-full flex items-center justify-center sm:justify-start gap-2 sm:gap-3 shadow-sm text-slate-200"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)] shrink-0"></span>{" "}
                    <span className="whitespace-nowrap">{tag}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="lg:w-1/3 w-full flex justify-center lg:justify-end">
            <a
              href="#contact"
              className="w-full sm:w-auto px-10 py-5 bg-emerald-500 text-slate-900 rounded-full font-bold text-lg uppercase tracking-widest hover:bg-emerald-400 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] text-center whitespace-nowrap"
            >
              Get Detailed Plan
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
