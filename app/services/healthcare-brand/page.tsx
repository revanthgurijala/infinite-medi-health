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
    <main className="min-h-screen bg-[#f8fafc] pt-8 md:pt-12 pb-16 md:pb-24 overflow-hidden selection:bg-emerald-500 selection:text-white w-full">
      {/* Expanded to full width using w-full and responsive padding */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mx-auto">
        {/* 1. STYLISH HEADER SECTION */}
        <div className="text-center mb-10 md:mb-12 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-emerald-600 text-xs font-semibold mb-6 hover:shadow-md transition-shadow cursor-default">
            <Sparkles className="w-4 h-4 text-emerald-500" /> Premium Activation
            Services
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
            Healthcare Brand <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
              Activation Services
            </span>
          </h1>
          {/* Cursive / Italic highlight for subtitle */}
          <p className="text-lg md:text-xl font-medium text-emerald-700 mb-8 tracking-wide max-w-4xl mx-auto font-serif italic">
            Connecting Healthcare Brands with Communities.
          </p>
        </div>

        {/* 2. INTRODUCTION SECTION (Glassmorphism & Clean Typography) */}
        <div className="w-full mb-12 md:mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-full bg-emerald-100/50 rounded-full blur-[100px] pointer-events-none -z-10"></div>

          {/* Stylish Frosted Glass Intro Box */}
          <div className="relative z-10 mb-8 md:mb-10 bg-white/70 backdrop-blur-md p-6 md:p-10 rounded-[2rem] border border-white/60 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] text-center w-full max-w-6xl mx-auto">
            <p className="text-base md:text-lg text-slate-800 leading-relaxed mb-6 font-medium">
              Expand your healthcare brand beyond conventional marketing through{" "}
              <span className="italic font-serif text-emerald-600">
                strategic on-ground engagement
              </span>
              , community outreach programs, and integrated healthcare promotion
              solutions.
            </p>

            {/* Elegant Separator */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-slate-200"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></div>
              <div className="w-12 h-px bg-slate-200"></div>
            </div>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-light">
              At Infinite MediHealth, we help healthcare organizations build
              stronger public trust, improve brand visibility, increase patient
              engagement, and create long-term community relationships through
              impactful healthcare activation campaigns.
            </p>
          </div>

          {/* Target Audience Pill Layout - Expanded Width */}
          <div className="bg-white/80 backdrop-blur-xl p-6 md:p-10 rounded-[2rem] shadow-sm border border-white/50 relative z-10 w-full">
            <h3 className="text-base md:text-lg font-bold text-slate-800 mb-6 text-center">
              Our customized healthcare marketing solutions are designed for:
            </h3>
            <ul className="flex flex-wrap justify-center gap-2 md:gap-3">
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
                  className="flex items-center gap-2 text-slate-700 font-medium bg-slate-50 px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-slate-100 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300 cursor-default shadow-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                  <span className="text-[13px] md:text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3. OUR APPROACH SECTION */}
        <div className="mb-12 md:mb-16 w-full">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-emerald-500/20 rounded-full blur-[80px] group-hover:bg-emerald-500/30 transition-colors duration-700"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-500/20 rounded-full blur-[80px] group-hover:bg-cyan-500/30 transition-colors duration-700"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 text-center md:text-left">
                <span className="text-emerald-400 font-semibold tracking-widest uppercase text-xs mb-2 block">
                  Strategy
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight font-serif italic">
                  Our Approach
                </h2>
              </div>
              <div className="md:w-2/3 border-l-0 md:border-l border-slate-700/50 pl-0 md:pl-10">
                <p className="text-base md:text-lg leading-relaxed mb-4 font-light text-slate-200">
                  We combine community engagement, field activations, and
                  digital marketing strategies to create meaningful healthcare
                  awareness and improve service reach at the grassroots level.
                </p>
                <p className="text-sm md:text-base leading-relaxed font-light text-slate-400">
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
        <div className="mb-12 md:mb-16 flex justify-center w-full">
          <div className="relative w-full rounded-[2rem] bg-white p-2 md:p-3 shadow-lg border border-slate-100 transform transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl">
            <img
              src="/Healthcare.png"
              alt="Healthcare Brand Activation"
              className="w-full h-auto block object-contain rounded-[1.5rem]"
            />
          </div>
        </div>

        {/* 5. OUR CORE SERVICES (Perfectly Balanced Bento Grid) */}
        <div className="mb-12 md:mb-16 w-full">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Core Services
            </h2>
            <div className="w-12 h-1.5 bg-emerald-400 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Service 1 - Emerald (Now spans 2 cols to split its massive list in half) */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] hover:shadow-xl transition-all duration-500 border border-slate-100 group flex flex-col h-full md:col-span-2 xl:col-span-2">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform duration-500 shrink-0">
                <Stethoscope className="w-7 h-7" strokeWidth={2} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 leading-tight">
                Community Health Camp Management
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8 flex-grow">
                <div className="flex flex-col h-full">
                  <p className="text-slate-400 font-semibold mb-4 uppercase tracking-wider text-[10px]">
                    We organize healthcare camps across:
                  </p>
                  <ul className="flex flex-col gap-3.5 flex-grow justify-center">
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
                        className="flex items-center gap-3 text-slate-700 text-[13px] md:text-sm font-medium bg-slate-50/50 border border-slate-100 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] p-3 rounded-xl hover:border-emerald-200 hover:bg-emerald-50/30 transition-all cursor-default"
                      >
                        <div className="p-1.5 bg-emerald-100/50 rounded-md shrink-0">
                          <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col h-full">
                  <p className="text-slate-400 font-semibold mb-4 uppercase tracking-wider text-[10px]">
                    Camp Activities Include:
                  </p>
                  <ul className="flex flex-col gap-3.5 flex-grow justify-center">
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
                        className="flex items-center gap-3 text-slate-700 text-[13px] md:text-sm font-medium bg-slate-50/50 border border-slate-100 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] p-3 rounded-xl hover:border-emerald-200 hover:bg-emerald-50/30 transition-all cursor-default"
                      >
                        <div className="p-1.5 bg-emerald-100/50 rounded-md shrink-0">
                          <Activity className="w-3.5 h-3.5 text-emerald-600" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 2 - Cyan (Now 1 col to match Card 1's height perfectly) */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] hover:shadow-xl transition-all duration-500 md:col-span-1 xl:col-span-1 border border-slate-100 group flex flex-col h-full">
              <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 text-cyan-600 group-hover:scale-110 transition-transform duration-500 shrink-0">
                <MonitorSmartphone className="w-7 h-7" strokeWidth={2} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-tight">
                Integrated Offline + Digital Healthcare Marketing
              </h3>
              <p className="text-slate-400 font-semibold mb-4 uppercase tracking-wider text-[10px]">
                Combine field promotions with digital campaigns for maximum
                impact:
              </p>
              <ul className="grid grid-cols-1 gap-3 flex-grow">
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
                    className="flex items-center gap-3 text-slate-700 text-[13px] md:text-sm font-medium bg-slate-50/50 border border-slate-100 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] p-2.5 rounded-xl hover:border-cyan-200 hover:bg-cyan-50/30 transition-all cursor-default"
                  >
                    <div className="p-1.5 bg-cyan-100/50 rounded-md shrink-0">
                      <Globe className="w-3.5 h-3.5 text-cyan-600" />
                    </div>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 3 - Blue */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] hover:shadow-xl transition-all duration-500 border border-slate-100 group flex flex-col h-full">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-500 shrink-0">
                <Megaphone className="w-7 h-7" strokeWidth={2} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-tight">
                Healthcare Brand Promotion
              </h3>
              <p className="text-slate-400 font-semibold mb-3 uppercase tracking-wider text-[10px]">
                Targeted healthcare branding activities:
              </p>
              <ul className="space-y-3 flex-grow">
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
                    className="flex items-center gap-3 text-slate-700 text-[13px] md:text-sm font-medium bg-slate-50/50 border border-slate-100 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] p-2.5 rounded-xl hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-default"
                  >
                    <div className="p-1.5 bg-blue-100/50 rounded-md shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 4 - Violet */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] hover:shadow-xl transition-all duration-500 border border-slate-100 group flex flex-col h-full">
              <div className="w-14 h-14 bg-violet-50 rounded-2xl flex items-center justify-center mb-6 text-violet-600 group-hover:scale-110 transition-transform duration-500 shrink-0">
                <HeartHandshake className="w-7 h-7" strokeWidth={2} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-tight">
                Membership & Wellness Enrollment
              </h3>
              <p className="text-slate-400 font-semibold mb-3 uppercase tracking-wider text-[10px]">
                Customized long-term wellness plans:
              </p>
              <ul className="space-y-3 flex-grow">
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
                    className="flex items-center gap-3 text-slate-700 text-[13px] md:text-sm font-medium bg-slate-50/50 border border-slate-100 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] p-2.5 rounded-xl hover:border-violet-200 hover:bg-violet-50/30 transition-all cursor-default"
                  >
                    <div className="p-1.5 bg-violet-100/50 rounded-md shrink-0">
                      <ShieldPlus className="w-3.5 h-3.5 text-violet-600" />
                    </div>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 5 - Rose */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] hover:shadow-xl transition-all duration-500 border border-slate-100 group flex flex-col h-full md:col-span-1 xl:col-span-1">
              <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 text-rose-600 group-hover:scale-110 transition-transform duration-500 shrink-0">
                <Target className="w-7 h-7" strokeWidth={2} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-tight">
                Patient Acquisition & Engagement
              </h3>
              <p className="text-slate-400 font-semibold mb-3 uppercase tracking-wider text-[10px]">
                Generate meaningful interactions through:
              </p>
              <ul className="grid grid-cols-1 gap-3 flex-grow">
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
                    className="flex items-center gap-3 text-slate-700 text-[13px] md:text-sm font-medium bg-slate-50/50 border border-slate-100 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] p-2.5 rounded-xl hover:border-rose-200 hover:bg-rose-50/30 transition-all cursor-default"
                  >
                    <div className="p-1.5 bg-rose-100/50 rounded-md shrink-0">
                      <UserPlus className="w-3.5 h-3.5 text-rose-600" />
                    </div>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 6. FIT & WHY CHOOSE US */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 md:mb-16 w-full">
          <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/60 shadow-sm relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform duration-700">
              <Award className="w-48 h-48 text-emerald-900" />
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-6 relative z-10">
              Why Choose Infinite MediHealth?
            </h3>
            <ul className="space-y-4 relative z-10">
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
                  className="flex items-start gap-3 text-slate-600 text-sm md:text-base font-medium"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <ChevronRight className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/60 shadow-sm relative overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform duration-700">
              <Building className="w-48 h-48 text-slate-900" />
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-6 relative z-10">
              Ideal For
            </h3>
            <ul className="space-y-4 relative z-10">
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
                  className="flex items-start gap-3 text-slate-600 text-sm md:text-base font-medium"
                >
                  <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                    <ChevronRight className="w-3 h-3 text-slate-500" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 7. OUR MISSION (Stunning Glassmorphism Dark Card) */}
        <div className="w-full bg-slate-900 p-8 md:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden text-center group">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-emerald-500/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-emerald-500/30 transition-all duration-1000"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-cyan-500/30 transition-all duration-1000"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <HeartHandshake className="w-8 h-8 text-emerald-400" />
            </div>

            <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-[0.3em] mb-4">
              Our Mission
            </h3>
            <p className="text-xl md:text-3xl text-white leading-relaxed md:leading-snug font-light italic font-serif">
              "To bridge the gap between healthcare providers and communities
              through{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 not-italic font-sans">
                ethical, innovative, and result-driven
              </span>{" "}
              healthcare marketing solutions that create awareness, trust, and
              long-term patient engagement."
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
