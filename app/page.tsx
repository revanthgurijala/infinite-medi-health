export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* 1. HERO SECTION (With your Gray 75% Overlay & Button Animations) */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center py-32 border-b border-gray-200 bg-gray-900/75 bg-blend-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
          <span className="text-gray-300 font-bold tracking-widest uppercase mb-4 text-sm tracking-[0.2em]">
            Welcome to Infinite Medi Health
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight drop-shadow-lg">
            Infinite Care. <br />
            <span className="text-blue-400">Intelligent Healthcare.</span>
          </h1>
          <p className="mt-2 text-xl md:text-2xl text-gray-200 max-w-3xl font-medium drop-shadow-md">
            Precision Diagnostics. Functional Insights. Preventive Outcomes.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-6">
            <a
              href="#services"
              className="px-8 py-4 bg-blue-600 text-white rounded-md font-bold text-sm uppercase tracking-wider hover:bg-blue-500 hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300"
            >
              Explore Medical Services
            </a>
            <a
              href="#fitness"
              className="px-8 py-4 bg-white text-gray-900 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-gray-100 hover:scale-105 active:scale-95 hover:shadow-xl transition-all duration-300"
            >
              View Fitness Profiles
            </a>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Bridging the gap between advanced technology and everyday
                healthcare.
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Infinite Medi Health delivers next-generation healthcare
                solutions combining advanced diagnostics, preventive care, and
                technology-driven health programs to improve patient outcomes
                and support healthcare providers.
              </p>
              <ul className="space-y-4">
                {[
                  "Better correlation between symptoms and biomarkers",
                  "Early identification of subclinical imbalances",
                  "Improved treatment personalization",
                  "Reduced trial-and-error in therapies",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-gray-700 font-medium hover:translate-x-2 transition-transform duration-300"
                  >
                    <svg
                      className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Professional Image Side with Hover Zoom */}
            <div className="mt-10 lg:mt-0 relative rounded-2xl overflow-hidden shadow-2xl h-96 group">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                alt="Advanced Laboratory"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gray-900/30 group-hover:bg-gray-900/10 transition-colors duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 to-transparent">
                <p className="text-xl font-bold text-white italic drop-shadow-md">
                  "Diagnostics designed to support decisions, not just deliver
                  results."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE MEDICAL SERVICES (With Float & Shadow Animations) */}
      <section
        id="services"
        className="py-20 bg-gray-50 border-t border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Our Core Medical Services
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-4 rounded-full"></div>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for hospitals, corporates, and
              communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Preventive & Monitoring",
                desc: "Comprehensive health screening solutions designed for early detection and wellness management.",
              },
              {
                title: "Advanced Diagnostics",
                desc: "Cutting-edge LC-MS/MS testing and advanced biomarker analysis for personalized healthcare.",
              },
              {
                title: "Occupational Healthcare",
                desc: "Workplace health solutions, pre-employment checkups, and industrial health assessments.",
              },
              {
                title: "Laboratory Setup",
                desc: "End-to-end support for establishing diagnostic facilities, equipment procurement, and NABL compliance.",
              },
              {
                title: "Hospital Planning",
                desc: "Strategic and operational support for healthcare infrastructure and construction management.",
              },
              {
                title: "Accreditation Support",
                desc: "Complete support for NABH, NABL, and ISO certifications with faster approval timelines.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 ease-out cursor-default"
              >
                <div className="h-14 w-14 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-2xl font-bold group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FITNESS & GYM PROFILES (With Neon Glow Animations) */}
      <section
        id="fitness"
        className="relative py-24 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-gray-900/95 bg-blend-overlay text-white border-t border-gray-800 border-b"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 mb-12 lg:mb-0">
              <span className="text-emerald-400 font-bold tracking-widest uppercase mb-4 block text-sm">
                Fitness Diagnostic Programs
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Train Smart. <br />
                Test Smart. <br />
                <span className="text-emerald-400">Perform Better.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Fitness is not just about workouts or diet—it is driven by your
                internal health. Hidden factors like nutrient deficiencies,
                hormonal imbalance, and inflammation can slow your progress.
              </p>
              <a
                href="tel:+917386514350"
                className="inline-block px-8 py-4 bg-emerald-500 text-gray-900 rounded-md font-bold text-sm uppercase tracking-wide hover:bg-emerald-400 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
              >
                Book a Fitness Test
              </a>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Basic Fitness Panel",
                "Muscle Performance Profile",
                "Cardio Fitness Panel",
                "Metabolic & Fat Loss Profile",
                "Vitamin & Nutritional Profile",
                "Advanced Hormone Profile",
                "Complete 360° Profile",
                "Advanced Cardiac Fitness Profile",
              ].map((panel, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800/60 backdrop-blur-md p-6 rounded-lg border border-gray-700 hover:-translate-y-1 hover:border-emerald-400 hover:bg-gray-800 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 cursor-pointer"
                >
                  <h3 className="font-bold text-lg text-emerald-50 mb-2">
                    {panel}
                  </h3>
                  <p className="text-sm text-gray-400">
                    Scientific health monitoring for performance.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACT FORM SECTION */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-4 rounded-full"></div>
            <p className="text-gray-600">
              Have a question or want to partner with us? Fill out the form
              below.
            </p>
          </div>

          <form className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="+91 XXXX XXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Partnership Inquiry"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-md hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 transition-all duration-300 text-lg uppercase tracking-wide"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
