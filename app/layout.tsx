import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infinite Medi Health | Complete Healthcare Solutions",
  description: "End-to-end healthcare, compliance, and infrastructure solutions through a single integrated platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-24">
      <body className={inter.className}>
        
        {/* ADVANCED GLASSMORPHISM NAVBAR */}
        <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-100 text-blue-950 w-full sticky top-0 z-50 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              
              {/* Perfectly Aligned Logo Area */}
              <a href="/" className="flex-shrink-0 flex items-center gap-3 group">
                <img src="/imh.png" alt="Infinite Medi Health Logo" className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                <div className="hidden sm:flex flex-col justify-center">
                  <span className="font-extrabold text-xl tracking-tight leading-none">INFINITE MEDI</span>
                  <span className="font-extrabold text-xl tracking-tight text-emerald-500 leading-none mt-0.5 group-hover:text-emerald-400 transition-colors duration-300">HEALTH</span>
                </div>
              </a>
              
              {/* Menu Links with Underline Animations */}
              <div className="hidden lg:flex space-x-8 items-center">
                {[
                  { name: 'Home', link: '/' },
                  { name: 'Solutions', link: '#smart-entry' },
                  { name: 'Setup Business', link: '#high-ticket' },
                  { name: 'Our Process', link: '#process' },
                  { name: 'Diagnostic Kart', link: '#diagnostic-kart' }
                ].map((item) => (
                  <a key={item.name} href={item.link} className="relative font-bold text-xs uppercase tracking-widest text-gray-600 hover:text-emerald-600 transition-colors duration-300 group">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
                
                {/* Glowing CTA Button */}
                <a href="#contact" className="ml-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold py-2.5 px-6 rounded-full hover:from-emerald-500 hover:to-teal-400 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] hover:-translate-y-0.5 text-xs uppercase tracking-widest">
                  Book Consultation
                </a>
              </div>
              
            </div>
          </div>
        </nav>

        {children}

        {/* ALIGNED FOOTER */}
        <footer className="bg-slate-900 text-white py-16 border-t-4 border-emerald-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 relative z-10">
            <div>
              <p className="text-2xl font-extrabold mb-4 tracking-tight">INFINITE MEDI <span className="text-emerald-400">HEALTH</span></p>
              <p className="text-slate-400 text-sm leading-relaxed pr-8">
                Precision Diagnostics. Functional Insights. Preventive Outcomes. Delivering next-generation, technology-driven healthcare solutions.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold mb-6 text-slate-300 uppercase tracking-widest border-b border-slate-700 pb-2 inline-block">Contact Support</h3>
              <ul className="space-y-3">
                <li className="text-slate-400 text-sm flex items-center gap-3 hover:text-emerald-400 transition-colors cursor-pointer"><span className="text-emerald-500">📞</span> +91 73865 14350</li>
                <li className="text-slate-400 text-sm flex items-center gap-3 hover:text-emerald-400 transition-colors cursor-pointer"><span className="text-emerald-500">📞</span> +91 95151 14350</li>
                <li className="text-slate-400 text-sm flex items-center gap-3 hover:text-emerald-400 transition-colors cursor-pointer"><span className="text-emerald-500">✉️</span> info@infinitemedihealth.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold mb-6 text-slate-300 uppercase tracking-widest border-b border-slate-700 pb-2 inline-block">Headquarters</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex items-start gap-3">
                <span className="text-emerald-500 mt-0.5">📍</span>
                <span>Plot No-44, 1st floor, Rainbow Meadows,<br/>Road no-3, Kista Reddy Pet,<br/>Hyderabad, Telangana - 502319</span>
              </p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800 pt-8 text-center relative z-10">
            <p className="text-slate-500 text-xs tracking-wider">© 2026 Infinite Medi Health. All Rights Reserved.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}