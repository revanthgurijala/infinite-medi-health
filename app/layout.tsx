import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infinite Medi Health | Complete Healthcare Solutions",
  description:
    "End-to-end healthcare, compliance, and infrastructure solutions through a single integrated platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-24">
      <body className={inter.className}>
        {/* UPDATED NAVIGATION BAR */}
        <nav className="bg-white text-blue-950 shadow-md w-full sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-24 items-center">
              <div className="flex-shrink-0 flex items-center gap-3">
                <img
                  src="/brand.png"
                  alt="Infinite Medi Health Logo"
                  className="h-16 w-auto object-contain"
                />
                <div className="hidden sm:block">
                  <span className="font-extrabold text-2xl tracking-tight">
                    INFINITE MEDI{" "}
                  </span>
                  <span className="font-extrabold text-2xl tracking-tight text-emerald-600">
                    HEALTH
                  </span>
                </div>
              </div>

              {/* Updated Menu Links from Web Flow Doc */}
              <div className="hidden lg:flex space-x-6 items-center">
                <a
                  href="/"
                  className="hover:text-emerald-600 transition font-bold text-xs uppercase tracking-wide"
                >
                  Home
                </a>
                <a
                  href="#smart-entry"
                  className="hover:text-emerald-600 transition font-bold text-xs uppercase tracking-wide"
                >
                  Solutions
                </a>
                <a
                  href="#high-ticket"
                  className="hover:text-emerald-600 transition font-bold text-xs uppercase tracking-wide"
                >
                  Setup Business
                </a>
                <a
                  href="#process"
                  className="hover:text-emerald-600 transition font-bold text-xs uppercase tracking-wide"
                >
                  Our Process
                </a>
                <a
                  href="#diagnostic-kart"
                  className="hover:text-blue-600 transition font-bold text-xs uppercase tracking-wide"
                >
                  Diagnostic Kart
                </a>

                <a
                  href="#contact"
                  className="ml-4 bg-emerald-600 text-white font-bold py-2 px-5 rounded-md hover:bg-emerald-500 transition shadow-md text-sm uppercase tracking-wide"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        </nav>

        {children}

        {/* FOOTER */}
        <footer className="bg-blue-950 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div>
              <p className="text-2xl font-extrabold mb-4">
                INFINITE MEDI <span className="text-emerald-400">HEALTH</span>
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Precision Diagnostics. Functional Insights. Preventive Outcomes.
                Delivering next-generation healthcare solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wider">
                Contact Information
              </h3>
              <p className="text-gray-300 text-sm mb-2">📞 +91 73865 14350</p>
              <p className="text-gray-300 text-sm mb-2">📞 +91 95151 14350</p>
              <p className="text-gray-300 text-sm mb-2">
                ✉️ info@infinitemedihealth.com
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wider">
                Headquarters
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Plot No-44, 1st floor, Rainbow Meadows,
                <br />
                Road no-3, Kista Reddy Pet,
                <br />
                Hyderabad, Telangana - 502319
              </p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-blue-900 pt-8 text-center">
            <p className="text-gray-500 text-xs">
              © 2026 Infinite Medi Health. All Rights Reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
