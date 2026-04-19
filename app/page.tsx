export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop')] bg-cover bg-center py-32 border-b border-gray-200 bg-blue-950/80 bg-blend-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
          <span className="text-emerald-400 font-bold tracking-widest uppercase mb-4 text-sm tracking-[0.2em]">
            Build, Manage & Scale Healthcare
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight drop-shadow-lg">
            Complete Healthcare <br />
            <span className="text-emerald-400">Solutions.</span>
          </h1>
          <p className="mt-2 text-xl md:text-2xl text-gray-200 max-w-3xl font-medium drop-shadow-md">
            From Diagnostics to Infrastructure. We provide end-to-end
            healthcare, compliance, and infrastructure solutions through a
            single integrated platform.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-6">
            <a
              href="#contact"
              className="px-8 py-4 bg-emerald-600 text-white rounded-md font-bold text-sm uppercase tracking-wider hover:bg-emerald-500 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl"
            >
              Book Consultation
            </a>
            <a
              href="#smart-entry"
              className="px-8 py-4 bg-white text-blue-950 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* 2. SMART ENTRY SECTION (User Segmentation) */}
      <section id="smart-entry" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-blue-950">
              What are you looking for today?
            </h2>
            <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 mb-4 rounded-full"></div>
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
                className="group bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 text-center cursor-pointer block"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HIGH-TICKET OFFER (Game Changer Section) */}
      <section
        id="high-ticket"
        className="py-20 bg-blue-900 text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-800 rounded-full opacity-50 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-10 md:mb-0">
            <span className="text-emerald-400 font-bold uppercase tracking-widest text-sm block mb-2">
              Turnkey Healthcare Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Start Your Lab or Hospital in 30–90 Days.
            </h2>
            <p className="text-xl text-blue-200 mb-6">
              "You Dream It, We Build It." We handle the Project Report, Setup,
              Equipment, Compliance (NABL/NABH), and Operations.
            </p>
            <ul className="flex flex-wrap gap-4 text-sm font-semibold">
              <li className="bg-blue-800 px-4 py-2 rounded-full">
                ✅ Feasibility Reports
              </li>
              <li className="bg-blue-800 px-4 py-2 rounded-full">
                ✅ Architecture & Interiors
              </li>
              <li className="bg-blue-800 px-4 py-2 rounded-full">
                ✅ NABL/NABH Approvals
              </li>
            </ul>
          </div>
          <div>
            <a
              href="#contact"
              className="px-8 py-5 bg-emerald-500 text-blue-950 rounded-md font-extrabold text-lg uppercase tracking-wide hover:bg-emerald-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] block text-center"
            >
              Get Detailed Plan
            </a>
          </div>
        </div>
      </section>

      {/* 4. PROOF / IMPACT SECTION (Corporate Health Stats) */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-extrabold text-blue-950 mb-2">
                1,000+
              </p>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">
                Health Screenings
              </p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-blue-950 mb-2">50+</p>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">
                Corporate Health Camps
              </p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-blue-950 mb-2">30+</p>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">
                Labs & Hospitals Setup
              </p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-blue-950 mb-2">100%</p>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">
                Compliance Success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR PROCESS */}
      <section id="process" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-blue-950 mb-16">
            Our End-to-End Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-100 -translate-y-1/2 z-0"></div>

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
                <div className="w-20 h-20 bg-white border-4 border-emerald-500 rounded-full flex items-center justify-center text-2xl font-extrabold text-blue-950 mb-6 shadow-lg group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DIAGNOSTIC KART (Coming Soon) */}
      <section
        id="diagnostic-kart"
        className="py-24 bg-gray-900 text-white relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="bg-emerald-500/20 text-emerald-400 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block border border-emerald-500/50">
            Coming Soon
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Diagnostic Kart
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            A smart digital platform designed to simplify diagnostics. Book
            tests online, compare prices, schedule home sample collection, and
            access digital reports instantly.
          </p>
          <div className="flex justify-center gap-6">
            <div className="bg-gray-800 p-6 rounded-lg text-center w-40">
              <span className="block text-3xl mb-2">📱</span>
              <span className="text-sm font-bold">Book Online</span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center w-40">
              <span className="block text-3xl mb-2">🏠</span>
              <span className="text-sm font-bold">Home Collect</span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center w-40">
              <span className="block text-3xl mb-2">📊</span>
              <span className="text-sm font-bold">Digital Reports</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA & CONTACT FORM */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-blue-950">
              Ready to Start Your Project?
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4 mb-4 rounded-full"></div>
            <p className="text-gray-600">
              Book a consultation, schedule a health camp, or get a project
              report.
            </p>
          </div>

          <form
            action="YOUR_FORMSPREE_LINK_HERE"
            method="POST"
            className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500 outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500 outline-none"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500 outline-none"
                  placeholder="+91 XXXX XXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Required
                </label>
                <select
                  name="service"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500 outline-none bg-white"
                >
                  <option>Corporate Health Camp</option>
                  <option>Start a Diagnostic Lab</option>
                  <option>Hospital Setup / Compliance</option>
                  <option>Book Health Tests</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                placeholder="Tell us about your requirements..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white font-bold py-4 rounded-md hover:bg-blue-800 transition-all duration-300 text-lg uppercase tracking-wide shadow-lg hover:-translate-y-1"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
