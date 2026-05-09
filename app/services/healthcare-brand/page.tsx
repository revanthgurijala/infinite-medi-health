import {
  Stethoscope,
  MapPin,
  Activity,
  Megaphone,
  Sparkles,
  HeartHandshake,
  ShieldPlus,
  Target,
  UserPlus,
  MonitorSmartphone,
  Globe,
  Award,
  Building,
  ChevronRight,
} from "lucide-react";

export default function HealthcareBrandPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] pt-12 pb-20 md:pb-32 overflow-hidden selection:bg-emerald-500 selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* 1. STYLISH HEADER SECTION */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-emerald-600 text-sm font-semibold mb-8 hover:shadow-md transition-shadow cursor-default">
            <Sparkles className="w-4 h-4 text-emerald-500" /> Premium Activation
            Services
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Healthcare Brand <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
              Activation Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-slate-500 mb-10 tracking-wide max-w-3xl mx-auto">
            Connecting Healthcare Brands with Communities
          </p>
        </div>

        {/* 2. INTRODUCTION SECTION */}
        <div className="max-w-5xl mx-auto mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-full bg-emerald-100/50 rounded-full blur-[100px] pointer-events-none -z-10"></div>

          <div className="text-center mb-12 relative z-10">
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6 font-light">
              Expand your healthcare brand beyond conventional marketing through
              strategic on-ground engagement, community outreach programs, and
              integrated healthcare promotion solutions.
            </p>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
              At Infinite MediHealth, we help healthcare organizations build
              stronger public trust, improve brand visibility, increase patient
              engagement, and create long-term community relationships through
              impactful healthcare activation campaigns.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 relative z-10">
            <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-8 text-center">
              Our customized healthcare marketing solutions are designed for:
            </h3>
            <ul className="flex flex-wrap justify-center gap-3 md:gap-4">
              {[
                "Multi-Specialty Hospitals",
                "Diagnostic Laboratory Chains",
                "Pharmacy Networks",
                "Clinics & Wellness Centers",
                "Preventive Healthcare Brands",
                "Home Healthcare Service Providers",
                "Healthcare Startups & Medical Brands",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-slate-700 font-medium bg-slate-50 px-5 py-3 rounded-full border border-slate-100 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300 cursor-default shadow-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3. OUR APPROACH SECTION */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] group-hover:bg-emerald-500/30 transition-colors duration-700"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] group-hover:bg-cyan-500/30 transition-colors duration-700"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3 text-center md:text-left">
                <span className="text-emerald-400 font-semibold tracking-widest uppercase text-sm mb-3 block">
                  Strategy
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Our Approach
                </h2>
              </div>
              <div className="md:w-2/3 border-l-0 md:border-l border-slate-700/50 pl-0 md:pl-12">
                <p className="text-lg md:text-xl leading-relaxed mb-6 font-light text-slate-200">
                  We combine community engagement, field activations, and
                  digital marketing strategies to create meaningful healthcare
                  awareness and improve service reach at the grassroots level.
                </p>
                <p className="text-lg leading-relaxed font-light text-slate-400">
                  From apartment health camps to pharmacy promotions and
                  membership enrollment drives, our programs are designed to
                  strengthen your brand presence where patients truly connect —
                  within their communities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. FULLY VISIBLE IMAGE SECTION */}
        <div className="mb-24 flex justify-center perspective-1000">
          <div className="relative w-full max-w-5xl rounded-[2.5rem] bg-white p-3 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 transform transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(16,185,129,0.1)]">
            <img
              src="/Healthcare.png"
              alt="Healthcare Brand Activation"
              className="w-full h-auto block object-contain rounded-[2rem]"
            />
          </div>
        </div>

        {/* 5. OUR CORE SERVICES (Interactive Shadowed Lists) */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Our Core Services
            </h2>
            <div className="w-16 h-1.5 bg-slate-200 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service 1 - Emerald */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)] transition-all duration-500 border border-slate-100 group">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 text-emerald-600 group-hover:scale-110 transition-transform duration-500">
                <Stethoscope className="w-8 h-8" strokeWidth={2} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-tight">
                Community Health Camp Management
              </h3>

              <p className="text-slate-400 font-semibold mb-4 uppercase tracking-wider text-xs">
                We organize and execute healthcare camps across:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Residential Colonies",
                  "Apartments & Gated Communities",
                  "Corporate Offices",
                  "Educational Institutions",
                  "Senior Citizen Communities",
                  "Rural & Urban Outreach Programs",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700 text-sm font-medium bg-slate-50/50 border border-slate-100 shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)] p-3 rounded-xl hover:border-emerald-200 hover:bg-emerald-50/30 transition-all cursor-default"
                  >
                    <div className="p-2 bg-emerald-100/50 rounded-lg shrink-0">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-slate-400 font-semibold mb-4 uppercase tracking-wider text-xs">
                Camp Activities Include:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Free Health Checkups",
                  "BP & Sugar Screening",
                  "Preventive Health Awareness",
                  "Doctor Consultation Sessions",
                  "Specialty OPD Promotions",
                  "Diagnostic Awareness Programs",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700 text-sm font-medium bg-slate-50/50 border border-slate-100 shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)] p-3 rounded-xl hover:border-emerald-200 hover:bg-emerald-50/30 transition-all cursor-default"
                  >
                    <div className="p-2 bg-emerald-100/50 rounded-lg shrink-0">
                      <Activity className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 2 - Blue */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)] transition-all duration-500 border border-slate-100 group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:scale-110 transition-transform duration-500">
                <Megaphone className="w-8 h-8" strokeWidth={2} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-tight">
                Healthcare Brand Promotion
              </h3>
              <p className="text-slate-400 font-semibold mb-5 uppercase tracking-wider text-xs">
                Enhance your visibility through targeted healthcare branding
                activities:
              </p>
              <ul className="space-y-4">
                {[
                  "Apartment & Community Promotions",
                  "Local Area Healthcare Campaigns",
                  "Society Activity Sponsorships",
                  "Road Shows & Public Engagement Events",
                  "Health Awareness Drives",
                  "Patient Education Programs",
                  "Pharmacy & Lab Brand Promotions",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700 text-sm font-medium bg-slate-50/50 border border-slate-100 shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)] p-3 rounded-xl hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-default"
                  >
                    <div className="p-2 bg-blue-100/50 rounded-lg shrink-0">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 3 - Violet */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.15)] transition-all duration-500 border border-slate-100 group">
              <div className="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center mb-8 text-violet-600 group-hover:scale-110 transition-transform duration-500">
                <HeartHandshake className="w-8 h-8" strokeWidth={2} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-tight">
                Membership & Wellness Enrollment Programs
              </h3>
              <p className="text-slate-400 font-semibold mb-5 uppercase tracking-wider text-xs">
                Increase long-term patient engagement through customized
                wellness plans:
              </p>
              <ul className="space-y-4">
                {[
                  "Family Health Memberships",
                  "Preventive Health Packages",
                  "Senior Citizen Wellness Programs",
                  "Corporate Employee Health Plans",
                  "Loyalty & Referral Programs",
                  "Subscription-Based Healthcare Programs",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700 text-sm font-medium bg-slate-50/50 border border-slate-100 shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)] p-3 rounded-xl hover:border-violet-200 hover:bg-violet-50/30 transition-all cursor-default"
                  >
                    <div className="p-2 bg-violet-100/50 rounded-lg shrink-0">
                      <ShieldPlus className="w-4 h-4 text-violet-600" />
                    </div>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 4 - Rose */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] hover:shadow-[0_20px_40px_-15px_rgba(244,63,94,0.15)] transition-all duration-500 border border-slate-100 group">
              <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mb-8 text-rose-600 group-hover:scale-110 transition-transform duration-500">
                <Target className="w-8 h-8" strokeWidth={2} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-tight">
                Patient Acquisition & Engagement Solutions
              </h3>
              <p className="text-slate-400 font-semibold mb-5 uppercase tracking-wider text-xs">
                Generate meaningful patient interactions through:
              </p>
              <ul className="space-y-4">
                {[
                  "Lead Generation Campaigns",
                  "Appointment Conversion Support",
                  "Follow-up Coordination",
                  "Referral Network Development",
                  "Community Relationship Building",
                  "Healthcare Awareness Activities",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700 text-sm font-medium bg-slate-50/50 border border-slate-100 shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)] p-3 rounded-xl hover:border-rose-200 hover:bg-rose-50/30 transition-all cursor-default"
                  >
                    <div className="p-2 bg-rose-100/50 rounded-lg shrink-0">
                      <UserPlus className="w-4 h-4 text-rose-600" />
                    </div>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 5 - Cyan (Full Width) */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.15)] transition-all duration-500 md:col-span-1 lg:col-span-2 border border-slate-100 group">
              <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center mb-8 text-cyan-600 group-hover:scale-110 transition-transform duration-500">
                <MonitorSmartphone className="w-8 h-8" strokeWidth={2} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-tight">
                Integrated Offline + Digital Healthcare Marketing
              </h3>
              <p className="text-slate-400 font-semibold mb-6 uppercase tracking-wider text-xs">
                We combine field promotions with digital campaigns for maximum
                impact:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  "Social Media Marketing",
                  "WhatsApp Campaigns",
                  "SMS & Email Promotions",
                  "Google & Meta Advertising",
                  "Event Photography & Video Coverage",
                  "Healthcare Influencer Promotions",
                  "Online Reputation & Brand Visibility Support",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700 text-sm font-medium bg-slate-50/50 border border-slate-100 shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)] p-3 rounded-xl hover:border-cyan-200 hover:bg-cyan-50/30 transition-all cursor-default"
                  >
                    <div className="p-2 bg-cyan-100/50 rounded-lg shrink-0">
                      <Globe className="w-4 h-4 text-cyan-600" />
                    </div>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 6. FIT & WHY CHOOSE US */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-10 md:p-14 rounded-[2.5rem] border border-slate-200/60 shadow-sm relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform duration-700">
              <Award className="w-64 h-64 text-emerald-900" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-8 relative z-10">
              Why Choose Infinite MediHealth?
            </h3>
            <ul className="space-y-5 relative z-10">
              {[
                "Healthcare-Focused Marketing Expertise",
                "Ethical & Patient-Centric Promotions",
                "End-to-End Campaign Planning & Execution",
                "Strong Community-Level Brand Penetration",
                "Customized Healthcare Growth Strategies",
                "Integrated Offline + Online Marketing Support",
                "Scalable Solutions for Hospitals, Labs & Pharmacies",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-slate-700 font-medium"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <ChevronRight className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-10 md:p-14 rounded-[2.5rem] border border-slate-200/60 shadow-sm relative overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform duration-700">
              <Building className="w-64 h-64 text-slate-900" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-8 relative z-10">
              Ideal For
            </h3>
            <ul className="space-y-5 relative z-10">
              {[
                "Hospitals & Healthcare Groups",
                "Diagnostic Centers & Laboratory Chains",
                "Pharmacy Retail Networks",
                "Wellness & Preventive Healthcare Brands",
                "Homecare & Rehabilitation Services",
                "Medical Franchises & Healthcare Startups",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-slate-700 font-medium"
                >
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                    <ChevronRight className="w-3 h-3 text-slate-500" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 7. OUR MISSION (Stunning Glassmorphism Dark Card) */}
        <div className="w-full bg-slate-900 p-12 md:p-24 rounded-[3rem] shadow-2xl relative overflow-hidden text-center group">
          {/* Animated Glowing Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-emerald-500/30 transition-all duration-1000"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-cyan-500/30 transition-all duration-1000"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Frosted Glass Icon Wrapper */}
            <div className="w-20 h-20 bg-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/10 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <HeartHandshake className="w-10 h-10 text-emerald-400" />
            </div>

            <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-[0.3em] mb-6">
              Our Mission
            </h3>
            <p className="text-2xl md:text-4xl text-white leading-relaxed md:leading-snug font-light">
              To bridge the gap between healthcare providers and communities
              through{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                ethical, innovative, and result-driven
              </span>{" "}
              healthcare marketing solutions that create awareness, trust, and
              long-term patient engagement.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
